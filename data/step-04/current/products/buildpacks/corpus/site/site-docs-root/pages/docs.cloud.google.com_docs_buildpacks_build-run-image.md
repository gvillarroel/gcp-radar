---
title: "Configure your build and run images \_|\_ Buildpacks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/buildpacks/build-run-image
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/docs/buildpacks
source_metadata:
  url: https://docs.cloud.google.com/docs/buildpacks/build-run-image
  title: "Configure your build and run images \_|\_ Buildpacks \_|\_ Google Cloud\
    \ Documentation"
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
Configure your build and run images
Stay organized with collections
Save and categorize content based on your preferences.
Buildpacks uses a default
builder ,
which consists of all the components necessary to execute a build of your
service including both a build and run image:
Build image : Used by the builder image to create the build environment
where the buildpacks
lifecycle
is executed. This is where your application or function is prepared for
containerization.
Run image : The base image from which the container image of your service
is built. This is the image that hosts your built application or function.
Both images can be customized and extended to suit your needs. For example, you
can customize images to add the packages that are required for building your
service, or to install system packages so they are available when your
service runs.
Before you begin
You use the pack CLI to locally build your service into a container image.
Before you begin
Install Docker Community Edition (CE)
on your workstation. Docker is used by pack as an OCI image builder.
Install Pack CLI .
Install the Git source control
tool to fetch the sample application from GitHub.
Customize the build and run images
Buildpacks use a builder image to construct your service into a
container image. When the build process is complete, your application or
function is inserted into a run image. Learn more about the build process
at Buildpacks Concepts .
Extending the builder image
To customize the default builder image:
Create a custom builder.Dockerfile from the default builder image. You
must specify the tag for the
version of the builder that supports your base
image. For example, the :v1 base image tag is unsupported by the
:google-22 builder tag.
Example:
FROM gcr.io/buildpacks/builder
USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
subversion && \
apt-get clean && \
rm -rf /var/lib/apt/lists/*
USER cnb
Build your custom builder image from the builder.Dockerfile file:
docker build -t BUILDER_IMAGE_NAME -f builder.Dockerfile .
Replace BUILDER_IMAGE_NAME with the name that you choose for your custom
builder image.
Run the pack build
command
with your custom builder image to build the new container image of your
application or function:
pack build SERVICE_IMAGE_NAME --builder BUILDER_IMAGE_NAME
Replace:
SERVICE_IMAGE_NAME with the name that you choose for your application
or function image.
BUILDER_IMAGE_NAME with the name of your custom
builder image.
Extending the run image
To customize the default run container image:
Create a custom run.Dockerfile from the default run image. You
must specify the tag for the
version of the builder that supports your run
image. For example, the :v1 run image tag is unsupported by the
:google-22 builder tag.
Example:
FROM gcr.io/buildpacks/gcp/run
USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
imagemagick && \
apt-get clean && \
rm -rf /var/lib/apt/lists/*
USER 33 :33
Build your custom run image from the run.Dockerfile file:
docker build -t RUN_IMAGE_NAME -f run.Dockerfile .
Replace RUN_IMAGE_NAME with the name that you choose for your custom run
image.
Run the pack build
command
with your custom run image to build the new container image of your
application or function:
pack build SERVICE_IMAGE_NAME --builder gcr.io/buildpacks/builder:v1 --run-image RUN_IMAGE
Replace:
SERVICE_IMAGE_NAME with the name that you choose for your application or
function image.
RUN_IMAGE_NAME with the name of your custom run image.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
