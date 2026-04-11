---
title: "Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go
  title: "Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Dataflow pipeline using Go
This page shows you how to use the Apache Beam SDK for Go to build a program
that defines a pipeline. Then, you run the pipeline locally and on the
Dataflow service. For an introduction to the WordCount pipeline, see the
How to use WordCount in Apache Beam video.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Dataflow, Compute Engine, Cloud Logging, Cloud Storage, Google Cloud Storage JSON, and Cloud Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow compute_component logging storage_component storage_api cloudresourcemanager.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/iam.serviceAccountUser
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Dataflow, Compute Engine, Cloud Logging, Cloud Storage, Google Cloud Storage JSON, and Cloud Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow compute_component logging storage_component storage_api cloudresourcemanager.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/iam.serviceAccountUser
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Grant roles to your Compute Engine default service account. Run the following command once
for each of the following IAM roles:
roles/dataflow.admin
roles/dataflow.worker
roles/storage.objectAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE_ACCOUNT_ROLE
Replace PROJECT_ID with your project ID.
Replace PROJECT_NUMBER with your project number.
To find your project number, see Identify projects
or use the gcloud projects describe command.
Replace SERVICE_ACCOUNT_ROLE with each individual role.
Create a Cloud Storage bucket and configure it as follows:
Set the storage class to
S (Standard).
Set the storage location to the following:
US (United States).
Replace BUCKET_NAME with
a unique bucket name. Don't include sensitive information in the
bucket name because the bucket namespace is global and publicly visible.
gcloud storage buckets create gs:// BUCKET_NAME --default-storage-class STANDARD --location US
Copy the Google Cloud project ID and the Cloud Storage bucket name.
You need these values later in this quickstart.
Set up your development environment
The Apache Beam SDK is an open source programming model for data pipelines.
You define a pipeline with an Apache Beam program and then choose a runner,
such as Dataflow, to run your pipeline.
We recommend that you use the latest version of Go when working
with the Apache Beam SDK for Go. If you don't
have the latest version of Go installed, use Go's
Download and install guide to download
and install Go for your specific operating system.
To verify the version of Go that you have installed, run the following command
in your local terminal:
go version
Run the Beam wordcount example
The Apache Beam SDK for Go includes a
wordcount pipeline example .
The wordcount example does the following:
Reads a text file as input. By default, it reads a text file located in a
Cloud Storage bucket with the resource name
gs://dataflow-samples/shakespeare/kinglear.txt .
Parses each line into words.
Performs a frequency count on the tokenized words.
To run the latest version of the Beam wordcount example on your local machine,
perform the following steps:
Use the git clone command to clone the apache/beam GitHub repository:
git clone https://github.com/apache/beam.git
Switch to the beam/sdks/go directory:
cd beam/sdks/go
Use the following command to run the pipeline:
go run examples/wordcount/wordcount.go \
--input gs://dataflow-samples/shakespeare/kinglear.txt \
--output outputs
The input flag specifies the file to read, and the output flag specifies
the filename for the frequency count output.
After the pipeline completes, view the output results:
more outputs*
To exit, press q .
Modify the pipeline code
The Beam wordcount pipeline distinguishes between uppercase and lowercase
words. The following steps show how to create your own Go module, modify the
wordcount pipeline so that the pipeline is not case-sensitive, and run it on
Dataflow.
Create a Go module
To make changes to the pipeline code, follow these steps.
Create a directory for your Go module in a location of your choice:
mkdir wordcount
cd wordcount
Create a Go module. For this example, use example/dataflow as the module
path.
go mod init example/dataflow
Download the latest copy of the
wordcount code
from the Apache Beam GitHub repository. Put this file into the
wordcount directory you created.
If you are using a non-Linux operating system, you must get the
Go unix package .
This package is required to run pipelines on the Dataflow
service.
go get -u golang.org/x/sys/unix
Ensure that the go.mod file matches the module's source code:
go mod tidy
Run the unmodified pipeline
Verify the unmodified wordcount pipeline runs locally.
From the terminal, build and run the pipeline locally:
go run wordcount.go --input gs://dataflow-samples/shakespeare/kinglear.txt \
--output outputs
View the output results:
more outputs*
To exit, press q .
Change the pipeline code
To change the pipeline so that it is not case-sensitive, modify the code to
apply the strings.ToLower
function to all words.
In an editor of your choice, open the wordcount.go file.
Examine the init block (comments have been removed for clarity):
func init () {
register . DoFn3x0 [ context . Context , string , func ( string )]( & extractFn {})
register . Function2x1 ( formatFn )
register . Emitter1 [ string ]()
}
Add a new line to register the strings.ToLower function:
func init () {
register . DoFn3x0 [ context . Context , string , func ( string )]( & extractFn {})
register . Function2x1 ( formatFn )
register . Emitter1 [ string ]()
register . Function1x1 ( strings . ToLower )
}
Examine the CountWords function:
func CountWords ( s beam . Scope , lines beam . PCollection ) beam . PCollection {
s = s . Scope ( "CountWords" )
// Convert lines of text into individual words.
col := beam . ParDo ( s , & extractFn { SmallWordLength : * smallWordLength }, lines )
// Count the number of times each word occurs.
return stats . Count ( s , col )
}
To lowercase the words, add a
ParDo
that applies strings.ToLower to every word:
func CountWords ( s beam . Scope , lines beam . PCollection ) beam . PCollection {
s = s . Scope ( "CountWords" )
// Convert lines of text into individual words.
col := beam . ParDo ( s , & extractFn { SmallWordLength : * smallWordLength }, lines )
// Map all letters to lowercase.
lowercaseWords := beam . ParDo ( s , strings . ToLower , col )
// Count the number of times each word occurs.
return stats . Count ( s , lowercaseWords )
}
Save the file.
Run the updated pipeline locally
Run your updated wordcount pipeline locally and verify the output has changed.
Build and run the modified wordcount pipeline:
go run wordcount.go --input gs://dataflow-samples/shakespeare/kinglear.txt \
--output outputs
View the output results of the modified pipeline. All words should be
lowercase.
more outputs*
To exit, press q .
Run the pipeline on the Dataflow service
To run the updated wordcount example on the Dataflow service,
use the following command:
go run wordcount.go --input gs://dataflow-samples/shakespeare/kinglear.txt \
--output gs:// BUCKET_NAME /results/outputs \
--runner dataflow \
--project PROJECT_ID \
--region DATAFLOW_REGION \
--staging_location gs:// BUCKET_NAME /binaries/
Replace the following:
BUCKET_NAME : the Cloud Storage bucket name.
PROJECT_ID : the Google Cloud project ID.
DATAFLOW_REGION : the
region where you
want to deploy the Dataflow job. For example, europe-west1 .
For a list of available locations, see
Dataflow locations .
The --region flag overrides the default region that is set in the metadata
server, your local client, or environment variables.
Note: To specify a
user-managed worker service account ,
include the --service_account_email
pipeline option .
User-managed worker service accounts are recommended for production workloads.
If you don't specify a worker service account
when you create a job, Dataflow uses the
Compute Engine default service account .
View your results
You can see a list of your Dataflow jobs in
Google Cloud console. In the Google Cloud console, go to the
Dataflow Jobs page.
Go to Jobs
The Jobs page displays details of your wordcount job, including a status
of Running at first, and then Succeeded .
When you run a pipeline using Dataflow, your results are stored in
a Cloud Storage bucket. View the output results by using either the
Google Cloud console or the local terminal.
Console
To view your results in the Google Cloud console, go to the
Cloud Storage Buckets page.
Go to Buckets
From the list of buckets in your project, click the storage bucket that you
created earlier. The output files that your job created are displayed in the
results directory.
Terminal
View the results from your terminal or by using Cloud Shell.
To list the output files, use the gcloud storage ls command :
gcloud storage ls gs:// BUCKET_NAME /results/outputs* --long
Replace BUCKET_NAME with the name of the
specified output Cloud Storage bucket.
To view the results in the output files, use the gcloud storage cat command :
gcloud storage cat gs:// BUCKET_NAME /results/outputs*
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Note: If you followed this quickstart in a new project, then you can
delete the project .
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click the checkbox for the bucket that you want to delete.
To delete the bucket,
click delete Delete , and then follow the
instructions.
If you keep your project, revoke the roles that you granted to the Compute Engine default service account. Run the following command once for each of the following IAM roles:
roles/dataflow.admin
roles/dataflow.worker
roles/storage.objectAdmin
gcloud projects remove-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = SERVICE_ACCOUNT_ROLE
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
Programming model for Apache Beam
Setting pipeline options
Pipeline options reference
Deploying a pipeline
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
