---
title: "Enable GKE logging \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging
  title: "Enable GKE logging \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
    \ Documentation"
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
Enable GKE logging
Stay organized with collections
Save and categorize content based on your preferences.
Job driver logs
See Managed Service for Apache Spark job logs in Logging
for information on configuring and viewing Managed Service for Apache Spark on GKE Spark
job driver logs.
Cloud Logging
Enable Logging
to view, search, filter, and archive Managed Service for Apache Spark on GKE logs in Cloud Logging.
You can search for Spark driver and executor logs in Cloud Logging
using the following labels:
dataproc.googleapis.com/cluster-uuid = Managed Service for Apache Spark cluster UUID
dataproc.googleapis.com/job-uuid = Managed Service for Apache Spark job UUID
dataproc.googleapis.com/role
Sample queries:
labels."k8s-pod/dataproc_googleapis_com/cluster-uuid"=" Managed Service for Apache Spark cluster UUID "
labels."k8s-pod/dataproc_googleapis_com/job-uuid"=" Managed Service for Apache Spark job UUID "
labels."k8s-pod/dataproc_googleapis_com/role"="driver"
What's next
Learn how to access Managed Service for Apache Spark on GKE job and cluster logs in Logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
