---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.447Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Type-metadata bucket associations"
feature_slug: "type-metadata-bucket-associations"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type"
keywords:
  - "type"
  - "metadata"
  - "bucket"
  - "associations"
  - "links"
  - "types"
  - "to"
  - "buckets"
---

# Type-metadata bucket associations

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Links types to metadata buckets and can require record contextualization with specific bucket metadata.

## Extended Definition

Links types to metadata buckets and can require record contextualization with specific bucket metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type)

## Supporting Pages

### "Create a metadata bucket \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Execute the following REST API request: POST /metadata/v1/buckets { "name" : " BUCKET NAME " , "type" : " BUCKET TYPE " , "schema" : " BUCKET SCHEMA " , "provider" : "local" , "attributes" : { "instanceOverwriteMode" : " INSTANCE OVERWRITE MODE " } } Replace the following: BUCKET NAME : The name of the bucket to be created.
- Three different bucket types are supported: Tag : Buckets that qualify a given tag.
- The following is a sample JSON Schema of a default metadata bucket provided by the default configuration package: { "$id" : "https://gmde.cloud/tag.schema.json" , "$schema" : "https://json-schema.org/draft/2019-09/schema" , "title" : "Tag metadata bucket" , "type" : "object" , "properties" : { "datatype" : { "type" : "string" }, "description" : { "type" : "string" }, "registerId" : { "type" : "string" }, "edgeTagName" : { "type" : "string" }, "tagName" : { "description" : "Tag name" , "type" : "string" }, "deviceID" : { "type" : "string" }, "deviceName" : { "type" : "string" }, "deviceMetadata" : { "type" : "object" } }, "required" : [ "tagName" ], "additionalProperties" : false } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Instance update mode : It specifies the type of instance updates specified for the metadata bucket: Instance Override : The existing instance is replaced by the latest instance received from the edge, even if it's incomplete.

### "Create a metadata bucket version \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Execute the following REST API request: POST /metadata/v1/buckets/ BUCKET NAME /versions { "schema" : " BUCKET SCHEMA " , "provider" : "local" } Replace the following: BUCKET NAME : Name of the bucket to be created.
- You must upgrade your types and parsers or create new types and parsers to use the new bucket version.
- Console To create a new metadata bucket version click Create New Version from the METADATA section of the Cloud Management MC web interface: A configuration panel is displayed with a form to update the parameters of the new metadata bucket version : Only backward compatible changes are allowed for new versions.
- The natural key of a metadata instance in a LOOKUP bucket can be any key, but records can't reference instances in a lookup bucket, and the instances are not written to any data sink.

### "Create a type version \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Execute the following REST API request: POST /configuration/v1/types/ TYPE NAME /versions { "metadataBuckets" : [ { "bucketName" : " EXISTING BUCKET NAME " , "version" : " EXISTING BUCKET VERSION " }, { "bucketName" : " NEW BUCKET NAME " , "version" : " NEW BUCKET VERSION " } ], "storageSpecs" : [ { "sink" : "BIG QUERY" , "disabled" : "false" , "materializeCloudMetadata" : "true" }, { "sink" : "BIG TABLE" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "GCS" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB PROTO" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB JSON" , "disabled" : "false" , "materializeCloudMetadata" : "false" } ] } Replace the following: TYPE NAME : Name of the type for which a new version is created.
- It isn't possible to remove metadata buckets to create a new version of the type.
- Create a new type version You can create a new type version that associates a new metadata bucket to an existing type that already has an existing metadata bucket association and applies typical storage specifications using the API or the Console.
- Metadata : Renders a color-coded badge for each metadata bucket associated to the type.

### Create a type \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Execute the following REST API request: POST /configuration/v1/types { "archetype" : " ARCHETYPE NAME " , "name" : " TYPE NAME " , "metadataBuckets" : [ { "bucketName" : " BUCKET NAME " , "version" : " BUCKET VERSION " } ], "storageSpecs" : [ { "sink" : "BIG QUERY" , "disabled" : "false" , "materializeCloudMetadata" : "true" }, { "sink" : "BIG TABLE" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "GCS" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB PROTO" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB JSON" , "disabled" : "false" , "materializeCloudMetadata" : "false" } ] } Replace the following: ARCHETYPE : Name of the archetype.
- Before you begin Among other configuration settings, types lets you define the contextualization scope for records of that type - the metadata buckets that can or must be used to contextualize records.
- Complete the definition of the new type by defining the metadata buckets that are associated with the type opening the Metadata buckets section: To add a metadata bucket to the type click ADD .
- Create a type To create a type with one metadata bucket association and typical storage specifications you can use either the terminal or the console interface.

