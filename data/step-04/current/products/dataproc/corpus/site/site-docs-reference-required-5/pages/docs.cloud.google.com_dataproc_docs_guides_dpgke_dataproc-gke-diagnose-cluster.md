---
title: "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster
  title: "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\
    \ Cloud Documentation"
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
Diagnose GKE clusters
Stay organized with collections
Save and categorize content based on your preferences.
Managed Service for Apache Spark provides a gcloud CLI dataproc clusters diagnose
command to help you troubleshoot Managed Service for Apache Spark on GKE cluster and job issues. This
command gathers and archives cluster-related configuration files, logs, and outputs
into an archive file. and then uploads the archive to the Cloud Storage
staging bucket you specified when you
created your Managed Service for Apache Spark on GKE cluster .
Diagnose archive file
The following tables list metrics and other information included in the
dataproc clusters diagnose command archive file.
System information
Item
Archive location
GKE node metrics
where virtual Managed Service for Apache Spark on GKE pods run:
CPU usage
Memory usage
/system/ NODE_NAME .json
Network metrics and file system status of running pods:
CPU usage
Memory usage
Network status
Filesystem status
/system/ POD_NAME .json
Configuration information
Item
Archive location
Cluster configmap
/conf/configmap
Kubernetes deployment
/conf/deployment
Role Based Access Control (RBAC)
/conf/role
/conf/rolebind
/conf/serviceaccount
Logs
Item
Archive location
Agent log
/logs/agent.log
Spark engine log
/logs/sparkengine.log
Spark driver running and completed job logs over the last 24 hours
/logs/ DRIVER_ID
Job and pod information
Item
Archive location
JobAttempt object
/jobattempts
Kubernetes Pod object
/pods
What's next
See Diagnose Managed Service for Apache Spark clusters .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
