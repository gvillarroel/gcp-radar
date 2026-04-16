---
title: "Manage API supply chain dependencies \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/manage-dependencies
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/manage-dependencies
  title: "Manage API supply chain dependencies \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Manage API supply chain dependencies
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
This page explains how to manage API supply chain dependencies in API hub. For an overview of API supply chain in API hub, see API supply chain .
List dependencies
You can view or list all the dependencies in your API ecosystem using Google Cloud console or the List dependencies API.
Console
To list all the dependencies in your API ecosystem from API hub, do the following:
In the Google Cloud console, go to API hub > API supply chain .
Go to API hub
The API supply chain page appears displaying all the dependencies in your API ecosystem in list view .
In the Filter field, if needed, specify supplier
and/or consumer operations to return relevant dependencies. The filter feature lets you find all dependencies linked with specified
operations.
To view the dependencies in graph view , click lan (Open graph view) beside the consumer or supplier name in the list.
REST
To list all the dependencies using the List dependencies API, use the following command:
curl "https://apihub.googleapis.com/v1/projects/ HUB_PROJECT /locations/ HUB_LOCATION /dependencies"
-H "Authorization: Bearer: $(gcloud auth print-access-token)" -X GET -H "Content-Type: application/json"
Replace the following:
HUB_PROJECT : The name of your API hub host project. The host project was selected
when API hub was provisioned.
HUB_LOCATION : The location of the host project. The location was chosen when API
hub was provisioned.
Sample output:
{
"dependencies": [
{
"name": "projects/myproject/locations/us-central1/dependencies/user-to-pet",
"consumer": {
"displayName": "POST - /v2/user",
"operationResourceName": "projects/myproject/locations/us-central1/apis/payments-api/versions/version1/operations/createuser"
},
"supplier": {
"displayName": "POST - /v2/pet",
"operationResourceName": "projects/myproject/locations/us-central1/apis/payments-api/versions/version1/operations/addpet"
}
}
]
}
View dependency details
You can view the dependency details between API operations using Google Cloud console or the Get dependency details API.
Console
To view the details of a dependency from the Google Cloud console, do the following:
In the Google Cloud console, go to API hub > API supply chain .
Go to API hub
The API supply chain page appears displaying all the dependencies in your API ecosystem in list view .
In the Filter field, if needed, specify supplier
and/or consumer operations to return relevant dependencies. The filter feature lets you find all dependencies linked with specified
operations.
Locate the desired dependency and click See Details .
The Dependency pane appears displaying detailed information about the dependency such as the consumer and supplier details, dependency details, and the user defined attributes.
Alternatively, you can also use the API supply chain graph view to view the dependency details. For more information, see API supply chain graph edge .
REST
To view details of a dependency using the Get dependency details API, use the following command:
curl "https://apihub.googleapis.com/v1/projects/ HUB_PROJECT /locations/ HUB_LOCATION /dependencies/ DEPENDENCY_ID "
-H "Authorization: Bearer: $(gcloud auth print-access-token)" -X GET -H "Content-Type: application/json"
Replace the following:
HUB_PROJECT : The name of your API hub host project. The host project was selected
when API hub was provisioned.
HUB_LOCATION : The location of the host project. The location was chosen when API
hub was provisioned.
DEPENDENCY_ID : The unique ID of the dependency.
Sample response:
{
"name": "projects/myproject/locations/us-central1/dependencies/user-to-pet",
"consumer": {
"displayName": "POST - /v2/user",
"operationResourceName": "projects/myproject/locations/us-central1/apis/payments-api/versions/version1/operations/createuser"
},
"supplier": {
"displayName": "POST - /v2/pet",
"operationResourceName": "projects/myproject/locations/us-central1/apis/payments-api/versions/version1/operations/addpet"
},
"state": "VALIDATED",
"description": "Dependency from user to pet API",
"discoveryMode": "MANUAL",
"createTime": "2024-04-17T19:33:31.215978712Z",
"updateTime": "2024-04-17T19:33:31.737505297Z"
}
Here's a sample response, where the error condition indicates the supplier operation was removed
(a broken dependency):
{
"name": "projects/common-dev-15/locations/us-central1/dependencies/user-to-pet",
"consumer": {
"displayName": "POST - /v2/user",
"operationResourceName": "projects/common-dev-15/locations/us-central1/apis/payments-api/versions/2ff89c88-e8b6-48c4-a1c2-bdbb2a929bde/operations/createuser"
},
"supplier": {
"displayName": "POST - /v2/pet",
"operationResourceName": "projects/common-dev-15/locations/us-central1/apis/payments-api/versions/2ff89c88-e8b6-48c4-a1c2-bdbb2a929bde/operations/addpet"
},
"state": "VALIDATED",
"description": "Dependency from user to pet API",
"discoveryMode": "MANUAL",
"createTime": "2024-04-17T19:33:31.215978712Z",
"updateTime": "2024-04-17T19:33:31.737505297Z",
{
"error": "SUPPLIER_NOT_FOUND",
"errorTime": 2024-05-18T20:23:42.465324Z
}
}
Edit a dependency
You can edit a dependency using Google Cloud console or the Patch dependency API.
Note: The only editable attribute is the dependency description.
Console
To edit an API dependency from API hub, do the following:
In the Google Cloud console, go to API hub > API supply chain .
Go to API hub
The API supply chain page appears displaying all the dependencies in your API ecosystem in list view .
Locate the dependency that you want to edit and click See Details .
The Dependency pane appears.
Edit the description of the dependency under Dependency details .
Click Save .
REST
To edit a dependency using the Patch dependencies API, use the following command:
curl "https://apihub.googleapis.com/v1/projects/ HUB_PROJECT /locations/ HUB_LOCATION /dependencies/ DEPENDENCY_ID "
-H "Authorization: Bearer: $(gcloud auth print-access-token)" -X PATCH -H "Content-Type: application/json"
'{
'description': DESCRIPTION
}'
Replace the following:
HUB_PROJECT : The name of your API hub host project. The host project was selected
when API hub was provisioned.
HUB_LOCATION : The location of the host project. The location was chosen when API
hub was provisioned.
DEPENDENCY_ID : The ID of the dependency to edit.
DESCRIPTION : The description of the dependency.
Delete a dependency
You can delete a dependency using Google Cloud console or the Delete dependency API.
Console
To delete a dependency from API hub, do the following:
In the Google Cloud console, go to API hub > API supply chain .
Go to API hub
The API supply chain page appears displaying all the dependencies in your API ecosystem in list view .
In the Filter field, if needed, specify supplier
and/or consumer operations to return relevant dependencies. The filter feature lets you find all dependencies linked with specified
operations.
Locate a dependency of interest and click delete (Delete dependency) to delete the dependency.
REST
To delete a dependency using the Delete dependency API, use the following command:
curl "https://apihub.googleapis.com/v1/projects/ HUB_PROJECT /locations/ HUB_LOCATION /dependencies/ DEPENDENCY_ID "
-H "Authorization: Bearer: $(gcloud auth print-access-token)" -X DELETE -H "Content-Type: application/json"
Replace the following:
HUB_PROJECT : The name of your API hub host project. The host project was selected
when API hub was provisioned.
HUB_LOCATION : The location of the host project. The location was chosen when API
hub was provisioned.
DEPENDENCY_ID : The ID of the dependency to delete.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
