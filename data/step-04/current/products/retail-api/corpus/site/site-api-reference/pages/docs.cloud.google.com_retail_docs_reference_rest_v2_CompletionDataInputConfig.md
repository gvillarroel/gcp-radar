---
title: "CompletionDataInputConfig \_|\_ Vertex AI Search for commerce \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/CompletionDataInputConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/CompletionDataInputConfig
  title: "CompletionDataInputConfig \_|\_ Vertex AI Search for commerce \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Vertex AI Search for commerce
Reference
Send feedback
CompletionDataInputConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The input config source for completion data.
JSON representation
{
// Union field source can be only one of the following:
"bigQuerySource" : {
object ( BigQuerySource )
}
// End of list of possible types for union field source .
}
Fields
Union field source . The source of the input.
Supported BigQuerySource.data_schema values for suggestions imports:
suggestions (default): One JSON completion suggestion per line.
denylist : One JSON deny suggestion per line.
allowlist : One JSON allow suggestion per line. source can be only one of the following:
bigQuerySource
object ( BigQuerySource )
Required. BigQuery input source.
Add the IAM permission "BigQuery Data Viewer" for cloud-retail-customer-data-access@system.gserviceaccount.com before using this feature otherwise an error is thrown.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
