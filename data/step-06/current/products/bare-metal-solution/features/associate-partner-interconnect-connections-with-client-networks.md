---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.437Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Associate Partner Interconnect connections with client networks"
feature_slug: "associate-partner-interconnect-connections-with-client-networks"
latest_feature_date: "2022-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-setup"
keywords:
  - "connections"
  - "associate"
  - "adding"
  - "client"
  - "interconnect"
  - "partner"
  - "enables"
  - "networks"
---

# Associate Partner Interconnect connections with client networks

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Enables adding existing Partner Interconnect connections to a client network in intake workflows.

## Extended Definition

Enables adding existing Partner Interconnect connections to a client network in intake workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)

## Supporting Pages

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When your order an advanced networking configuration, the following options become available for more complex network deployments: Multiple VLANs Multiple VLAN attachments Multiple VPC connections Maximum transmission unit Network templates Multiple VLANs Instead of a single client network and single private network for each bonded interface, you can add multiple client networks and private networks on server bond interfaces.
- We recommend using the following Bare Metal Solution standard networking configuration for small scale deployments: The standard networking configuration consist of the following: A single client network connects Bare Metal Solution servers to the Google Cloud using a single Partner Interconnect VLAN attachment pair.
- A single Partner Interconnect VLAN attachment pair connects your Virtual Private Cloud to the client network in your Bare Metal Solution environment You create a Cloud Router before provisioning VLAN attachment pair.
- The diagram shows three different traffic flows: Green flow On-premises network -> Cloud Interconnect ( or cloud VPN) -> Partner Interconnect to BMS -> BMS server Red flow BMS server -> Partner Interconnect -> NATVM -> Internet Blue flow Remote or Home offices -> Public Internet -> JumpVMs -> BMS server Partner Interconnect for Bare Metal Solution The connection between your Google Cloud environment and your Bare Metal Solution environment uses the Partner Interconnect framework.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "nfsKey1": "some value", "key2": "another value", }, "requestedSizeGib": " SIZE GIB ", "storageType": " STORAGE TYPE ", "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because creating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ?updateMask=allowed clients%2Clabels" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "newKey": "newVal", }, "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NFS VOLUME NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because updating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- You can use either the NFS share name or ID as the NFS SHARE variable: gcloud bms nfs-shares describe NFS SHARE --project= PROJECT ID --region= REGION The output provides details about the allowed clients, NFS settings, the NFS server and its state, and the storage volume. allowedClients: – allowDev: true allowedClientsCidr: 192.168.1.1/32 mountPermissions: READ WRITE network: projects/ PROJECT ID /locations/ REGION /networks/at-1111111-vlan001 noRootSquash: true shareIp: 192.168.1.240 name: projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS SHARE nfsShareId: at-2222222-nfs001 state: PROVISIONED volume: projects/ PROJECT ID /locations/ REGION /volumes/at-2222222-nfs001-vol000 API To view the status of your NFS file storage within theBare Metal Solution environment, including allowed clients and NFS properties, enter your project ID and region into the following curl command.

### "Quickstart: Set up Google Cloud to work with your Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- They are both in the us-central1 region. gcloud compute interconnects attachments partner create my-attachment \ --region us-central1 \ --router my-router-1 \ --edge-availability-domain availability-domain-1 \ --admin-enabled gcloud compute interconnects attachments partner create my-attachment \ --region us-central1 \ --router my-router-2 \ --edge-availability-domain availability-domain-2 \ --admin-enabled Run the gcloud compute interconnects attachments describe command to view the details of the VLAN attachment. gcloud compute interconnects attachments describe my-attachment \ --region us-central1 adminEnabled: false edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 creationTimestamp: '2017-12-01T08:29:09.886-08:00' id: '7976913826166357434' kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: my-attachment region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/my-router selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/my-attachment state: PENDING PARTNER type: PARTNER The state of the VLAN attachment is PENDING PARTNER until Google Cloud completes your VLAN attachment configuration.
- DESCRIPTION : a description of the route PRIORITY : the priority of the policy-based route compared to other policy-based routes REGION : the region of the VLAN attachment Create a policy-based route to skip the internet policy-based route for on-premises subnets and local subnets. gcloud network - connectivity policy - based - routes create ROUTE NAME \ -- source - range = SOURCE RANGE / 32 \ -- destination - range = DESTINATION RANGE \ -- ip - protocol = ALL \ -- network = "projects/ PROJECT ID /global/networks/ VPC NAME " \ -- next - hop - other - routes = "DEFAULT ROUTING" \ -- description = " DESCRIPTION " \ -- priority = PRIORITY \ -- interconnect - attachment - region = REGION Replace the following: ROUTE NAME : the name of the policy-based route SOURCE RANGE : the source IP CIDR range.
- Also, add the --admin-enabled flag to pre-activate the attachments and send traffic immediately after Google Cloud completes the Bare Metal Solution configuration. gcloud compute interconnects attachments partner create first-attachment-name \ --region region \ --router first-router-name \ --edge-availability-domain availability-domain-1 \ --admin-enabled gcloud compute interconnects attachments partner create second-attachment-name \ --region region \ --router second-router-name \ --edge-availability-domain availability-domain-2 \ --admin-enabled Google Cloud automatically adds an interface and a BGP peer on the Cloud Router.
- Create a policy-based route for the internet. gcloud network - connectivity policy - based - routes create ROUTE NAME \ -- source - range = SOURCE RANGE \ -- destination - range = 0.0.0.0 / 0 \ -- ip - protocol = ALL \ -- network = "projects/ PROJECT ID /global/networks/ NETWORK " \ -- next - hop - ilb - ip = NEXT HOP \ -- description = " DESCRIPTION " \ -- priority = PRIORITY \ -- interconnect - attachment - region = REGION Replace the following: ROUTE NAME : the name of the policy-based route SOURCE RANGE : the source IP CIDR range.

