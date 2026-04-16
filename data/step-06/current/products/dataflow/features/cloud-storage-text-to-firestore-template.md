---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.801Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Storage Text to Firestore template"
feature_slug: "cloud-storage-text-to-firestore-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage"
keywords:
  - "storage"
  - "text"
  - "firestore"
  - "template"
  - "provided"
  - "loads"
  - "into"
---

# Cloud Storage Text to Firestore template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template loads text data from Cloud Storage into Firestore.

## Extended Definition

This Google-provided template loads text data from Cloud Storage into Firestore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)

## Supporting Pages

### "Cloud Storage Text to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Options . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, optionalOptions = { "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud-xlang" , contactInformation = "https://cloud.google.com/support" , requirements = { "Create a JSON file that describes your {{bigquery name short}} schema.\n" + " <p>Ensure that there is a top-level JSON array titled <code>BigQuery Schema</code> and that its\n" + " contents follow the pattern <code>{\"name\": \"COLUMN NAME\", \"type\": \"DATA TYPE\"}</code>.</p>\n" + " <p>The following JSON describes an example BigQuery schema:</p>\n" + "<pre class=\"prettyprint lang-json\">\n" + "{\n" + " \"BigQuery Schema\": [\n" + " {\n" + " \"name\": \"location\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"name\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"age\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"color\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"coffee\",\n" + " \"type\": \"STRING\"\n" + " }\n" + " ]\n" + "}\n" + "</pre>" , "Create a JavaScript (<code>.js</code>) file with your UDF function that supplies the logic\n" + " to transform the lines of text.
- Options . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "pythonExternalTextTransformGcsPath" , "pythonExternalTextTransformFunctionName" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , requirements = { "Create a JSON file that describes your {{bigquery name short}} schema.\n" + " <p>Ensure that there is a top-level JSON array titled <code>BigQuery Schema</code> and that its\n" + " contents follow the pattern <code>{\"name\": \"COLUMN NAME\", \"type\": \"DATA TYPE\"}</code>.</p>\n" + " <p>The following JSON describes an example BigQuery schema:</p>\n" + "<pre class=\"prettyprint lang-json\">\n" + "{\n" + " \"BigQuery Schema\": [\n" + " {\n" + " \"name\": \"location\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"name\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"age\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"color\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"coffee\",\n" + " \"type\": \"STRING\"\n" + " }\n" + " ]\n" + "}\n" + "</pre>" , "Create a JavaScript (<code>.js</code>) file with your UDF function that supplies the logic\n" + " to transform the lines of text.
- The Cloud Storage Text to BigQuery batch template doesn't support importing data into STRUCT (Record) fields in the target BigQuery table.
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.v2.templates ; import com.google.api.services.bigquery.model.TableFieldSchema ; import com.google.api.services.bigquery.model.TableRow ; import com.google.api.services.bigquery.model.TableSchema ; import com.google.cloud.teleport.metadata.MultiTemplate ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.options.BigQueryStorageApiBatchOptions ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters ; import com.google.cloud.teleport.v2.transforms.JavascriptTextTransformer.TransformTextViaJavascript ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer.PythonExternalTextTransformerOptions ; import com.google.cloud.teleport.v2.utils.BigQueryIOUtils ; import com.google.common.annotations.VisibleForTesting ; import com.google.common.base.Strings ; import java.nio.channels.Channels ; import java.nio.channels.ReadableByteChannel ; import java.nio.charset.StandardCharsets ; import java.util.ArrayList ; import java.util.List ; import java.util.function.Supplier ; import org.apache.beam.runners.dataflow.options.DataflowPipelineOptions ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.io.FileSystems ; import org.apache.beam.sdk.io.TextIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.CreateDisposition ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.WriteDisposition ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation ; import org.apache.beam.sdk.options.ValueProvider.StaticValueProvider ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.SimpleFunction ; import org.apache.beam.sdk.util.StreamUtils ; import org.apache.beam.sdk.values.PCollection ; import org.json.JSONArray ; import org.json.JSONObject ; / Templated pipeline to read text from TextIO, apply a javascript UDF to it, and write it to GCS. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-googlecloud/README GCS Text to BigQuery Flex.md">README</a> for instructions on how to use or modify this template. / @MultiTemplate ({ @Template ( name = "GCS Text to BigQuery Flex" , category = TemplateCategory .

### "Cloud Storage Text to BigQuery template with Python UDF \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Options . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, optionalOptions = { "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud-xlang" , contactInformation = "https://cloud.google.com/support" , requirements = { "Create a JSON file that describes your {{bigquery name short}} schema.\n" + " <p>Ensure that there is a top-level JSON array titled <code>BigQuery Schema</code> and that its\n" + " contents follow the pattern <code>{\"name\": \"COLUMN NAME\", \"type\": \"DATA TYPE\"}</code>.</p>\n" + " <p>The following JSON describes an example BigQuery schema:</p>\n" + "<pre class=\"prettyprint lang-json\">\n" + "{\n" + " \"BigQuery Schema\": [\n" + " {\n" + " \"name\": \"location\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"name\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"age\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"color\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"coffee\",\n" + " \"type\": \"STRING\"\n" + " }\n" + " ]\n" + "}\n" + "</pre>" , "Create a JavaScript (<code>.js</code>) file with your UDF function that supplies the logic\n" + " to transform the lines of text.
- Options . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "pythonExternalTextTransformGcsPath" , "pythonExternalTextTransformFunctionName" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , requirements = { "Create a JSON file that describes your {{bigquery name short}} schema.\n" + " <p>Ensure that there is a top-level JSON array titled <code>BigQuery Schema</code> and that its\n" + " contents follow the pattern <code>{\"name\": \"COLUMN NAME\", \"type\": \"DATA TYPE\"}</code>.</p>\n" + " <p>The following JSON describes an example BigQuery schema:</p>\n" + "<pre class=\"prettyprint lang-json\">\n" + "{\n" + " \"BigQuery Schema\": [\n" + " {\n" + " \"name\": \"location\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"name\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"age\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"color\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"coffee\",\n" + " \"type\": \"STRING\"\n" + " }\n" + " ]\n" + "}\n" + "</pre>" , "Create a JavaScript (<code>.js</code>) file with your UDF function that supplies the logic\n" + " to transform the lines of text.
- The Cloud Storage Text to BigQuery batch template doesn't support importing data into STRUCT (Record) fields in the target BigQuery table.
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.v2.templates ; import com.google.api.services.bigquery.model.TableFieldSchema ; import com.google.api.services.bigquery.model.TableRow ; import com.google.api.services.bigquery.model.TableSchema ; import com.google.cloud.teleport.metadata.MultiTemplate ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.options.BigQueryStorageApiBatchOptions ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters ; import com.google.cloud.teleport.v2.transforms.JavascriptTextTransformer.TransformTextViaJavascript ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer.PythonExternalTextTransformerOptions ; import com.google.cloud.teleport.v2.utils.BigQueryIOUtils ; import com.google.common.annotations.VisibleForTesting ; import com.google.common.base.Strings ; import java.nio.channels.Channels ; import java.nio.channels.ReadableByteChannel ; import java.nio.charset.StandardCharsets ; import java.util.ArrayList ; import java.util.List ; import java.util.function.Supplier ; import org.apache.beam.runners.dataflow.options.DataflowPipelineOptions ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.io.FileSystems ; import org.apache.beam.sdk.io.TextIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.CreateDisposition ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.WriteDisposition ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation ; import org.apache.beam.sdk.options.ValueProvider.StaticValueProvider ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.SimpleFunction ; import org.apache.beam.sdk.util.StreamUtils ; import org.apache.beam.sdk.values.PCollection ; import org.json.JSONArray ; import org.json.JSONObject ; / Templated pipeline to read text from TextIO, apply a javascript UDF to it, and write it to GCS. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-googlecloud/README GCS Text to BigQuery Flex.md">README</a> for instructions on how to use or modify this template. / @MultiTemplate ({ @Template ( name = "GCS Text to BigQuery Flex" , category = TemplateCategory .

### "Spanner to Cloud Storage Text template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)
- Source ID: `site-api-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "Cloud Spanner to Text Files on Cloud Storage" , description = "The Cloud Spanner to Cloud Storage Text template is a batch pipeline that reads in data from a Cloud Spanner " + "table, and writes it to Cloud Storage as CSV text files." , optionsClass = SpannerToTextOptions . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage" , contactInformation = "https://cloud.google.com/support" , requirements = { "The input Spanner table must exist before running the pipeline." }) public class SpannerToText { private static final Logger LOG = LoggerFactory . getLogger ( SpannerToText . class ); / Custom PipelineOptions. / public interface SpannerToTextOptions extends PipelineOptions , SpannerReadOptions , FilesystemWriteOptions { @TemplateParameter.GcsWriteFolder ( order = 1 , groupName = "Target" , optional = true , description = "Cloud Storage temp directory for storing CSV files" , helpText = "The Cloud Storage path where temporary CSV files are written." , example = "gs://your-bucket/your-path" ) ValueProvider<String> getCsvTempDirectory (); @SuppressWarnings ( "unused" ) void setCsvTempDirectory ( ValueProvider<String> value ); @TemplateParameter.Enum ( order = 2 , groupName = "Source" , enumOptions = { @TemplateEnumOption ( "LOW" ), @TemplateEnumOption ( "MEDIUM" ), @TemplateEnumOption ( "HIGH" ) }, optional = true , description = "Priority for Spanner RPC invocations" , helpText = "The request priority (https://cloud.google.com/spanner/docs/reference/rest/v1/RequestOptions)" + " for Spanner calls.
- NestedValueProvider . of ( eitherOrValueProvider ( options . getCsvTempDirectory (), options . getTextWritePrefix ()), ( SerializableFunction<String , ResourceId > ) s - > FileSystems . matchNewResource ( s , true )); csv . apply ( "Write to storage" , TextIO . write () . to ( options . getTextWritePrefix ()) . withSuffix ( ".csv" ) . withTempDirectory ( tempDirectoryResource )); pipeline . run (); LOG . info ( "Completed pipeline setup" ); } } What's next Learn about Dataflow templates .
- Template parameters Required parameters spannerTable : The Spanner table to read the data from. spannerProjectId : The ID of the Google Cloud project that contains the Spanner database to read data from. spannerInstanceId : The instance ID of the requested table. spannerDatabaseId : The database ID of the requested table. textWritePrefix : The Cloud Storage path prefix that specifies where the data is written.
- ExportTransformFactory . create ( options . getSpannerTable (), spannerConfig , options . getTextWritePrefix (), options . getSpannerSnapshotTime ()); / CreateTransaction and CreateTransactionFn classes in SpannerIO only take a timestamp object for exact staleness which works when parameters are provided during template compile time.

