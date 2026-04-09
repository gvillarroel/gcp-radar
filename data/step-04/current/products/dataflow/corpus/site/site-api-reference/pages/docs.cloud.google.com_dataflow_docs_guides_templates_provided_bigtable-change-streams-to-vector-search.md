---
title: "Bigtable change streams to Vector Search template \_|\_ Cloud Dataflow \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search
  title: "Bigtable change streams to Vector Search template \_|\_ Cloud Dataflow \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Reference
Send feedback
Bigtable change streams to Vector Search template
Stay organized with collections
Save and categorize content based on your preferences.
This template creates a streaming pipeline to stream Bigtable data change records and write them to Vertex AI Vector Search using Dataflow Runner V2.
Pipeline requirements
The Bigtable source instance must exist.
The Bigtable source table must exist, and the
table must have change streams enabled.
The Bigtable application profile must exist.
The Vector Search index path must exist.
Template parameters
Required parameters
embeddingColumn : The fully qualified column name where the embeddings are stored. In the format cf:col.
embeddingByteSize : The byte size of each entry in the embeddings array. Use 4 for Float, and 8 for Double. Defaults to: 4.
vectorSearchIndex : The Vector Search Index where changes will be streamed, in the format 'projects/{projectID}/locations/{region}/indexes/{indexID}' (no leading or trailing spaces) For example, projects/123/locations/us-east1/indexes/456 .
bigtableChangeStreamAppProfile : The Bigtable application profile ID. The application profile must use single-cluster routing and allow single-row transactions.
bigtableReadInstanceId : The source Bigtable instance ID.
bigtableReadTableId : The source Bigtable table ID.
Optional parameters
bigtableMetadataTableTableId : Table ID used for creating the metadata table.
crowdingTagColumn : The fully qualified column name where the crowding tag is stored. In the format cf:col.
allowRestrictsMappings : The comma separated fully qualified column names of the columns that should be used as the allow restricts, with their alias. In the format cf:col->alias.
denyRestrictsMappings : The comma separated fully qualified column names of the columns that should be used as the deny restricts, with their alias. In the format cf:col->alias.
intNumericRestrictsMappings : The comma separated fully qualified column names of the columns that should be used as integer numeric_restricts , with their alias. In the format cf:col->alias.
floatNumericRestrictsMappings : The comma separated fully qualified column names of the columns that should be used as float (4 bytes) numeric_restricts , with their alias. In the format cf:col->alias.
doubleNumericRestrictsMappings : The comma separated fully qualified column names of the columns that should be used as double (8 bytes) numeric_restricts , with their alias. In the format cf:col->alias.
upsertMaxBatchSize : The maximum number of upserts to buffer before upserting the batch to the Vector Search Index. Batches will be sent when there are either upsertBatchSize records ready, or any record has been waiting upsertBatchDelay time has passed. For example, 10 . Defaults to: 10.
upsertMaxBufferDuration : The maximum delay before a batch of upserts is sent to Vector Search.Batches will be sent when there are either upsertBatchSize records ready, or any record has been waiting upsertBatchDelay time has passed. Allowed formats are: Ns (for seconds, example: 5s), Nm (for minutes, example: 12m), Nh (for hours, example: 2h). For example, 10s . Defaults to: 10s.
deleteMaxBatchSize : The maximum number of deletes to buffer before deleting the batch from the Vector Search Index. Batches will be sent when there are either deleteBatchSize records ready, or any record has been waiting deleteBatchDelay time has passed. For example, 10 . Defaults to: 10.
deleteMaxBufferDuration : The maximum delay before a batch of deletes is sent to Vector Search.Batches will be sent when there are either deleteBatchSize records ready, or any record has been waiting deleteBatchDelay time has passed. Allowed formats are: Ns (for seconds, example: 5s), Nm (for minutes, example: 12m), Nh (for hours, example: 2h). For example, 10s . Defaults to: 10s.
dlqDirectory : The path to store any unprocessed records with the reason they failed to be processed. Default is a directory under the Dataflow job's temp location. The default value is enough under most conditions.
bigtableChangeStreamMetadataInstanceId : The Bigtable change streams metadata instance ID. Defaults to empty.
bigtableChangeStreamMetadataTableTableId : The ID of the Bigtable change streams connector metadata table. If not provided, a Bigtable change streams connector metadata table is automatically created during pipeline execution. Defaults to empty.
bigtableChangeStreamCharset : The Bigtable change streams charset name. Defaults to: UTF-8.
bigtableChangeStreamStartTimestamp : The starting timestamp ( https://tools.ietf.org/html/rfc3339 ), inclusive, to use for reading change streams. For example, 2022-05-05T07:59:59Z . Defaults to the timestamp of the pipeline start time.
bigtableChangeStreamIgnoreColumnFamilies : A comma-separated list of column family name changes to ignore. Defaults to empty.
bigtableChangeStreamIgnoreColumns : A comma-separated list of column name changes to ignore. Example: "cf1:col1,cf2:col2". Defaults to empty.
bigtableChangeStreamName : A unique name for the client pipeline. Lets you resume processing from the point at which a previously running pipeline stopped. Defaults to an automatically generated name. See the Dataflow job logs for the value used.
bigtableChangeStreamResume : When set to true , a new pipeline resumes processing from the point at which a previously running pipeline with the same bigtableChangeStreamName value stopped. If the pipeline with the given bigtableChangeStreamName value has never run, a new pipeline doesn't start. When set to false , a new pipeline starts. If a pipeline with the same bigtableChangeStreamName value has already run for the given source, a new pipeline doesn't start. Defaults to false .
bigtableReadChangeStreamTimeoutMs : The timeout for Bigtable ReadChangeStream requests in milliseconds.
bigtableReadProjectId : The Bigtable project ID. The default is the project for the Dataflow job.
Run the template
Console
Go to the Dataflow Create job from template page.
Go to Create job from template
In the Job name field, enter a unique job name.
Optional: For Regional endpoint , select a value from the drop-down menu. The default
region is us-central1 .
For a list of regions where you can run a Dataflow job, see
Dataflow locations .
From the Dataflow template drop-down menu, select
the Bigtable Change Streams to Vector Search template.
In the provided parameter fields, enter your parameter values.
Click Run job .
gcloud CLI
Note: To use the Google Cloud CLI to run flex
templates, you must have Google Cloud CLI version
284.0.0
or later.
In your shell or terminal, run the template:
gcloud dataflow flex-template run JOB_NAME \
--template-file-gcs-location = gs://dataflow-templates- REGION_NAME / VERSION /flex/Bigtable_Change_Streams_to_Vector_Search \
--project = PROJECT_ID \
--region = REGION_NAME \
--parameters \
embeddingColumn = EMBEDDING_COLUMN , \
embeddingByteSize = EMBEDDING_BYTE_SIZE , \
vectorSearchIndex = VECTOR_SEARCH_INDEX , \
bigtableChangeStreamAppProfile = BIGTABLE_CHANGE_STREAM_APP_PROFILE , \
bigtableReadInstanceId = BIGTABLE_READ_INSTANCE_ID , \
bigtableReadTableId = BIGTABLE_READ_TABLE_ID , \
Replace the following:
JOB_NAME :
a unique job name of your choice
VERSION :
the version of the template that you want to use
You can use the following values:
latest to use the latest version of the template, which is available in the
non-dated parent folder in the bucket—
gs://dataflow-templates- REGION_NAME /latest/
the version name, like 2023-09-12-00_RC00 , to use a specific version of the
template, which can be found nested in the respective dated parent folder in the bucket—
gs://dataflow-templates- REGION_NAME /
Caution: The latest version of templates might update with breaking
changes. Your production environments should use templates kept in the most recent
dated parent folder to prevent these breaking changes from affecting your
production workflows.
REGION_NAME :
the region where you want to
deploy your Dataflow job—for example, us-central1
EMBEDDING_COLUMN : the Embedding column
EMBEDDING_BYTE_SIZE : the The byte size of the embeddings array. Can be 4 or 8.
VECTOR_SEARCH_INDEX : the Vector Search index Path
BIGTABLE_CHANGE_STREAM_APP_PROFILE : the Bigtable application profile ID
BIGTABLE_READ_INSTANCE_ID : the source Bigtable Instance ID
BIGTABLE_READ_TABLE_ID : the source Bigtable table ID
API
To run the template using the REST API, send an HTTP POST request. For more information on the
API and its authorization scopes, see
projects.templates.launch .
POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT_ID /locations/ LOCATION /flexTemplates:launch
{
"launchParameter" : {
"jobName" : " JOB_NAME " ,
"parameters" : {
"embeddingColumn" : " EMBEDDING_COLUMN " ,
"embeddingByteSize" : " EMBEDDING_BYTE_SIZE " ,
"vectorSearchIndex" : " VECTOR_SEARCH_INDEX " ,
"bigtableChangeStreamAppProfile" : " BIGTABLE_CHANGE_STREAM_APP_PROFILE " ,
"bigtableReadInstanceId" : " BIGTABLE_READ_INSTANCE_ID " ,
"bigtableReadTableId" : " BIGTABLE_READ_TABLE_ID " ,
},
"containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/Bigtable_Change_Streams_to_Vector_Search" ,
"environment" : { "maxWorkers" : "10" }
}
}
Replace the following:
PROJECT_ID :
the Google Cloud project ID where you want to run the Dataflow job
JOB_NAME :
a unique job name of your choice
VERSION :
the version of the template that you want to use
You can use the following values:
latest to use the latest version of the template, which is available in the
non-dated parent folder in the bucket—
gs://dataflow-templates- REGION_NAME /latest/
the version name, like 2023-09-12-00_RC00 , to use a specific version of the
template, which can be found nested in the respective dated parent folder in the bucket—
gs://dataflow-templates- REGION_NAME /
Caution: The latest version of templates might update with breaking
changes. Your production environments should use templates kept in the most recent
dated parent folder to prevent these breaking changes from affecting your
production workflows.
LOCATION :
the region where you want to
deploy your Dataflow job—for example, us-central1
EMBEDDING_COLUMN : the Embedding column
EMBEDDING_BYTE_SIZE : the The byte size of the embeddings array. Can be 4 or 8.
VECTOR_SEARCH_INDEX : the Vector Search index Path
BIGTABLE_CHANGE_STREAM_APP_PROFILE : the Bigtable application profile ID
BIGTABLE_READ_INSTANCE_ID : the source Bigtable Instance ID
BIGTABLE_READ_TABLE_ID : the source Bigtable table ID
Template source code
Java
/*
* Copyright (C) 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/
package com.google.cloud.teleport.v2.templates.bigtablechangestreamstovectorsearch ;
import com.google.cloud. Timestamp ;
import com.google.cloud.aiplatform.v1. IndexDatapoint ;
import com.google.cloud.teleport.metadata. Template ;
import com.google.cloud.teleport.metadata.TemplateCategory ;
import com.google.cloud.teleport.v2. bigtable . options .BigtableCommonOptions.ReadChangeStreamOptions ;
import com.google.cloud.teleport.v2. bigtable . options .BigtableCommonOptions.ReadOptions ;
import com.google.cloud.teleport.v2.cdc.dlq.DeadLetterQueueManager ;
import com.google.cloud.teleport.v2. options .BigtableChangeStreamsToVectorSearchOptions ;
import com.google.cloud.teleport.v2.transforms.DLQWriteTransform ;
import com.google.cloud.teleport.v2.utils.DurationUtils ;
import java.io.IOException ;
import java.util.ArrayList ;
import java.util.List ;
import org.apache.beam.runners.dataflow. options .DataflowPipelineOptions ;
import org.apache.beam.sdk. Pipeline ;
import org.apache.beam.sdk. PipelineResult ;
import org.apache.beam.sdk.io.gcp. bigtable .BigtableIO ;
import org.apache.beam.sdk. options .PipelineOptionsFactory ;
import org.apache.beam.sdk.transforms.GroupIntoBatches ;
import org.apache.beam.sdk.transforms.ParDo ;
import org.apache.beam.sdk.transforms.Values ;
import org.apache.beam.sdk.transforms.WithKeys ;
import org.apache.beam.sdk.values.PCollectionTuple ;
import org.apache.beam.sdk.values.TupleTagList ;
import org.apache.commons.lang3.StringUtils ;
import org.joda.time. Duration ;
import org.joda.time.Instant ;
import org.slf4j.Logger ;
import org.slf4j.LoggerFactory ;
@Template (
name = "Bigtable_Change_Streams_to_Vector_Search" ,
category = TemplateCategory . STREAMING ,
displayName = "Bigtable Change Streams to Vector Search" ,
description =
"Streaming pipeline. Streams Bigtable data change records and writes them into Vertex AI Vector Search using Dataflow Runner V2." ,
optionsClass = BigtableChangeStreamsToVectorSearchOptions . class ,
optionsOrder = {
BigtableChangeStreamsToVectorSearchOptions . class ,
ReadChangeStreamOptions . class ,
ReadOptions . class
},
skipOptions = {
"bigtableReadAppProfile" ,
"bigtableAdditionalRetryCodes" ,
"bigtableRpcAttemptTimeoutMs" ,
"bigtableRpcTimeoutMs"
},
documentation =
"https://cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search" ,
flexContainerName = "googlecloud-to-googlecloud" ,
contactInformation = "https://cloud.google.com/support" ,
streaming = true )
public final class BigtableChangeStreamsToVectorSearch {
private static final Logger LOG =
LoggerFactory . getLogger ( BigtableChangeStreamsToVectorSearch . class );
private static final String USE_RUNNER_V2_EXPERIMENT = "use_runner_v2" ;
/**
* Main entry point for executing the pipeline.
*
* @param args The command-line arguments to the pipeline.
*/
public static void main ( String [] args ) throws Exception {
LOG . info ( "Starting replication from Cloud Bigtable Change Streams to Vector Search" );
BigtableChangeStreamsToVectorSearchOptions options =
PipelineOptionsFactory . fromArgs ( args )
. withValidation ()
. as ( BigtableChangeStreamsToVectorSearchOptions . class );
run ( options );
}
public static PipelineResult run ( BigtableChangeStreamsToVectorSearchOptions options )
throws IOException {
options . setStreaming ( true );
options . setEnableStreamingEngine ( true );
List<String> experiments = options . getExperiments ();
if ( experiments == null ) {
experiments = new ArrayList <> ();
}
boolean hasUseRunnerV2 = false ;
for ( String experiment : experiments ) {
if ( experiment . equalsIgnoreCase ( USE_RUNNER_V2_EXPERIMENT )) {
hasUseRunnerV2 = true ;
break ;
}
}
if ( ! hasUseRunnerV2 ) {
experiments . add ( USE_RUNNER_V2_EXPERIMENT );
}
options . setExperiments ( experiments );
Instant startTimestamp =
options . getBigtableChangeStreamStartTimestamp (). isEmpty ()
? Instant . now ()
: toInstant ( Timestamp . parseTimestamp ( options . getBigtableChangeStreamStartTimestamp ()));
String bigtableProjectId = getBigtableProjectId ( options );
LOG . info ( " - startTimestamp {}" , startTimestamp );
LOG . info ( " - bigtableReadInstanceId {}" , options . getBigtableReadInstanceId ());
LOG . info ( " - bigtableReadTableId {}" , options . getBigtableReadTableId ());
LOG . info ( " - bigtableChangeStreamAppProfile {}" , options . getBigtableChangeStreamAppProfile ());
LOG . info ( " - embeddingColumn {}" , options . getEmbeddingColumn ());
LOG . info ( " - crowdingTagColumn {}" , options . getCrowdingTagColumn ());
LOG . info ( " - project {}" , options . getProject ());
LOG . info ( " - indexName {}" , options . getVectorSearchIndex ());
String indexName = options . getVectorSearchIndex ();
String vertexRegion = Utils . extractRegionFromIndexName ( indexName );
String vertexEndpoint = vertexRegion + "-aiplatform.googleapis.com:443" ;
final Pipeline pipeline = Pipeline . create ( options );
DeadLetterQueueManager dlqManager = buildDlqManager ( options );
BigtableIO . ReadChangeStream readChangeStream =
BigtableIO . readChangeStream ()
. withChangeStreamName ( options . getBigtableChangeStreamName ())
. withExistingPipelineOptions (
options . getBigtableChangeStreamResume ()
? BigtableIO . ExistingPipelineOptions . RESUME_OR_FAIL
: BigtableIO . ExistingPipelineOptions . FAIL_IF_EXISTS )
. withProjectId ( bigtableProjectId )
. withAppProfileId ( options . getBigtableChangeStreamAppProfile ())
. withInstanceId ( options . getBigtableReadInstanceId ())
. withTableId ( options . getBigtableReadTableId ())
. withMetadataTableInstanceId ( options . getBigtableChangeStreamMetadataInstanceId ())
. withMetadataTableTableId ( options . getBigtableMetadataTableTableId ())
. withStartTime ( startTimestamp );
PCollectionTuple results =
pipeline
. apply ( "Read from Cloud Bigtable Change Streams" , readChangeStream )
. apply ( "Create Values" , Values . create ())
. apply (
"Converting to Vector Search Datapoints" ,
ParDo . of (
new ChangeStreamMutationToDatapointOperationFn (
options . getEmbeddingColumn (),
options . getEmbeddingByteSize (),
options . getCrowdingTagColumn (),
Utils . parseColumnMapping ( options . getAllowRestrictsMappings ()),
Utils . parseColumnMapping ( options . getDenyRestrictsMappings ()),
Utils . parseColumnMapping ( options . getIntNumericRestrictsMappings ()),
Utils . parseColumnMapping ( options . getFloatNumericRestrictsMappings ()),
Utils . parseColumnMapping ( options . getDoubleNumericRestrictsMappings ())))
. withOutputTags (
ChangeStreamMutationToDatapointOperationFn . UPSERT_DATAPOINT_TAG ,
TupleTagList . of (
ChangeStreamMutationToDatapointOperationFn . REMOVE_DATAPOINT_TAG )));
results
. get ( ChangeStreamMutationToDatapointOperationFn . UPSERT_DATAPOINT_TAG )
. apply ( "Add placeholer keys" , WithKeys . of ( "placeholder" ))
. apply (
"Batch Contents" ,
GroupIntoBatches . < String , IndexDatapoint>ofSize (
bufferSizeOption ( options . getUpsertMaxBatchSize ()))
. withMaxBufferingDuration (
bufferDurationOption ( options . getUpsertMaxBufferDuration ())))
. apply ( "Map to Values" , Values . create ())
. apply (
"Upsert Datapoints to VectorSearch" ,
ParDo . of ( new UpsertDatapointsFn ( vertexEndpoint , indexName )))
. apply (
"Write errors to DLQ" ,
DLQWriteTransform . WriteDLQ . newBuilder ()
. withDlqDirectory ( dlqManager . getSevereDlqDirectory () + "YYYY/MM/dd/HH/mm/" )
. withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" )
. setIncludePaneInfo ( true )
. build ());
results
. get ( ChangeStreamMutationToDatapointOperationFn . REMOVE_DATAPOINT_TAG )
. apply ( "Add placeholder keys" , WithKeys . of ( "placeholer" ))
. apply (
"Batch Contents" ,
GroupIntoBatches . < String , String>ofSize (
bufferSizeOption ( options . getDeleteMaxBatchSize ()))
. withMaxBufferingDuration (
bufferDurationOption ( options . getDeleteMaxBufferDuration ())))
. apply ( "Map to Values" , Values . create ())
. apply (
"Remove Datapoints From VectorSearch" ,
ParDo . of ( new RemoveDatapointsFn ( vertexEndpoint , indexName )))
. apply (
"Write errors to DLQ" ,
DLQWriteTransform . WriteDLQ . newBuilder ()
. withDlqDirectory ( dlqManager . getSevereDlqDirectory () + "YYYY/MM/dd/HH/mm/" )
. withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" )
. setIncludePaneInfo ( true )
. build ());
return pipeline . run ();
}
private static String getBigtableProjectId ( BigtableChangeStreamsToVectorSearchOptions options ) {
return StringUtils . isEmpty ( options . getBigtableReadProjectId ())
? options . getProject ()
: options . getBigtableReadProjectId ();
}
private static Instant toInstant ( Timestamp timestamp ) {
if ( timestamp == null ) {
return null ;
} else {
return Instant . ofEpochMilli ( timestamp . getSeconds () * 1000 + timestamp . getNanos () / 1000000 );
}
}
private static int bufferSizeOption ( int size ) {
if ( size < 1 ) {
size = 1 ;
}
return size ;
}
private static Duration bufferDurationOption ( String duration ) {
if ( duration . isEmpty ()) {
return Duration . standardSeconds ( 1 );
}
return DurationUtils . parseDuration ( duration );
}
private static DeadLetterQueueManager buildDlqManager (
BigtableChangeStreamsToVectorSearchOptions options ) {
String dlqDirectory = options . getDlqDirectory ();
if ( dlqDirectory . isEmpty ()) {
LOG . info ( "Falling back to temp dir for DLQ" );
String tempLocation = options . as ( DataflowPipelineOptions . class ). getTempLocation ();
LOG . info ( "Have temp location {}" , tempLocation );
if ( tempLocation == null || tempLocation . isEmpty ()) {
tempLocation = "/" ;
} else if ( ! tempLocation . endsWith ( "/" )) {
tempLocation += "/" ;
}
dlqDirectory = tempLocation + "dlq" ;
}
LOG . info ( "Writing dead letter queue to: {}" , dlqDirectory );
return DeadLetterQueueManager . create ( dlqDirectory , 1 );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-16 UTC."],[],[]]
