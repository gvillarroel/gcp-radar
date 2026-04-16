---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.880Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore database usage dashboard"
feature_slug: "firestore-database-usage-dashboard"
latest_feature_date: "2023-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/monitor-usage"
  - "https://docs.cloud.google.com/firestore/native/docs/query-data/queries"
  - "https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen"
keywords:
  - "firestore"
  - "database"
  - "usage"
  - "dashboard"
  - "console"
  - "now"
  - "provides"
  - "each"
---

# Firestore database usage dashboard

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console now provides a usage dashboard for each Firestore database.

## Extended Definition

The Google Cloud console now provides a usage dashboard for each Firestore database.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- [https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen](https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen)

## Supporting Pages

### Monitor usage \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Aggregated usage dashboard If your project has multiple Firestore databases, you can view aggregated usage metrics in the Google Cloud console or Firebase console.
- Database usage dashboard To view usage metrics for a Firestore database, open the database Usage page in the Google Cloud console.
- Go to Google Cloud project project usage The project usage dashboard shows document operations over time as follows: Firebase console Go to the Firestore usage page (Firebase console) Usage dashboard and billing reports The Firestore usage dashboards in the Firebase and Cloud consoles provide an estimate of usage.
- Security rule usage Additionally, the Firebase console provides a Firebase Security Rules evaluation dashboard, a useful, at-a-glance view of rules invocations.

### "Query and filter data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Id ); } Program . cs Ruby cities ref = firestore . col collection path query = cities ref . where "capital" , "=" , true query . get do city puts "Document #{ city . document id } returned by query capital=true." end query data . rb Execute a query After creating a query object, use the get() function to retrieve the results: Web version 9 import { collection , query , where , getDocs } from "firebase/firestore" ; const q = query ( collection ( db , "cities" ), where ( "capital" , "==" , true )); const querySnapshot = await getDocs ( q ); querySnapshot . forEach (( doc ) = > { // doc.data() is never undefined for query doc snapshots console . log ( doc . id , " => " , doc . data ()); }); get multiple . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. db . collection ( "cities" ). where ( "capital" , "==" , true ) . get () . then (( querySnapshot ) = > { querySnapshot . forEach (( doc ) = > { // doc.data() is never undefined for query doc snapshots console . log ( doc . id , " => " , doc . data ()); }); }) . catch (( error ) = > { console . log ( "Error getting documents: " , error ); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. do { let querySnapshot = try await db . collection ( "cities" ). whereField ( "capital" , isEqualTo : true ) . getDocuments () for document in querySnapshot . documents { print ( " \( document . documentID ) => \( document . data ()) " ) } } catch { print ( "Error getting documents: \( error ) " ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. [[[ self . db collectionWithPath : @"cities" ] queryWhereField : @"capital" isEqualTo : @( YES ) ] getDocumentsWithCompletion : ^ ( FIRQuerySnapshot snapshot , NSError error ) { if ( error != nil ) { NSLog ( @"Error getting documents: %@" , error ); } else { for ( FIRDocumentSnapshot document in snapshot . documents ) { NSLog ( @"%@ => %@" , document . documentID , document . data ); } } }]; ViewController . m Kotlin Android db . collection ( "cities" ) . whereEqualTo ( "capital" , true ) . get () . addOnSuccessListener { documents - > for ( document in documents ) { Log . d ( TAG , " ${ document . id } => ${ document . data } " ) } } . addOnFailureListener { exception - > Log . w ( TAG , "Error getting documents: " , exception ) } DocSnippets . kt Java Android db . collection ( "cities" ) . whereEqualTo ( "capital" , true ) . get () . addOnCompleteListener ( new OnCompleteListener<QuerySnapshot> () { @Override public void onComplete ( @NonNull Task<QuerySnapshot> task ) { if ( task . isSuccessful ()) { for ( QueryDocumentSnapshot document : task . getResult ()) { Log . d ( TAG , document . getId () + " => " + document . getData ()); } } else { Log . d ( TAG , "Error getting documents: " , task . getException ()); } } }); DocSnippets . java Dart db . collection ( "cities" ). where ( "capital" , isEqualTo: true ). get (). then ( ( querySnapshot ) { print ( "Successfully completed" ); for ( var docSnapshot in querySnapshot . docs ) { print ( ' ${ docSnapshot . id } => ${ docSnapshot . data () } ' ); } }, onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Java // asynchronously retrieve multiple documents ApiFuture<QuerySnapshot> future = db . collection ( "cities" ). whereEqualTo ( "capital" , true ). get (); // future.get() blocks on response List<QueryDocumentSnapshot> documents = future . get (). getDocuments (); for ( DocumentSnapshot document : documents ) { System . out . println ( document . getId () + " => " + document . toObject ( City . class )); } RetrieveDataSnippets . java Python Note: Use of CollectionRef stream() is prefered to get() docs = ( db . collection ( "cities" ) . where ( filter = FieldFilter ( "capital" , "==" , True )) . stream () ) for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py Python (Async) Note: Use of CollectionRef stream() is prefered to get() docs = ( db . collection ( "cities" ) . where ( filter = FieldFilter ( "capital" , "==" , True )) . stream () ) async for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py C++ db - > Collection ( "cities" ) .
- For example, this collection group query retrieves all museum landmarks across all cities: Web version 9 import { collectionGroup , query , where , getDocs } from "firebase/firestore" ; const museums = query ( collectionGroup ( db , 'landmarks' ), where ( 'type' , '==' , 'museum' )); const querySnapshot = await getDocs ( museums ); querySnapshot . forEach (( doc ) = > { console . log ( doc . id , ' => ' , doc . data ()); }); fs collection group query . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. var museums = db . collectionGroup ( 'landmarks' ). where ( 'type' , '==' , 'museum' ); museums . get (). then (( querySnapshot ) = > { querySnapshot . forEach (( doc ) = > { console . log ( doc . id , ' => ' , doc . data ()); }); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. db . collectionGroup ( "landmarks" ). whereField ( "type" , isEqualTo : "museum" ). getDocuments { ( snapshot , error ) in // ... } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. [[[ self . db collectionGroupWithID : @"landmarks" ] queryWhereField : @"type" isEqualTo : @"museum" ] getDocumentsWithCompletion : ^ ( FIRQuerySnapshot snapshot , NSError error ) { // ... }]; ViewController . m Kotlin Android db . collectionGroup ( "landmarks" ). whereEqualTo ( "type" , "museum" ). get () . addOnSuccessListener { queryDocumentSnapshots - > // ... } DocSnippets . kt Java Android db . collectionGroup ( "landmarks" ). whereEqualTo ( "type" , "museum" ). get () . addOnSuccessListener ( new OnSuccessListener<QuerySnapshot> () { @Override public void onSuccess ( QuerySnapshot queryDocumentSnapshots ) { // ... } }); DocSnippets . java Dart db . collectionGroup ( "landmarks" ) . where ( "type" , isEqualTo: "museum" ) . get () . then ( ( res ) = > print ( "Successfully completed" ), onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Java final Query museums = db . collectionGroup ( "landmarks" ). whereEqualTo ( "type" , "museum" ); final ApiFuture<QuerySnapshot> querySnapshot = museums . get (); for ( DocumentSnapshot document : querySnapshot . get (). getDocuments ()) { System . out . println ( document . getId ()); } QueryDataSnippets . java Python museums = db . collection group ( "landmarks" ) . where ( filter = FieldFilter ( "type" , "==" , "museum" ) ) docs = museums . stream () for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py Python (Async) museums = db . collection group ( "landmarks" ) . where ( filter = FieldFilter ( "type" , "==" , "museum" ) ) docs = museums . stream () async for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py C++ db - > CollectionGroup ( "landmarks" ) .
- OnCompletion ([]( const firebase :: Future<QuerySnapshot> & future ) { if ( future . error () == Error :: kErrorOk ) { for ( const DocumentSnapshot & document : future . result () - > documents ()) { std :: cout << document << std :: endl ; } } else { std :: cout << "Error getting documents: " << future . error message () << std :: endl ; } }); Node.js const querySnapshot = await db . collectionGroup ( 'landmarks' ). where ( 'type' , '==' , 'museum' ). get (); querySnapshot . forEach (( doc ) = > { console . log ( doc . id , ' => ' , doc . data ()); }); index . js Go import ( "context" "fmt" "io" "cloud.google.com/go/firestore" "google.golang.org/api/iterator" ) // collectionGroupQuery runs a collection group query over the data created by // collectionGroupSetup. func collectionGroupQuery ( w io .
- OnCompletion ([]( const Future<QuerySnapshot> & future ) { if ( future . error () == Error :: kErrorOk ) { for ( const DocumentSnapshot & document : future . result () - > documents ()) { std :: cout << document << std :: endl ; } } else { std :: cout << "Error getting documents: " << future . error message () << std :: endl ; } }); snippets . cpp Node.js const citiesRef = db . collection ( 'cities' ); const snapshot = await citiesRef . where ( 'capital' , '==' , true ). get (); if ( snapshot . empty ) { console . log ( 'No matching documents.' ); return ; } snapshot . forEach ( doc = > { console . log ( doc . id , '=>' , doc . data ()); }); index . js Go import ( "context" "fmt" "cloud.google.com/go/firestore" "google.golang.org/api/iterator" ) func multipleDocs ( ctx context .

### "Extend Firestore with event triggers using Cloud Run functions \_|\_ Firestore\

- URL: [https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen](https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access these attributes as follows: Java logger . info ( "Function triggered by event on: " + event . getSource ()); logger . info ( "Event type: " + event . getType ()); logger . info ( "Event time " + event . getTime ()); logger . info ( "Event project: " + event . getExtension ( "project" )); logger . info ( "Event location: " + event . getExtension ( "location" )); logger . info ( "Database name: " + event . getExtension ( "database" )); logger . info ( "Database document: " + event . getExtension ( "document" )); // For withAuthContext events logger . info ( "Auth information: " + event . getExtension ( "authid" )); logger . info ( "Auth information: " + event . getExtension ( "authtype" )); Node.js console . log ( Function triggered by event on: ${ cloudEvent . source } ); console . log ( Event type: ${ cloudEvent . type } ); console . log ( Event time: ${ cloudEvent . time } ); console . log ( Event project: ${ cloudEvent . project } ); console . log ( Event location: ${ cloudEvent . location } ); console . log ( Database name: ${ cloudEvent . database } ); console . log ( Document name: ${ cloudEvent . document } ); // For withAuthContext events console . log ( Auth information: ${ cloudEvent . authid } ); console . log ( Auth information: ${ cloudEvent . authtype } ); Python print ( f "Function triggered by change to: { cloud event [ 'source' ] } " ) print ( f "Event type: { cloud event [ 'type' ] } " ) print ( f "Event time: { cloud event [ 'time' ] } " ) print ( f "Event project: { cloud event [ 'project' ] } " ) print ( f "Location: { cloud event [ 'location' ] } " ) print ( f "Database name: { cloud event [ 'database' ] } " ) print ( f "Document: { cloud event [ 'document' ] } " ) // For withAuthContext events print ( f "Auth information: { cloud event [ 'authid' ] } " ) print ( f "Auth information: { cloud event [ 'authtype' ] } " ) Event structures This trigger invokes your service with an event similar to: { "oldValue" : { // Update and Delete operations only A Docume nt objec t co nta i n i n g a pre - opera t io n docume nt s na psho t }, "updateMask" : { // Update operations only A Docume nt Mask objec t t ha t lis ts cha n ged f ields. }, "value" : { // A Document object containing a post-operation document snapshot } } Each Document object contains one or more Value objects.
- Test the function To test the Convert to Uppercase function you just deployed, set up a collection called messages in your Firestore database : In the Google Cloud console, go to the Firestore databases page: Go to Firestore Click Start a collection .
- Test the function To test the Hello Firestore function, set up a collection called users in your Firestore database : In the Google Cloud console, go to the Firestore databases page: Go to Firestore Click Start a collection .
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.Map ; import java.util.concurrent.ExecutionException ; import java.util.logging.Logger ; public class FirebaseFirestoreReactive implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestoreReactive . class . getName ()); private final Firestore firestore ; private static final String FIELD KEY = "original" ; private static final String APPLICATION PROTOBUF = "application/protobuf" ; public FirebaseFirestoreReactive () { this ( FirestoreOptions . getDefaultInstance (). getService ()); } public FirebaseFirestoreReactive ( Firestore firestore ) { this . firestore = firestore ; } @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException , InterruptedException , ExecutionException { if ( event . getData () == null ) { logger . warning ( "No data found in event!" ); return ; } if ( ! event . getDataContentType (). equals ( APPLICATION PROTOBUF )) { logger . warning ( String . format ( "Found unexpected content type %s, expected %s" , event . getDataContentType (), APPLICATION PROTOBUF )); return ; } DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); // Get the fields from the post-operation document snapshot // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document Map<String , Value > fields = firestoreEventData . getValue (). getFieldsMap (); if ( ! fields . containsKey ( FIELD KEY )) { logger . warning ( "Document does not contain original field" ); return ; } String currValue = fields . get ( FIELD KEY ). getStringValue (); String newValue = currValue . toUpperCase (); if ( currValue . equals ( newValue )) { logger . info ( "Value is already upper-case" ); return ; } // Retrieve the document name from the resource path: // projects/{project id}/databases/{database id}/documents/{document path} String affectedDoc = firestoreEventData . getValue () . getName () . split ( "/documents/" ) [ 1 ] . replace ( "\"" , "" ); logger . info ( String . format ( "Replacing values: %s --> %s" , currValue , newValue )); // Wait for the async call to complete this . firestore . document ( affectedDoc ) . set ( Map . of ( FIELD KEY , newValue ), SetOptions . merge ()) . get (); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Firestore ; using Google.Cloud.Functions.Framework ; using Google.Cloud.Functions.Hosting ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.AspNetCore.Hosting ; using Microsoft.Extensions.DependencyInjection ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Threading ; using System.Threading.Tasks ; namespace FirestoreReactive ; public class Startup : FunctionsStartup { public override void ConfigureServices ( WebHostBuilderContext context , IServiceCollection services ) = > services .

