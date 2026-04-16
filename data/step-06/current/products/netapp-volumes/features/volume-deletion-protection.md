---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.662Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Volume deletion protection"
feature_slug: "volume-deletion-protection"
latest_feature_date: "2024-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
  - "https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering"
  - "https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool"
keywords:
  - "volume"
  - "deletion"
  - "protection"
  - "prevents"
  - "of"
  - "protected"
  - "volumes"
  - "to"
---

# Volume deletion protection

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

Volume deletion protection prevents deletion of protected volumes to safeguard VMware Engine datastores.

## Extended Definition

Volume deletion protection prevents deletion of protected volumes to safeguard VMware Engine datastores.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool)

## Supporting Pages

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When enabled, clients that don't support SMB3 encryption can't access the share. check check Hide SMB share: disable discoverability for the share using network browsing. check check Enable access-based enumeration: access-based enumeration hides files and folders that users don't have permissions to access. check check Enable continuous availability share support for SQL Server, FSLogix : enable this option only for SQL Server and FSLogix workloads that require continuous availability (CA). check Click Block volume from deletion when clients are connected in the Configuration for selected protocol(s) for volumes used as GCVE datastores.
- Create an iSCSI volume Create an iSCSI volume in the Flex service level of the Unified type pool: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = ISCSI \ --block-devices = name = LUN NAME ,host-groups = HOST GROUP NAME ,os-type = OS TYPE \ --snapshot-directory = false Replace the following information: VOLUME NAME : the name of the volume.
- Additional volumes generate within a few seconds to a few minutes. gcloud Create a volume Create a volume using the following command: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = PROTOCOLS \ --share-name = SHARE NAME Replace the following information: VOLUME NAME : the name of the volume.
- Volumes in Flex Unified and Flex File custom-performance pools offer the option to enable or disable the Hot tier bypass .

### Create a volume quickstart \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To confirm deletion, type the name of the volume.
- Home Documentation Storage NetApp Volumes Guides Send feedback Create a volume quickstart Stay organized with collections Save and categorize content based on your preferences.
- Create a volume Use the following instructions to create a volume: Go to the NetApp Volumes page in the Google Cloud console.
- Clean up Use the following instructions to delete a volume: Go to the NetApp Volumes page in the Google Cloud console.

### Manage auto-tiering \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud Edit the auto-tiering parameters using the following command: gcloud netapp volumes update VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --tiering-policy = tier-action = ENABLED OR DISABLED ,cooling-threshold-days = DAYS Replace the following information: VOLUME NAME : the name of the volume.
- Premium or Extreme type volumes The performance of an auto-tiered volume depends on the sizes of the hot and cold tiers.
- The storage pool billing is based on the total cold tier size of all volumes within that pool.
- Go to NetApp Volumes Click the name of the volume.

### "Create a storage pool quickstart \_|\_ NetApp Volumes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage NetApp Volumes Guides Send feedback Create a storage pool quickstart Stay organized with collections Save and categorize content based on your preferences.
- If you want to use SMB volumes, you need to select and define an Active Directory policy before you can proceed, see Create an Active Directory policy .
- Clean up Use the following instructions to delete a storage pool: Go to the NetApp Volumes page in the Google Cloud console.
- Considerations This quickstart guide assumes you intend to use NFS volumes to create a storage pool.

