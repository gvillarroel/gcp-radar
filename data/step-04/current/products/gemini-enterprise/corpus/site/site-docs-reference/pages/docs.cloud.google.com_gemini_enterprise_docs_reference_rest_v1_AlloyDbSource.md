---
title: "AlloyDbSource \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AlloyDbSource
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AlloyDbSource
  title: "AlloyDbSource \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Reference
Send feedback
AlloyDbSource
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AlloyDB source import data from.
JSON representation
{
"projectId" : string ,
"locationId" : string ,
"clusterId" : string ,
"databaseId" : string ,
"tableId" : string ,
"gcsStagingDir" : string
}
Fields
projectId
string
The project ID that contains the AlloyDB source. Has a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
locationId
string
Required. The AlloyDB location to copy the data from with a length limit of 256 characters.
clusterId
string
Required. The AlloyDB cluster to copy the data from with a length limit of 256 characters.
databaseId
string
Required. The AlloyDB database to copy the data from with a length limit of 256 characters.
tableId
string
Required. The AlloyDB table to copy the data from with a length limit of 256 characters.
gcsStagingDir
string
Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the AlloyDB export to a specific Cloud Storage directory.
Ensure that the AlloyDB service account has the necessary Cloud Storage Admin permissions to access the specified Cloud Storage directory.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-08 UTC."],[],[]]
