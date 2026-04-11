---
title: "Deploy a cross-region Google-managed certificate with DNS authorization \_\
  |\_ Certificate Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/certificates
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg
  title: "Deploy a cross-region Google-managed certificate with DNS authorization\
    \ \_|\_ Certificate Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Guides
Send feedback
Deploy a cross-region Google-managed certificate with DNS authorization
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to use Certificate Manager to deploy a
global Google-managed certificate with DNS
authorization to a
cross-region internal Application Load Balancer.
If you want to deploy to global external load balancers or regional load
balancers, see the following:
Deploy a global Google-managed certificate with DNS authorization
Deploy a regional Google-managed certificate with DNS authorization
Objectives
This tutorial shows you how to complete the following tasks:
Create a Google-managed certificate issued by a publicly trusted certificate
authority with DNS authorization by using
Certificate Manager.
Deploy the certificate to a supported load balancer by using a target HTTPS
proxy.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Certificate Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Certificate Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create a public DNS zone
Required roles
Make sure that you have the following roles to complete the tasks in this tutorial:
Certificate Manager Owner ( roles/certificatemanager.owner )
Required to create and manage Certificate Manager resources.
Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) or Compute Network Admin ( roles/compute.networkAdmin )
Required to create and manage HTTPS target proxy.
DNS Administrator ( roles/dns.admin )
Required if you want to use Cloud DNS as your DNS solution.
For more information, see the following:
Roles and permissions for
Certificate Manager.
Compute Engine IAM roles and permissions
for Compute Engine.
Roles and permissions
for Cloud DNS.
Note: If you aren't assigned the permissions or roles, request the missing roles
from the Identity and Access Management (IAM) administrator who has the Project
IAM Admin role ( roles/resourcemanager.projectIamAdmin ).
Domain names
To create certificates, get the fully qualified domain names (FQDNs) of the
domains you own. If you don't have a domain, you can use Cloud Domains
to register a domain .
Create the load balancer
This tutorial assumes that you've already created and configured the load
balancer's backends, health checks, backend services, and URL maps. Make a note
of the URL map's name because you need it later in this tutorial.
If you haven't created a cross-region internal Application Load Balancer, see Set up a
cross-region internal Application Load Balancer with VM instance group
backends .
Create a Google-managed certificate with DNS authorization
Before you create the certificate, create a public DNS zone. Then, create a DNS
authorization and add the CNAME record to the target DNS zone.
Create a DNS authorization
A DNS authorization only covers a single domain name. You must create a separate
DNS authorization for each domain name that you want to use with the target
certificate.
If you're creating a
DNS authorization for a wildcard certificate, such as *.myorg.example.com ,
configure the DNS authorization for the parent domain—for example,
myorg.example.com .
Console
You can create a DNS authorization or attach an existing DNS
authorization when creating a certificate. For more information, see
Create a Google-managed certificate referencing the DNS authorization .
gcloud
You can create two types of DNS
authorizations: FIXED_RECORD or PER_PROJECT_RECORD . For more
information, see DNS authorization .
Note: Global Google-managed certificates use FIXED_RECORD as the
default DNS authorization type.
FIXED_RECORD DNS authorization
To create a FIXED_RECORD DNS authorization, use the following gcloud certificate-manager dns-authorizations create command :
gcloud certificate-manager dns-authorizations create AUTHORIZATION_NAME \
--domain=" DOMAIN_NAME " \
--type=[FIXED_RECORD]
Replace the following:
AUTHORIZATION_NAME : the name of the DNS authorization.
DOMAIN_NAME : the name of the target domain for which you are creating this DNS authorization. The domain name must be a fully qualified domain name, such as myorg.example.com .
After creating the FIXED_RECORD DNS authorization, verify it with the
gcloud certificate-manager dns-authorizations describe command :
gcloud certificate-manager dns-authorizations describe AUTHORIZATION_NAME
The output is similar to the following. In the output, find the
dnsResourceRecord section. Locate the CNAME record and add the record's
details ( data , name , and type ) to your DNS configuration .
createTime: '2022-01-14T13:35:00.258409106Z'
dnsResourceRecord:
data: 0e40fc77-a37d-4eb8-8fe1-eea2e18d12d9.4.authorize.certificatemanager.goog.
name: _acme-challenge.myorg.example.com.
type: CNAME
domain: myorg.example.com
name: projects/myProject/locations/global/dnsAuthorizations/myAuthorization
updateTime: '2022-01-14T13:35:01.571086137Z'
PER_PROJECT_RECORD DNS authorization
To create a PER_PROJECT_RECORD DNS authorization, use the following
gcloud certificate-manager dns-authorizations create command :
gcloud certificate-manager dns-authorizations create AUTHORIZATION_NAME \
--domain=" DOMAIN_NAME " \
--type=PER_PROJECT_RECORD
Replace the following:
AUTHORIZATION_NAME : the name of the DNS authorization.
DOMAIN_NAME : the name of the target domain for which you are creating this DNS authorization. The domain name must be a fully qualified domain name, such as myorg.example.com .
After creating the PER_PROJECT_RECORD DNS authorization, verify it with
the gcloud certificate-manager dns-authorizations describe command :
gcloud certificate-manager dns-authorizations describe AUTHORIZATION_NAME
The output is similar to the following. In the output, find the
dnsResourceRecord section. Locate the CNAME record and add the record's
details ( data , name , and type ) to your DNS configuration .
createTime: '2022-01-14T13:35:00.258409106Z'
dnsResourceRecord:
data: 0e40fc77-a37d-4eb8-8fe1-eea2e18d12d9.4.authorize.certificatemanager.goog.
name: _acme-challenge_ujmmovf2vn55tgye.myorg.example.com
type: CNAME
domain: myorg.example.com
name: projects/myProject/locations/global/dnsAuthorizations/myAuthorization
updateTime: '2022-01-14T13:35:01.571086137Z'
Note: For PER_PROJECT_RECORD DNS authorization,
Certificate Manager supports only the certificates issued by
Google Trust Services . Certificates issued by other
authorities, such as Let's Encrypt CA, aren't supported.
API
To create a DNS authorization, make a POST request to the dnsAuthorizations.create method:
POST /v1/projects/ PROJECT_ID /locations/global/dnsAuthorizations?dns_authorization_id= AUTHORIZATION_NAME
{
"domain": " DOMAIN_NAME ",
"type": "PER_PROJECT_RECORD" //optional
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
AUTHORIZATION_NAME : the name of the DNS authorization.
DOMAIN_NAME : the name of the target domain for which you are creating this DNS authorization.
The domain name must be a fully qualified domain name, such as myorg.example.com .
Create a Google-managed certificate referencing the DNS authorization
To create a Google-managed certificate that references the DNS authorization you
created in the previous steps, do the following:
Console
In the Google Cloud console, go to the Certificate Manager page.
Go to Certificate Manager
On the Certificates tab, click Add Certificate .
In the Certificate name field, enter a unique name for the certificate.
Optional: In the Description field, enter a description for the certificate. The description lets you identify the certificate.
For Location , select Global .
For Scope , select All-regions .
For Certificate type , select Create Google-managed certificate .
For Certificate Authority type , select Public .
In the Domain Names field, specify a comma-separated list of domain
names of the certificate. Each domain name must be a fully qualified
domain name, such as myorg.example.com . The domain name can also be a
wildcard domain name, such as *.example.com .
For Authorization type , select DNS authorization .
The page lists DNS authorizations of the domain names. If a domain name
doesn't have an associated DNS authorization, follow these steps to
create one:
Click Create missing DNS authorization .
In the DNS authorization name field, specify the name of the
DNS authorization.
The default DNS authorization type is FIXED_RECORD . To independently manage certificates across multiple projects, select the Per project
authorization checkbox.
Click Create DNS authorization .
In the Labels field, specify labels to associate to the
certificate. To add a label, click
add_box Add label , and specify
a key and a value for your label.
Click Create .
The new certificate appears in the list of certificates.
gcloud
To create a cross-region Google-managed certificate with DNS authorization,
use the certificate-manager certificates create command with the
dns-authorizations and --scope flags:
gcloud certificate-manager certificates create CERTIFICATE_NAME \
--domains=" DOMAIN_NAME , *. DOMAIN_NAME " \
--dns-authorizations=" AUTHORIZATION_NAMES " \
--scope=all-regions
Replace the following:
CERTIFICATE_NAME : the name of the certificate.
DOMAIN_NAME : the name of the target domain. The domain name must be a fully qualified domain name, such as myorg.example.com , or a wildcard domain, such as *.myorg.example.com . The asterisk dot prefix
(*.) signifies a wildcard certificate.
AUTHORIZATION_NAMES : a comma-separated list of names of the DNS authorizations.
API
Create the certificate by making a POST request to the
certificates.create method as follows:
POST /v1/projects/ PROJECT_ID /locations/global/certificates?certificate_id= CERTIFICATE_NAME
{
"managed": {
"domains": [" DOMAIN_NAME "],
"dnsAuthorizations": [
"projects/ PROJECT_ID /locations/global/dnsAuthorizations/ AUTHORIZATION_NAME ",
],
"scope": "ALL_REGIONS"
}
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_NAME : the name of the certificate.
DOMAIN_NAME : the name of the target domain. The domain name must be a fully qualified domain name, such as myorg.example.com , or a wildcard domain, such as *.myorg.example.com . The asterisk dot prefix (*.) signifies a wildcard certificate.
AUTHORIZATION_NAMES : a comma-separated list of names of the DNS authorizations.
Note: To specify multiple domains or DNS authorizations, provide a
comma-separated list of values in their respective fields.
Add the CNAME record to your DNS configuration
If you're using a third-party DNS solution to manage your DNS, refer to its
documentation to add the CNAME record to the DNS configuration. If you're using
Google Cloud to manage your DNS, complete the steps in this section.
Important: You must ensure that your CNAME is the only resource
record for a specific DNS name. Although some DNS providers allow you to
configure both CNAME and TXT resource records for the
same DNS name, this type of configuration is incorrect and can lead to
conflicts, preventing reliable certificate issuance or renewal. If such a
conflict occurs, then you can either delete your TXT records or use
the per-project DNS authorization method.
Console
To create a record set, follow these steps:
In the Google Cloud console, go to the DNS zones page.
Go to Cloud DNS zones
Click the name of the DNS zone where you want to add the record.
On the Zone details page, click Add standard .
On the Create record set page, in the DNS name field, enter
the subdomain of the DNS zone.
When entering the subdomain name, make sure that the subdomain name,
including the greyed-out text
displayed in the DNS name field, matches the full value of the
dnsResourceRecord.name field as displayed in the output of the
gcloud certificate-manager dns-authorizations describe command .
See the following examples:
If the dnsResourceRecord.name field value is
_acme-challenge.myorg.example.com. , and the greyed-out text in the
DNS name field is .example.com. , then enter
_acme-challenge.myorg .
If the dnsResourceRecord.name field value is
_acme-challenge.myorg.example.com. , and the greyed-out text in the
DNS name field is .myorg.example.com. , then enter
_acme-challenge .
If the value of the dnsResourceRecord.name field is
_acme-challenge_ujmmovf2vn55tgye.myorg.example.com. , and the
greyed-out text in the DNS name field is .myorg.example.com. ,
then enter _acme-challenge_ujmmovf2vn55tgye .
Note: Adding the @ symbol in this field causes the record to fail.
In the Resource record type field, select CNAME .
In the TTL field, enter a positive numeric value for the resource record's
time to live, which is the amount of time that it can be cached.
From the TTL unit list, select the unit of time—for example,
30 minutes .
In the Canonical name field, enter the full value of the
dnsResourceRecord.data field as displayed in the output of the gcloud
certificate-manager dns-authorizations describe command .
To enter additional information, click Add item .
Click Create .
gcloud
When you create a DNS authorization, the gcloud CLI command
returns the corresponding CNAME record. To add the CNAME record to your DNS
configuration in the DNS zone of the target domain, follow these steps:
Initiate the DNS record transaction:
gcloud dns record-sets transaction start --zone=" DNS_ZONE_NAME "
Replace DNS_ZONE_NAME with the name of the target DNS
zone.
Add the CNAME record to the target DNS zone:
gcloud dns record-sets transaction add CNAME_RECORD \
--name=" VALIDATION_SUBDOMAIN_NAME . DOMAIN_NAME ." \
--ttl="30" \
--type="CNAME" \
--zone=" DNS_ZONE_NAME "
Replace the following:
CNAME_RECORD : the full data value of the CNAME
record returned by the Google Cloud CLI command that created the
corresponding DNS authorization.
VALIDATION_SUBDOMAIN_NAME : the prefix subdomain
of the DNS zone, such as _acme-challenge . You can copy the name
from the gcloud certificate-manager dns-authorizations describe
command log, as described in Create a DNS authorization .
DOMAIN_NAME : the name of the target domain.The domain name must be a fully qualified domain name, such as myorg.example.com . You must also include the trailing period
after the target domain name.
DNS_ZONE_NAME : the name of the target DNS zone.
For more information about the difference between
FIXED_RECORD and PER_PROJECT_RECORD DNS
authorizations, see the following
examples. The only difference between the two examples is the value
of the --name flag.
FIXED_RECORD DNS authorization
gcloud dns record-sets transaction add 0e40fc77-a37d-4eb8-8fe1-eea2e18d12d9.4.authorize.certificatemanager.goog. \
--name="_acme-challenge.myorg.example.com." \
--ttl="30" \
--type="CNAME" \
--zone="myorg-example-com"
PER_PROJECT_RECORD DNS authorization
gcloud dns record-sets transaction add 0e40fc77-a37d-4eb8-8fe1-eea2e18d12d9.4.authorize.certificatemanager.goog. \
--name="_acme-challenge_ujmmovf2vn55tgye.myorg.example.com." \
--ttl="30" \
--type="CNAME" \
--zone="myorg-example-com"
Run the DNS record transaction to save your changes:
gcloud dns record-sets transaction execute --zone=" DNS_ZONE_NAME "
Replace DNS_ZONE_NAME with the name of the target DNS
zone.
Terraform
To add the CNAME record to your DNS configuration, you can use a
google_dns_record_set resource .
resource "google_dns_record_set" "cname" {
name = google_certificate_manager_dns_authorization.default.dns_resource_record[0].name
managed_zone = google_dns_managed_zone.default.name
type = google_certificate_manager_dns_authorization.default.dns_resource_record[0].type
ttl = 300
rrdatas = [google_certificate_manager_dns_authorization.default.dns_resource_record[0].data]
}
Verify the status of the certificate
Before deploying a certificate to a load balancer, verify that it's active. It
can take several minutes for the certificate state to change to ACTIVE .
Console
In the Google Cloud console, go to the Certificate Manager page.
Go to Certificate Manager
On the Certificates tab, check the Status column for the
certificate.
gcloud
To verify the status of the certificate, run the following command:
gcloud certificate-manager certificates describe CERTIFICATE_NAME
Replace CERTIFICATE_NAME with the name of the target
Google-managed certificate.
The output is similar to the following:
createTime: '2021-10-20T12:19:53.370778666Z'
expireTime: '2022-05-07T05:03:49Z'
managed:
authorizationAttemptInfo:
- domain: myorg.example.com
state: AUTHORIZED
dnsAuthorizations:
- projects/myProject/locations/global/dnsAuthorizations/myCert
domains:
- myorg.example.com
state: ACTIVE
name: projects/myProject/locations/global/certificates/myCert
pemCertificate: |
-----BEGIN CERTIFICATE-----
[...]
-----END CERTIFICATE-----
sanDnsnames:
- myorg.example.com
updateTime: '2021-10-20T12:19:55.083385630Z'
If the certificate state is not ACTIVE after several hours, check that you correctly added the CNAME record to your DNS configuration.
For more troubleshooting steps, see Troubleshoot Certificate Manager .
Deploy the certificate to a load balancer
To deploy the global Google-managed certificate, attach it directly to the target proxy.
Attach the certificate directly to the target proxy
You can attach the certificate to a new target proxy or an existing target
proxy.
To attach the certificate to a new target proxy, use the gcloud compute
target-https-proxies create
command :
gcloud compute target-https-proxies create PROXY_NAME \
--url-map= URL_MAP \
--certificate-manager-certificates= CERTIFICATE_NAME \
--global
Replace the following:
PROXY_NAME : the name of the target proxy.
URL_MAP : the name of the URL map. You created the URL map
when you created the load balancer.
CERTIFICATE_NAME : the name of the certificate.
To attach the certificate to an existing target HTTPS proxy, use the gcloud
compute target-https-proxies update
command . If you
don't know the name of the existing target proxy, go to the Target
proxies
page and note the name of the target proxy.
gcloud compute target-https-proxies update PROXY_NAME \
--global \
--certificate-manager-certificates= CERTIFICATE_NAME
After creating or updating the target proxy, run the following command to verify
it:
gcloud compute target-https-proxies list
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, delete them.
Delete the load balancer and its resources.
See Clean up a load balancing setup .
Delete the Google-managed certificate:
Console
In the Google Cloud console, go to the Certificate Manager page.
Go to Certificate Manager
On the Certificates tab, select the checkbox of the
certificate.
Click Delete .
In the dialog that appears, click Delete to confirm.
gcloud
gcloud certificate-manager certificates delete CERTIFICATE_NAME
Replace CERTIFICATE_NAME with the name of the target
certificate.
Delete the DNS authorization:
gcloud certificate-manager dns-authorizations delete AUTHORIZATION_NAME
Replace AUTHORIZATION_NAME with the name of the target
DNS authorization.
What's next
Manage certificates
Manage DNS authorizations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
