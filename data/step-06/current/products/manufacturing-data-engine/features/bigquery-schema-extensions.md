---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.442Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "BigQuery schema extensions"
feature_slug: "bigquery-schema-extensions"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version"
keywords:
  - "schema"
  - "extensions"
  - "extends"
  - "the"
  - "with"
  - "new"
  - "fields"
  - "to"
---

# BigQuery schema extensions

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Extends the BigQuery schema with new fields to better support analytics use cases.

## Extended Definition

Extends the BigQuery schema with new fields to better support analytics use cases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)

## Supporting Pages

### "Use the LookML Library \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how you can extend the base view to define a dimension called device : include : "//mde lookml lib/mde abstract core/views/dimension/ .view" view : dim source { derived table : { sql : SELECT FROM mde dimension.metadata-store where bucket number = BUCKET NUMBER ;; } view label : "DIM - Device" extends : [ dim base ] dimension : device name { type : string sql : JSON VALUE(${TABLE}.instance,"$.device name") ;; } } And, similarly, the library provides base views per MDE archetype for modeling record tables in BigQuery as fact tables.
- If you used the MDE Project Template to bootstrap a new MDE project, the provided Looker model automatically imports the views and explores from the default package: connection : "@{looker connection}" DEFAULT MDE EXPLORES ########## include : "//mde lookml lib/mde packages/default/explores/default.explore.lkml" CUSTOM VIEWS ################ include : "/views/dimension/ .view" include : "/views/fact/ .view" Once your project is set up, you can use the default default explores in Looker to analyze data.
- The following example shows how you can define a fact view called sensor readings : include : "//mde lookml lib/mde abstract core/views/fact/fct numeric archetype.view" view : fct sensor readings { extends : [ fct numeric archetype ] label : "FCT - Sensor Readings" sql table name : mde data.sensor-readings ;; } Packages The mde packages directory contains prebuilt LookML packages for MDE.
- Use the LookML Library The LookML Library for MDE provides abstract core files, and packaged views, explores and dashboards to help you get started with building your own LookML models on top of the MDE data in BigQuery.

### "Query in Cloud Storage \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the following examples: NumericDataSeries archetype schema: { "type" : "record" , "namespace" : "com.google.cloud.industry.manufacturing.sfp.datalake.storage.gcs" , "name" : "NumericDataSeriesGCSObject" , "fields" : [ { "name" : "id" , "type" : "string" , "doc" : "Unique record id" }, { "name" : "tag name" , "type" : "string" , "doc" : "Name of the tag" }, { "name" : "type name" , "type" : "string" }, { "name" : "type version" , "type" : "int" }, { "name" : "embedded metadata" , "type" : [ "null" , "string" ], "default" : null }, { "name" : "materialized cloud metadata" , "type" : [ "null" , "string" ], "default" : null }, { "name" : "cloud metadata ref" , "type" : [ "null" , "string" ], "default" : null }, { "name" : "source message id" , "type" : "string" }, { "name" : "event timestamp" , "type" : { "type" : "long" , "logicalType" : "timestamp-millis" } }, { "name" : "value" , "type" : "double" } ] } DiscreteDataSeries archetype schema: { "type" : "record" , "name" : "DiscreteDataSeriesGCSObject" , "namespace" : "com.google.cloud.industry.manufacturing.sfp.datalake.storage.gcs" , "fields" : [ { "name" : "id" , "type" : { "type" : "string" , "avro.java.string" : "String" }, "doc" : "Unique record id" }, { "name" : "tag name" , "type" : { "type" : "string" , "avro.java.string" : "String" }, "doc" : "Name of the tag" }, { "name" : "type name" , "type" : { "type" : "string" , "avro.java.string" : "String" } }, { "name" : "type version" , "type" : "int" }, { "name" : "embedded metadata" , "type" : [ "null" , { "type" : "string" , "avro.java.string" : "String" } ], "default" : null }, { "name" : "materialized cloud metadata" , "type" : [ "null" , { "type" : "string" , "avro.java.string" : "String" } ], "default" : null }, { "name" : "cloud metadata ref" , "type" : [ "null" , { "type" : "string" , "avro.java.string" : "String" } ], "default" : null }, { "name" : "source message id" , "type" : { "type" : "string" , "avro.java.string" : "String" } }, { "name" : "event timestamp" , "type" : { "type" : "long" , "logicalType" : "timestamp-millis" } }, { "name" : "data" , "type" : { "type" : "string" , "avro.java.string" : "String" } } ] } ContinuousDataSeries archetype schema: { "type" : "record" , "namespace" : "com.google.cloud.industry.manufacturing.sfp.datalake.storage.gcs" , "name" : "ContinuousDataSeriesGCSObject" , "fields" : [ { "name" : "id" , "type" : "string" , "doc" : "Unique record id" }, { "name" : "tag name" , "type" : "string" , "doc" : "Name of the tag" }, { "name" : "type name" , "type" : "string" }, { "name" : "type version" , "type" : "int" }, { "name" : "embedded metadata" , "type" : [ "null" , "string" ], "default" : null }, { "name" : "materialized cloud metadata" , "type" : [ "null" , "string" ], "default" : null }, { "name" : "cloud metadata ref" , "type" : [ "null" , "string" ], "default" : null }, { "name" : "source message id" , "type" : "string" }, { "name" : "event timestamp start" , "type" : { "type" : "long" , "logicalType" : "timestamp-millis" } }, { "name" : "event timestamp end" , "type" : { "type" : "long" , "logicalType" : "timestamp-millis" } }, { "name" : "data" , "type" : "string" }, { "name" : "duration" , "type" : "long" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- As with Raw data, messages are grouped in 10 minute windows and 10 files are written in each of the windows, this data is used to produce the filenames, ie: gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00000-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00001-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00002-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00003-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00004-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00005-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00006-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00007-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00008-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00009-of-00010.avro There's a different schema which only vary slightly for each Archetype, and so each type uses that corresponding schema.
- Raw data is stored in AVRO format using the following schema: { "type" : "record" , "name" : "AvroPubsubMessageRecord" , "namespace" : "com.google.cloud.industry.manufacturing.sfp.datalake.core" , "fields" : [ { "name" : "attributes" , "type" : { "type" : "map" , "values" : "string" } }, { "name" : "message" , "type" : { "type" : "bytes" , "java-class" : "[B" } }, { "name" : "messageId" , "type" : "string" }, { "name" : "timestamp" , "type" : "long" } ] The schema is composed by the following values: attributes : Stores the Pub/Sub message attribute map. message : Stores the raw message as received in the Pub/Sub topic input-messages . messageId : ID set by Pub/Sub when receiving the message, it's written into all the sinks in order to have lineage of where the data came from. timestamp : When the message was received by Pub/Sub.
- Then it's stored under a folder for the version, in this case v1.3 , then each type is stored in its own folder (default-discrete-records, default-numeric-records, etc) and finally date partitioning is used to separate files by day with the format dt=YYYY-MM-DD .

### "Create a type version \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Versioning restrictions When creating new versions of a type, consider the following limitations: New versions may: Add new optional fields to the data schema.
- New versions may not: Remove fields from the data schema.
- REST Execute the following REST API request: POST /configuration/v1/types/ TYPE NAME /versions { "metadataBuckets" : [ { "bucketName" : " EXISTING BUCKET NAME " , "version" : " EXISTING BUCKET VERSION " }, { "bucketName" : " NEW BUCKET NAME " , "version" : " NEW BUCKET VERSION " } ], "storageSpecs" : [ { "sink" : "BIG QUERY" , "disabled" : "false" , "materializeCloudMetadata" : "true" }, { "sink" : "BIG TABLE" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "GCS" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB PROTO" , "disabled" : "false" , "materializeCloudMetadata" : "false" }, { "sink" : "PUBSUB JSON" , "disabled" : "false" , "materializeCloudMetadata" : "false" } ] } Replace the following: TYPE NAME : Name of the type for which a new version is created.
- Create a new type version You can create a new type version that associates a new metadata bucket to an existing type that already has an existing metadata bucket association and applies typical storage specifications using the API or the Console.

### "Create a metadata bucket version \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console To create a new metadata bucket version click Create New Version from the METADATA section of the Cloud Management MC web interface: A configuration panel is displayed with a form to update the parameters of the new metadata bucket version : Only backward compatible changes are allowed for new versions.
- Metadata schema : Add new attributes to the existing schema of the bucket.
- REST Execute the following REST API request: POST /metadata/v1/buckets/ BUCKET NAME /versions { "schema" : " BUCKET SCHEMA " , "provider" : "local" } Replace the following: BUCKET NAME : Name of the bucket to be created.
- Determines whether new instances are created by merging the provided instance with the latest instance for a given natural key or if new instances are created as provided.

