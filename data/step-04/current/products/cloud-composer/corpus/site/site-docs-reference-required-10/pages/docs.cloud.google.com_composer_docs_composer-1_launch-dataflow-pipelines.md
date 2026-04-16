---
title: "Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/cross-project-environment-monitoring-terraform
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines
  title: "Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Launch Dataflow pipelines with Cloud Composer
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to use the DataflowTemplateOperator to launch
Dataflow pipelines from
Cloud Composer.
The Cloud Storage Text to BigQuery pipeline
is a batch pipeline that allows you to upload text files stored in
Cloud Storage, transform them using a JavaScript User Defined
Function (UDF) that you provide, and output the results to
BigQuery.
Overview
Before kicking off the workflow, you will create the following entities:
An empty BigQuery table from an empty dataset that
will hold the following columns of information: location ,
average_temperature , month and, optionally, inches_of_rain ,
is_current , and latest_measurement .
A JSON file that will normalize the data from the .txt
file into the correct format for the BigQuery table's
schema. The JSON object will have an array of BigQuery Schema , where
each object will contain a column name, type of input, and whether or
not it is a required field.
An input .txt file that will hold the data that will be batch uploaded
to the BigQuery table.
A User Defined Function written in JavaScript that will transform
each line of the .txt file into the relevant variables for our table.
An Airflow DAG file that will point to the location of these
files.
Next, you will upload the .txt file, .js UDF file, and .json schema
file to a Cloud Storage bucket. You'll also upload the DAG to
your Cloud Composer environment.
After the DAG is uploaded, Airflow will run a task from it. This task will
launch a Dataflow pipeline that will apply the
User-Defined Function to the .txt file and format it according to the
JSON schema.
Finally, the data will get uploaded to the BigQuery table
that you created earlier.
Before you begin
This guide requires familiarity with JavaScript to write
the User Defined Function.
This guide assumes that you already have a Cloud Composer
environment. See Create environment to create one. You can
use any version of Cloud Composer with this guide.
Enable the Cloud Composer, Dataflow, Cloud Storage, BigQuery APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following permissions:
Cloud Composer roles : create an environment (if
you don't have one), manage objects in the environment's bucket, Run
DAGs and access the Airflow UI.
Cloud Storage roles : Create a bucket and manage
objects in it.
BigQuery roles : Create a dataset and a table,
modify data in the table, modify table schema and metadata.
Dataflow roles : View Dataflow jobs.
Make sure that the service account of your environment has permissions to
create Dataflow jobs, access the Cloud Storage bucket, and
read and update data for the table in BigQuery.
Create an empty BigQuery table with a schema definition
Create a BigQuery table with a schema definition. You
will use this schema definition later in this guide. This
BigQuery table will hold the results of the batch upload.
Important: Your BigQuery resources and
Cloud Storage bucket must be located in the same
Compute Engine region.
To create an empty table with a schema definition:
Console
In the Google Cloud console, go to the BigQuery
page:
Go to BigQuery
In the navigation panel, in the Resources section, expand your
project.
In the details panel, click Create dataset .
In the Create dataset page, in the Dataset ID section, name your
Dataset average_weather . Leave all other fields in their default
state.
Click Create dataset .
Go back to the navigation panel, in the Resources section, expand
your project. Then, click on the average_weather dataset.
In the details panel, click Create table .
On the Create table page, in the Source section, select
Empty table.
On the Create table page, in the Destination section:
For Dataset name , choose the average_weather dataset.
In the Table name field, enter the name average_weather .
Verify that Table type is set to Native table .
In the Schema section, enter the schema
definition. You can use one of the following approaches:
Enter schema information manually by enabling Edit as text and
entering the table schema as a JSON array. Type in the following
fields:
[
{
"name" : "location" ,
"type" : "GEOGRAPHY" ,
"mode" : "REQUIRED"
},
{
"name" : "average_temperature" ,
"type" : "INTEGER" ,
"mode" : "REQUIRED"
},
{
"name" : "month" ,
"type" : "STRING" ,
"mode" : "REQUIRED"
},
{
"name" : "inches_of_rain" ,
"type" : "NUMERIC"
},
{
"name" : "is_current" ,
"type" : "BOOLEAN"
},
{
"name" : "latest_measurement" ,
"type" : "DATE"
}
]
Use Add field to manually input the schema:
For Partition and cluster settings leave the default
value, No partitioning .
In the Advanced options section, for Encryption leave the
default value, Google-owned and managed key .
Click Create table .
Note: When you create an empty table using the Google Cloud console,
you cannot add a label, description, or expiration time. You can add these
optional properties when you create a table using the CLI or API. After you
create a table in the Google Cloud console, you can add expiration
time, description, and labels.
bq
Use the bq mk command to create an empty dataset and a table in this
dataset.
Run the following command to create a dataset of average global weather:
bq --location = LOCATION mk \
--dataset PROJECT_ID :average_weather
Replace the following:
LOCATION : the region where the environment is located.
PROJECT_ID : the Project ID .
Run the following command to create an empty table in this dataset with
the schema definition:
bq mk --table \
PROJECT_ID :average_weather.average_weather \
location:GEOGRAPHY,average_temperature:INTEGER,month:STRING,inches_of_rain:NUMERIC,is_current:BOOLEAN,latest_measurement:DATE
After the table is created, you can update the
table's expiration, description, and labels. You can also
modify the schema definition .
Python
Save this code as
dataflowtemplateoperator_create_dataset_and_table_helper.py
and update the variables in it to reflect your project and location, then
run it with the following command:
python dataflowtemplateoperator_create_dataset_and_table_helper.py
Python
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# Make sure to follow the quickstart setup instructions beforehand.
# See instructions here:
# https://cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries
# Before running the sample, be sure to install the bigquery library
# in your local environment by running pip install google.cloud.bigquery
from google.cloud import bigquery
# TODO(developer): Replace with your values
project = "your-project" # Your GCP Project
location = "US" # the location where you want your BigQuery data to reside. For more info on possible locations see https://cloud.google.com/bigquery/docs/locations
dataset_name = "average_weather"
def create_dataset_and_table ( project , location , dataset_name ):
# Construct a BigQuery client object.
client = bigquery . Client ( project )
dataset_id = f " { project } . { dataset_name } "
# Construct a full Dataset object to send to the API.
dataset = bigquery . Dataset ( dataset_id )
# Set the location to your desired location for the dataset.
# For more information, see this link:
# https://cloud.google.com/bigquery/docs/locations
dataset . location = location
# Send the dataset to the API for creation.
# Raises google.api_core.exceptions.Conflict if the Dataset already
# exists within the project.
dataset = client . create_dataset ( dataset ) # Make an API request.
print ( f "Created dataset { client . project } . { dataset . dataset_id } " )
# Create a table from this dataset.
table_id = f " { client . project } . { dataset_name } .average_weather"
schema = [
bigquery . SchemaField ( "location" , "GEOGRAPHY" , mode = "REQUIRED" ),
bigquery . SchemaField ( "average_temperature" , "INTEGER" , mode = "REQUIRED" ),
bigquery . SchemaField ( "month" , "STRING" , mode = "REQUIRED" ),
bigquery . SchemaField ( "inches_of_rain" , "NUMERIC" , mode = "NULLABLE" ),
bigquery . SchemaField ( "is_current" , "BOOLEAN" , mode = "NULLABLE" ),
bigquery . SchemaField ( "latest_measurement" , "DATE" , mode = "NULLABLE" ),
]
table = bigquery . Table ( table_id , schema = schema )
table = client . create_table ( table ) # Make an API request.
print ( f "Created table { table . project } . { table . dataset_id } . { table . table_id } " )
Create a Cloud Storage bucket
Important: Your BigQuery resources and the
Cloud Storage bucket must be located in the same
Compute Engine region.
Create a bucket to hold all of the files needed for the workflow. The DAG you
create later in this guide will reference the files that you upload to this
storage bucket. To create a new storage bucket:
Console
Open the Cloud Storage in the Google Cloud console.
Go to Cloud Storage
Click Create Bucket to open the bucket creation form.
Enter your bucket information and click Continue to complete each step:
Specify a globally unique Name for your bucket. This guide uses
bucketName as an example.
Select Region for the location type. Next, select a
Location where the bucket data will be stored.
Select Standard as your default storage class for your data.
Select Uniform access control to access your objects.
Click Done .
gcloud
Use the gcloud storage buckets create command:
gcloud storage buckets create gs:// bucketName /
Replace the following:
bucketName : the name of the bucket that you created earlier in this
guide.
Code samples
C#
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class CreateBucketSample
{
public Bucket CreateBucket (
string projectId = "your-project-id" ,
string bucketName = "your-unique-bucket-name" )
{
var storage = StorageClient . Create ();
var bucket = storage . CreateBucket ( projectId , bucketName );
Console . WriteLine ( $"Created {bucketName}." );
return bucket ;
}
}
Go
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"time"
"cloud.google.com/go/storage"
)
// createBucket creates a new bucket in the project.
func createBucket ( w io . Writer , projectID , bucketName string ) error {
// projectID := "my-project-id"
// bucketName := "bucket-name"
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
ctx , cancel := context . WithTimeout ( ctx , time . Second * 30 )
defer cancel ()
bucket := client . Bucket ( bucketName )
if err := bucket . Create ( ctx , projectID , nil ); err != nil {
return fmt . Errorf ( "Bucket(%q).Create: %w" , bucketName , err )
}
fmt . Fprintf ( w , "Bucket %v created\n" , bucketName )
return nil
}
Java
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.storage. Bucket ;
import com.google.cloud.storage. BucketInfo ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
public class CreateBucket {
public static void createBucket ( String projectId , String bucketName ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID to give your GCS bucket
// String bucketName = "your-unique-bucket-name";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Bucket bucket = storage . create ( BucketInfo . newBuilder ( bucketName ). build ());
System . out . println ( "Created bucket " + bucket . getName ());
}
}
Python
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import storage
def create_bucket ( bucket_name ):
"""Creates a new bucket."""
# bucket_name = "your-new-bucket-name"
storage_client = storage . Client ()
bucket = storage_client . create_bucket ( bucket_name )
print ( f "Bucket { bucket . name } created" )
Ruby
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def create_bucket bucket_name :
# The ID to give your GCS bucket
# bucket_name = "your-unique-bucket-name"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . create_bucket bucket_name
puts "Created bucket: #{ bucket . name } "
end
Create a JSON-formatted BigQuery schema for your output table
Create a JSON formatted BigQuery schema file that matches the
output table you created earlier. Note that the field names, types, and modes
must match the ones defined earlier in your BigQuery table
schema. This file will normalize the data from your .txt file into a format
compatible with your BigQuery schema. Name this file
jsonSchema.json .
{
"BigQuery Schema" : [
{
"name" : "location" ,
"type" : "GEOGRAPHY" ,
"mode" : "REQUIRED"
} ,
{
"name" : "average_temperature" ,
"type" : "INTEGER" ,
"mode" : "REQUIRED"
} ,
{
"name" : "month" ,
"type" : "STRING" ,
"mode" : "REQUIRED"
} ,
{
"name" : "inches_of_rain" ,
"type" : "NUMERIC"
} ,
{
"name" : "is_current" ,
"type" : "BOOLEAN"
} ,
{
"name" : "latest_measurement" ,
"type" : "DATE"
}]
}
Create a JavaScript file to format your data
In this file, you will define your UDF (User Defined Function) that supplies
the logic to transform the lines of text in your input file. Note that this
function takes each line of text in your input file as its own argument, so
the function will run once for each line of your input file. Name this file
transformCSVtoJSON.js .
function transformCSVtoJSON ( line ) {
var values = line . split ( ',' );
var properties = [
'location' ,
'average_temperature' ,
'month' ,
'inches_of_rain' ,
'is_current' ,
'latest_measurement' ,
];
var weatherInCity = {};
for ( var count = 0 ; count < values . length ; count ++ ) {
if ( values [ count ] !== 'null' ) {
weatherInCity [ properties [ count ]] = values [ count ];
}
}
return JSON . stringify ( weatherInCity );
}
Create your input file
This file will hold the information you want to upload to your
BigQuery table. Copy this file locally and name it
inputFile.txt .
POINT(40.7128 74.006),45,'July',null,true,2020-02-16
POINT(41.8781 87.6298),23,'October',13,false,2015-02-13
POINT(48.8566 2.3522),80,'December',null,true,null
POINT(6.5244 3.3792),15,'March',14,true,null
Caution: Make sure that there are no blank lines at the end of your
inputFile.txt file to avoid a Dataflow error.
Upload your files to your bucket
Upload the following files to the Cloud Storage bucket that you created
earlier:
JSON-formatted BigQuery schema ( .json )
JavaScript User Defined Function ( transformCSVtoJSON.js )
The input file of the text you'd like to process ( .txt )
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click on your bucket.
In the Objects tab for the bucket, do one of the following:
Drag and drop the desired files from your desktop or file manager
to the main pane in the Google Cloud console.
Click the Upload Files button, select the files you want to
upload in the dialog that appears, and click Open .
gcloud
Run the gcloud storage cp command:
gcloud storage cp OBJECT_LOCATION gs:// bucketName
Replace the following:
bucketName : the name of the bucket that you created earlier in
this guide.
OBJECT_LOCATION : the local path to your object. For example,
Desktop/transformCSVtoJSON.js .
Code samples
Python
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import storage
def upload_blob ( bucket_name , source_file_name , destination_blob_name ):
"""Uploads a file to the bucket."""
# The ID of your GCS bucket
# bucket_name = "your-bucket-name"
# The path to your file to upload
# source_file_name = "local/path/to/file"
# The ID of your GCS object
# destination_blob_name = "storage-object-name"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
blob = bucket . blob ( destination_blob_name )
# Optional: set a generation-match precondition to avoid potential race conditions
# and data corruptions. The request to upload is aborted if the object's
# generation number does not match your precondition. For a destination
# object that does not yet exist, set the if_generation_match precondition to 0.
# If the destination object already exists in your bucket, set instead a
# generation-match precondition using its generation number.
generation_match_precondition = 0
blob . upload_from_filename ( source_file_name , if_generation_match = generation_match_precondition )
print (
f "File { source_file_name } uploaded to { destination_blob_name } ."
)
Ruby
To authenticate to Cloud Composer, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def upload_file bucket_name :, local_file_path :, file_name : nil
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
# The path to your file to upload
# local_file_path = "/local/path/to/file.txt"
# The ID of your GCS object
# file_name = "your-file-name"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name , skip_lookup : true
file = bucket . create_file local_file_path , file_name
puts "Uploaded #{ local_file_path } as #{ file . name } in bucket #{ bucket_name } "
end
Configure DataflowTemplateOperator
Before running the DAG,
set the following Airflow variables .
Airflow variable
Value
project_id
The Project ID . Example: example-project .
gce_zone
Compute Engine zone where the Dataflow cluster must be created. Example: us-central1-a . For more information about valid zones, see Regions and zones .
bucket_path
The location of the Cloud Storage bucket that you created earlier. Example: gs://example-bucket .
Now you will reference the files you created earlier to create a DAG that kicks
off the Dataflow workflow. Copy this DAG and save it locally
as composer-dataflow-dag.py .
Airflow 2
"""Example Airflow DAG that creates a Cloud Dataflow workflow which takes a
text file and adds the rows to a BigQuery table.
This DAG relies on four Airflow variables
https://airflow.apache.org/docs/apache-airflow/stable/concepts/variables.html
* project_id - Google Cloud Project ID to use for the Cloud Dataflow cluster.
* gce_zone - Google Compute Engine zone where Cloud Dataflow cluster should be
created.
For more info on zones where Dataflow is available see:
https://cloud.google.com/dataflow/docs/resources/locations
* bucket_path - Google Cloud Storage bucket where you've stored the User Defined
Function (.js), the input file (.txt), and the JSON schema (.json).
"""
import datetime
from airflow import models
from airflow.providers.google.cloud.operators.dataflow import (
DataflowTemplatedJobStartOperator ,
)
from airflow.utils.dates import days_ago
bucket_path = "{{var.value.bucket_path}}"
project_id = "{{var.value.project_id}}"
gce_zone = "{{var.value.gce_zone}}"
default_args = {
# Tell airflow to start one day ago, so that it runs as soon as you upload it
"start_date" : days_ago ( 1 ),
"dataflow_default_options" : {
"project" : project_id ,
# Set to your zone
"zone" : gce_zone ,
# This is a subfolder for storing temporary files, like the staged pipeline job.
"tempLocation" : bucket_path + "/tmp/" ,
},
}
# Define a DAG (directed acyclic graph) of tasks.
# Any task you create within the context manager is automatically added to the
# DAG object.
with models . DAG (
# The id you will see in the DAG airflow page
"composer_dataflow_dag" ,
default_args = default_args ,
# The interval with which to schedule the DAG
schedule_interval = datetime . timedelta ( days = 1 ), # Override to match your needs
) as dag :
start_template_job = DataflowTemplatedJobStartOperator (
# The task id of your job
task_id = "dataflow_operator_transform_csv_to_bq" ,
# The name of the template that you're using.
# Below is a list of all the templates you can use.
# For versions in non-production environments, use the subfolder 'latest'
# https://cloud.google.com/dataflow/docs/guides/templates/provided-batch#gcstexttobigquery
template = "gs://dataflow-templates/latest/GCS_Text_to_BigQuery" ,
# Use the link above to specify the correct parameters for your template.
parameters = {
"javascriptTextTransformFunctionName" : "transformCSVtoJSON" ,
"JSONPath" : bucket_path + "/jsonSchema.json" ,
"javascriptTextTransformGcsPath" : bucket_path + "/transformCSVtoJSON.js" ,
"inputFilePattern" : bucket_path + "/inputFile.txt" ,
"outputTable" : project_id + ":average_weather.average_weather" ,
"bigQueryLoadingTemporaryDirectory" : bucket_path + "/tmp/" ,
},
)
Airflow 1
"""Example Airflow DAG that creates a Cloud Dataflow workflow which takes a
text file and adds the rows to a BigQuery table.
This DAG relies on four Airflow variables
https://airflow.apache.org/docs/apache-airflow/stable/concepts/variables.html
* project_id - Google Cloud Project ID to use for the Cloud Dataflow cluster.
* gce_zone - Google Compute Engine zone where Cloud Dataflow cluster should be
created.
created.
Learn more about the difference between the two here:
https://cloud.google.com/compute/docs/regions-zones
* bucket_path - Google Cloud Storage bucket where you've stored the User Defined
Function (.js), the input file (.txt), and the JSON schema (.json).
"""
import datetime
from airflow import models
from airflow.contrib.operators.dataflow_operator import DataflowTemplateOperator
from airflow.utils.dates import days_ago
bucket_path = "{{var.value.bucket_path}}"
project_id = "{{var.value.project_id}}"
gce_zone = "{{var.value.gce_zone}}"
default_args = {
# Tell airflow to start one day ago, so that it runs as soon as you upload it
"start_date" : days_ago ( 1 ),
"dataflow_default_options" : {
"project" : project_id ,
# Set to your zone
"zone" : gce_zone ,
# This is a subfolder for storing temporary files, like the staged pipeline job.
"tempLocation" : bucket_path + "/tmp/" ,
},
}
# Define a DAG (directed acyclic graph) of tasks.
# Any task you create within the context manager is automatically added to the
# DAG object.
with models . DAG (
# The id you will see in the DAG airflow page
"composer_dataflow_dag" ,
default_args = default_args ,
# The interval with which to schedule the DAG
schedule_interval = datetime . timedelta ( days = 1 ), # Override to match your needs
) as dag :
start_template_job = DataflowTemplateOperator (
# The task id of your job
task_id = "dataflow_operator_transform_csv_to_bq" ,
# The name of the template that you're using.
# Below is a list of all the templates you can use.
# For versions in non-production environments, use the subfolder 'latest'
# https://cloud.google.com/dataflow/docs/guides/templates/provided-batch#gcstexttobigquery
template = "gs://dataflow-templates/latest/GCS_Text_to_BigQuery" ,
# Use the link above to specify the correct parameters for your template.
parameters = {
"javascriptTextTransformFunctionName" : "transformCSVtoJSON" ,
"JSONPath" : bucket_path + "/jsonSchema.json" ,
"javascriptTextTransformGcsPath" : bucket_path + "/transformCSVtoJSON.js" ,
"inputFilePattern" : bucket_path + "/inputFile.txt" ,
"outputTable" : project_id + ":average_weather.average_weather" ,
"bigQueryLoadingTemporaryDirectory" : bucket_path + "/tmp/" ,
},
)
Upload the DAG to Cloud Storage
Upload your DAG to the /dags folder in your environment's
bucket. Once the upload has been completed successfully, you can see it by
clicking on the DAGs Folder link on the Cloud Composer
Environments page.
View the task's status
Go to the Airflow web interface .
On the DAGs page, click the DAG name (such as composerDataflowDAG ).
On the DAGs Details page, click Graph View .
Check status:
Failed : The task has a red box around it.
You can also hold the pointer over task and look for State: Failed .
Success : The task has a green box around it.
You can also hold the pointer over the task and check for
State: Success .
After a few minutes, you can check the results in Dataflow and
BigQuery.
View your job in Dataflow
In the Google Cloud console, go to the Dataflow page.
Go to Dataflow
Your job is named dataflow_operator_transform_csv_to_bq with a unique ID
attached to the end of the name with a hyphen, like so:
Click on the name to see the job details .
View your results in BigQuery
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
You can submit queries using standard SQL. Use the following query to
see the rows that were added to your table:
SELECT * FROM projectId . average_weather . average_weather
What's next
Manage DAGs
Access Airflow UI
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
