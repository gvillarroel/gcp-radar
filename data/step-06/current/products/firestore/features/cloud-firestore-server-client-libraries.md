---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.914Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Cloud Firestore server client libraries"
feature_slug: "cloud-firestore-server-client-libraries"
latest_feature_date: "2018-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library"
  - "https://docs.cloud.google.com/datastore/docs/reference/libraries"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
keywords:
  - "firestore"
  - "server"
  - "client"
  - "libraries"
  - "provides"
  - "php"
  - "ruby"
---

# Cloud Firestore server client libraries

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore provides server client libraries for C#, PHP, and Ruby.

## Extended Definition

Cloud Firestore provides server client libraries for C#, PHP, and Ruby.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- [https://docs.cloud.google.com/datastore/docs/reference/libraries](https://docs.cloud.google.com/datastore/docs/reference/libraries)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)

## Supporting Pages

### "Quickstart: Create a Firestore database by using a server client library\

- URL: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- Source ID: `site-docs-reference-required-4`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Firestore database by using a server client library This quickstart shows you how to set up Firestore, add data, and read data by using the C#, Go, Java, Node.js, PHP, Python, or Ruby server client library.
- Java Add the Firestore Java library to your app: Using Maven: <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.65.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-firestore</artifactId> </dependency> pom.xml If you are using Gradle or setting up without BOM, see the Firestore Client for Java README.
- WriteLine ( "Created Cloud Firestore client with project ID: {0}" , project ); Program . cs Ruby require "google/cloud/firestore" The project id parameter is optional and represents which project the client will act on behalf of.
- Add the server client library to your app Add the required dependencies and client libraries to your app.

### "Class FirestoreAdminClient (2.23.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class FirestoreAdminClient (2.23.0) Stay organized with collections Save and categorize content based on your preferences.
- FirestoreAdminClient () Initialize request argument(s) pitr snapshot = firestore admin v1.PitrSnapshot() pitr snapshot.database = "database value" request = firestore admin v1.CloneDatabaseRequest( parent="parent value", database id="database id value", pitr snapshot=pitr snapshot, ) Make the request operation = client . clone database (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[google.cloud.firestore admin v1.types.CloneDatabaseRequest, dict] The request object.
- FirestoreAdminClient () Initialize request argument(s) request = firestore admin v1.RestoreDatabaseRequest( parent="parent value", database id="database id value", backup="backup value", ) Make the request operation = client . restore database (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[google.cloud.firestore admin v1.types.RestoreDatabaseRequest, dict] The request object.
- FirestoreAdminClient () Initialize request argument(s) field = firestore admin v1.Field() field.name = "name value" request = firestore admin v1.UpdateFieldRequest( field=field, ) Make the request operation = client . update field (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[google.cloud.firestore admin v1.types.UpdateFieldRequest, dict] The request object.

### Datastore mode client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/libraries](https://docs.cloud.google.com/datastore/docs/reference/libraries)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Entity ( key = task key ) task [ "description" ] = "Buy milk" Saves the entity datastore client . put ( task ) print ( f "Saved { task . key . name } : { task [ 'description' ] } " ) Ruby Imports the Google Cloud client library require "google/cloud/datastore" Instantiate a client datastore = Google :: Cloud :: Datastore . new The kind for the new entity kind = "Task" The name/ID for the new entity task name = "sampleTask" The Cloud Datastore key for the new entity task key = datastore . key kind , task name Prepares the new entity task = datastore . entity task key do t t [ "description" ] = "Buy milk" end Saves the entity datastore . save task puts "Saved #{ task . key . name } : #{ task [ 'description' ] } " task key = datastore . find task key Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Dependency on App Engine application See App Engine Requirement .
- Although you can use Google Cloud APIs directly by making raw requests to the server, client libraries provide simplifications that significantly reduce the amount of code you need to write.
- Google App Engine Standard Environment Client Libraries Integrate Firestore in Datastore mode with your App Engine Standard Environment applications by using the App Engine client libraries.
- Key ; public class QuickstartSample { public static void main ( String ... args ) throws Exception { // Instantiates a client Datastore datastore = DatastoreOptions . getDefaultInstance (). getService (); // The kind for the new entity String kind = "Task" ; // The name/ID for the new entity String name = "sampletask1" ; // The Cloud Datastore key for the new entity Key taskKey = datastore . newKeyFactory (). setKind ( kind ). newKey ( name ); // Prepares the new entity Entity task = Entity . newBuilder ( taskKey ). set ( "description" , "Buy milk" ). build (); // Saves the entity datastore . put ( task ); System . out . printf ( "Saved %s: %s%n" , task . getKey (). getName (), task . getString ( "description" )); // Retrieve entity Entity retrieved = datastore . get ( taskKey ); System . out . printf ( "Retrieved %s: %s%n" , taskKey . getName (), retrieved . getString ( "description" )); } } Node.js // Imports the Google Cloud client library const { Datastore } = require ( ' @google-cloud/datastore ' ); // Creates a client const datastore = new Datastore (); async function quickstart () { // The kind for the new entity const kind = 'Task' ; // The name/ID for the new entity const name = 'sampletask1' ; // The Cloud Datastore key for the new entity const taskKey = datastore . key ([ kind , name ]); // Prepares the new entity const task = { key : taskKey , data : { description : 'Buy milk' , }, }; // Saves the entity await datastore . save ( task ); console . log ( Saved ${ task . key . name } : ${ task . data . description } ); } quickstart (); PHP Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; Imports the Google Cloud client library use Google\Cloud\Datastore\DatastoreClient; Your Google Cloud Platform project ID $projectId = 'YOUR PROJECT ID'; Instantiates a client $datastore = new DatastoreClient([ 'projectId' => $projectId ]); The kind for the new entity $kind = 'Task'; The name/ID for the new entity $name = 'sampletask1'; The Cloud Datastore key for the new entity $taskKey = $datastore->key($kind, $name); Prepares the new entity $task = $datastore->entity($taskKey, ['description' => 'Buy milk']); Saves the entity $datastore->upsert($task); echo 'Saved ' . $task->key() . ': ' . $task['description'] .

