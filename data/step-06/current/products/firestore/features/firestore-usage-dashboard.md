---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.902Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore usage dashboard"
feature_slug: "firestore-usage-dashboard"
latest_feature_date: "2020-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/monitor-usage"
  - "https://docs.cloud.google.com/firestore/native/docs/query-data/queries"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
keywords:
  - "firestore"
  - "usage"
  - "dashboard"
  - "console"
  - "includes"
---

# Firestore usage dashboard

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console includes a Firestore usage dashboard.

## Extended Definition

The Google Cloud console includes a Firestore usage dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)

## Supporting Pages

### Monitor usage \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Google Cloud project project usage The project usage dashboard shows document operations over time as follows: Firebase console Go to the Firestore usage page (Firebase console) Usage dashboard and billing reports The Firestore usage dashboards in the Firebase and Cloud consoles provide an estimate of usage.
- Aggregated usage dashboard If your project has multiple Firestore databases, you can view aggregated usage metrics in the Google Cloud console or Firebase console.
- Database usage dashboard To view usage metrics for a Firestore database, open the database Usage page in the Google Cloud console.
- The usage dashboard in the Firestore console reports the same metrics data.

### "Query and filter data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Id ); } Program . cs Ruby cities ref = firestore . col collection path query = cities ref . where "capital" , "=" , true query . get do city puts "Document #{ city . document id } returned by query capital=true." end query data . rb Execute a query After creating a query object, use the get() function to retrieve the results: Web version 9 import { collection , query , where , getDocs } from "firebase/firestore" ; const q = query ( collection ( db , "cities" ), where ( "capital" , "==" , true )); const querySnapshot = await getDocs ( q ); querySnapshot . forEach (( doc ) = > { // doc.data() is never undefined for query doc snapshots console . log ( doc . id , " => " , doc . data ()); }); get multiple . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. db . collection ( "cities" ). where ( "capital" , "==" , true ) . get () . then (( querySnapshot ) = > { querySnapshot . forEach (( doc ) = > { // doc.data() is never undefined for query doc snapshots console . log ( doc . id , " => " , doc . data ()); }); }) . catch (( error ) = > { console . log ( "Error getting documents: " , error ); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. do { let querySnapshot = try await db . collection ( "cities" ). whereField ( "capital" , isEqualTo : true ) . getDocuments () for document in querySnapshot . documents { print ( " \( document . documentID ) => \( document . data ()) " ) } } catch { print ( "Error getting documents: \( error ) " ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. [[[ self . db collectionWithPath : @"cities" ] queryWhereField : @"capital" isEqualTo : @( YES ) ] getDocumentsWithCompletion : ^ ( FIRQuerySnapshot snapshot , NSError error ) { if ( error != nil ) { NSLog ( @"Error getting documents: %@" , error ); } else { for ( FIRDocumentSnapshot document in snapshot . documents ) { NSLog ( @"%@ => %@" , document . documentID , document . data ); } } }]; ViewController . m Kotlin Android db . collection ( "cities" ) . whereEqualTo ( "capital" , true ) . get () . addOnSuccessListener { documents - > for ( document in documents ) { Log . d ( TAG , " ${ document . id } => ${ document . data } " ) } } . addOnFailureListener { exception - > Log . w ( TAG , "Error getting documents: " , exception ) } DocSnippets . kt Java Android db . collection ( "cities" ) . whereEqualTo ( "capital" , true ) . get () . addOnCompleteListener ( new OnCompleteListener<QuerySnapshot> () { @Override public void onComplete ( @NonNull Task<QuerySnapshot> task ) { if ( task . isSuccessful ()) { for ( QueryDocumentSnapshot document : task . getResult ()) { Log . d ( TAG , document . getId () + " => " + document . getData ()); } } else { Log . d ( TAG , "Error getting documents: " , task . getException ()); } } }); DocSnippets . java Dart db . collection ( "cities" ). where ( "capital" , isEqualTo: true ). get (). then ( ( querySnapshot ) { print ( "Successfully completed" ); for ( var docSnapshot in querySnapshot . docs ) { print ( ' ${ docSnapshot . id } => ${ docSnapshot . data () } ' ); } }, onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Java // asynchronously retrieve multiple documents ApiFuture<QuerySnapshot> future = db . collection ( "cities" ). whereEqualTo ( "capital" , true ). get (); // future.get() blocks on response List<QueryDocumentSnapshot> documents = future . get (). getDocuments (); for ( DocumentSnapshot document : documents ) { System . out . println ( document . getId () + " => " + document . toObject ( City . class )); } RetrieveDataSnippets . java Python Note: Use of CollectionRef stream() is prefered to get() docs = ( db . collection ( "cities" ) . where ( filter = FieldFilter ( "capital" , "==" , True )) . stream () ) for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py Python (Async) Note: Use of CollectionRef stream() is prefered to get() docs = ( db . collection ( "cities" ) . where ( filter = FieldFilter ( "capital" , "==" , True )) . stream () ) async for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py C++ db - > Collection ( "cities" ) .
- For example, this collection group query retrieves all museum landmarks across all cities: Web version 9 import { collectionGroup , query , where , getDocs } from "firebase/firestore" ; const museums = query ( collectionGroup ( db , 'landmarks' ), where ( 'type' , '==' , 'museum' )); const querySnapshot = await getDocs ( museums ); querySnapshot . forEach (( doc ) = > { console . log ( doc . id , ' => ' , doc . data ()); }); fs collection group query . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. var museums = db . collectionGroup ( 'landmarks' ). where ( 'type' , '==' , 'museum' ); museums . get (). then (( querySnapshot ) = > { querySnapshot . forEach (( doc ) = > { console . log ( doc . id , ' => ' , doc . data ()); }); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. db . collectionGroup ( "landmarks" ). whereField ( "type" , isEqualTo : "museum" ). getDocuments { ( snapshot , error ) in // ... } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. [[[ self . db collectionGroupWithID : @"landmarks" ] queryWhereField : @"type" isEqualTo : @"museum" ] getDocumentsWithCompletion : ^ ( FIRQuerySnapshot snapshot , NSError error ) { // ... }]; ViewController . m Kotlin Android db . collectionGroup ( "landmarks" ). whereEqualTo ( "type" , "museum" ). get () . addOnSuccessListener { queryDocumentSnapshots - > // ... } DocSnippets . kt Java Android db . collectionGroup ( "landmarks" ). whereEqualTo ( "type" , "museum" ). get () . addOnSuccessListener ( new OnSuccessListener<QuerySnapshot> () { @Override public void onSuccess ( QuerySnapshot queryDocumentSnapshots ) { // ... } }); DocSnippets . java Dart db . collectionGroup ( "landmarks" ) . where ( "type" , isEqualTo: "museum" ) . get () . then ( ( res ) = > print ( "Successfully completed" ), onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Java final Query museums = db . collectionGroup ( "landmarks" ). whereEqualTo ( "type" , "museum" ); final ApiFuture<QuerySnapshot> querySnapshot = museums . get (); for ( DocumentSnapshot document : querySnapshot . get (). getDocuments ()) { System . out . println ( document . getId ()); } QueryDataSnippets . java Python museums = db . collection group ( "landmarks" ) . where ( filter = FieldFilter ( "type" , "==" , "museum" ) ) docs = museums . stream () for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py Python (Async) museums = db . collection group ( "landmarks" ) . where ( filter = FieldFilter ( "type" , "==" , "museum" ) ) docs = museums . stream () async for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py C++ db - > CollectionGroup ( "landmarks" ) .
- Write ( Usage ); return ; } } } } Program . cs Ruby cities ref = firestore . col collection path sf landmarks = cities ref . document ( "SF" ) . collection ( "landmarks" ) sf landmarks . document . set ( { name : "Golden Gate Bridge" , type : "bridge" } ) sf landmarks . document . set ( { name : "Legion of Honor" , type : "museum" } ) la landmarks = cities ref . document ( "LA" ) . collection ( "landmarks" ) la landmarks . document . set ( { name : "Griffith Park" , type : "park" } ) la landmarks . document . set ( { name : "The Getty" , type : "museum" } ) dc landmarks = cities ref . document ( "DC" ) . collection ( "landmarks" ) dc landmarks . document . set ( { name : "Lincoln Memorial" , type : "memorial" } ) dc landmarks . document . set ( { name : "National Air and Space Museum" , type : "museum" } ) tok landmarks = cities ref . document ( "TOK" ) . collection ( "landmarks" ) tok landmarks . document . set ( { name : "Ueno Park" , type : "park" } ) tok landmarks . document . set ( { name : "National Museum of Nature and Science" , type : "museum" } ) bj landmarks = cities ref . document ( "BJ" ) . collection ( "landmarks" ) bj landmarks . document . set ( { name : "Jingshan Park" , type : "park" } ) bj landmarks . document . set ( { name : "Beijing Ancient Observatory" , type : "museum" } ) query data . rb We can use the simple and compound query described earlier to query a single city's landmarks subcollection, but you might also want to retrieve results from every city's landmarks subcollection at once.
- OnCompletion ([]( const firebase :: Future<QuerySnapshot> & future ) { if ( future . error () == Error :: kErrorOk ) { for ( const DocumentSnapshot & document : future . result () - > documents ()) { std :: cout << document << std :: endl ; } } else { std :: cout << "Error getting documents: " << future . error message () << std :: endl ; } }); Node.js const querySnapshot = await db . collectionGroup ( 'landmarks' ). where ( 'type' , '==' , 'museum' ). get (); querySnapshot . forEach (( doc ) = > { console . log ( doc . id , ' => ' , doc . data ()); }); index . js Go import ( "context" "fmt" "io" "cloud.google.com/go/firestore" "google.golang.org/api/iterator" ) // collectionGroupQuery runs a collection group query over the data created by // collectionGroupSetup. func collectionGroupQuery ( w io .

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To view your resource usage: Visit the Google Cloud console App Engine page.
- To view your resource usage: Visit the Google Cloud console App Engine page.
- Firestore in Datastore mode previously supported the ability to enable Datastore Admin, an optional module with bulk delete and backup features.
- Viewing Datastore Admin resource usage When you run a Datastore Admin job, you are actually running an underlying MapReduce job.

