---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.886Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore OR queries"
feature_slug: "firestore-or-queries"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries"
  - "https://docs.cloud.google.com/firestore/docs/pitr"
  - "https://docs.cloud.google.com/firestore/native/docs/overview"
keywords:
  - "firestore"
  - "queries"
  - "supports"
---

# Firestore OR queries

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports OR queries.

## Extended Definition

Firestore supports OR queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr)
- [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview)

## Supporting Pages

### "Summarize data with aggregation queries \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore supports the following aggregation queries: count() sum() average() Firestore calculates the aggregation and transmits only the result back to your application.
- SERVER ). addOnCompleteListener { task - > if ( task . isSuccessful ) { // Count fetched successfully val snapshot = task . result Log . d ( TAG , "Count: ${ snapshot . count } " ) } else { Log . d ( TAG , "Count failed: " , task . getException ()) } } DocSnippets . kt Dart // This also works with collection queries. db . collection ( "cities" ). where ( "capital" , isEqualTo: 10 ). count (). get (). then ( ( res ) = > print ( res . count ), onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Go package firestore import ( "context" "errors" "fmt" "io" "cloud.google.com/go/firestore" firestorepb "cloud.google.com/go/firestore/apiv1/firestorepb" ) func createCountQuery ( w io .
- Security rules for aggregation queries Firestore Security Rules work the same on aggregation queries as on queries that return documents.
- Queries are served only by the Firestore backend, skipping the local cache and any buffered updates.

### "Point-in-time recovery (PITR) overview \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute billing: Any queries that you make during the PITR window of 7 days, either through stale reads or exports, incur read operation costs based on the number of documents read.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Pricing Consider the following pricing information before you enable PITR for your database: Storage: Firestore measures the database size daily.
- The PITR export operation supports all filters, including export of all documents and export of specific collections.

### Firestore overview \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Expressive querying In Firestore in Native Mode, you can use queries to retrieve individual, specific documents or to retrieve all the documents in a collection that match your query parameters.
- Designed to scale Firestore in Native Mode brings you automatic multi-region data replication, strongly-consistent queries, atomic batch operations, and transaction support.
- Key capabilities Flexibility The Firestore in Native Mode data model supports flexible, hierarchical data structures.
- The Firestore in Native Mode data model supports whatever data structure works best for your app.

