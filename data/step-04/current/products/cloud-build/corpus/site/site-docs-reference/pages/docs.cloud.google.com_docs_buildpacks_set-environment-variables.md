---
title: "Set environment variables to configure builds \_|\_ Buildpacks \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/docs/buildpacks/set-environment-variables
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/buildpacks/build-application
source_metadata:
  url: https://docs.cloud.google.com/docs/buildpacks/set-environment-variables
  title: "Set environment variables to configure builds \_|\_ Buildpacks \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Buildpacks
Guides
Send feedback
Set environment variables to configure builds
Stay organized with collections
Save and categorize content based on your preferences.
You can configure environment variables that are set during the build of your
container image.
You can also customize your container image by
extending the build and run images .
Local builds
For local builds, you must have the Pack CLI and Docker installed.
Before you begin
Install Docker Community Edition (CE)
on your workstation. Docker is used by pack as an OCI image builder.
Install Pack CLI .
Install the Git source control
tool to fetch the sample application from GitHub.
Set environment variables
To set environment variables for local builds, you append the --env flag to
the pack command for each environment variable.
You can use one or more of the
environment variables that are supported by your runtime .
pack build SERVICE_NAME \
--env ENVIRONMENT_VARIABLE
Replace:
SERVICE_NAME with the name of the service for your application or function.
ENVIRONMENT_VARIABLE with the environment variable that you want to set
during build time.
Example
To set the GOOGLE_ENTRYPOINT="gunicorn -p :8080 main:app" environment variable
in your container image, you run the following command:
pack build my-app \
--builder gcr.io/buildpacks/builder:v1 \
--env GOOGLE_ENTRYPOINT = "gunicorn -p :8080 main:app"
--env MY-LOCAL-ENV-VARIABLE
Remote builds
To set environment variables for remote builds, you use the
project.toml project descriptor .
The project.toml project descriptor is used by Cloud Build when your
container image is built.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build and Artifact Registry APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build and Artifact Registry APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
If you've already installed Google Cloud CLI previously, make sure you have the
latest available version by running gcloud components update .
Ensure that your Google Cloud project has access to a container image repository.
To configure access to a
Docker repository in
Artifact Registry :
Create a new Docker repository in the same location of your Google Cloud project.
gcloud artifacts repositories create REPO_NAME \
--repository-format = docker \
--location = REGION --description = " DESCRIPTION "
Replace:
REPO_NAME with the name that you choose for your Docker repository.
REGION with the
location in or
nearest to the location of your Google Cloud project.
DESCRIPTION with a description of your choice.
For example, to create a docker repository in
us-west2 with the description "Docker repository", you run:
gcloud artifacts repositories create buildpacks-docker-repo --repository-format = docker \
--location = us-west2 --description = "Docker repository"
Verify that your repository was created:
gcloud artifacts repositories list
You should see name that you choose for your Docker repository in the list.
Optional: Download a sample application
Clone the sample repository to your local machine:
git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git
Change to the directory that contains the application sample code:
Go
cd buildpack-samples/sample-go
Java
cd buildpack-samples/sample-java-gradle
Node.js
cd buildpack-samples/sample-node
PHP
cd buildpack-samples/sample-php
Python
cd buildpack-samples/sample-python
Ruby
cd buildpack-samples/sample-ruby
.NET
cd buildpack-samples/sample-dotnet
Build the application with environment variables
In the root directory of your service, create or update your
project.toml project descriptor to
include the [[build.env]] section and any of the
supported
environment variable :
[[ build.env ]]
name = " ENVIRONMENT_VARIABLE_NAME "
value = " ENVIRONMENT_VARIABLE_VALUE "
Replace:
ENVIRONMENT_VARIABLE_NAME with the name of a
supported
environment variable .
ENVIRONMENT_VARIABLE_VALUE with the corresponding value
for the specified environment variable.
Example
[[ build.env ]]
name = "GOOGLE_ENTRYPOINT"
value = "gunicorn -p :8080 main:app"
Use gcloud to submit the application source code to
Cloud Build:
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME / IMAGE_NAME
Replace:
LOCATION with the region name of your container
repository. Example: us-west2 -docker.pkg.dev
PROJECT_ID with the ID of your Google Cloud project.
REPO_NAME with the name of your Docker repository.
IMAGE_NAME with the name of your container image.
Examples : If you downloaded a sample application, you run the
corresponding command:
Go
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME /sample-go
Java
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME /sample-java-gradle
Node.js
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME /sample-node
PHP
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME /sample-php
Python
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME /sample-python
Ruby
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME /sample-ruby
.NET
gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME /sample-dotnet
Verify that the sample application was successfully published to
REPO_NAME :
gcloud artifacts docker images list LOCATION -docker.pkg.dev/ project-id / REPO_NAME
Replace:
LOCATION with the region name of your container repository.
Example: us-west2 -docker.pkg.dev
PROJECT_ID with the ID of your Google Cloud project.
REPO_NAME with the name of your Docker repository.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
