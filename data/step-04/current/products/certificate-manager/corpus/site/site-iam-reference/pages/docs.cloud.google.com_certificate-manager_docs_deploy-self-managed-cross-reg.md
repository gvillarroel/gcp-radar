---
title: "Deploy a cross-region self-managed certificate \_|\_ Certificate Manager \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed-cross-reg
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed-cross-reg
  title: "Deploy a cross-region self-managed certificate \_|\_ Certificate Manager\
    \ \_|\_ Google Cloud Documentation"
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
Deploy a cross-region self-managed certificate
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to use Certificate Manager to deploy a
global self-managed certificate to a cross-region internal Application Load Balancer.
If you want to deploy to global external load balancers or regional load
balancers, see the following:
Deploy a global self-managed
certificate
Deploy a regional self-managed
certificate
Objectives
This tutorial shows you how to complete the following tasks:
Upload a self-managed certificate to Certificate Manager.
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
Required roles
Make sure that you have the following roles to complete the tasks in this tutorial:
Certificate Manager Owner ( roles/certificatemanager.owner )
Required to create and manage Certificate Manager resources.
Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) or Compute Network Admin ( roles/compute.networkAdmin )
Required to create and manage HTTPS target proxy.
For more information, see the following:
Roles and permissions for
Certificate Manager.
Compute Engine IAM roles and permissions
for Compute Engine.
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
Create a private key and certificate
To create a private key and a certificate, do the following:
Use a trusted third-party certificate authority (CA) to issue the
certificate along with its associated key.
Verify that the certificate is properly chained and root-trusted.
Prepare the following PEM-encoded files:
The certificate file (CRT)
The corresponding private key file (KEY)
For information about how to request and validate a certificate, see Create a
private key and
certificate .
Upload a self-managed certificate to Certificate Manager
To upload the certificate to Certificate Manager, do the following:
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
For Certificate type , select Create self-managed certificate .
For the Certificate field, do either of the following:
Click the Upload button and select your PEM-formatted
certificate file.
Copy and paste the contents of a PEM-formatted certificate. The
contents must start with -----BEGIN CERTIFICATE----- and end
with -----END CERTIFICATE----- .
For the Private key certificate field, do either of the following:
Click the Upload button and select your private key. Your
private key must be PEM-formatted and not protected with a
passphrase.
Copy and paste the contents of a PEM-formatted private key. The
private keys must start with -----BEGIN PRIVATE KEY----- and
end with -----END PRIVATE KEY----- .
In the Labels field, specify labels to associate with the
certificate. To add a label, click
add_box Add label , and specify
a key and a value for your label.
Click Create .
The new certificate appears in the list of certificates.
gcloud
To create a cross-region self-managed certificate, use the certificate-manager certificates create command :
gcloud certificate-manager certificates create CERTIFICATE_NAME \
--certificate-file=" CERTIFICATE_FILE " \
--private-key-file=" PRIVATE_KEY_FILE " \
--scope=all-regions
Replace the following:
CERTIFICATE_NAME : the name of the certificate.
CERTIFICATE_FILE : the path and filename of the CRT certificate file.
PRIVATE_KEY_FILE : the path and filename of the KEY private key file.
Terraform
To upload a self-managed certificate, you can use a
google_certificate_manager_certificate resource with the self_managed block.
API
Upload the certificate by making a POST request to the
certificates.create method as follows:
POST /v1/projects/ PROJECT_ID /locations/global/certificates?certificate_id= CERTIFICATE_NAME
{
self_managed: {
pem_certificate: " PEM_CERTIFICATE ",
pem_private_key: " PEM_KEY ",
scope: "ALL_REGIONS"
}
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_NAME : the name of the certificate.
PEM_CERTIFICATE : the certificate PEM.
PEM_KEY : the key PEM.
Deploy the self-managed certificate to a load balancer
To deploy the global self-managed certificate, attach
it directly to the target proxy.
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
used in this tutorial, delete the uploaded certificate:
gcloud certificate-manager certificates delete CERTIFICATE_NAME
Replace CERTIFICATE_NAME with the name of the target
certificate.
If you don't plan to use the load balancer, delete the load balancer and its
resources. See Clean up a load balancing
setup .
What's next
Manage certificates
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
