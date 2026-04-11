---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.015Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Storage snapshot selection in Bare Metal Solution Order Form"
feature_slug: "storage-snapshot-selection-in-bare-metal-solution-order-form"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-nfs"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "selection"
  - "snapshot"
  - "storage"
  - "order"
  - "solution"
  - "metal"
  - "bare"
  - "in"
---

# Storage snapshot selection in Bare Metal Solution Order Form

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Adds the ability to choose storage snapshots when creating storage volumes in the intake form.

## Extended Definition

Adds the ability to choose storage snapshots when creating storage volumes in the intake form.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- Click the name to view additional information about the NFS storage volume, such as snapshots. at-2222222-nfs001-vol000 Labels Displays any labels you added to this NFS file storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view the status of your NFS file storage within the Bare Metal Solution environment, issue the gcloud bms nfs-shares list command: gcloud bms nfs-shares list --project= PROJECT ID --region= REGION Additional command options include: --limit: Limit the output to show a specific number of devices. --filter: Limit the output to show devices with a specific label or other filter parameter.
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- Manage NFS file storage You can manage your NFS file storage in the following ways: View NFS volumes Organize NFS volumes by using labels Rename an NFS volume Create an NFS volume Update an NFS volume Delete an NFS volume View NFS volumes After you order and provision NFS for Bare Metal Solution, you can view the status of your NFS file storage and confirm that Google Cloud implemented your configured settings as expected.
- Provision storage volume resources in your Bare Metal Solution environment After ordering storage resources for your Bare Metal Solution environment, you can provision the resources once they are available.

### "Add NFS file storage to a Bare Metal Solution environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about using NFS file storage with an Oracle database, see the following articles (requires an Oracle account): RMAN with NFS Direct NFS Client Mounts to NFS Storage Devices Request NFS file storage for Bare Metal Solution When you want to add NFS file storage to your Bare Metal Solution environment, you need to order your NFS volumes through Google Cloud Sales .
- NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME nfs defaults,nofail 0 0 [ ADMIN USER @ BMS SERVER NAME ]$ sudo -i [root@ BMS SERVER NAME ]# cd /etc [root@ BMS SERVER NAME etc]# vi fstab [root@ BMS SERVER NAME etc]# cat fstab /etc/fstab Created by anaconda on Sun Feb 16 10:06:11 2020 Accessible filesystems, by reference, are maintained under '/dev/disk' See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info /dev/mapper/rootvg-rootlv / xfs defaults 0 0 UUID=bc39a085-d080-488e-9402-d22558bc88ae /boot xfs defaults 0 0 UUID=4127-64CB /boot/efi vfat defaults,uid=0,gid=0,umask=0077,shortname=winnt 0 0 /dev/mapper/rootvg-homelv /home xfs defaults 0 0 /dev/mapper/rootvg-optlv /opt xfs defaults 0 0 /dev/mapper/rootvg-tmplv /tmp xfs defaults 0 0 /dev/mapper/rootvg-varlv /var xfs defaults 0 0 /dev/mapper/rootvg-swaplv swap swap defaults 0 0 NFS SERVER IP ADDRESS:/NFS SHARE NAME /mnt/DIRECTORY NAME nfs defaults,nofail 0 0 Verify that you can access the volume. mount -l grep nfs NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Add a test file in your NFS directory. cd /mnt/ DIRECTORY NAME echo 'testing' sudo tee -a testfile sudo cat testfile sudo rm testfile View NFS file storage for Bare Metal Solution Use the following command to view a volume. mount grep NFS SHARE NAME NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Unmount NFS file storage for Bare Metal Solution Use the following commands to unmount the NFS volume and confirm its removal. sudo umount /mnt/ DIRECTORY NAME mount grep NFS SHARE NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For RHEL 7, use multiple NFS clients to achieve similar performance. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,nconnect=8 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME For most Oracle implementations in a Bare Metal Solution environment, use the following command to mount the volume. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME If your Oracle implementation requires the storage of live Oracle RAC binaries or data files on the NFS volume, enter the following command that uses the actimeo option.
- It appears in the following format: NFS SERVER IP ADDRESS:/NFS SHARE NAME For example, if the NFS server IP address is 192.168.1.240 and the NFS share name is at-1234567-nfs001 , the resulting NFS volume path looks like this: 192.168.1.240:/at-1234567-nfs001 Configure NFS file storage for Bare Metal Solution The following example helps you configure NFS file storage for your Bare Metal Solution servers, and uses Red Hat Enterprise Linux commands .

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- When you place your order for data volume snapshots, you need to tell Google Cloud which action we should take when the snapshot reserve fills up: Delete the oldest snapshot first (recommended) Delete the newest snapshot first Take the volume offline Google Cloud takes snapshots of the boot OS volume automatically every day at 12:10 AM in the region where your Bare Metal Solution servers are located.
- Storage For storage in a Bare Metal Solution environment, you need to select the type of storage you need, know how to maximize the performance , and decide if you want to enable snapshots .
- Data volume: You can request daily snapshots when you place your initial order for Bare Metal Solution.
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.

