---
title: "Quickstart: Annotate a video by using the command line \_|\_ Video Intelligence\
  \ API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line
  title: "Quickstart: Annotate a video by using the command line \_|\_ Video Intelligence\
    \ API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Annotate a video by using the command line
This page shows how to make a Video Intelligence API request with curl for
projects that you own.
You can follow the steps on this page or try this quickstart as a
Google Cloud Training lab.
Try it with a lab
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Video Intelligence API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Video Intelligence API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Required roles
To get the permissions that
you need to annotate a video,
ask your administrator to grant you the
following IAM roles on the project:
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a bucket
In your development environment, use the gcloud storage buckets create
command to create a bucket.
Before running the command, replace the following values:
BUCKET_LOCATION : The geographic location where you
want to store the data in your bucket. For example, US .
gcloud storage buckets create gs://videointelligence-quickstart-bucket --location= BUCKET_LOCATION
If the request is successful, the command returns the following message:
Creating gs://videointelligence-quickstart-bucket/...
Upload a video to the bucket
In your development environment, use the gcloud storage cp
command to
upload a video to the bucket that you created.
Before running the command, replace the following values:
OBJECT_LOCATION : The local path to your object. For
example, Desktop/dog.mp4 .
gcloud storage cp OBJECT_LOCATION gs://videointelligence-quickstart-bucket
If successful, the response looks like the following example:
Completed files 1/1 | 164.3kiB/164.3kiB
Annotate the video
gcloud
Use the gcloud CLI to call the detect-labels command
on the path of the video to be analyzed.
Before running the command, replace the following values:
YOUR_OBJECT : The filename of the video that you
uploaded. For example, dog.mp4 .
gcloud ml video detect-labels gs://videointelligence-quickstart-bucket/ YOUR_OBJECT
Command-line
Use curl to make a POST request to the videos:annotate method.
Before running the command, replace the following values:
YOUR_OBJECT : The filename of the video that you
uploaded. For example, dog.mp4 .
curl -X POST \
-H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \
-H "Content-Type: application/json; charset=utf-8" \
--data '{"inputUri":"gs://videointelligence-quickstart-bucket/ YOUR_OBJECT ","features":["LABEL_DETECTION"]}' \
"https://videointelligence.googleapis.com/v1/videos:annotate"
The Video Intelligence API creates an operation to process your request.
The response includes the operation name:
{
"name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID "
}
You can request information on the operation by calling the v1.operations
endpoint, replacing OPERATION_NAME in the example below with the name returned in the previous step:
curl -X GET \
-H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \
https://videointelligence.googleapis.com/v1/ OPERATION_NAME
This command returns information related to your operation. If the operation has
completed, a done field is included and set to true :
{
"name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID " ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress" ,
"annotationProgress" : [
{
"inputUri" : "/videointelligence-quickstart-bucket/ YOUR_OBJECT " ,
"progressPercent" : 100 ,
"startTime" : "2020-04-01T22:13:17.978847Z" ,
"updateTime" : "2020-04-01T22:13:29.576004Z"
}
]
},
"done" : true ,
...
}
After about a minute, the request returns the annotation results. The results
should look similar to the following:
{
"name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID " ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress" ,
"annotationProgress" : [
{
"inputUri" : "videointelligence-quickstart-bucket/ YOUR_OBJECT " ,
"progressPercent" : 100 ,
"startTime" : "2020-04-01T22:13:17.978847Z" ,
"updateTime" : "2020-04-01T22:13:29.576004Z"
}
]
},
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse" ,
"annotationResults" : [
{
"inputUri" : "/videointelligence-quickstart-bucket/ YOUR_OBJECT " ,
"segmentLabelAnnotations" : [
{
"entity" : {
"entityId" : "/m/07bsy" ,
"description" : "transport" ,
"languageCode" : "en-US"
},
"segments" : [
{
"segment" : {
"startTimeOffset" : "0s" ,
"endTimeOffset" : "38.757872s"
},
"confidence" : 0.81231534
}
]
},
{
"entity" : {
"entityId" : "/m/01n32" ,
"description" : "city" ,
"languageCode" : "en-US"
},
"categoryEntities" : [
{
"entityId" : "/m/043rvww" ,
"description" : "geographical feature" ,
"languageCode" : "en-US"
}
],
"segments" : [
{
"segment" : {
"startTimeOffset" : "0s" ,
"endTimeOffset" : "38.757872s"
},
"confidence" : 0.3942462
}
]
},
...
{
"entity" : {
"entityId" : "/m/06gfj" ,
"description" : "road" ,
"languageCode" : "en-US"
},
"segments" : [
{
"segment" : {
"startTimeOffset" : "0s" ,
"endTimeOffset" : "38.757872s"
},
"confidence" : 0.86698604
}
]
}
]
}
]
}
}
Congratulations! You've sent your first request to the Video Intelligence API.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used on this page, do one of the following:
If you want to continue using the project that you created, then use the
gcloud storage rm command with the --recursive flag to delete the bucket
and anything inside of it:
gcloud storage rm gs://videointelligence-quickstart-bucket --recursive
If you don't need the project that you created for this quickstart, then
delete the project.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Work through the How-To Guides .
Work through the Samples & Tutorials .
Consult the API Reference for complete
information on all API calls.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
