---
title: "CodeCompilationConfig \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/reference/rest/v1/CodeCompilationConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataform/reference/rest/v1/CodeCompilationConfig
  title: "CodeCompilationConfig \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
CodeCompilationConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
NotebookRuntimeOptions
JSON representation
Configures various aspects of Dataform code compilation.
JSON representation
{
"defaultDatabase" : string ,
"defaultSchema" : string ,
"defaultLocation" : string ,
"assertionSchema" : string ,
"vars" : {
string : string ,
...
} ,
"databaseSuffix" : string ,
"schemaSuffix" : string ,
"tablePrefix" : string ,
"builtinAssertionNamePrefix" : string ,
"defaultNotebookRuntimeOptions" : {
object ( NotebookRuntimeOptions )
}
}
Fields
defaultDatabase
string
Optional. The default database (Google Cloud project ID).
defaultSchema
string
Optional. The default schema (BigQuery dataset ID).
defaultLocation
string
Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations .
assertionSchema
string
Optional. The default schema (BigQuery dataset ID) for assertions.
vars
map (key: string, value: string)
Optional. User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
databaseSuffix
string
Optional. The suffix that should be appended to all database (Google Cloud project ID) names.
schemaSuffix
string
Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
tablePrefix
string
Optional. The prefix that should be prepended to all table names.
builtinAssertionNamePrefix
string
Optional. The prefix to prepend to built-in assertion names.
defaultNotebookRuntimeOptions
object ( NotebookRuntimeOptions )
Optional. The default notebook runtime options.
NotebookRuntimeOptions
Configures various aspects of Dataform notebook runtime.
JSON representation
{
"aiPlatformNotebookRuntimeTemplate" : string ,
// Union field execution_sink can be only one of the following:
"gcsOutputBucket" : string
// End of list of possible types for union field execution_sink .
}
Fields
aiPlatformNotebookRuntimeTemplate
string
Optional. The resource name of the Colab runtime template , from which a runtime is created for notebook executions. If not specified, a runtime is created with Colab's default specifications.
Union field execution_sink . The location to store the notebook execution result. execution_sink can be only one of the following:
gcsOutputBucket
string
Optional. The Google Cloud Storage location to upload the result to. Format: gs://bucket-name .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
