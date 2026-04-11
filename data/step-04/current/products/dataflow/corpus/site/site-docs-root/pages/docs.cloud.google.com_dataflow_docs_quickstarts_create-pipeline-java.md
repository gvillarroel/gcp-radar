---
title: "Create a Dataflow pipeline using Java \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java
  title: "Create a Dataflow pipeline using Java \_|\_ Google Cloud Documentation"
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
Create a Dataflow pipeline using Java
This document shows you how to set up your Google Cloud project, create an example pipeline built
with the Apache Beam SDK for Java, and run the example pipeline on the Dataflow
service. The pipeline reads a text file from Cloud Storage, counts the number of unique words
in the file, and then writes the word counts back to Cloud Storage. For an introduction
to the WordCount pipeline, see the
How to use WordCount in Apache Beam
video.
This tutorial
requires Maven, but it's also possible to convert the example project from Maven to Gradle. To
learn more, see
Optional: Convert from Maven to Gradle .
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
Enable the Dataflow, Compute Engine, Cloud Logging,
Cloud Storage, Google Cloud Storage JSON, BigQuery, Cloud Pub/Sub, Cloud
Datastore, and Cloud Resource Manager APIs:
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
Enable the Dataflow, Compute Engine, Cloud Logging,
Cloud Storage, Google Cloud Storage JSON, BigQuery, Cloud Pub/Sub, Cloud
Datastore, and Cloud Resource Manager APIs:
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
Copy the following, as you need them in a later section:
Your Cloud Storage bucket name.
Your Google Cloud project ID. To find this ID, see
Identifying projects .
Download and install the
Java Development Kit (JDK) version 11. (Dataflow continues
to support version 8.) Verify that the
JAVA_HOME environment variable is set and
points to your JDK installation.
Download and install Apache Maven , following Maven's
installation guide
for your specific operating system.
Get the pipeline code
The
Apache Beam SDK is an open source programming model for data processing pipelines. You
define these pipelines with an Apache Beam program and can choose a runner, such as
Dataflow, to run your pipeline.
In your shell or terminal, use the
Maven Archetype Plugin to create a Maven project on your computer that
contains the Apache Beam SDK's WordCount examples:
mvn archetype:generate \
-DarchetypeGroupId=org.apache.beam \
-DarchetypeArtifactId=beam-sdks-java-maven-archetypes-examples \
-DarchetypeVersion=2.72.0 \
-DgroupId=org.example \
-DartifactId=word-count-beam \
-Dversion="0.1" \
-Dpackage=org.apache.beam.examples \
-DinteractiveMode=false
The command creates a new directory called word-count-beam under your current
directory. The word-count-beam directory contains a simple pom.xml file
and a series of example pipelines that count words in text files.
Verify that your word-count-beam directory contains the pom.xml file:
Linux or macOS
cd word-count-beam/
ls
The output is the following:
pom.xml src
Windows
cd word-count-beam/
dir
The output is the following:
pom.xml src
Verify that your Maven project contains the example pipelines:
Linux or macOS
ls src/main/java/org/apache/beam/examples/
The output is the following:
DebuggingWordCount.java WindowedWordCount.java common
MinimalWordCount.java WordCount.java
Windows
dir src/main/java/org/apache/beam/examples/
The output is the following:
DebuggingWordCount.java WindowedWordCount.java common
MinimalWordCount.java WordCount.java
For a detailed introduction to the Apache Beam concepts that are used in these examples, see
the Apache Beam WordCount Example . The instructions in the next
sections use
WordCount.java .
Run the pipeline locally
In your shell or terminal, run the WordCount pipeline locally from your
word-count-beam directory:
mvn compile exec:java \
-Dexec.mainClass=org.apache.beam.examples.WordCount \
-Dexec.args="--output=counts"
The output files have the prefix counts and are written to the
word-count-beam directory. They contain unique words from the input text and the
number of occurrences of each word.
Run the pipeline on the Dataflow service
In your shell or terminal, build and run the WordCount pipeline on the
Dataflow service from your word-count-beam directory:
mvn -Pdataflow-runner compile exec:java \
-Dexec.mainClass=org.apache.beam.examples.WordCount \
-Dexec.args="--project= PROJECT_ID \
--gcpTempLocation=gs:// BUCKET_NAME /temp/ \
--output=gs:// BUCKET_NAME /output \
--runner=DataflowRunner \
--region= REGION "
Replace the following:
PROJECT_ID : your Google Cloud project ID
BUCKET_NAME : the name of your Cloud Storage bucket
REGION : a Dataflow region , like us-central1
Note:
To specify a
user-managed worker service account ,
include the --serviceAccount
pipeline option .
User-managed worker service accounts are recommended for production workloads.
If you don't specify a worker service account
when you create a job, Dataflow uses the
Compute Engine default service account .
Unless specified through the network option, the
Dataflow runner runs jobs in the default Virtual Private Cloud network.
View your results
In the Google Cloud console, go to the Dataflow Jobs page.
Go to
Jobs
The Jobs page shows the details of all the available jobs, including the status. The
wordcount job's Status is Running at first, and then updates to
Succeeded .
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to
Buckets
The Buckets page displays the list of all the storage buckets in your project.
Click the storage bucket that you created.
The Bucket details page shows the output files and staging files that your
Dataflow job created.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Delete the project
The easiest way to eliminate billing is to delete the Google Cloud project that you created
for the quickstart.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete the individual resources
If you want to keep the Google Cloud project that you used in this quickstart, then delete
the individual resources:
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click the checkbox for the bucket that you want to delete.
To delete the bucket,
click delete Delete , and then follow the
instructions.
Revoke the roles that you granted to the Compute Engine default service account. Run the following command once for each of the following IAM roles:
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
Learn about the Apache Beam
programming model .
Learn how to use Apache Beam to build pipelines .
Work through the WordCount and Mobile Gaming
examples .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
