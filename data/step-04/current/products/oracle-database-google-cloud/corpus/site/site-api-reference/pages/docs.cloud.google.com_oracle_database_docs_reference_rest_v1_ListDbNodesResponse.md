---
title: "ListDbNodesResponse \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/ListDbNodesResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/ListDbNodesResponse
  title: "ListDbNodesResponse \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Reference
Send feedback
ListDbNodesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response for DbNode.List .
JSON representation
{
"dbNodes" : [
{
object ( DbNode )
}
] ,
"nextPageToken" : string
}
Fields
dbNodes[]
object ( DbNode )
The list of DB Nodes
nextPageToken
string
A token identifying a page of results the node should return.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-02 UTC."],[],[]]
