---
title: "Deploy AD FS on a Managed Microsoft AD domain \_|\_ Managed Service for Microsoft\
  \ Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/deploy-adfs
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/deploy-adfs
  title: "Deploy AD FS on a Managed Microsoft AD domain \_|\_ Managed Service for\
    \ Microsoft Active Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Deploy AD FS on a Managed Microsoft AD domain
Stay organized with collections
Save and categorize content based on your preferences.
This guide describes how you can deploy Microsoft Active Directory Federation Services
(AD FS) for Windows Server 2019 in a Managed Service for Microsoft Active Directory domain.
The following diagram illustrates the deployment:
Users communicate with an HTTPS load balancer that
uses a Google-managed certificate
to terminate SSL connections. The load balancer forwards connections to a
VM instance that runs Microsoft AD FS for Windows Server 2019 and that is
joined to Managed Microsoft AD domain. Communication between the load balancer
and the VM instance is secured by using a self-signed SSL certificate.
The deployment uses a single AD FS instance and the Windows Internal Database,
which makes it suitable for small environments. For environments with increased
reliability or security demands, consider deploying multiple AD FS instances
in a farm configuration
and deploying federation proxies .
Note: Managed Microsoft AD doesn't offer AD FS as a managed service.
Before you begin
Create a Managed Microsoft AD domain .
Retrieve the delegated administrator account credentials
of the Managed Microsoft AD domain. By default, the delegated administrator
account is named setupadmin .
Create a public DNS zone . You use this zone to create a public DNS name for AD FS.
Make sure that you're familiar with the requirements for deploying AD FS .
Preparing the project and network
You need to prepare your Google Cloud project and VPC network for the deployment of AD FS.
Create a VM instance
Create a service account and VM instance to run AD FS:
In the Google Cloud console ,
open Cloud Shell .
Activate Cloud Shell
Set your default project ID :
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the ID of your Google Cloud project.
Set your default region and zone:
gcloud config set compute/region REGION
gcloud config set compute/zone ZONE
Replace the following:
REGION : The ID of the region you want to deploy in.
ZONE : The ID of the zone you want to deploy in.
Create a service account:
gcloud iam service-accounts create SA_NAME
Replace SA_NAME with the name of the service account.
Create a VM instance that runs Windows Server 2019 and uses a
specialize script
to automatically install the AD FS server role :
gcloud compute instances create VM_NAME \
--machine-type n2-standard-8 \
--image-family windows-2019 \
--image-project windows-cloud \
--boot-disk-size 50 \
--boot-disk-type pd-ssd \
--subnet SUBNET_NAME \
--service-account SA_NAME @$(gcloud config get-value core/project).iam.gserviceaccount.com \
--metadata sysprep-specialize-script-ps1="Add-WindowsFeature ADFS-Federation -IncludeManagementTools;Add-WindowsFeature RSAT-AD-PowerShell;Add-WindowsFeature RSAT-ADDS-Tools"
Replace the following:
VM_NAME : The name of the VM instance.
SUBNET_NAME : The name of the subnet to deploy AD FS in.
SA_NAME : The name of the service account.
Note: Depending on your performance requirements ,
consider using a machine type larger than n2-standard-8 for AD FS.
To configure and join the VM instance to your Active Directory domain,
complete the following steps:
Monitor the initialization process of the VM by viewing its serial port output:
gcloud compute instances tail-serial-port-output VM_NAME
Wait about 3 minutes until you see the output Instance setup finished ,
then press Ctrl+C . At this point, the VM instance is ready to be used.
Create a username and password
for the VM instance.
Connect to the VM by using Remote Desktop
and log in using the username and password created in the previous step.
Right-click the Start button (or press Win+X ) and click Windows PowerShell (Admin) .
Confirm the elevation prompt by clicking Yes .
Join the computer to your Active Directory domain and restart:
Add-Computer -Domain DOMAIN -Restart
Replace DOMAIN with the DNS name of your Active Directory domain.
Wait for approximately 1 minute for the restart to complete.
Create a load balancer
You need to create a load balancer that lets users access AD FS by using a
single virtual IP address.
To associate the VM instance that runs AD FS with the load balancer, you first create
an unmanaged instance group ,
and then assign this instance group to the load balancer:
Return to your existing Cloud Shell session.
Create the unmanaged instance group:
gcloud compute instance-groups unmanaged create INSTANCE_GROUP_NAME &&
gcloud compute instance-groups set-named-ports INSTANCE_GROUP_NAME --named-ports=http:443
Replace INSTANCE_GROUP_NAME with the name of the
group you want to create.
Add the existing VM instance to the instance group:
gcloud compute instance-groups unmanaged add-instances INSTANCE_GROUP_NAME --instances VM_NAME
Create a health check that probes the HTTPS port of AD FS:
gcloud compute health-checks create tcp HEALTH_CHECK_NAME --port 443
Replace HEALTH_CHECK_NAME with a name for the health check.
Create a load balancer backend service that uses the HTTPS health check
and instance group that you created previously:
gcloud compute backend-services create BACKEND_SERVICE_NAME \
--health-checks HEALTH_CHECK_NAME \
--port-name http \
--protocol HTTPS \
--global && \
gcloud compute backend-services add-backend BACKEND_SERVICE_NAME \
--instance-group INSTANCE_GROUP_NAME \
--global \
--instance-group-zone $(gcloud config get-value compute/zone)
Replace BACKEND_SERVICE_NAME with a name for the backend service.
Reserve a static external IP address for the load balancer:
gcloud compute addresses create ADDRESS_NAME --global
Replace ADDRESS_NAME with the name that you want to associate with this address.
Create a managed SSL certificate
for the load balancer:
gcloud compute ssl-certificates create CERTIFICATE_NAME \
--domains PUBLIC_FQDN \
--global
Replace the following:
CERTIFICATE_NAME : The name for the managed SSL certificate.
PUBLIC_FQDN : The public, fully qualified domain name
(FQDN) that you want to use for AD FS. For example, login.example.com .
Note: The FQDN of AD FS is unrelated to the Active Directory
domain name.
Create a load balancer frontend that uses the external IP address
and forwards traffic to the backend service:
gcloud compute url-maps create URL_MAP_NAME \
--default-service BACKEND_SERVICE_NAME && \
gcloud compute target-https-proxies create PROXY_NAME \
--ssl-certificates CERTIFICATE_NAME \
--url-map URL_MAP_NAME && \
gcloud compute forwarding-rules create FORWARDING_RULE_NAME \
--global \
--address ADDRESS_NAME \
--target-https-proxy PROXY_NAME \
--ports 443
Replace the following:
URL_MAP_NAME : The name of the URL map for the load balancer.
PROXY_NAME : The name of the target proxy for the load balancer.
FORWARDING_RULE_NAME : The name of the forwarding rule for the load balancer.
Note: The load balancer won't be in a healthy state until you've completed
deploying AD FS.
Create a firewall rule to allow traffic from the load balancer to the
VM instance that runs AD FS:
gcloud compute firewall-rules create FIREWALL_RULE_NAME \
--allow tcp:443 \
--network VPC_NAME \
--source-ranges 130.211.0.0/22,35.191.0.0/16 \
--target-service-accounts SA_NAME @$(gcloud config get-value core/project).iam.gserviceaccount.com
Replace the following:
FIREWALL_RULE_NAME : The name of the firewall rule.
VPC_NAME : The name of your VPC network.
SA_NAME : The name of the service account.
The source ranges are the IP ranges for the internal load balancer. For more
information, see Configure a firewall rule .
Look up the IP address of the load balancer:
gcloud compute addresses describe ADDRESS_NAME \
--global \
--format=value\(address\)
Create a DNS A record in your public DNS zone that points to the
IP address of the load balancer. The fully qualified name of the DNS
record must match the name that you used for the SSL certificate.
Note: It can take multiple minutes or hours for the new DNS record to propagate.
During this time, the managed SSL certificate can't be used yet. For details,
see Troubleshooting Google-managed certificates .
Deploying AD FS
You need to deploy the AD FS server role on the VM instance. Because
you don't have Domain Admins rights in a Managed Microsoft AD domain, you
can't use Server Manager to perform the installation and must use
PowerShell instead.
Create a service user
You need to create a user account in Active Directory for the AD FS service:
Connect to the VM instance
by using Remote Desktop
and log in using your delegated administrator credentials.
Right-click the Start button (or press Win+X ) and click Windows PowerShell (Admin) .
Set a random password for the AD FS service account:
$AdfsCredential = Get-Credential -UserName USER -Message ' PASSWORD '
Replace the following:
USER : The name of an Active Directory user.
PASSWORD : The password of the Active Directory user.
Create an Active Directory user:
$CloudOuPath = "OU=Cloud," + (Get-ADDomain).DistinguishedName
$AdfsUser = New-ADuser `
-Name USER `
-DisplayName 'AD FS service account' `
-AccountPassword $AdfsCredential.Password `
-Path "$CloudOuPath" `
-PasswordNeverExpires $True `
-PassThru | Enable-ADAccount -PassThru
Add the user to the local Administrators group:
Add-LocalGroupMember `
-Group "Administrators" `
-Member "$env:userdomain\ USER "
Assign a service principal name:
setspn -a http/ PUBLIC_FQDN USER
Replace PUBLIC_FQDN with the public, fully qualified domain name
of AD FS.
Create an empty container in Active Directory. You need to use this container
later when you install AD FS:
New-ADObject `
-Type Container `
-Name "ADFS Data" `
-Path $CloudOuPath
Grant the AD FS user full control on the container:
dsacls.exe "CN=ADFS Data,$CloudOuPath" /G $env:userdomain\ USER :GA /I:T
Install AD FS
You can install AD FS on the VM instance:
Start a PowerShell session as the ADFS user:
runas /u:$env:userdomain\ USER powershell
The new PowerShell session runs as the AD FS user, but without
elevated privileges.
In the new PowerShell session, start a second, elevated PowerShell session:
Start-Process PowerShell -Verb RunAs
You must run all subsequent steps in this new, elevated PowerShell session.
Create a self-signed SSL certificate that uses an RSA 2048 bit key and store
it in the computer certificate store:
$DnsName=" PUBLIC_FQDN "
$Certificate = New-SelfSignedCertificate `
-Subject $DnsName `
-KeyAlgorithm RSA `
-KeyLength 2048 `
-KeyExportPolicy NonExportable `
-KeyUsage DigitalSignature, KeyEncipherment `
-Provider 'Microsoft Platform Crypto Provider' `
-NotAfter (Get-Date).AddDays(365) `
-Type SSLServerAuthentication `
-CertStoreLocation 'Cert:\LocalMachine\My' `
-DnsName $DnsName
Replace PUBLIC_FQDN with the public, fully qualified domain name
of AD FS.
Create another RSA 2048 bit certificate that AD FS uses as
token signing certificate:
$SigningCertificate = New-SelfSignedCertificate `
-Subject "ADFS Signing" `
-KeyAlgorithm RSA `
-KeyLength 2048 `
-KeyExportPolicy NonExportable `
-KeyUsage DigitalSignature, KeyEncipherment `
-Provider 'Microsoft RSA SChannel Cryptographic Provider' `
-NotAfter (Get-Date).AddDays(365) `
-DnsName $DnsName `
-CertStoreLocation 'Cert:\LocalMachine\My'
Note: This command uses the Crypto API-based Microsoft RSA SChannel Cryptographic Provider
provider because AD FS doesn't support CNG-based certificates for token signing and encryption .
Create a Distributed Key Manager (DKM) container:
$CloudOuPath = "OU=Cloud," + (Get-ADDomain).DistinguishedName
$DkmContainer = New-ADObject `
-Name ((New-Guid).Guid) `
-Type Container `
-Path "CN=ADFS Data,$CloudOuPath" `
-PassThru
Re-enter the credentials for the AD FS user that you set previously:
$AdfsCredential = Get-Credential -UserName "$env:userdomain\ USER " -Message ' PASSWORD '
Install AD FS using the certificates and DKM container that you created
previously:
Install-ADFSFarm `
-CertificateThumbprint $Certificate.Thumbprint `
-SigningCertificateThumbprint $SigningCertificate.Thumbprint `
-DecryptionCertificateThumbprint $SigningCertificate.Thumbprint `
-FederationServiceName $DnsName `
-ServiceAccountCredential $AdfsCredential `
-OverwriteConfiguration `
-AdminConfiguration @{"DKMContainerDn"=$DkmContainer.DistinguishedName}
The command might show the following warning messages:
WARNING: A machine restart is required to complete ADFS service configuration. For more information, see:
https://go.microsoft.com/fwlink/?LinkId=798725
WARNING: The SSL certificate subject alternative names do not support host name ' PUBLIC_FQDN '.
Configuring certificate authentication binding on port '49443' and hostname ' PUBLIC_FQDN '.
WARNING: An error occurred during an attempt to set the SPN for the specified service account. Set the SPN for the
service account manually. For more information about setting the SPN of the service account manually, see the AD FS
Deployment Guide. Error message: An error occurred during an attempt to set the SPN for the specified service account.
You do not have sufficient privileges in the domain to set the SPN.
WARNING: The SSL certificate does not contain all UPN suffix values that exist in the enterprise. Users with UPN
suffix values not represented in the certificate will not be able to Workplace-Join their devices. For more
information, see http://go.microsoft.com/fwlink/?LinkId=311954.
You can ignore these warnings because you've already set the SPN and
aren't using certificate-based authentication.
If you're planning to use Integrated Windows Authentication (IWA) to
authenticate to AD FS, run the following command to disable token binding:
Set-ADFSProperties -ExtendedProtectionTokenCheck None
Restart-Service -Name adfssrv
Disabling token binding is necessary because you're deploying AD FS behind a
load balancer and the load balancer terminates TLS connections.
If you encounter any permission-related issues with these steps, contact
Google Cloud Support .
Configure TLS
When establishing connections to backends, the HTTPS load balancer
doesn't use the server name indication (SNI) extension . To let AD FS accept
connection without SNI, you must configure a certificate fallback:
In PowerShell, view the SSL server certificate bindings for AD FS:
netsh http show sslcert hostnameport= PUBLIC_FQDN :443
Replace PUBLIC_FQDN with the public, fully qualified
domain name of AD FS.
Configure a fallback certificate for the binding:
netsh http add sslcert ipport=0.0.0.0:443 certhash= CERTIFICATE_HASH "appid= APP_ID " "certstorename=MY"
Replace the following:
CERTIFICATE_HASH : The certificate hash shown in
the previous command.
APP_ID : The application ID shown in
the previous command, including curly braces.
Restart the computer to complete the installation:
Restart-Computer
Wait for approximately 1 minute for the restart to complete.
Testing AD FS
The AD FS service is deployed, but you still have to verify that the service
can be accessed using the HTTPS load balancer:
Return to the Cloud Shell session.
Verify that the SSL certificate is in ACTIVE state:
gcloud compute ssl-certificates describe CERTIFICATE_NAME \
--global \
--format="get(managed.status)"
If the certificate is in PROVISIONING state, then the DNS record
that you created for AD FS might require additional time to propagate.
For further details, see Troubleshooting Google-managed certificates .
On your local computer, open a browser and navigate to the following URL:
https:// PUBLIC_FQDN /adfs/ls?wa=wsignout1.0
Replace PUBLIC_FQDN with the public, fully
qualified domain name of AD FS
Verify that you see a message You have successfully signed out , indicating
that AD FS has been deployed successfully.
If you're planning to use Integrated Windows Authentication (IWA), verify that
you can obtain a Kerberos ticket for AD FS:
Connect to the VM instance or a different domain-joined VM
by using Remote Desktop
and log in using domain credentials.
Right-click the Start button (or press Win+X ) and click Windows PowerShell .
Use the klist
command to request a service ticket for AD FS:
klist get http/ PUBLIC_FQDN
Verify that the output includes a ticket for AD FS:
#1> Client: USER @ DOMAIN
Server: http/ PUBLIC_FQDN @ DOMAIN
KerbTicket Encryption Type: ...
AD FS is ready to be used. For details on using and configuring
the service, see AD FS Operations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
