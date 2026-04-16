---
title: "Managed Service for Apache Spark on GKE overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/create-cluster
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview
  title: "Managed Service for Apache Spark on GKE overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Managed Service for Apache Spark on GKE overview
Stay organized with collections
Save and categorize content based on your preferences.
Managed Service for Apache Spark on GKE allows you to execute Big Data applications using the
Managed Service for Apache Spark jobs API on GKE clusters.
Use the Google Cloud console, Google Cloud CLI or the Managed Service for Apache Spark API
(HTTP request or Cloud Client Libraries) to
create a Managed Service for Apache Spark on GKE virtual cluster ,
then submit a Spark, PySpark, SparkR, or Spark-SQL job to the Managed Service for Apache Spark
service.
Managed Service for Apache Spark on GKE supports
Spark 3.5 versions .
How Managed Service for Apache Spark on GKE works
Managed Service for Apache Spark on GKE deploys Managed Service for Apache Spark virtual clusters on
a GKE cluster. Unlike
Managed Service for Apache Spark on Compute Engine clusters ,
Managed Service for Apache Spark on GKE virtual clusters do not include separate
master and worker VMs. Instead, when you create a Managed Service for Apache Spark on GKE virtual cluster,
Managed Service for Apache Spark on GKE creates node pools within a GKE cluster. Managed Service for Apache Spark on GKE
jobs are run as pods on these node pools. The node pools and
scheduling of pods on the node pools are managed by GKE.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
