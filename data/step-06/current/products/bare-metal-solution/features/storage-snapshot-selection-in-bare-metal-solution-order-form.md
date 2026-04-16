---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.445Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Storage snapshot selection in Bare Metal Solution Order Form"
feature_slug: "storage-snapshot-selection-in-bare-metal-solution-order-form"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-nfs"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
keywords:
  - "selection"
  - "snapshot"
  - "storage"
  - "order"
  - "form"
---

# Storage snapshot selection in Bare Metal Solution Order Form

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds the ability to choose storage snapshots when creating storage volumes in the intake form.

## Extended Definition

Adds the ability to choose storage snapshots when creating storage volumes in the intake form.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Click the name to view additional information about the NFS storage volume, such as snapshots. at-2222222-nfs001-vol000 Labels Displays any labels you added to this NFS file storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view the status of your NFS file storage within the Bare Metal Solution environment, issue the gcloud bms nfs-shares list command: gcloud bms nfs-shares list --project= PROJECT ID --region= REGION Additional command options include: --limit: Limit the output to show a specific number of devices. --filter: Limit the output to show devices with a specific label or other filter parameter.
- Click the name to view additional information about the storage volume, including LUNs and snapshots.
- Click the ID to view basic information about the storage volume, including LUNs and snapshots.
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.

### "Add NFS file storage to a Bare Metal Solution environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-nfs](https://docs.cloud.google.com/bare-metal/docs/bms-nfs)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about using NFS file storage with an Oracle database, see the following articles (requires an Oracle account): RMAN with NFS Direct NFS Client Mounts to NFS Storage Devices Request NFS file storage for Bare Metal Solution When you want to add NFS file storage to your Bare Metal Solution environment, you need to order your NFS volumes through Google Cloud Sales .
- For RHEL 7, use multiple NFS clients to achieve similar performance. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600,nconnect=8 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME For most Oracle implementations in a Bare Metal Solution environment, use the following command to mount the volume. sudo mount -t nfs -o \ rw,bg,hard,nointr,rsize=32768,wsize=32768,tcp,vers=3,timeo=600 \ NFS SERVER IP ADDRESS :/ NFS SHARE NAME /mnt/ DIRECTORY NAME If your Oracle implementation requires the storage of live Oracle RAC binaries or data files on the NFS volume, enter the following command that uses the actimeo option.
- It appears in the following format: NFS SERVER IP ADDRESS:/NFS SHARE NAME For example, if the NFS server IP address is 192.168.1.240 and the NFS share name is at-1234567-nfs001 , the resulting NFS volume path looks like this: 192.168.1.240:/at-1234567-nfs001 Configure NFS file storage for Bare Metal Solution The following example helps you configure NFS file storage for your Bare Metal Solution servers, and uses Red Hat Enterprise Linux commands .
- Once your volume quota is available, you need to gather and provide the following information to provision NFS file storage for your Bare Metal Solution environment: Field Description Example Google Cloud project ID Visit the Welcome page of your Google Cloud project to find your Project ID.

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the Google Cloud console intake form to enter your selections Now that you have ordered your Bare Metal Solution resources and are prepared to bring them online, you need to enter the information for your Bare Metal Solution environment into the Google Cloud console intake form.
- Before you begin Before you start filling out the Bare Metal Solution intake form, do the following: Place your order for networking, servers, and storage with Google Cloud Sales .
- Checkbox selected to enable snapshots Protocol Select the storage protocol Fibre Channel NFS Fibre Channel LUNs Specify how you want to allocate your Logical Unit Numbers (LUNS) in the storage volume: Number of LUNs Size of each LUN Note: We recommend that you configure 1 LUN for each volume with 4 TiB or less, and 8 LUNs for volumes with more than 4 TiB.
- Enter the following information: Field Description Example Name Enter a name for your storage volume. volume-1 Type Select the type of storage: SSD – Solid state drive HDD – Hard drive SSD Size Select the size of the drive in GiB.

