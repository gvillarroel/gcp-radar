---
title: "Manage static compute nodes \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/manage-static-nodes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/manage-static-nodes
  title: "Manage static compute nodes \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Manage static compute nodes
Stay organized with collections
Save and categorize content based on your preferences.
This document provides an overview of how to maintain Slurm clusters that are
using static compute nodes. For more information about node types, see
About node types .
Long running clusters require more maintenance. It is always good to consider
having a dedicated system administrator role to maintain a cluster.
How Slurm states relate to VM state
The VM instance that is backing your static compute nodes can transition
through many states as part of its lifecycle. Changes in your Slurm state
impacts the static compute nodes as follows:
If the Slurm state changes to DOWN , this only affects the Slurm state.
The backing VM stays in a RUNNING state, and all attached state devices
are unaffected.
If the Slurm state changes to POWER_DOWN , the backing VM is deleted.
This leads to a loss of VM state and loss of attached state devices.
When the Slurm state changes to POWERING_UP , a new VM is created.
For more information about what happens to a VM and its attached devices during
each phase of its lifecycle, see
VM lifecycle .
Update VM images
During the operation of a cluster, you might need to update the OS image used
by the compute nodes. Because VMs backing static compute nodes are always up,
this takes some additional consideration.
Note: When using Slurm-GCP static nodes, powering down a Slurm node
( scontrol update State=POWER_DOWN_ASAP ) is equivalent to deleting the backing
VM. In this state, all node-local data is lost, including all data on Local SSDs.
To allow for updating images, the compute nodeset should be configured to use a
custom image family that you are able to publish to. It is important to specify
an image family and not a specific image name because the compute node always
tries to use the latest image in a family, allowing the nodes to pick new images
without redeploying the cluster. You also need to set the
instance_image_custom setting to true to signify that a custom image is
being used.
The following code block shows how to specify a custom image for a static
nodeset.
‐ id: static_nodeset
source: community/modules/compute/schedmd-slurm-gcp-v6-nodeset
use: [network]
settings:
node_count_static: 4
node_count_dynamic_max: 0
instance_image_custom: true
instance_image:
family: custom-family
project: $(vars.project_id)
allow_automatic_updates: false
Note: The allow_automatic_updates: false
setting is only compatible with images that are built on top of an
HPC VM image
or its derivatives such as Slurm images.
For information about how to build a custom image on top of an existing Slurm
image, see the
examples/image-builder.yaml blueprint file.
Use the following steps to update the OS image of static compute nodes on a
running cluster:
Build a new OS image and save it to the required image family.
For example, say a nodeset is configured to use custom-family , and
static compute nodes are running on image-a which is the latest image
from custom-family . You can then build a new image, image-b , and
publish it to custom-family . Once published, image-b is the latest
image in custom-family , but the static compute nodes are still running on
image-a since the image can't be updated on a running VM.
SSH to the Slurm controller and run the following command.
Replace NODES_TO_UPDATE with the nodes you
are updating. We recommend testing updates on a small number of nodes prior
to deploying throughout your cluster. For example,
compute-static-[0-1] updates compute-static-0 and compute-static-1 .
sudo -i -u slurm scontrol update NodeName= NODES_TO_UPDATE State=POWER_DOWN_ASAP Reason="image-update"
In the preceding command snippet, the Slurm user account is impersonated
as it has permission to update node state. When you run the command, the
state of the nodes are set to POWER_DOWN_ASAP . This drains the nodes,
allowing jobs to finish but not taking on any new jobs. Once drained, Slurm
deletes the VMs that back the nodes. The node's state changes to idle%
while the VM is being deleted and eventually transitions to idle~ when
deletion has finished.
After some time, normally minutes, Slurm automatically recreates the
deleted nodes and returns them to service. Optionally, when the node is in
idle~ state, you can manually initiate this process with the following
command:
sudo -i -u slurm scontrol update NodeName= NODES_TO_UPDATE State=POWER_UP
Depending on the timing, manual intervention might clash with the
periodic automation and might result in VMs being deleted and recreated.
Once the node has fully booted it has a status of idle . At this point
it is running on the new image, image-b . If you want to confirm the new
image is being used, see
View the source OS image or source disk image of a VM .
It might be helpful to label nodes to keep track of which nodes have been
updated and advertise which nodes have new images. To label nodes, run the
following command:
sudo -i -u slurm scontrol update nodename= NODES_TO_UPDATE AvailableFeatures=image=rev3
Restore down nodes
When a node is in a down* state it is best to power it down which deletes the
node and allows for it to be recreated. You can use the following command to
restore down nodes. Replace DOWNED_NODE with the
name of the downed node.
sudo -i -u slurm scontrol update NodeName= DOWNED_NODE State=POWER_DOWN Reason="reset-node"
Remove nodes left behind after destruction
It is common for nodes to be left behind when a cluster is destroyed. If you
would like static compute nodes to be destroyed upon destruction of the cluster
( gcluster destroy ), you can use the cleanup_compute_nodes setting on the Slurm
controller. Using this setting requires that local python dependencies are
installed on the deployment machine. To install local python dependencies, see
controller description .
Static compute nodes can also be manually deleted after the controller has been
destroyed although this might interfere with cleanup of any network resources
created for and used by the static compute nodes.
Review host maintenance
A maintenance event
is when Compute Engine performs a hardware or software update on the host
machine running a VM. How the VM is affected depends on whether the host
maintenance policy is set to TERMINATE (default) or MIGRATE . When you use
compact placement policies, as recommended in the best practices, Slurm
overrides the host maintenance policy provided in the blueprint and sets it to
TERMINATE. To view the host maintenance policy of a VM, see
View host maintenance policy settings of a VM .
If the host maintenance policy is set to TERMINATE , a maintenance event
causes the VM to be stopped. When the VM is stopped, some forms of state are
lost such as RAM state, VM state, and Local SSD state. Persistent disks are
maintained. While the VM is stopped, Slurm state shows the node as down* . This
shutdown disrupts any job running on that node. The default behavior is to
requeue these failed jobs. For instructions on how to bring the node back up,
see Restore down nodes .
If the host maintenance policy is set to MIGRATE , a maintenance event
triggers a live migration where Compute Engine moves the VM to a new host, and
there is no disruption to your job, although there may be a temporary
performance impact while the migration is taking place. Also note that the
topology changes due to live migrations.
Using the MIGRATE setting is not possible in all cases such as when using
GPUs or when you use certain compact placement policies in some scenarios. You
can manually trigger a maintenance event to test how it affects operation and
performance by using the
Simulate a host maintenance event procedure .
What's next
Review the Cluster blueprints catalog .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
