---
title: "Spanner to Cloud Storage Avro template \_|\_ Cloud Dataflow \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro
  title: "Spanner to Cloud Storage Avro template \_|\_ Cloud Dataflow \_|\_ Google\
    \ Cloud Documentation"
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
Spanner to Cloud Storage Avro template
Stay organized with collections
Save and categorize content based on your preferences.
The Spanner to Avro Files on Cloud Storage template is a batch pipeline that exports a whole
Spanner database to Cloud Storage in Avro format. Exporting a Spanner
database creates a folder in the bucket you select. The folder contains:
A spanner-export.json file.
A TableName -manifest.json file for each table in the database you exported.
One or more TableName .avro- ##### -of- ##### files.
For example, exporting a database with two tables, Singers and Albums ,
creates the following file set:
Albums-manifest.json
Albums.avro-00000-of-00002
Albums.avro-00001-of-00002
Singers-manifest.json
Singers.avro-00000-of-00003
Singers.avro-00001-of-00003
Singers.avro-00002-of-00003
spanner-export.json
Pipeline requirements
The Spanner database must exist.
The output Cloud Storage bucket must exist.
In addition to the Identity and Access Management (IAM) roles necessary to run
Dataflow jobs, you must also have the
appropriate IAM roles
for reading your Spanner data and writing to your
Cloud Storage bucket.
Template parameters
Required parameters
instanceId : The instance ID of the Spanner database that you want to export.
databaseId : The database ID of the Spanner database that you want to export.
outputDir : The Cloud Storage path to export Avro files to. The export job creates a new directory under this path that contains the exported files. For example, gs://your-bucket/your-path .
Optional parameters
avroTempDirectory : The Cloud Storage path where temporary Avro files are written.
spannerHost : The Cloud Spanner endpoint to call in the template. Only used for testing. For example, https://batch-spanner.googleapis.com . Defaults to: https://batch-spanner.googleapis.com .
snapshotTime : The timestamp that corresponds to the version of the Spanner database that you want to read. The timestamp must be specified by using RFC 3339 UTC Zulu format. The timestamp must be in the past, and maximum timestamp staleness applies. For example, 1990-12-31T23:59:60Z . Defaults to empty.
spannerProjectId : The ID of the Google Cloud project that contains the Spanner database that you want to read data from.
shouldExportTimestampAsLogicalType : If true , timestamps are exported as a long type with timestamp-micros logical type. By default, this parameter is set to false and timestamps are exported as ISO-8601 strings at nanosecond precision.
tableNames : A comma-separated list of tables specifying the subset of the Spanner database to export. If you set this parameter, you must either include all of the related tables (parent tables and foreign key referenced tables) or set the shouldExportRelatedTables parameter to true .If the table is in named schema, please use fully qualified name. For example: sch1.foo in which sch1 is the schema name and foo is the table name. Defaults to empty.
shouldExportRelatedTables : Whether to include related tables. This parameter is used in conjunction with the tableNames parameter. Defaults to: false.
spannerPriority : The request priority for Spanner calls. Possible values are HIGH , MEDIUM , and LOW . The default value is MEDIUM .
dataBoostEnabled : Set to true to use the compute resources of Spanner Data Boost to run the job with near-zero impact on Spanner OLTP workflows. When set to true , you also need the spanner.databases.useDataBoost IAM permission. For more information, see the Data Boost overview ( https://cloud.google.com/spanner/docs/databoost/databoost-overview ). Defaults to: false.
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
the Cloud Spanner to Avro Files on Cloud Storage template.
In the provided parameter fields, enter your parameter values.
Click Run job .
gcloud
This sample uses the
gcloud dataflow jobs run command.
Note: To use the Google Cloud CLI to run classic
templates, you must have Google Cloud CLI version
138.0.0
or later.
In your shell or terminal, run the template:
gcloud dataflow jobs run JOB_NAME \
--gcs-location gs://dataflow-templates- REGION_NAME / VERSION /Cloud_Spanner_to_GCS_Avro \
--region REGION_NAME \
--staging-location GCS_STAGING_LOCATION \
--parameters 'instanceId= INSTANCE_ID ,databaseId= DATABASE_ID ,outputDir= GCS_DIRECTORY '
Replace the following:
JOB_NAME :
a unique job name of your choice
For the job to show in the Spanner portion of the Google Cloud console, the
job name must match the format
cloud-spanner-- INSTANCE_ID - DATABASE_ID .
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
GCS_STAGING_LOCATION : the path for writing temporary files; for
example, gs://mybucket/temp
INSTANCE_ID : your Spanner instance ID
DATABASE_ID : your Spanner database ID
GCS_DIRECTORY : the Cloud Storage path that
the Avro files are
imported from
API
To run the template using the REST API, send an HTTP POST request. For more information on the
API and its authorization scopes, see
projects.templates.launch .
POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT_ID /locations/ LOCATION /templates:launch?gcsPath=gs://dataflow-templates- LOCATION / VERSION /Cloud_Spanner_to_GCS_Avro
{
"jobName" : " JOB_NAME " ,
"parameters" : {
"instanceId" : " INSTANCE_ID " ,
"databaseId" : " DATABASE_ID " ,
"outputDir" : "gs:// GCS_DIRECTORY "
}
}
Replace the following:
PROJECT_ID :
the Google Cloud project ID where you want to run the Dataflow job
JOB_NAME :
a unique job name of your choice
For the job to show in the Spanner portion of the Google Cloud console, the
job name must match the format
cloud-spanner-- INSTANCE_ID - DATABASE_ID .
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
GCS_STAGING_LOCATION : the path for writing temporary files; for
example, gs://mybucket/temp
INSTANCE_ID : your Spanner instance ID
DATABASE_ID : your Spanner database ID
GCS_DIRECTORY : the Cloud Storage path that
the Avro files are
imported from
Template source code
Java
/*
* Copyright (C) 2018 Google LLC
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
package com.google.cloud.teleport.spanner ;
import com.google.cloud.spanner. Options . RpcPriority ;
import com.google.cloud.spanner. SpannerOptions ;
import com.google.cloud.teleport.metadata.Template ;
import com.google.cloud.teleport.metadata.TemplateCategory ;
import com.google.cloud.teleport.metadata.TemplateCreationParameter ;
import com.google.cloud.teleport.metadata.TemplateParameter ;
import com.google.cloud.teleport.metadata.TemplateParameter.TemplateEnumOption ;
import com.google.cloud.teleport.spanner.ExportPipeline.ExportPipelineOptions ;
import com.google.cloud.teleport.spanner.spannerio.SpannerConfig ;
import org.apache.beam.runners.dataflow. options .DataflowPipelineOptions ;
import org.apache.beam.sdk.Pipeline ;
import org.apache.beam.sdk.PipelineResult ;
import org.apache.beam.sdk. options .Default ;
import org.apache.beam.sdk. options .Description ;
import org.apache.beam.sdk. options .PipelineOptions ;
import org.apache.beam.sdk. options .PipelineOptionsFactory ;
import org.apache.beam.sdk. options .ValueProvider ;
import org.apache.beam.sdk. options .ValueProvider.NestedValueProvider ;
import org.apache.beam.sdk.transforms.SerializableFunction ;
/**
* Dataflow template that exports a Cloud Spanner database to Avro files in GCS.
*
* <p>Check out <a
* href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v1/README_Cloud_Spanner_to_GCS_Avro.md">README</a>
* for instructions on how to use or modify this template.
*/
@Template (
name = "Cloud_Spanner_to_GCS_Avro" ,
category = TemplateCategory . BATCH ,
displayName = "Cloud Spanner to Avro Files on Cloud Storage" ,
description = {
"The Cloud Spanner to Avro Files on Cloud Storage template is a batch pipeline that exports a whole Cloud Spanner database to Cloud Storage in Avro format. "
+ "Exporting a Cloud Spanner database creates a folder in the bucket you select. The folder contains:\n"
+ "- A `spanner-export.json` file.\n"
+ "- A `TableName-manifest.json` file for each table in the database you exported.\n"
+ "- One or more `TableName.avro-#####-of-#####` files.\n" ,
"For example, exporting a database with two tables, Singers and Albums, creates the following file set:\n"
+ "- `Albums-manifest.json`\n"
+ "- `Albums.avro-00000-of-00002`\n"
+ "- `Albums.avro-00001-of-00002`\n"
+ "- `Singers-manifest.json`\n"
+ "- `Singers.avro-00000-of-00003`\n"
+ "- `Singers.avro-00001-of-00003`\n"
+ "- `Singers.avro-00002-of-00003`\n"
+ "- `spanner-export.json`"
},
optionsClass = ExportPipelineOptions . class ,
documentation =
"https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro" ,
contactInformation = "https://cloud.google.com/support" ,
requirements = {
"The Cloud Spanner database must exist." ,
"The output Cloud Storage bucket must exist." ,
"In addition to the Identity and Access Management (IAM) roles necessary to run Dataflow jobs, you must also have the <a href=\"https://cloud.google.com/spanner/docs/export#iam\">appropriate IAM roles</a> for reading your Cloud Spanner data and writing to your Cloud Storage bucket."
})
public class ExportPipeline {
/** Options for Export pipeline. */
public interface ExportPipelineOptions extends PipelineOptions {
@TemplateParameter.Text (
order = 1 ,
groupName = "Source" ,
regexes = { "[a-z][a-z0-9\\-]*[a-z0-9]" },
description = "Cloud Spanner instance ID" ,
helpText = "The instance ID of the Spanner database that you want to export." )
ValueProvider<String> getInstanceId ();
void setInstanceId ( ValueProvider<String> value );
@TemplateParameter.Text (
order = 2 ,
groupName = "Source" ,
regexes = { "[a-z][a-z0-9_\\-]*[a-z0-9]" },
description = "Cloud Spanner database ID" ,
helpText = "The database ID of the Spanner database that you want to export." )
ValueProvider<String> getDatabaseId ();
void setDatabaseId ( ValueProvider<String> value );
@TemplateParameter.GcsWriteFolder (
order = 3 ,
groupName = "Target" ,
description = "Cloud Storage output directory" ,
helpText =
"The Cloud Storage path to export Avro files to. The export job creates a new directory under this path that contains the exported files." ,
example = "gs://your-bucket/your-path" )
ValueProvider<String> getOutputDir ();
void setOutputDir ( ValueProvider<String> value );
@TemplateParameter.GcsWriteFolder (
order = 4 ,
optional = true ,
description = "Cloud Storage temp directory for storing Avro files" ,
helpText = "The Cloud Storage path where temporary Avro files are written." )
ValueProvider<String> getAvroTempDirectory ();
void setAvroTempDirectory ( ValueProvider<String> value );
@TemplateCreationParameter ( value = "" )
@Description ( "Test dataflow job identifier for Beam Direct Runner" )
@Default.String ( value = "" )
ValueProvider<String> getTestJobId ();
void setTestJobId ( ValueProvider<String> jobId );
@TemplateParameter.Text (
order = 6 ,
groupName = "Source" ,
optional = true ,
description = "Cloud Spanner Endpoint to call" ,
helpText = "The Cloud Spanner endpoint to call in the template. Only used for testing." ,
example = "https://batch-spanner.googleapis.com" )
@Default.String ( "https://batch-spanner.googleapis.com" )
ValueProvider<String> getSpannerHost ();
void setSpannerHost ( ValueProvider<String> value );
@TemplateCreationParameter ( value = "false" )
@Description ( "If true, wait for job finish" )
@Default.Boolean ( true )
boolean getWaitUntilFinish ();
void setWaitUntilFinish ( boolean value );
@TemplateParameter.Text (
order = 7 ,
optional = true ,
regexes = {
"^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):(([0-9]{2})(\\.[0-9]+)?)Z$"
},
description = "Snapshot time" ,
helpText =
"The timestamp that corresponds to the version of the Spanner database that you want to read. The timestamp must be specified by using RFC 3339 UTC `Zulu` format. The timestamp must be in the past, and maximum timestamp staleness applies." ,
example = "1990-12-31T23:59:60Z" )
@Default.String ( value = "" )
ValueProvider<String> getSnapshotTime ();
void setSnapshotTime ( ValueProvider<String> value );
@TemplateParameter.ProjectId (
order = 8 ,
groupName = "Source" ,
optional = true ,
description = "Cloud Spanner Project Id" ,
helpText =
"The ID of the Google Cloud project that contains the Spanner database that you want to read data from." )
ValueProvider<String> getSpannerProjectId ();
void setSpannerProjectId ( ValueProvider<String> value );
@TemplateParameter.Boolean (
order = 9 ,
optional = true ,
description = "Export Timestamps as Timestamp-micros type" ,
helpText =
"If `true`, timestamps are exported as a `long` type with `timestamp-micros` logical type. By default, this parameter is set to `false` and timestamps are exported as ISO-8601 strings at nanosecond precision." )
@Default.Boolean ( false )
ValueProvider<Boolean> getShouldExportTimestampAsLogicalType ();
void setShouldExportTimestampAsLogicalType ( ValueProvider<Boolean> value );
@TemplateParameter.Text (
order = 10 ,
groupName = "Source" ,
optional = true ,
regexes = { "^[a-zA-Z0-9_\\.]+(,[a-zA-Z0-9_\\.]+)*$" },
description = "Cloud Spanner table name(s)." ,
helpText =
"A comma-separated list of tables specifying the subset of the Spanner database to export. If you set this parameter, you must either include all of the related tables (parent tables and foreign key referenced tables) or set the `shouldExportRelatedTables` parameter to `true`."
+ "If the table is in named schema, please use fully qualified name. For example: `sch1.foo` in which `sch1` is the schema name and `foo` is the table name." )
@Default.String ( value = "" )
ValueProvider<String> getTableNames ();
void setTableNames ( ValueProvider<String> value );
@TemplateParameter.Boolean (
order = 11 ,
groupName = "Source" ,
optional = true ,
description = "Export necessary Related Spanner tables." ,
helpText =
"Whether to include related tables. This parameter is used in conjunction with the `tableNames` parameter." )
@Default.Boolean ( false )
ValueProvider<Boolean> getShouldExportRelatedTables ();
void setShouldExportRelatedTables ( ValueProvider<Boolean> value );
@TemplateParameter.Enum (
order = 12 ,
groupName = "Source" ,
enumOptions = {
@TemplateEnumOption ( "LOW" ),
@TemplateEnumOption ( "MEDIUM" ),
@TemplateEnumOption ( "HIGH" )
},
optional = true ,
description = "Priority for Spanner RPC invocations" ,
helpText =
"The request priority for Spanner calls. Possible values are `HIGH`, `MEDIUM`, and `LOW`. The default value is `MEDIUM`." )
ValueProvider<RpcPriority> getSpannerPriority ();
void setSpannerPriority ( ValueProvider<RpcPriority> value );
@TemplateParameter.Boolean (
order = 13 ,
groupName = "Source" ,
optional = true ,
description = "Use independent compute resource (Spanner DataBoost)." ,
helpText =
"Set to `true` to use the compute resources of Spanner Data Boost to run the job with near-zero impact on Spanner OLTP workflows. When set to `true`, you also need the `spanner.databases.useDataBoost` IAM permission. For more information, see the Data Boost overview (https://cloud.google.com/spanner/docs/databoost/databoost-overview)." )
@Default.Boolean ( false )
ValueProvider<Boolean> getDataBoostEnabled ();
void setDataBoostEnabled ( ValueProvider<Boolean> value );
}
/**
* Runs a pipeline to export a Cloud Spanner database to Avro files.
*
* @param args arguments to the pipeline
*/
public static void main ( String [] args ) {
ExportPipelineOptions options =
PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( ExportPipelineOptions . class );
Pipeline p = Pipeline . create ( options );
SpannerConfig spannerConfig =
SpannerConfig . create ()
// Temporary fix explicitly setting SpannerConfig.projectId to the default project
// if spannerProjectId is not provided as a parameter. Required as of Beam 2.38,
// which no longer accepts null label values on metrics, and SpannerIO#setup() has
// a bug resulting in the label value being set to the original parameter value,
// with no fallback to the default project.
// TODO: remove NestedValueProvider when this is fixed in Beam.
. withProjectId (
NestedValueProvider . of (
options . getSpannerProjectId (),
( SerializableFunction<String , String > )
input - > input != null ? input : SpannerOptions . getDefaultProjectId ()))
. withHost ( options . getSpannerHost ())
. withInstanceId ( options . getInstanceId ())
. withDatabaseId ( options . getDatabaseId ())
. withRpcPriority ( options . getSpannerPriority ())
. withDataBoostEnabled ( options . getDataBoostEnabled ());
p . begin ()
. apply (
"Run Export" ,
new ExportTransform (
spannerConfig ,
options . getOutputDir (),
options . getTestJobId (),
options . getSnapshotTime (),
options . getTableNames (),
options . getShouldExportRelatedTables (),
options . getShouldExportTimestampAsLogicalType (),
options . getAvroTempDirectory ()));
PipelineResult result = p . run ();
if ( options . getWaitUntilFinish ()
&&
/* Only if template location is null, there is a dataflow job to wait for. Else it's
* template generation which doesn't start a dataflow job.
*/
options . as ( DataflowPipelineOptions . class ). getTemplateLocation () == null ) {
result . waitUntilFinish ();
}
}
}
What's next
Learn about Dataflow templates .
See the list of Google-provided templates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-16 UTC."],[],[]]
