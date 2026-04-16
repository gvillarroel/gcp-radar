---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.911Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Array-contains queries"
feature_slug: "array-contains-queries"
latest_feature_date: "2018-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue"
  - "https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document"
  - "https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index"
keywords:
  - "array"
  - "contains"
  - "queries"
  - "firestore"
  - "supports"
  - "match"
  - "documents"
  - "containing"
---

# Array-contains queries

Product: Firestore
Coverage: LOW

## Step 02 Summary

Cloud Firestore supports queries that match documents containing a specific array value.

## Extended Definition

Cloud Firestore supports queries that match documents containing a specific array value.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue)
- [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document)
- [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index)

## Supporting Pages

### ArrayValue \_|\_ Firestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue)
- Source ID: `site-api-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: projects/{projectId}/databases/{databaseId}/documents/{document path} . geoPointValue object ( LatLng ) A geo point value representing a point on the surface of Earth. arrayValue object ( ArrayValue ) An array value.
- Cannot directly contain another array value, though can contain a map which contains another array. mapValue object ( MapValue ) A map value. fieldReferenceValue string Value which references a field.
- Home Documentation Databases Firestore Reference Send feedback ArrayValue Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { // Union field value type can be only one of the following: "nullValue" : null , "booleanValue" : boolean , "integerValue" : string , "doubleValue" : number , "timestampValue" : string , "stringValue" : string , "bytesValue" : string , "referenceValue" : string , "geoPointValue" : { object ( LatLng ) } , "arrayValue" : { object ( ArrayValue ) } , "mapValue" : { object ( MapValue ) } , "fieldReferenceValue" : string , "variableReferenceValue" : string , "functionValue" : { object ( Function ) } , "pipelineValue" : { object ( Pipeline ) } // End of list of possible types for union field value type . } Fields Union field value type .

### "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document)
- Source ID: `site-api-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: projects/{project id}/databases/{database id}/documents/{document path} . geoPointValue object ( LatLng ) A geo point value representing a point on the surface of Earth. arrayValue object ( ArrayValue ) An array value.
- For example: projects/{project id}/databases/{database id}/documents/{document path} . geoPointValue object ( LatLng ) A geo point value representing a point on the surface of Earth. arrayValue object ( ArrayValue ) An array value.
- Cannot directly contain another array value, though can contain a map which contains another array. mapValue object ( MapValue ) A map value. fieldReferenceValue string Value which references a field.
- Cannot directly contain another array value, though can contain a map which contains another array. mapValue object ( MapValue ) A map value. fieldReferenceValue string Value which references a field.

### "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index)
- Source ID: `site-api-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How the field value is indexed. value mode can be only one of the following: order enum ( Order ) Indicates that this field supports ordering by the specified order or comparing using =, !=, <, <=, >, >=. arrayConfig enum ( ArrayConfig ) Indicates that this field supports operations on array value s. vectorConfig object ( VectorConfig ) Indicates that this field supports nearest neighbor and distance operations on vector.
- The form of this name for composite indexes will be: projects/{project id}/databases/{database id}/collectionGroups/{collection id}/indexes/{composite index id} For single field indexes, this field will be empty. queryScope enum ( QueryScope ) Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection ID.
- Curl Request curl --location 'https://firestore.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create index", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request for [FirestoreAdmin.CreateIndex][].
- IndexField JSON representation { "fieldPath" : string , // Union field value mode can be only one of the following: "order" : enum ( Order ) , "arrayConfig" : enum ( ArrayConfig ) , "vectorConfig" : { object ( VectorConfig ) } // End of list of possible types for union field value mode . } Fields fieldPath string Can be name .

