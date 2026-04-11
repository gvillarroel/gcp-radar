---
title: "DatastoreFirestoreMigrationMetadata \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/DatastoreFirestoreMigrationMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/DatastoreFirestoreMigrationMetadata
  title: "DatastoreFirestoreMigrationMetadata \_|\_ Google Cloud Documentation"
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
DatastoreFirestoreMigrationMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Metadata for Datastore to Firestore migration operations.
The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern.
This singleton resource can be accessed at: "projects/{projectId}/operations/datastore-firestore-migration"
JSON representation
{
"migrationState" : enum ( MigrationState ) ,
"migrationStep" : enum ( MigrationStep )
}
Fields
migrationState
enum ( MigrationState )
The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode.
migrationStep
enum ( MigrationStep )
The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
