---
title: "Prepare Filestore and other file systems for Backup and DR \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-filesystems
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-filesystems
  title: "Prepare Filestore and other file systems for Backup and DR \_|\_ Google\
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
Reference
Send feedback
Prepare Filestore and other file systems for Backup and DR
Stay organized with collections
Save and categorize content based on your preferences.
This page includes information on how to ensure there is NFS connectivity for
Backup and DR.
Install the NFS client on a Red Hat RHEL 6 or CentOS Linux host
See if the client is installed by running: # rpm -qa | grep nfs
This should return something like:
nfs-utils-lib-1.1.5-9.el6.x86_64
nfs-utils-1.2.3-54.el6.x86_64
If you see nothing, then use yum to install the NFS client packages.
Run: # yum install nfs-utils nfs-utils-lib
Make sure rpcbind /portmapper package is installed on the Linux host.
Run: # rpm -qa | grep rpcbind
This should return something like: rpcbind-0.2.0-11.el6.x86_64
If you see nothing, then use yum to install the rpcbind. Run:
# yum install rpcbind
Install the NFS client on a SLES Linux host
To see if the client is installed, run: # rpm -qa | grep nfs
This should return something similar to:
nfs-client-1.2.1-2.6.6
yast2-nfs-common-2.17.7-1.1.2
yast2-nfs-client-2.17.12-0.1.81
If you don't see either nfs-client or yast2-nfs-xxxx packages, then use
either YaST or zypper to install the NFS client packages.
Using YaST:
# yast2 --install yast2-nfs-client
# yast2 --install yast2-nfs-common
Using Zypper: # zypper install nfs-client
Ensure that rpcbind or portmapper package is installed on the Linux host. Run:
# rpm -qa | grep rpcbind
This should return something like: rpcbind-0.1.6+git20080930-6.15
If you see nothing, then you must install the packages using either YaST or
zypper:
Using YaST: # yast2 --install rpcbind
Using Zypper: # zypper install rpcbind
Learn NFS client information from the Linux host
A Backup and DR-approved NFS client package and version must be installed on
the host.
Check if the portmapper or rpcbind service is running. Run:
# sudo service rpcbind status
A Red Hat RHEL 6 or CentOS Linux host should return something like:
rpcbind (pid 1591) is running...
An SLES Linux host should return something like:
Checking for service rpcbind running
If rpcbind service is not running on Linux host, start it with:
# sudo service rpcbind start
Use rpcinfo to list the registered RPC programs or services. Portmapper
must be registered and running.
# sudo rpcinfo -p
program vers proto port service
100000 4 tcp 111 portmapper
100000 3 tcp 111 portmapper
100000 2 tcp 111 portmapper
100000 4 udp 111 portmapper
100000 3 udp 111 portmapper
100000 2 udp 111 portmapper
Check if the Linux host can make an RPC call to rpcbind and NFS programs on
the backup/recovery appliance using the following.
# sudo rpcinfo -T tcp <#vm internal IP> rpcbind
program 100000 version 2 ready and waiting
program 100000 version 3 ready and waiting
program 100000 version 4 ready and waiting
# sudo rpcinfo -T tcp <#vm internal IP> nfs
program 100003 version 2 ready and waiting
program 100003 version 3 ready and waiting
If the preceding commands return the output shown earlier, then NFS connectivity from
Linux host to the backup/recovery appliance is good.
Planning staging disk size
For some large filesystems, you may have to manually set the staging disk size
for the file system. The default staging disk size is NAS capacity + 20% ,
but there are two cases in which this may be insufficient:
NFS and SMB network file systems sometimes incorrectly report very large
capacities. In cases where the file system reports that it is over 128TiB the
Backup and DR agent fails the backup with error code 5289:
"The reported size of the protected volume requires that the staging disk size
is specified for this application". This error prevents Backup and DR Service
from allocating a huge disk that is not needed or that is larger than the
backup/recovery appliance can handle.
Even if your NAS is using dedup and compression on its disks,
Backup and DR Service does not deduplicate or compress data in the backup image on
the staging disk. Your NAS may report usage of 5TB, but the backup image on
the staging disk may use significantly more space. This also requires that the
administrators specify a manual staging disk size. This may result in a
"staging disk full" error.
If you see either of these errors, then manually set the staging disk size in
Application Details and Settings .
Virtual snapshots in a .snapshot directory
Sometimes on the NAS there are .snapshot directories containing a full copy of
the NAS contents. These are virtual snapshots of the NAS. The Backup and DR agent
tries to copy all of those snapshots and runs out of space. You can remedy this
by using an exclude pattern of .snapshot or ~snapshot (whatever name the NAS
uses). See Exclude patterns in .
Additional information for preparing file system hosts
Additional information relevant to preparing a file system host for protection
are in Manage hosts and their connected applications .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
