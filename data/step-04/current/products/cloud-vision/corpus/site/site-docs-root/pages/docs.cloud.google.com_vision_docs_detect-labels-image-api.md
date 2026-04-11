---
title: "Quickstart: Detect labels in an image by using the Cloud Vision API \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/docs/detect-labels-image-api
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/detect-labels-image-api
  title: "Quickstart: Detect labels in an image by using the Cloud Vision API \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Vision API
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Detect labels in an image by using the Cloud Vision API
This quickstart shows you how to:
Create a Cloud Storage bucket.
Upload your image to Cloud Storage and make the file publicly accessible.
Make a request to the Vision API with that image.
These steps should take about five minutes to complete. You can store up to
5 GB of data in Cloud Storage for no
charge and make up to 1000 feature
requests per month to the Vision API for no
charge.
Before you begin
If you haven't done so already, use the following instructions to set up your
project and create a Cloud Storage bucket.
Set up your project
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
Enable the Cloud Vision API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Cloud Vision API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
Make sure that you have the following role or roles on the project:
Storage Admin ( roles/storage.admin )
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
Create a Cloud Storage bucket
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click add_box Create .
On the Create a bucket page, enter your bucket information. To go to the next
step, click Continue .
For Name your bucket , enter a unique bucket name. Don't include sensitive
information in the bucket name, because the bucket namespace is global and publicly
visible.
In the Choose where to store your data section, do the following:
Select a Location type .
Choose a location where your bucket's data is permanently stored from the Location type drop-down menu.
If you select the dual-region location type, you can
also choose to enable turbo replication by using the
relevant checkbox.
To set up cross-bucket replication , select
Add cross-bucket replication via Storage Transfer Service and
follow these steps:
Set up cross-bucket replication
In the Bucket menu, select a bucket.
In the Replication settings section,
click Configure to configure settings for the
replication job.
The Configure cross-bucket replication pane
appears.
To filter objects to replicate by object name prefix,
enter a prefix that you want to include or exclude objects from, then click add
Add a prefix .
To set a storage class for the replicated objects,
select a storage class from the Storage class menu.
If you skip this step, the replicated objects will use the
destination bucket's storage class by default.
Click Done .
In the Choose how to store your data section, do the following:
In the Set a default class section, select the following:
Standard .
To enable hierarchical namespace , in the
Optimize storage for data-intensive workloads section, select
Enable hierarchical namespace on this bucket .
Note: You cannot enable hierarchical namespace in existing
buckets.
In the Choose how to control access to objects section, select
whether or not your bucket enforces public access prevention ,
and select an access control method for your bucket's objects.
Note: You cannot change the Prevent public access setting if this setting is enforced at an organization policy .
In the Choose how to protect object data section, do the
following:
Select any of the options under Data protection that you
want to set for your bucket.
To enable soft delete , click the
Soft delete policy (For data recovery) checkbox,
and specify the number of days you want to retain objects
after deletion.
To set Object Versioning , click the
Object versioning (For version control) checkbox,
and specify the maximum number of versions per object and the number of days after which
the noncurrent versions expire.
To enable the retention policy on objects and buckets, click the Retention (For compliance) checkbox, and then do the following:
To enable Object Retention Lock , click the
Enable object retention checkbox.
To enable Bucket Lock , click the Set bucket retention policy checkbox, and choose a unit of time and a length of time for your retention period.
To choose how your object data will be encrypted, expand the
Data encryption section ( expand_more ), and select a
Data encryption method .
Click Create .
Make a request to Cloud Vision
Save a local version of the following sample image file ( demo-img.jpg ).
Image credit :
Rohiim Ariful on Unsplash .
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
Select the bucket you created in the previous section.
Click Upload Files and select the local version of the demo-img.jpg
file to upload to your Cloud Storage bucket.
After the file is uploaded and appears in the Cloud Storage bucket,
share the image publicly .
In the Try this method section, complete
the interactive API Explorer template by replacing
cloud-samples-data/vision in the image.source.imageUri field with the
name of the Cloud Storage bucket where you uploaded the demo-img.jpg
file. The request body should look like the following:
{
"requests": [
{
"features": [
{
"type": "LABEL_DETECTION"
}
],
"image": {
"source": {
"imageUri": "gs:// cloud-samples-data/vision /demo-img.jpg"
}
}
}
]
}
Click Execute to send the request to the service. The JSON response
appears after the request body.
Congratulations! You've made your first images.annotate request to
Cloud Vision.
Clean up
To avoid unnecessary Google Cloud charges, use the Google Cloud console to
delete your Cloud Storage bucket (and your project) if you don't need them.
What's next
See a list of all feature types and their uses.
Get started with the Vision API in your language of choice by using a
Vision API Client
Library .
Use the How-to guides to learn more about specific
features, see example annotations, and get annotations for an individual file or
image.
Learn about batch image and
file (PDF/TIFF/GIF) annotation.
Browse through a comprehensive list of client library code
samples .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
