---
title: "Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs
source_metadata:
  url: https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts
  title: "Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation"
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
Deploying to Cloud Run using Cloud Build
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to automatically deploy Cloud Run services using
Cloud Build. If you're new to
Cloud Build, read the quickstarts and the
build configuration overview first.
Cloud Run lets you run stateless images in a
serverless environment.
Using Cloud Build, you can deploy images from Artifact Registry to
Cloud Run. You can deploy an existing image, build and deploy an image,
or automate the deployment.
Note: You can also use Cloud Deploy to set up a continuous-delivery
pipeline to deploy to Cloud Run.
Learn more .
Before you begin
Enable the Cloud Build, Cloud Run, Artifact Registry, and Resource Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Have your application source code ready. Your source code needs to be stored
in a repository such as GitHub or Bitbucket.
To run the gcloud commands in this page, install
the Google Cloud CLI .
If you're using VPC Service Controls, then set up a private pool in the
VPC Service Controls perimeter . You must also configure
Cloud Run for VPC Service Controls .
Required Identity and Access Management permissions
In the Google Cloud console, go to the
settings Cloud Build Permissions page:
Go to Permissions
For your specified Cloud Build service account
or default Cloud Build service account , set the status of the following roles to Enabled :
Cloud Run Admin ( roles/run.admin ) | Lets Cloud Build deploy new services to Cloud Run.
In the Assign Service Account User Role panel, choose a service account to impersonate and then click Grant Permission .
Storage Admin ( roles/storage.admin ) | Enables reading and writing from Cloud Storage.
Artifact Registry Writer ( roles/artifactregistry.writer ) | Allows pulling images from and writing to Artifact Registry.
Logs Writer ( roles/logging.logWriter ) | Allows log entries to be written to Cloud Logging.
Cloud Build Editor ( roles/cloudbuild.builds.editor ) | Allows your service account to run builds.
Building and deploying an image
Cloud Build lets you build an image, store the built image
in Artifact Registry, and then deploy the image to Cloud Run.
To build and deploy an image:
In your project root directory, create a config file named cloudbuild.yaml .
In the build config file, add docker build steps to build the image and
push it to Artifact Registry, and then add a gcloud build step to
invoke the gcloud run deploy command to deploy the image on
Cloud Run:
steps :
# Build the image
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE ' , '.' ]
# Push the image to Artifact Registry
- name : 'gcr.io/cloud-builders/docker'
args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE ' ]
# Deploy image to Cloud Run
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk'
entrypoint : gcloud
args : [ 'run' , 'deploy' , ' SERVICE_NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE_REGION ' ]
images :
- ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE '
Where:
REPOSITORY is the name of the Artifact Registry
repository from where you deploy your image.
LOCATION is the location of your
Artifact Registry repository, such as us-east1 .
PROJECT_ID is your Google Cloud
project ID where your image is stored.
SERVICE_NAME is the name of the
Cloud Run service.
SERVICE_REGION is the
region of the Cloud Run service you are deploying.
IMAGE is the name of your image in
Artifact Registry.
Navigate to your project root directory and run the following command, where
LOCATION is one of the
supported build regions to run the build:
gcloud builds submit -- region = LOCATION
After successful completion, a success message is displayed along with the URL
of the deployed service.
Continuous deployment
You can automate the deployment of your software to Cloud Run by
creating Cloud Build triggers. You can
configure your triggers to build and deploy images whenever you update your
source code.
To automate your deployment:
In your repository root, add a config file named cloudbuild.yaml with steps
to build the image, push the image to Artifact Registry, and then
invoke the gcloud run deploy command:
steps :
# Build the image
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE / SERVICE_NAME :$COMMIT_SHA' , '.' ]
# Push the image to Artifact Registry
- name : 'gcr.io/cloud-builders/docker'
args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE / SERVICE_NAME :$COMMIT_SHA' ]
# Deploy image to Cloud Run
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk'
entrypoint : gcloud
args :
- 'run'
- 'deploy'
- ' SERVICE_NAME '
- '--image'
- ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE / SERVICE_NAME :$COMMIT_SHA'
- '--region'
- ' SERVICE_REGION '
images :
- ' LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY / IMAGE / SERVICE_NAME :$COMMIT_SHA'
Where:
REPOSITORY is the name of the Artifact Registry
repository from where you deploy your image.
LOCATION is the location of your
Artifact Registry repository, such as us-east1 .
PROJECT_ID is your Google Cloud
project ID where your image is stored.
SERVICE_NAME is the name of the
Cloud Run service.
SERVICE_REGION is the
region of the Cloud Run service you are deploying.
IMAGE is the name of your image in
Artifact Registry.
The $COMMIT_SHA substitution variable is populated by
Cloud Build when triggered from a Git repository.
Create a build trigger with the config file created in the previous
step:
Open the Triggers page:
Go to the Triggers page
Click Create Trigger .
In the Name field, enter a name for your trigger.
Under Region , select the region for your trigger.
Note: The region for your trigger must match the region
of the Cloud Run service you're deploying to.
Under Event , select the repository event to start your trigger.
Under Source , select your repository and the branch or tag name
that will start your trigger.
For more information on specifying which branches to autobuild, see
Creating a build trigger .
Under Configuration , select Cloud Build
configuration file (YAML or JSON) .
In the Cloud Build configuration file location field,
type cloudbuild.yaml after the / .
Click Create to save your build trigger.
Now, when you push new code to your repository, Cloud Build
invokes a build and deploys the service to Cloud Run.
Note: To make the deployed service public, make a one-time change to the
service Identity and Access Management settings .
For more information on creating Cloud Build triggers, see
Creating and managing build triggers .
Code examples
Here are some sample repositories, each of which contains a sample
application and a build config file to deploy application to Cloud Run:
deploy-prebuilt :
A code example that shows how to deploy a prebuilt image to Cloud Run.
run-example-builddeploy : A code example that shows how to build and deploy an image to Cloud Run.
What's next
Learn how to use Cloud Deploy to deploy to Cloud Run .
Learn how to deploy on GKE .
Learn how to deploy on Cloud Run functions .
Learn how to deploy on App Engine .
Learn how to deploy on Firebase .
Learn how to perform blue-green deployments on Compute Engine .
Learn how to troubleshoot build errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
