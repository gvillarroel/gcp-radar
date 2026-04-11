---
title: "Method: organizations.locations.organizationEvents.get \_|\_ Personalized\
  \ Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents/get
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents/get
  title: "Method: organizations.locations.organizationEvents.get \_|\_ Personalized\
    \ Service Health \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
Method: organizations.locations.organizationEvents.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Retrieves a resource containing information about an event affecting an organization .
HTTP request
GET https://servicehealth.googleapis.com/v1/{name=organizations/*/locations/*/organizationEvents/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Unique name of the event in this scope including organization and event ID using the form organizations/{organization_id}/locations/locations/global/organizationEvents/{event_id} .
organization_id - ID (number) of the project that contains the event. To get your organization_id , see Getting your organization resource ID . event_id - Organization event ID to retrieve.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of OrganizationEvent .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
servicehealth.organizationEvents.get
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
