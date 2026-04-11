---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.011Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Server network and IP assignment in Bare Metal Solution Order Form"
feature_slug: "server-network-and-ip-assignment-in-bare-metal-solution-order-form"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/db-setup-standby"
keywords:
  - "assignment"
  - "network"
  - "ip"
  - "server"
  - "metal"
  - "bare"
  - "and"
  - "in"
---

# Server network and IP assignment in Bare Metal Solution Order Form

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Enables assigning networks and IP addresses to each server as part of Order Form deployment.

## Extended Definition

Enables assigning networks and IP addresses to each server as part of Order Form deployment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/db-setup-standby](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/db-setup-standby)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.
- You can use either the NFS share name or ID as the NFS SHARE variable: gcloud bms nfs-shares describe NFS SHARE --project= PROJECT ID --region= REGION The output provides details about the allowed clients, NFS settings, the NFS server and its state, and the storage volume. allowedClients: – allowDev: true allowedClientsCidr: 192.168.1.1/32 mountPermissions: READ WRITE network: projects/ PROJECT ID /locations/ REGION /networks/at-1111111-vlan001 noRootSquash: true shareIp: 192.168.1.240 name: projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS SHARE nfsShareId: at-2222222-nfs001 state: PROVISIONED volume: projects/ PROJECT ID /locations/ REGION /volumes/at-2222222-nfs001-vol000 API To view the status of your NFS file storage within theBare Metal Solution environment, including allowed clients and NFS properties, enter your project ID and region into the following curl command.
- In the networks section of the output, you can view the network template, logical interfaces, bonded interfaces, and network type assigned to each interface. curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME " Implement IP Address Management in a Bare Metal Solution environment Being able to manage your network topology inside your Bare Metal Solution environment is important.
- Example: gcloud bms os-images describe OEL8x --project=test-project Following is a sample output: applicableInstanceTypes: - o2-highmem-224-metal - o2-standard-112-metal - o2-standard-16-metal - o2-standard-32-metal - o2-standard-48-metal code: OEL8x description: Oracle Linux 8.8 [5.4.17-2136.324.5.3.el8uek.x86 64] name: projects/bmaas-testing/locations/global/osImages/OEL8x supportedNetworkTemplates: - s200-bondaa-bondaa - s400-bondaa-bondaa Change the OS for a server You can reimage a Bare Metal Solution server with a different OS image.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- If the Oracle service name is not listed, create a service name entry on the server(s) in the tnsnames.ora file located at $ORACLE HOME/network/admin or at $GRID HOME/network/admin by adding the following entry: CLU1 S = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = )(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = CLU1 S) ) ) If the tnsnames.ora file is in a non-standard location, provide the absolute path to the file in the Application Details and Settings page described in Configure application details and settings for Oracle databases .
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- During the PoC, we learned how to configure multiple elements together successfully – Oracle, Google Cloud Backup and DR, storage, and regional extension links – in a Bare Metal Solution environment.

### "Create Data Guard's standby database \_|\_ Bare Metal Solution \_|\_ Google\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/db-setup-standby](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/db-setup-standby)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there are multiple control files, encapsulate each in single quotes, separated by a comma: .control files='+DATA/ DBDG SITE2 /CONTROLFILE/current.258.1091317089','+RECO/ DBDG SITE2 /CONTROLFILE/current.257.1091317089' Connect to the standby database with SQL Plus and create a new spfile from the modified pfile : sqlplus / as sysdba CREATE SPFILE = '+DATA/ DBDG SITE2 /spfile DBDG SITE2 ' FROM PFILE = ' /apps/oracle/19.0.0/db home1 /dbs/init DBDG SITE21 .ora' ; Copy the password file to the ASM diskgroup by using the asmcmd command: asmcmd cp /apps/oracle/19.0.0/db home1 /dbs/orapw DBDG SITE21 .ora +DATA/ DBDG SITE2 /orapw DBDG SITE2 Shut down the standby database instance and delete the temporary pfile and password file: sqplus / as sysdba SHUTDOWN IMMEDIATE ; EXIT ; rm $ORACLE HOME /dbs/orapw DBDG SITE21 .ora $ORACLE HOME /dbs/init DBDG SITE2 .ora Stop the temporary listener used for database duplication on the first Bare Metal Solution server in the standby database location: lsnrctl stop LISTENER DBDG SITE2 Remove the temporary entries in the $ORACLE HOME/network/admin/listener.ora file on the first Bare Metal Solution server in the standby database location.
- Set up the standby database Configure the database connectivity Log in to each Bare Metal Solution server in the standby location and modify the $ORACLE HOME/network/admin/tsnames.ora file to update the net service configuration: DBDG SITE2 = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = DBDG SITE2 SCAN HOSTNAME )(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = DBDG SITE2 ) (UR=A) ) ) DBDG SITE1 = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = DBDG SITE1 SCAN HOSTNAME )(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = DBDG SITE1 ) ) ) Configure a temporary listener To avoid restarting the listener used for other database connections, database duplication is performed using a temporary listener.
- As a reminder, the following examples are used throughout this guide: Database unique name Server hostnames RAC instance names Role DBDG SITE1 site1db1 , site1db2 DBDG SITE11 , DBDG SITE12 Primary DBDG SITE2 site2db1 , site2db2 DBDG SITE21 , DBDG SITE22 Standby The Bare Metal Solution servers running Oracle in this guide are configured with the following environment variables: Environment variable name Value ORACLE BASE /apps/oracle/oracle base ORACLE HOME /apps/oracle/19.0.0/db home1 You might need to modify the environment variable paths depending on your setup.
- Log in to the first Bare Metal Solution server in the standby location, start SQL Plus, then startup the standby database in nomount mode by using the pfile : sqlplus / as sysdba STARTUP NOMOUNT PFILE = ' /apps/oracle/19.0.0/db home1 /dbs/init DBDG SITE21 .ora' ; If successful, you should receive a response similar to the following example: ORACLE instance started.

