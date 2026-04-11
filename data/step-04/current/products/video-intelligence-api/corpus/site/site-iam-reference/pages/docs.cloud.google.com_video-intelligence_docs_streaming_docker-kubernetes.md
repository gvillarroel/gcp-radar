---
title: "Using Docker & Kubernetes \_|\_ Video Intelligence API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
  title: "Using Docker & Kubernetes \_|\_ Video Intelligence API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Using Docker & Kubernetes
Stay organized with collections
Save and categorize content based on your preferences.
Beta
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
A
Docker image
is provided for you to evaluate these features. You can download
this image as part of the
AIStreamer .
Please note that use of third-party software is solely at your
discretion. Google does not own the copyright of third-party software.
Prerequistes
Install Docker .
Install Google Cloud CLI .
Install Kubernetes .
Build Docker image
Go into the ingestion directory
and run the following command line on your host machine:
$ export DOCKER_IMAGE = gcr.io/gcp-project-name/docker-image-name:version
$ docker build -t $DOCKER_IMAGE -f env/Dockerfile .
Try Docker image on your local host
Run following command in the terminal for your host machine:
$ docker run -it $DOCKER_IMAGE /bin/bash
The command returns a response similar to the following example.
root @e504724e76fc : / #
To open another terminal connecting to Docker, run the following command on
the host machine:
$ docker exec -it e504724e76fc /bin/bash
Now, you have both host terminals that are in the same Docker container.
Docker image environment setting
Some environment settings can be customized in
the Docker image .
# set up environment for Google Video Intelligence Streaming API
ENV SRC_DIR /googlesrc #Source code directory
ENV BIN_DIR /google #Binary directory
Push Docker image to Google Cloud container registry
Run the following command in the terminal for your host machine:
$ gcloud docker --verbosity debug -- push $DOCKER_IMAGE
You might need to set access control.
Deploy to Google Cloud
Run the following commands in the terminal for your host machine:
$ export KUBE_ID = any_string_you_like
$ kubectl run -it $KUBE_ID --image = $DOCKER_IMAGE -- /bin/bash
This returns a response similar to the following:
root@$KUBE_ID-215855480-c4sqp:/#
To open another terminal connecting to the same Kubernetes container on Google Cloud, run
the following command line on host machine:
$ kubectl exec -it $KUBE_ID -215855480-c4sqp -- /bin/bash
Now, you have both host terminals that are in the same Kubernetes container on
Google Cloud.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
