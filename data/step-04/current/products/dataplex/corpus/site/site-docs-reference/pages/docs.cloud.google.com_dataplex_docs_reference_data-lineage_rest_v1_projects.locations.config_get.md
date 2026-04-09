---
title: "Method: projects.locations.config.get \_|\_ Dataplex Universal Catalog \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.config/get
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.config/get
  title: "Method: projects.locations.config.get \_|\_ Dataplex Universal Catalog \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Reference
Send feedback
Method: projects.locations.config.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Get the Config for a given resource.
HTTP request
GET https://datalineage.googleapis.com/v1/{name}
Path parameters
Parameters
name
string
Required. REQUIRED: The resource name of the config to be fetched. Format: organizations/{organization_id}/locations/global/config folders/{folder_id}/locations/global/config projects/{projectId}/locations/global/config projects/{project_number}/locations/global/config It takes the form projects/{project}/locations/{location}/config .
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Config .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
datalineage.configs.get
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-29 UTC."],[],[]]
