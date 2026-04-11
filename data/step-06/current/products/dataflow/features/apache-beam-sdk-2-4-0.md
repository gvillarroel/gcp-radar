---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.856Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Apache Beam SDK 2.4.0"
feature_slug: "apache-beam-sdk-2-4-0"
latest_feature_date: "2019-03-20"
deprecation_date: "2019-03-20"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub"
keywords:
  - "apache"
  - "beam"
  - "sdk"
  - "is"
  - "an"
  - "version"
  - "supported"
  - "by"
---

# Apache Beam SDK 2.4.0

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Apache Beam SDK 2.4.0 is an SDK version supported by Dataflow pipelines; deprecated on 2019-03-20.

## Extended Definition

Apache Beam SDK 2.4.0 is an SDK version supported by Dataflow pipelines; deprecated on 2019-03-20.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)

## Supporting Pages

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page lists the Dataflow support status for the Apache Beam SDK and Dataflow SDK releases: Apache Beam 2.x SDKs Dataflow 2.x SDKs Apache Beam SDK support-level definitions The following are the Dataflow support levels for the Apache Beam SDK: Supported : Apache Beam SDK versions are supported by Dataflow from their release date until their deprecation date.
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- 2.70.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on December 16, 2026.
- 2.71.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on January 22, 2027.

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- WriteDLQ . newBuilder () . withDlqDirectory ( dlqManager . getSevereDlqDirectoryWithDateTime ()) . withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" ) . setIncludePaneInfo ( true ) . build ()); return pipeline . run (); } private static DeadLetterQueueManager buildDlqManager ( SpannerChangeStreamsToBigQueryOptions options ) { String tempLocation = options . as ( DataflowPipelineOptions . class ). getTempLocation (). endsWith ( "/" ) ? options . as ( DataflowPipelineOptions . class ). getTempLocation () : options . as ( DataflowPipelineOptions . class ). getTempLocation () + "/" ; String dlqDirectory = options . getDeadLetterQueueDirectory (). isEmpty () ? tempLocation + "dlq/" + options . getJobName () + "/" : options . getDeadLetterQueueDirectory (); LOG . info ( "Dead letter queue directory: {}" , dlqDirectory ); return DeadLetterQueueManager . create ( dlqDirectory , DLQ MAX RETRIES ); } / Remove the following intermediate metadata fields that are not user data from {@link TableRow}: metadata error, metadata retry count, metadata spanner original payload json. / private static TableRow removeIntermediateMetadataFields ( TableRow tableRow ) { TableRow cleanTableRow = tableRow . clone (); Set<String> rowKeys = tableRow . keySet (); Set<String> metadataFields = BigQueryUtils . getBigQueryIntermediateMetadataFieldNames (); for ( String rowKey : rowKeys ) { if ( metadataFields . contains ( rowKey )) { cleanTableRow . remove ( rowKey ); } else if ( rowKeys . contains ( " type " + rowKey )) { cleanTableRow . remove ( " type " + rowKey ); } } return cleanTableRow ; } / DoFn that converts a {@link DataChangeRecord} to multiple {@link Mod} in serialized JSON format. / static class DataChangeRecordToModJsonFn extends DoFn<DataChangeRecord , String > { @ProcessElement public void process ( @Element DataChangeRecord input , OutputReceiver<String> receiver ) { for ( org . apache . beam . sdk . io . gcp . spanner . changestreams . model .
- Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.v2.cdc.dlq.DeadLetterQueueManager ; import com.google.cloud.teleport.v2.cdc.dlq.StringDeadLetterQueueSanitizer ; import com.google.cloud.teleport.v2.coders.FailsafeElementCoder ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2. options .SpannerChangeStreamsToBigQueryOptions ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery. model .Mod ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery. model .ModColumnType ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery.schemautils.BigQueryUtils ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery.schemautils.OptionsUtils ; import com.google.cloud.teleport.v2.transforms.DLQWriteTransform ; import com.google.cloud.teleport.v2.utils.BigQueryIOUtils ; import com.google.cloud.teleport.v2.values.FailsafeElement ; import com.google.common.base.Strings ; import com.google.common.collect.ImmutableSet ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; import java.util.Set ; import java.util.stream.Collectors ; import org.apache.beam.runners.dataflow. options .DataflowPipelineOptions ; import org.apache.beam.sdk.
- WriteResult ; import org.apache.beam.sdk.io.gcp.spanner.SpannerConfig ; import org.apache.beam.sdk.io.gcp.spanner.SpannerIO ; import org.apache.beam.sdk.io.gcp.spanner.changestreams. model .DataChangeRecord ; import org.apache.beam.sdk. options .PipelineOptionsFactory ; import org.apache.beam.sdk. options .ValueProvider ; import org.apache.beam.sdk.transforms.DoFn ; import org.apache.beam.sdk.transforms.Flatten ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.Reshuffle ; import org.apache.beam.sdk.values.PCollection ; import org.apache.beam.sdk.values.PCollectionList ; import org.apache.beam.sdk.values.PCollectionTuple ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; // TODO(haikuo-google): Add integration test. // TODO(haikuo-google): Add README. // TODO(haikuo-google): Add stackdriver metrics. // TODO(haikuo-google): Ideally side input should be used to store schema information and shared // accross DoFns, but since side input fix is not yet deployed at the moment, we read schema // information in the beginning of the DoFn as a work around.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 SPANNER INSTANCE ID : Spanner instance ID SPANNER DATABASE : Spanner database SPANNER METADATA INSTANCE ID : Spanner metadata instance ID SPANNER METADATA DATABASE : Spanner metadata database SPANNER CHANGE STREAM : Spanner change stream BIGQUERY DATASET : The BigQuery dataset for change streams output Template source code Java / Copyright (C) 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install Python wheel by running the following command: pip install wheel Install the latest version of the Apache Beam SDK for Python by running the following command from a virtual environment: pip install 'apache-beam[gcp]' Depending on the connection, the installation might take some time.
- To install the latest version of the Apache Beam SDK for Go, run the the following command: go get -u github.com/apache/beam/sdks/v2/go/pkg/beam Note: Version numbers have the form major.minor.patch and are incremented as follows: major version for incompatible API changes, minor version for new functionality added in a backward-compatible manner, and patch version for forward-compatible bug fixes.
- This page shows you how to install the Apache Beam SDK so that you can run your pipelines on the Dataflow service.
- Install SDK releases The Apache Beam SDK is an open source programming model for data pipelines.

### "Bigtable change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- PipelineResult ; import org.apache.beam.sdk.coders.CoderRegistry ; import org.apache.beam.sdk.coders.StringUtf8Coder ; import org.apache.beam.sdk.io.gcp. bigtable .BigtableIO ; import org.apache.beam.sdk. options .PipelineOptionsFactory ; import org.apache.beam.sdk.transforms.Create ; import org.apache.beam.sdk.transforms.DoFn ; import org.apache.beam.sdk.transforms.Flatten ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.
- Values ; import org.apache.beam.sdk.values.PCollection ; import org.apache.beam.sdk.values.PCollectionList ; import org.apache.beam.sdk.values.PCollectionTuple ; import org.apache.beam.sdk.values.TupleTag ; import org.apache.commons.lang3.StringUtils ; import org.joda.time.
- PROTOCOL BUFFERS ); validateNoUseOfBase64 ( options ); } break ; case TYPE UNSPECIFIED : case UNRECOGNIZED : // Not overriding messageFormat, will try what customer configured or the default if // not configured break ; default : throw new IllegalArgumentException ( "Topic schema type is not supported: " + schemaType ); } LOG . info ( "Topic has schema configured: {}" , topic . getSchemaSettings (). getSchema ()); LOG . info ( "Pipeline will use message format: {}, message encoding: {}" , options . getMessageFormat (), options . getMessageEncoding ()); PubSubDestination destination = newPubSubDestination ( options , topic ); PubSubUtils pubSub = new PubSubUtils ( source , destination ); ByteString testChangeMessageData = createTestChangeMessage ( pubSub ). getData (); Encoding encoding = toPubSubEncoding ( options . getMessageEncoding ()); try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) { String testMessageEncoded = toBase64String ( testChangeMessageData ); LOG . info ( "Validating a test message (Base64 encoded): {}" , testMessageEncoded ); ValidateMessageRequest request = ValidateMessageRequest . newBuilder () . setParent ( "projects/" + pubSub . getDestination (). getPubSubProject ()) . setEncoding ( encoding ) . setMessage ( testChangeMessageData ) . setName ( messageFormatPath ) . build (); schemaServiceClient . validateMessage ( request ); LOG . info ( "Test message successfully validated." ); } catch ( Exception e ) { throw new IllegalArgumentException ( "Failed to validate test message" , e ); } } return true ; } private static void validateNoUseOfBase64 ( BigtableChangeStreamsToPubSubOptions options ) { if ( options . getUseBase64Values ()) { throw new IllegalArgumentException ( "useBase64Values values can only be used with topics accepting JSON messages" ); } if ( options . getUseBase64Rowkeys ()) { throw new IllegalArgumentException ( "useBase64Rowkeys values can only be used with topics accepting JSON messages" ); } if ( options . getUseBase64ColumnQualifiers ()) { throw new IllegalArgumentException ( "useBase64ColumnQualifiers values can only be used with topics accepting JSON messages" ); } } private static void validateIncompatibleEncoding ( BigtableChangeStreamsToPubSubOptions options ) { if ( options . getMessageEncoding () == MessageEncoding .
- You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

