---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.648Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Block volume deletion while clients are connected"
feature_slug: "block-volume-deletion-while-clients-are-connected"
latest_feature_date: "2024-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
  - "https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients"
  - "https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations"
  - "https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients"
keywords:
  - "block"
  - "volume"
  - "deletion"
  - "while"
  - "clients"
  - "are"
  - "connected"
  - "this"
---

# Block volume deletion while clients are connected

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

This option prevents deleting a volume while clients are connected or it is mounted as a GCVE datastore.

## Extended Definition

This option prevents deleting a volume while clients are connected or it is mounted as a GCVE datastore.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients)

## Supporting Pages

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, clients that don't support SMB3 encryption can't access the share. check check Hide SMB share: disable discoverability for the share using network browsing. check check Enable access-based enumeration: access-based enumeration hides files and folders that users don't have permissions to access. check check Enable continuous availability share support for SQL Server, FSLogix : enable this option only for SQL Server and FSLogix workloads that require continuous availability (CA). check Click Block volume from deletion when clients are connected in the Configuration for selected protocol(s) for volumes used as GCVE datastores.
- Before you begin Review the following prerequisites before you create a volume: You must have an existing storage pool connected to the network you intend to share the volumes to.
- Create an iSCSI volume Create an iSCSI volume in the Flex service level of the Unified type pool: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = ISCSI \ --block-devices = name = LUN NAME ,host-groups = HOST GROUP NAME ,os-type = OS TYPE \ --snapshot-directory = false Replace the following information: VOLUME NAME : the name of the volume.
- Additional volumes generate within a few seconds to a few minutes. gcloud Create a volume Create a volume using the following command: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = PROTOCOLS \ --share-name = SHARE NAME Replace the following information: VOLUME NAME : the name of the volume.

### Connect NFS clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For communication between Google Compute Engine and NetApp Volumes, these ports aren't blocked by default.
- The second and third rules use the default comma as separator. gcloud netapp volumes update my volume --location=us-east4 \ --export-policy=^:^access-type=READ WRITE:allowed-clients="10.10.5.3,10.10.5.9":nfsv3=true:nfsv4=true:has-root-access=true \ --export-policy=access-type=READ WRITE,allowed-clients=10.0.5.0/24,nfsv3=true,has-root-access=false \ --export-policy=access-type=READ ONLY,allowed-clients=10.0.6.0/24,nfsv3=true,has-root-access=false Example: Using the squash-mode as a parameter The following example uses the alternative squash-mode parameter to create a NO ROOT SQUASH rule for administrator hosts and an ALL SQUASH rule for a CIDR range. gcloud netapp volumes update my volume --location=us-east4 \ --export-policy=^:^allowed-clients="10.10.5.3,10.10.5.9":nfsv3=true:access-type=READ WRITE:squash-mode=NO ROOT SQUASH \ --export-policy=allowed-clients=10.0.2.0/24,nfsv3=true,access-type=READ WRITE,squash-mode=ALL SQUASH,anon-uid=2000 For more information about additional optional flags, see Google Cloud SDK for volumes export policy .
- Manage export policies Use the following instructions to update a volume's export policy using the Google Cloud CLI. gcloud Update a volume with one export policy Update a volume with one export policy rule: gcloud netapp volumes update VOLUME ID \ --project = PROJECT ID \ --location = LOCATION \ --export-policy = access-type = ACCESS TYPE ,allowed-clients = ALLOWED CLIENTS IP ADDRESSES ,has-root-access = TRUE OR FALSE ,nfsv3 = NFSV3 ,nfsv4 = NFSV4 Replace the following information: VOLUME ID : the ID of the volume.
- Install NFS client tools based on your Linux distribution type to prepare your client: RedHat Run the following command: sudo yum i nstall - y nfs - u t ils SuSe Run the following command: sudo yum i nstall - y nfs - u t ils Debian Run the following command: sudo ap t - ge t i nstall nfs - commo n Ubuntu Run the following command: sudo ap t - ge t i nstall nfs - commo n Volume access control using export policies Volume access control in NFSv3 and NFSv4.1 is based on the client's IP address.

### Known issues and limitations \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity issues Connections to on-premise domain controllers fail due to the following limitations: VPC peering : NetApp Volumes can only reach domain controllers that are on the storage pool's Virtual Private Cloud (VPC) or are connected to it by VPN.
- While FlexCache volumes are displayed in the Google Cloud console after creation, they can be viewed or deleted, and attempts to update them using the Google Cloud console might fail.
- To resolve this issue, contact Google Cloud Customer Care and request a reset of your specific projects or regions to exclusively use NetApp Volumes resources.
- Affected volumes This issue applies to volumes that meet all of the following criteria: Volumes that are in an active, mirrored volume replication.

### Connect SMB clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For communication between Google Compute Engine and NetApp Volumes, these ports aren't blocked by default.
- If you use a firewall, you must enable access to the following ports for the full NetApp Volume PSA CIDR or the following individual volume IP addresses: 445 TCP SMB2/3 135 TCP msrpc and 40001 TCP SMB CA : Used only for SMB 3.x continuously available shares.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ONTAP-mode Use the following steps to identify your volume's hostname or IP address, and share name: Look up the computer account name you used when you created the SMB server.

