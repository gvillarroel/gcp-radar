---
title: "Detach your CNCF conformant attached cluster \_|\_ GKE attached clusters \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/detach-cluster
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/detach-cluster
  title: "Detach your CNCF conformant attached cluster \_|\_ GKE attached clusters\
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
Detach your CNCF conformant attached cluster
Stay organized with collections
Save and categorize content based on your preferences.
Detaching a cluster means deregistering it from Google Cloud
Fleet management and removing the associated
software from your cluster. You can detach the cluster with the Google Cloud CLI
or the Google Cloud console.
gcloud CLI
To detach a cluster, use the
gcloud container attached clusters delete command .
Providing the optional flag --ignore-errors forces the cluster
to detach even if some in-cluster resources can't be deleted. Including the
optional --allow-missing flag means that the delete request returns
a success code even if the cluster can't be found:
gcloud container attached clusters delete CLUSTER_NAME \
--ignore-errors \
--allow-missing \
--location= GOOGLE_CLOUD_REGION
Replace the following:
CLUSTER_NAME : the name of your cluster
GOOGLE_CLOUD_REGION : the name of the Google Cloud region
administering your cluster
For more information, see
gcloud container attached clusters delete .
Console
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
In the Google Cloud console, go to the Google Kubernetes Engine clusters
overview page.
Go to GKE clusters
Select the Google Cloud project that the cluster is in.
Click the name of the cluster you want to detach, and then select
View more details in the side panel.
Near the top of the window, click delete
Delete .
When prompted to confirm, enter the name of the cluster and
click Confirm .
When you detach a cluster, all Google Cloud resources related to the cluster,
such as the fleet membership resources and workload identity pool OIDC
providers are deleted. Any features installed in
your cluster, such as Config Sync and Cloud Service Mesh, are also deleted. The
Kubernetes cluster itself isn't deleted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
