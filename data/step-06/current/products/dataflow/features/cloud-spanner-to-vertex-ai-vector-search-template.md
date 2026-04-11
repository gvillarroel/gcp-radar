---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.808Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Spanner to Vertex AI Vector Search template"
feature_slug: "cloud-spanner-to-vertex-ai-vector-search-template"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-vector-embeddings"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner"
keywords:
  - "spanner"
  - "to"
  - "vertex"
  - "ai"
  - "vector"
  - "search"
  - "template"
  - "the"
---

# Cloud Spanner to Vertex AI Vector Search template

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Cloud Spanner to Vertex AI Vector Search Dataflow template is generally available.

## Extended Definition

The Cloud Spanner to Vertex AI Vector Search Dataflow template is generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-vector-embeddings](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-vector-embeddings)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner)

## Supporting Pages

### "Spanner to Vertex AI Vector Search template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search)
- Source ID: `site-api-reference`
- Final score: 348
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BATCH , displayName = "Cloud Spanner vectors to Cloud Storage for Vertex Vector Search" , optionsClass = SpannerToVectorEmbeddingJsonOptions . class , description = { "The Cloud Spanner to Vector Embeddings on Cloud Storage template is a batch pipeline that exports vector embeddings data from Cloud Spanner's table to Cloud Storage in JSON format. " + "Vector embeddings are exported to a Cloud Storage folder specified by the user in the template parameters." + " The Cloud Storage folder will contain the list of exported .json files representing vector embeddings in a format supported by Vertex AI Vector Search Index.\n" , "Check <a href=\"https://cloud.google.com/vertex-ai/docs/vector-search/setup/format-structure#json\">Vector Search Format Structure</a> for additional details." }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner database must exist." , "The output Cloud Storage bucket must exist." , "In addition to the Identity and Access Management (IAM) roles necessary to run Dataflow jobs, you must also have the <a href=\"https://cloud.google.com/spanner/docs/export#iam\">appropriate IAM roles</a> for reading your Cloud Spanner data and writing to your Cloud Storage bucket." }) @SuppressWarnings ( "unused" ) public class SpannerVectorEmbeddingExport { private static final Logger LOG = LoggerFactory . getLogger ( SpannerVectorEmbeddingExport . class ); / Custom PipelineOptions. / public interface SpannerToVectorEmbeddingJsonOptions extends PipelineOptions { @TemplateParameter.ProjectId ( order = 10 , groupName = "Source" , description = "Cloud Spanner Project Id" , helpText = "The project ID of the Spanner instance." ) ValueProvider<String> getSpannerProjectId (); void setSpannerProjectId ( ValueProvider<String> value ); @TemplateParameter.Text ( order = 20 , groupName = "Source" , regexes = { "[a-z][a-z0-9\\-] [a-z0-9]" }, description = "Cloud Spanner instance ID" , helpText = "The ID of the Spanner instance to export the vector embeddings from." ) ValueProvider<String> getSpannerInstanceId (); void setSpannerInstanceId ( ValueProvider<String> spannerInstanceId ); @TemplateParameter.Text ( order = 30 , groupName = "Source" , regexes = { "[a-z][a-z0-9 \\-] [a-z0-9]" }, description = "Cloud Spanner database ID" , helpText = "The ID of the Spanner database to export the vector embeddings from." ) ValueProvider<String> getSpannerDatabaseId (); void setSpannerDatabaseId ( ValueProvider<String> spannerDatabaseId ); @TemplateParameter.Text ( order = 40 , groupName = "Source" , regexes = { "^.+$" }, description = "Spanner Table" , helpText = "The Spanner table to read from." ) ValueProvider<String> getSpannerTable (); void setSpannerTable ( ValueProvider<String> table ); @TemplateParameter.Text ( order = 50 , groupName = "Source" , description = "Columns to Export from Spanner Table" , helpText = "A comma-separated list of required columns for the Vertex AI Vector Search index.
- Template parameters Required parameters spannerProjectId : The project ID of the Spanner instance. spannerInstanceId : The ID of the Spanner instance to export the vector embeddings from. spannerDatabaseId : The ID of the Spanner database to export the vector embeddings from. spannerTable : The Spanner table to read from. spannerColumnsToExport : A comma-separated list of required columns for the Vertex AI Vector Search index.
- The template for Spanner to Vertex AI Vector Search files on Cloud Storage creates a batch pipeline that exports vector embeddings data from a Spanner table to Cloud Storage in JSON format.
- From the Dataflow template drop-down menu, select the Spanner to Vertex AI Vector Search files on Cloud Storage template.

### "Bigtable to Vertex AI Vector Search template \_|\_ Cloud Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-vector-embeddings](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-vector-embeddings)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the format cf:col->alias." ) ValueProvider<String> getDoubleNumericRestrictsMappings (); @SuppressWarnings ( "unused" ) void setDoubleNumericRestrictsMappings ( ValueProvider<String> value ); @TemplateParameter.Text ( order = 15 , regexes = { "[ a-zA-Z0-9][- .a-zA-Z0-9] " }, optional = true , description = "App Profile ID" , helpText = "The ID of the Cloud Bigtable app profile to be used for the export" ) @Default.String ( "default" ) ValueProvider<String> getBigtableAppProfileId (); @SuppressWarnings ( "unused" ) void setBigtableAppProfileId ( ValueProvider<String> value ); } / Runs a pipeline to export data from a Cloud Bigtable table to JSON files in GCS in JSON format, for use of Vertex Vector Search. @param args arguments to the pipeline / public static void main ( String [] args ) { Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class ); PipelineResult result = run ( options ); // Wait for pipeline to finish only if it is not constructing a template. if ( options . as ( DataflowPipelineOptions . class ). getTemplateLocation () == null ) { result . waitUntilFinish (); } LOG . info ( "Completed pipeline setup" ); } public static PipelineResult run ( Options options ) { Pipeline pipeline = Pipeline . create ( PipelineUtils . tweakPipelineOptions ( options )); BigtableIO .
- The template for Bigtable to Vertex AI Vector Search files on Cloud Storage creates a batch pipeline that reads data from a Bigtable table and writes it to a Cloud Storage bucket in the JSON format.
- Home Documentation Data analytics Cloud Dataflow Reference Send feedback Bigtable to Vertex AI Vector Search template Stay organized with collections Save and categorize content based on your preferences.
- BATCH , displayName = "Cloud Bigtable to Vector Embeddings" , description = "The Bigtable to Vector Embedding template is a pipeline that reads data from a Bigtable table and writes it to a Cloud Storage bucket in JSON format, for vector embeddings" , optionsClass = Options . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-vector-embeddings" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Bigtable table must exist." , "The output Cloud Storage bucket must exist before running the pipeline." }) public class BigtableToVectorEmbeddings { private static final Logger LOG = LoggerFactory . getLogger ( BigtableToVectorEmbeddings . class ); / Options for the export pipeline. / public interface Options extends PipelineOptions { @TemplateParameter.ProjectId ( order = 1 , groupName = "Source" , description = "Project ID" , helpText = "The ID for the Google Cloud project that contains the Bigtable instance that you want to read data from." ) ValueProvider<String> getBigtableProjectId (); @SuppressWarnings ( "unused" ) void setBigtableProjectId ( ValueProvider<String> projectId ); @TemplateParameter.Text ( order = 2 , groupName = "Source" , regexes = { "[a-z][a-z0-9\\-]+[a-z0-9]" }, description = "Instance ID" , helpText = "The ID of the Bigtable instance that contains the table." ) ValueProvider<String> getBigtableInstanceId (); @SuppressWarnings ( "unused" ) void setBigtableInstanceId ( ValueProvider<String> instanceId ); @TemplateParameter.Text ( order = 3 , groupName = "Source" , regexes = { "[ a-zA-Z0-9][- .a-zA-Z0-9] " }, description = "Table ID" , helpText = "The ID of the Bigtable table to read from." ) ValueProvider<String> getBigtableTableId (); @SuppressWarnings ( "unused" ) void setBigtableTableId ( ValueProvider<String> tableId ); @TemplateParameter.GcsWriteFolder ( order = 4 , groupName = "Target" , description = "Cloud Storage directory for storing JSON files" , helpText = "The Cloud Storage path where the output JSON files are stored." , example = "gs://your-bucket/your-path/" ) @Required ValueProvider<String> getOutputDirectory (); @SuppressWarnings ( "unused" ) void setOutputDirectory ( ValueProvider<String> outputDirectory ); @TemplateParameter.Text ( order = 5 , groupName = "Target" , optional = true , description = "JSON file prefix" , helpText = "The prefix of the JSON filename.

### "Bigtable change streams to Vector Search template \_|\_ Cloud Dataflow \_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search)
- Source ID: `site-api-reference`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Streams Bigtable data change records and writes them into Vertex AI Vector Search using Dataflow Runner V2." , optionsClass = BigtableChangeStreamsToVectorSearchOptions . class , optionsOrder = { BigtableChangeStreamsToVectorSearchOptions . class , ReadChangeStreamOptions . class , ReadOptions . class }, skipOptions = { "bigtableReadAppProfile" , "bigtableAdditionalRetryCodes" , "bigtableRpcAttemptTimeoutMs" , "bigtableRpcTimeoutMs" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-change-streams-to-vector-search" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , streaming = true ) public final class BigtableChangeStreamsToVectorSearch { private static final Logger LOG = LoggerFactory . getLogger ( BigtableChangeStreamsToVectorSearch . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) throws Exception { LOG . info ( "Starting replication from Cloud Bigtable Change Streams to Vector Search" ); BigtableChangeStreamsToVectorSearchOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigtableChangeStreamsToVectorSearchOptions . class ); run ( options ); } public static PipelineResult run ( BigtableChangeStreamsToVectorSearchOptions options ) throws IOException { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); List<String> experiments = options . getExperiments (); if ( experiments == null ) { experiments = new ArrayList <> (); } boolean hasUseRunnerV2 = false ; for ( String experiment : experiments ) { if ( experiment . equalsIgnoreCase ( USE RUNNER V2 EXPERIMENT )) { hasUseRunnerV2 = true ; break ; } } if ( ! hasUseRunnerV2 ) { experiments . add ( USE RUNNER V2 EXPERIMENT ); } options . setExperiments ( experiments ); Instant startTimestamp = options . getBigtableChangeStreamStartTimestamp (). isEmpty () ?
- This template creates a streaming pipeline to stream Bigtable data change records and write them to Vertex AI Vector Search using Dataflow Runner V2.
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launchParameter" : { "jobName" : " JOB NAME " , "parameters" : { "embeddingColumn" : " EMBEDDING COLUMN " , "embeddingByteSize" : " EMBEDDING BYTE SIZE " , "vectorSearchIndex" : " VECTOR SEARCH INDEX " , "bigtableChangeStreamAppProfile" : " BIGTABLE CHANGE STREAM APP PROFILE " , "bigtableReadInstanceId" : " BIGTABLE READ INSTANCE ID " , "bigtableReadTableId" : " BIGTABLE READ TABLE ID " , }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/Bigtable Change Streams to Vector Search" , "environment" : { "maxWorkers" : "10" } } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to Vector Search \ --project = PROJECT ID \ --region = REGION NAME \ --parameters \ embeddingColumn = EMBEDDING COLUMN , \ embeddingByteSize = EMBEDDING BYTE SIZE , \ vectorSearchIndex = VECTOR SEARCH INDEX , \ bigtableChangeStreamAppProfile = BIGTABLE CHANGE STREAM APP PROFILE , \ bigtableReadInstanceId = BIGTABLE READ INSTANCE ID , \ bigtableReadTableId = BIGTABLE READ TABLE ID , \ Replace the following: JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

### "Cloud Storage Text to Spanner template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /templates:launch?gcsPath=gs://dataflow-templates- LOCATION / VERSION /GCS Text to Cloud Spanner { "jobName" : " JOB NAME " , "parameters" : { "instanceId" : " INSTANCE ID " , "databaseId" : " DATABASE ID " , "importManifest" : " GCS PATH TO IMPORT MANIFEST " }, "environment" : { "machineType" : "n1-standard-2" } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow jobs run JOB NAME \ --gcs-location gs://dataflow-templates- REGION NAME / VERSION /GCS Text to Cloud Spanner \ --region REGION NAME \ --parameters \ instanceId = INSTANCE ID , \ databaseId = DATABASE ID , \ importManifest = GCS PATH TO IMPORT MANIFEST Replace the following: JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 INSTANCE ID : your Spanner instance ID DATABASE ID : your Spanner database ID GCS PATH TO IMPORT MANIFEST : the Cloud Storage path to your import manifest file Template source code Java This template's source code is in the GoogleCloudPlatform/DataflowTemplates repository on GitHub.
- REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 INSTANCE ID : your Spanner instance ID DATABASE ID : your Spanner database ID GCS PATH TO IMPORT MANIFEST : the Cloud Storage path to your import manifest file API To run the template using the REST API, send an HTTP POST request.

