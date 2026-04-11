---
title: "Getting Started with the Service Control API \_|\_ Service Infrastructure\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started
  title: "Getting Started with the Service Control API \_|\_ Service Infrastructure\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Guides
Send feedback
Getting Started with the Service Control API
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the basic steps necessary to set up the Service Control API
on your local machine and test it using the curl command.
Initial setup
The Service Control API works with
managed services . To use the
Service Control API, you need to first create a managed service using
the Service Management API. For more information, see
Service Management Getting Started .
After you have created a managed service, you need to complete the following
steps before using the Service Control API from your managed service.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Service Control API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable servicecontrol.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/servicemanagement.serviceController
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Service Control API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable servicecontrol.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/servicemanagement.serviceController
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Test with curl
First, define a convenient shell alias for calling Google REST APIs:
alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" '
The following shell command sequence demonstrates the incremental steps to call
the Service Control API.
# Call with invalid service name "invalid.com". For security and privacy
# reasons, the permission check typically happens before other checks.
$ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/invalid.com:check
{
"error": {
"code": 403,
"message": "Permission 'servicemanagement.services.check' denied on service 'invalid.com'.",
"status": "PERMISSION_DENIED"
}
}
# Call without proper permission on a service.
$ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/servicecontrol.googleapis.com:check
{
"error": {
"code": 403,
"message": "Permission 'servicemanagement.services.check' denied on service 'servicecontrol.googleapis.com'.",
"status": "PERMISSION_DENIED"
}
}
# Call with invalid request.
$ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check
{
"error": {
"code": 400,
"message": "Request contains an invalid argument.",
"status": "INVALID_ARGUMENT"
}
}
# This and following call assume that the service, operation name and
# project being checked are "endpointsapis.appspot.com",
# "google.example.hello.v1.HelloService.GetHello" and
# "endpointsapis-consumer" correspondingly.
# Change to the name of your managed service, operation, and project.
# Call with invalid request.
$ gcurl -d '{
"operation": {
"operationId": "123e4567-e89b-12d3-a456-426655440000",
"consumerId": "project:endpointsapis-consumer",
"startTime": "2016-06-12T22:00:15Z",
"operationName": "google.example.hello.v1.HelloService.GetHello"
}
}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check
{
"checkErrors": [
{
"code": "SERVICE_NOT_ACTIVATED",
"detail": "Service 'endpointsapis.appspot.com' is not enabled for consumer 'project:endpointsapis-consumer'."
}
]
}
# Successful call to "services.check" method after the API is enabled for
# the project.
$ gcurl -d '{
"operation": {
"operationId": "123e4567-e89b-12d3-a456-426655440000",
"consumerId": "project:endpointsapis-consumer",
"startTime":"2016-07-31T05:20:00Z",
"operationName":"google.example.hello.v1.HelloService.GetHello"
}
}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check
{
"operationId": "123e4567-e89b-12d3-a456-426655440000"
}
After you have completed the preceding steps:
You have a functional local test setup that you can use to call any Google
Cloud Platform APIs.
You have a functional service that you can use with the
Service Management API
and the
Service Control API .
You have a service account with correct permissions that you can use to
run your service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
