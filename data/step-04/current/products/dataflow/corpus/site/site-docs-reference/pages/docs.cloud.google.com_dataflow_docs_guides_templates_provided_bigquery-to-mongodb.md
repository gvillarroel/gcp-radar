---
title: "BigQuery to MongoDB template \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-mongodb
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-mongodb
  title: "BigQuery to MongoDB template \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
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
BigQuery to MongoDB template
Stay organized with collections
Save and categorize content based on your preferences.
Beta
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The BigQuery to MongoDB template is a batch pipeline that reads rows from a BigQuery and writes them to MongoDB as documents.
Currently each row is stored as a document.
Pipeline requirements
The source BigQuery table must exist.
The target MongoDB instance should be accessible from the Dataflow worker machines.
Template parameters
Required parameters
mongoDbUri : The MongoDB connection URI in the format mongodb+srv://:@ .
database : Database in MongoDB to store the collection. For example, my-db .
collection : The name of the collection in the MongoDB database. For example, my-collection .
inputTableSpec : The BigQuery table to read from. For example, bigquery-project:dataset.input_table .
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
the BigQuery to MongoDB template.
In the provided parameter fields, enter your parameter values.
Click Run job .
gcloud
Note: To use the Google Cloud CLI to run flex
templates, you must have Google Cloud CLI version
284.0.0
or later.
In your shell or terminal, run the template:
gcloud dataflow flex-template run JOB_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
--template-file-gcs-location = gs://dataflow-templates- REGION_NAME / VERSION /flex/BigQuery_to_MongoDB \
--parameters \
inputTableSpec = INPUT_TABLE_SPEC , \
mongoDbUri = MONGO_DB_URI , \
database = DATABASE , \
collection = COLLECTION
Replace the following:
PROJECT_ID :
the Google Cloud project ID where you want to run the Dataflow job
JOB_NAME :
a unique job name of your choice
REGION_NAME :
the region where you want to
deploy your Dataflow job—for example, us-central1
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
INPUT_TABLE_SPEC : your source BigQuery table name.
MONGO_DB_URI : your MongoDB URI.
DATABASE : your MongoDB database.
COLLECTION : your MongoDB collection.
API
To run the template using the REST API, send an HTTP POST request. For more information on the
API and its authorization scopes, see
projects.templates.launch .
POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT_ID /locations/ LOCATION /flexTemplates:launch
{
"launch_parameter" : {
"jobName" : " JOB_NAME " ,
"parameters" : {
"inputTableSpec" : " INPUT_TABLE_SPEC " ,
"mongoDbUri" : " MONGO_DB_URI " ,
"database" : " DATABASE " ,
"collection" : " COLLECTION "
},
"containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/BigQuery_to_MongoDB" ,
}
}
Replace the following:
PROJECT_ID :
the Google Cloud project ID where you want to run the Dataflow job
JOB_NAME :
a unique job name of your choice
LOCATION :
the region where you want to
deploy your Dataflow job—for example, us-central1
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
INPUT_TABLE_SPEC : your source BigQuery table name.
MONGO_DB_URI : your MongoDB URI.
DATABASE : your MongoDB database.
COLLECTION : your MongoDB collection.
Template source code
Java
/*
* Copyright (C) 2019 Google LLC
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
package com.google.cloud.teleport.v2.mongodb.templates ;
import com.google.api.services.bigquery.model.TableRow ;
import com.google.cloud.teleport.metadata.Template ;
import com.google.cloud.teleport.metadata.TemplateCategory ;
import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ;
import com.google.cloud.teleport.v2.mongodb.options.BigQueryToMongoDbOptions.BigQueryReadOptions ;
import com.google.cloud.teleport.v2.mongodb.options.BigQueryToMongoDbOptions.MongoDbOptions ;
import com.google.cloud.teleport.v2.mongodb.templates.BigQueryToMongoDb.Options ;
import org.apache.beam.sdk.Pipeline ;
import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ;
import org.apache.beam.sdk.io.mongodb.MongoDbIO ;
import org.apache.beam.sdk.options.PipelineOptions ;
import org.apache.beam.sdk.options.PipelineOptionsFactory ;
import org.apache.beam.sdk.transforms.DoFn ;
import org.apache.beam.sdk.transforms.ParDo ;
import org.bson.Document ;
/**
* The {@link BigQueryToMongoDb} pipeline is a batch pipeline which reads data from BigQuery and
* outputs the resulting records to MongoDB.
*
* <p>Check out <a
* href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-mongodb/README_BigQuery_to_MongoDB.md">README</a>
* for instructions on how to use or modify this template.
*/
@Template (
name = "BigQuery_to_MongoDB" ,
category = TemplateCategory . BATCH ,
displayName = "BigQuery to MongoDB" ,
description =
"The BigQuery to MongoDB template is a batch pipeline that reads rows from a BigQuery and writes them to MongoDB as documents. "
+ "Currently each row is stored as a document." ,
optionsClass = Options . class ,
flexContainerName = "googlecloud-to-mongodb" ,
documentation =
"https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-mongodb" ,
contactInformation = "https://cloud.google.com/support" ,
preview = true ,
requirements = {
"The source BigQuery table must exist." ,
"The target MongoDB instance should be accessible from the Dataflow worker machines."
})
public class BigQueryToMongoDb {
/**
* Options supported by {@link BigQueryToMongoDb}
*
* <p>Inherits standard configuration options.
*/
public interface Options extends PipelineOptions , MongoDbOptions , BigQueryReadOptions {}
private static class ParseAsDocumentsFn extends DoFn<String , Document > {
@ProcessElement
public void processElement ( ProcessContext context ) {
context . output ( Document . parse ( context . element ()));
}
}
public static void main ( String [] args ) {
UncaughtExceptionLogger . register ();
Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class );
run ( options );
}
public static boolean run ( Options options ) {
Pipeline pipeline = Pipeline . create ( options );
pipeline
. apply ( BigQueryIO . readTableRows (). withoutValidation (). from ( options . getInputTableSpec ()))
. apply (
"bigQueryDataset" ,
ParDo . of (
new DoFn<TableRow , Document > () {
@ProcessElement
public void process ( ProcessContext c ) {
Document doc = new Document ();
TableRow row = c . element ();
row . forEach (
( key , value ) - > {
if ( ! key . equals ( "_id" )) {
doc . append ( key , value );
}
});
c . output ( doc );
}
}))
. apply (
MongoDbIO . write ()
. withUri ( options . getMongoDbUri ())
. withDatabase ( options . getDatabase ())
. withCollection ( options . getCollection ()));
pipeline . run ();
return true ;
}
}
What's next
Learn about Dataflow templates .
See the list of Google-provided templates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-12 UTC."],[],[]]
