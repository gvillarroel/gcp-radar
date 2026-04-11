---
title: "Manage events for a project \_|\_ Personalized Service Health \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/project-events
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/project-events
  title: "Manage events for a project \_|\_ Personalized Service Health \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Guides
Send feedback
Manage events for a project
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how-tos for using the Service Health API to manage
events affecting a single project.
Before you begin
Verify that billing is enabled for your Google Cloud project .
Enable the Service Health API
for the project you want to manage events for.
Set permissions to access the Service Health API .
References
See the Events API reference ( v1 , v1beta )
for the methods you can use and the meaning of the fields in the responses.
When setting the product or location, use the values found at
Google Cloud products and
locations .
List all active incidents for a project
See the quickstart .
Get incident details
You can use the Get API to view detailed information about an event.
Before using any of the request data,
make the following replacements:
API_VERSION : The API version to use. Use v1 or v1beta .
PROJECT_ID : your Google Cloud project ID.
EVENT_ID : the ID of the event.
HTTP method and URL:
GET https://servicehealth.googleapis.com/ API VERSION /projects/ PROJECT_ID /locations/global/events/ EVENT_ID
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://servicehealth.googleapis.com/ API VERSION /projects/ PROJECT_ID /locations/global/events/ EVENT_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://servicehealth.googleapis.com/ API VERSION /projects/ PROJECT_ID /locations/global/events/ EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/global/events/ EVENT_ID ",
"title": "We are experiencing a connectivity issue affecting Google Cloud SQL in us-east1, australia-southeast2.",
"description": "The issue with Google Cloud SQL has been resolved for all affected projects as of Tuesday, 2022-10-18 11:00 US/Pacific. We thank you for your patience while we worked on resolving the issue.",
"category": "INCIDENT",
"detailedCategory": "CONFIRMED_INCIDENT",
"state": "CLOSED",
"detailedState": "RESOLVED",
"artifacts": [
{
"artifact": "projects/ PROJECT_ID /locations/global/artifacts/artifact_id",
"artifactCategory": "ARTIFACT_CATEGORY_INCIDENT_REPORT",
}
],
"eventImpacts": [
{
"product": {
"productName": "Google Cloud SQL",
"id": "hV87iK5DcEXKgWU2kDri",
},
"location": {
"locationName": "us-central1",
}
}
],
"relevance": "RELATED",
"updates": [
{
"updateTime": "2022-10-18T17:41:20.112287Z",
"title": "We are experiencing a connectivity issue affecting Google Cloud SQL in us-east1, australia-southeast2.",
"description": "We are experiencing an intermittent issue with Google Cloud SQL. Our engineering team continues to investigate the issue.",
"symptom": "None at this time.",
"workaround": "None at this time."
},
{
"updateTime": "2022-10-18T18:00:05.690761Z",
"title": "We are experiencing a connectivity issue affecting Google Cloud SQL in us-east1, australia-southeast2.",
"description": "The issue with Google Cloud SQL has been resolved for all affected projects as of Tuesday, 2022-10-18 11:00 US/Pacific.\n\nWe thank you for your patience while we worked on resolving the issue.",
"symptom": "None at this time.",
"workaround": "None at this time."
}
],
"updateTime": "2022-10-18T18:00:05.690761Z",
"startTime": "2022-10-18T17:41:20.112287Z",
"endTime": "2022-10-18T18:00:05.690761Z",
}
If you don't have the
permissions to get events,
you will get the following PERMISSION_DENIED error.
{
"error": {
"code": 403,
"message": "Permission 'servicehealth.events.get' denied on resource '//servicehealth.googleapis.com/projects/ PROJECT_ID /locations/global/events/ EVENT_ID ' (or it may not exist).",
"status": "PERMISSION_DENIED",
"details": [
{
"@type": "type.googleapis.com/google.rpc.ErrorInfo",
"reason": "IAM_PERMISSION_DENIED",
"domain": "servicehealth.googleapis.com",
"metadata": {
"resource": "projects/ PROJECT_ID /locations/global/events/ EVENT_ID ",
"permission": "servicehealth.events.get"
}
}
]
}
}
To fix the error, set the required permissions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
