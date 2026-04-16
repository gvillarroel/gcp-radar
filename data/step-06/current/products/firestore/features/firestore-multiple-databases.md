---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.883Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore multiple databases"
feature_slug: "firestore-multiple-databases"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/pitr"
  - "https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields"
  - "https://docs.cloud.google.com/firestore/native/docs/overview"
keywords:
  - "firestore"
  - "multiple"
  - "databases"
  - "supports"
  - "within"
  - "project"
---

# Firestore multiple databases

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports multiple databases within a project.

## Extended Definition

Firestore supports multiple databases within a project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr)
- [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview)

## Supporting Pages

### "Query with range and inequality filters on multiple fields overview \_|\_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query with range and inequality filters on multiple fields overview Firestore supports using range and inequality filters on multiple fields in a single query.
- You can have range and inequality conditions on multiple fields and simplify your application development by delegating implementation of post-filtering logic to Firestore.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- WhereLessThan ( "density" , 10000 ); Dart final citiesRef = FirebaseFirestore . instance . collection ( 'cities' ) final query = citiesRef . where ( "population" , isGreaterThan: 1000000 ) . where ( "density" , isLessThan: 10000 ); Indexing considerations Before you run your queries, read about queries and the Firestore data model .

### "Point-in-time recovery (PITR) overview \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can read data for a timestamp based on when PITR was enabled: PITR enablement status Earliest PITR data available Disabled 1 hour before the time of read request enabled within 7 days 1 hour before PITR was enabled enabled more than 7 days ago 7 days before the time of read request Note: You can't start reading from 7 days in the past immediately after you enable PITR.
- For example, if a document had multiple writes ranging from v1, v2, ... vk between 2023-05-30 09:00:00AM (exclusive) and 2023-05-30 09:01:00AM (inclusive) timestamp, a read request at timestamp 2023-05-30 09:01:00AM returns the vk version of the document.
- Regardless of whether PITR is enabled or not, you can read (but not export) documents at any microsecond-granularity timestamp within the past hour, but not before the earliestVersionTime .

### Firestore overview \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Key capabilities Flexibility The Firestore in Native Mode data model supports flexible, hierarchical data structures.
- The Firestore in Native Mode data model supports whatever data structure works best for your app.
- Firestore keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity.

