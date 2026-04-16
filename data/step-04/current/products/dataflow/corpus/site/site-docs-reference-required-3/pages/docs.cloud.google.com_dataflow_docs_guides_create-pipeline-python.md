---
title: "Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python
  title: "Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation"
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
Create a Dataflow pipeline using Python
This document shows you how to use the Apache Beam SDK for Python to build a program
that defines a pipeline. Then, you run the pipeline by using a direct local runner or a cloud-based
runner such as Dataflow. For an introduction to the WordCount pipeline, see the
How to use WordCount in Apache Beam video.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
Enable the Dataflow, Compute Engine, Cloud Logging, Cloud Storage,
Google Cloud Storage JSON, BigQuery, Cloud Pub/Sub, Cloud Datastore,
and Cloud Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow compute_component logging storage_component storage_api bigquery pubsub datastore.googleapis.com cloudresourcemanager.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/iam.supportUser, roles/datastream.admin,
roles/monitoring.metricsScopesViewer, roles/cloudaicompanion.settingsAdmin
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
Enable the Dataflow, Compute Engine, Cloud Logging, Cloud Storage,
Google Cloud Storage JSON, BigQuery, Cloud Pub/Sub, Cloud Datastore,
and Cloud Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow compute_component logging storage_component storage_api bigquery pubsub datastore.googleapis.com cloudresourcemanager.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/iam.supportUser, roles/datastream.admin,
roles/monitoring.metricsScopesViewer, roles/cloudaicompanion.settingsAdmin
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
Copy the Google Cloud project ID and the Cloud Storage bucket name. You need these values
later in this document.
Set up your environment
Dataflow no longer supports pipelines using Python 2. For more information, see
Python 2 support on Google Cloud page.
For details about supported versions, see
Apache Beam runtime support .
In this section, use the command prompt to set up an isolated Python virtual environment to run your pipeline project
by using venv .
This process lets you isolate the dependencies of one project from the dependencies of other projects.
If you don't have a command prompt readily available, you can use Cloud Shell .
Cloud Shell already has the package manager for Python 3 installed, so you can skip to creating
a virtual environment .
To install Python and then create a virtual environment, follow these steps:
Check that you have Python 3 and pip running in your system:
python --version
python -m pip --version
If required, install Python 3 and then set up a Python virtual environment: follow the instructions
provided in the Installing Python and Setting up venv sections of the
Setting up a Python development environment page .
After you complete the quickstart, you can deactivate the virtual environment by running deactivate .
Get the Apache Beam SDK
The Apache Beam SDK is an open source programming model for data pipelines. You define a
pipeline with an Apache Beam program and then choose a runner, such as Dataflow, to run your pipeline.
To download and install the Apache Beam SDK, follow these steps:
Verify that you are in the Python virtual environment that you created in the preceding section.
Ensure that the prompt starts with < env_name > , where env_name
is the name of the virtual environment.
Install the latest version of the Apache Beam SDK for Python:
pip install apache-beam [ gcp ]
Run the pipeline locally
To see how a pipeline runs locally, use a ready-made Python module for the wordcount
example that is included with the apache_beam package.
The wordcount pipeline example does the following:
Takes a text file as input.
This text file is located in a Cloud Storage bucket with the
resource name gs://dataflow-samples/shakespeare/kinglear.txt .
Parses each line into words.
Performs a frequency count on the tokenized words.
To stage the wordcount pipeline locally, follow these steps:
From your local terminal, run the wordcount example:
python -m apache_beam.examples.wordcount \
--output outputs
View the output of the pipeline:
more outputs*
To exit, press q .
Running the pipeline locally lets you test and debug your Apache Beam program.
You can view the wordcount.py source code
on Apache Beam GitHub .
Run the pipeline on the Dataflow service
In this section, run the wordcount example pipeline from the
apache_beam package on the Dataflow service. This
example specifies DataflowRunner as the parameter for
--runner .
Run the pipeline:
python -m apache_beam.examples.wordcount \
--region DATAFLOW_REGION \
--input gs://dataflow-samples/shakespeare/kinglear.txt \
--output gs:// BUCKET_NAME /results/outputs \
--runner DataflowRunner \
--project PROJECT_ID \
--temp_location gs:// BUCKET_NAME /tmp/
Replace the following:
DATAFLOW_REGION : the
region
where you want to deploy the Dataflow job—for example,
europe-west1
The --region flag overrides the default region that is
set in the metadata server, your local client, or environment
variables.
BUCKET_NAME : the
Cloud Storage bucket name that you copied
earlier
PROJECT_ID : the Google Cloud project ID
that you copied earlier
Note: To specify a
user-managed worker service account ,
include the --service_account_email
pipeline option .
User-managed worker service accounts are recommended for production workloads.
If you don't specify a worker service account
when you create a job, Dataflow uses the
Compute Engine default service account .
View your results
When you run a pipeline using Dataflow, your results are stored in a Cloud Storage bucket.
In this section, verify that the pipeline is running by using either the Google Cloud console or the local terminal.
Google Cloud console
To view your results in Google Cloud console, follow these steps:
In the Google Cloud console, go to the Dataflow Jobs page.
Go to Jobs
The Jobs page displays details of your wordcount job, including a status of
Running at first, and then Succeeded .
Go to the Cloud Storage Buckets page.
Go to Buckets
From the list of buckets in your project, click the storage bucket that you created earlier.
In the wordcount directory, the output files that your job created are displayed.
Local terminal
View the results from your terminal or by using Cloud Shell.
To list the output files, use the gcloud storage ls command :
gcloud storage ls gs:// BUCKET_NAME /results/outputs* --long
Replace BUCKET_NAME with the name of the Cloud Storage bucket used
in the pipeline program.
To view the results in the output files, use the gcloud storage cat command :
gcloud storage cat gs:// BUCKET_NAME /results/outputs*
Modify the pipeline code
The wordcount pipeline in the previous examples distinguishes between uppercase and lowercase words.
The following steps show how to modify the pipeline so that the wordcount pipeline
is not case-sensitive.
On your local machine, download the latest copy of the
wordcount code
from the Apache Beam GitHub repository.
From the local terminal, run the pipeline:
python wordcount.py --output outputs
View the results:
more outputs*
To exit, press q .
In an editor of your choice, open the wordcount.py file.
Inside the run function, examine the pipeline steps:
counts = (
lines
| 'Split' >> ( beam . ParDo ( WordExtractingDoFn ()) . with_output_types ( str ))
| 'PairWithOne' >> beam . Map ( lambda x : ( x , 1 ))
| 'GroupAndSum' >> beam . CombinePerKey ( sum ))
After split , the lines are split into words as strings.
To lowercase the strings, modify the line after split :
counts = (
lines
| 'Split' >> ( beam . ParDo ( WordExtractingDoFn ()) . with_output_types ( str ))
| 'lowercase' >> beam . Map ( str . lower )
| 'PairWithOne' >> beam . Map ( lambda x : ( x , 1 ))
| 'GroupAndSum' >> beam . CombinePerKey ( sum ))
This modification maps the str.lower function onto every word. This line is equivalent
to beam.Map(lambda word: str.lower(word)) .
Save the file and run the modified wordcount job:
python wordcount.py --output outputs
View the results of the modified pipeline:
more outputs*
To exit, press q .
Run the modified pipeline on the Dataflow service:
python wordcount.py \
--region DATAFLOW_REGION \
--input gs://dataflow-samples/shakespeare/kinglear.txt \
--output gs:// BUCKET_NAME /results/outputs \
--runner DataflowRunner \
--project PROJECT_ID \
--temp_location gs:// BUCKET_NAME /tmp/
Replace the following:
DATAFLOW_REGION : the
region
where you want to deploy the Dataflow job
BUCKET_NAME : your
Cloud Storage bucket name
PROJECT_ID : you Google Cloud project ID
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
Read about the Apache Beam programming model .
Interactively develop a pipeline using an Apache Beam notebook .
Learn how to design and create your own pipeline .
Work through the WordCount and Mobile Gaming examples .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
