---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.913Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Single-field index exemptions"
feature_slug: "single-field-index-exemptions"
latest_feature_date: "2018-08-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/concepts/index-overview"
  - "https://docs.cloud.google.com/firestore/native/docs/best-practices"
  - "https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields"
keywords:
  - "single"
  - "field"
  - "index"
  - "exemptions"
  - "firestore"
  - "supports"
  - "exempting"
  - "specific"
---

# Single-field index exemptions

Product: Firestore
Coverage: LOW

## Step 02 Summary

Cloud Firestore supports exempting specific fields from automatic indexing.

## Extended Definition

Cloud Firestore supports exempting specific fields from automatic indexing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/native/docs/best-practices](https://docs.cloud.google.com/firestore/native/docs/best-practices)
- [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)

## Supporting Pages

### "Standard edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The app uses combinations of equality clauses for category , city , and editors pick while always sorting by ascending star rating : Web db.collection("restaurants").where("category", "==", "burgers") .orderBy("star rating") db.collection("restaurants").where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==" "San Francisco") .where("editors pick", "==", true ) .orderBy("star rating") You could create an index for each query: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward editors pick, arrow upward star rating Collection As a better solution, you can reduce the number of indexes by taking advantage of Firestore Standard edition's ability to merge indexes for equality clauses: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward editors pick, arrow upward star rating Collection Not only is this set of indexes smaller, it also supports an additional query: Web db.collection("restaurants").where("editors pick", "==", true) .orderBy("star rating") Indexing limits The following limits apply to indexes.
- Each row in the following table represents an entry in a single-field index: Collection Field indexed Query scope cities arrow upward name Collection cities arrow upward state Collection cities arrow upward country Collection cities arrow upward capital Collection cities arrow upward population Collection cities arrow upward regions Collection cities arrow downward name Collection cities arrow downward state Collection cities arrow downward country Collection cities arrow downward capital Collection cities arrow downward population Collection cities arrow downward regions Collection cities array-contains regions Collection Queries supported by single-field indexes Using these automatically created single-field indexes, you can run simple queries like the following: Web const stateQuery = citiesRef . where ( "state" , "==" , "CA" ); const populationQuery = citiesRef . where ( "population" , "<" , 100000 ); const nameQuery = citiesRef . where ( "name" , ">=" , "San Francisco" ); test . firestore . js You can also create in and compound equality ( == ) queries: Web citiesRef.where('country', 'in', ["USA", "Japan", "China"]) // Compound equality queries citiesRef.where("state", "==", "CO").where("name", "==", "Denver") citiesRef.where("country", "==", "USA") .where("capital", "==", false) .where("state", "==", "CA") .where("population", "==", 860000) If you need to run a compound query that uses a range comparison ( < , <= , , or >= ) or if you need to sort by a different field, you must create a manual index for that query.
- The following snippet creates a few city documents in a cities collection and sets name , state , country , capital , population , and tags fields for each document: Web var citiesRef = db . collection ( "cities" ); citiesRef . doc ( "SF" ). set ({ name : "San Francisco" , state : "CA" , country : "USA" , capital : false , population : 860000 , regions : [ "west coast" , "norcal" ] }); citiesRef . doc ( "LA" ). set ({ name : "Los Angeles" , state : "CA" , country : "USA" , capital : false , population : 3900000 , regions : [ "west coast" , "socal" ] }); citiesRef . doc ( "DC" ). set ({ name : "Washington, D.C." , state : null , country : "USA" , capital : true , population : 680000 , regions : [ "east coast" ] }); citiesRef . doc ( "TOK" ). set ({ name : "Tokyo" , state : null , country : "Japan" , capital : true , population : 9000000 , regions : [ "kanto" , "honshu" ] }); citiesRef . doc ( "BJ" ). set ({ name : "Beijing" , state : null , country : "China" , capital : true , population : 21500000 , regions : [ "jingjinji" , "hebei" ] }); test . firestore . js Assuming the default automatic indexing settings, Firestore Standard edition updates one ascending single-field index per field, one descending single- field index per field, and one array-contains single-field index for the array field.
- Maximum number of index entries for each document 40,000 The number of index entries is the sum of the following for a document: The number of single-field index entries The number of composite index entries To see how Firestore Standard edition turns a document and a set of indexes into index entries, see this index entry count example .

### Best practices \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/best-practices](https://docs.cloud.google.com/firestore/native/docs/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, you may want to add single-field exemptions in the following cases: Case Description Large string fields If you have a string field that often holds long string values that you don't use for querying, you can cut storage costs by exempting the field from indexing.
- As a best practice, add automatic indexing exemptions for your TTL fields.
- The query might look like: docs = db . collection ( 'WorkItems' ) . order by ( 'created' ) . limit ( 100 ) delete batch = db . batch () for doc in docs . stream (): finish work ( doc ) delete batch . delete ( doc . reference ) delete batch . commit () Each time this query runs it scans over the index entries for the created field on any recently deleted documents.
- High write rates to a collection containing documents with sequential values If you index a field that increases or decreases sequentially between documents in a collection, like a timestamp, then the maximum write rate to the collection is 500 writes per second.

### "Query with range and inequality filters on multiple fields overview \_|\_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query with range and inequality filters on multiple fields overview Firestore supports using range and inequality filters on multiple fields in a single query.
- Order index fields by equalities followed by most selective range or inequality field Firestore uses the leftmost fields of a composite index to satisfy the equality constraints and the range or inequality constraint, if any, on the first field of the orderBy() query.
- Order fields in decreasing order of query constraint selectivity To ensure that Firestore selects the optimal index for your query, specify an orderBy() clause that orders fields in decreasing order of query constraint selectivity.
- This is because Firestore always prefers an index whose index fields prefix match the order by clause of the query.

