---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.445Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Metadata natural keys"
feature_slug: "metadata-natural-keys"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts"
keywords:
  - "metadata"
  - "natural"
  - "keys"
  - "adds"
  - "key"
  - "to"
  - "instances"
  - "for"
---

# Metadata natural keys

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Adds a natural key to metadata instances for business-friendly retrieval and centralized shared-instance management.

## Extended Definition

Adds a natural key to metadata instances for business-friendly retrieval and centralized shared-instance management.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)

## Supporting Pages

### "Create metadata instances \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a cloud metadata instance with the following instructions for REST API calls or the console: REST POST metadata/v1/buckets/ BUCKET NAME / BUCKET VERSION /instances { "naturalKey" : " NATURAL KEY " , "instance" : METADATA INSTANCE OBJECT } Replace the following: BUCKET NAME with the name of the bucket in which to create a metadata instance.
- When you use the lookup by value method, and the latest metadata instance value for the provided natural key does not exist, MDE automatically creates a new metadata instance for the natural key from the instance object defined the in the proto record.
- If BUCKET NAME corresponds to a record bucket and the natural key is omitted, the natural key is automatically set to the hash of the value.
- You can use the API to load metadata instances into MDE from external sources and to populate lookup buckets with reference data.

### "Create a metadata bucket \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The natural key of a metadata instance in a LOOKUP bucket can be any key, but records can't reference instances in a lookup bucket, and the instances are not written to any data sink.
- Determines whether new instances are created by merging the provided instance with the latest instance for a given natural key or if new instances are created as provided.
- To create a new Bucket click Add new metadata bucket : Fill out the form displayed from the side panel with the necessary Bucket parameters: Bucket Name : A unique, user defined name for the bucket.
- Before you begin Before you begin creating a bucket, read how to model metadata section in the MDE documentation.

### "Create a metadata bucket version \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The natural key of a metadata instance in a LOOKUP bucket can be any key, but records can't reference instances in a lookup bucket, and the instances are not written to any data sink.
- Determines whether new instances are created by merging the provided instance with the latest instance for a given natural key or if new instances are created as provided.
- Console To create a new metadata bucket version click Create New Version from the METADATA section of the Cloud Management MC web interface: A configuration panel is displayed with a form to update the parameters of the new metadata bucket version : Only backward compatible changes are allowed for new versions.
- Create a metadata bucket version This guide describes how to create a new metadata bucket version for an existing bucket in Manufacturing Data Engine (MDE).

### Key concepts \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud metadata reference A field in a record that stores metadata instance identifiers per bucket (foreign keys).
- Materialized metadata A field in a record that stores materialized metadata instances listed in cloud metadata reference .
- Manufacturing data and metadata are stored in and sent to different data sinks that are optimized for specific use-cases.
- The entity is identified by a tag name which also serves as the natural key in tag cloud tag metadata buckets.

