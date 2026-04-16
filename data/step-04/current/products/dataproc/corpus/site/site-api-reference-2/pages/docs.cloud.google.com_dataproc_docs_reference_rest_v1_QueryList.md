---
title: "QueryList \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/QueryList
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/QueryList
  title: "QueryList \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Reference
Send feedback
QueryList
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A list of queries to run on a cluster.
JSON representation
{
"queries" : [
string
]
}
Fields
queries[]
string
Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob:
"hiveJob": {
"queryList": {
"queries": [
"query1",
"query2",
"query3;query4",
]
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
