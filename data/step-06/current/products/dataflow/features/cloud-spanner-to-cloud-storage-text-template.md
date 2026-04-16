---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.800Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Spanner to Cloud Storage Text template"
feature_slug: "cloud-spanner-to-cloud-storage-text-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro"
keywords:
  - "spanner"
  - "storage"
  - "text"
  - "template"
  - "provided"
  - "exports"
  - "files"
---

# Cloud Spanner to Cloud Storage Text template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template exports Cloud Spanner data to Cloud Storage as text files.

## Extended Definition

This Google-provided template exports Cloud Spanner data to Cloud Storage as text files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro)

## Supporting Pages

### "Spanner to Cloud Storage Text template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)
- Source ID: `site-api-reference`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "Cloud Spanner to Text Files on Cloud Storage" , description = "The Cloud Spanner to Cloud Storage Text template is a batch pipeline that reads in data from a Cloud Spanner " + "table, and writes it to Cloud Storage as CSV text files." , optionsClass = SpannerToTextOptions . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage" , contactInformation = "https://cloud.google.com/support" , requirements = { "The input Spanner table must exist before running the pipeline." }) public class SpannerToText { private static final Logger LOG = LoggerFactory . getLogger ( SpannerToText . class ); / Custom PipelineOptions. / public interface SpannerToTextOptions extends PipelineOptions , SpannerReadOptions , FilesystemWriteOptions { @TemplateParameter.GcsWriteFolder ( order = 1 , groupName = "Target" , optional = true , description = "Cloud Storage temp directory for storing CSV files" , helpText = "The Cloud Storage path where temporary CSV files are written." , example = "gs://your-bucket/your-path" ) ValueProvider<String> getCsvTempDirectory (); @SuppressWarnings ( "unused" ) void setCsvTempDirectory ( ValueProvider<String> value ); @TemplateParameter.Enum ( order = 2 , groupName = "Source" , enumOptions = { @TemplateEnumOption ( "LOW" ), @TemplateEnumOption ( "MEDIUM" ), @TemplateEnumOption ( "HIGH" ) }, optional = true , description = "Priority for Spanner RPC invocations" , helpText = "The request priority (https://cloud.google.com/spanner/docs/reference/rest/v1/RequestOptions)" + " for Spanner calls.
- The Spanner to Cloud Storage Text template is a batch pipeline that reads in data from a Spanner table, and writes it to Cloud Storage as CSV text files.
- From the Dataflow template drop-down menu, select the Cloud Spanner to Text Files on Cloud Storage template.
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.templates ; import static com.google.cloud.teleport.util.ValueProviderUtils.eitherOrValueProvider ; import com.google.cloud.spanner.Options.RpcPriority ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.metadata.TemplateParameter.TemplateEnumOption ; import com.google.cloud.teleport.spanner.spannerio.ReadOperation ; import com.google.cloud.teleport.spanner.spannerio.SpannerConfig ; import com.google.cloud.teleport.spanner.spannerio.SpannerIO ; import com.google.cloud.teleport.spanner.spannerio.Transaction ; import com.google.cloud.teleport.templates.SpannerToText.SpannerToTextOptions ; import com.google.cloud.teleport.templates.common.SpannerConverters ; import com.google.cloud.teleport.templates.common.SpannerConverters.CreateTransactionFnWithTimestamp ; import com.google.cloud.teleport.templates.common.SpannerConverters.SpannerReadOptions ; import com.google.cloud.teleport.templates.common.TextConverters.FilesystemWriteOptions ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.io.FileSystems ; import org.apache.beam.sdk.io.TextIO ; import org.apache.beam.sdk.io.fs.ResourceId ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.ValueProvider ; import org.apache.beam.sdk.transforms.Create ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.PTransform ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.SerializableFunction ; import org.apache.beam.sdk.transforms.View ; import org.apache.beam.sdk.values.PBegin ; import org.apache.beam.sdk.values.PCollection ; import org.apache.beam.sdk.values.PCollectionView ; import org.apache.beam.sdk.values.TypeDescriptors ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / Dataflow template which copies a Spanner table to a Text sink.

### "Cloud Storage Text to Spanner template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Storage Text to Spanner template is a batch pipeline that reads CSV text files from Cloud Storage and imports them to a Spanner database.
- From the Dataflow template drop-down menu, select the Text Files on Cloud Storage to Cloud Spanner template.
- Template parameters Required parameters instanceId : The instance ID of the Spanner database. databaseId : The database ID of the Spanner database. importManifest : The path in Cloud Storage to use when importing manifest files.
- Home Documentation Data analytics Cloud Dataflow Reference Send feedback Cloud Storage Text to Spanner template Stay organized with collections Save and categorize content based on your preferences.

### "Spanner to Cloud Storage Avro template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro)
- Source ID: `site-api-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The folder contains:\n" + "- A spanner-export.json file.\n" + "- A TableName-manifest.json file for each table in the database you exported.\n" + "- One or more TableName.avro-#####-of-##### files.\n" , "For example, exporting a database with two tables, Singers and Albums, creates the following file set:\n" + "- Albums-manifest.json\n" + "- Albums.avro-00000-of-00002\n" + "- Albums.avro-00001-of-00002\n" + "- Singers-manifest.json\n" + "- Singers.avro-00000-of-00003\n" + "- Singers.avro-00001-of-00003\n" + "- Singers.avro-00002-of-00003\n" + "- spanner-export.json" }, optionsClass = ExportPipelineOptions . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner database must exist." , "The output Cloud Storage bucket must exist." , "In addition to the Identity and Access Management (IAM) roles necessary to run Dataflow jobs, you must also have the <a href=\"https://cloud.google.com/spanner/docs/export#iam\">appropriate IAM roles</a> for reading your Cloud Spanner data and writing to your Cloud Storage bucket." }) public class ExportPipeline { / Options for Export pipeline. / public interface ExportPipelineOptions extends PipelineOptions { @TemplateParameter.Text ( order = 1 , groupName = "Source" , regexes = { "[a-z][a-z0-9\\-] [a-z0-9]" }, description = "Cloud Spanner instance ID" , helpText = "The instance ID of the Spanner database that you want to export." ) ValueProvider<String> getInstanceId (); void setInstanceId ( ValueProvider<String> value ); @TemplateParameter.Text ( order = 2 , groupName = "Source" , regexes = { "[a-z][a-z0-9 \\-] [a-z0-9]" }, description = "Cloud Spanner database ID" , helpText = "The database ID of the Spanner database that you want to export." ) ValueProvider<String> getDatabaseId (); void setDatabaseId ( ValueProvider<String> value ); @TemplateParameter.GcsWriteFolder ( order = 3 , groupName = "Target" , description = "Cloud Storage output directory" , helpText = "The Cloud Storage path to export Avro files to.
- The export job creates a new directory under this path that contains the exported files." , example = "gs://your-bucket/your-path" ) ValueProvider<String> getOutputDir (); void setOutputDir ( ValueProvider<String> value ); @TemplateParameter.GcsWriteFolder ( order = 4 , optional = true , description = "Cloud Storage temp directory for storing Avro files" , helpText = "The Cloud Storage path where temporary Avro files are written." ) ValueProvider<String> getAvroTempDirectory (); void setAvroTempDirectory ( ValueProvider<String> value ); @TemplateCreationParameter ( value = "" ) @Description ( "Test dataflow job identifier for Beam Direct Runner" ) @Default.String ( value = "" ) ValueProvider<String> getTestJobId (); void setTestJobId ( ValueProvider<String> jobId ); @TemplateParameter.Text ( order = 6 , groupName = "Source" , optional = true , description = "Cloud Spanner Endpoint to call" , helpText = "The Cloud Spanner endpoint to call in the template.
- BATCH , displayName = "Cloud Spanner to Avro Files on Cloud Storage" , description = { "The Cloud Spanner to Avro Files on Cloud Storage template is a batch pipeline that exports a whole Cloud Spanner database to Cloud Storage in Avro format. " + "Exporting a Cloud Spanner database creates a folder in the bucket you select.
- The Spanner to Avro Files on Cloud Storage template is a batch pipeline that exports a whole Spanner database to Cloud Storage in Avro format.

