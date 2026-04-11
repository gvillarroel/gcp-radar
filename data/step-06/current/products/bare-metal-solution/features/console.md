---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.001Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Console"
feature_slug: "console"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "viewing"
  - "full"
  - "console"
  - "gcloud"
  - "when"
  - "api"
  - "adds"
  - "and"
---

# Console

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Adds full Console, gcloud, and API support when viewing Bare Metal Solution resources.

## Extended Definition

Adds full Console, gcloud, and API support when viewing Bare Metal Solution resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a list of permissions in the Owner role, see the role details in the Google Cloud console: Go to Owner role Generally, you can grant legacy basic roles using the Google Cloud console, the API, or the gcloud CLI.
- For a list of permissions in the Writer role, see the role details in the Google Cloud console: Go to Writer role Admin ( roles/admin ) All of the permissions in the Writer role, plus permissions for actions like the following: Completing sensitive tasks, like managing tag bindings for Compute Engine resources Managing roles and permissions for a project and all resources within the project Setting up billing for a project The Admin role doesn't contain all permissions for all Google Cloud resources.
- For a list of permissions in the Editor role, see the role details in the Google Cloud console: Go to Editor role Owner ( roles/owner ) All Editor permissions, plus permissions for actions like the following: Completing sensitive tasks, like managing tag bindings for Compute Engine resources Managing roles and permissions for a project and all resources within the project Setting up billing for a project The Owner role doesn't contain all permissions for all Google Cloud resources.
- The reason that you can't include folder-specific and organization-specific permissions in project-level roles is that they don't do anything when granted at the project level.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.
- NAME REGION RANGE TYPE VLAN ID at-1111111-vlan001 REGION 192.168.1.0/24 CLIENT 122 at-1111111-vlan002 REGION 192.168.2.0/24 PRIVATE 123 To view details for a single network, enter the project ID, region, and network name, and issue the gcloud bms networks describe command: gcloud bms networks describe NETWORK NAME --project= PROJECT ID --region= REGION The following output example shows the IP address range, network name, state, network type, VLAN ID, and virtual routing and forwarding (VRF) details. cidr: 192.168.1.0/24 name: projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME state: PROVISIONED type: CLIENT vlanId: '122' vrf: autonomousSystemNumber: '65500' juniperAlias: g00000-at-1111111-ic001 name: at-1111111-ic001 routeTarget: '282' state: PROVISIONED API Open a Cloud Shell terminal window in your Google Cloud console.
- NAME REGION VOLUME SIZE GB STATE at-11111111-vol001-lun000 REGION VOLUME NAME 200 READY To view details for a single LUN, enter your project ID, region, and LUN name, and issue the gcloud bms volumes luns describe command: gcloud bms volumes luns describe LUN NAME --project= PROJECT ID --region= REGION --volume= VOLUME NAME The following output example shows the LUN name and storage volume information, such as size, state, storage type, name, and ID. bootLun: true name: projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /luns/ LUN NAME sizeGb: '200' state: READY storageType: SSD storageVolume: VOLUME NAME wwid: 600a09803831434434244f774d616b94 API Open a Cloud Shell terminal window in your Google Cloud console.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID " When the operation completes, the done field appears as true in the output. { "name": "operations/ OPERATION ID ", "done": true } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Install Google Cloud Backup and DR The Backup and DR solution at minimum requires the following two major components for the solution to work: Backup and DR management console– An HTML 5 UI and API endpoint that enables you to create and manage backups from within the Google Cloud console.
- You can find your service account by viewing the Compute Engine VM running your backup/recovery appliance in your consumer/service project, and looking at the service account value listed in the API and identity management section.
- The generated ID , seen between the Project Number and the word dot in the API URL for the Backup and DR management console.
- Install the Backup and DR management console Enable the Backup and DR Service API if not already enabled.

