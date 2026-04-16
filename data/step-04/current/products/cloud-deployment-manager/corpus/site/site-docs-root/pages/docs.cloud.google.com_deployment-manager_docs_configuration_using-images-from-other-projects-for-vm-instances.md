---
title: "Using Images from Other Projects \_|\_ Cloud Deployment Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances
  title: "Using Images from Other Projects \_|\_ Cloud Deployment Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Using Images from Other Projects
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure your project so that Deployment Manager can
create Compute Engine virtual machine instances using
operating system images that belong to another project.
For example, assume you have a project named Awesome Project where
Deployment Manager creates and manages VM instances. Now, let's assume you need
to use private images that belong to a different project named Database Images.
To grant access to these images, the owner of Database Images must grant
the IAM role roles/compute.imageUser to the
Google APIs service account
of Awesome Project, and Awesome Project can then use images from the Database
Images project.
You can also use this process to grant
managed instance groups
access to images from other projects.
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Read about Deployment Manager configurations .
Read about Compute Engine private images .
Read about Identity and Access Management (IAM)
documentation.
Read about Deployment Manager IAM roles ,
in particular, the roles/compute.imageUser role.
Limitations
The following are restrictions for using this feature:
You must grant the compute.imageUser role on the project level to your
project's
Google APIs service account .
Granting the compute.imageUser role grants permissions to
all images in the specific project. It is not possible to share specific
images.
You must grant this role to specific users, and not to
allAuthenticatedUsers or
allUsers .
Granting access to images
To grant access to images that belong to another project, the owner of the
project that owns the images must grant access to the Google APIs service
account of the project that wants to use the images.
Go to the IAM page in the Google Cloud console of the project that
needs access to private images owned by another project.
Go to the IAM page
If prompted, select your project from the list. Remember to select the
project that needs access to images stored in another project.
Look for Google APIs service account , which has an email address in the
following format:
[ PROJECT_NUMBER ] @cloudservices . gserviceaccount.com
Note: This email address requires the project number, which is different
than the project ID. To learn how to identify the project number, see
Identifying projects .
Make note of the email address above. Next, a project owner of the project
where the desired images live can grant the Google APIs service account
the roles/compute.imageUser role.
Console
While still in the Google Cloud console, go to the IAM page of the project
that contains the images you want access to.
Go to the IAM page
Select the project from the project list.
Click the Add button to add a new member.
In the Members box, enter the email address of the service account.
Expand the Roles dropdown and select Compute Engine > Compute Image User .
Click Add to add the account.
gcloud
With the Google Cloud CLI, add a binding to the IAM policy for the project:
gcloud projects add-iam-policy-binding [PROJECT_ID] \
--member serviceAccount:[SERVICE_ACCOUNT_EMAIL] --role roles/compute.imageUser
where:
[PROJECT_ID] is the ID of the project containing images you want to
share.
[SERVICE_ACCOUNT_EMAIL] is the email of the service account.
For example:
gcloud projects add-iam-policy-binding database-images \
--member serviceAccount:123456789012@cloudservices.gserviceaccount.com \
--role roles/compute.imageUser
API
In the API, make a POST request to the following URL, where
[PROJECT_ID] is the ID of the project containing the images you want to
share.
POST https : // cloudresourcemanager . googleapis . com / v1 / projects / $ [ PROJECT_ID ] : setIamPolicy
The request body should contain the list of bindings you want to apply
to this project. The roles/compute.imageUser role should be part
of the binding. For example:
{
"policy" : {
"version" : "0" ,
"bindings" : [
{
"role": "roles/owner",
"members": [
"user:example@gmail.com"
]
} ,
{
"role" : "roles/compute.imageUser" ,
"members" : [
"serviceAccount:123456789012@cloudservices.gserviceaccount.com"
]
}
]
}
}
Using images from other projects in your configuration
After a project has been granted access to images from another project, users of
the project can use the images by specifying the project ID of the project that
the images belong to in your templates or configurations:
image : projects /[ PROJECT_ID ]/ global / images /[ IMAGE_NAME ]
For example, if the image project ID is database-images , then you might
provide the following image URI in your configuration:
resources:
- name: a-special-vm
type: compute.v1.instances
properties:
machineType: zones/us-central1-a/machineTypes/f1-micro
image: projects/database-images/global/images/example-database-image
...
After you have added the image, finish creating your configuration , then deploy it .
What's next?
Learn more about sharing images .
Learn more about Compute Engine images .
Read about other IAM roles you can grant.
Learn more about service accounts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
