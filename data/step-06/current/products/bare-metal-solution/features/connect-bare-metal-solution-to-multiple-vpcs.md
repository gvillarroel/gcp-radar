---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.429Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Connect Bare Metal Solution to multiple VPCs"
feature_slug: "connect-bare-metal-solution-to-multiple-vpcs"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-nfs"
keywords:
  - "environment"
  - "connect"
  - "vpcs"
  - "multiple"
  - "allows"
---

# Connect Bare Metal Solution to multiple VPCs

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Allows a Bare Metal Solution environment to connect to more than one VPC in a Google Cloud project.

## Extended Definition

Allows a Bare Metal Solution environment to connect to more than one VPC in a Google Cloud project.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- If you don't want to enable the Pod column, you can view the pod of a server by clicking the server name. asia-southeast1-pod1 Server Type Server specifications o2-standard-32-metal Client IP Server IP address that connects to your Google Virtual Private Cloud 10.200.0.5 Private IP Server IP address that connects to other Bare Metal Solution environment resources 192.168.2.5 Labels Displays any labels that you added to this server You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test Server activity Informs about any Bare Metal Solution infrastructure issue that might impact your workload.
- Manage networks You can manage the networks in your Bare Metal Solution environment in the following ways: View networks Organize networks by using labels Rename a network Create a network Attach a network to a server Detach a network from a server Delete a network View advanced networking information for a Bare Metal Solution environment Implement IP address management in a Bare Metal Solution environment View networks Monitoring your network resources in the Bare Metal Solution environment lets you know how your servers connect to other resources.
- Used addresses The IP addresses of the servers connected by the network. gcloud To view all networks in your Bare Metal Solution environment and see their status, enter your project ID and issue the gcloud bms networks list command. gcloud bms networks list --project= PROJECT ID The following output example shows a network name, region, IP address range, network type, and VLAN ID for each network.
- Example: nmcli connection add type vlan con-name bond0.114 ifname bond0.114 dev bond0 mtu 1500 id 114 ip4 172.16.80.1/24 ipv6.method "ignore" (Optional) If you have created a Client network and you want to use this network to connect from your VPC to VLAN attachments or other environment (such as, an on-prem environment), configure a route to your specific subnet.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Log in to Oracle Linux and configure the Oracle environment: TNS ADMIN= TNSNAMES.ORA FILE LOCATION tnsping CLU1 S Review the database user account to ensure a successful connection to the Backup and DR application: sqlplus act rman user/act rman user@act svc dbstd as sysdba In the Application Details and Settings page described in Application Details and Settings for Oracle Databases , enter the service name you created ( CLU1 S ) in the Oracle Service Name field: Error Code 870 says that "ASM backups with ASM on NFS staging disks is not supported." If you receive this error, you do not have the correct setting configured in Details and Settings for the instance that you want to protect.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- During the PoC, we learned how to configure multiple elements together successfully – Oracle, Google Cloud Backup and DR, storage, and regional extension links – in a Bare Metal Solution environment.
- For example, use the following RMAN configuration parameters for a database with a db unique name` of ctdb that uses the local file system: CONFIGURE RETENTION POLICY TO REDUNDANCY 1; # default CONFIGURE BACKUP OPTIMIZATION OFF; # default CONFIGURE DEFAULT DEVICE TYPE TO DISK; # default CONFIGURE CONTROLFILE AUTOBACKUP OFF; # default CONFIGURE CONTROLFILE AUTOBACKUP FORMAT FOR DEVICE TYPE DISK TO '%F'; # default CONFIGURE DEVICE TYPE DISK PARALLELISM 1 BACKUP TYPE TO BACKUPSET; # default CONFIGURE SNAPSHOT CONTROLFILE NAME TO '/mnt/ctdb/snapcf ctdb.f'; In a RAC environment, you must map the snapshot control file to a shared ASM disk group.

### "Add NFS file storage to a Bare Metal Solution environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For RHEL 7, use multiple NFS clients to achieve similar performance. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,nconnect=8 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME For most Oracle implementations in a Bare Metal Solution environment, use the following command to mount the volume. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME If your Oracle implementation requires the storage of live Oracle RAC binaries or data files on the NFS volume, enter the following command that uses the actimeo option.
- Use SSH to connect to your Bare Metal Solution server and log in with your username and password. [ USERNAME @ INSTANCE JUMP HOST ]$ ssh ADMIN USER @ BMS SERVER IP ADDRESS ADMIN USER @ BMS SERVER IP ADDRESS 's password: Last login: Wed May 26 22:25:47 2021 from JUMP HOST IP ADDRESS [ ADMIN USER @ BMS SERVER NAME ]$ Add a DNS server entry in your Bare Metal Solution server to access DNS. sudo bash -c "echo \"nameserver DNS SERVER IP ADDRESS \" >> /etc/resolv.conf" You can also use Cloud DNS and specify inbound forwarder entry points in place of the DNS server IP address.
- This disables client-side attribute caching when writing concurrently from multiple clients, but can impact I/O performance. sudo mount -t nfs -o \ -rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,actimeo=0 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME To mount the NFS volume automatically if the server reboots, add the following entries to the end of the fstab file.
- For more information about using NFS file storage with an Oracle database, see the following articles (requires an Oracle account): RMAN with NFS Direct NFS Client Mounts to NFS Storage Devices Request NFS file storage for Bare Metal Solution When you want to add NFS file storage to your Bare Metal Solution environment, you need to order your NFS volumes through Google Cloud Sales .

