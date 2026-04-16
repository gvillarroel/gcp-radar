---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.905Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "array-contains-any query operator"
feature_slug: "array-contains-any-query-operator"
latest_feature_date: "2019-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue"
  - "https://docs.cloud.google.com/firestore/docs/concepts/index-overview"
  - "https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document"
keywords:
  - "array"
  - "contains"
  - "query"
  - "operator"
  - "firestore"
  - "supports"
---

# array-contains-any query operator

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports the array-contains-any query operator.

## Extended Definition

Firestore supports the array-contains-any query operator.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue)
- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document)

## Supporting Pages

### ArrayValue \_|\_ Firestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cannot directly contain another array value, though can contain a map which contains another array. mapValue object ( MapValue ) A map value. fieldReferenceValue string Value which references a field.
- Home Documentation Databases Firestore Reference Send feedback ArrayValue Stay organized with collections Save and categorize content based on your preferences.
- Pipeline A Firestore query represented as an ordered list of operations / stages.
- JSON representation { // Union field value type can be only one of the following: "nullValue" : null , "booleanValue" : boolean , "integerValue" : string , "doubleValue" : number , "timestampValue" : string , "stringValue" : string , "bytesValue" : string , "referenceValue" : string , "geoPointValue" : { object ( LatLng ) } , "arrayValue" : { object ( ArrayValue ) } , "mapValue" : { object ( MapValue ) } , "fieldReferenceValue" : string , "variableReferenceValue" : string , "functionValue" : { object ( Function ) } , "pipelineValue" : { object ( Pipeline ) } // End of list of possible types for union field value type . } Fields Union field value type .

### "Standard edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each row in the following table represents an entry in a single-field index: Collection Field indexed Query scope cities arrow upward name Collection cities arrow upward state Collection cities arrow upward country Collection cities arrow upward capital Collection cities arrow upward population Collection cities arrow upward regions Collection cities arrow downward name Collection cities arrow downward state Collection cities arrow downward country Collection cities arrow downward capital Collection cities arrow downward population Collection cities arrow downward regions Collection cities array-contains regions Collection Queries supported by single-field indexes Using these automatically created single-field indexes, you can run simple queries like the following: Web const stateQuery = citiesRef . where ( "state" , "==" , "CA" ); const populationQuery = citiesRef . where ( "population" , "<" , 100000 ); const nameQuery = citiesRef . where ( "name" , ">=" , "San Francisco" ); test . firestore . js You can also create in and compound equality ( == ) queries: Web citiesRef.where('country', 'in', ["USA", "Japan", "China"]) // Compound equality queries citiesRef.where("state", "==", "CO").where("name", "==", "Denver") citiesRef.where("country", "==", "USA") .where("capital", "==", false) .where("state", "==", "CA") .where("population", "==", 860000) If you need to run a compound query that uses a range comparison ( < , <= , , or >= ) or if you need to sort by a different field, you must create a manual index for that query.
- Array‑contains Supports array-contains and array-contains-any query clauses on the field.
- Collection Fields indexed Query scope cities arrow upward (or arrow downward ) country, arrow upward population Collection To run the same queries but with a descending sort order, you need an additional index in the descending direction for population : Web citiesRef.where("country", "==", "USA").orderBy("population", "desc") citiesRef.where("country", "==", "USA") .where("population", " ", 690000) .orderBy("population", "desc") citiesRef.where("country", "in", ["USA", "Japan", "China"]) .where("population", ">", 690000) .orderBy("population", "desc") Collection Fields indexed Query scope cities arrow upward country, arrow upward population Collection cities arrow upward country , arrow downward population Collection To avoid performance loss caused by index merging , we recommend that you create an index to combine an array-contains or array-contains-any query with additional clauses: Web citiesRef . where ( "regions" , "array-contains" , "east coast" ) . where ( "capital" , "==" , true ) // array-contains-any and array-contains use the same index citiesRef . where ( "regions" , "array-contains-any" , [ "west coast" , "east coast" ]) . where ( "capital" , "==" , true ) Collection Fields indexed Query scope cities array-contains tags, arrow upward (or arrow downward ) capital Collection Queries supported by collection group indexes To demonstrate an index with collection group scope, add a landmarks sub-collection to some of the city documents: Web var citiesRef = db . collection ( "cities" ); citiesRef . doc ( "SF" ) . collection ( "landmarks" ) . doc () . set ({ name : "Golden Gate Bridge" , category : "bridge" }); citiesRef . doc ( "SF" ) . collection ( "landmarks" ) . doc () . set ({ name : "Golden Gate Park" , category : "park" }); citiesRef . doc ( "DC" ) . collection ( "landmarks" ) . doc () . set ({ name : "National Gallery of Art" , category : "museum" }); citiesRef . doc ( "DC" ) . collection ( "landmarks" ) . doc () . set ({ name : "National Mall" , category : "park" }); Using the following single-field index with collection scope, you can query a single city's landmarks collection based on the category field: Collection Fields indexed Query scope landmarks arrow upward (or arrow downward ) category Collection Web citiesRef.doc("SF").collection("landmarks").where("category", "==", "park") citiesRef.doc("SF").collection("landmarks").where("category", "in", ["park", "museum"]) If you're interested in querying the landmarks across all cities, for example, you run this query on the collection group that consists of all landmarks collections.
- The app uses combinations of equality clauses for category , city , and editors pick while always sorting by ascending star rating : Web db.collection("restaurants").where("category", "==", "burgers") .orderBy("star rating") db.collection("restaurants").where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==" "San Francisco") .where("editors pick", "==", true ) .orderBy("star rating") You could create an index for each query: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward editors pick, arrow upward star rating Collection As a better solution, you can reduce the number of indexes by taking advantage of Firestore Standard edition's ability to merge indexes for equality clauses: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward editors pick, arrow upward star rating Collection Not only is this set of indexes smaller, it also supports an additional query: Web db.collection("restaurants").where("editors pick", "==", true) .orderBy("star rating") Indexing limits The following limits apply to indexes.

### "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cannot directly contain another array value, though can contain a map which contains another array. mapValue object ( MapValue ) A map value. fieldReferenceValue string Value which references a field.
- Cannot directly contain another array value, though can contain a map which contains another array. mapValue object ( MapValue ) A map value. fieldReferenceValue string Value which references a field.
- FieldsEntry JSON representation { "key" : string , "value" : { object ( Value ) } } Fields key string value object ( Value ) Value JSON representation { // Union field value type can be only one of the following: "nullValue" : null , "booleanValue" : boolean , "integerValue" : string , "doubleValue" : number , "timestampValue" : string , "stringValue" : string , "bytesValue" : string , "referenceValue" : string , "geoPointValue" : { object ( LatLng ) } , "arrayValue" : { object ( ArrayValue ) } , "mapValue" : { object ( MapValue ) } , "fieldReferenceValue" : string , "variableReferenceValue" : string , "functionValue" : { object ( Function ) } , "pipelineValue" : { object ( Pipeline ) } // End of list of possible types for union field value type . } Fields Union field value type .
- FieldsEntry JSON representation { "key" : string , "value" : { object ( Value ) } } Fields key string value object ( Value ) Value JSON representation { // Union field value type can be only one of the following: "nullValue" : null , "booleanValue" : boolean , "integerValue" : string , "doubleValue" : number , "timestampValue" : string , "stringValue" : string , "bytesValue" : string , "referenceValue" : string , "geoPointValue" : { object ( LatLng ) } , "arrayValue" : { object ( ArrayValue ) } , "mapValue" : { object ( MapValue ) } , "fieldReferenceValue" : string , "variableReferenceValue" : string , "functionValue" : { object ( Function ) } , "pipelineValue" : { object ( Pipeline ) } // End of list of possible types for union field value type . } Fields Union field value type .

