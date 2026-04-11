---
title: "InvocationConfig \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/reference/rest/v1/InvocationConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataform/reference/rest/v1/InvocationConfig
  title: "InvocationConfig \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Dataform
Reference
Send feedback
InvocationConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
QueryPriority
Includes various configuration options for a workflow invocation. If both includedTargets and includedTags are unset, all actions will be included.
JSON representation
{
"includedTargets" : [
{
object ( Target )
}
] ,
"includedTags" : [
string
] ,
"transitiveDependenciesIncluded" : boolean ,
"transitiveDependentsIncluded" : boolean ,
"fullyRefreshIncrementalTablesEnabled" : boolean ,
"serviceAccount" : string ,
"queryPriority" : enum ( QueryPriority )
}
Fields
includedTargets[]
object ( Target )
Optional. The set of action identifiers to include.
includedTags[]
string
Optional. The set of tags to include.
transitiveDependenciesIncluded
boolean
Optional. When set to true, transitive dependencies of included actions will be executed.
transitiveDependentsIncluded
boolean
Optional. When set to true, transitive dependents of included actions will be executed.
fullyRefreshIncrementalTablesEnabled
boolean
Optional. When set to true, any incremental tables will be fully refreshed.
serviceAccount
string
Optional. The service account to run workflow invocations under.
queryPriority
enum ( QueryPriority )
Optional. Specifies the priority for query execution in BigQuery. More information can be found at https://cloud.google.com/bigquery/docs/running-queries#queries .
QueryPriority
Types of priority for query execution in BigQuery.
Enums
QUERY_PRIORITY_UNSPECIFIED
Default value. This value is unused.
INTERACTIVE
Query will be executed in BigQuery with interactive priority. More information can be found at https://cloud.google.com/bigquery/docs/running-queries#queries .
BATCH
Query will be executed in BigQuery with batch priority. More information can be found at https://cloud.google.com/bigquery/docs/running-queries#batchqueries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-28 UTC."],[],[]]
