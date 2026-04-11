---
title: "MigrationProgressEvent \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/MigrationProgressEvent
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/MigrationProgressEvent
  title: "MigrationProgressEvent \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Reference
Send feedback
MigrationProgressEvent
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
PrepareStepDetails
JSON representation
RedirectWritesStepDetails
JSON representation
An event signifying the start of a new step in a migration from Cloud Datastore to Cloud Firestore in Datastore mode .
JSON representation
{
"step" : enum ( MigrationStep ) ,
// Union field step_details can be only one of the following:
"prepareStepDetails" : {
object ( PrepareStepDetails )
} ,
"redirectWritesStepDetails" : {
object ( RedirectWritesStepDetails )
}
// End of list of possible types for union field step_details .
}
Fields
step
enum ( MigrationStep )
The step that is starting.
An event with step set to START indicates that the migration has been reverted back to the initial pre-migration state.
Union field step_details . Details about this step. step_details can be only one of the following:
prepareStepDetails
object ( PrepareStepDetails )
Details for the PREPARE step.
redirectWritesStepDetails
object ( RedirectWritesStepDetails )
Details for the REDIRECT_WRITES step.
PrepareStepDetails
Details for the PREPARE step.
JSON representation
{
"concurrencyMode" : enum ( ConcurrencyMode )
}
Fields
concurrencyMode
enum ( ConcurrencyMode )
The concurrency mode this database will use when it reaches the REDIRECT_WRITES step.
RedirectWritesStepDetails
Details for the REDIRECT_WRITES step.
JSON representation
{
"concurrencyMode" : enum ( ConcurrencyMode )
}
Fields
concurrencyMode
enum ( ConcurrencyMode )
The concurrency mode for this database.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-05 UTC."],[],[]]
