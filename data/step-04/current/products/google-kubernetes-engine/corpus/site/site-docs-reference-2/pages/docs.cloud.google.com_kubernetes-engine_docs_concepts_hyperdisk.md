---
title: "About Hyperdisk for GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk
  title: "About Hyperdisk for GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
About Hyperdisk for GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Google Cloud Hyperdisk is a network block storage option offered on
GKE. You can use this storage option in your GKE
clusters in a similar way as with other Compute Engine Persistent Disk volumes
with added flexibility to tune performance for your workload. Compared to Persistent Disk storage,
Hyperdisk provides substantially higher maximum input/output
operations per second (IOPS) and throughput. Unlike Persistent Disk volumes where
performance is shared across all volumes attached to a node, with
Hyperdisk, you can specify and tune the level of performance for
each Hyperdisk volume.
Note: Google Cloud Hyperdisk support is subject to the disks and
machine type of your node. Refer to the Compute Engine
documentation for the latest supported machine types, performance limits,
and capacity limits per VM.
You can choose from the following Hyperdisk options on GKE:
Storage option
GKE operation mode
Description
Hyperdisk Balanced
Autopilot Standard
The best fit for most workloads. This is a good option for
deploying most enterprise and line-of-business apps, as well as databases
and web servers.
Hyperdisk Throughput
Autopilot Standard
Optimized for cost-efficient
high-throughput. This is a good option if your use case targets scale-out
analytics (for example, Hadoop or Kafka) and throughput-oriented
cost-sensitive workloads.
Hyperdisk Extreme
Autopilot Standard
Optimized for IOPS performance. This is a good option if you are
deploying high-performance workloads, such as database management systems.
Hyperdisk ML
Autopilot Standard
Optimized for AI/ML training and inference workloads that need to
load model weights quickly. Use this option for AI/ML workloads that have
high peak read throughput requirements. This is the best option to
reduce idleness of GPU/TPU resources when loading data.
Hyperdisk Balanced High Availability
Autopilot Standard
Similar performance level as Hyperdisk Balanced that helps reduce costs with synchronous replication across two zones in a region. Use this option for building workloads that require high availability, or for workloads that require multiple nodes in a region to concurrently write to the same disk.
Benefits
With Hyperdisk, you have more predictable performance on stateful
workloads that you deploy.
With Hyperdisk, you can provision, manage, and scale your
stateful workloads on GKE without the cost and complexity of
managing a on-premises storage area network (SAN).
Hyperdisk storage capacity is partitioned and made available
to GKE nodes as individual volumes. Hyperdisk
volumes are decoupled from nodes enabling you to attach, detach, and move
volumes between nodes. Data stored in Hyperdisk volumes
persist over node reboots and deletions. You can also add multiple
Hyperdisk volumes to a single GKE node.
Pricing
You are billed for the total provisioned capacity of your Hyperdisk volumes
until you delete them. You are charged per GiB per month. Additionally, you are
billed for the following:
Hyperdisk Balanced charges a monthly rate for the provisioned
IOPS and provisioned throughput (in MiB/s) in excess of the baseline values of
3,000 IOPS and 140 MiB/s throughput.
Hyperdisk Extreme charges a monthly rate based on the provisioned IOPS.
Hyperdisk Throughput charges a monthly rate based on the provisioned
throughput (in MiB/s).
For pricing information, refer to
Disk pricing
in the Compute Engine documentation.
Limitations
After volume creation, you can only modify the following settings through the Compute Engine API:
Throughput: Hyperdisk Throughput and Hyperdisk Balanced volumes
IOPS: Hyperdisk Extreme and Hyperdisk Balanced
volumes
You can only attach Hyperdisk volumes to specific instance
types ; Read-Only
attachments are not supported.
Hyperdisk ML-specific limitations:
Hyperdisk ML can't be used as boot disks.
Hyperdisk ML can't be used in multi-writer mode.
Hyperdisk ML doesn't support Storage Pools.
Hyperdisk Balanced HA-specific limitations:
Hyperdisk Balanced HA cannot be used in Kubernetes ReadOnlyMany mode .
Hyperdisk Balanced HA doesn't support snapshots if the volume is in ReadWriteMany access mode.
Also see the Limitations section in the Compute Engine documentation on regional disks.
See the
Restrictions and Limitations
section in the Compute Engine documentation for additional information.
Supported node scheduling
You can automatically schedule Hyperdisk based workloads to
supported nodes with a
custom StorageClass. To enable this behavior, create your StorageClass
with the use-allowed-disk-topology: "true" parameter. To use this feature, the
cluster and nodepools must be 1.34.1-gke.2541000 or later. Volumes provisioned
with this StorageClass will not schedule on nodepools at lower versions.
The following shows an example of a StorageClass with the feature enabled.
apiVersion : storage.k8s.io/v1
kind : StorageClass
metadata :
name : hyperdisk-balanced-compatible-scheduling
provisioner : pd.csi.storage.gke.io
volumeBindingMode : WaitForFirstConsumer
allowVolumeExpansion : true
parameters :
type : hyperdisk-balanced
use-allowed-disk-topology : "true"
Automated disk type selection
GKE can select the appropriate disk type for your workloads based on the machine type of the node where they are scheduled. This approach lets you create a single StorageClass that supports clusters with older VM generations as you migrate to newer compute technology, provisioning Hyperdisk on compatible newer instances (like C3 or C4) while falling back to Persistent Disk on older generations.
To enable automatic disk selection your cluster must be at 1.35.0-gke.2232000 or later with the type parameter to dynamic in your StorageClass. You can configure the specific disk choices by using the following parameters:
Parameter
Description
Default
type
Required. Set to dynamic to enable intelligent disk selection.
N/A
use-allowed-disk-topology
Recommended. If true , GKE ensures Pods are scheduled only on nodes that support the selected disk type.
false
hyperdisk-type
The Hyperdisk type to use on supported nodes (such as hyperdisk-balanced ).
hyperdisk-balanced
pd-type
The Persistent Disk type to use as a fallback on other nodes (such as pd-balanced ).
pd-balanced
disk-type-preference
Overrides the default preference for hyperdisk-type when a node supports both options.
hyperdisk-type
NOTE:
You can still use standard block storage parameters. GKE applies only the settings relevant to the selected disk type when it creates the volume.
The following StorageClass shows how to configure dynamic disk type selection that prioritizes hyperdisk-balanced for supported nodes and automatically uses pd-balanced for others.
apiVersion : storage.k8s.io/v1
kind : StorageClass
metadata :
name : dynamic-volume
provisioner : pd.csi.storage.gke.io
volumeBindingMode : WaitForFirstConsumer
allowVolumeExpansion : true
parameters :
type : dynamic
pd-type : pd-balanced
hyperdisk-type : hyperdisk-balanced
use-allowed-disk-topology : "true"
# The parameters below only apply to the hyperdisk-type and are ignored if
# the pd-type is selected.
provisioned-throughput-on-create : "250Mi"
provisioned-iops-on-create : "3000"
Hyperdisk and Autopilot Compute Classes
If you want to use Hyperdisk on
Autopilot clusters that use Compute Classes , make sure your node's machine type
is both supported by Hyperdisk and supported by the Compute Class .
The following example shows how you can specify the nodeSelector property to control Pod
scheduling on Autopilot clusters with the Performance Compute Class,
when using Hyperdisk Balanced.
cloud.google.com/compute-class : "Performance"
cloud.google.com/machine-famility : "c3"
For more information, see
Choose Compute Classes for Autopilot Pods .
Plan the performance level for your Hyperdisk volumes
Use the following considerations to plan the right level of performance for
your Hyperdisk volumes.
Hyperdisk Balanced
With Hyperdisk Balanced, you can provision capacity separately from
throughput and IOPS. To provision throughput or IOPS, you select the level
for a given volume. Individual volumes have full throughput isolation—each
volume can use all the specified throughput or IOPS capacity for that volume. However, the throughput or
IOPS is ultimately limited by per-instance limits on the VM instance to which
your volumes are attached. To learn more about these limits, see
Provisioned performance for Hyperdisk Balanced in the Compute Engine documentation.
Both read and write operations count against the throughput and IOPS limit provisioned
for a Hyperdisk Balanced volume. The throughput or IOPS provisioned
and the maximum limits apply to the combined total of read and write operations.
If the total throughput or IOPS provisioned for one or more Hyperdisk
volumes exceeds the total throughput or IOPS available at the VM instance level, the
performance is limited to the instance performance level.
Hyperdisk Throughput
With Hyperdisk Throughput, you can provision capacity separately from
throughput. To provision throughput, you select the level
for a given volume. Individual volumes have full throughput isolation—each
gets the throughput provisioned to it. However, the throughput is ultimately
capped by per-instance limits on the VM instance to which your volumes are
attached. To learn more about these limits, see
About provisioned performance
in the Compute Engine documentation.
Both read and write operations count against the throughput limit provisioned
for a Hyperdisk Throughput volume. The throughput provisioned
and the maximum limits apply to the combined total of read and write throughput.
When defining a StorageClass, throughput provisioned for Hyperdisk Throughput
volumes must follow these rules:
At least 10 MiB/s per TiB of capacity, and no more than 90 MiB/s per TiB
of capacity, depending on the machine type.
At most 600 MiB/s per volume, depending on the machine type.
If the total throughput provisioned for one or more Hyperdisk Throughput volumes exceeds the total throughput available at the VM instance
level, the throughput is limited to the instance throughput level.
Hyperdisk Extreme
With Hyperdisk Extreme, you can provision capacity separately
from the IOPS level. To provision the IOPS level, you specify the IOPS
limit for a given volume. Individual volumes have full IOPS level
isolation—each gets the IOPS level provisioned to it. However, the
IOPS is ultimately capped by per-instance limits on the VM instance to which
your volumes are attached. To learn more about these limits, see
About provisioned performance
in the Compute Engine documentation.
Both read and write operations count against the IOPS limit provisioned for
a Hyperdisk Extreme volume. The IOPS provisioned, and the
maximum limits listed in this document, apply to the total of read and
write IOPS.
When defining a StorageClass, IOPS provisioned for Hyperdisk
Extreme volumes must be no more than 350,000 IOPS, depending on the machine type.
If the total IOPS provisioned for one or more Hyperdisk Extreme volumes exceeds
the total IOPS available at the VM instance level, the performance is limited
to the instance IOPS level. If there are multiple Hyperdisk and
Persistent Disk volumes attached to the same VM requesting IOPS at the
same time, and the VM limits are reached, then each volume has an IOPS level
proportional to their share in the total IOPS provisioned across
all attached Hyperdisk Extreme volumes.
Hyperdisk ML
With Hyperdisk ML, you can provision capacity separately
from performance. To provision performance, you select the throughput
level for a given volume. Individual volumes have full performance
isolation—each gets the performance provisioned to it.
When one volume is attached to multiple instances, the provisioned
throughput will be dynamically distributed across instances. However, the
throughput is ultimately capped by per-instance limits on the VM instance
to which your volumes are attached.
Both read and write operations count against the throughput limits
provisioned for a Hyperdisk ML volume when in
READ-WRITE-SINGLE mode. The throughput provisioned and the maximum limits
apply to the total of read and write throughput.
Throughput provisioned for Hyperdisk ML volumes must follow
the following rules:
Minimum: the greater of (0.12 MBps * disk size) in GiB or 400 MBps.
Maximum: (1,600 MBps * disk size) in GiB, but not more than 1.2 TBps.
If the volume is attached to more than 20 instances in READ-ONLY-MANY
mode, then the throughput value needs to be at least 100 MBps * number of instances attached.
If the total throughput provisioned for one or more Hyperdisk
ML volumes exceeds the total throughput available at the instance level,
the performance will be limited to the instance-level performance.
Hyperdisk Balanced HA
With Hyperdisk Balanced High Availability, you can provision capacity separately from
throughput and IOPS. To provision throughput or IOPS, you select the level of throughput and IOPS for a given volume. Individual volumes have full throughput isolation—each
volume can use all the specified throughput or IOPS capacity for that volume. However, the throughput or
IOPS is ultimately limited by per-instance limits on the VM instance to which
your volumes are attached. To learn more about these limits, see About Google Cloud Hyperdisk in the Compute Engine documentation.
Both read and write operations count against the throughput and IOPS limit that's provisioned
for a Hyperdisk Balanced High Availability volume. The provisioned throughput or IOPS
and the maximum limits apply to the combined total of read and write operations.
If the total throughput or IOPS that are provisioned for one or more Hyperdisk
volumes exceeds the total throughput or IOPS available at the VM instance level, the
performance is limited to the instance-level performance.
What's next
Create a storage class for Hyperdisk Balanced, Throughput, Extreme or Balanced High Availability .
Create a storage class for Hyperdisk ML .
Learn how to migrate Persistent Disk volumes to Hyperdisk .
Scale your storage performance using Hyperdisk on GKE .
Optimize storage performance and cost with Hyperdisk Storage Pools .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
