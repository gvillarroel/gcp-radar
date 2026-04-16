---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.613Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Block storage with iSCSI"
feature_slug: "block-storage-with-iscsi"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/overview"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
  - "https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients"
keywords:
  - "block"
  - "storage"
  - "with"
  - "iscsi"
  - "netapp"
  - "volumes"
  - "supports"
  - "over"
---

# Block storage with iSCSI

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

NetApp Volumes supports block storage volumes over the iSCSI protocol for the Flex Unified service level; NetApp Volumes supports block storage volumes over the iSCSI protocol for the Flex Unified service level.

## Extended Definition

NetApp Volumes supports block storage volumes over the iSCSI protocol for the Flex Unified service level; NetApp Volumes supports block storage volumes over the iSCSI protocol for the Flex Unified service level.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)

## Supporting Pages

### Google Cloud NetApp Volumes overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage NetApp Volumes Guides Send feedback Google Cloud NetApp Volumes overview Stay organized with collections Save and categorize content based on your preferences.
- The iSCSI Linux and Windows Compute Engine VMs can consume iSCSI volumes as raw block devices, or they can choose to create the supported Linux or Windows file systems and configure applications that support block storage.
- Service administrators create and manage these remote file systems as volumes and share them with NFS and SMB clients over a network, or create iSCSI volumes and attach them to Linux and Windows iSCSI clients.
- Tools to use NetApp Volumes You can use Google Cloud NetApp Volumes using the following tools: Google Cloud SDK : the Google Cloud command line interface lets you interact with NetApp Volumes through a terminal Google Cloud console : the Google Cloud console provides a visual interface that gives you a holistic view of your applications and projects Terraform Google Cloud Platform Provider : NetApp Volumes resources are part of the Google Terraform provider .

### Manage auto-tiering \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage NetApp Volumes Guides Send feedback Manage auto-tiering Stay organized with collections Save and categorize content based on your preferences.
- On storage pools with auto-tiering enabled, the cold block tracking will occur on existing volumes that don't have auto-tiering enabled.
- Once auto-tiering is enabled on a storage pool, you have the option to create new volumes with or without auto-tiering, though it is enabled by default.
- Enable auto-tiering For volumes in storage pools with auto-tiering enabled, an Auto-tiering tab is displayed in the volume level details page.

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an iSCSI volume Create an iSCSI volume in the Flex service level of the Unified type pool: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = ISCSI \ --block-devices = name = LUN NAME ,host-groups = HOST GROUP NAME ,os-type = OS TYPE \ --snapshot-directory = false Replace the following information: VOLUME NAME : the name of the volume.
- Additional volumes generate within a few seconds to a few minutes. gcloud Create a volume Create a volume using the following command: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = PROTOCOLS \ --share-name = SHARE NAME Replace the following information: VOLUME NAME : the name of the volume.
- Home Documentation Storage NetApp Volumes Guides Send feedback Create a volume Stay organized with collections Save and categorize content based on your preferences.
- When enabled, clients that don't support SMB3 encryption can't access the share. check check Hide SMB share: disable discoverability for the share using network browsing. check check Enable access-based enumeration: access-based enumeration hides files and folders that users don't have permissions to access. check check Enable continuous availability share support for SQL Server, FSLogix : enable this option only for SQL Server and FSLogix workloads that require continuous availability (CA). check Click Block volume from deletion when clients are connected in the Configuration for selected protocol(s) for volumes used as GCVE datastores.

### Connect NFS clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect Linux to LDAP If you are using NFSv3 extended groups or NFSv4.1 with security identifiers, you configured NetApp Volumes to use your Active Directory as LDAP server using an Active Directory attached to a storage pool.
- Home Documentation Storage NetApp Volumes Guides Send feedback Connect NFS clients Stay organized with collections Save and categorize content based on your preferences.
- Manage export policies Use the following instructions to update a volume's export policy using the Google Cloud CLI. gcloud Update a volume with one export policy Update a volume with one export policy rule: gcloud netapp volumes update VOLUME ID \ --project = PROJECT ID \ --location = LOCATION \ --export-policy = access-type = ACCESS TYPE ,allowed-clients = ALLOWED CLIENTS IP ADDRESSES ,has-root-access = TRUE OR FALSE ,nfsv3 = NFSV3 ,nfsv4 = NFSV4 Replace the following information: VOLUME ID : the ID of the volume.
- On NetApp Volumes, the LDAP must provide mapping information, with Active Directory being the only supported RFC2307bis compatible LDAP server.

