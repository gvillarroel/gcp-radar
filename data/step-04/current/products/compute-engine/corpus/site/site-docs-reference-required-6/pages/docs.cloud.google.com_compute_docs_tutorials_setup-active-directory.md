---
title: "Deploy an Active Directory forest on Compute Engine \_|\_ Cloud Architecture\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/access/organization-policies
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory
  title: "Deploy an Active Directory forest on Compute Engine \_|\_ Cloud Architecture\
    \ Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Architecture Center
Send feedback
Deploy an Active Directory forest on Compute Engine
Stay organized with collections
Save and categorize content based on your preferences.
Last reviewed 2024-07-11 UTC
This document describes how to deploy an Active Directory forest on
Compute Engine
in a way that follows the best practices
described in Best practices for running Active Directory on Google Cloud .
This guide is intended for administrators and DevOps engineers. It assumes that
you have a solid understanding of Active Directory and basic knowledge of
Google Cloud networking and security.
Architecture
The deployment consists of two projects:
A host project that contains a Shared VPC
network, a private DNS forwarding zone ,
and firewall rules
for Active Directory.
A service project that contains two domain controllers that are deployed across two zones.
This architecture lets you do the following:
Deploy additional Windows workloads in separate projects, and let them use the
Shared VPC network and Active Directory forest.
Integrate the Active Directory forest with an existing on-premises
forest to implement the resource-forest pattern .
Note: This guide describes how to deploy an Active Directory forest for which
you manage domain controllers yourself. Consider using Managed AD to deploy a
fully-managed Active Directory forest unless some of your requirements cannot
be accommodated by using Managed AD.
Before you begin
To follow the instructions in this guide, make sure you have the following:
Subnet CIDR ranges for two subnets:
Domain controllers subnet . This subnet contains the domain controllers.
Using a dedicated subnet for domain controllers helps you distinguish
domain controller traffic from other server traffic when you manage firewall
rules or analyzing network logs.
We recommend a subnet CIDR range that's sized /28 or /29 .
Resource subnet . This subnet contains servers and administrative
workstations. Use a subnet CIDR range that's large enough to accommodate
all the servers that you plan to deploy.
Make sure that your subnets don't overlap with any on-premises subnets, and allow
sufficient room for growth.
A DNS domain name and a NetBIOS domain name for the Active Directory forest
root domain. For more information about choosing a name, see
Microsoft naming conventions .
Deploy a shared network
In this section, you create a new project and use it to deploy a Shared VPC
network. Later, you'll use this network to deploy the Active Directory domain
controllers.
Create a project
You now create a new project and use it to deploy a Shared VPC
network.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine and Cloud DNS APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To get the permissions that
you need to deploy a shared network,
ask your administrator to grant you the
following IAM roles on the project or parent folder:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Security Admin ( roles/compute.securityAdmin )
Compute Shared VPC Admin ( roles/compute.xpnAdmin )
DNS Administrator ( roles/dns.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Delete the default VPC
By default, Compute Engine creates a default network in each new project
that you create. This network is configured in
auto mode ,
which means a subnet is pre-allocated for each
region
and is automatically assigned a CIDR range.
In this section, you replace this VPC network with a
custom mode
network that contains two subnets and that uses custom CIDR ranges.
In the Google Cloud console ,
open Cloud Shell .
Activate Cloud Shell
Launch PowerShell:
pwsh
Configure the gcloud CLI to use the new project:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the ID of your project.
Delete all firewall rules that are associated with the default VPC:
$ProjectId = gcloud config get-value core/project
& gcloud compute firewall-rules list `
--filter "network=default" `
--format "value(name)" |
% { gcloud compute firewall-rules delete --quiet $_ --project $ProjectId }
Delete the default VPC:
& gcloud compute networks list --format "value(name)" |
% { gcloud compute networks delete $_ --quiet }
Create a custom mode VPC network
You now create a custom mode
VPC network in the your VPC host project.
In PowerShell, initialize the following variables:
$VpcName = " VPC_NAME "
$Region = " REGION "
$SubnetRangeDomainControllers = " DC_CIDR "
$SubnetRangeResources = " RESOURCES_CIDR "
Replace the following:
VPC_NAME : the name of the VPC.
REGION : the region to deploy the Active Directory
domain controllers in.
DC_CIDR : the subnet range to use for the domain controllers subnet.
RESOURCES_CIDR : the subnet range to use for the resource subnet.
Example:
$VpcName = "ad"
$Region = "us-central1"
$SubnetRangeDomainControllers = "10.0.0.0/28"
$SubnetRangeResources = "10.0.1.0/24"
Create the VPC and configure it to be used as a
Shared VPC
network:
$ProjectId = gcloud config get-value core/project
& gcloud compute networks create $VpcName --subnet-mode custom
& gcloud compute shared-vpc enable $ProjectId
Create the subnets and enable Private Google Access
so that Windows can activate
without internet access.
& gcloud compute networks subnets create domain-controllers `
--network $VpcName `
--range $SubnetRangeDomainControllers `
--region $Region `
--enable-private-ip-google-access
& gcloud compute networks subnets create resources `
--network $VpcName `
--range $SubnetRangeResources `
--region $Region `
--enable-private-ip-google-access
Deploy subnets and firewall rules
You now create firewall rules to allow Active Directory communication within the VPC.
Allow RDP connections to all VM instances through Cloud IAP TCP forwarding :
& gcloud compute firewall-rules create allow-rdp-ingress-from-iap `
--direction INGRESS `
--action allow `
--rules tcp:3389 `
--enable-logging `
--source-ranges 35.235.240.0/20 `
--network $VpcName `
--priority 10000
Allow DNS queries from Cloud DNS to domain controllers.
& gcloud compute firewall-rules create allow-dns-ingress-from-clouddns `
--direction INGRESS `
--action=allow `
--rules udp:53,tcp:53 `
--enable-logging `
--source-ranges 35.199.192.0/19 `
--target-tags ad-domaincontroller `
--network $VpcName `
--priority 10000
This firewall rule is required in order for the private DNS forwarding zone to work.
Allow Active Directory replication between domain controllers:
& gcloud compute firewall-rules create allow-replication-between-addc `
--direction INGRESS `
--action allow `
--rules "icmp,tcp:53,udp:53,tcp:88,udp:88,udp:123,tcp:135,tcp:389,udp:389,tcp:445,udp:445,tcp:49152-65535" `
--enable-logging `
--source-tags ad-domaincontroller `
--target-tags ad-domaincontroller `
--network $VpcName `
--priority 10000
Allow Active Directory logons from VMs that are in the resources subnet to
domain controllers:
& gcloud compute firewall-rules create allow-logon-ingress-to-addc `
--direction INGRESS `
--action allow `
--rules "icmp,tcp:53,udp:53,tcp:88,udp:88,udp:123,tcp:135,tcp:389,udp:389,tcp:445,udp:445,tcp:464,udp:464,tcp:3268,udp:3268,tcp:9389,tcp:49152-65535" `
--enable-logging `
--source-ranges $SubnetRangeResources `
--target-tags ad-domaincontroller `
--network $VpcName `
--priority 10000
If you plan to configure Secure LDAP, allow Secure LDAP connections from VMs
that are in the resources subnet to domain controllers:
& gcloud compute firewall-rules create allow-ldaps-ingress-to-addc `
--direction INGRESS `
--action allow `
--rules tcp:636 `
--enable-logging `
--source-ranges $SubnetRangeResources `
--target-tags ad-domaincontroller `
--network $VpcName `
--priority 10000
You only need this firewall rule if you plan to configure Secure LDAP.
(Optional) Create a firewall rule that logs all failed access attempts. The
logs can be useful for diagnosing connectivity problems, but they might produce
a significant volume of log data.
& gcloud compute firewall-rules create deny-ingress-from-all `
--direction INGRESS `
--action deny `
--rules tcp:0-65535,udp:0-65535 `
--enable-logging `
--source-ranges 0.0.0.0/0 `
--network $VpcName `
--priority 65000
Deploy the Active Directory forest
In this section, you create a new service project and attach it to the Shared VPC
host project that you created previously. You then use the service project to
deploy a new Active Directory forest with two domain controllers.
Create a project
You now create a new project and use it to deploy the Active Directory domain
controller VMs.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine and Secret Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To get the permissions that
you need to deploy the Active Directory forest,
ask your administrator to grant you the
following IAM roles on the project:
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Secret Manager Admin ( roles/secretmanager.admin )
IAP-secured Tunnel User ( roles/iap.tunnelResourceAccessor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Prepare the configuration
The next step is to prepare the configuration for the Active Directory deployment.
If you previously closed the PowerShell session, open
Cloud Shell .
Activate Cloud Shell
Launch PowerShell:
pwsh
Configure the gcloud CLI to use the new project:
gcloud config set project DC_PROJECT_ID
Replace DC_PROJECT_ID with the ID of your project.
Use PowerShell to create the following variables:
$AdDnsDomain = " DNS_DOMAIN "
$AdNetbiosDomain = " NETBIOS_DOMAIN "
$VpcProjectId = " VPCHOST_PROJECT_ID "
$VpcName = " VPC_NAME "
$Region = " REGION "
$Zones = " REGION -a", " REGION -b"
Replace the following:
DNS_DOMAIN : the forest root domain name of the
Active Directory forest, for example cloud.example.com .
NETBIOS_DOMAIN : the NetBIOS domain name for the
forest root domain, for example CLOUD .
VPCHOST_PROJECT_ID : the project ID of the
VPC host project that you created previously.
VPC_NAME : Name of the Shared VPC network that you created previously.
REGION : Region to deploy the Active Directory
domain controllers in. Notice that the names of the zones are based on the
names of the region that you specify. You can extend the VPC and your domain to cover
additional regions at any time.
Example:
$AdDnsDomain = "cloud.example.com"
$AdNetbiosDomain = "CLOUD"
$VpcProjectId = "vpc-project-123"
$VpcName = "ad"
$Region = "us-west1"
$Zones = "us-west1-a", "us-west1-b"
Create a private DNS forwarding zone
You now reserve two static IP addresses for your domain controllers and create a
private DNS forwarding zone
that forwards all DNS queries for the Active Directory domain to these IP addresses.
Attach the project to the Shared VPC network:
$ProjectId = gcloud config get-value core/project
& gcloud compute shared-vpc associated-projects add $ProjectId --host-project $VpcProjectId
Reserve two static internal IP addresses in the domain controllers subnet:
$AddressOfDc1 = gcloud compute addresses create dc-1 `
--region $Region `
--subnet "projects/$VpcProjectId/regions/$Region/subnetworks/domain-controllers" `
--format value`(address`)
$AddressOfDc2 = gcloud compute addresses create dc-2 `
--region $Region `
--subnet "projects/$VpcProjectId/regions/$Region/subnetworks/domain-controllers" `
--format value`(address`)
Create a Cloud DNS private forwarding zone
in the VPC host project and configure the zone to forward DNS queries to the
two reserved IP addresses:
& gcloud dns managed-zones create $AdDnsDomain.Replace(".", "-") `
--project $VpcProjectId `
--dns-name $AdDnsDomain `
--description "Active Directory forwarding zone" `
--networks $VpcName `
--visibility private `
--forwarding-targets "$AddressOfDc1,$AddressOfDc2"
Create a DSRM password
You now define the Directory Service Restore Mode (DSRM)
password and store it in Secret Manager . You
then grant the domain controller VMs temporary access to this secret so
that they can use it to deploy the Active Directory forest.
Generate a random password and store it in a Secret Manager secret:
# Generate a random password.
$DsrmPassword = [Guid]::NewGuid().ToString()+"-"+[Guid]::NewGuid().ToString()
$TempFile = New-TemporaryFile
Set-Content $TempFile "$DsrmPassword" -NoNewLine
& gcloud secrets create ad-password --data-file $TempFile
Remove-Item $TempFile
Create the service account for the domain controller VM instances:
$DcServiceAccount = gcloud iam service-accounts create ad-domaincontroller `
--display-name "AD Domain Controller" `
--format "value(email)"
Grant the service account permission to read the secret for the next hour:
$Expiry = [DateTime]::UtcNow.AddHours(1).ToString("o")
& gcloud secrets add-iam-policy-binding ad-password `
--member=serviceAccount:$($DcServiceAccount) `
--role=roles/secretmanager.secretAccessor `
--condition="title=Expires after 1h,expression=request.time < timestamp('$Expiry')"
Deploy domain controllers
You now deploy two VM instances and create a new Active Directory forest and
domain. To minimize the number of manual steps, you use
startup scripts .
In PowerShell, run the following command to generate a startup script:
'
$ErrorActionPreference = "Stop"
#
# Only run the script if the VM is not a domain controller already.
#
if ((Get-CimInstance -ClassName Win32_OperatingSystem).ProductType -eq 2) {
exit
}
#
# Read configuration from metadata.
#
Import-Module "${Env:ProgramFiles}\Google\Compute Engine\sysprep\gce_base.psm1"
$ActiveDirectoryDnsDomain = Get-MetaData -Property "attributes/ActiveDirectoryDnsDomain" -instance_only
$ActiveDirectoryNetbiosDomain = Get-MetaData -Property "attributes/ActiveDirectoryNetbiosDomain" -instance_only
$ActiveDirectoryFirstDc = Get-MetaData -Property "attributes/ActiveDirectoryFirstDc" -instance_only
$ProjectId = Get-MetaData -Property "project-id" -project_only
$Hostname = Get-MetaData -Property "hostname" -instance_only
$AccessToken = (Get-MetaData -Property "service-accounts/default/token" | ConvertFrom-Json).access_token
#
# Read the DSRM password from secret manager.
#
$Secret = (Invoke-RestMethod `
-Headers @{
"Metadata-Flavor" = "Google";
"x-goog-user-project" = $ProjectId;
"Authorization" = "Bearer $AccessToken"} `
-Uri "https://secretmanager.googleapis.com/v1/projects/$ProjectId/secrets/ad-password/versions/latest:access")
$DsrmPassword = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($Secret.payload.data))
$DsrmPassword = ConvertTo-SecureString -AsPlainText $DsrmPassword -force
#
# Promote.
#
Write-Host "Setting administrator password..."
Set-LocalUser -Name Administrator -Password $DsrmPassword
if ($ActiveDirectoryFirstDc -eq $env:COMPUTERNAME) {
Write-Host "Creating a new forest $ActiveDirectoryDnsDomain ($ActiveDirectoryNetbiosDomain)..."
Install-ADDSForest `
-DomainName $ActiveDirectoryDnsDomain `
-DomainNetbiosName $ActiveDirectoryNetbiosDomain `
-SafeModeAdministratorPassword $DsrmPassword `
-DomainMode Win2008R2 `
-ForestMode Win2008R2 `
-InstallDns `
-CreateDnsDelegation:$False `
-NoRebootOnCompletion:$True `
-Confirm:$false
}
else {
do {
Write-Host "Waiting for domain to become available..."
Start-Sleep -s 60
& ipconfig /flushdns | Out-Null
& nltest /dsgetdc:$ActiveDirectoryDnsDomain | Out-Null
} while ($LASTEXITCODE -ne 0)
Write-Host "Adding DC to $ActiveDirectoryDnsDomain ($ActiveDirectoryNetbiosDomain)..."
Install-ADDSDomainController `
-DomainName $ActiveDirectoryDnsDomain `
-SafeModeAdministratorPassword $DsrmPassword `
-InstallDns `
-Credential (New-Object System.Management.Automation.PSCredential ("Administrator@$ActiveDirectoryDnsDomain", $DsrmPassword)) `
-NoRebootOnCompletion:$true `
-Confirm:$false
}
#
# Configure DNS.
#
Write-Host "Configuring DNS settings..."
Get-Netadapter| Disable-NetAdapterBinding -ComponentID ms_tcpip6
Set-DnsClientServerAddress `
-InterfaceIndex (Get-NetAdapter -Name Ethernet).InterfaceIndex `
-ServerAddresses 127.0.0.1
#
# Enable LSA protection.
#
New-ItemProperty `
-Path "HKLM:\SYSTEM\CurrentControlSet\Control\Lsa" `
-Name "RunAsPPL" `
-Value 1 `
-PropertyType DWord
Write-Host "Restarting to apply all settings..."
Restart-Computer
' | Out-File dc-startup.ps1 -Encoding ASCII
The script does the following:
Read the DSRM password from Secret Manager.
Promote the VM to a domain controller.
Configure DNS settings so that each domain controller
uses the loopback address
as a DNS server.
Disable IPv6.
Enable LSA protection .
Create a VM instance for the first domain controller:
$Subnet = "projects/$VpcProjectId/regions/$Region/subnetworks/domain-controllers"
$Metadata = `
"ActiveDirectoryDnsDomain=$AdDnsDomain",
"ActiveDirectoryNetbiosDomain=$AdNetbiosDomain",
"ActiveDirectoryFirstDc=dc-1",
"sysprep-specialize-script-ps1=Install-WindowsFeature AD-Domain-Services; Install-WindowsFeature DNS",
"disable-account-manager=true" -join ","
& gcloud compute instances create dc-1 `
--image-family windows-2022 `
--image-project windows-cloud `
--machine-type n2-standard-8 `
--tags ad-domaincontroller `
--metadata "$Metadata" `
--metadata-from-file windows-startup-script-ps1=dc-startup.ps1 `
--no-address `
--network-interface "no-address,private-network-ip=$AddressOfDc1,subnet=$Subnet" `
--service-account $DcServiceAccount `
--scopes cloud-platform `
--zone $Zones[0] `
--shielded-integrity-monitoring `
--shielded-secure-boot `
--shielded-vtpm `
--deletion-protection
This command does the following:
Create a shielded
Windows Server 2022 VM.
Assign the ad-domaincontroller service account to the VM so that it
can access the DSRM password.
Configure the guest agent to disable the account manager. For more
information about configuring the guest agent, see
Enabling and disabling Windows instance features .
Let the VM install the Windows features AD-Domain-Services and DNS
during the sysprep specialize phase.
Let the VM run the startup script that you created previously.
Create another VM instance for the second domain controller and place it
in a different zone:
& gcloud compute instances create dc-2 `
--image-family windows-2022 `
--image-project windows-cloud `
--machine-type n2-standard-8 `
--tags ad-domaincontroller `
--metadata "$Metadata" `
--metadata-from-file windows-startup-script-ps1=dc-startup.ps1 `
--no-address `
--network-interface "no-address,private-network-ip=$AddressOfDc2,subnet=$Subnet" `
--service-account $DcServiceAccount `
--scopes cloud-platform `
--zone $Zones[1] `
--shielded-integrity-monitoring `
--shielded-secure-boot `
--shielded-vtpm `
--deletion-protection
Monitor the initialization process of the first domain controller by viewing
its serial port output:
& gcloud compute instances tail-serial-port-output dc-1 --zone $Zones[0]
Wait about 10 minutes until you see the message Restarting to apply all settings... ,
then press Ctrl+C .
Monitor the initialization process of the second domain controller by viewing
its serial port output:
& gcloud compute instances tail-serial-port-output dc-2 --zone $Zones[1]
Wait about 10 minutes until you see the message Restarting to apply all settings... ,
then press Ctrl+C .
The Active Directory forest and domain are now ready to use.
Connect to a domain controller
You can now customize the Active Directory forest by connecting to one of the
domain controllers.
In PowerShell, access the password for the Administrator user:
gcloud secrets versions access latest --secret ad-password
Connect to dc-1 by using RDP
and log on as the Administrator user.
Because the VM instance doesn't have a public IP addresses, you must connect
through Identity-Aware Proxy TCP forwarding .
What's next
Learn more about
patterns for using Active Directory in a hybrid environment .
Configure Active Directory for VMs to automatically join a domain .
Learn more about using Active Directory across firewalls .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-11 UTC."],[],[]]
