---
title: "Create a derivative container \_|\_ Deep Learning Containers \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-containers/docs/derivative-container
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-containers/docs/choosing-container
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-containers/docs/derivative-container
  title: "Create a derivative container \_|\_ Deep Learning Containers \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Deep Learning Containers
Guides
Send feedback
Create a derivative container
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a derivative container based on one
of the standard available Deep Learning Containers images.
To complete the steps in this guide, you can use either
Cloud Shell or any
environment where the Google Cloud CLI is installed.
Before you begin
Before you begin, make sure you have completed the following steps.
Complete the set up steps in the Before you begin section of Getting
started with a local deep learning
container .
Make sure that billing is enabled for your Google Cloud project.
Learn how to enable
billing
Enable the Artifact Registry API.
Enable the
API
The Process
To create a derivative container, you'll use a process similar to this:
Create the initial Dockerfile and run modification commands.
To start, you create a Deep Learning Containers container using
one of the available image types .
Then use conda, pip, or
Jupyter commands to modify the container
image for your needs.
Build and push the container image.
Build the container image, and then push it to somewhere that is
accessible to your Compute Engine service account.
Create the initial Dockerfile and run modification commands
Use the following commands to select a Deep Learning Containers image type
and make a small change to the container image. This example shows how to
start with a TensorFlow image and updates the image
with the latest version of TensorFlow.
Write the following commands to the Dockerfile:
FROM us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-gpu:latest
# Uninstall the container's TensorFlow version and install the latest version
RUN pip install --upgrade pip && \
pip uninstall -y tensorflow && \
pip install tensorflow
Build and push the container image
Use the following commands to build and push the container image to
Artifact Registry, where it can be accessed by your
Google Compute Engine service account.
Create and authenticate the repository:
export PROJECT = $( gcloud config list project --format "value(core.project)" )
gcloud artifacts repositories create REPOSITORY_NAME \
--repository-format = docker \
--location = LOCATION
gcloud auth configure-docker LOCATION -docker.pkg.dev
Replace the following:
LOCATION : The regional or multi-regional
location of
the repository, for example us . To view a
list of supported locations, run the command
gcloud artifacts locations list .
REPOSITORY_NAME : The name of the repository
that you want to create, for example my-tf-repo .
Then, build and push the image:
export IMAGE_NAME = " LOCATION -docker.pkg.dev/ ${ PROJECT } / REPOSITORY_NAME /tf-custom:v1"
docker build . -t $IMAGE_NAME
docker push $IMAGE_NAME
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
