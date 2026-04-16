---
title: "Create node pools \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-nodepools
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-nodepools
  title: "Create node pools \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
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
Create node pools
Stay organized with collections
Save and categorize content based on your preferences.
When you
create or
update
a Managed Service for Apache Spark on GKE virtual cluster, you specify one or more node pools that
the virtual cluster will use to run jobs (this cluster is referred to as the
cluster "used by" or "associated" with the specified node pools). If a specified node pool
does not exist on your GKE cluster, Managed Service for Apache Spark on GKE
will create the node pool on the GKE cluster with settings
you specify. If the node pool exists and was created by Managed Service for Apache Spark,
it will be validated to confirm that its settings match the specified settings.
Managed Service for Apache Spark on GKE node pool settings
You can specify the following
settings
on node pools used by your Managed Service for Apache Spark on GKE virtual clusters (these
settings are a subset of
GKE node pool settings ):
accelerators
acceleratorCount
acceleratorType
gpuPartitionSize *
localSsdCount
machineType
minCpuPlatform
minNodeCount
maxNodeCount
preemptible
spot *
Notes:
gpuPartitionSize can be set in the Managed Service for Apache Spark API
GkeNodePoolAcceleratorConfig .
spot can be set in the Managed Service for Apache Spark API GkeNodeConfig .
Node pool deletion
When a Managed Service for Apache Spark on GKE cluster is deleted, the node pools used by the cluster
are not deleted. See Delete a node pool
to delete node pools no longer in use by Managed Service for Apache Spark on GKE clusters.
Node pool location
You can specify the
zone
location of node pools associated with your Managed Service for Apache Spark on GKE virtual cluster
when you create or update the virtual cluster. The node pool zones must be
located in the region of the associated virtual cluster.
Role to node pool mapping
Node pool roles
are defined for Spark driver and executor work, with a default role
defined for all types of work by a node pool. Managed Service for Apache Spark on GKE clusters must have
at least one a node pool that is assigned the default role.
Assigning other roles is optional.
Recommendation: Create separate node pools for each role type, with node type
and size based on role requirements.
gcloud CLI virtual cluster creation example:
gcloud dataproc clusters gke create "${DP_CLUSTER}" \
--region=${REGION} \
--gke-cluster=${GKE_CLUSTER} \
--spark-engine-version=latest \
--staging-bucket=${BUCKET} \
--pools="name=${DP_POOLNAME},roles=default \
--setup-workload-identity
--pools="name=${DP_CTRL_POOLNAME},roles=default,machineType=e2-standard-4" \
--pools="name=${DP_DRIVER_POOLNAME},min=1,max=3,roles=spark-driver,machineType=n2-standard-4" \
--pools="name=${DP_EXEC_POOLNAME},min=1,max=10,roles=spark-executor,machineType=n2-standard-8"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
