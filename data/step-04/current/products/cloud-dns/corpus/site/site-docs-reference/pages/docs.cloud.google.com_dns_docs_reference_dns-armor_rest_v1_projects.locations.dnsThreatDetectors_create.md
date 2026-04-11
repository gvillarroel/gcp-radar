---
title: "Method: projects.locations.dnsThreatDetectors.create \_|\_ Cloud DNS \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create
  title: "Method: projects.locations.dnsThreatDetectors.create \_|\_ Cloud DNS \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Reference
Send feedback
Method: projects.locations.dnsThreatDetectors.create
Stay organized with collections
Save and categorize content based on your preferences.
Creates a new DnsThreatDetector in a given project and location.
HTTP request
POST https://networksecurity.googleapis.com/v1/{parent=projects/*/locations/*}/dnsThreatDetectors
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The value for the parent of the DnsThreatDetector resource.
Query parameters
Parameters
dnsThreatDetectorId
string
Optional. The ID of the requesting DnsThreatDetector object. If this field is not supplied, the service generates an identifier.
Request body
The request body contains an instance of DnsThreatDetector .
Response body
If successful, the response body contains a newly created instance of DnsThreatDetector .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
networksecurity.dnsThreatDetectors.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-15 UTC."],[],[]]
