---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.888Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore support for australia-southeast2 region"
feature_slug: "firestore-support-for-australia-southeast2-region"
latest_feature_date: "2022-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/locations"
  - "https://docs.cloud.google.com/firestore/docs/reference/rest"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data"
keywords:
  - "firestore"
  - "australia"
  - "southeast2"
  - "region"
  - "available"
  - "melbourne"
---

# Firestore support for australia-southeast2 region

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore is available in the australia-southeast2 (Melbourne) region.

## Extended Definition

Firestore is available in the australia-southeast2 (Melbourne) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations)
- [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data)

## Supporting Pages

### Add and update data \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data)
- Source ID: `site-docs-root-2`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If not supplied, the client falls back to the default project inferred from the environment. firestore = Google :: Cloud :: Firestore . new project id : project id puts "Created Cloud Firestore client with given project ID." quickstart . rb Set a document To create or overwrite a single document, use the following language-specific set() methods: Web version 9 Use the setDoc() method: import { doc , setDoc } from "firebase/firestore" ; // Add a new document in collection "cities" await setDoc ( doc ( db , "cities" , "LA" ), { name : "Los Angeles" , state : "CA" , country : "USA" }); set document . js Web version 8 Use the set() method: // Add a new document in collection "cities" db . collection ( "cities" ). doc ( "LA" ). set ({ name : "Los Angeles" , state : "CA" , country : "USA" }) . then (() = > { console . log ( "Document successfully written!" ); }) . catch (( error ) = > { console . error ( "Error writing document: " , error ); }); test . firestore . js Swift Use the setData() method: Note: This product is not available on watchOS and App Clip targets. // Add a new document in collection "cities" do { try await db . collection ( "cities" ). document ( "LA" ). setData ([ "name" : "Los Angeles" , "state" : "CA" , "country" : "USA" ]) print ( "Document successfully written!" ) } catch { print ( "Error writing document: \( error ) " ) } ViewController . swift Objective-C Use the setData: method: Note: This product is not available on watchOS and App Clip targets. // Add a new document in collection "cities" [[[ self . db collectionWithPath : @"cities" ] documentWithPath : @"LA" ] setData : @{ @"name" : @"Los Angeles" , @"state" : @"CA" , @"country" : @"USA" } completion :^ ( NSError Nullable error ) { if ( error != nil ) { NSLog ( @"Error writing document: %@" , error ); } else { NSLog ( @"Document successfully written!" ); } }]; ViewController . m Kotlin Android Use the set() method: val city = hashMapOf ( "name" to "Los Angeles" , "state" to "CA" , "country" to "USA" , ) db . collection ( "cities" ). document ( "LA" ) . set ( city ) . addOnSuccessListener { Log . d ( TAG , "DocumentSnapshot successfully written!" ) } . addOnFailureListener { e - > Log . w ( TAG , "Error writing document" , e ) } DocSnippets . kt Java Android Use the set() method: Map<String , Object > city = new HashMap <> (); city . put ( "name" , "Los Angeles" ); city . put ( "state" , "CA" ); city . put ( "country" , "USA" ); db . collection ( "cities" ). document ( "LA" ) . set ( city ) . addOnSuccessListener ( new OnSuccessListener<Void> () { @Override public void onSuccess ( Void aVoid ) { Log . d ( TAG , "DocumentSnapshot successfully written!" ); } }) . addOnFailureListener ( new OnFailureListener () { @Override public void onFailure ( @NonNull Exception e ) { Log . w ( TAG , "Error writing document" , e ); } }); DocSnippets . java Dart Use the set() method: final city = < String , String > { "name" : "Los Angeles" , "state" : "CA" , "country" : "USA" }; db . collection ( "cities" ) . doc ( "LA" ) . set ( city ) . onError (( e , ) = > print ( "Error writing document: $ e " )); firestore . dart Java Use the set() method: // Create a Map to store the data we want to set Map<String , Object > docData = new HashMap <> (); docData . put ( "name" , "Los Angeles" ); docData . put ( "state" , "CA" ); docData . put ( "country" , "USA" ); docData . put ( "regions" , Arrays . asList ( "west coast" , "socal" )); // Add a new document (asynchronously) in collection "cities" with id "LA" ApiFuture<WriteResult> future = db . collection ( "cities" ). document ( "LA" ). set ( docData ); // ... // future.get() blocks on response System . out . println ( "Update time : " + future . get (). getUpdateTime ()); ManageDataSnippets . java Python Use the set() method: data = { "name" : "Los Angeles" , "state" : "CA" , "country" : "USA" } Add a new doc in collection 'cities' with ID 'LA' db . collection ( "cities" ) . document ( "LA" ) . set ( data ) snippets . py Python (Async) Use the set() method: data = { "name" : "Los Angeles" , "state" : "CA" , "country" : "USA" } Add a new doc in collection 'cities' with ID 'LA' await db . collection ( "cities" ) . document ( "LA" ) . set ( data ) snippets . py C++ Use the Set() method: // Add a new document in collection 'cities' db - > Collection ( "cities" ) .
- For more information, see Set up authentication for a local development environment . class City { / @var string / public $name; / @var string / public $state; / @var string / public $country; / @var bool / public $capital; / @var int / public $population; / @var array<string> / public $regions; / @param array<string> $regions / public function construct( string $name, string $state, string $country, bool $capital = false, int $population = 0, array $regions = [] ) { $this->name = $name; $this->state = $state; $this->country = $country; $this->capital = $capital; $this->population = $population; $this->regions = $regions; } / @param array<mixed> $source / public static function fromArray(array $source): City { // implementation of fromArray is excluded for brevity ... } / @return array<mixed> / public function toArray(): array { // implementation of toArray is excluded for brevity ... } public function toString() { // implementation of toString is excluded for brevity ... } } Unity [FirestoreData] public class City { [FirestoreProperty] public string Name { get ; set ; } [FirestoreProperty] public string State { get ; set ; } [FirestoreProperty] public string Country { get ; set ; } [FirestoreProperty] public bool Capital { get ; set ; } [FirestoreProperty] public long Population { get ; set ; } } C# [FirestoreData] public class City { [FirestoreProperty] public string Name { get ; set ; } [FirestoreProperty] public string State { get ; set ; } [FirestoreProperty] public string Country { get ; set ; } [FirestoreProperty] public bool Capital { get ; set ; } [FirestoreProperty] public long Population { get ; set ; } } Program . cs Ruby // This isn 't supported in Ruby Web version 9 import { doc , setDoc } from "firebase/firestore" ; // Set with cityConverter const ref = doc ( db , "cities" , "LA" ). withConverter ( cityConverter ); await setDoc ( ref , new City ( "Los Angeles" , "CA" , "USA" )); set custom object . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. // Set with cityConverter db . collection ( "cities" ). doc ( "LA" ) . withConverter ( cityConverter ) . set ( new City ( "Los Angeles" , "CA" , "USA" )); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. let city = City ( name : "Los Angeles" , state : "CA" , country : "USA" , isCapital : false , population : 5000000 ) do { try db . collection ( "cities" ). document ( "LA" ). setData ( from : city ) } catch let error { print ( "Error writing city to Firestore: \( error ) " ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. // This isn't supported in Objective-C.
- FieldValue . arrayRemove ( "east coast" ) }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. let washingtonRef = db . collection ( "cities" ). document ( "DC" ) // Atomically add a new region to the "regions" array field. washingtonRef . updateData ([ "regions" : FieldValue . arrayUnion ([ "greater virginia" ]) ]) // Atomically remove a region from the "regions" array field. washingtonRef . updateData ([ "regions" : FieldValue . arrayRemove ([ "east coast" ]) ]) ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.
- You can call the following language-specific add() methods: Web version 9 Use the addDoc() method: import { collection , addDoc } from "firebase/firestore" ; // Add a new document with a generated id. const docRef = await addDoc ( collection ( db , "cities" ), { name : "Tokyo" , country : "Japan" }); console . log ( "Document written with ID: " , docRef . id ); add document . js Web version 8 Use the add() method: // Add a new document with a generated id. db . collection ( "cities" ). add ({ name : "Tokyo" , country : "Japan" }) . then (( docRef ) = > { console . log ( "Document written with ID: " , docRef . id ); }) . catch (( error ) = > { console . error ( "Error adding document: " , error ); }); test . firestore . js Swift Use the addDocument() method: Note: This product is not available on watchOS and App Clip targets. // Add a new document with a generated id. do { let ref = try await db . collection ( "cities" ). addDocument ( data : [ "name" : "Tokyo" , "country" : "Japan" ]) print ( "Document added with ID: \( ref . documentID ) " ) } catch { print ( "Error adding document: \( error ) " ) } ViewController . swift Objective-C Use the addDocumentWithData: method: Note: This product is not available on watchOS and App Clip targets. // Add a new document with a generated id. block FIRDocumentReference ref = [[ self . db collectionWithPath : @"cities" ] addDocumentWithData : @{ @"name" : @"Tokyo" , @"country" : @"Japan" } completion :^ ( NSError Nullable error ) { if ( error != nil ) { NSLog ( @"Error adding document: %@" , error ); } else { NSLog ( @"Document added with ID: %@" , ref . documentID ); } }]; ViewController . m Kotlin Android Use the add() method: // Add a new document with a generated id. val data = hashMapOf ( "name" to "Tokyo" , "country" to "Japan" , ) db . collection ( "cities" ) . add ( data ) . addOnSuccessListener { documentReference - > Log . d ( TAG , "DocumentSnapshot written with ID: ${ documentReference . id } " ) } . addOnFailureListener { e - > Log . w ( TAG , "Error adding document" , e ) } DocSnippets . kt Java Android Use the add() method: // Add a new document with a generated id.

### Locations \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Firestore supports the following multi-region locations: Standard edition Multi-region name Multi-region description Read-Write regions Witness region eur3 Europe europe-west1 (Belgium), europe-west4 (Netherlands) europe-north1 (Finland) nam5 United States (Central) us-central1 (Iowa), us-central2 (Oklahoma—private GCP region) us-east1 (South Carolina) nam7 United States (Central and East) us-central1 (Iowa), us-east4 (Northern Virginia) us-central2 (Oklahoma—private Google Cloud region) Enterprise edition Multi-region name Multi-region description Read-Write regions Witness region eur3 Europe europe-west1 (Belgium), europe-west4 (Netherlands) europe-north1 (Finland) nam5 United States (Central) us-central1 (Iowa), us-central2 (Oklahoma—private GCP region) us-east1 (South Carolina) nam7 United States (Central and East) us-central1 (Iowa), us-east4 (Northern Virginia) us-central2 (Oklahoma—private Google Cloud region) Note: If your project already has an App Engine app with a location of either us-central or europe-west , then your default Firestore database will be considered multi-regional .
- For a comprehensive explanation of pricing per region and per region type, see: Firestore Standard edition pricing Firestore Enterprise edition pricing View the location of your databases Use one of the following methods to view the location setting for your databases: Run the gcloud firestore databases list command.
- Johannesburg Location SLA Your Firestore location type determines the Service Level Agreement (SLA) uptime percentage: Covered service Monthly uptime percentage Firestore Multi-Region = 99.999% Firestore Regional = 99.99% Location pricing Your Firestore location determines the cost of database operations.
- Delhi asia-southeast1 Singapore asia-southeast2 Jakarta asia-east2 Hong Kong asia-east1 Taiwan asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul Australia australia-southeast1 Sydney australia-southeast2 This location does not support App Engine.

### Cloud Firestore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://firestore.googleapis.com REST Resource: v1beta2.projects.databases Methods exportDocuments POST /v1beta2/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. importDocuments POST /v1beta2/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://firestore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- A service that is available in multiple regions might have multiple regional endpoints.
- REST Resource: v1.projects.databases Methods bulkDeleteDocuments POST /v1/{name=projects/ /databases/ }:bulkDeleteDocuments Bulk deletes a subset of documents from Google Cloud Firestore. clone POST /v1/{parent=projects/ }/databases:clone Creates a new database by cloning an existing one. create POST /v1/{parent=projects/ }/databases Create a database. delete DELETE /v1/{name=projects/ /databases/ } Deletes a database. exportDocuments POST /v1/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. get GET /v1/{name=projects/ /databases/ } Gets information about a database. importDocuments POST /v1/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore. list GET /v1/{parent=projects/ }/databases List all the databases in the project. patch PATCH /v1/{database.name=projects/ /databases/ } Updates a database. restore POST /v1/{parent=projects/ }/databases:restore Creates a new database by restoring from an existing backup.

