---
title: "Install Cloud Monitoring on CNCF conformant attached clusters \_|\_ GKE attached\
  \ clusters \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/managed-service-prometheus
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/managed-service-prometheus
  title: "Install Cloud Monitoring on CNCF conformant attached clusters \_|\_ GKE\
    \ attached clusters \_|\_ Google Cloud Documentation"
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
Install Cloud Monitoring on CNCF conformant attached clusters
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how you can set up managed data collection with
Google Cloud Managed Service for Prometheus for
GKE attached clusters. This feature is available on Google Cloud clusters
running Kubernetes version 1.25 or later. It is also supported on Kubernetes
clusters at version 1.24 for customers who had earlier signed up for a
preview of this feature on that version.
With this feature, you can use a PodMonitoring resource to choose the metrics
that you want to ingest into Cloud Monitoring. You can then view these
metrics in the Google Cloud console.
Limitations
This feature is not available on Kubernetes clusters earlier than version 1.24.
This feature requires a Linux workload.
Set up managed data collection
To set up managed data collection with Managed Service for Prometheus, complete the following steps:
Note: Starting with Kubernetes version 1.28, manual policy binding to
authorize service accounts for data collection is no longer necessary. The
required permissions are now automatically granted to this service account. You
can therefore disregard step 1 in this section.
Authorize the gmp-system/collector and gmp-system/rule-evaluator service
accounts to write your metrics:
gcloud projects add-iam-policy-binding GOOGLE_PROJECT_ID \
--member = "serviceAccount: GOOGLE_PROJECT_ID .svc.id.goog[gmp-system/collector]" \
--role = roles/monitoring.metricWriter
gcloud projects add-iam-policy-binding GOOGLE_PROJECT_ID \
--member = "serviceAccount: GOOGLE_PROJECT_ID .svc.id.goog[gmp-system/rule-evaluator]" \
--role = roles/monitoring.viewer
gcloud projects add-iam-policy-binding GOOGLE_PROJECT_ID \
--member = "serviceAccount: GOOGLE_PROJECT_ID .svc.id.goog[gmp-system/rule-evaluator]" \
--role = roles/monitoring.metricWriter
Replace GOOGLE_PROJECT_ID with your Google Cloud
project ID.
Adding this IAM binding fails unless at least one
cluster has been created in your Google Cloud project. This is because the
workload identity pool it refers to
( GOOGLE_PROJECT_ID .svc.id.goog ) isn't provisioned until
cluster creation.
Use the
gcloud container attached clusters register command
to register the cluster, and include the optional
--enable-managed-prometheus flag.
To configure which workload metrics you want to ingest, set up a
PodMonitoring
resource. For an example, see
Configure a PodMonitoring resource
in the managed data collection with Managed Service for Prometheus documentation.
After you enable managed data collection with Managed Service for Prometheus, GKE attached clusters creates the
gmp-system namespace. Don't modify or deploy anything in this namespace.
GKE attached clusters also creates the gmp-public namespace. Managed Service
for Prometheus uses the gmp-public namespace to deploy the
OperatorConfig
resource.
Update your Prometheus configuration
To disable or re-enable Prometheus data collection, use the
gcloud container attached clusters update command . When updating the cluster, include either the
--disable-managed-prometheus or --enable-managed-prometheus optional flag.
What's next
Discover how to Configure a query user interface
in the managed data collection with Managed Service for Prometheus documentation.
Learn about Managed rule evaluation and alerting
in the Google Cloud Managed Service for Prometheus documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
