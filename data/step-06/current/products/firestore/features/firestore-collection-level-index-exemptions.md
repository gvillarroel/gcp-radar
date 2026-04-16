---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.879Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore collection-level index exemptions"
feature_slug: "firestore-collection-level-index-exemptions"
latest_feature_date: "2023-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/concepts/index-overview"
  - "https://docs.cloud.google.com/firestore/docs/query-data/indexing"
  - "https://docs.cloud.google.com/firestore/native/docs/best-practices"
keywords:
  - "firestore"
  - "collection"
  - "level"
  - "index"
  - "exemptions"
  - "you"
  - "can"
  - "add"
---

# Firestore collection-level index exemptions

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

You can add collection-level exemptions for all fields in a collection group that do not require indexing.

## Extended Definition

You can add collection-level exemptions for all fields in a collection group that do not require indexing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/docs/query-data/indexing](https://docs.cloud.google.com/firestore/docs/query-data/indexing)
- [https://docs.cloud.google.com/firestore/native/docs/best-practices](https://docs.cloud.google.com/firestore/native/docs/best-practices)

## Supporting Pages

### "Standard edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the field path value to add collection-level index exemptions on all fields in a collection group.
- The app uses combinations of equality clauses for category , city , and editors pick while always sorting by ascending star rating : Web db.collection("restaurants").where("category", "==", "burgers") .orderBy("star rating") db.collection("restaurants").where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==" "San Francisco") .where("editors pick", "==", true ) .orderBy("star rating") You could create an index for each query: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward editors pick, arrow upward star rating Collection As a better solution, you can reduce the number of indexes by taking advantage of Firestore Standard edition's ability to merge indexes for equality clauses: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward editors pick, arrow upward star rating Collection Not only is this set of indexes smaller, it also supports an additional query: Web db.collection("restaurants").where("editors pick", "==", true) .orderBy("star rating") Indexing limits The following limits apply to indexes.
- Each row in the following table represents an entry in a single-field index: Collection Field indexed Query scope cities arrow upward name Collection cities arrow upward state Collection cities arrow upward country Collection cities arrow upward capital Collection cities arrow upward population Collection cities arrow upward regions Collection cities arrow downward name Collection cities arrow downward state Collection cities arrow downward country Collection cities arrow downward capital Collection cities arrow downward population Collection cities arrow downward regions Collection cities array-contains regions Collection Queries supported by single-field indexes Using these automatically created single-field indexes, you can run simple queries like the following: Web const stateQuery = citiesRef . where ( "state" , "==" , "CA" ); const populationQuery = citiesRef . where ( "population" , "<" , 100000 ); const nameQuery = citiesRef . where ( "name" , ">=" , "San Francisco" ); test . firestore . js You can also create in and compound equality ( == ) queries: Web citiesRef.where('country', 'in', ["USA", "Japan", "China"]) // Compound equality queries citiesRef.where("state", "==", "CO").where("name", "==", "Denver") citiesRef.where("country", "==", "USA") .where("capital", "==", false) .where("state", "==", "CA") .where("population", "==", 860000) If you need to run a compound query that uses a range comparison ( < , <= , , or >= ) or if you need to sort by a different field, you must create a manual index for that query.
- The following snippet creates a few city documents in a cities collection and sets name , state , country , capital , population , and tags fields for each document: Web var citiesRef = db . collection ( "cities" ); citiesRef . doc ( "SF" ). set ({ name : "San Francisco" , state : "CA" , country : "USA" , capital : false , population : 860000 , regions : [ "west coast" , "norcal" ] }); citiesRef . doc ( "LA" ). set ({ name : "Los Angeles" , state : "CA" , country : "USA" , capital : false , population : 3900000 , regions : [ "west coast" , "socal" ] }); citiesRef . doc ( "DC" ). set ({ name : "Washington, D.C." , state : null , country : "USA" , capital : true , population : 680000 , regions : [ "east coast" ] }); citiesRef . doc ( "TOK" ). set ({ name : "Tokyo" , state : null , country : "Japan" , capital : true , population : 9000000 , regions : [ "kanto" , "honshu" ] }); citiesRef . doc ( "BJ" ). set ({ name : "Beijing" , state : null , country : "China" , capital : true , population : 21500000 , regions : [ "jingjinji" , "hebei" ] }); test . firestore . js Assuming the default automatic indexing settings, Firestore Standard edition updates one ascending single-field index per field, one descending single- field index per field, and one array-contains single-field index for the array field.

### "Manage Standard edition indexes \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/indexing](https://docs.cloud.google.com/firestore/docs/query-data/indexing)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, consider this google datastore index resource: datastore.tf resource "google datastore index" "legacy" { kind = "foo" properties { name = "property a" direction = "ASCENDING" } properties { name = "property b" direction = "ASCENDING" } } The equivalent google firestore index resource would be: resource "google firestore index" "new" { // note: defaults to the provider project project = project // note: defaults to the (default) database database = "(default)" collection = "foo" api scope = "DATASTORE MODE API" // since there was no "ancestor" property set above, use COLLECTION GROUP here query scope = "COLLECTION GROUP" fields { field path = "property a" order = "ASCENDING" } fields { field path = "property b" order = "ASCENDING" } } Index build time To build an index, Firestore Standard edition must set up the index and then backfill the index with existing data.
- Datastore mode indexes You can also create Datastore Mode indexes using Terraform. datastore.tf resource "google firestore index" "datastore-mode-index" { project = " project-id " database = " database-id " collection = "chatrooms" fields { field path = "name" order = "ASCENDING" } fields { field path = "description" order = "DESCENDING" } query scope = "COLLECTION GROUP" api scope = "DATASTORE MODE API" } Migrate from google datastore index The google datastore index resource is deprecated and will be unavailable in terraform-provider-google version 6.0.0 and later.
- Single-field (automatic) index The following example Terraform configuration file creates a single-field index on the name field in the chatrooms collection: firestore.tf resource "random id" "variable"{ byte length = 8 } resource "google firestore field" "single-index" { project = " project-id " database = " database-id " collection = "chatrooms ${random id.variable.hex}" field = "name" index config { indexes { order = "ASCENDING" query scope = "COLLECTION GROUP" } indexes { array config = "CONTAINS" } } ttl config {} } Replace project-id with your project ID.
- Composite (manual) index The following example Terraform configuration file creates a composite index for a combination of the name field and the description field in the chatrooms collection: firestore.tf resource "google firestore index" "composite-index" { project = " project-id " database = " database-id " collection = "chatrooms" fields { field path = "name" order = "ASCENDING" } fields { field path = "description" order = "DESCENDING" } } Replace project-id with your project ID.

### Best practices \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/best-practices](https://docs.cloud.google.com/firestore/native/docs/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The best practices to reduce index fanout are: Set collection-level index exemptions .
- The query might look like: docs = db . collection ( 'WorkItems' ) . order by ( 'created' ) . limit ( 100 ) delete batch = db . batch () for doc in docs . stream (): finish work ( doc ) delete batch . delete ( doc . reference ) delete batch . commit () Each time this query runs it scans over the index entries for the created field on any recently deleted documents.
- However, you may want to add single-field exemptions in the following cases: Case Description Large string fields If you have a string field that often holds long string values that you don't use for querying, you can cut storage costs by exempting the field from indexing.
- High write rates to a collection containing documents with sequential values If you index a field that increases or decreases sequentially between documents in a collection, like a timestamp, then the maximum write rate to the collection is 500 writes per second.

