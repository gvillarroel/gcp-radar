---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.446Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Type versioning"
feature_slug: "type-versioning"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format"
keywords:
  - "type"
  - "versioning"
  - "adds"
  - "for"
  - "types"
---

# Type versioning

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Adds versioning for types.

## Extended Definition

Adds versioning for types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format)

## Supporting Pages

### "Create a type version \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Execute the following REST API request: POST /configuration/v1/types/ TYPE NAME /versions { "metadataBuckets" : [ { "bucketName" : " EXISTING BUCKET NAME " , "version" : " EXISTING BUCKET VERSION " }, { "bucketName" : " NEW BUCKET NAME " , "version" : " NEW BUCKET VERSION " } ], "storageSpecs" : [ { "sink" : "BIG QUERY" , "disabled" : "false" , "materializeCloudMetadata" : "true" }, { "sink" : "BIG TABLE" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "GCS" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB PROTO" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB JSON" , "disabled" : "false" , "materializeCloudMetadata" : "false" } ] } Replace the following: TYPE NAME : Name of the type for which a new version is created.
- The following form will appear: The Create New Type Version opens displaying a form to modify the settings of the selected type : The top section of the form displays the name and archetype of the type.
- Versioning restrictions When creating new versions of a type, consider the following limitations: New versions may: Add new optional fields to the data schema.
- Create a type version This guide describes how to create a new type version for an existing type in Manufacturing Data Engine (MDE).

### Create a type \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Among other configuration settings, types lets you define the contextualization scope for records of that type - the metadata buckets that can or must be used to contextualize records.
- REST Execute the following REST API request: POST /configuration/v1/types { "archetype" : " ARCHETYPE NAME " , "name" : " TYPE NAME " , "metadataBuckets" : [ { "bucketName" : " BUCKET NAME " , "version" : " BUCKET VERSION " } ], "storageSpecs" : [ { "sink" : "BIG QUERY" , "disabled" : "false" , "materializeCloudMetadata" : "true" }, { "sink" : "BIG TABLE" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "GCS" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB PROTO" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB JSON" , "disabled" : "false" , "materializeCloudMetadata" : "false" } ] } Replace the following: ARCHETYPE : Name of the archetype.
- For example, a new type will create a new Table in BigQuery with the new of the type and will automatically populate the schema corresponding to its archetype in it.
- To complete the definition of a new Type select which transformations are associated to this type by opening the Transform & Connect section.

### "Create a metadata bucket version \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Types and parsers always reference a specific bucket version, so when you create a new version, it doesn't affect the existing data processing pipelines.
- You must upgrade your types and parsers or create new types and parsers to use the new bucket version.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Console To create a new metadata bucket version click Create New Version from the METADATA section of the Cloud Management MC web interface: A configuration panel is displayed with a form to update the parameters of the new metadata bucket version : Only backward compatible changes are allowed for new versions.

### Format \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The package contains an optional folder with a predefined name for each type of configuration entity the user needs to configure: ./test-configuration-package ├── manifest.json ├── buckets │ ├── default-record-bucket.json │ ├── default-tag-bucket.json │ └── second-tag-bucket.json ├── ingestion-specifications │ └── csv-full-ingestion-specs.json ├── message-classes │ └── message-class.json ├── metadata-instances │ ├── cloud-natural-key.json │ └── machine-natural-key.json ├── parsers │ └── parser.json ├── schemas │ ├── cdm-schema.json │ └── generic-schema.json ├── scripts │ └── parser-script.wstl └── types └── type.json For example, to add buckets to MDE, you need to create a subfolder called buckets , which contains the specifications of the buckets that need to be created.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- This enables an atomic way to apply the MDE configuration for a specific use-case, and it enables the author of the configuration to look at MDE configuration holistically by editing and checking the configuration in full in an editor like VS Code.
- Format This page describes the content of configuration package on Manufacturing Data Engine (MDE)'s directories.

