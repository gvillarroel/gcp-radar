---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.875Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore Query Explain"
feature_slug: "firestore-query-explain"
latest_feature_date: "2024-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance"
  - "https://docs.cloud.google.com/firestore/native/docs/query-data/queries"
keywords:
  - "firestore"
  - "query"
  - "explain"
  - "returns"
  - "plans"
  - "billing"
  - "statistics"
  - "performance"
---

# Firestore Query Explain

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore Query Explain returns query plans, billing statistics, and performance statistics for queries.

## Extended Definition

Firestore Query Explain returns query plans, billing statistics, and performance statistics for queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)

## Supporting Pages

### "Analyze query execution with Query Explain \_|\_ Firestore in Native mode\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain)
- Source ID: `site-docs-reference-required-4`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analyze query execution with Query Explain Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Consider this query as an example: db.pipeline().collection('/users').sort(field("status").ascending()).limit(100) Summary Statistics The top of the explained output contains a summary of the execution statistics.
- Analysis The output of Query Explain contains two main components-the Summary Statistics and Execution Tree.
- Execution: results returned: 2 request peak memory usage: 20.25 KiB (20,736 B) data bytes read: 148 B entity row scanned: 2 Billing: read units: 1 Execution Tree The execution tree describes the query execution as a series of nodes.

### "Optimize query performance \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- Source ID: `site-docs-reference-required-4`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use forceIndex with Query Explain You can use Query Explain , especially with the analyze option, to observe the effects of forceIndex : Verify that Firestore in Native Mode used the specified index in forceIndex by checking the leaf nodes of the execution tree for the index ID.
- Optimize query performance Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- If you observe suboptimal performance with the default query plan, use Query Explain to diagnose the issue before forcing an index.
- If an index is used for a query, but the query engine is still fetching and discarding many documents, as identified by a Scan node that returns many records followed by a Filter node that returns few records, this is a sign that the query predicate satisfied using the index is not selective.

### "Query and filter data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Explain your query performance Firestore in Native Mode allows you to measure performance of your queries on the backend and receive detailed performance statistics on backend query execution in return.
- WriteLine ( "Added example cities data to the cities collection." ); Program . cs Ruby cities ref = firestore . col collection path cities ref . doc ( "SF" ) . set ( { name : "San Francisco" , state : "CA" , country : "USA" , capital : false , density : 18 000 , population : 860 000 , regions : [ "west coast" , "norcal" ] } ) cities ref . doc ( "LA" ) . set ( { name : "Los Angeles" , state : "CA" , country : "USA" , capital : false , density : 8 300 , population : 3 900 000 , regions : [ "west coast" , "socal" ] } ) cities ref . doc ( "DC" ) . set ( { name : "Washington D.C." , state : nil , country : "USA" , capital : true , density : 11 300 , population : 680 000 , regions : [ "east coast" ] } ) cities ref . doc ( "TOK" ) . set ( { name : "Tokyo" , state : nil , country : "Japan" , capital : true , density : 16 000 , population : 9 000 000 , regions : [ "kanto" , "honshu" ] } ) cities ref . doc ( "BJ" ) . set ( { name : "Beijing" , state : nil , country : "China" , capital : true , density : 3 500 , population : 21 500 000 , regions : [ "jingjinji" , "hebei" ] } ) query data . rb Simple queries The following query returns all cities with state CA : Web version 9 // Create a reference to the cities collection import { collection , query , where } from "firebase/firestore" ; const citiesRef = collection ( db , "cities" ); // Create a query against the collection. const q = query ( citiesRef , where ( "state" , "==" , "CA" )); simple queries . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. // Create a reference to the cities collection var citiesRef = db . collection ( "cities" ); // Create a query against the collection. var query = citiesRef . where ( "state" , "==" , "CA" ); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. // Create a reference to the cities collection let citiesRef = db . collection ( "cities" ) // Create a query against the collection. let query = citiesRef . whereField ( "state" , isEqualTo : "CA" ) ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. // Create a reference to the cities collection FIRCollectionReference citiesRef = [ self . db collectionWithPath : @"cities" ]; // Create a query against the collection.
- Id ); } Program . cs Ruby cities ref = firestore . col collection path query = cities ref . where "state" , "=" , "CA" query . get do city puts "Document #{ city . document id } returned by query state=CA." end query data . rb The following query returns all the capital cities: Web version 9 import { collection , query , where } from "firebase/firestore" ; const citiesRef = collection ( db , "cities" ); const q = query ( citiesRef , where ( "capital" , "==" , true )); simple queries again . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. var citiesRef = db . collection ( "cities" ); var query = citiesRef . where ( "capital" , "==" , true ); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. let capitalCities = db . collection ( "cities" ). whereField ( "capital" , isEqualTo : true ) ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.
- An array-contains-any query returns documents where the given field is an array that contains one or more of the comparison values: Web version 9 import { query , where } from "firebase/firestore" ; const q = query ( citiesRef , where ( 'regions' , 'array-contains-any' , [[ 'west coast' ], [ 'east coast' ]])); array contains any filter . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. citiesRef . where ( 'regions' , 'array-contains-any' , [[ 'west coast' ], [ 'east coast' ]]); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. let citiesRef = db . collection ( "cities" ) citiesRef . whereField ( "regions" , arrayContainsAny : [ "west coast" , "east coast" ]) ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.

