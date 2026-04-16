---
title: "apigee-pull-push \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push
  title: "apigee-pull-push \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
apigee-pull-push
Stay organized with collections
Save and categorize content based on your preferences.
You are currently viewing version 1.14 of the
Apigee hybrid documentation. For more information, see
Supported versions .
Version 1.14 keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
apigee-pull-push.sh is a utility that pulls all the images for the current Google Cloud
project from the Google
Cloud Container Registry and pushes them to your specified repository.
Note: You can set the current project with
gcloud config set project or gcloud init .
Requirements
Access to the Google
Cloud Container Registry
gcloud .
To install or upgrade gcloud , see Installing Google
Cloud SDK
File location
apigee-pull-push.sh can be found in
$APIGEE_HELM_CHARTS_HOME/apigee-operator/etc/tools/
Usage
Syntax
apigee-pull-push [REPO] [--list] [--help]
Optional: Check the current project in your gcloud context
This step is optional, because apigee-pull-push.sh will confirm the project and allow
you to proceed or abort.
apigee-pull-push.sh pulls the images for the current project in your
gcloud context. Check the project with the following command:
gcloud config list core/project --format='value(core.project)'
You can set the current project with the following command:
gcloud config set project PROJECT_ID
Where PROJECT_ID is the ID of the Google Cloud project for your Apigee hybrid installation.
Push the Apigee hybrid image to a repository you name
apigee-pull-push.sh REPO
Where REPO is the URL of the repository, for example /gcr.io/apigee-release .
Note: The repository must be a protocol-less URL (without HTTP or HTTPS ). For example, use ./apigee-pull-push.sh us-central1-docker.pkg.dev/apigee-hybrid-support-amer-01/hybrid , instead of ./apigee-pull-push.sh https://us-central1-docker.pkg.dev/apigee-hybrid-support-amer-01/hybrid .
Push the Apigee image to the default repository
apigee-pull-push.sh
This command pushes the image to us.gcr.io/ PROJECT_ID , for example
us.gcr.io/my-project .
List the images in your repository
Use the --list or -l option to list all the images in your repository.
apigee-pull-push.sh --list
Example output:
apigee:
gcr.io/apigee-release/hybrid/apigee-mart-server:1.14.3
gcr.io/apigee-release/hybrid/apigee-synchronizer:1.14.3
gcr.io/apigee-release/hybrid/apigee-runtime:1.14.3
gcr.io/apigee-release/hybrid/apigee-hybrid-cassandra-client:1.14.3
gcr.io/apigee-release/hybrid/apigee-hybrid-cassandra:1.14.3
gcr.io/apigee-release/hybrid/apigee-udca:1.14.3
gcr.io/apigee-release/hybrid/apigee-connect-agent:1.14.3
gcr.io/apigee-release/hybrid/apigee-watcher:1.14.3
gcr.io/apigee-release/hybrid/apigee-operators:1.14.3
gcr.io/apigee-release/hybrid/apigee-redis:1.14.3
gcr.io/apigee-release/hybrid/apigee-mint-task-scheduler:1.14.3
third party:
gcr.io/apigee-release/hybrid/apigee-stackdriver-logging-agent:1.14.3
gcr.io/apigee-release/hybrid/apigee-prom-prometheus:1.14.3
gcr.io/apigee-release/hybrid/apigee-stackdriver-prometheus-sidecar:1.14.3
gcr.io/apigee-release/hybrid/apigee-kube-rbac-proxy:1.14.3
gcr.io/apigee-release/hybrid/apigee-envoy:1.14.3
gcr.io/apigee-release/hybrid/apigee-prometheus-adapter:1.14.3
gcr.io/apigee-release/hybrid/apigee-asm-ingress:1.14.3
gcr.io/apigee-release/hybrid/apigee-asm-istiod:1.14.3
gcr.io/apigee-release/hybrid/apigee-fluent-bit:1.14.3
gcr.io/apigee-release/hybrid/apigee-open-telemetry-collector:1.14.3
Note: Prior to Apigee hybrid vsersion 1.14.2, the version tag for third party images was a version unique to the component version. For example gcr.io/apigee-release/hybrid/apigee-stackdriver-prometheus-sidecar:0.10.0 .
In version 1.14.2 and newer, you can see the original version tag as the label returned by the docker history or docker inspect commands. For example:
docker history gcr.io/apigee-release/hybrid/apigee-stackdriver-prometheus-sidecar:0.10.0
IMAGE CREATED CREATED BY SIZE COMMENT
cb2c96a7aeab 3 months ago /bin/sh -c #(nop) LABEL original-label=0.10.2 0B
Get help for apigee-pull-push.sh
apigee-pull-push.sh --help
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
