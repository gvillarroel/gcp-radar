---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.998Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Connect Bare Metal Solution to multiple VPCs"
feature_slug: "connect-bare-metal-solution-to-multiple-vpcs"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-nfs"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups"
keywords:
  - "connect"
  - "vpcs"
  - "multiple"
  - "allows"
  - "solution"
  - "metal"
  - "bare"
  - "to"
---

# Connect Bare Metal Solution to multiple VPCs

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Allows a Bare Metal Solution environment to connect to more than one VPC in a Google Cloud project.

## Extended Definition

Allows a Bare Metal Solution environment to connect to more than one VPC in a Google Cloud project.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- Host project– Lets you create regional subnets in a shared VPC that can connect the Bare Metal Solution regional extension to the Backup and DR Service, the backup/recovery appliance, your Cloud Storage buckets, and your Compute Engine VMs.
- During the PoC, we learned how to configure multiple elements together successfully – Oracle, Google Cloud Backup and DR, storage, and regional extension links – in a Bare Metal Solution environment.
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.

### "Add NFS file storage to a Bare Metal Solution environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For RHEL 7, use multiple NFS clients to achieve similar performance. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,nconnect=8 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME For most Oracle implementations in a Bare Metal Solution environment, use the following command to mount the volume. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME If your Oracle implementation requires the storage of live Oracle RAC binaries or data files on the NFS volume, enter the following command that uses the actimeo option.
- Use SSH to connect to your Bare Metal Solution server and log in with your username and password. [ USERNAME @ INSTANCE JUMP HOST ]$ ssh ADMIN USER @ BMS SERVER IP ADDRESS ADMIN USER @ BMS SERVER IP ADDRESS 's password: Last login: Wed May 26 22:25:47 2021 from JUMP HOST IP ADDRESS [ ADMIN USER @ BMS SERVER NAME ]$ Add a DNS server entry in your Bare Metal Solution server to access DNS. sudo bash -c "echo \"nameserver DNS SERVER IP ADDRESS \" >> /etc/resolv.conf" You can also use Cloud DNS and specify inbound forwarder entry points in place of the DNS server IP address.
- Target Allows access to the NFS volume from an individual Bare Metal Solution server ( Single server ), or all servers on a subnet ( CIDR ).
- NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME nfs defaults,nofail 0 0 [ ADMIN USER @ BMS SERVER NAME ]$ sudo -i [root@ BMS SERVER NAME ]# cd /etc [root@ BMS SERVER NAME etc]# vi fstab [root@ BMS SERVER NAME etc]# cat fstab /etc/fstab Created by anaconda on Sun Feb 16 10:06:11 2020 Accessible filesystems, by reference, are maintained under '/dev/disk' See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info /dev/mapper/rootvg-rootlv / xfs defaults 0 0 UUID=bc39a085-d080-488e-9402-d22558bc88ae /boot xfs defaults 0 0 UUID=4127-64CB /boot/efi vfat defaults,uid=0,gid=0,umask=0077,shortname=winnt 0 0 /dev/mapper/rootvg-homelv /home xfs defaults 0 0 /dev/mapper/rootvg-optlv /opt xfs defaults 0 0 /dev/mapper/rootvg-tmplv /tmp xfs defaults 0 0 /dev/mapper/rootvg-varlv /var xfs defaults 0 0 /dev/mapper/rootvg-swaplv swap swap defaults 0 0 NFS SERVER IP ADDRESS:/NFS SHARE NAME /mnt/DIRECTORY NAME nfs defaults,nofail 0 0 Verify that you can access the volume. mount -l grep nfs NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Add a test file in your NFS directory. cd /mnt/ DIRECTORY NAME echo 'testing' sudo tee -a testfile sudo cat testfile sudo rm testfile View NFS file storage for Bare Metal Solution Use the following command to view a volume. mount grep NFS SHARE NAME NFS SERVER IP ADDRESS :/ NFS SHARE NAME on /mnt/ DIRECTORY NAME type nfs (rw,relatime,vers=3,rsize=65536,wsize=65536,namlen=255, hard,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr= NFS SERVER IP ADDRESS , mountvers=3,mountport=635,mountproto=udp,local lock =none,addr= NFS SERVER IP ADDRESS ) Unmount NFS file storage for Bare Metal Solution Use the following commands to unmount the NFS volume and confirm its removal. sudo umount /mnt/ DIRECTORY NAME mount grep NFS SHARE NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Create Oracle backups with Filestore on Bare Metal Solution \_|\_ Google\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deployment In this guide, we create a deployment that meets the following criteria: A Bare Metal Solution server is connected to the Google Cloud project by Partner Interconnect.
- Enter the IP CIDR that contains the Bare Metal Solution server for Filestore to be able to connect to the Bare Metal Solution server.
- Create a firewall rule Create a firewall rule for the Bare Metal Solution server to connect with the Filestore instance.
- VPC Network : Select the network that is connected to your Bare Metal Solution server.

