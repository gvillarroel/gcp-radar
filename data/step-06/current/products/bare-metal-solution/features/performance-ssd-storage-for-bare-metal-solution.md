---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.410Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Performance SSD storage for Bare Metal Solution"
feature_slug: "performance-ssd-storage-for-bare-metal-solution"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-nfs"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "performance"
  - "storage"
---

# Performance SSD storage for Bare Metal Solution

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

You can now order Performance SSD storage for Bare Metal Solution.

## Extended Definition

You can now order Performance SSD storage for Bare Metal Solution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### "Add NFS file storage to a Bare Metal Solution environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For RHEL 7, use multiple NFS clients to achieve similar performance. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,nconnect=8 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME For most Oracle implementations in a Bare Metal Solution environment, use the following command to mount the volume. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME If your Oracle implementation requires the storage of live Oracle RAC binaries or data files on the NFS volume, enter the following command that uses the actimeo option.
- NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME nfs defaults,nofail 0 0 [ ADMIN USER @ BMS SERVER NAME ]$ sudo -i [root@ BMS SERVER NAME ]# cd /etc [root@ BMS SERVER NAME etc]# vi fstab [root@ BMS SERVER NAME etc]# cat fstab /etc/fstab Created by anaconda on Sun Feb 16 10:06:11 2020 Accessible filesystems, by reference, are maintained under '/dev/disk' See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info /dev/mapper/rootvg-rootlv / xfs defaults 0 0 UUID=bc39a085-d080-488e-9402-d22558bc88ae /boot xfs defaults 0 0 UUID=4127-64CB /boot/efi vfat defaults,uid=0,gid=0,umask=0077,shortname=winnt 0 0 /dev/mapper/rootvg-homelv /home xfs defaults 0 0 /dev/mapper/rootvg-optlv /opt xfs defaults 0 0 /dev/mapper/rootvg-tmplv /tmp xfs defaults 0 0 /dev/mapper/rootvg-varlv /var xfs defaults 0 0 /dev/mapper/rootvg-swaplv swap swap defaults 0 0 NFS SERVER IP ADDRESS:/NFS SHARE NAME /mnt/DIRECTORY NAME nfs defaults,nofail 0 0 Verify that you can access the volume. mount -l grep nfs NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Add a test file in your NFS directory. cd /mnt/ DIRECTORY NAME echo 'testing' sudo tee -a testfile sudo cat testfile sudo rm testfile View NFS file storage for Bare Metal Solution Use the following command to view a volume. mount grep NFS SHARE NAME NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Unmount NFS file storage for Bare Metal Solution Use the following commands to unmount the NFS volume and confirm its removal. sudo umount /mnt/ DIRECTORY NAME mount grep NFS SHARE NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- It appears in the following format: NFS SERVER IP ADDRESS:/NFS SHARE NAME For example, if the NFS server IP address is 192.168.1.240 and the NFS share name is at-1234567-nfs001 , the resulting NFS volume path looks like this: 192.168.1.240:/at-1234567-nfs001 Configure NFS file storage for Bare Metal Solution The following example helps you configure NFS file storage for your Bare Metal Solution servers, and uses Red Hat Enterprise Linux commands .
- This disables client-side attribute caching when writing concurrently from multiple clients, but can impact I/O performance. sudo mount -t nfs -o \ -rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,actimeo=0 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME To mount the NFS volume automatically if the server reboots, add the following entries to the end of the fstab file.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Go to the Backup and DR management console. https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/ Select the Manage > Storage Pools menu item. https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#pools Click the far right side option +Add OnVault Pool . https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#addonvaultpool Type a name for the Pool name .
- Alternatively, you can store the backup agent in a Cloud Storage bucket, enable downloads, and use wget or curl commands to download the agent directly to your Linux hosts. curl -o agent-Linux-latestversion.rpm https://storage.googleapis.com/backup-agent-images/connector-Linux-11.0.2.9595.rpm Use the rpm -ivh command to install the backup agent.
- The two main methods are as follows: App aware mounts Restores (Mount and migrate, and traditional restore) Each of these methods have different benefits, so you need to select which one you want to use depending on your use case, performance requirements, and how long you need to retain the database copy.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.
- Storage type Snapshot support Common Workloads SSD (solid-state drive) Yes Mission-critical production workloads HDD (hard drive) Yes Local backups or archival workloads Here are some additional storage volume considerations that you need to understand: We don't recommended using hard disk drives (HDDs) to run mission-critical Oracle production workloads, because performance guidance is not available for HDD storage.
- Use the following storage recommendations to improve the performance of your databases and applications in your Bare Metal Solution environment: When you deploy multiple storage volumes, use consistent volume sizes to get consistent performance for databases and applications.
- For Fibre Channel-based block storage, you can choose the following storage options in 1 TiB increments up to a maximum of 16 TiB for regular SSD and HDD and to a maximum of 8 TiB for Performance SSD.

