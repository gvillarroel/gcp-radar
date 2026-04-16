---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.913Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Cloud Firestore Security Rules query-based access control"
feature_slug: "cloud-firestore-security-rules-query-based-access-control"
latest_feature_date: "2018-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/security/get-started"
  - "https://docs.cloud.google.com/firestore/docs/quickstart-mobile-web"
  - "https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries"
keywords:
  - "firestore"
  - "security"
  - "rules"
  - "query"
  - "based"
  - "access"
  - "control"
  - "can"
---

# Cloud Firestore Security Rules query-based access control

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore Security Rules can evaluate query requests and enforce access based on query properties such as limit and orderBy; Cloud Firestore Security Rules can restrict reads and writes based on query parameters.

## Extended Definition

Cloud Firestore Security Rules can evaluate query requests and enforce access based on query properties such as limit and orderBy; Cloud Firestore Security Rules can restrict reads and writes based on query parameters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/security/get-started](https://docs.cloud.google.com/firestore/native/docs/security/get-started)
- [https://docs.cloud.google.com/firestore/docs/quickstart-mobile-web](https://docs.cloud.google.com/firestore/docs/quickstart-mobile-web)
- [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)

## Supporting Pages

### "Getting started with security rules \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/security/get-started](https://docs.cloud.google.com/firestore/native/docs/security/get-started)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All Firestore Security Rules consist of match statements, which identify documents in your database, and allow expressions, which control access to those documents: service cloud . firestore { match /databases/{database } / documents { match /<some path>/ { allow read, write : if < some condition > ; } } } Every database request from a Firestore mobile/web client library is evaluated against your security rules before reading or writing any data.
- To build user-based and role-based access systems that keep your users' data safe, you need to use Firebase Authentication with Firestore Security Rules.
- Using the CLI allows you to keep your rules under version control with your application code and deploy rules as part of your existing deployment process. // Set up Firestore in your project directory, creates a .rules file firebase init firestore // Edit the generated .rules file to your desired security rules // ... // Deploy rules for all configured databases firebase deploy -- only firestore Next steps Learn how to structure security rules .
- Security rules provide access control and data validation in a simple yet expressive format.

### "Summarize data with aggregation queries \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AggregationQuery ( query ) alias to provides a key for accessing the aggregate query results aggregate query . count ( alias = "all" ) results = aggregate query . get () for result in results : print ( f "Alias of results from query: { result [ 0 ] . alias } " ) print ( f "Number of results from query: { result [ 0 ] . value } " ) aggregate query count . py Use the sum() aggregation Use the sum() aggregation to return the total sum of numeric values that match a given query—for example: Web version 9 Learn more about the tree-shakeable Web v9 modular SDK and upgrade from version 8. const coll = collection ( firestore , 'cities' ); const snapshot = await getAggregateFromServer ( coll , { totalPopulation : sum ( 'population' ) }); console . log ( 'totalPopulation: ' , snapshot . data (). totalPopulation ); Swift Note: This product is not available on watchOS and App Clip targets. let query = db . collection ( "cities" ) let aggregateQuery = query . aggregate ([ AggregateField . sum ( "population" )]) do { let snapshot = try await aggregateQuery . getAggregation ( source : . server ) print ( snapshot . get ( AggregateField . sum ( "population" ))) } catch { print ( error ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.
- The following example performs multiple aggregations in a single aggregation query: Web version 9 Learn more about the tree-shakeable Web v9 modular SDK and upgrade from version 8. const coll = collection ( firestore , 'cities' ); const snapshot = await getAggregateFromServer ( coll , { countOfDocs : count (), totalPopulation : sum ( 'population' ), averagePopulation : average ( 'population' ) }); console . log ( 'countOfDocs: ' , snapshot . data (). countOfDocs ); console . log ( 'totalPopulation: ' , snapshot . data (). totalPopulation ); console . log ( 'averagePopulation: ' , snapshot . data (). averagePopulation ); Swift Note: This product is not available on watchOS and App Clip targets. let query = db . collection ( "cities" ) let aggregateQuery = query . aggregate ([ AggregateField . count (), AggregateField . sum ( "population" ), AggregateField . average ( "population" )]) do { let snapshot = try await aggregateQuery . getAggregation ( source : . server ) print ( "Count: \( snapshot . get ( AggregateField . count ())) " ) print ( "Sum: \( snapshot . get ( AggregateField . sum ( "population" ))) " ) print ( "Average: \( snapshot . get ( AggregateField . average ( "population" ))) " ) } catch { print ( error ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.
- GetDoubleValue ()) return nil } The average() aggregation takes into account any filters on the query and any limit clauses, for example: Web version 9 Learn more about the tree-shakeable Web v9 modular SDK and upgrade from version 8. const coll = collection ( firestore , 'cities' ); const q = query ( coll , where ( 'capital' , '==' , true )); const snapshot = await getAggregateFromServer ( q , { averagePopulation : average ( 'population' ) }); console . log ( 'averagePopulation: ' , snapshot . data (). averagePopulation ); Swift Note: This product is not available on watchOS and App Clip targets. let query = db . collection ( "cities" ). whereField ( "capital" , isEqualTo : true ) let aggregateQuery = query . aggregate ([ AggregateField . average ( "population" )]) do { let snapshot = try await aggregateQuery . getAggregation ( source : . server ) print ( snapshot . get ( AggregateField . average ( "population" ))) } catch { print ( error ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.
- GetIntegerValue ()) return nil } The sum() aggregation takes into account any filters on the query and any limit clauses—for example: Web version 9 Learn more about the tree-shakeable Web v9 modular SDK and upgrade from version 8. const coll = collection ( firestore , 'cities' ); const q = query ( coll , where ( 'capital' , '==' , true )); const snapshot = await getAggregateFromServer ( q , { totalPopulation : sum ( 'population' ) }); console . log ( 'totalPopulation: ' , snapshot . data (). totalPopulation ); Swift Note: This product is not available on watchOS and App Clip targets. let query = db . collection ( "cities" ). whereField ( "capital" , isEqualTo : true ) let aggregateQuery = query . aggregate ([ AggregateField . sum ( "population" )]) do { let snapshot = try await aggregateQuery . getAggregation ( source : . server ) print ( snapshot . get ( AggregateField . sum ( "population" ))) } catch { print ( error ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.

### "Quickstart: Create a Firestore database by using a web or mobile client\

- URL: [https://docs.cloud.google.com/firestore/docs/quickstart-mobile-web](https://docs.cloud.google.com/firestore/docs/quickstart-mobile-web)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Web version 9 import { collection , getDocs } from "firebase/firestore" ; const querySnapshot = await getDocs ( collection ( db , "users" )); querySnapshot . forEach (( doc ) = > { console . log ( ${ doc . id } => ${ doc . data () } ); }); get all users . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. db . collection ( "users" ). get (). then (( querySnapshot ) = > { querySnapshot . forEach (( doc ) = > { console . log ( ${ doc . id } => ${ doc . data () } ); }); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. do { let snapshot = try await db . collection ( "users" ). getDocuments () for document in snapshot . documents { print ( " \( document . documentID ) => \( document . data ()) " ) } } catch { print ( "Error getting documents: \( error ) " ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. [[ self . db collectionWithPath : @"users" ] getDocumentsWithCompletion : ^ ( FIRQuerySnapshot Nullable snapshot , NSError Nullable error ) { if ( error != nil ) { NSLog ( @"Error getting documents: %@" , error ); } else { for ( FIRDocumentSnapshot document in snapshot . documents ) { NSLog ( @"%@ => %@" , document . documentID , document . data ); } } }]; ViewController . m Kotlin Android db . collection ( "users" ) . get () . addOnSuccessListener { result - > for ( document in result ) { Log . d ( TAG , " ${ document . id } => ${ document . data } " ) } } . addOnFailureListener { exception - > Log . w ( TAG , "Error getting documents." , exception ) } DocSnippets . kt Java Android db . collection ( "users" ) . get () . addOnCompleteListener ( new OnCompleteListener<QuerySnapshot> () { @Override public void onComplete ( @NonNull Task<QuerySnapshot> task ) { if ( task . isSuccessful ()) { for ( QueryDocumentSnapshot document : task . getResult ()) { Log . d ( TAG , document . getId () + " => " + document . getData ()); } } else { Log . w ( TAG , "Error getting documents." , task . getException ()); } } }); DocSnippets . java Dart await db . collection ( "users" ). get (). then (( event ) { for ( var doc in event . docs ) { print ( " ${ doc . id } => ${ doc . data () } " ); } }); firestore . dart C++ Future<QuerySnapshot> users = db - > Collection ( "users" ).
- Select a starting mode for your Firestore Security Rules: Test mode Good for getting started with the mobile and web client libraries, but allows anyone to read and overwrite your data.
- Log ( "Read all data from the users collection." ); }); Secure your data Use Firebase Authentication and Firestore Security Rules to secure your data in Firestore in Native Mode.
- If you create multiple databases for your project, you can deploy Firestore Security Rules for each database.

