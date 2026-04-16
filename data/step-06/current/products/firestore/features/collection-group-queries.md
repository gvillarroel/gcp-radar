---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.908Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Collection group queries"
feature_slug: "collection-group-queries"
latest_feature_date: "2019-05-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/firestore/docs/key-visualizer"
keywords:
  - "collection"
  - "group"
  - "queries"
  - "firestore"
  - "supports"
  - "across"
  - "all"
  - "collections"
---

# Collection group queries

Product: Firestore
Coverage: LOW

## Step 02 Summary

Cloud Firestore supports queries across all collections that share the same collection ID.

## Extended Definition

Cloud Firestore supports queries across all collections that share the same collection ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)

## Supporting Pages

### "Summarize data with aggregation queries \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVER ). addOnCompleteListener { task - > if ( task . isSuccessful ) { // Count fetched successfully val snapshot = task . result Log . d ( TAG , "Count: ${ snapshot . count } " ) } else { Log . d ( TAG , "Count failed: " , task . getException ()) } } DocSnippets . kt Dart // This also works with collection queries. db . collection ( "cities" ). where ( "capital" , isEqualTo: 10 ). count (). get (). then ( ( res ) = > print ( res . count ), onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Go package firestore import ( "context" "errors" "fmt" "io" "cloud.google.com/go/firestore" firestorepb "cloud.google.com/go/firestore/apiv1/firestorepb" ) func createCountQuery ( w io .
- In other words, if and only if your rules allow clients to execute certain collection or collection group queries, clients can also perform the aggregation on those queries.
- Firestore supports the following aggregation queries: count() sum() average() Firestore calculates the aggregation and transmits only the result back to your application.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Overview of Key Visualizer \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- These can be single-field indexes or composite indexes.For example, the following indexes are some examples of index keys as seen on the Key Visualizer tool: COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (timestamp: ASC) VALUES: (1686162996397845) DOCUMENT: projects/PROJECT ID/databases/default/documents/Users/QstCrsaGuq9ybj81dNse COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (Timestamp: ASC, Name: ASC,Country: ARRAY) VALUES: (16500000000000001L, 'Alice', 'USA') DOCUMENT: (projects/PROJECT ID/databases/default/documents/Users/5000000000000001) Scan eligibility Each Key Visualizer scan covers a two hour period.
- Limits Although Key Visualizer shows a variety of metrics, it doesn't display every single metric that can affect the performance of Firestore.
- Each scan includes a heatmap that shows access patterns or performance metrics for a group of document keys or index keys over time.

### "Class FirestoreAdminClient (2.23.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result type for the operation will be Database A Cloud Firestore Database. collection group path collection group path ( project : str , database : str , collection : str ) - > str Returns a fully-qualified collection group string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create backup schedule create backup schedule ( request : typing .
- A parent name of the form projects/{project id}/databases/{database id}/collectionGroups/{collection id} This corresponds to the parent field on the request instance; if request is provided, this should not be set. index google.cloud.firestore admin v1.types.Index Required.
- Fields are grouped by their "Collection Group", which represent all collections in the database with the same ID. user creds path user creds path ( project : str , database : str , user creds : str ) - > str Returns a fully-qualified user creds string.
- Home Documentation Developer tools Python Client libraries Send feedback Class FirestoreAdminClient (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

