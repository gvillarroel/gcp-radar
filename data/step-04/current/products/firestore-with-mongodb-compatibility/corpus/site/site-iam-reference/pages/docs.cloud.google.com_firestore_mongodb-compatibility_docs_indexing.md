---
title: "Manage indexes \_|\_ Firestore with MongoDB compatibility \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing
  title: "Manage indexes \_|\_ Firestore with MongoDB compatibility \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore with MongoDB compatibility
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage indexes
This page describes how to manage your indexes. To learn more
about indexes, see Indexes overview .
Before you begin
Before you can create an index in Firestore with MongoDB compatibility, make sure that you are assigned any of the following roles:
roles/datastore.owner
roles/datastore.indexAdmin
roles/editor
roles/owner
To grant a role, see Grant a single role .
For more information about Firestore roles and associated permissions, see Predefined roles .
If you have defined custom roles, assign all of the following permissions to create indexes:
datastore.indexes.create
datastore.indexes.delete
datastore.indexes.get
datastore.indexes.list
datastore.indexes.update
Create an index
To create an index, complete the following steps:
MongoDB API
Use the createIndex() method to create an index. For example:
db.restaurants.createIndex ({ "cuisine" : 1 })
db.restaurants.createIndex ({ "cuisine" : 1 } , { sparse: true })
Index creation with db.runCommand() is also supported with at most one index.
db.runCommand ({ "createIndexes" : "restaurant" , "index" : [{ "key" : { "cuisine" :1 } , { "name" : "cuisine_index" }]})
Note the following limitations:
You can create only one index per request. db. collection .createIndexes() is not supported.
Audit logs for index creation with the MongoDB API use the method name google.firestore.admin.v1.FirestoreAdmin.CreateIndex .
For supported index options, see indexes and index properties .
Google Cloud console
In the Google Cloud console, go to the Databases page.
Go to Databases
Select a database from the list of databases.
In the navigation menu, click Indexes .
Click Create Index .
Enter a Collection ID .
Add one or more field paths and select an index option for each.
Select a field presence option, either non-sparse or sparse.
Optionally, set the multikey index
or unique index options.
Click Create .
Your new index is displayed in the list of indexes and
Firestore with MongoDB compatibility begins creating your index. When your index is created,
you will see a green check mark next to the index. If index
is not created, see Index building errors
for possible causes.
gcloud CLI
To create an index, use the
gcloud firestore indexes composite create
command. Set api-scope to mongodb-compatible-api .
gcloud firestore indexes composite create \
--database=' DATABASE_ID ' \
--collection-group= COLLECTION \
--field-config= FIELD_CONFIGURATION \
--query-scope=collection-group \
--density=dense \
--api-scope=mongodb-compatible-api
Replace the following:
DATABASE_ID : a database ID.
COLLECTION : a collection name.
FIELD_CONFIGURATION : a field configuration. For each field,
add --field-config=field-path= . For example:
--field-config=field-path=user-id,order=descending \
--field-config=field-path=score,order=descending
For more information about configuring these fields, see --field-config .
To create a sparse index, set --density=sparse-any .
To create a multikey index, add the --multikey flag.
To create a unique index, add the --unique flag.
Terraform
Use the
google_firestore_index
resource and set api_scope to MONGODB_COMPATIBLE_API and query_scope to COLLECTION_GROUP .
resource "google_firestore_index" "index" {
database = " DATABASE_ID "
collection = " COLLECTION "
api_scope = "MONGODB_COMPATIBLE_API"
query_scope = "COLLECTION_GROUP"
// You can include multiple field blocks
fields {
field_path = " FIELD_PATH "
order = " ORDER "
}
// Optional
multikey = true
density = " DENSITY "
}
Replace the following:
DATABASE_ID : The database ID for your chosen database
COLLECTION : The name of the collection to index
FIELD_PATH : The name of the field to index
ORDER : One of ASCENDING or DESCENDING
DENSITY : One of SPARSE_ANY or DENSE
Delete an index
To delete an index, complete the following steps:
MongoDB API
Use the dropIndex() method to delete an index. For example:
Delete an index using index name
db.restaurants.dropIndex ( "cuisine_index" )
Delete an index using index definition
db.restaurants.dropIndex ({ "cuisine" : 1 })
Google Cloud console
In the Google Cloud console, go to the Databases page.
Go to Databases
From the list of databases, select a database.
In the navigation menu, click Indexes .
In the list of indexes, choose Delete from the More button
more_vert for the index you want to delete.
Click Delete Index .
gcloud CLI
To find the name of the index, use the gcloud firestore indexes composite list command.
gcloud firestore indexes composite list \
--database=' DATABASE_ID '
Replace DATABASE_ID with the database ID.
To delete the index, use the
gcloud firestore indexes composite delete
command.
gcloud firestore indexes composite delete INDEX_NAME \
--database=' DATABASE_ID '
Replace the following:
INDEX_NAME : the name of an index
DATABASE_ID : a database ID
Index build time
To build an index, Firestore with MongoDB compatibility must create the index and then
backfill the index entries with existing data. The time required to create an
index is determined by the following:
The minimum build time for an index is a few minutes, even for an empty database.
The time required to backfill index entries depends on how much existing data
belongs in the new index. The more field values that match the index definition,
the longer it takes to backfill the index entries.
Manage long-running operations
Index builds are long-running operations . The following sections describe
how to work with long-running operations for indexes.
Key Term: Firestore with MongoDB compatibility supports several administrative operations that
can take a long time to complete. These operations are called long-running
operations . Firestore with MongoDB compatibility includes features to execute and manage long-
running operations. Supported long-running operations include index builds and
export operations.
After you start to create an index, Firestore with MongoDB compatibility assigns
the operation a unique name. Operation names are prefixed with projects/ PROJECT_ID /databases/ DATABASE_ID /operations/ ,
for example:
projects/ PROJECT_ID /databases/ DATABASE_ID /operations/ASA1MTAwNDQxNAgadGx1YWZlZAcSeWx0aGdpbi1zYm9qLW5pbWRhEgopEg
You can omit the prefix when specifying an operation name for
the describe command.
List all long-running operations
To list long-running operations, use the
gcloud firestore operations list
command. This command lists ongoing and recently completed operations.
Operations are listed for a few days after completion:
gcloud firestore operations list
Check operation status
Instead of listing all long-running operations, you can list the details of
a single operation:
gcloud firestore operations describe operation-name
Estimating the completion time
As your operation runs, see the value of the state field
for the overall status of the operation.
A request for the status of a long-running operation also returns the metrics
workEstimated and workCompleted . workEstimated shows the estimated total
number of documents an
operation will process. workCompleted
shows the number of documents processed so far. After the operation completes,
workCompleted reflects the total number of documents that were
actually processed, which might be different than the value of workEstimated .
To estimate an operation's progress, divide workCompleted by workEstimated .
Note: The estimate might be inaccurate because it depends on delayed statistics
collection.
The following is an example of the progress of creating an index:
{
"operations": [
{
"name": "projects/ project-id /operations/AyAyMDBiM2U5NTgwZDAtZGIyYi0zYjc0LTIzYWEtZjg1ZGdWFmZWQHEjF0c2Flc3UtcmV4ZWRuaS1uaW1kYRUKSBI",
"metadata": {
"@type": "type.googleapis.com/google.firestore.admin.v1.IndexOperationMetadata",
"common": {
"operationType": "CREATE_INDEX",
"startTime": "2020-06-23T16:52:25.697539Z",
"state": "PROCESSING"
},
"progressDocuments": {
"workCompleted": "219327",
"workEstimated": "2198182"
}
},
},
...
When an operation completes, the operation description will contain
"done": true . See the value of the state field for
the result of the operation. If the done field is not set in the response,
then the operation has not completed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
