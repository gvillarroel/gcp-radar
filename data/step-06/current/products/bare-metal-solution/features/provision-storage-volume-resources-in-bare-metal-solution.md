---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.428Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Provision storage volume resources in Bare Metal Solution"
feature_slug: "provision-storage-volume-resources-in-bare-metal-solution"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
keywords:
  - "provision"
  - "resources"
  - "volume"
  - "storage"
  - "adds"
---

# Provision storage volume resources in Bare Metal Solution

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds support for provisioning storage volume resources in Bare Metal Solution.

## Extended Definition

Adds support for provisioning storage volume resources in Bare Metal Solution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- Provision storage volume resources in your Bare Metal Solution environment After ordering storage resources for your Bare Metal Solution environment, you can provision the resources once they are available.
- You can use either the NFS share name or ID as the NFS SHARE variable: gcloud bms nfs-shares describe NFS SHARE --project= PROJECT ID --region= REGION The output provides details about the allowed clients, NFS settings, the NFS server and its state, and the storage volume. allowedClients: – allowDev: true allowedClientsCidr: 192.168.1.1/32 mountPermissions: READ WRITE network: projects/ PROJECT ID /locations/ REGION /networks/at-1111111-vlan001 noRootSquash: true shareIp: 192.168.1.240 name: projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS SHARE nfsShareId: at-2222222-nfs001 state: PROVISIONED volume: projects/ PROJECT ID /locations/ REGION /volumes/at-2222222-nfs001-vol000 API To view the status of your NFS file storage within theBare Metal Solution environment, including allowed clients and NFS properties, enter your project ID and region into the following curl command.
- Manage NFS file storage You can manage your NFS file storage in the following ways: View NFS volumes Organize NFS volumes by using labels Rename an NFS volume Create an NFS volume Update an NFS volume Delete an NFS volume View NFS volumes After you order and provision NFS for Bare Metal Solution, you can view the status of your NFS file storage and confirm that Google Cloud implemented your configured settings as expected.

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- You can use procurements to order the following Bare Metal Solution resources: Servers ( available server configurations ) Storage ( available storage choices ) Partner Interconnect bandwidth To procure any other Bare Metal Solution resource, contact Google Cloud sales .
- The following pages show you the pods that contain your existing resources: Servers Networks Volumes NFS Shares If you're unsure about which pod to select, contact Google Cloud Sales .
- After you've executed a simplified, one-time Bare Metal Solution Order Form, you can order your Bare Metal Solution resources online by creating procurements through the Google Cloud console.

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: You can provision up to 10 Fibre Channel storage volumes and up to 10 NFS storage volumes in a single request.
- Bare Metal Solution lets you provision up to 10 Fiber Channel storage volumes in a single configuration request.
- You can provision either one storage volume or multiple storage volumes in a single configuration request.
- Unlike NFS storage volumes, you can provision Fibre Channel storage volumes without provisioning a server.

