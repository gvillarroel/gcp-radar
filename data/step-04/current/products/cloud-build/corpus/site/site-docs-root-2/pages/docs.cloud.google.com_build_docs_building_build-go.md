---
title: "Build and test Go applications \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/building/build-go
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/build/docs/building/build-go
  title: "Build and test Go applications \_|\_ Google Cloud Documentation"
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
Build and test Go applications
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use Cloud Build to build and test your Go
applications, upload your artifacts to
Artifact Registry, generate provenance information, and save your test logs in
Cloud Storage.
Before you begin
The instructions on this page assume that you are familiar with Go. In addition:
Enable the Cloud Build, Cloud Run, and Artifact Registry APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To run the gcloud commands on this page, install Google Cloud CLI .
Have your Go project ready.
Have a Go repository in Artifact Registry. If you don't have one, then create a new repository .
If you want to store test logs in Cloud Storage, then create a bucket in Cloud Storage .
Ensure that you know the ID of the runtime service account for Cloud Run.
Create a custom Cloud Build service account
Create a custom Cloud Build service account by running the following
command in Google Cloud CLI:
gcloud iam service-accounts create cloud-build-go \
--description="Build and test Go applications" \
--display-name="Cloud Build Go" \
--project=" PROJECT_NAME "
You will use this service account to build and test your Go application.
Configure IAM permissions
To configure your new service account with the permissions required to
build and deploy Go applications, do the following:
In the Google Cloud console, go to the
settings Cloud Build Permissions page:
Go to Permissions
Go to the Service account menu and select your cloud-build-go service
account.
Set the status of the following roles to Enabled :
Cloud Run Admin ( roles/run.admin ): Lets Cloud Build deploy new services to Cloud Run.
In the Assign Service Account User Role panel, select your runtime service account and then click Grant Permission .
This configuration allows your custom Cloud Build service
account to impersonate the runtime service account when interacting with
the Cloud Run managed service. For more information,
see Configure Cloud Build service account impersonation for managed services .
Storage Admin ( roles/storage.admin ): Enables reading and writing from Cloud Storage.
Artifact Registry Writer ( roles/artifactregistry.writer ): Allows pulling images from and writing to Artifact Registry.
Logs Writer ( roles/logging.logWriter ): Allows log entries to be written to Cloud Logging.
Cloud Build Editor ( roles/cloudbuild.builds.editor ): Allows your service account to run builds.
Configure Go builds
The public
golang image from Docker Hub
supports building using Go modules.
Using this image as a build step in your Cloud Build config file lets
you invoke go commands within the image. Arguments passed to this build step
are passed to the golang tool directly, allowing you to run any go command
in this image.
This section shows how to create an
example build config file
for a Go app from the
cloud-build-samples
Git repository. The build config file has steps to build the app, add unit
tests, and after the tests pass, to deploy the app.
To build the example Go application:
Configure unit tests : If you've defined unit tests in your application,
you can configure Cloud Build to run the tests by adding the
following fields in a build step:
name : Set the value of this field to golang to use the golang image
from Docker Hub for your task.
entrypoint : Set the value of this field to /bin/bash . This lets you
run multi-line bash commands
directly from the build step.
args : The args field of a build step takes a list of arguments and
passes them to the image referenced by the name field. In the following
example, the args field takes the arguments for:
Running the test log formatter to download the test log output.
Printing the log output.
Saving test results in sponge.log .
Outputting the results in sponge.log to a JUNIT XML file. The name
of the JUNIT XML file is constructed using
the short version of the commit ID associated with your build .
A subsequent build step will save the logs in this file to
Cloud Storage.
steps :
# Run tests and save to file
- name : golang:1.23
entrypoint : /bin/bash
args :
- -c
- |
go install github.com/jstemmer/go-junit-report/v2@latest
2>&1 go test -timeout 1m -v ./... | /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT_SHA}_test_log.xml
Upload to Artifact Registry : In your config file, use the goModules field to
specify your application path and your Go repository in
Artifact Registry:
# Upload Go module to artifact registry
artifacts :
goModules :
- repositoryName : ' repositoryName '
repositoryLocation : ' location '
repositoryProjectId : ' projectId '
sourcePath : ' sourcePath '
modulePath : ' appPath '
moduleVersion : ' version '
Replace the following values:
repositoryName : the name of your Go repository in Artifact Registry.
location : the location for your repository in Artifact Registry.
projectId : the ID of the Google Cloud project that contains your Artifact Registry repository.
sourcePath : the path to the go.mod file in the build's workspace.
appPath : the path to your packaged application.
version : the version number for your application, formatted in numbers and dots like v1.0.1 .
Optional: Enable provenance generation
Cloud Build can generate verifiable
Supply chain Levels for Software Artifacts (SLSA) build
provenance metadata to help secure your continuous integration pipeline.
To enable provenance generation, add
requestedVerifyOption: VERIFIED
to the options section in your config file.
Once your build completes, you can view repository details
in Artifact Registry.
You can also view build provenance metadata and validate provenance .
Save test logs to Cloud Storage : You can configure
Cloud Build
to store any test logs in Cloud Storage by specifying an existing bucket
location and path to the test logs.
The following build step stores the test logs that you saved in the JUNIT XML
file to a Cloud Storage bucket:
# Save test logs to Google Cloud Storage
artifacts :
objects :
location : gs://$_BUCKET_NAME/
paths :
- ${SHORT_SHA}_test_log.xml
The following snippet shows the complete build config file for the
preceding steps:
steps :
# Run tests and save to file
- name : golang:1.23
entrypoint : /bin/bash
args :
- -c
- |
go install github.com/jstemmer/go-junit-report/v2@latest
2>&1 go test -timeout 1m -v ./... | /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT_SHA}_test_log.xml
# Store golang modules in Google Artifact Registry
artifacts :
goModules :
- repositoryName : ' repositoryName '
repositoryLocation : ' location '
repositoryProjectId : ' projectId '
sourcePath : ' sourcePath '
modulePath : ' appPath '
moduleVersion : ' version '
Start the build using the gcloud CLI
or create a build trigger :
Google Cloud CLI
gcloud builds submit -- region = us - west2 -- config = cloudbuild . yaml \
-- substitutions = _AR_REPO_NAME = " AR_REPO_NAME "
Build Triggers
Follow the steps in
Create a build trigger .
In the Substitution variables field, you must also provide the name of your
Artifact Registry repository and the name of your Cloud Storage bucket for
test logs.
What's next
Learn how to perform blue-green deployments on Compute Engine .
Learn how to troubleshoot build errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
