---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.432Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "gcloud"
feature_slug: "gcloud"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/configure-serial-console"
  - "https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console"
keywords:
  - "viewing"
  - "full"
  - "console"
  - "gcloud"
  - "when"
  - "adds"
---

# gcloud

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds full Console, gcloud, and API support when viewing Bare Metal Solution resources.

## Extended Definition

Adds full Console, gcloud, and API support when viewing Bare Metal Solution resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- [https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.
- NAME REGION RANGE TYPE VLAN ID at-1111111-vlan001 REGION 192.168.1.0/24 CLIENT 122 at-1111111-vlan002 REGION 192.168.2.0/24 PRIVATE 123 To view details for a single network, enter the project ID, region, and network name, and issue the gcloud bms networks describe command: gcloud bms networks describe NETWORK NAME --project= PROJECT ID --region= REGION The following output example shows the IP address range, network name, state, network type, VLAN ID, and virtual routing and forwarding (VRF) details. cidr: 192.168.1.0/24 name: projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME state: PROVISIONED type: CLIENT vlanId: '122' vrf: autonomousSystemNumber: '65500' juniperAlias: g00000-at-1111111-ic001 name: at-1111111-ic001 routeTarget: '282' state: PROVISIONED API Open a Cloud Shell terminal window in your Google Cloud console.
- Click the name to view additional information about the NFS storage volume, such as snapshots. at-2222222-nfs001-vol000 Labels Displays any labels you added to this NFS file storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view the status of your NFS file storage within the Bare Metal Solution environment, issue the gcloud bms nfs-shares list command: gcloud bms nfs-shares list --project= PROJECT ID --region= REGION Additional command options include: --limit: Limit the output to show a specific number of devices. --filter: Limit the output to show devices with a specific label or other filter parameter.
- If you don't want to enable the Pod column, you can view the pod of a storage volume by clicking the storage volume name. asia-southeast1-pod1 Type Hard drive or solid-state drive HDD - Hard drive Labels Displays any labels you added to this storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view all storage volumes in your Bare Metal Solution environment and see their status, enter your project ID and issue the gcloud bms volumes list command: gcloud bms volumes list --project= PROJECT ID The following output example shows three storage volumes, the project ID, region, volume size and storage type.

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API To enable access to the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :enableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- API To disable the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :disableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- Enable access to the interactive serial console Before using the interactive serial console, you must enable access to it on your server. gcloud To enable access to the interactive serial console, run the gcloud bms instances enable-serial-console command. gcloud bms instances enable-serial-console SERVER NAME --project= PROJECT ID --region= REGION Replace the following: SERVER NAME : Name of your server.
- Disable interactive serial console access Use the following instructions to disable the interactive serial console access on a server. gcloud To disable the interactive serial console, run the gcloud bms instances disable-serial-console command. gcloud bms instances disable-serial-console SERVER NAME --project= PROJECT ID --region= REGION Replace the following: SERVER NAME : Name of your server.

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API To enable access to the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :enableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- API To disable the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :disableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- Enable access to the interactive serial console Before using the interactive serial console, you must enable access to it on your server. gcloud To enable access to the interactive serial console, run the gcloud bms instances enable-serial-console command. gcloud bms instances enable-serial-console SERVER NAME --project= PROJECT ID --region= REGION Replace the following: SERVER NAME : Name of your server.
- Disable interactive serial console access Use the following instructions to disable the interactive serial console access on a server. gcloud To disable the interactive serial console, run the gcloud bms instances disable-serial-console command. gcloud bms instances disable-serial-console SERVER NAME --project= PROJECT ID --region= REGION Replace the following: SERVER NAME : Name of your server.

