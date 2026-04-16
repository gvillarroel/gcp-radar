---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.700Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "JSON export tool"
feature_slug: "json-export-tool"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions"
  - "https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library"
keywords:
  - "json"
  - "export"
  - "tool"
  - "the"
  - "console"
  - "includes"
  - "for"
  - "firestore"
---

# JSON export tool

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console includes a JSON export tool for Firestore with MongoDB compatibility.

## Extended Definition

The Google Cloud console includes a JSON export tool for Firestore with MongoDB compatibility.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)
- [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)

## Supporting Pages

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .
- Add the --async flag to prevent the gcloud tool from waiting for the operation to complete. gcloud firestore export gs:// [BUCKET NAME] \ --database= [DATABASE] Replace the following: BUCKET NAME : organize your exports by adding a file prefix after the bucket name, for example, BUCKET NAME/my-exports-folder/export-name .
- Set up gcloud for your project You can initiate import and export operations through the Google Cloud console or the gcloud command-line tool.
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .
- Add the --async flag to prevent the gcloud tool from waiting for the operation to complete. gcloud firestore export gs:// [BUCKET NAME] \ --database= [DATABASE] Replace the following: BUCKET NAME : organize your exports by adding a file prefix after the bucket name, for example, BUCKET NAME/my-exports-folder/export-name .
- Set up gcloud for your project You can initiate import and export operations through the Google Cloud console or the gcloud command-line tool.
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.

### "Extend Firestore with MongoDB compatibility with event triggers using Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Example 1: Hello Firestore function The following sample prints the fields of a triggering Firestore event: Node.js / Cloud Event Function triggered by a change to a Firestore document. / const functions = require ( '@google-cloud/functions-framework' ); const protobuf = require ( 'protobufjs' ); functions . cloudEvent ( 'helloFirestore' , async cloudEvent = > { console . log ( Function triggered by event on: ${ cloudEvent . source } ); console . log ( Event type: ${ cloudEvent . type } ); console . log ( 'Loading protos...' ); const root = await protobuf . load ( 'data.proto' ); const DocumentEventData = root . lookupType ( 'google.events.cloud.firestore.v1.DocumentEventData' ); console . log ( 'Decoding data...' ); const firestoreReceived = DocumentEventData . decode ( cloudEvent . data ); console . log ( '\nOld value:' ); console . log ( JSON . stringify ( firestoreReceived . oldValue , null , 2 )); console . log ( '\nNew value:' ); console . log ( JSON . stringify ( firestoreReceived . value , null , 2 )); }); Python from cloudevents.http import CloudEvent import functions framework from google.events.cloud import firestore @functions framework . cloud event def hello firestore ( cloud event : CloudEvent ) - > None : """Triggers by a change to a Firestore document.
- GOOGLE CLOUD PROJECT , }); // Converts strings added to /messages/{pushId}/original to uppercase functions . cloudEvent ( 'makeUpperCase' , async cloudEvent = > { console . log ( 'Loading protos...' ); const root = await protobuf . load ( 'data.proto' ); const DocumentEventData = root . lookupType ( 'google.events.cloud.firestore.v1.DocumentEventData' ); console . log ( 'Decoding data...' ); const firestoreReceived = DocumentEventData . decode ( cloudEvent . data ); const resource = firestoreReceived . value . name ; const affectedDoc = firestore . doc ( resource . split ( '/documents/' )[ 1 ]); const curValue = firestoreReceived . value . fields . original . stringValue ; const newValue = curValue . toUpperCase (); if ( curValue === newValue ) { // Value is already upper-case // Don't perform a(nother) write to avoid infinite loops console . log ( 'Value is already upper-case.' ); return ; } console . log ( Replacing value: ${ curValue } --> ${ newValue } ); affectedDoc . set ({ original : newValue , }); }); Python from cloudevents.http import CloudEvent import functions framework from google.cloud import firestore from google.events.cloud import firestore as firestoredata client = firestore .
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.Map ; import java.util.concurrent.ExecutionException ; import java.util.logging.Logger ; public class FirebaseFirestoreReactive implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestoreReactive . class . getName ()); private final Firestore firestore ; private static final String FIELD KEY = "original" ; private static final String APPLICATION PROTOBUF = "application/protobuf" ; public FirebaseFirestoreReactive () { this ( FirestoreOptions . getDefaultInstance (). getService ()); } public FirebaseFirestoreReactive ( Firestore firestore ) { this . firestore = firestore ; } @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException , InterruptedException , ExecutionException { if ( event . getData () == null ) { logger . warning ( "No data found in event!" ); return ; } if ( ! event . getDataContentType (). equals ( APPLICATION PROTOBUF )) { logger . warning ( String . format ( "Found unexpected content type %s, expected %s" , event . getDataContentType (), APPLICATION PROTOBUF )); return ; } DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); // Get the fields from the post-operation document snapshot // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document Map<String , Value > fields = firestoreEventData . getValue (). getFieldsMap (); if ( ! fields . containsKey ( FIELD KEY )) { logger . warning ( "Document does not contain original field" ); return ; } String currValue = fields . get ( FIELD KEY ). getStringValue (); String newValue = currValue . toUpperCase (); if ( currValue . equals ( newValue )) { logger . info ( "Value is already upper-case" ); return ; } // Retrieve the document name from the resource path: // projects/{project id}/databases/{database id}/documents/{document path} String affectedDoc = firestoreEventData . getValue () . getName () . split ( "/documents/" ) [ 1 ] . replace ( "\"" , "" ); logger . info ( String . format ( "Replacing values: %s --> %s" , currValue , newValue )); // Wait for the async call to complete this . firestore . document ( affectedDoc ) . set ( Map . of ( FIELD KEY , newValue ), SetOptions . merge ()) . get (); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Firestore ; using Google.Cloud.Functions.Framework ; using Google.Cloud.Functions.Hosting ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.AspNetCore.Hosting ; using Microsoft.Extensions.DependencyInjection ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Threading ; using System.Threading.Tasks ; namespace FirestoreReactive ; public class Startup : FunctionsStartup { public override void ConfigureServices ( WebHostBuilderContext context , IServiceCollection services ) = > services .
- You can access these attributes as follows: Java logger . info ( "Function triggered by event on: " + event . getSource ()); logger . info ( "Event type: " + event . getType ()); logger . info ( "Event time " + event . getTime ()); logger . info ( "Event project: " + event . getExtension ( "project" )); logger . info ( "Event location: " + event . getExtension ( "location" )); logger . info ( "Database name: " + event . getExtension ( "database" )); logger . info ( "Database document: " + event . getExtension ( "document" )); // For withAuthContext events logger . info ( "Auth information: " + event . getExtension ( "authid" )); logger . info ( "Auth information: " + event . getExtension ( "authtype" )); Node.js console . log ( Function triggered by event on: ${ cloudEvent . source } ); console . log ( Event type: ${ cloudEvent . type } ); console . log ( Event time: ${ cloudEvent . time } ); console . log ( Event project: ${ cloudEvent . project } ); console . log ( Event location: ${ cloudEvent . location } ); console . log ( Database name: ${ cloudEvent . database } ); console . log ( Document name: ${ cloudEvent . document } ); // For withAuthContext events console . log ( Auth information: ${ cloudEvent . authid } ); console . log ( Auth information: ${ cloudEvent . authtype } ); Python print ( f "Function triggered by change to: { cloud event [ 'source' ] } " ) print ( f "Event type: { cloud event [ 'type' ] } " ) print ( f "Event time: { cloud event [ 'time' ] } " ) print ( f "Event project: { cloud event [ 'project' ] } " ) print ( f "Location: { cloud event [ 'location' ] } " ) print ( f "Database name: { cloud event [ 'database' ] } " ) print ( f "Document: { cloud event [ 'document' ] } " ) // For withAuthContext events print ( f "Auth information: { cloud event [ 'authid' ] } " ) print ( f "Auth information: { cloud event [ 'authtype' ] } " ) Event structures This trigger invokes your service with an event similar to: { "oldValue" : { // Update and Delete operations only A Docume nt objec t co nta i n i n g a pre - opera t io n docume nt s na psho t }, "updateMask" : { // Update operations only A Docume nt Mask objec t t ha t lis ts cha n ged f ields. }, "value" : { // A Document object containing a post-operation document snapshot } } Each Document object contains one or more Value objects.

### "Quickstart: Create a Firestore database by using a server client library\

- URL: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . doc ref = firestore . doc " #{ collection path } /aturing" doc ref . set ( { first : "Alan" , middle : "Mathison" , last : "Turing" , born : 1912 } ) puts "Added data to the aturing document in the users collection." Read data To quickly verify that you've added data to Firestore, use the data viewer in the Firebase console .
- For more information, see Set up authentication for a local development environment . const snapshot = await db . collection ( 'users' ). get (); snapshot . forEach (( doc ) = > { console . log ( doc . id , '=>' , doc . data ()); }); Go To authenticate to Firestore, set up Application Default Credentials.
- For more information, see Set up authentication for a local development environment . // asynchronously retrieve all users ApiFuture<QuerySnapshot> query = db . collection ( "users" ). get (); // ... // query.get() blocks on response QuerySnapshot querySnapshot = query . get (); List<QueryDocumentSnapshot> documents = querySnapshot . getDocuments (); for ( QueryDocumentSnapshot document : documents ) { System . out . println ( "User: " + document . getId ()); System . out . println ( "First: " + document . getString ( "first" )); if ( document . contains ( "middle" )) { System . out . println ( "Middle: " + document . getString ( "middle" )); } System . out . println ( "Last: " + document . getString ( "last" )); System . out . println ( "Born: " + document . getLong ( "born" )); } Python To authenticate to Firestore, set up Application Default Credentials.
- Python Add the Firestore Python library to your app: Note: We recommend that you use a virtual Python environment to install the Firestore Python library: pip install virtualenv virtualenv env source env/bin/activate pip install -- upgrade google - cloud - firestore Node.js Add the Firestore Node.js library to your app: npm install -- save @ google - cloud / firestore Go Install the Firestore Go library: go get cloud . google . com / go / firestore Add the Firestore Go library to your app: import "cloud.google.com/go/firestore" PHP Install and enable the gRPC extension for PHP, which you will need to use the client library.

