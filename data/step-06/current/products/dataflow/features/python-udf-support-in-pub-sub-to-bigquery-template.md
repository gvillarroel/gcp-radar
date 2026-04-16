---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.764Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Python UDF support in Pub/Sub to BigQuery template"
feature_slug: "python-udf-support-in-pub-sub-to-bigquery-template"
latest_feature_date: "2024-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.templates_service.TemplatesServiceAsyncClient"
keywords:
  - "python"
  - "udf"
  - "pub"
  - "sub"
  - "bigquery"
  - "template"
  - "dataflow"
  - "supports"
---

# Python UDF support in Pub/Sub to BigQuery template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub to BigQuery Dataflow template supports user-defined functions written in Python.

## Extended Definition

The Pub/Sub to BigQuery Dataflow template supports user-defined functions written in Python.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.templates_service.TemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.templates_service.TemplatesServiceAsyncClient)

## Supporting Pages

### "Use Flex Templates to package a Dataflow pipeline for deployment \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Example metadata file Java { "name" : "Streaming Beam SQL" , "description" : "An Apache Beam streaming pipeline that reads JSON encoded messages from Pub/Sub, uses Beam SQL to transform the message data, and writes the results to a BigQuery" , "parameters" : [ { "name" : "inputSubscription" , "label" : "Pub/Sub input subscription." , "helpText" : "Pub/Sub subscription to read from." , "regexes" : [ "[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "outputTable" , "label" : "BigQuery output table" , "helpText" : "BigQuery table spec to write to, in the form 'project:dataset.table'." , "isOptional" : true , "regexes" : [ "[^:]+:[^.]+[.].+" ] } ] } Python { "name" : "Streaming beam Python flex template" , "description" : "Streaming beam example for python flex template." , "parameters" : [ { "name" : "input subscription" , "label" : "Input PubSub subscription." , "helpText" : "Name of the input PubSub subscription to consume from." , "regexes" : [ "projects/[^/]+/subscriptions/[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "output table" , "label" : "BigQuery output table name." , "helpText" : "Name of the BigQuery output table name." , "isOptional" : true , "regexes" : [ "([^:]+:)?[^.]+[.].+" ] } ] } You can download metadata files for the Google-provided templates from the Dataflow template directory .
- Use a custom image To run a Flex Template using a custom container image, run the following command: Java gcloud dataflow flex-template build gs:// BUCKET NAME / TEMPLATE FILE NAME \ --image " CUSTOM IMAGE " \ --sdk-language "JAVA" \ --metadata-file " METADATA FILE " Python gcloud dataflow flex-template build gs:// BUCKET NAME / TEMPLATE FILE NAME \ --image " CUSTOM IMAGE " \ --sdk-language "PYTHON" \ --metadata-file " METADATA FILE " Go gcloud dataflow flex-template build gs:// BUCKET NAME / TEMPLATE FILE NAME \ --image " CUSTOM IMAGE " \ --sdk-language "GO" \ --metadata-file " METADATA FILE " Replace the following: BUCKET NAME : the name of a Cloud Storage bucket to store the template specification file.
- Python gcloud dataflow flex-template build gs:// BUCKET NAME / TEMPLATE FILE NAME \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE : TAG " \ --sdk-language "PYTHON" \ --flex-template-base-image " BASE IMAGE " \ --metadata-file " METADATA FILE " \ --py-path " PYTHON FILE PATH " \ --env "FLEX TEMPLATE PYTHON PY FILE= PYTHON FILE " Replace the following: BUCKET NAME : the name of a Cloud Storage bucket to store the template specification file TEMPLATE FILE NAME : the name of the template specification file to create.
- The launcher binary is located at the following path: Java /opt/google/dataflow/java template launcher Python /opt/google/dataflow/python template launcher Go /opt/google/dataflow/go template launcher Copy the artifacts needed to launch the pipeline job, such as Python files, JAR files, or Go binaries.

### "Cloud Storage Text to BigQuery template with Python UDF \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.v2.templates ; import com.google.api.services.bigquery.model.TableFieldSchema ; import com.google.api.services.bigquery.model.TableRow ; import com.google.api.services.bigquery.model.TableSchema ; import com.google.cloud.teleport.metadata.MultiTemplate ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.options.BigQueryStorageApiBatchOptions ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters ; import com.google.cloud.teleport.v2.transforms.JavascriptTextTransformer.TransformTextViaJavascript ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer.PythonExternalTextTransformerOptions ; import com.google.cloud.teleport.v2.utils.BigQueryIOUtils ; import com.google.common.annotations.VisibleForTesting ; import com.google.common.base.Strings ; import java.nio.channels.Channels ; import java.nio.channels.ReadableByteChannel ; import java.nio.charset.StandardCharsets ; import java.util.ArrayList ; import java.util.List ; import java.util.function.Supplier ; import org.apache.beam.runners.dataflow.options.DataflowPipelineOptions ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.io.FileSystems ; import org.apache.beam.sdk.io.TextIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.CreateDisposition ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.WriteDisposition ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation ; import org.apache.beam.sdk.options.ValueProvider.StaticValueProvider ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.SimpleFunction ; import org.apache.beam.sdk.util.StreamUtils ; import org.apache.beam.sdk.values.PCollection ; import org.json.JSONArray ; import org.json.JSONObject ; / Templated pipeline to read text from TextIO, apply a javascript UDF to it, and write it to GCS. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-googlecloud/README GCS Text to BigQuery Flex.md">README</a> for instructions on how to use or modify this template. / @MultiTemplate ({ @Template ( name = "GCS Text to BigQuery Flex" , category = TemplateCategory .
- Your function must return a JSON string.\n" + " <p>For example, this function splits each line of a CSV file and returns a JSON string after\n" + " transforming the values.</p>\n" + "<pre class=\"prettyprint\" suppresswarning>\n" + "function transform(line) {\n" + "var values = line.split(',');\n" + "\n" + "var obj = new Object();\n" + "obj.location = values[0];\n" + "obj.name = values[1];\n" + "obj.age = values[2];\n" + "obj.color = values[3];\n" + "obj.coffee = values[4];\n" + "var jsonString = JSON.stringify(obj);\n" + "\n" + "return jsonString;\n" + "}</pre>" }) }) public class TextIOToBigQuery { / Options supported by {@link TextIOToBigQuery}. / public interface Options extends DataflowPipelineOptions , PythonExternalTextTransformerOptions , BigQueryStorageApiBatchOptions { @TemplateParameter.GcsReadFile ( order = 1 , groupName = "Source" , optional = false , description = "The GCS location of the text you'd like to process" , helpText = "The gs:// path to the text in Cloud Storage you'd like to process." , example = "gs://your-bucket/your-file.txt" ) String getInputFilePattern (); void setInputFilePattern ( String value ); @TemplateParameter.GcsReadFile ( order = 2 , optional = false , description = "JSON file with BigQuery Schema description" , helpText = "The gs:// path to the JSON file that defines your BigQuery schema, stored in Cloud Storage." , example = "gs://your-bucket/your-schema.json" ) String getJSONPath (); void setJSONPath ( String value ); @TemplateParameter.BigQueryTable ( order = 3 , optional = false , groupName = "Target" , description = "Output table to write to" , helpText = "The location of the BigQuery table to use to store the processed data.
- Options . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "pythonExternalTextTransformGcsPath" , "pythonExternalTextTransformFunctionName" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , requirements = { "Create a JSON file that describes your {{bigquery name short}} schema.\n" + " <p>Ensure that there is a top-level JSON array titled <code>BigQuery Schema</code> and that its\n" + " contents follow the pattern <code>{\"name\": \"COLUMN NAME\", \"type\": \"DATA TYPE\"}</code>.</p>\n" + " <p>The following JSON describes an example BigQuery schema:</p>\n" + "<pre class=\"prettyprint lang-json\">\n" + "{\n" + " \"BigQuery Schema\": [\n" + " {\n" + " \"name\": \"location\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"name\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"age\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"color\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"coffee\",\n" + " \"type\": \"STRING\"\n" + " }\n" + " ]\n" + "}\n" + "</pre>" , "Create a JavaScript (<code>.js</code>) file with your UDF function that supplies the logic\n" + " to transform the lines of text.
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "parameters" : { "pythonExternalTextTransformFunctionName" : " PYTHON FUNCTION " , "JSONPath" : " PATH TO BIGQUERY SCHEMA JSON " , "pythonExternalTextTransformGcsPath" : " PATH TO PYTHON UDF FILE " , "inputFilePattern" : " PATH TO TEXT DATA " , "outputTable" : " BIGQUERY TABLE " , "bigQueryLoadingTemporaryDirectory" : " PATH TO TEMP DIR ON GCS " }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/GCS Text to BigQuery Xlang" , } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

### "Class TemplatesServiceAsyncClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.templates_service.TemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.templates_service.TemplatesServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample create job from template(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample launch template(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample get template(): Create a client client = dataflow v1beta3 .
- CreateJobFromTemplateRequest ( gcs path="gcs path value", ) Make the request response = await client. create job from template (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataflow v1beta3.types.CreateJobFromTemplateRequest , dict]] The request object.

