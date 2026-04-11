---
title: "Different ways to access your protected data \_|\_ Backup and DR \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data
  title: "Different ways to access your protected data \_|\_ Backup and DR \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Send feedback
Different ways to access your protected data
Stay organized with collections
Save and categorize content based on your preferences.
Restoring is not always your best choice to recover data. This page introduces
alternatives and describes their strengths for various situations.
You can access your protected data in the following ways:
Clone
LiveClone
Mount
Restore
Workflows
Clones
Clones are commonly used with SQL Server databases and VMware VMs.
When to clone a Microsoft SQL Server database
Use the clone function to create an independent copy of a Microsoft SQL Server
database backup images. The most common uses are the following:
Application development and testing
Data audit for compliance
Data warehousing
E-discovery
User acceptance testing.
This can also be used like a restore, but to any server.
When to clone VMware VMs
For VMware VMs, a clone copies backup images of the VMDKs directly to a targeted
datastore before powering on the VM, at which point the VM is independent of
the backup/recovery appliance. This is like a restore to a different VM.
LiveClones
A LiveClone can be used with all agent-based backup images like databases and
filesystems.
The LiveClone is similar to the clone function, however, unlike a clone,
a LiveClone can be updated on demand or according to a schedule. When an
updated copy of the data is available, a LiveClone allows an independent copy
of a data to be mounted. This allows teams such as development and test to
ensure they are working on the latest set of data without having to manually
manage the data.
LiveClones enable you to do the following:
Refresh. Create multiple, re-mountable copies of an active image that
can be refreshed from the most recent image of the same application. See
Refresh a LiveClone .
PrepMount. Mount the LiveClone image to a specific host for a
pre-processing operation (such as sanitizing data), even if some copies of
this same LiveClone may already be mounted. You can prep-mount a LiveClone
image to scrub confidential or sensitive data.
Note: While the LiveClone image is prep-mounted, it is busy. It cannot be
deleted, refreshed, or mounted. If you mount application images before
prep-mounting another image of the same application, the mounted images
continue to be usable.
PrepUnmount. A prep-unmount operation on a LiveClone lets you decide
if your changes are to be preserved or not. By default changes are tracked
and preserved.
LiveClones provide a crucial building block in managing copy data lifecycle as
they combine the performance and independence of a full clone with the
efficiency and speed of incremental refreshes of data.
Mounts
The Backup and DR mount function provides near instant access to
backup images without moving data. These are several options for mounting data.
VMware VM and agent based backup images
The standard mount presents and makes application data available to a target
server as a file system, not as an application. This is useful if an application
is corrupt, lost, or if an application server is being replaced. In such cases
you can mount an image and copy the application files from the mounted image to
their original location on the application server.
For standard mounts:
For VMware VMs ensure that NFS connectivity from the ESXi hosts to the
backup/recovery appliance is available.
For Compute Engine instances, ensure that the iSCSI port of the host
where the active images will be mounted is accessible to the
backup/recovery appliance. Note that NFS is an option when mounting to instances
running supported Linux operating systems.
Mounting takes a copy of the selected active image and mounts it
to the selected host or VM.
A mounted image can be used directly from the mounted host.
The original image is never modified, even if the mounted virtual copy
is modified or mounted and deleted.
The mount operation is applicable for all agent based applications and
VMware VMs.
Application aware mounts allow you to mount backup images of databases as
virtual applications. This lets you quickly bring a database online without
having to actually move the data and without having to manually configure a new
instance of the database.
Application aware mounts are particularly useful in test and development
environments where multiple copies of a database must be quickly brought online.
Data presented as an application aware mount can be backed up like any other
application. Once the application aware mounted application data is backed up,
it too can be can be mounted as an application aware mount.
The backup, application mount, backup sequence can be repeated to any depth.
By default, the sequence is restricted to five generations of the original
database.
Mount and migrate lets you restore an application with near-zero downtime
by first mounting it locally, and then migrating it to the original location or
to a new location. Users have normal access to the application while it is
mounted, and the migration step is very fast.
When performing a mount of a VMware VM or agent based backup from OnVault you
can control how much to optimize for performance versus storage consumption,
by selecting the following:
Storage-optimized. This only keep writes in the local snapshot pool
(writes are always kept locally).
Balanced. These blocks are read (from object storage) or written (to
local snapshot pool) and kept in the snapshot pool, to serve as a cache for
future reads.
Performance-optimized. This bring the entire image to the local snapshot
pool, in the background. Reads will become faster as more of the image is
available locally.
Max performance. The entire image is rehydrated into the snapshot pool
first, prior to the mount. This means that the host always works against local
storage only.
Compute Engine instance
Compute Engine instance mounts create a new Persistent Disk from backup and
then either assign it to an existing Compute Engine instance or to a new
Compute Engine instance, which is created at the same time.
Unlike VMware VM or agent based backup images, this does involve the movement of
data from where the backup images are stored (in Google Cloud) to
Persistent Disk.
Restores
The restore function reverts the production data to a specified point in time.
Typically restore operations are performed to restore an application to a valid
state after data corruption. The amount of time required to complete a restore
operation depends on the amount of data involved.
Workflows
A workflow automates access to copy data. While backup plan policy templates
govern the automated capture of production data, workflows automate the access
to this data.
Steps are defined within a workflow to perform a series of tasks on a schedule
or on demand. This includes creating and refreshing LiveClones, data masking,
persistent mounts, and non-persistent processing mounts for tasks such as
database integrity checks, and ETL loads. Workflows are also used by
administrators to provide simplified and secured self-service data access to end
users such as database administrators and application developers.
The Backup and DR getting started guide
This page is one in a series of pages selected to introduce Backup and DR.
The other topics are as follows:
Introduce the appliance management console
Introduce Backup and DR data protection backup plans
Introduce Backup and DR data capture
Different ways to access your protected data (this page)
Introduce the Backup and DR agent
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
