---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.871Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore range and inequality filters on multiple fields"
feature_slug: "firestore-range-and-inequality-filters-on-multiple-fields"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields"
  - "https://docs.cloud.google.com/firestore/docs/concepts/index-overview"
  - "https://docs.cloud.google.com/firestore/native/docs/query-data/queries"
keywords:
  - "firestore"
  - "range"
  - "inequality"
  - "filters"
  - "multiple"
  - "fields"
  - "queries"
  - "can"
---

# Firestore range and inequality filters on multiple fields

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore queries can apply range and inequality filters across multiple fields; Firestore queries can use range and inequality filters on multiple fields in a single query.

## Extended Definition

Firestore queries can apply range and inequality filters across multiple fields; Firestore queries can use range and inequality filters on multiple fields in a single query.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)

## Supporting Pages

### "Query with range and inequality filters on multiple fields overview \_|\_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- Source ID: `site-docs-reference`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Apart from the query limitations , note the following limitations before using queries with range and inequality filters on multiple fields: Queries with range or inequality filters on document fields and only equality constraints on the document key ( name ) aren't supported.
- Query with range and inequality filters on multiple fields overview Firestore supports using range and inequality filters on multiple fields in a single query.
- Pricing Queries with range and inequality filters on multiple fields are billed based on documents read and index entries read.
- Range and inequality filters on multiple fields The following query uses range filters on population and density to return all cities where population is higher than 1,000,000 people and population density is less than 10,000 people per unit of area.

### "Query and filter data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Types ; namespace GoogleCloudSamples { public class QueryData { public static string Usage = @"Usage: C:\> dotnet run command YOUR PROJECT ID Where command is one of query-create-examples create-query-state create-query-capital simple-queries array-contains-query array-contains-any-query in-query in-query-array collection-group-query subcollection-query chained-query composite-index-chained-query range-query multiple-inequalities " ; private static async Task QueryCreateExamples ( string project ) { FirestoreDb db = FirestoreDb .
- Id ); } Program . cs Ruby cities ref = firestore . col collection path query = cities ref . where "capital" , "=" , true query . get do city puts "Document #{ city . document id } returned by query capital=true." end query data . rb Execute a query After creating a query object, use the get() function to retrieve the results: Web version 9 import { collection , query , where , getDocs } from "firebase/firestore" ; const q = query ( collection ( db , "cities" ), where ( "capital" , "==" , true )); const querySnapshot = await getDocs ( q ); querySnapshot . forEach (( doc ) = > { // doc.data() is never undefined for query doc snapshots console . log ( doc . id , " => " , doc . data ()); }); get multiple . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. db . collection ( "cities" ). where ( "capital" , "==" , true ) . get () . then (( querySnapshot ) = > { querySnapshot . forEach (( doc ) = > { // doc.data() is never undefined for query doc snapshots console . log ( doc . id , " => " , doc . data ()); }); }) . catch (( error ) = > { console . log ( "Error getting documents: " , error ); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. do { let querySnapshot = try await db . collection ( "cities" ). whereField ( "capital" , isEqualTo : true ) . getDocuments () for document in querySnapshot . documents { print ( " \( document . documentID ) => \( document . data ()) " ) } } catch { print ( "Error getting documents: \( error ) " ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. [[[ self . db collectionWithPath : @"cities" ] queryWhereField : @"capital" isEqualTo : @( YES ) ] getDocumentsWithCompletion : ^ ( FIRQuerySnapshot snapshot , NSError error ) { if ( error != nil ) { NSLog ( @"Error getting documents: %@" , error ); } else { for ( FIRDocumentSnapshot document in snapshot . documents ) { NSLog ( @"%@ => %@" , document . documentID , document . data ); } } }]; ViewController . m Kotlin Android db . collection ( "cities" ) . whereEqualTo ( "capital" , true ) . get () . addOnSuccessListener { documents - > for ( document in documents ) { Log . d ( TAG , " ${ document . id } => ${ document . data } " ) } } . addOnFailureListener { exception - > Log . w ( TAG , "Error getting documents: " , exception ) } DocSnippets . kt Java Android db . collection ( "cities" ) . whereEqualTo ( "capital" , true ) . get () . addOnCompleteListener ( new OnCompleteListener<QuerySnapshot> () { @Override public void onComplete ( @NonNull Task<QuerySnapshot> task ) { if ( task . isSuccessful ()) { for ( QueryDocumentSnapshot document : task . getResult ()) { Log . d ( TAG , document . getId () + " => " + document . getData ()); } } else { Log . d ( TAG , "Error getting documents: " , task . getException ()); } } }); DocSnippets . java Dart db . collection ( "cities" ). where ( "capital" , isEqualTo: true ). get (). then ( ( querySnapshot ) { print ( "Successfully completed" ); for ( var docSnapshot in querySnapshot . docs ) { print ( ' ${ docSnapshot . id } => ${ docSnapshot . data () } ' ); } }, onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Java // asynchronously retrieve multiple documents ApiFuture<QuerySnapshot> future = db . collection ( "cities" ). whereEqualTo ( "capital" , true ). get (); // future.get() blocks on response List<QueryDocumentSnapshot> documents = future . get (). getDocuments (); for ( DocumentSnapshot document : documents ) { System . out . println ( document . getId () + " => " + document . toObject ( City . class )); } RetrieveDataSnippets . java Python Note: Use of CollectionRef stream() is prefered to get() docs = ( db . collection ( "cities" ) . where ( filter = FieldFilter ( "capital" , "==" , True )) . stream () ) for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py Python (Async) Note: Use of CollectionRef stream() is prefered to get() docs = ( db . collection ( "cities" ) . where ( filter = FieldFilter ( "capital" , "==" , True )) . stream () ) async for doc in docs : print ( f " { doc . id } => { doc . to dict () } " ) snippets . py C++ db - > Collection ( "cities" ) .
- Web version 9 import { query , where } from "firebase/firestore" ; const q1 = query ( citiesRef , where ( "state" , "==" , "CO" ), where ( "name" , "==" , "Denver" )); const q2 = query ( citiesRef , where ( "state" , "==" , "CA" ), where ( "population" , "<" , 1000000 )); chain filters . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. const q1 = citiesRef . where ( "state" , "==" , "CO" ). where ( "name" , "==" , "Denver" ); const q2 = citiesRef . where ( "state" , "==" , "CA" ). where ( "population" , "<" , 1000000 ); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. citiesRef . whereField ( "state" , isEqualTo : "CO" ) . whereField ( "name" , isEqualTo : "Denver" ) citiesRef . whereField ( "state" , isEqualTo : "CA" ) . whereField ( "population" , isLessThan : 1000000 ) ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. [[ citiesRef queryWhereField : @"state" isEqualTo : @"CO" ] queryWhereField : @"name" isGreaterThanOrEqualTo : @"Denver" ]; [[ citiesRef queryWhereField : @"state" isEqualTo : @"CA" ] queryWhereField : @"population" isLessThan : @1000000 ]; ViewController . m Kotlin Android citiesRef . whereEqualTo ( "state" , "CO" ). whereEqualTo ( "name" , "Denver" ) citiesRef . whereEqualTo ( "state" , "CA" ). whereLessThan ( "population" , 1000000 ) DocSnippets . kt Java Android citiesRef . whereEqualTo ( "state" , "CO" ). whereEqualTo ( "name" , "Denver" ); citiesRef . whereEqualTo ( "state" , "CA" ). whereLessThan ( "population" , 1000000 ); DocSnippets . java Dart final citiesRef = db . collection ( "cities" ); citiesRef . where ( "state" , isEqualTo: "CO" ) . where ( "name" , isEqualTo: "Denver" ); citiesRef . where ( "state" , isEqualTo: "CA" ) . where ( "population" , isLessThan: 1000000 ); firestore . dart Java Query chainedQuery1 = cities . whereEqualTo ( "state" , "CO" ). whereEqualTo ( "name" , "Denver" ); QueryDataSnippets . java Python cities ref = db . collection ( "cities" ) denver query = cities ref . where ( filter = FieldFilter ( "state" , "==" , "CO" )) . where ( filter = FieldFilter ( "name" , "==" , "Denver" ) ) large us cities query = cities ref . where ( filter = FieldFilter ( "state" , "==" , "CA" ) ) . where ( filter = FieldFilter ( "population" , ">" , 1000000 )) snippets . py Python (Async) cities ref = db . collection ( "cities" ) denver query = cities ref . where ( filter = FieldFilter ( "state" , "==" , "CO" )) . where ( filter = FieldFilter ( "name" , "==" , "Denver" ) ) large us cities query = cities ref . where ( filter = FieldFilter ( "state" , "==" , "CA" ) ) . where ( filter = FieldFilter ( "population" , ">" , 1000000 )) snippets . py C++ cities ref .
- WriteLine ( "Added example cities data to the cities collection." ); Program . cs Ruby cities ref = firestore . col collection path cities ref . doc ( "SF" ) . set ( { name : "San Francisco" , state : "CA" , country : "USA" , capital : false , density : 18 000 , population : 860 000 , regions : [ "west coast" , "norcal" ] } ) cities ref . doc ( "LA" ) . set ( { name : "Los Angeles" , state : "CA" , country : "USA" , capital : false , density : 8 300 , population : 3 900 000 , regions : [ "west coast" , "socal" ] } ) cities ref . doc ( "DC" ) . set ( { name : "Washington D.C." , state : nil , country : "USA" , capital : true , density : 11 300 , population : 680 000 , regions : [ "east coast" ] } ) cities ref . doc ( "TOK" ) . set ( { name : "Tokyo" , state : nil , country : "Japan" , capital : true , density : 16 000 , population : 9 000 000 , regions : [ "kanto" , "honshu" ] } ) cities ref . doc ( "BJ" ) . set ( { name : "Beijing" , state : nil , country : "China" , capital : true , density : 3 500 , population : 21 500 000 , regions : [ "jingjinji" , "hebei" ] } ) query data . rb Simple queries The following query returns all cities with state CA : Web version 9 // Create a reference to the cities collection import { collection , query , where } from "firebase/firestore" ; const citiesRef = collection ( db , "cities" ); // Create a query against the collection. const q = query ( citiesRef , where ( "state" , "==" , "CA" )); simple queries . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. // Create a reference to the cities collection var citiesRef = db . collection ( "cities" ); // Create a query against the collection. var query = citiesRef . where ( "state" , "==" , "CA" ); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. // Create a reference to the cities collection let citiesRef = db . collection ( "cities" ) // Create a query against the collection. let query = citiesRef . whereField ( "state" , isEqualTo : "CA" ) ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. // Create a reference to the cities collection FIRCollectionReference citiesRef = [ self . db collectionWithPath : @"cities" ]; // Create a query against the collection.

### "Standard edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Index properties An index that allows the query to be executed most efficiently is defined by the following properties: Fields used in equality filters Fields used in sort orders Fields used in range and inequality filters (that are not already included in sort orders) Fields used in aggregations (that aren't already included in sort orders and range and inequality filters) Firestore Standard edition computes the results for queries as follows: Identifies the index corresponding to the query's collection, filter properties, filter operators, and sort orders.
- If you are using queries with range and inequality operators on multiple fields, see the indexing considerations that you should consider to optimize the performance and cost of Firestore Standard edition queries For more information about how to resolve indexing issues (index fanout, INVALID ARGUMENT errors) see the troubleshooting page .
- Each row in the following table represents an entry in a single-field index: Collection Field indexed Query scope cities arrow upward name Collection cities arrow upward state Collection cities arrow upward country Collection cities arrow upward capital Collection cities arrow upward population Collection cities arrow upward regions Collection cities arrow downward name Collection cities arrow downward state Collection cities arrow downward country Collection cities arrow downward capital Collection cities arrow downward population Collection cities arrow downward regions Collection cities array-contains regions Collection Queries supported by single-field indexes Using these automatically created single-field indexes, you can run simple queries like the following: Web const stateQuery = citiesRef . where ( "state" , "==" , "CA" ); const populationQuery = citiesRef . where ( "population" , "<" , 100000 ); const nameQuery = citiesRef . where ( "name" , ">=" , "San Francisco" ); test . firestore . js You can also create in and compound equality ( == ) queries: Web citiesRef.where('country', 'in', ["USA", "Japan", "China"]) // Compound equality queries citiesRef.where("state", "==", "CO").where("name", "==", "Denver") citiesRef.where("country", "==", "USA") .where("capital", "==", false) .where("state", "==", "CA") .where("population", "==", 860000) If you need to run a compound query that uses a range comparison ( < , <= , , or >= ) or if you need to sort by a different field, you must create a manual index for that query.
- For queries with multiple equality ( == ) clauses and, optionally, an orderBy clause, Firestore Standard edition can re-use existing indexes.

