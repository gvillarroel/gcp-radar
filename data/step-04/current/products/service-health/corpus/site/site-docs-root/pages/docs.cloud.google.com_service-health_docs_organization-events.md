---
title: "Access organization events with the Personalized Service Health API \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/organization-events
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/organization-events
  title: "Access organization events with the Personalized Service Health API \_|\_\
    \ Google Cloud Documentation"
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
Access organization events with the Personalized Service Health API
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to use the Service Health API to access events affecting your organization.
Personalized Service Health provides the OrganizationEvents and OrganizationImpacts API
resources, which let you get information on events that affect your
organization. This information includes:
Service health events that may impact one or more projects in an
organization.
List of projects that may be or are impacted by an event affecting
your organization.
To learn how to view organization-level incidents in
the Google Cloud console, see
View organization incidents in the Google Cloud console .
Before you begin
Enable the Service Health API
for at least one project under your organization. The OrganizationEvents
and OrganizationImpacts API resources get information only for projects that
have the Service Health API enabled.
Verify that billing is enabled for your Google Cloud project .
Set permissions to access the Service Health API .
Configure Identity and Access Management (IAM) permissions on your organization to use
the OrganizationEvents and OrganizationImpacts API resources. Run the
following command:
gcloud organizations add-iam-policy-binding $ ORGANIZATION_ID \
--member {USER|GROUP|SERVICE_ACCOUNT} \
--role roles/servicehealth.viewer
To get your ORGANIZATION_ID , see Getting your organization resource ID .
The IAM policies granted on an organization are inherited by
all projects in the organization. These policies allow you to access
organization and project event APIs across the organization.
References
See the OrganizationEvents
and
OrganizationImpacts
API reference for the methods you can use, and the meaning of the fields in the
response.
When setting the product or location, use the values found at
Google Cloud products and
locations .
List projects under an organization that may be affected by an event
See the quickstart .
List all active incidents for an organization
See the quickstart .
Get details for an event affecting an organization
You can use the Get API to view detailed information about an event affecting an
organization.
Before using any of the request data,
make the following replacements:
API_VERSION : The API version to use. Use v1 or v1beta .
ORGANIZATION_ID : your Google Cloud organization ID.
EVENT_ID : the ID of the event.
HTTP method and URL:
GET https://servicehealth.googleapis.com/ API VERSION /organizations/ ORGANIZATION_ID /locations/global/organizationEvents/ EVENT_ID
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://servicehealth.googleapis.com/ API VERSION /organizations/ ORGANIZATION_ID /locations/global/organizationEvents/ EVENT_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://servicehealth.googleapis.com/ API VERSION /organizations/ ORGANIZATION_ID /locations/global/organizationEvents/ EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "organizations/ ORGANIZATION_ID /locations/global/organizationEvents/ EVENT_ID ",
"title": "We are experiencing a connectivity issue affecting Google Cloud SQL in us-east1, australia-southeast2.",
"description": "The issue with Google Cloud SQL has been resolved for all affected projects as of Tuesday, 2022-10-18 11:00 US/Pacific. We thank you for your patience while we worked on resolving the issue.",
"category": "INCIDENT",
"detailedCategory": "CONFIRMED_INCIDENT",
"state": "CLOSED",
"detailedState": "RESOLVED",
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
If you don't have
permissions to get events,
you will get the following PERMISSION_DENIED error.
{
"error": {
"code": 403,
"message": "Permission 'servicehealth.organizationEvents.get' denied on resource '//servicehealth.googleapis.com/organizations/ ORGANIZATION_ID /locations/global/organizationEvents/ EVENT_ID ' (or it may not exist).",
"status": "PERMISSION_DENIED",
"details": [
{
"@type": "type.googleapis.com/google.rpc.ErrorInfo",
"reason": "IAM_PERMISSION_DENIED",
"domain": "servicehealth.googleapis.com",
"metadata": {
"resource": "organizations/ ORGANIZATION_ID /locations/global/organizationEvents/ EVENT_ID ",
"permission": "servicehealth.organizationEvents.get"
}
}
]
}
}
To fix this error, set the required permissions .
Get details for a project under an organization that may be affected by an event
For a given event, the event ID remains the same between your project and
organization events.
OrganizationImpact contains an EVENT_ID and a PROJECT_NUMBER , which you can use to
get details for an event affecting
your project. These details include
state and
relevance .
PROJECT_NUMBER is interchangeable with PROJECT_ID , which the Get API
returns.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
