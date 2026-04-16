---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.436Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Assign existing client networks during server deployment"
feature_slug: "assign-existing-client-networks-during-server-deployment"
latest_feature_date: "2022-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide"
keywords:
  - "assign"
  - "client"
  - "existing"
  - "deployment"
  - "during"
  - "networks"
  - "allows"
  - "server"
---

# Assign existing client networks during server deployment

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Allows deployment of new Bare Metal Solution servers using an existing client network.

## Extended Definition

Allows deployment of new Bare Metal Solution servers using an existing client network.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)

## Supporting Pages

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)
- Source ID: `site-docs-reference-2`
- Final score: 199
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a subnetwork, and specify the region and IP range: gcloud compute networks subnets create SUBNETWORK NAME \ --network NETWORK NAME --region REGION --range RANGE Replace the following: SUBNETWORK NAME : the name of the new subnetwork NETWORK NAME : the name of the network you created in the previous step REGION : the region where you want the subnetwork RANGE : the IP address range, specified in CIDR format , such as 10.1.0.0/24 If you plan to add more than one subnetwork, assign non-overlapping CIDR IP ranges for each subnetwork in the network.
- This guide shows you how to automate the deployment of SAP HANA in a Red Hat Enterprise Linux (RHEL) or SUSE Linux Enterprise Server (SLES) high-availability (HA) cluster that uses an internal passthrough Network Load Balancer to manage the virtual IP (VIP) address.
- For example, to turn on persistent memory for an existing table, execute the SQL query: ALTER TABLE exampletable persistent memory ON immediate CASCADE To change the default for new tables add the parameter table default in the indexserver.ini file.
- For the initial deployment of your SAP HANA system or resizing the machine to increase the number of NUMA nodes, make sure that SAP HANA is running during the execution of automation script that Google Cloud provides to enable SAP HANA Fast Restart.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "nfsKey1": "some value", "key2": "another value", }, "requestedSizeGib": " SIZE GIB ", "storageType": " STORAGE TYPE ", "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because creating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ?updateMask=allowed clients%2Clabels" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "newKey": "newVal", }, "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NFS VOLUME NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because updating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- You can use either the NFS share name or ID as the NFS SHARE variable: gcloud bms nfs-shares describe NFS SHARE --project= PROJECT ID --region= REGION The output provides details about the allowed clients, NFS settings, the NFS server and its state, and the storage volume. allowedClients: – allowDev: true allowedClientsCidr: 192.168.1.1/32 mountPermissions: READ WRITE network: projects/ PROJECT ID /locations/ REGION /networks/at-1111111-vlan001 noRootSquash: true shareIp: 192.168.1.240 name: projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS SHARE nfsShareId: at-2222222-nfs001 state: PROVISIONED volume: projects/ PROJECT ID /locations/ REGION /volumes/at-2222222-nfs001-vol000 API To view the status of your NFS file storage within theBare Metal Solution environment, including allowed clients and NFS properties, enter your project ID and region into the following curl command.

### "SAP HANA high-availability planning guide \_|\_ SAP on Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you use an automated deployment method, you provide information about the NFS server in the deployment file, to mount the NFS directories during deployment.
- Replace the existing gceStorageClient.py with the updated gceStorageClient.py file: If your existing gceStorageClient.py file is in /hana/shared/gceStorageClient , the default installation location, use the installation script to update the file: sudo /usr/sap/google-sapgcestorageclient/install.sh If your existing gceStorageClient.py file is not in /hana/shared/gceStorageClient , copy the updated file into the same location as your existing file, replacing the existing file.
- For more information, see: SAP HANA host auto-failover on Google Cloud Terraform: SAP HANA scale-out system with host auto-failover Deployment Guide SAP HANA System Replication SAP HANA system replication allows you to configure one or more systems to take over for your primary system in high-availability or disaster recovery scenarios.
- If you are implementing a backup solution, such as the Cloud Storage Backint agent for SAP HANA, you can remove the /hanabackup volume from the NFS server after the deployment is complete.

