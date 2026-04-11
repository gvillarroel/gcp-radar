---
title: "Build, test, and containerize Python applications \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/building/build-containerize-python
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/build/docs/building/build-containerize-python
  title: "Build, test, and containerize Python applications \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Build, test, and containerize Python applications
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure Cloud Build to build, test, containerize, and
deploy Python applications.
Cloud Build enables you to use any publicly available container image
to execute your development tasks, including building, testing, containerizing, uploading to Artifact Registry, deploying, and saving your build logs. The public
python image from Docker Hub
comes preinstalled with python and pip tools. You can configure Cloud Build
use these tools to install dependencies, build, and run unit tests using these tools.
Before you begin
The instructions on this page assume that you are familiar with Python. In addition:
Enable the Cloud Build, Cloud Run, Cloud Storage and Artifact Registry APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To run the gcloud commands on this page, install Google Cloud CLI .
Have your Python project handy, including the requirements.txt file.
You need a Dockerfile along with your source code.
If you want to store the built container in Artifact Registry, create a
Docker repository in Artifact Registry .
If you want to store test logs in Cloud Storage, create a bucket in Cloud Storage .
Required IAM permissions
To store test logs in Logging, grant the
Storage Object Creator ( roles/storage.objectCreator )
role for the Cloud Storage bucket to your build service account.
To store built images in Artifact Registry, grant the Artifact Registry Writer
( roles/artifactregistry.writer ) role
to your build service account.
For instructions on granting these roles see
Granting a role using the IAM page .
Configuring Python builds
This section walks through an example build config file for a Python app. It has
build steps to install requirements, add unit tests, and after the tests pass,
build, and deploy the app.
In your project root directory, create Cloud Build config file
named cloudbuild.yaml .
Install requirements : The python image from Docker Hub comes preinstalled
with pip . To install dependencies from pip , add a build step with the
following fields:
name : Set the value of this field to python to use the python image from
Docker Hub for this task.
entrypoint : Setting this field overrides the default entrypoint of the image
referenced in name . Set the value of this field to pip to invoke pip
as the entrypoint of the build step and run pip commands.
args : The args field of a build step takes a list of arguments and
passes them to the image referenced by the name field. Pass the arguments
to run the pip install command in this field. --user flag in the pip install
command ensures that the subsequent build steps can access the modules
installed in this build step.
The following build step adds arguments to install requirements from the
requirements.txt file:
steps :
# Install dependencies
- name : python
entrypoint : pip
args : [ "install" , "-r" , "requirements.txt" , "--user" ]
Add unit tests : If you've defined unit tests in your application using a
testing framework such as pytest , you can configure Cloud Build
to run the tests by adding the following fields in a build step:
name : Set the value of this field to python to use the python image from
Docker Hub for your task.
entrypoint : Set the value of this field to python to run python commands.
args : Add the arguments for running the python pytest command.
The following build step saves the pytest log output to a JUNIT XML file.
The name of this file is constructed using the short version of the commit ID associated
with your build .
A subsequent build step will save the logs in this file to Cloud Storage.
# Run unit tests
- name : python
entrypoint : python
args : [ "-m" , "pytest" , "--junitxml=${SHORT_SHA}_test_log.xml" ]
Containerize the app : After adding the build step to ensure that the tests
have passed, you can build the application. Cloud Build provides a
pre-built Docker image that you can use to containerize your Python application. To
containerize your app, add the following fields in a build step:
name : Set the value of this field to gcr.io/cloud-builders/docker to use
the prebuilt docker image for your task.
args : Add the arguments for the docker build command as values for this
field.
The following build step builds the image myimage and tags it with the
short version of your commit ID. The build step uses the
default substitutions
for project ID, repository name, and short SHA values therefore these
values are automatically substituted at build time.
# Docker Build
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' ,
'us-central1-docker.pkg.dev/${PROJECT_ID}/${_ARTIFACT_REGISTRY_REPO}/myimage:${SHORT_SHA}' , '.' ]
Push the container to Artifact Registry : You can store the built container in
Artifact Registry, which is a Google Cloud service that you can use to
store, manage, and secure build artifacts. To do this, you'll need to have an
existing Docker repository in Artifact Registry. To configure Cloud Build
to store the image in an Artifact Registry Docker repository, add
a build step with the following fields:
name : Set the value of this field to gcr.io/cloud-builders/docker to
use the official docker builder image for your task.
args : Add the arguments for the docker push command as values of this
field. For the destination URL, enter the Artifact Registry Docker repository
where you want to store the image.
The following build step pushes the image that you built in the previous step
to Artifact Registry:
# Docker push to Google Artifact Registry
- name : 'gcr.io/cloud-builders/docker'
args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT_ID}/${_ARTIFACT_REGISTRY_REPO}/myimage:${SHORT_SHA}' ]
Optional: If you want Cloud Build to generate
Supply chain Levels for Software Artifacts (SLSA) build
provenance information, complete the following:
Use the images field
in your build step instead of using a separate using a Docker push build step.
Add requestedVerifyOption: VERIFIED
to the options section of your build config file.
Deploy the container to Cloud Run : To deploy the image on Cloud Run,
add a build step with the following fields:
name : Set the value of this field to google/cloud-sdk to use the gcloud CLI
image to invoke the gcloud command to deploy the image on Cloud Run.
args : Add the arguments for the gcloud run deploy command as the values
of this field.
The following build step deploys the previously built image to Cloud Run:
# Deploy to Cloud Run
- name : google/cloud-sdk
args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT_SHA}' ,
'--image=us-central1-docker.pkg.dev/${PROJECT_ID}/${_ARTIFACT_REGISTRY_REPO}/myimage:${SHORT_SHA}' ,
'--region' , 'us-central1' , '--platform' , 'managed' ,
'--allow-unauthenticated' ]
Save test logs to Cloud Storage : You can configure Cloud Build
to store any test logs in Cloud Storage by specifying an existing bucket
location and path to the test logs.
The following build step stores the test logs that you saved in the JUNIT XML
file to a Cloud Storage bucket:
# Save test logs to Google Cloud Storage
artifacts :
objects :
location : gs://${_BUCKET_NAME}/
paths :
- ${SHORT_SHA}_test_log.xml
The following snippet shows the complete build config file for the all the steps
described above:
steps :
# Install dependencies
- name : python
entrypoint : pip
args : [ "install" , "-r" , "requirements.txt" , "--user" ]
# Run unit tests
- name : python
entrypoint : python
args : [ "-m" , "pytest" , "--junitxml=${SHORT_SHA}_test_log.xml" ]
# Docker Build
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' ,
'us-central1-docker.pkg.dev/${PROJECT_ID}/${_ARTIFACT_REGISTRY_REPO}/myimage:${SHORT_SHA}' , '.' ]
# Docker push to Google Artifact Registry
- name : 'gcr.io/cloud-builders/docker'
args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT_ID}/${_ARTIFACT_REGISTRY_REPO}/myimage:${SHORT_SHA}' ]
# Deploy to Cloud Run
- name : google/cloud-sdk
args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT_SHA}' ,
'--image=us-central1-docker.pkg.dev/${PROJECT_ID}/${_ARTIFACT_REGISTRY_REPO}/myimage:${SHORT_SHA}' ,
'--region' , 'us-central1' , '--platform' , 'managed' ,
'--allow-unauthenticated' ]
# Save test logs to Google Cloud Storage
artifacts :
objects :
location : gs://${_BUCKET_NAME}/
paths :
- ${SHORT_SHA}_test_log.xml
# Store images in Google Artifact Registry
images :
- us-central1-docker.pkg.dev/${PROJECT_ID}/${_ARTIFACT_REGISTRY_REPO}/myimage:${SHORT_SHA}
Start your build : manually or
using build triggers .
Once your build completes, you can view repository details
in Artifact Registry.
You can also view build provenance metadata and validate provenance .
What's next
Learn how to view build results .
Learn how to safeguard builds .
Learn how to build standalone Python applications .
Learn how to use private dependencies .
Learn how to troubleshoot build errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
