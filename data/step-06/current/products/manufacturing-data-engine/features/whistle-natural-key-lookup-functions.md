---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.447Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Whistle natural-key lookup functions"
feature_slug: "whistle-natural-key-lookup-functions"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts"
keywords:
  - "whistle"
  - "natural"
  - "key"
  - "lookup"
  - "functions"
  - "adds"
  - "custom"
  - "to"
---

# Whistle natural-key lookup functions

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Adds custom Whistle functions to look up metadata instances in parsers by natural key.

## Extended Definition

Adds custom Whistle functions to look up metadata instances in parsers by natural key.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)

## Supporting Pages

### "Create a metadata bucket \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The natural key of a metadata instance in a LOOKUP bucket can be any key, but records can't reference instances in a lookup bucket, and the instances are not written to any data sink.
- Lookup buckets only serve as source of reference data that can be retrieved by the parser using the Whistle function lookupByKey and used to enrich records.
- Determines whether new instances are created by merging the provided instance with the latest instance for a given natural key or if new instances are created as provided.
- The natural key of a metadata instance in a TAG bucket must be a tag name.

### "Create a metadata bucket version \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The natural key of a metadata instance in a LOOKUP bucket can be any key, but records can't reference instances in a lookup bucket, and the instances are not written to any data sink.
- Lookup buckets only serve as source of reference data that can be retrieved by a parser using the Whistle function lookupByKey and used to enrich records.
- Determines whether new instances are created by merging the provided instance with the latest instance for a given natural key or if new instances are created as provided.
- The natural key of a metadata instance in a TAG bucket must be a tag name.

### "Create metadata instances \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you use the lookup by value method, and the latest metadata instance value for the provided natural key does not exist, MDE automatically creates a new metadata instance for the natural key from the instance object defined the in the proto record.
- Create a cloud metadata instance with the following instructions for REST API calls or the console: REST POST metadata/v1/buckets/ BUCKET NAME / BUCKET VERSION /instances { "naturalKey" : " NATURAL KEY " , "instance" : METADATA INSTANCE OBJECT } Replace the following: BUCKET NAME with the name of the bucket in which to create a metadata instance.
- If BUCKET NAME corresponds to a record bucket and the natural key is omitted, the natural key is automatically set to the hash of the value.
- You can use the API to load metadata instances into MDE from external sources and to populate lookup buckets with reference data.

### Key concepts \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are six archetypes grouped in three archetype families: Numeric (standard and clustered) Discrete (standard and clustered) Continuous (standard and clustered) Natural key A key uniquely identifying an entity outside of MDE.
- Parser A configuration entity that transforms messages of a specific source message class into records of a specific type by means of a Whistle script.
- Cloud metadata reference A field in a record that stores metadata instance identifiers per bucket (foreign keys).
- The entity is identified by a tag name which also serves as the natural key in tag cloud tag metadata buckets.

