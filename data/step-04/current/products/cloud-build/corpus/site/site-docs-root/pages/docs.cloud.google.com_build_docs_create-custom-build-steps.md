---
title: "Using community-contributed builders and custom builders \_|\_ Cloud Build\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/create-custom-build-steps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs
source_metadata:
  url: https://docs.cloud.google.com/build/docs/create-custom-build-steps
  title: "Using community-contributed builders and custom builders \_|\_ Cloud Build\
    \ \_|\_ Google Cloud Documentation"
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
Using community-contributed builders and custom builders
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use community-contributed builders and custom builders in Cloud Build. The
Cloud Build developer community provides open-source
builders
that you can use to execute your tasks. If the task you want to perform requires
capabilities that are not provided by an existing image, you can build your own
custom image and use it in a build step. To learn about the different types of
builders, see Cloud Builders .
If you're new to Cloud Build, read the quickstarts
and the Build configuration overview first.
Using community-contributed builders
Prebuilt images are not available for community-contributed builders; to use
these builders in a Cloud Build config file, you must first build the
image and push it to Artifact Registry in
your project.
To use a community-contributed builder:
Build and push the builder:
Navigate to your project root directory.
Clone the cloud-builders-community repository:
git clone https : //github.com/GoogleCloudPlatform/cloud-builders-community.git
Navigate to the builder image you want to use, where builder-name
is the directory that contains the builder:
cd cloud - builders - community / builder - name
Submit the builder to your project:
gcloud builds submit .
Navigate back to your project root directory:
cd .. / ..
Remove the repository from your root directory:
rm - rf cloud - builders - community /
In your Cloud Build config file, use the builder in a build step:
YAML
steps :
- name : 'gcr.io/ project-id / builder-name '
args : [ ' arg1 ' , ' arg2 ' , ... ]
...
JSON
{
"steps" : [
{
"name" : "gcr.io/ project-id / builder-name " ,
"args" : [
" arg1 " ,
" arg2 " ,
...
]
...
}
]
}
Use the build config file to start the build manually
or build using triggers .
For examples on using community-contributed builders, see
Deploy to Firebase
and Build VM images using Packer .
Creating a custom builder
If the task you want to perform requires capabilities that are not provided by
a public image, a supported builder, or a community-contributed builder ,
you can build your own image and use it in a build step.
Some examples of when you might want to use a custom builder image are:
Downloading source code or packages from external locations.
Using an external tool chain.
Caching any necessary libraries.
Pre-building source (with Cloud Build responsible only for
potentially packaging the build into an image).
Like any other builder, a custom builder runs with the source mounted under
/workspace , and is run with a working directory in /workspace . Any files left
in /workspace by a given build step are available to other build steps.
Your custom builder can push to or pull from a repository in
Artifact Registry (hosted at gcr.io/$PROJECT-NAME/ )
to which your build service account has
access.
The following steps show how to create and use a custom builder with an example
Dockerfile :
Create a custom builder image:
Create the Dockerfile for the custom builder. The following
code shows an example Dockerfile :
FROM alpine
RUN apk add curl
CMD curl https : //httpbin.org/ip -s > myip.txt; echo "*** My IP is: $(cat myip.txt)"
Build and push the custom builder to the Artifact Registry in your project,
replacing values for project-id and image-name :
gcloud builds submit -- tag gcr . io / project - id / image - name
Use the custom builder image in Cloud Build by specifying the builder
in the name field of a build step:
YAML
steps :
- name : 'gcr.io/ project-id / image-name '
id : Determine IP of this build worker
JSON
{
"steps" : [
{
"name" : "gcr.io/ project-id / image-name " ,
"id" : "Determine IP of this build worker"
}
]
}
Use the build config file to start the build manually
or build using triggers .
Note: Users can specify a working directory using the dir field in a build config
file. Because your custom builder's users may specify any dir value,
the builder should avoid hard-coding /workspace if possible. Instead, use the
current working directory and relative paths.
What's next
Learn how to run bash scripts in build steps .
Learn how to configure build step order .
Learn how to write a basic build config file .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
