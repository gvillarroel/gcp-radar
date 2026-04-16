---
title: "Configure the Google Cloud CLI \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/configure-cloud-sdk
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/configure-cloud-sdk
  title: "Configure the Google Cloud CLI \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Configure the Google Cloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
Before using GKE on AWS, you must install the Google Cloud CLI and enable
required APIs.
To configure Google Cloud CLI, run the following commands:
Check your Google Cloud CLI installation with the following command:
gcloud version
If the Google Cloud CLI is not installed, or if its version is earlier than
412.0.0,
Install the latest version of the Google Cloud CLI .
Install the kubectl
additional component .
If you haven't already done so,
create your Google Cloud project .
Save your project's name, you'll use it later.
Run the following command to authenticate with your Google Cloud
account:
gcloud auth login
Enable the GKE Multi-Cloud API and its service dependencies with the
following commands. These commands will enable the APIs for the project
configured in your Google Cloud CLI.
gcloud services enable gkemulticloud.googleapis.com
gcloud services enable gkeconnect.googleapis.com
gcloud services enable gkehub.googleapis.com
gcloud services enable connectgateway.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com
gcloud services enable anthos.googleapis.com
gcloud services enable logging.googleapis.com
gcloud services enable monitoring.googleapis.com
gcloud services enable opsconfigmonitoring.googleapis.com
gcloud services enable kubernetesmetadata.googleapis.com
What's next
Configure the AWS CLI
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
