---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.445Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Pub/Sub sink"
feature_slug: "pub-sub-sink"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/overview"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/content"
keywords:
  - "pub"
  - "sub"
  - "sink"
  - "adds"
  - "for"
  - "extensibility"
  - "and"
  - "custom"
---

# Pub/Sub sink

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Adds a Pub/Sub sink for extensibility and custom integration.

## Extended Definition

Adds a Pub/Sub sink for extensibility and custom integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/content](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/content)

## Supporting Pages

### Overview \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Full flexibility : Can work with any edge stack, just requires data to land in Pub/Sub directly or using Message Queuing Telemetry Transport (MQTT) bridge, with custom definition parsers to map incoming data schemas to the MDE standard.
- Adaptability : As MDE deploys fully in your own Google Cloud tenant project, all MDE components (such as Pub/Sub, Dataflow, and BigQuery) are transparent and can be used as if you had built the platform yourself.
- Cloud Data Integration : MC transforms data into MQTT and Pub/Sub messages, seamlessly integrating with Google Cloud.
- Acquiring industrial data has traditionally been a high-complexity and high-cost process that adds unnecessary time and cost to any cloud-based industrial information management use case.

### "Query in Cloud Storage \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Raw data is stored in AVRO format using the following schema: { "type" : "record" , "name" : "AvroPubsubMessageRecord" , "namespace" : "com.google.cloud.industry.manufacturing.sfp.datalake.core" , "fields" : [ { "name" : "attributes" , "type" : { "type" : "map" , "values" : "string" } }, { "name" : "message" , "type" : { "type" : "bytes" , "java-class" : "[B" } }, { "name" : "messageId" , "type" : "string" }, { "name" : "timestamp" , "type" : "long" } ] The schema is composed by the following values: attributes : Stores the Pub/Sub message attribute map. message : Stores the raw message as received in the Pub/Sub topic input-messages . messageId : ID set by Pub/Sub when receiving the message, it's written into all the sinks in order to have lineage of where the data came from. timestamp : When the message was received by Pub/Sub.
- As with Raw data, messages are grouped in 10 minute windows and 10 files are written in each of the windows, this data is used to produce the filenames, ie: gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00000-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00001-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00002-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00003-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00004-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00005-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00006-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00007-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00008-of-00010.avro gs://<project-id>-gcs-ingestion/v1.3/default-discrete-records/dt = 2023 -08-08/gcsoutput2023-08-08T09:40:00.000Z-2023-08-08T09:50:00.000Z-00009-of-00010.avro There's a different schema which only vary slightly for each Archetype, and so each type uses that corresponding schema.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Then it's stored under a folder for the version, in this case v1.3 , then each type is stored in its own folder (default-discrete-records, default-numeric-records, etc) and finally date partitioning is used to separate files by day with the format dt=YYYY-MM-DD .

### "Manufacturing Connect \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secure connection Communication between MCe and Google Cloud are performed over PKI encrypted channels for Pub/Sub.
- Additionally to the encryption, the network traffic between MC and Pub/Sub can be routed through private connectivity options between onPrem and Cloud (Interconnect or VPN) to private endpoints of Google APIs.
- In such a scenario, the traffic between corporate networks and Google Cloud is not crossing the public internet by being processed only within the customer's private network perimeters.
- Relationship with MDE For customers using both MC and MDE : The MC web interface includes the interface to MDE, enabling a seamless edge-to-cloud user experience.

### File content \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/content](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/content)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bucket This section shares a sample configuration for a MDE bucket. { "type" : "TAG" , "name" : "second-tag-bucket" , "attributes" : { "instanceOverwriteMode" : "true" }, "versions" : [ { "version" : 1 , "schema" : "'{{schemas/generic-schema.json}}'" , "provider" : "local" } ] } Ingestion specification This section shares a sample configuration for a MDE ingestion specification. { "name" : "csv-full-ingestion-specification" , "source" : "CSV" , "folderName" : "test-csv-folder" , "separator" : "," , "skipRows" : 10 , "headers" : { "headerNames" : { "names" : [ "one" , "two" , "three" ] } }, "insertMetadata" : true , "disabled" : false } Message classes This section shares a sample configuration for MDE message classes. { "name" : "default-numeric-message-class" , "priority" : 970 , "expression" : "#root.event['value'] instanceof T(Number) && #root.event['timestamp'] != null && #root.event['tagName'] != null && #root.event['cluster'] == null" } Metadata instances This section shares a sample configuration for MDE metadata instances. { "bucketReference" : { "bucketName" : "default-tag-bucket" , "bucketType" : "TAG" , "version" : 1 }, "naturalKey" : "cloud-natural-key" , "instance" : { "site" : "simulated-site" , "factory" : "test-factory" } } Parsers This section shares a sample configuration for MDE parsers. { "name" : "default-numeric-parser" , "messageClassName" : "default-numeric-message-class" , "typeReference" : { "name" : "default-numeric-type" , "version" : 1 }, "disabled" : false , "script" : "'{{scripts/parser-script.wstl}}'" } Type This section shares a sample configuration for a MDE type. { "archetype" : "NUMERIC DATA SERIES" , "name" : "default-numeric-type" , "disabled" : false , "versions" : [ { "version" : 1 , "dataSchema" : "" , "storageSpecs" : [ { "sink" : "PUBSUB PROTO" , "disabled" : true , "materializeCloudMetadata" : false }, { "sink" : "BIG QUERY" , "disabled" : false , "materializeCloudMetadata" : true }, { "sink" : "GCS" , "disabled" : false , "materializeCloudMetadata" : false }, { "sink" : "PUBSUB JSON" , "disabled" : true , "materializeCloudMetadata" : false }, { "sink" : "BIG TABLE" , "disabled" : false , "materializeCloudMetadata" : false } ], "metadataBuckets" : [ { "bucketName" : "default-record-bucket" , "version" : 1 , "required" : false }, { "bucketName" : "second-tag-bucket" , "version" : 1 , "required" : false }, { "bucketName" : "default-tag-bucket" , "version" : 1 , "required" : false } ], "transformations" : [ { "window" : { "id" : "10-minutes-window" , "durationMinutes" : 10 , "valueExpression" : "#message['data']['numeric'].toString()" } }, { "eventChange" : { "keyExpression" : "#message['tagName']" , "valueExpression" : "#message['data']['numeric'].toString()" } } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The referenced file could be in any directory, and you can create different directories for organization purposes.
- This enhances the overall readability and maintainability of the configuration package. { "type" : "TAG" , "name" : "second-tag-bucket" , "attributes" : { "instanceOverwriteMode" : "true" }, "versions" : [ { "version" : 1 , "schema" : "'{{schemas/generic-schema.json}}'" , "provider" : "local" , } ] } To reference another file, you can use the {{relative-path/file.json}} directive which contains the relative path of the file that needs to be included in the existing file.

