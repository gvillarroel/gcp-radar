---
title: "Configure local storage \_|\_ Google Distributed Cloud (software only) for\
  \ bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-local-storage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-local-storage
  title: "Configure local storage \_|\_ Google Distributed Cloud (software only) for\
    \ bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Configure local storage
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to configure local volumes for Google Distributed Cloud
clusters.
Google Distributed Cloud clusters provide two options for configuring
local PVs )
in the cluster: LVP share and LVP node mounts. LVP share uses directories in a
shared file system, while LVP node mounts uses dedicated disks.
Caution: Using a local PV binds the Pod to a specific disk and node. If that
disk or node becomes unavailable, then the Pod also becomes unavailable.
Workloads using local PVs need to be resilient to this kind of failure, and may
require additional orchestration to release the Pod's PVCs and find a new, empty
disk on another node.
LVP share
This storage class creates a local PV backed by subdirectories in a local,
shared file system on every node in the cluster. These subdirectories are
automatically created during cluster creation. Workloads using this storage
class will share capacity and IOPS because the PVs are backed by the same shared
file system. For better isolation, we recommend configuring disks through LVP
node mounts instead.
Configure an LVP share
Optional : Before cluster creation, mount a disk using the configured path
as a mount point so that the created PVs will share the new disk capacity and
be isolated from the boot disk.
Specify the following under lvpShare in the cluster CR:
path : The host machine path on each host where subdirectories are
created. A local PV is created for each subdirectory. The default path
is /mnt/localpv-share .
storageClassName : The storage class that PVs are created with during
cluster creation. The default value is local-shared .
numPVUnderSharedPath : Number of subdirectories to create under path .
The default value is 5 .
The configuration looks similar to the following:
apiVersion: baremetal.cluster.gke.io/v1
kind: Cluster
metadata:
name: cluster1
namespace: cluster-cluster1
spec:
storage:
lvpShare:
path: /mnt/localpv-share
storageClassName: local-shared
numPVUnderSharedPath: 5
PVs are created with the storage class specified in storageClassName . The
total number of local PVs created in the cluster is numPVUnderSharedPath
multiplied by the number of nodes.
LVP node mounts
This storage class creates a local PV for each mounted disk in the configured
directory. Each PV maps to a disk with capacity equal to the underlying disk
capacity. The total number of local PVs created in the cluster is the number of
disks mounted under the path across all nodes. Additional mounts can be added
after cluster creation.
Configure LVP node mounts
On nodes that have extra disks for PVs, format and mount each disk under
path. This can also be done before or after cluster creation. See
best practices .
List disks and find the one you want to mount:
sudo lsblk
Format the disk, for example with single ext4 file system:
sudo mkfs.ext4 -m 0 -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/DEVICE_ID
Under the configured path, create a directory as the mount point for the
new disk:
sudo mkdir -p /mnt/localpv-disk/MNT_DIR
Mount the disk:
sudo mount -o discard,defaults /dev/DEVICE_ID /mnt/localpv-disk/MNT_DIR &&
sudo chmod a+w /mnt/localpv-disk/MNT_DIR
Add the disk to the /etc/fstab file, so that the device automatically
mounts again when the instance restarts:
# Backup of your current /etc/fstab file
sudo cp /etc/fstab /etc/fstab.backup
# Use the blkid command to find the UUID for the zonal persistent disk
sudo blkid /dev/DEVICE_ID
# Edit /etc/fstab file: create an entry that includes the UUID
UUID=UUID_VALUE /mnt/localpv-disk/MNT_DIR ext4 discard,defaults,NOFAIL_OPTION 0 2
Specify the following under lvpNodeMounts in cluster CR:
path : The host machine path for each mount where mounted disks are
discovered and a local PV is created. The default path is
/mnt/localpv-disk .
storageClassName : The storage class that PVs are created with during
cluster creation. The default value is local-disks .
The configuration looks something similar to the following:
apiVersion: baremetal.cluster.gke.io/v1
kind: Cluster
metadata:
name: cluster1
namespace: cluster-cluster1
spec:
storage:
lvpNodeMounts:
path: /mnt/localpv-disk
storageClassName: local-disks
PVs are created with the storage class specified in storageClassName . The
total number of PVs created is the number of disks mounted under path
across all nodes.
What's next
Learn how to
configure the default storage class .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
