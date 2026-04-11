---
title: "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket
  title: "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
Mount a Cloud Storage bucket using Cloud Storage FUSE
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to mount a Cloud Storage bucket as a local file system using
Cloud Storage FUSE , so you can interact with your objects using standard file
system semantics.
In this quickstart, you'll complete the following tasks:
Install Cloud Storage FUSE on Debian or Ubuntu
Mount the bucket as a folder on the machine
Upload an object to the bucket
You'll use the Google Cloud CLI to create and manage
the object in your storage bucket, and you'll use the
Cloud Storage FUSE CLI to mount your bucket to your machine.
Before you begin
To set up a project, complete the following steps:
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Storage Admin ( roles/storage.admin ), Storage Bucket Viewer ( roles/storage.bucketViewer )
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Storage Admin ( roles/storage.admin ), Storage Bucket Viewer ( roles/storage.bucketViewer )
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Have a Cloud Storage bucket that you want to mount. If you don't
already have one, create a new
bucket .
Install Cloud Storage FUSE
To install Cloud Storage FUSE, follow the instructions in Install Cloud Storage FUSE .
Mount the bucket
To mount the bucket to your local file system, complete the following steps:
Generate Application Default Credentials using the
gcloud auth application-default login command:
gcloud auth application-default login
Cloud Storage FUSE automatically loads the credentials.
Create a directory to mount the storage bucket to:
mkdir "$HOME/mount-folder"
Mount your storage bucket using the gcsfuse command:
gcsfuse BUCKET_NAME "$HOME/mount-folder"
Replace BUCKET_NAME with the name of the bucket you want to mount.
If successful, the command returns output which contains text similar to the following:
File system has been successfully mounted.
Upload an object into the bucket
To download an example object and upload it to the mounted bucket, complete the
following steps:
Right-click the image and save it somewhere on your computer,
such as on the desktop.
You can also download the image using the cURL command
curl -O https://cloud.google.com/storage/images/kitten.png .
Copy the image from its saved location to the folder where your bucket is
mounted, using the cp command:
cp kitten.png "$HOME/mount-folder/kitten.png"
Verify that the image was copied to your local file system and uploaded to the
bucket successfully by following the steps:
To check that kitten.png was copied to your local file system, run ls
on the folder where your bucket is mounted:
ls "$HOME/mount-folder"
If the copy operation was successful, kitten.png is returned in the
output.
To list the contents of your bucket, use the gcloud storage ls
command:
gcloud storage ls gs:// BUCKET_NAME
Replace BUCKET_NAME with the name of your bucket.
If the image was successfully uploaded to your bucket, kitten.png is
returned in the output.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used
on this page, delete the resources by completing the following steps:
Unmount the storage bucket from your Linux machine by using the fusermount
tool:
fusermount -u "$HOME/mount-folder"
To delete the bucket and everything inside of it, use the
gcloud storage rm command with the --recursive flag:
gcloud storage rm gs:// BUCKET_NAME --recursive
Replace BUCKET_NAME with the name of your bucket.
If successful, the command returns output similar to the following:
Removing gs://my-bucket/kitten.png#1676488739323620...
Removing gs://my-bucket/...
What's next
Get a detailed overview of Cloud Storage FUSE .
Read about ways to mount buckets for different use cases .
Learn how Vertex AI uses Cloud Storage FUSE to mount
Cloud Storage buckets for custom training jobs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
