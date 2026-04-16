---
title: "Scale GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster
  title: "Scale GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
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
Scale GKE clusters
Stay organized with collections
Save and categorize content based on your preferences.
To scale a Managed Service for Apache Spark on GKE cluster, update the autoscaler configuration
of the node pool(s)
associated with the Spark driver or Spark executor roles. You
specify Managed Service for Apache Spark on GKE
node pools and their associated roles when you
create a Managed Service for Apache Spark on GKE cluster .
Set node pool autoscaling
You can set the bounds for Managed Service for Apache Spark on GKE node pool autoscaling when you
create a Managed Service for Apache Spark on GKE virtual cluster . If not specified, Managed Service for Apache Spark on GKE node pools
are autoscaled with default values (at Managed Service for Apache Spark on GKE GA release, defaults
set to minimum = 1 and maximum = 10, which are subject to change). To obtain
specific minimum and maximum node pool autoscaling values, set them when you
create your Managed Service for Apache Spark on GKE virtual cluster.
Update node pool autoscaling
Note: Updating a Managed Service for Apache Spark on GKE node pool configuration to
disable autoscaling
is not recommended.
Use the following GKE
gcloud container node-pools update
command to change the autoscaling configuration of a Managed Service for Apache Spark on GKE node pool.
gcloud container node-pools update NODE_POOL_NAME \
--cluster= GKE_CLUSTER_NAME \
--region= region \
--enable-autoscaling \
--min-nodes= min nodes (must be <= max-nodes) \
--max-nodes= max nodes (must be >= min-nodes) \
How Spark autoscaling works
When a job is submitted, the driver pod is scheduled to run on the node pool
associated with the Spark driver role .
The driver pod calls the GKE scheduler to create
executor pods.
Executor pods are scheduled on the node pool associated with the
Spark executor role .
If the node pools have capacity for the pods, the pods start running immediately.
If there is insufficient capacity, the GKE cluster autoscaler scales up
the node pool to provide the requested resources, up to the user-specified
limit. When node pools have excess capacity, the GKE cluster autoscaler
scales down the node pool to its user-specified limit.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
