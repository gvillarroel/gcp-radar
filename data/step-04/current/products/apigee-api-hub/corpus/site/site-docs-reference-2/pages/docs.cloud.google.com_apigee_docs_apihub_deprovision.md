---
title: "Deprovision Apigee API hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/deprovision
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/deprovision
  title: "Deprovision Apigee API hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Deprovision Apigee API hub
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
This page describes how to deprovision an API hub instance from your Google Cloud project. Deprovisioning an API hub instance removes all associated resources, including APIs, versions, deployments, and any Apigee organizations (with no Apigee instances ) from your project.
Note: Deprovisioning an API hub instance doesn't impact or delete any existing Apigee data, such as API proxies or proxy deployments.
Before you begin
Grant the Cloud API hub Admin ( roles/apiHub.admin ) IAM role on the project.
Grant the Cloud API hub Provisioning Admin ( roles/apihub.provisioningAdmin ) role on the default service account.
For more information about granting roles, see Manage access to service accounts, projects, folders, and organizations .
Delete all plugin instances from API hub.
If you are using API hub with Apigee, then you must delete all the Apigee instances before you can deprovision API hub.
Deprovision an API hub instance
To deprovision an API hub instance, do the following:
Warnings:
Deprovisioning an API hub instance deletes all the data associated with the instance. Any associated Apigee organizations (with no Apigee instances ) are also deleted. This action can't be undone.
Once deprovisioned, you can re-provision an API hub instance again. However, you will need to wait 7 days before reprovisioning.
Console
In the Google Cloud console, go to the API hub page.
Go to API hub
Click settings Settings from the left navigation menu to open the Settings page.
Select the Actions tab.
In the Deprovision API hub instance section, click Deprovision API hub .
In the confirmation dialog, enter deprovision to confirm.
A long-running operation is created to deprovision the API hub instance. You will be redirected to the Get started with API hub page when the deprovisioning is complete.
REST API
Look up the project ID of the project where the API hub instance is located:
curl --location
'https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /apiHubInstances:lookup' \
--header 'Authorization: Bearer $(gcloud auth print-access-token)'
Replace the following:
PROJECT_ID : the project ID of the Google Cloudproject where the API hub instance is provisioned.
LOCATION : the location of the API hub instance.
The output is similar to the following:
{
"apiHubInstance": {
"name": "projects/ PROJECT_ID /locations/ LOCATION /apiHubInstances/ INSTANCE_ID ",
"createTime": "2024-05-10T06:22:43.790772Z",
"updateTime": "2024-05-10T06:22:44.657220Z",
"state": "ACTIVE",
"config": {
"cmekKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID ",
"vertexLocation": " VERTEX_LOCATION ",
"encryptionType": "CMEK"
}
}
}
The output contains the project ID, location, instance ID, and the encryption details of the API hub instance.
Note: You can only deprovision an API hub instance if the state of the instance is ACTIVE .
Delete the API hub instance:
curl --location --request DELETE
'https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /apiHubInstances/ INSTANCE_ID ' \
--header 'Authorization: Bearer $(gcloud auth print-access-token)'
Replace the following:
PROJECT_ID : the project ID of the Google Cloud project where the API hub instance is provisioned.
LOCATION : the location of the API hub instance.
INSTANCE_ID : the ID of the API hub instance.
The output is similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.apihub.v1.OperationMetadata",
"createTime": "2025-03-28T07:41:23.020949825Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /apiHubInstances/ INSTANCE_ID ",
"verb": "delete",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
The API returns a long-running operation ID. You can use the operation ID to check the status of the deletion.
To check the status of the deletion, run the following command:
curl --location
'https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ' \
--header 'Authorization: Bearer $(gcloud auth print-access-token)'
Replace the following:
PROJECT_ID : the project ID of the Google Cloud project where the API hub instance is provisioned.
LOCATION : the location of the API hub instance.
OPERATION_ID : the operation ID returned by the previous command.
The output is similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.apihub.v1.OperationMetadata",
"createTime": "2025-03-28T07:41:23.020949825Z",
"endTime": "2025-03-28T07:45:12.648333602Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /apiHubInstances/ INSTANCE_ID ",
"verb": "delete",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.protobuf.Empty"
}
}
The API returns a done value of true when the deletion is complete.
Considerations
Once deprovisioned, you can re-provision an API hub instance again. However, you will need to wait 7 days before reprovisioning.
What's next
Learn about provisioning an API hub instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
