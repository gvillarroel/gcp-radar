---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.002Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Monitor NFS file storage in Bare Metal Solution via gcloud and API"
feature_slug: "monitor-nfs-file-storage-in-bare-metal-solution-via-gcloud-and-api"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-nfs"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "monitor"
  - "file"
  - "nfs"
  - "storage"
  - "solution"
  - "metal"
  - "bare"
  - "in"
---

# Monitor NFS file storage in Bare Metal Solution via gcloud and API

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Adds monitoring support for NFS file storage through gcloud and API interfaces.

## Extended Definition

Adds monitoring support for NFS file storage through gcloud and API interfaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### "Add NFS file storage to a Bare Metal Solution environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME nfs defaults,nofail 0 0 [ ADMIN USER @ BMS SERVER NAME ]$ sudo -i [root@ BMS SERVER NAME ]# cd /etc [root@ BMS SERVER NAME etc]# vi fstab [root@ BMS SERVER NAME etc]# cat fstab /etc/fstab Created by anaconda on Sun Feb 16 10:06:11 2020 Accessible filesystems, by reference, are maintained under '/dev/disk' See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info /dev/mapper/rootvg-rootlv / xfs defaults 0 0 UUID=bc39a085-d080-488e-9402-d22558bc88ae /boot xfs defaults 0 0 UUID=4127-64CB /boot/efi vfat defaults,uid=0,gid=0,umask=0077,shortname=winnt 0 0 /dev/mapper/rootvg-homelv /home xfs defaults 0 0 /dev/mapper/rootvg-optlv /opt xfs defaults 0 0 /dev/mapper/rootvg-tmplv /tmp xfs defaults 0 0 /dev/mapper/rootvg-varlv /var xfs defaults 0 0 /dev/mapper/rootvg-swaplv swap swap defaults 0 0 NFS SERVER IP ADDRESS:/NFS SHARE NAME /mnt/DIRECTORY NAME nfs defaults,nofail 0 0 Verify that you can access the volume. mount -l grep nfs NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Add a test file in your NFS directory. cd /mnt/ DIRECTORY NAME echo 'testing' sudo tee -a testfile sudo cat testfile sudo rm testfile View NFS file storage for Bare Metal Solution Use the following command to view a volume. mount grep NFS SHARE NAME NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Unmount NFS file storage for Bare Metal Solution Use the following commands to unmount the NFS volume and confirm its removal. sudo umount /mnt/ DIRECTORY NAME mount grep NFS SHARE NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For RHEL 7, use multiple NFS clients to achieve similar performance. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,nconnect=8 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME For most Oracle implementations in a Bare Metal Solution environment, use the following command to mount the volume. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME If your Oracle implementation requires the storage of live Oracle RAC binaries or data files on the NFS volume, enter the following command that uses the actimeo option.
- It appears in the following format: NFS SERVER IP ADDRESS:/NFS SHARE NAME For example, if the NFS server IP address is 192.168.1.240 and the NFS share name is at-1234567-nfs001 , the resulting NFS volume path looks like this: 192.168.1.240:/at-1234567-nfs001 Configure NFS file storage for Bare Metal Solution The following example helps you configure NFS file storage for your Bare Metal Solution servers, and uses Red Hat Enterprise Linux commands .
- For more information about using NFS file storage with an Oracle database, see the following articles (requires an Oracle account): RMAN with NFS Direct NFS Client Mounts to NFS Storage Devices Request NFS file storage for Bare Metal Solution When you want to add NFS file storage to your Bare Metal Solution environment, you need to order your NFS volumes through Google Cloud Sales .

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- You can use either the NFS share name or ID as the NFS SHARE variable: gcloud bms nfs-shares describe NFS SHARE --project= PROJECT ID --region= REGION The output provides details about the allowed clients, NFS settings, the NFS server and its state, and the storage volume. allowedClients: – allowDev: true allowedClientsCidr: 192.168.1.1/32 mountPermissions: READ WRITE network: projects/ PROJECT ID /locations/ REGION /networks/at-1111111-vlan001 noRootSquash: true shareIp: 192.168.1.240 name: projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS SHARE nfsShareId: at-2222222-nfs001 state: PROVISIONED volume: projects/ PROJECT ID /locations/ REGION /volumes/at-2222222-nfs001-vol000 API To view the status of your NFS file storage within theBare Metal Solution environment, including allowed clients and NFS properties, enter your project ID and region into the following curl command.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" To view the status of a specific NFS file storage device, enter your project ID, region, and NFS server name or ID, then issue the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS SHARE " Organize NFS file storage by using labels To help organize your NFS file storage, you can use labels.
- Click the name to view additional information about the NFS storage volume, such as snapshots. at-2222222-nfs001-vol000 Labels Displays any labels you added to this NFS file storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view the status of your NFS file storage within the Bare Metal Solution environment, issue the gcloud bms nfs-shares list command: gcloud bms nfs-shares list --project= PROJECT ID --region= REGION Additional command options include: --limit: Limit the output to show a specific number of devices. --filter: Limit the output to show devices with a specific label or other filter parameter.
- Manage NFS file storage You can manage your NFS file storage in the following ways: View NFS volumes Organize NFS volumes by using labels Rename an NFS volume Create an NFS volume Update an NFS volume Delete an NFS volume View NFS volumes After you order and provision NFS for Bare Metal Solution, you can view the status of your NFS file storage and confirm that Google Cloud implemented your configured settings as expected.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.
- Host project– Lets you create regional subnets in a shared VPC that can connect the Bare Metal Solution regional extension to the Backup and DR Service, the backup/recovery appliance, your Cloud Storage buckets, and your Compute Engine VMs.

