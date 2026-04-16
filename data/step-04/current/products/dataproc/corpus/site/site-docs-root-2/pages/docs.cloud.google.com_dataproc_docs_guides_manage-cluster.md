---
title: "Manage a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster
  title: "Manage a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
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
Manage a cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to update and delete an existing Managed Service for Apache Spark cluster.
Update a cluster
You can update a cluster by issuing a Dataproc API
clusters.patch request, running
a gcloud dataproc clusters update
command in a local terminal window or in
Cloud Shell , or by editing cluster
parameters from the Configuration tab of the Cluster details page for the
cluster in the Google Cloud console .
The following cluster parameters can be updated:
the number of standard worker nodes in a cluster—see
Scaling clusters
the number of secondary worker nodes in a cluster— see
Managed Service for Apache Spark secondary workers
whether to use
graceful decommissioning
to control shutting down a worker after its jobs are completed
adding or deleting cluster labels
Cluster update error
Managed Service for Apache Spark issues an ERROR_DUE_TO_UPDATE error when a cluster
update operation fails. This error places the cluster in a fail-safe state to
avoid data loss, and restricts further cluster operations: jobs can continue
to be submitted to the cluster, the cluster can be deleted, but further
cluster update operations are not permitted.
Recommendation: After receiving an ERROR_DUE_TO_UPDATE on a cluster,
recreate the cluster
by exporting the cluster configuration to create a new cluster, then delete the
failed cluster. If recreating the cluster fails, contact
Cloud Customer Care for help in restoring the cluster to a
RUNNING state.
Note: A cluster can enter the ERROR_DUE_TO_UPDATE state if you attempt to update
cluster resources through Compute Engine API operations. To update cluster resources,
use Managed Service for Apache Spark update
operations.
Delete a cluster
You can delete a cluster via a Dataproc API
clusters.delete HTTP or programmatic request, using the Google Cloud CLI
gcloud
command-line tool locally in a terminal window or in Cloud Shell , or from the Google Cloud console .
Deletion is permanent: Once deleted, clusters cannot be restored.
You can, however, quickly create new Managed Service for Apache Spark clusters as you need them.
Google Cloud CLI
To delete a Managed Service for Apache Spark cluster, use the gcloud CLI
gcloud dataproc clusters delete
command locally in a terminal window or in
Cloud Shell .
gcloud dataproc clusters delete cluster-name \
--region= region
REST API
Use the Managed Service for Apache Spark
clusters.delete
API to delete a cluster.
Console
Open the Managed Service for Apache Spark
Clusters
page in the Google Cloud console. Select the cluster by checking the box
to the left of the cluster name, then Click Delete to
delete the cluster.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
