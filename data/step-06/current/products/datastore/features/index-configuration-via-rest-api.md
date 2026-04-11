---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.874Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Index configuration via REST API"
feature_slug: "index-configuration-via-rest-api"
latest_feature_date: "2020-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
  - "https://docs.cloud.google.com/datastore/docs/tools/indexconfig"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
keywords:
  - "index"
  - "configuration"
  - "via"
  - "rest"
  - "api"
  - "datastore"
  - "indexes"
  - "can"
---

# Index configuration via REST API

Product: Datastore
Coverage: LOW

## Step 02 Summary

Datastore indexes can be configured using the REST API.

## Extended Definition

Datastore indexes can be configured using the REST API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- [https://docs.cloud.google.com/datastore/docs/tools/indexconfig](https://docs.cloud.google.com/datastore/docs/tools/indexconfig)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)

## Supporting Pages

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multiple databases You can use gcloud firestore to manage a single index for Datastore mode or use gcloud datastore with an index.yaml file to manage all the indexes under a database. gcloud firestore gcloud firestore indexes composite create --api-scope=datastore-mode-api --query-scope= QUERY SCOPE --database= DATABASE ID gcloud datastore gcloud alpha datastore indexes create index.yaml --database= DATABASE ID Replace the following: DATABASE ID : a database ID.
- Index configuration Firestore in Datastore mode provides built-in , or automatic, indexes for queries of the following forms: Kindless queries using only ancestor and key filters Queries using only ancestor and equality filters Queries using only inequality filters (which are limited to a single property ) Queries using only ancestor filters, equality filters on properties, and inequality filters on keys Queries with no filters and only one sort order on a property, either ascending or descending As an example, by default, Datastore mode databases automatically predefine two single property indexes for each property of each entity kind, one in ascending order and one in descending order.
- This will require 9 index entries, one for each possible combination of property values: ( 'fun' , 'alice' , NOW() ) ( 'fun' , 'bob' , NOW() ) ( 'fun' , 'charlie' , NOW() ) ( 'programming' , 'alice' , NOW() ) ( 'programming' , 'bob' , NOW() ) ( 'programming' , 'charlie' , NOW() ) ( 'learn' , 'alice' , NOW() ) ( 'learn' , 'bob' , NOW() ) ( 'learn' , 'charlie' , NOW() ) When the same property is repeated multiple times, Firestore in Datastore mode can detect exploding indexes and suggest an alternative index.
- In this case, you can circumvent the exploding index by manually configuring an index in your index configuration file: indexes: - kind: Task properties: - name: tags - name: created - kind: Task properties: - name: collaborators - name: created This reduces the number of entries needed to only ( tags created + collaborators created ) , or 6 entries instead of 9: ( 'fun' , NOW() ) ( 'programming' , NOW() ) ( 'learn' , NOW() ) ( 'alice' , NOW() ) ( 'bob' , NOW() ) ( 'charlie' , NOW() ) Any commit operation that would cause an index to exceed the index entry or size limit will fail.

### Composite Index Configuration \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/tools/indexconfig](https://docs.cloud.google.com/datastore/docs/tools/indexconfig)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, a recently completed composite index build shows the following information: { "operations": [ { "name": "projects/ project-id /operations/S01vcFVpSmdBQ0lDDCoDIGRiNTdiZDQNmE4YS0yMTVmNWUzZSQadGx1YWZlZAcSMXRzYWVzdS1yZXhlZG5pLW5pbWRhFQpWEg", "done": true, "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.IndexOperationMetadata", "common": { "endTime": "2020-06-23T16:55:29.923562Z", "operationType": "CREATE INDEX", "startTime": "2020-06-23T16:55:10Z", "state": "SUCCESSFUL" }, "indexId": "CICAJiUpoMK", "progressEntities": { "workCompleted": "2193027", "workEstimated": "2198182" } }, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.Index", "ancestor": "NONE", "indexId": "CICAJiUpoMK", "kind": "Task", "projectId": " project-id ", "properties": [ { "direction": "ASCENDING", "name": "priority" }, { "direction": "ASCENDING", "name": "done" }, { "direction": "DESCENDING", "name": "created" } ], "state": "READY" } }, ] } Describing a single operation Instead of listing all long-running operations, you can list the details of a single operation: gcloud Use the operations describe command to show the status of a composite index build. gcloud datastore operations describe operation-name rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Updating composite indexes The datastore indexes create command looks at your local Datastore composite index configuration (the index.yaml file), and if the composite index configuration defines an composite index that doesn't exist yet in your production Datastore mode database, your database creates the new composite index.
- Deleting unused composite indexes When you change or remove a composite index from the composite index configuration, the original composite index is not deleted from your Datastore mode database automatically.
- When you are sure that old composite indexes are no longer needed, you can delete them by using the datastore indexes cleanup command.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / Adds a task entity to the Datastore. @param description The task description @return The {@link Key} of the entity @throws DatastoreException if the ID allocation or put fails / Key addTask ( String description ) { Key key = datastore . allocateId ( keyFactory . newKey ()); Entity task = Entity . newBuilder ( key ) . set ( "description" , StringValue . newBuilder ( description ). setExcludeFromIndexes ( true ). build ()) . set ( "created" , Timestamp . now ()) . set ( "done" , false ) . build (); datastore . put ( task ); return key ; } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . async function addTask ( description ) { const taskKey = datastore . key ( 'Task' ); const entity = { key : taskKey , data : [ { name : 'created' , value : new Date (). toJSON (), }, { name : 'description' , value : description , excludeFromIndexes : true , }, { name : 'done' , value : false , }, ], }; try { await datastore . save ( entity ); console . log ( Task ${ taskKey . id } created successfully. ); } catch ( err ) { console . error ( 'ERROR:' , err ); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . def add task description require "google/cloud/datastore" datastore = Google :: Cloud :: Datastore . new task = datastore . entity "Task" do t t [ "description" ] = description t [ "created" ] = Time . now t [ "done" ] = false t . exclude from indexes! "description" , true end datastore . save task puts task . key . id task . key . id end For this application, we also provide a method to update the done property, to indicate the task is complete: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Datastore\DatastoreClient; / Create a new task with a given description. @param string $projectId The Google Cloud project ID. @param string $description / function add task(string $projectId, string $description) { $datastore = new DatastoreClient(['projectId' => $projectId]); $taskKey = $datastore->key('Task'); $task = $datastore->entity( $taskKey, [ 'created' => new DateTime(), 'description' => $description, 'done' => false ], ['excludeFromIndexes' => ['description']] ); $datastore->insert($task); printf('Created new task with ID %d.' .

