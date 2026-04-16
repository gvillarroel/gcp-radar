---
title: "Configure surge updates of node pools \_|\_ GKE on AWS \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/configure-surge-updates
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/configure-surge-updates
  title: "Configure surge updates of node pools \_|\_ GKE on AWS \_|\_ Google Cloud\
    \ Documentation"
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
Configure surge updates of node pools
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to enable and manage surge updates of node pools.
For information about how surge updates of node pools work, see
About surge updates .
Things to consider before running surge updates
Before running a surge update, keep in mind the following:
Additional instances created as part of this surge step can potentially
exceed your AWS instance quota limit. If you don't have enough quota and these
additional instances can't be provisioned, the update might fail.
If max-unavailable-update is set to 0, disruptions to workloads can still
occur as Pods get evicted and rescheduled onto the newer nodes.
The maximum number of nodes that can be updated simultaneously is equal to the
sum of max-surge-update and max-unavailable-update , and is limited to 20.
Enable and configure surge updates
To enable surge updates, contact
Google Cloud Support . After the support
team enables the feature, you can assign values to the max-surge-update
and max-unavailable-update parameters when creating or updating your node
pool:
Create
gcloud container aws node-pools create NODE_POOL_NAME
--cluster CLUSTER_NAME \
--location GOOGLE_CLOUD_LOCATION \
--max-surge-update MAX_SURGE \
--max-unavailable-update MAX_UNAVAILABLE
Update
gcloud container aws node-pools update NODE_POOL_NAME
--cluster CLUSTER_NAME \
--location GOOGLE_CLOUD_LOCATION \
--max-surge-update MAX_SURGE \
--max-unavailable-update MAX_UNAVAILABLE
Replace the following:
NODE_POOL_NAME : the name of the node pool to
update.
CLUSTER_NAME : the name of the cluster.
GOOGLE_CLOUD_LOCATION : the
supported Google Cloud region
that manages your cluster. For example, us-west1 .
MAX_SURGE : the maximum number of
additional nodes that can be temporarily created beyond the current node pool
size during an update. By adjusting this value, you can control how many nodes
are updated simultaneously. The default setting is 1, but you can set it to 0.
If you set max-surge-update to a value greater than 0, GKE on AWS
creates surge nodes; setting it to 0 prevents their creation.
MAX_UNAVAILABLE : the maximum number of nodes that can
be unavailable simultaneously during the update process. By increasing this
value, more nodes can be updated simultaneously. The default value
is 0, but it can be adjusted upwards.
Check surge update settings on a node pool
To see the surge update settings of a node pool, run the following command:
gcloud alpha container aws node-pools describe NODE_POOL_NAME
--cluster CLUSTER_NAME \
--location GOOGLE_CLOUD_LOCATION \
Replace the following:
NODE_POOL_NAME : the name of your node pool.
CLUSTER_NAME : the name of the cluster.
GOOGLE_CLOUD_LOCATION : the
supported Google Cloud region
that manages your cluster. For example, us-west1 .
If the node pool has surge updates enabled, the output from this command
displays a section labeled surge_settings . This surge_settings section
displays the values of the max_surge and max_unavailable parameters.
Manage surge updates that are in progress
You can cancel an ongoing surge update, perform a rollback of a surge update
that failed, or resume an update that's been interrupted.
Cancel (pause) and resume a surge update
In GKE on AWS, "cancelling" a surge update actually means pausing it. For
details about how to cancel an update, see
Cancel an update operation .
In other words, canceling a surge update doesn't roll back the update. Instead,
it might leave the node pool in a partially updated state with two autoscaling
groups: one with nodes running the previous configuration and one with nodes
running the new configuration. To eliminate this problem, resume the surge
update by running the update command again, using the same target parameters as
the interrupted operation. Initiating an update with different node pool
parameters is restricted until the previous update concludes.
Perform rollback of failed surge update
You can roll back a node pool to its original state if a surge update
was canceled or failed.
Things to consider before rolling back a surge update
You can only roll back a surge-enabled node pool that is in a partially
updated state (or the DEGRADED state).
Once a rollback is initiated on a node pool, you can't cancel it.
You're restricted from performing more update operations until the rollback
operation finishes successfully.
You can only retry a rollback if it fails.
You can't roll back node pools after they have been successfully updated.
How to perform a rollback of a failed surge update
To rollback an unsuccessful update operation on the node pool, run the following
command:
gcloud container aws node-pools rollback NODE_POOL_NAME
--cluster CLUSTER_NAME
Replace the following:
NODE_POOL_NAME : the name of the node pool to
update.
CLUSTER_NAME : the name of the cluster.
How the rollback works
Initiating a rollback internally starts a new update operation on the node pool.
('Internally' here means that this process is executed within the system itself,
and doesn't require your intervention). The operation reverts the node pool
nodes back to their original state on a best-effort basis.
The nodes belonging to the old autoscaling group are un-cordoned, and the
cluster autoscaler of this group is enabled to allow workloads to be scheduled
on the nodes. Partially updated node pool nodes in the new autoscaling group are
cordoned, drained, and terminated based on the surge settings you defined
in your initial surge update attempt.
Manage unsuccessful surge updates
You have three options to address a failed update:
Continue the update: You can proceed with the failed update using the same
target node pool settings as the initial unsuccessful attempt.
Rollback: Use the rollback command to revert the node pool to its original
state.
Modify and restart: If you want to change the parameters for the surge
update, the existing node pool must be deleted and then recreated with the
new settings. For instructions about how to delete a node
pool, see Delete a node pool .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
