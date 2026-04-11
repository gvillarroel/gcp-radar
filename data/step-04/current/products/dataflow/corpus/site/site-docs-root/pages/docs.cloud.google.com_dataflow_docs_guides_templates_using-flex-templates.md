---
title: "Build and run an example Flex Template \_|\_ Cloud Dataflow \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates
  title: "Build and run an example Flex Template \_|\_ Cloud Dataflow \_|\_ Google\
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
Guides
Send feedback
Build and run an example Flex Template
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial focuses on Flex
Templates , showing how you
can build and run a containerized data pipeline in Dataflow. You'll
learn to package your pipelines for efficient deployment using an
example Flex Template.
Objectives
Build a Dataflow Flex Template.
Use the template to run a Dataflow job.
Costs
In this document, you use the following billable components of Google Cloud:
Dataflow
Cloud Storage
Artifact Registry
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
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
Enable the Dataflow, Compute Engine, Logging, Cloud Storage, Cloud Storage JSON, Resource Manager, and Artifact Registry API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow compute_component logging storage_component storage_api cloudresourcemanager.googleapis.com artifactregistry.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
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
Enable the Dataflow, Compute Engine, Logging, Cloud Storage, Cloud Storage JSON, Resource Manager, and Artifact Registry API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow compute_component logging storage_component storage_api cloudresourcemanager.googleapis.com artifactregistry.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
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
Grant roles to your Compute Engine default service account. Run the
following command once for each of the following IAM roles:
roles/dataflow.admin
roles/dataflow.worker
roles/storage.objectAdmin
roles/artifactregistry.writer
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE_ACCOUNT_ROLE
Replace the following:
PROJECT_ID : your project ID
PROJECT_NUMBER your Google Cloud
project number
SERVICE_ACCOUNT_ROLE : each individual role
Prepare your environment for Flex Templates
Install the SDK and any requirements for your development environment.
Java
Download and install the
Java Development Kit (JDK)
version 17. Verify that the
JAVA_HOME
environment variable is set and points to your JDK installation.
Download and install
Apache Maven
by following Maven's
installation guide
for your specific operating system.
Python
Install the Apache Beam SDK for Python .
Go
Use Go's Download and install guide
to download and install Go for your specific operating system. To learn which
Go runtime environments are supported by Apache Beam, see
Apache Beam runtime support .
Download the code sample.
Java
Clone the java-docs-samples repository .
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
Navigate to the code sample for this tutorial.
cd java-docs-samples/dataflow/flex-templates/getting_started
Build the Java project into an Uber JAR file.
mvn clean package
This Uber JAR file has all the dependencies embedded in it. You can run
this file as a standalone application with no external dependencies on
other libraries.
Python
Clone the python-docs-samples repository .
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
Navigate to the code sample for this tutorial.
cd python-docs-samples/dataflow/flex-templates/getting_started
Go
Clone the golang-samples repository .
git clone https://github.com/GoogleCloudPlatform/golang-samples.git
Navigate to the code sample for this tutorial.
cd golang-samples/dataflow/flex-templates/wordcount
Compile the Go binary.
CGO_ENABLED = 0 GOOS = linux GOARCH = amd64 go build -o wordcount .
Create a Cloud Storage bucket for your data pipeline
Use the gcloud storage buckets create command
to create a Cloud Storage bucket:
gcloud storage buckets create gs:// BUCKET_NAME
Replace BUCKET_NAME with a name for your
Cloud Storage bucket. Cloud Storage bucket names must be
globally unique and meet the
bucket naming requirements .
Create an Artifact Registry repository
Create an Artifact Registry repository where you will push the Docker container
image for the template.
Use the
gcloud artifacts repositories create
command to create a new Artifact Registry repository.
gcloud artifacts repositories create REPOSITORY \
--repository-format = docker \
--location = LOCATION
Replace the following:
REPOSITORY : a name for your repository. Repository names must be
unique for each repository location in a project.
LOCATION : the regional or multi-regional
location for the
repository.
Use the
gcloud auth configure-docker
command to configure Docker to authenticate requests for Artifact Registry.
This command updates your Docker configuration, so that you can connect with
Artifact Registry to push images.
gcloud auth configure-docker LOCATION -docker.pkg.dev
Flex Templates
can also use images stored in private registries. For more information, see
Use an image from a private registry .
Build your Dataflow Flex Template
In this step, you use the
gcloud dataflow flex-template build
command to build the Flex Template.
A Flex Template consists of the following components:
A Docker container image that packages your pipeline code, forming a
containerized data pipeline. For Java and Python Flex Templates, the Docker
image is built and pushed to your Artifact Registry repository when you run
the gcloud dataflow flex-template build command.
A template specification file. This file is a JSON document that contains
the location of the container image plus metadata about the template, such
as pipeline parameters.
The sample repository in GitHub contains the metadata.json file.
java-docs-samples repository
python-docs-samples repository
golang-samples repository
To extend your template with additional metadata,
you can create your own metadata.json file .
Java
gcloud dataflow flex-template build gs:// BUCKET_NAME /getting_started-java.json \
--image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /getting-started-java:latest" \
--sdk-language "JAVA" \
--flex-template-base-image JAVA17 \
--metadata-file "metadata.json" \
--jar "target/flex-template-getting-started-1.0.jar" \
--env FLEX_TEMPLATE_JAVA_MAIN_CLASS = "com.example.dataflow.FlexTemplateGettingStarted"
Replace the following:
BUCKET_NAME : the name of the Cloud Storage bucket that
you created earlier
LOCATION : the location
PROJECT_ID : the Google Cloud project ID
REPOSITORY : the name of the Artifact Registry repository
that you created earlier
Python
gcloud dataflow flex-template build gs:// BUCKET_NAME /getting_started-py.json \
--image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /getting-started-python:latest" \
--sdk-language "PYTHON" \
--flex-template-base-image "PYTHON3" \
--metadata-file "metadata.json" \
--py-path "." \
--env "FLEX_TEMPLATE_PYTHON_PY_FILE=getting_started.py" \
--env "FLEX_TEMPLATE_PYTHON_REQUIREMENTS_FILE=requirements.txt"
Replace the following:
BUCKET_NAME : the name of the Cloud Storage bucket that
you created earlier
LOCATION : the location
PROJECT_ID : the Google Cloud project ID
REPOSITORY : the name of the Artifact Registry repository
that you created earlier
Go
gcloud dataflow flex-template build gs:// BUCKET_NAME /samples/dataflow/templates/wordcount-go.json \
--image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /dataflow/wordcount-go:latest" \
--sdk-language "GO" \
--flex-template-base-image "GO" \
--metadata-file "metadata.json" \
--go-binary-path = "." \
--env "FLEX_TEMPLATE_GO_BINARY=wordcount"
Replace the following:
BUCKET_NAME : the name of the Cloud Storage bucket
that you created earlier.
LOCATION : the location
PROJECT_ID : the Google Cloud project ID
REPOSITORY : the name of the Artifact Registry repository
that you created earlier
Run the Flex Template
In this step, you use the template to run a Dataflow job.
Java
Use the
gcloud dataflow flex-template run command
to run a Dataflow job that uses the Flex Template.
gcloud dataflow flex-template run "getting-started-`date +%Y%m%d-%H%M%S`" \
--template-file-gcs-location "gs:// BUCKET_NAME /getting_started-java.json" \
--parameters output = "gs:// BUCKET_NAME /output-" \
--region " REGION "
Replace the following:
BUCKET_NAME : the name of the Cloud Storage bucket
that you created earlier
REGION : the region
To view the status of the Dataflow job in the
Google Cloud console, go to the Dataflow Jobs page.
Go to Jobs
If the job runs successfully, it writes the output to a file named
gs:// BUCKET_NAME /output--00000-of-00001.txt in your
Cloud Storage bucket.
Python
Use the
gcloud dataflow flex-template run command
to run a Dataflow job that uses the Flex Template.
gcloud dataflow flex-template run "getting-started-`date +%Y%m%d-%H%M%S`" \
--template-file-gcs-location "gs:// BUCKET_NAME /getting_started-py.json" \
--parameters output = "gs:// BUCKET_NAME /output-" \
--region " REGION "
Replace the following:
BUCKET_NAME : the name of the Cloud Storage bucket that
you created earlier
REGION : the region
To view the status of the Dataflow job in the
Google Cloud console, go to the Dataflow Jobs page.
Go to Jobs
If the job runs successfully, it writes the output to a file named
gs:// BUCKET_NAME /output--00000-of-00001.txt in your
Cloud Storage bucket.
Go
Use the
gcloud dataflow flex-template run command
to run a Dataflow job that uses the Flex Template.
gcloud dataflow flex-template run "wordcount-go-`date +%Y%m%d-%H%M%S`" \
--template-file-gcs-location "gs:// BUCKET_NAME /samples/dataflow/templates/wordcount-go.json" \
--parameters output = "gs:// BUCKET_NAME /samples/dataflow/templates/counts.txt" \
--region " REGION "
Replace the following:
BUCKET_NAME : the name of the Cloud Storage bucket
that you created earlier
REGION : the region
To view the status of the Dataflow job in the
Google Cloud console, go to the Dataflow Jobs page.
Go to Jobs
If the job runs successfully, it writes the output to a file named
gs:// BUCKET_NAME /samples/dataflow/templates/count.txt in
your Cloud Storage bucket.
If your job fails to run and you get the following error message, see
Troubleshoot Flex Template timeouts .
A Timeout in polling error message
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
Delete the Cloud Storage bucket and all the objects in the bucket.
gcloud storage rm gs:// BUCKET_NAME --recursive
Delete the Artifact Registry repository.
gcloud artifacts repositories delete REPOSITORY \
--location = LOCATION
Revoke the roles that you granted to the Compute Engine default
service account. Run the following command once for each of the following
IAM roles:
roles/dataflow.admin
roles/dataflow.worker
roles/storage.objectAdmin
roles/artifactregistry.writer
gcloud projects remove-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = SERVICE_ACCOUNT_ROLE
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
Use Flex Templates to package a Dataflow
pipeline .
Explore the benefits of prebuilt templates and Google-provided
templates for common
use cases.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
