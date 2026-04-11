---
title: "Deploy a cross-region Google-managed certificate with Certificate Authority\
  \ Service \_|\_ Certificate Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/certificates
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg
  title: "Deploy a cross-region Google-managed certificate with Certificate Authority\
    \ Service \_|\_ Certificate Manager \_|\_ Google Cloud Documentation"
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
Deploy a cross-region Google-managed certificate with Certificate Authority Service
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to use Certificate Manager to deploy a
global Google-managed certificate with
Certificate Authority Service to a
cross-region internal Application Load Balancer.
If you want to deploy to global external load balancers or regional load
balancers, see the following:
Deploy a global Google-managed certificate with
Certificate Authority Service
Deploy a regional Google-managed certificate with
Certificate Authority Service
Objectives
This tutorial shows you how to complete the following tasks:
Create a Google-managed certificate with CA Service by using
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
Enable the Compute Engine, Certificate Manager, Certificate Authority APIs.
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
Enable the Compute Engine, Certificate Manager, Certificate Authority APIs.
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
Enable the CA Service API .
Create a CA pool . You must create and enable at least one CA in this CA pool.
You need to make a note of the following before you follow the steps of this
tutorial:
Certificates you create with Certificate Authority Service aren't publicly trusted. To
issue publicly trusted certificates, create certificates with DNS
authorization or load
balancer authorization .
If a certificate issuance
policy is in
effect on the target CA pool, certificate provisioning might fail for any of
the following reasons:
The certificate issuance policy has blocked the requested certificate.
In this case, you aren't billed because the certificate hasn't been
issued.
The policy has applied changes to the certificate that aren't supported
by Certificate Manager. In this case, you are billed because the
certificate has been issued, even though it is not fully compatible with
Certificate Manager.
Global Google-managed TLS certificates can be configured to be issued from a CA pool in any region.
Required roles
Make sure that you have the following roles to complete the tasks in this tutorial:
Certificate Manager Owner ( roles/certificatemanager.owner )
Required to create and manage Certificate Manager resources.
Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) or Compute Network Admin ( roles/compute.networkAdmin )
Required to create and manage HTTPS target proxy.
CA Service Admin ( roles/privateca.admin )
Required to perform actions within CA Service.
For more information, see the following:
Roles and permissions for
Certificate Manager.
Compute Engine IAM roles and permissions
for Compute Engine.
Access control with IAM for CA Service.
Note: If you aren't assigned the permissions or roles, request the missing roles
from the Identity and Access Management (IAM) administrator who has the Project
IAM Admin role ( roles/resourcemanager.projectIamAdmin ).
Create the load balancer
This tutorial assumes that you've already created and configured the load
balancer's backends, health checks, backend services, and URL maps. Make a note
of the URL map's name because you need it later in this tutorial.
If you haven't created a cross-region internal Application Load Balancer, see Set up a
cross-region internal Application Load Balancer with VM instance group
backends .
Configure CA Service integration with Certificate Manager
To integrate CA Service with
Certificate Manager, follow these steps:
In the target Google Cloud project, create a
Certificate Manager service account:
gcloud beta services identity create --service=certificatemanager.googleapis.com \
--project= PROJECT_ID
Replace PROJECT_ID with the ID of the target
Google Cloud project.
The command returns the name of the created service identity. See the
following example:
service-520498234@gcp-sa-certificatemanager.iam.gserviceaccount.com
Grant the Certificate Manager service account the CA
Service Certificate Requester
role
( roles/privateca.certificateRequester ) within the target CA pool:
gcloud privateca pools add-iam-policy-binding CA_POOL \
--location LOCATION \
--member "serviceAccount: SERVICE_ACCOUNT " \
--role roles/privateca.certificateRequester
Replace the following:
CA_POOL : the ID of the target CA pool.
LOCATION : the target Google Cloud location.
SERVICE_ACCOUNT : the full name of the service account
you created in step 1.
Create a certificate issuance configuration resource for your CA pool:
Console
In the Google Cloud console, go to the Issuance configs tab on the
Certificate Manager page.
Go to Certificate Manager
Click Create . The Create a Certificate Issuance Config page
appears.
In the Name field, enter a unique name for the certificate
issuance configuration.
Optional: In the Description field, enter a description for the
issuance configuration.
For Location , select Global .
Optional: In the Lifetime field, specify the lifetime of issued
certificate in days. The value must be between 21 to 30 days (inclusive).
Optional: In the Rotation window percentage , specify the
percentage of the certificate's lifetime when its renewal process begins.
To find the range of valid values, see Lifetime and Rotation window
percentage .
Optional: From the Key algorithm list, select the key algorithm to
use when generating the private key.
From the CA pool list, select the name of the CA pool to assign to
this certificate issuance configuration resource.
In the Labels field, specify labels to associate to the
certificate. To add a label, click add_box Add label , and specify a key and a value for your label.
Click Create .
gcloud
gcloud certificate-manager issuance-configs create ISSUANCE_CONFIG_NAME \
--ca-pool= CA_POOL
Replace the following:
ISSUANCE_CONFIG_NAME : the name of the certificate
issuance configuration resource.
CA_POOL : the full resource path and name of the CA
pool that you want to assign to this certificate issuance configuration
resource.
Note: By default, the certificate's lifetime is 30 days, the key algorithm is
rsa-2048 , and rotation window percentage is 66%. If you want to
change the default values, add the lifetime , key-algorithm , and
rotation-window-percentage flags to the command and specify the values.
For more information about certificate issuance configuration resources,
see Manage certificate issuance configuration resources .
Create a Google-managed certificate issued by your CA Service instance
To create a Google-managed certificate issued by your CA Service
instance, do the following:
Console
In the Google Cloud console, go to the Certificate Manager page.
Go to Certificate Manager
On the Certificates tab, click Add Certificate .
In the Certificate name field, enter a unique name for the
certificate.
Optional: In the Description field, enter a description for the
certificate. The description lets you identify the certificate.
For Location , select Global .
For Scope , select All regions .
For Certificate type , select Create Google-managed certificate .
For Certificate Authority type , select Private .
In the Domain Names field, specify a comma-delimited list of domain
names of the certificate. Each domain name must be a fully qualified
domain name, such as myorg.example.com .
For Select a certificate issuance config , select the name of the
certificate issuance configuration resource referencing the target CA
pool.
In the Labels field, specify labels to associate to the
certificate. To add a label, click add_box Add label , and specify a
key and a value for your label.
Click Create .
The new certificate appears in the list of certificates.
gcloud
To create a cross-region Google-managed certificate with
Certificate Authority Service, use the certificate-manager certificates create
command
with the issuance-config and --scope flags:
gcloud certificate-manager certificates create CERTIFICATE_NAME \
--domains=" DOMAIN_NAMES " \
--issuance-config= ISSUANCE_CONFIG_NAME \
--scope=all-regions
Replace the following:
CERTIFICATE_NAME : the name of the certificate.
DOMAIN_NAME : the name of the target domain. The domain name must be a fully qualified domain name, such as myorg.example.com .
ISSUANCE_CONFIG_NAME : the name of the certificate issuance configuration resource that references the target CA pool.
API
Create the certificate by making a POST request to the
certificates.create method as follows:
POST /v1/projects/ PROJECT_ID /locations/global/certificates?certificate_id= CERTIFICATE_NAME "
{
"managed": {
"domains": [" DOMAIN_NAME "],
"issuanceConfig": " ISSUANCE_CONFIG_NAME ",
"scope": "ALL_REGIONS"
}
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_NAME : the name of the certificate.
DOMAIN_NAME : the name of the target domain. The domain name must be a fully qualified domain name, such as myorg.example.com .
ISSUANCE_CONFIG_NAME : the name of the certificate issuance configuration resource that references the target CA pool.
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
domains:
- myorg.example.com
issuanceConfig: projects/myproject/locations/global/issuanceConfigs/myissuanceConfig
state: ACTIVE
name: projects/myproject/locations/global/certificates/mycertificate
pemCertificate: |
-----BEGIN CERTIFICATE-----
[...]
-----END CERTIFICATE-----
sanDnsnames:
- myorg.example.com
updateTime: '2021-10-20T12:19:55.083385630Z'
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
Troubleshooting certificates issued by CA Service
For troubleshooting steps, see Problems related to certificates issued by a
CA Service instance .
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
Delete the certificate issuance configuration resource:
Console
In the Google Cloud console, go to the Issuance configs tab on the
Certificate Manager page.
Go to Certificate Manager
Select the checkbox of the issuance configuration resource that you
want to delete.
Click Delete .
In the dialog that appears, click Delete to confirm.
gcloud
gcloud certificate-manager issuance-configs delete ISSUANCE_CONFIG_NAME
Replace ISSUANCE_CONFIG_NAME with the name of the
target certificate issuance configuration resource.
Delete the CA pool.
To delete the CA pool, or to disable the last enabled CA in a CA pool
referenced by a certificate issuance configuration resource, delete all certificate issuance
configs that reference the CA pool. For more information, see Delete a CA
pool .
What's next
Manage certificates
Manage certificate issuance configuration resources
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
