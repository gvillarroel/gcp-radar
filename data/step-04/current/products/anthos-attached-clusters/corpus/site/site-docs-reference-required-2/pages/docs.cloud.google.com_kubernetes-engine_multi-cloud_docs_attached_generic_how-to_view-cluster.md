---
title: "View your CNCF conformant attached cluster's status \_|\_ GKE attached clusters\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/view-cluster
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/view-cluster
  title: "View your CNCF conformant attached cluster's status \_|\_ GKE attached clusters\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE attached clusters
Guides
Send feedback
View your CNCF conformant attached cluster's status
Stay organized with collections
Save and categorize content based on your preferences.
After you create a cluster and node pool, you can view a cluster's status with
the Google Cloud CLI or the Google Cloud console.
gcloud CLI
To see the state of an attached cluster, run the following command:
gcloud container attached clusters describe CLUSTER_NAME \
--location= GOOGLE_CLOUD_REGION
Replace:
CLUSTER_NAME : the name of your cluster
GOOGLE_CLOUD_REGION : the name of the Google Cloud region administering your
cluster
For more information, see
gcloud container attached clusters describe .
To see the state of all clusters in a Google Cloud region:
gcloud container attached clusters list --location= GOOGLE_CLOUD_REGION
Replace GOOGLE_CLOUD_REGION with the name of the Google Cloud
region administering your cluster.
For more information, see
gcloud container attached clusters list .
Console
In the Google Cloud console, go to the Google Kubernetes Engine clusters
overview page.
Go to GKE clusters
Your clusters are listed by their name and location.
Click the cluster's name. A panel with information on the cluster,
including its status and enabled features, appears.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
