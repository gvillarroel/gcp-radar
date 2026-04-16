---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.447Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "View Bare Metal Solution servers via gcloud and API"
feature_slug: "view-bare-metal-solution-servers-via-gcloud-and-api"
latest_feature_date: "2021-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-setup"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "gcloud"
  - "allows"
  - "servers"
  - "view"
---

# View Bare Metal Solution servers via gcloud and API

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Allows users to list Bare Metal Solution servers and view full server details using gcloud and API commands.

## Extended Definition

Allows users to list Bare Metal Solution servers and view full server details using gcloud and API commands.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "nfsKey1": "some value", "key2": "another value", }, "requestedSizeGib": " SIZE GIB ", "storageType": " STORAGE TYPE ", "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because creating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ?updateMask=allowed clients%2Clabels" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "newKey": "newVal", }, "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NFS VOLUME NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because updating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Used addresses The IP addresses of the servers connected by the network. gcloud To view all networks in your Bare Metal Solution environment and see their status, enter your project ID and issue the gcloud bms networks list command. gcloud bms networks list --project= PROJECT ID The following output example shows a network name, region, IP address range, network type, and VLAN ID for each network.
- For example, to view only servers with the label env:dev , you can enter any of the following: Enter the key: env Enter the value: dev Enter the key-value pair: env:dev To apply the label filter, click anywhere outside the filter bar. gcloud To filter servers by using labels, use the gcloud bms instances list command with the --filter option.

### "Quickstart: Set up Google Cloud to work with your Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- They are both in the us-central1 region. gcloud compute interconnects attachments partner create my-attachment \ --region us-central1 \ --router my-router-1 \ --edge-availability-domain availability-domain-1 \ --admin-enabled gcloud compute interconnects attachments partner create my-attachment \ --region us-central1 \ --router my-router-2 \ --edge-availability-domain availability-domain-2 \ --admin-enabled Run the gcloud compute interconnects attachments describe command to view the details of the VLAN attachment. gcloud compute interconnects attachments describe my-attachment \ --region us-central1 adminEnabled: false edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 creationTimestamp: '2017-12-01T08:29:09.886-08:00' id: '7976913826166357434' kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: my-attachment region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/my-router selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/my-attachment state: PENDING PARTNER type: PARTNER The state of the VLAN attachment is PENDING PARTNER until Google Cloud completes your VLAN attachment configuration.
- The following example, adds the 0.0.0.0/0 custom IP to the Cloud Router's advertisements: gcloud compute routers update-bgp-peer router-name \ --peer-name bgp-session-name \ --add-advertisement-ranges 0.0.0.0/0 Optionally, set the VPC Network Dynamic Routing Mode to global If you have Bare Metal Solution servers in two different regions, consider enabling global routing mode on the VPC network to have your Bare Metal Solution regions talk to each other directly over the VPC network.
- PROJECT ID : the ID of the project MTU : the maximum transmission unit (MTU), which is the largest packet size of the network Create a subnet. gcloud compute networks subnets create SUBNET NAME -- project = PROJECT ID -- range = RANGE -- stack - type = IPV4 ONLY -- network = NETWORK -- region = REGION Replace the following: SUBNET NAME : the name for the subnet PROJECT ID : the ID of the project RANGE : the IP space allocated to this subnet in CIDR format NETWORK : the VPC network to which the subnet belongs REGION : the region of the subnet Create two Cloud Routers for the redundancy and advertisements. gcloud compute routers create ROUTER NAME -- project = PROJECT ID -- region = REGION -- network = NETWORK -- advertisement - mode = custom -- set - advertisement - ranges = 0.0.0.0 / 0 Replace the following: ROUTER NAME : the name of the router PROJECT ID : the ID of the project REGION : the region of the router NETWORK : the VPC network for this router Create four VLAN attachments, two for each Cloud Router.
- Installing http server sudo yum install httpd sudo systemctl restart httpd Testing curl http://127.0.0.1:80 Create an instance group. gcloud compute instance-groups unmanaged create INSTANCE GROUP NAME --project= PROJECT ID --zone= ZONE Replace the following: INSTANCE GROUP NAME : the name of the instance group PROJECT ID : the ID of the project ZONE : the zone in which to create the instance group Add the VM to the instance group. gcloud compute instance-groups unmanaged add-instances INSTANCE GROUP NAME --project= PROJECT ID --zone= ZONE --instances= VM NAME Replace the following: INSTANCE GROUP NAME : the name of the instance group PROJECT ID : the ID of the project ZONE : the zone in which to create the instance group VM NAME : the name of the VM Create an internal passthrough Network Load Balancer: Start your configuration In the Google Cloud console, go to the Load balancing page.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Log in to Oracle Linux and configure the Oracle environment: TNS ADMIN= TNSNAMES.ORA FILE LOCATION tnsping CLU1 S Review the database user account to ensure a successful connection to the Backup and DR application: sqlplus act rman user/act rman user@act svc dbstd as sysdba In the Application Details and Settings page described in Application Details and Settings for Oracle Databases , enter the service name you created ( CLU1 S ) in the Oracle Service Name field: Error Code 870 says that "ASM backups with ASM on NFS staging disks is not supported." If you receive this error, you do not have the correct setting configured in Details and Settings for the instance that you want to protect.
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Mount an Oracle database In the Backup and DR management console, go to the Backup and Recover > Recover page. https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#recover/selectapp In the Application list, find the database that you want to mount, right-click the database name, and click Next : The Timeline Ramp View appears and displays all the available point-in-time images.

