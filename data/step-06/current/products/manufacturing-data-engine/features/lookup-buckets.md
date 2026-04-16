---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.443Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Lookup buckets"
feature_slug: "lookup-buckets"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle"
keywords:
  - "lookup"
  - "buckets"
  - "lets"
  - "parsers"
  - "retrieve"
  - "reference"
---

# Lookup buckets

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Lets parsers retrieve reference data.

## Extended Definition

Lets parsers retrieve reference data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)

## Supporting Pages

### "Create a metadata bucket version \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lookup buckets only serve as source of reference data that can be retrieved by a parser using the Whistle function lookupByKey and used to enrich records.
- The natural key of a metadata instance in a LOOKUP bucket can be any key, but records can't reference instances in a lookup bucket, and the instances are not written to any data sink.
- Types and parsers always reference a specific bucket version, so when you create a new version, it doesn't affect the existing data processing pipelines.
- REST Execute the following REST API request: POST /metadata/v1/buckets/ BUCKET NAME /versions { "schema" : " BUCKET SCHEMA " , "provider" : "local" } Replace the following: BUCKET NAME : Name of the bucket to be created.

### "Create a metadata bucket \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lookup buckets only serve as source of reference data that can be retrieved by the parser using the Whistle function lookupByKey and used to enrich records.
- The natural key of a metadata instance in a LOOKUP bucket can be any key, but records can't reference instances in a lookup bucket, and the instances are not written to any data sink.
- Reference : Buckets that define a set of key value pairs between a user-defined Key and an instance.
- REST Execute the following REST API request: POST /metadata/v1/buckets { "name" : " BUCKET NAME " , "type" : " BUCKET TYPE " , "schema" : " BUCKET SCHEMA " , "provider" : "local" , "attributes" : { "instanceOverwriteMode" : " INSTANCE OVERWRITE MODE " } } Replace the following: BUCKET NAME : The name of the bucket to be created.

### "Create metadata instances \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metadata instances creation dynamically from parsers Metadata instances can be created dynamically from parsers when you use the lookup by value method of resolving metadata instance references.
- You can use the API to load metadata instances into MDE from external sources and to populate lookup buckets with reference data.
- Dynamically from parsers (record and tag buckets only).
- Create a cloud metadata instance with the following instructions for REST API calls or the console: REST POST metadata/v1/buckets/ BUCKET NAME / BUCKET VERSION /instances { "naturalKey" : " NATURAL KEY " , "instance" : METADATA INSTANCE OBJECT } Replace the following: BUCKET NAME with the name of the bucket in which to create a metadata instance.

### Package lifecycle \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response body (JSON) : { "configurationPackages" : [ { "id" : "0505ed17-ad20-458d-9128-d44783704acb" , "name" : "default-configuration-package" , "provider" : "google" , "latestStatus" : "ACTIVATED" , "status" : [ { "code" : "NOT LOADED" , "updatedTime" : "1742501535249" , "messages" : [] }, { "code" : "VALIDATED" , "updatedTime" : "1742501535249" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully validated all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all parsers in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all types in the package" } ] }, { "code" : "LOADED" , "updatedTime" : "1742501536740" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully applied all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all types in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all parsers in the package" } ] }, { "code" : "ACTIVATED" , "updatedTime" : "1742501537289" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully activated all ingestion-specification, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all parsers, if there is any, in the package" } ] } ] }, { "id" : "4adaecc2-54b9-482b-90d6-380f5d4b2be6" , "name" : "basic-configuration" , "provider" : "google" , "latestStatus" : "ACTIVATED" , "status" : [ { "code" : "NOT LOADED" , "updatedTime" : "1742566718210" , "messages" : [] }, { "code" : "VALIDATED" , "updatedTime" : "1742566718210" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully validated all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all parsers in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all types in the package" } ] }, { "code" : "LOADED" , "updatedTime" : "1742566718696" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully applied all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all types in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all parsers in the package" } ] }, { "code" : "ACTIVATED" , "updatedTime" : "1742566718792" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully activated all ingestion-specification, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all parsers, if there is any, in the package" } ] } ] } ], "nextPageToken" : "" } Console You can see the list of existing configuration packages on the Cloud Configuration section, in the Configurations page.
- REST Execute the REST API request with the following information: Method : DELETE Endpoint : /configuration/v1/configuration-packages/$PACKAGE-ID Response code : 200 OK Response body (JSON) : { "id" : "87e160db-8ff9-403a-a873-e6674f6ac3cb" , "name" : "postman-test-configuration-package" , "provider" : "google" , "latestStatus" : "DELETED" , "status" : [ { "code" : "NOT LOADED" , "updatedTime" : "1742550114832" , "messages" : [] }, { "code" : "VALIDATED" , "updatedTime" : "1742550114832" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully validated all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all ingestion-specifications in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all parsers in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all types in the package" } ] }, { "code" : "LOADED" , "updatedTime" : "1742550115241" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully applied all ingestion-specification in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all types in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all parsers in the package" } ] }, { "code" : "ACTIVATED" , "updatedTime" : "1742550115327" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully activated all ingestion-specification, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all parsers, if there is any, in the package" } ] }, { "code" : "DELETED" , "updatedTime" : "1742567553260" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully deleted all parsers, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all ingestion-specification, if there is any, in the package" } ] } ] } Console Click Cloud Configuration .
- Response body (JSON) : { "id" : "4adaecc2-54b9-482b-90d6-380f5d4b2be6" , "name" : "basic-configuration" , "provider" : "google" , "latestStatus" : "ACTIVATED" , "status" : [ { "code" : "NOT LOADED" , "updatedTime" : "1742566718210" , "messages" : [] }, { "code" : "VALIDATED" , "updatedTime" : "1742566718210" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully validated all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all parsers in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all types in the package" } ] }, { "code" : "LOADED" , "updatedTime" : "1742566718696" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully applied all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all types in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all parsers in the package" } ] }, { "code" : "ACTIVATED" , "updatedTime" : "1742566718792" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully activated all ingestion-specification, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all parsers, if there is any, in the package" } ] } ] } Console Click Cloud Configuration .
- Delete an existing configuration package Starting in v1.5.0, MDE supports an environment flag that can change the environment to development mode , which lets you delete configuration entities and delete configuration packages.

