---
title: "Quickstart: Configure a Binary Authorization policy with Cloud Run \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/run/quickstart-cloud-run
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/run/quickstart-cloud-run
  title: "Quickstart: Configure a Binary Authorization policy with Cloud Run \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure a Binary Authorization policy with Cloud Run
This quickstart shows how to configure and test a basic
rule in a Binary Authorization policy
with Cloud Run.
In this quickstart, you use Binary Authorization to control deployment of a
Cloud Run service.
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
Enable the Cloud Run, Artifact Registry, Binary Authorization APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
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
Enable the Cloud Run, Artifact Registry, Binary Authorization APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create a service with Binary Authorization enabled
To create a Cloud Run service with Binary Authorization
enabled, do the following:
Go to Cloud Run
Click Create service to display the Create service form:
In the form that displays, do the following:
Select Cloud Run as your development platform.
Select the region where you want your service
located.
Specify the name you want to give to your service—for example,
test-service .
Click Next to continue to the Configure the service's first
revision page.
In the form, do the following:
Select Deploy one revision from an existing container image .
Use us-docker.pkg.dev/cloudrun/container/hello as the container image.
Note: The example image name is for demonstration purposes. We
recommend that you use Binary Authorization to deploy only
images that you maintain.
Expand the Advanced settings section.
Click the Security tab.
Select the Verify
container deployment with Binary Authorization checkbox:
Note: If your organization policy requires Binary Authorization for Cloud Run , the
checkbox is disabled.
By default, the Binary Authorization policy allows all images to
be deployed.
Click Next to continue to the Configure how this service is
triggered page:
Select Allow public access to be able to open the
result in your web browser
Click Create to deploy the image to Cloud Run and wait
for the deployment to finish.
Your service is deployed. Revisions are subject to
Binary Authorization policy enforcement.
Update the Binary Authorization policy to disallow all images
The Binary Authorization policy contains a default rule. This rule governs the
deployment of the Cloud Run service you just created.
By default, the rule allows all container images to be deployed.
To view the default policy, do the following:
Go to Binary Authorization
Click Edit Policy .
In Project Default Rule , note that the option Allow All Images is
selected.
Now, modify the policy to block all images from being deployed , by doing the
following:
Go to the Binary Authorization page in the Google Cloud console.
Go to Binary Authorization
Click Edit Policy .
In Default rule , select Disallow All Images .
Click Save Policy .
Note: It can take a few minutes for the policy to take effect.
Redeploy the service
Test the updated policy by deploying a new revision.
To deploy the image, do the following:
Go to Cloud Run
Click the name of the service you deployed earlier in this guide.
Click Edit and deploy new revision.
Click Deploy .
You see an error message similar to the following:
Service update rejected by Binary Authorization policy: Revision
REVISION uses unauthorized container image. Container image 'us-docker.pkg.dev/cloudrun/container/hello@ SHA ' is not authorized by policy. Denied by an ALWAYS_DENY admission rule
Reset the policy to allow all images
To reset the policy to allow all images, do the following:
Go to the Binary Authorization page in the Google Cloud console.
Go to Binary Authorization
Click Edit Policy .
Select Allow All Images .
To save the policy, click Save Policy .
You can now deploy images.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To delete the service you created in Cloud Run, do the
following:
Go to Cloud Run
Locate the service you want to delete in the services list, and click
its checkbox to select it.
Click Delete . This deletes all revisions of the service.
To disable Binary Authorization, see Disabling Binary Authorization .
What's next
Use breakglass to
bypass Binary Authorization enforcement.
Use the built-by-cloud-build attestor to deploy only images built by Cloud Build .
Use attestations .
Configure the Binary Authorization policy by using the Google Cloud console or the command-line tool .
View Binary Authorization for Cloud Run events in Cloud Audit Logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
