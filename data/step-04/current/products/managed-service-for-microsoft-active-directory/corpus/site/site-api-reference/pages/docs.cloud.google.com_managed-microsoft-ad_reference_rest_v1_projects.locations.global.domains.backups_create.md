---
title: "Method: backups.create \_|\_ Managed Microsoft AD \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups/create
  title: "Method: backups.create \_|\_ Managed Microsoft AD \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Managed Microsoft AD
Reference
Send feedback
Method: backups.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
Try it!
Full name : projects.locations.global.domains.backups.create
Creates a Backup for a domain.
HTTP request
POST https://managedidentities.googleapis.com/v1/{parent=projects/*/locations/global/domains/*}/backups
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The domain resource name using the form: projects/{projectId}/locations/global/domains/{domainName}
Authorization requires the following IAM permission on the specified resource parent :
managedidentities.backups.create
Query parameters
Parameters
backupId
string
Required. Backup Id, unique name to identify the backups with the following restrictions: * Must be lowercase letters, numbers, and hyphens * Must start with a letter. * Must contain between 1-63 characters. * Must end with a number or a letter. * Must be unique within the domain.
Request body
The request body contains an instance of Backup .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
