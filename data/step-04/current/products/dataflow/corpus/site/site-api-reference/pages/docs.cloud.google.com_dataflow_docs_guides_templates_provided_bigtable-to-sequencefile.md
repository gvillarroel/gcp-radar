---
title: "Bigtable to Cloud Storage SequenceFile template \_|\_ Cloud Dataflow \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-sequencefile
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-sequencefile
  title: "Bigtable to Cloud Storage SequenceFile template \_|\_ Cloud Dataflow \_\
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
Bigtable to Cloud Storage SequenceFile template
Stay organized with collections
Save and categorize content based on your preferences.
The Bigtable to Cloud Storage SequenceFile template is a pipeline that reads
data from a Bigtable table and writes the data to a Cloud Storage bucket
in SequenceFile format. You can use the template to copy data from Bigtable to
Cloud Storage.
Pipeline requirements
The Bigtable table must exist.
The output Cloud Storage bucket must exist before running the pipeline.
Template parameters
Required parameters
bigtableProject : The ID of the Google Cloud project that contains the Bigtable instance that you want to read data from.
bigtableInstanceId : The ID of the Bigtable instance that contains the table.
bigtableTableId : The ID of the Bigtable table to export.
destinationPath : The Cloud Storage path where data is written. For example, gs://your-bucket/your-path/ .
filenamePrefix : The prefix of the SequenceFile filename. For example, output- .
Optional parameters
bigtableAppProfileId : The ID of the Bigtable application profile to use for the export. If you don't specify an app profile, Bigtable uses the instance's default app profile: https://cloud.google.com/bigtable/docs/app-profiles#default-app-profile .
bigtableStartRow : The row where to start the export from, defaults to the first row.
bigtableStopRow : The row where to stop the export, defaults to the last row.
bigtableMaxVersions : Maximum number of cell versions. Defaults to: 2147483647.
bigtableFilter : Filter string. See: http://hbase.apache.org/book.html#thrift . Defaults to empty.
bigtableReadRpcTimeoutMs : Bigtable read RPC timeout in milliseconds.
bigtableReadRpcAttemptTimeoutMs : Bigtable read RPC attempt timeout in milliseconds.
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
the Cloud Bigtable to SequenceFile Files on Cloud Storage template .
In the provided parameter fields, enter your parameter values.
Click Run job .
gcloud
Note: To use the Google Cloud CLI to run classic
templates, you must have Google Cloud CLI version
138.0.0
or later.
In your shell or terminal, run the template:
gcloud dataflow jobs run JOB_NAME \
--gcs-location gs://dataflow-templates- REGION_NAME / VERSION /Cloud_Bigtable_to_GCS_SequenceFile \
--region REGION_NAME \
--parameters \
bigtableProject = BIGTABLE_PROJECT_ID , \
bigtableInstanceId = INSTANCE_ID , \
bigtableTableId = TABLE_ID , \
bigtableAppProfileId = APPLICATION_PROFILE_ID , \
destinationPath = DESTINATION_PATH , \
filenamePrefix = FILENAME_PREFIX
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
BIGTABLE_PROJECT_ID : the ID of the Google Cloud project of the Bigtable instance that you want to read data from
INSTANCE_ID : the ID of the Bigtable instance that contains the table
TABLE_ID : the ID of the Bigtable table to export
APPLICATION_PROFILE_ID : the ID of the Bigtable application profile to be used for the export
DESTINATION_PATH : the Cloud Storage path where data is written, for example, gs://mybucket/somefolder
FILENAME_PREFIX : the prefix of the SequenceFile filename, for example, output-
API
To run the template using the REST API, send an HTTP POST request. For more information on the
API and its authorization scopes, see
projects.templates.launch .
POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT_ID /locations/ LOCATION /templates:launch?gcsPath=gs://dataflow-templates- LOCATION / VERSION /Cloud_Bigtable_to_GCS_SequenceFile
{
"jobName" : " JOB_NAME " ,
"parameters" : {
"bigtableProject" : " BIGTABLE_PROJECT_ID " ,
"bigtableInstanceId" : " INSTANCE_ID " ,
"bigtableTableId" : " TABLE_ID " ,
"bigtableAppProfileId" : " APPLICATION_PROFILE_ID " ,
"destinationPath" : " DESTINATION_PATH " ,
"filenamePrefix" : " FILENAME_PREFIX " ,
},
"environment" : { "zone" : "us-central1-f" }
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
BIGTABLE_PROJECT_ID : the ID of the Google Cloud project of the Bigtable instance that you want to read data from
INSTANCE_ID : the ID of the Bigtable instance that contains the table
TABLE_ID : the ID of the Bigtable table to export
APPLICATION_PROFILE_ID : the ID of the Bigtable application profile to be used for the export
DESTINATION_PATH : the Cloud Storage path where data is written, for example, gs://mybucket/somefolder
FILENAME_PREFIX : the prefix of the SequenceFile filename, for example, output-
Template source code
Java
This template's source code is in the GoogleCloudPlatform/cloud-bigtable-client repository on GitHub.
What's next
Learn about Dataflow templates .
See the list of Google-provided templates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-16 UTC."],[],[]]
