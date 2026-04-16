---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.912Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Cloud Firestore in Datastore mode"
feature_slug: "cloud-firestore-in-datastore-mode"
latest_feature_date: "2018-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/reference/libraries"
  - "https://docs.cloud.google.com/firestore/docs/firestore-or-datastore"
  - "https://docs.cloud.google.com/firestore/docs/manage-databases"
keywords:
  - "firestore"
  - "datastore"
  - "mode"
  - "can"
  - "created"
  - "use"
  - "client"
  - "libraries"
---

# Cloud Firestore in Datastore mode

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore can be created in Datastore mode to use Datastore client libraries on Cloud Firestore's storage layer with improved consistency.

## Extended Definition

Cloud Firestore can be created in Datastore mode to use Datastore client libraries on Cloud Firestore's storage layer with improved consistency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/reference/libraries](https://docs.cloud.google.com/datastore/docs/reference/libraries)
- [https://docs.cloud.google.com/firestore/docs/firestore-or-datastore](https://docs.cloud.google.com/firestore/docs/firestore-or-datastore)
- [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)

## Supporting Pages

### Datastore mode client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/libraries](https://docs.cloud.google.com/datastore/docs/reference/libraries)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google App Engine Standard Environment Client Libraries Integrate Firestore in Datastore mode with your App Engine Standard Environment applications by using the App Engine client libraries.
- Home Documentation Databases Datastore Guides Send feedback Datastore mode client libraries Stay organized with collections Save and categorize content based on your preferences.
- Entity ( key = task key ) task [ "description" ] = "Buy milk" Saves the entity datastore client . put ( task ) print ( f "Saved { task . key . name } : { task [ 'description' ] } " ) Ruby Imports the Google Cloud client library require "google/cloud/datastore" Instantiate a client datastore = Google :: Cloud :: Datastore . new The kind for the new entity kind = "Task" The name/ID for the new entity task name = "sampleTask" The Cloud Datastore key for the new entity task key = datastore . key kind , task name Prepares the new entity task = datastore . entity task key do t t [ "description" ] = "Buy milk" end Saves the entity datastore . save task puts "Saved #{ task . key . name } : #{ task [ 'description' ] } " task key = datastore . find task key Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-datastore on Stack Overflow Source code Dependency on App Engine application See App Engine Requirement .
- Key ; public class QuickstartSample { public static void main ( String ... args ) throws Exception { // Instantiates a client Datastore datastore = DatastoreOptions . getDefaultInstance (). getService (); // The kind for the new entity String kind = "Task" ; // The name/ID for the new entity String name = "sampletask1" ; // The Cloud Datastore key for the new entity Key taskKey = datastore . newKeyFactory (). setKind ( kind ). newKey ( name ); // Prepares the new entity Entity task = Entity . newBuilder ( taskKey ). set ( "description" , "Buy milk" ). build (); // Saves the entity datastore . put ( task ); System . out . printf ( "Saved %s: %s%n" , task . getKey (). getName (), task . getString ( "description" )); // Retrieve entity Entity retrieved = datastore . get ( taskKey ); System . out . printf ( "Retrieved %s: %s%n" , taskKey . getName (), retrieved . getString ( "description" )); } } Node.js // Imports the Google Cloud client library const { Datastore } = require ( ' @google-cloud/datastore ' ); // Creates a client const datastore = new Datastore (); async function quickstart () { // The kind for the new entity const kind = 'Task' ; // The name/ID for the new entity const name = 'sampletask1' ; // The Cloud Datastore key for the new entity const taskKey = datastore . key ([ kind , name ]); // Prepares the new entity const task = { key : taskKey , data : { description : 'Buy milk' , }, }; // Saves the entity await datastore . save ( task ); console . log ( Saved ${ task . key . name } : ${ task . data . description } ); } quickstart (); PHP Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; Imports the Google Cloud client library use Google\Cloud\Datastore\DatastoreClient; Your Google Cloud Platform project ID $projectId = 'YOUR PROJECT ID'; Instantiates a client $datastore = new DatastoreClient([ 'projectId' => $projectId ]); The kind for the new entity $kind = 'Task'; The name/ID for the new entity $name = 'sampletask1'; The Cloud Datastore key for the new entity $taskKey = $datastore->key($kind, $name); Prepares the new entity $task = $datastore->entity($taskKey, ['description' => 'Buy milk']); Saves the entity $datastore->upsert($task); echo 'Saved ' . $task->key() . ': ' . $task['description'] .

### Choosing between Native mode and Datastore mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/firestore-or-datastore](https://docs.cloud.google.com/firestore/docs/firestore-or-datastore)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not supported Client libraries Firestore client libraries: Java Python PHP Go Ruby C# Node.js Android iOS+ Web C++ Unity Datastore client libraries: Java Python PHP Go Ruby C# Node.js C++ Security Identity and Access Management (IAM) manages database access Firestore Security Rules support serverless authentication and authorization for the mobile and web client libraries IAM manages database access SLA Firestore SLA Firestore SLA Locations Both modes support the same locations.
- Firestore introduces the following features: A strongly consistent storage layer A collection and document data model Real-time updates Mobile and Web client libraries Firestore is backwards compatible with Datastore, but the new data model, real-time updates, and mobile and web client library features are not.
- For more details about pricing, see the following pages: Firestore in Native mode pricing Firestore in Datastore mode pricing Console Firebase Console and Google Cloud console Firestore Viewer Google Cloud console Datastore Viewer Namespaces Not supported Namespaces supported App Engine client library integration Not supported in the App Engine standard environment Python 2.7 and PHP 5.5 runtimes Supported in the App Engine standard environment , all other runtimes Supported in the App Engine flexible environment , all runtimes Supported in all runtimes Create a new database You can create a new Firestore database in either Native mode or Datastore mode.
- You can use Datastore client libraries with this project but not Firestore client libraries.

### "Create and manage databases \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DATABASE TYPE : either firestore-native for Native mode or datastore-mode for Datastore mode. --delete-protection is an optional flag to enable deletion protection.
- By default, the Firebase SDKs and Google API Client Libraries connect to the (default) Firestore database in a project.
- The data access mode configures which API and which client libraries you can use with your database.
- DATABASE TYPE : either FIRESTORE NATIVE for Native mode or DATASTORE MODE for Datastore mode.

