---
title: "Method: projects.locations.instances.backtestResults.exportMetadata \_|\_\
  \ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.backtestResults/exportMetadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.backtestResults/exportMetadata
  title: "Method: projects.locations.instances.backtestResults.exportMetadata \_|\_\
    \ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
Method: projects.locations.instances.backtestResults.exportMetadata
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
IAM Permissions
Export governance information for a BacktestResult resource. For information on the exported fields, see AML output data model .
HTTP request
POST https://financialservices.googleapis.com/v1/{backtestResult=projects/*/locations/*/instances/*/backtestResults/*}:exportMetadata
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
backtestResult
string
Required. The resource name of the BacktestResult.
Authorization requires the following IAM permission on the specified resource backtestResult :
financialservices.v1backtests.exportMetadata
Request body
The request body contains data with the following structure:
JSON representation
{
"structuredMetadataDestination" : {
object ( BigQueryDestination )
}
}
Fields
structuredMetadataDestination
object ( BigQueryDestination )
Required. BigQuery output where the metadata will be written.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the backtestResult resource:
financialservices.v1backtests.exportMetadata
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]
