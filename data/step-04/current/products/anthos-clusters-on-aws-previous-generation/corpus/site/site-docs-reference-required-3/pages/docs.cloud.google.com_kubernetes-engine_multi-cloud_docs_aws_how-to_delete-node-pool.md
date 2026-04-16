---
title: "Delete a node pool \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/delete-node-pool
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/delete-node-pool
  title: "Delete a node pool \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
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
Delete a node pool
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to delete node pools in GKE on AWS.
Before you begin
This page assumes you are familiar with the cluster autoscaler. For more
information, see Cluster autoscaler .
Delete a node pool
To delete a node pool, run the following command:
Console
In the Google Cloud console, go to the Google Kubernetes Engine clusters
overview page.
Go to GKE clusters
Select the Google Cloud project that the cluster is in.
In the cluster list, select the name of the cluster, and then select
View details in the side panel.
Select the Nodes tab to see a list of all the node pools.
Select a node pool from the list.
Near the top of the window, click delete
Delete .
If the delete fails, follow the steps in the gcloud tab and add the
--ignore-errors flag to the gcloud container aws node-pools delete
command.
gcloud
Get a list of your node pools:
gcloud container aws node-pools list \
--cluster CLUSTER_NAME \
--location GOOGLE_CLOUD_LOCATION
Replace the following:
CLUSTER_NAME : the name of the cluster that the node
pool is attached to
GOOGLE_CLOUD_LOCATION : the Google Cloud
location hosting the node pool
For each of your node pools, delete it with the following command:
gcloud container aws node-pools delete NODE_POOL_NAME \
--cluster CLUSTER_NAME \
--location GOOGLE_CLOUD_LOCATION
Replace the following:
NODE_POOL_NAME : the name of the node pool to delete
CLUSTER_NAME
GOOGLE_CLOUD_LOCATION
If the command returns an error and the delete fails, you can force the
deletion by running the command again with the --ignore-errors flag.
This flag is available in version 1.29 and later.
Caution: Adding the --ignore-errors flag to the delete command might
result in orphaned AWS resources. If that happens, consult the
AWS documentation on how to remove the orphaned resources.
How GKE on AWS protects workloads during node pool deletion
During node pool deletion, GKE on AWS performs graceful shut down on
each node without honoring PodDisruptionBudget. It takes the following
steps:
Disable cluster autoscaler if it was enabled.
Set up a deadline for the draining process. After this deadline, even if
there are still Pod objects existing, GKE on AWS stops draining and
proceeds to deleting underlying virtual machines. The default deadline is 5
minutes. For every 10 more nodes, 5 more minutes is added.
Cordon all the nodes in the node pool.
Before deadline is met, delete Pod objects in the node pool with best efforts.
Delete all the underlying compute resources.
What's next
Read the reference guide for
gcloud container aws node-pools .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
