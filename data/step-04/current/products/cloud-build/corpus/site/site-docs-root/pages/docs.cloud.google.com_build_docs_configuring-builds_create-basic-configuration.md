---
title: "Create a build configuration file \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs
source_metadata:
  url: https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration
  title: "Create a build configuration file \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
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
Create a build configuration file
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a build configuration file that you can
use to start a build on Cloud Build.
A build config file defines the fields that are needed for
Cloud Build to perform your tasks. You'll need a build config file
if you're starting builds using the gcloud command-line
tool or build
triggers . You can write
the build config file using the YAML or the JSON syntax.
Before you begin
Read Build Configuration Overview to
learn about the fields you can include in a build config file.
Creating a build config
The following steps explain how to create a basic build config file. Each of
the fields in the build config file defines a part of the task you want to
perform. The only required field in the build config file is the name field
for a step. All other fields are optional.
Note: The example config file mentioned on this page does not include
all available fields. To learn about all fields you can include
in a build config file, see Build Configuration
Overview .
YAML
Create the build config file . In your project root directory, create
a file named cloudbuild.yaml . This is your Cloud Build
config file.
Add the steps field . The steps section in the build config file
contains the build steps that you want Cloud Build to perform.
steps :
Add the first step . Under steps: , add a name field and point it
to a container image to execute your task. Cloud Build and its
developer community provides several container images with common tools
and languages installed. You can use any of these images (also
called Cloud Builders ) or any publicly available image in a build
step. For information on different types of container images you can use
in a build step, see Cloud
Builders .
The following snippet shows a build step with a docker builder
gcr.io/cloud-builders/docker , which is a container image running
Docker.
steps :
- name : 'gcr.io/cloud-builders/docker'
Add step arguments . The args field of a step takes a list of arguments
and passes them to the builder referenced by the name field. If the builder
in the name field has an entrypoint, args in the list are used to
access that entrypoint. If the builder in the name field does not have an
entrypoint, the first element in args is used as the entrypoint.
In the following example:
build is the entrypoint to the Docker cloud builder.
-t is the Docker tag.
us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/my-image is the
name of the image to be built in Artifact Registry. The build
step uses the default substitution for project ID, therefore this
value is automatically substituted at build time.
. is the location of the source code, which indicates the source
code is in the current working directory.
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/my-image' , '.' ]
Add more steps . You can add any number of build steps to your build
config file by including additional name fields and pointing them to
cloud
builders .
The following snippet includes two more steps to the build config
file:
a docker build step to invoke the docker push command to push the
image build in the previous step to
Artifact Registry .
a build step for the Google Cloud SDK command with the gcloud
entrypoint specified, which creates a Compute Engine instance
from the container image in Artifact Registry. The env field
is included to specify the Compute Engine zone
and region.
- name : 'gcr.io/cloud-builders/docker'
args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/my-image' ]
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk'
entrypoint : 'gcloud'
args : [ 'compute' , 'instances' , 'create-with-container' , 'my-vm-name' , '--container-image' , 'us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/my-image' ]
env :
- 'CLOUDSDK_COMPUTE_REGION=us-central1'
- 'CLOUDSDK_COMPUTE_ZONE=us-central1-a'
Include additional build configuration fields . You can configure the
build further by including fields such as machineType ,
tags , or timeout . For the complete list of fields you can include
in the build config file see Build Configuration Overview .
In the following example, the gcr.io/google.com/cloudsdktool/cloud-sdk
build step times out after 240 seconds.
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk'
entrypoint : 'gcloud'
timeout : 240s
args : [ 'compute' , 'instances' , 'create-with-container' , 'my-vm-name' , '--container-image' , 'us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/my-image' ]
env :
- 'CLOUDSDK_COMPUTE_REGION=us-central1'
- 'CLOUDSDK_COMPUTE_ZONE=us-central1-a'
See the following snippet for the complete example of a basic build
config file:
steps :
# Docker Build
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' ,
'us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage' ,
'.' ]
# Docker Push
- name : 'gcr.io/cloud-builders/docker'
args : [ 'push' ,
'us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage' ]
# Entrypoint, timeout and environment variables
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk'
entrypoint : 'gcloud'
timeout : 240s
args : [ 'compute' , 'instances' ,
'create-with-container' , 'my-vm-name' ,
'--container-image' ,
'us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage' ]
env :
- 'CLOUDSDK_COMPUTE_REGION=us-central1'
- 'CLOUDSDK_COMPUTE_ZONE=us-central1-a'
In the example, container images are stored in Artifact Registry. If your
build produces any non-container artifacts, you can store them in
Cloud Storage using the artifacts field. For instructions on doing
this, see Storing Images and
Artifacts .
JSON
Create the build config file . In your project root directory, create
a file named cloudbuild.json . This is your Cloud Build
config file.
Add the steps field . The steps section in the build config file
contains the build steps that you want Cloud Build to perform.
{
"steps" :
}
Add the first step . Under steps: , add a name field and point it
to a container image to execute your task. Cloud Build and its
developer community provides several container images with common tools
and languages installed. You can use any of these images (also
called Cloud Builders ) or any publicly available image in a build
step. For information on different types of container images you can use
in a build step, see Cloud
Builders .
The following snippet shows a build step with a docker builder
gcr.io/cloud-builders/docker , which is a container image running
Docker.
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker"
}
]
}
Add step arguments . The args field of a step takes a list of arguments
and passes them to the builder referenced by the name field. If the builder
in the name field has an entrypoint, args in the list are used to
access that entrypoint. If the builder in the name field does not have an
entrypoint, the first element in args is used as the entrypoint.
In the following example:
build is the entrypoint to the Docker cloud builder.
-t is the Docker tag.
us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/my-image is the
name of the image to be built in Artifact Registry. The build
step uses the default substitution for project ID, therefore this
value is automatically substituted at build time.
. is the location of the source code, which indicates the source
code is in the current working directory.
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage" ,
"."
]
}
]
}
Add more steps . You can add any number of build steps to your build
config file by including additional name fields and pointing them to
cloud
builders .
The following snippet includes two more steps to the build config
file:
a docker build step to invoke the docker push command to push the
image build in the previous step to
Artifact Registry .
a build step for the Google Cloud SDK command with the gcloud
entrypoint specified, which creates a Compute Engine instance
from the container image in Artifact Registry. The env field
is included to specify the Compute Engine zone
and region.
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"push" ,
"us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage"
]
},
{
"name" : "gcr.io/google.com/cloudsdktool/cloud-sdk" ,
"entrypoint" : "gcloud" ,
"args" : [
"compute" ,
"instances" ,
"create-with-container" ,
"my-vm-name" ,
"--container-image" ,
"us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage"
],
"env" : [
"CLOUDSDK_COMPUTE_REGION=us-central1" ,
"CLOUDSDK_COMPUTE_ZONE=us-central1-a"
]
}
Include additional build configuration fields . You can configure the
build further by including fields such as machineType ,
tags , or timeout . For the complete list of fields you can include
in the build config file see Build Configuration Overview .
In the following example, the gcr.io/google.com/cloudsdktool/cloud-sdk
build step times out after 240 seconds.
{
"name" : "gcr.io/google.com/cloudsdktool/cloud-sdk" ,
"entrypoint" : "gcloud" ,
"timeout" : "240s" ,
"args" : [
"compute" ,
"instances" ,
"create-with-container" ,
"my-vm-name" ,
"--container-image" ,
"us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage"
],
"env" : [
"CLOUDSDK_COMPUTE_REGION=us-central1" ,
"CLOUDSDK_COMPUTE_ZONE=us-central1-a"
]
}
See the following snippet for the complete example of a basic build
config file:
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage" ,
"."
]
},
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"push" ,
"us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage"
]
},
{
"name" : "gcr.io/google.com/cloudsdktool/cloud-sdk" ,
"entrypoint" : "gcloud" ,
"timeout" : "240s" ,
"args" : [
"compute" ,
"instances" ,
"create-with-container" ,
"my-vm-name" ,
"--container-image" ,
"us-central1-docker.pkg.dev/${PROJECT_ID}/my-docker-repo/myimage"
],
"env" : [
"CLOUDSDK_COMPUTE_REGION=us-central1" ,
"CLOUDSDK_COMPUTE_ZONE=us-central1-a"
]
}
]
}
In the example, container images are stored in Artifact Registry. If your
build produces any non-container artifacts, you can store them in
Cloud Storage using the artifacts field. For instructions on doing
this, see Storing Images and
Artifacts .
What's next
Learn how to run your builds
manually and
using triggers using
the build config file.
Learn how to write build configs for including dependencies, and building,
testing, and deploying
artifacts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
