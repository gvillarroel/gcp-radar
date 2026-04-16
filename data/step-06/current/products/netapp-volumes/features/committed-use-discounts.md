---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.655Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Committed use discounts"
feature_slug: "committed-use-discounts"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/resources"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering"
  - "https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients"
keywords:
  - "committed"
  - "use"
  - "discounts"
  - "netapp"
  - "volumes"
  - "supports"
---

# Committed use discounts

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

NetApp Volumes supports committed use discounts.

## Extended Definition

NetApp Volumes supports committed use discounts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/resources](https://docs.cloud.google.com/netapp/volumes/docs/resources)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)

## Supporting Pages

### Resources \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/resources](https://docs.cloud.google.com/netapp/volumes/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Committed use discounts Committed use discounts for NetApp Volumes.
- Home Documentation Storage NetApp Volumes Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Supported regions and locations Available regions and locations for NetApp Volumes.
- Service level agreement Details about the NetApp Volumes service level agreement.

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, clients that don't support SMB3 encryption can't access the share. check check Hide SMB share: disable discoverability for the share using network browsing. check check Enable access-based enumeration: access-based enumeration hides files and folders that users don't have permissions to access. check check Enable continuous availability share support for SQL Server, FSLogix : enable this option only for SQL Server and FSLogix workloads that require continuous availability (CA). check Click Block volume from deletion when clients are connected in the Configuration for selected protocol(s) for volumes used as GCVE datastores.
- Create an iSCSI volume Create an iSCSI volume in the Flex service level of the Unified type pool: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = ISCSI \ --block-devices = name = LUN NAME ,host-groups = HOST GROUP NAME ,os-type = OS TYPE \ --snapshot-directory = false Replace the following information: VOLUME NAME : the name of the volume.
- Additional volumes generate within a few seconds to a few minutes. gcloud Create a volume Create a volume using the following command: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = PROTOCOLS \ --share-name = SHARE NAME Replace the following information: VOLUME NAME : the name of the volume.
- Home Documentation Storage NetApp Volumes Guides Send feedback Create a volume Stay organized with collections Save and categorize content based on your preferences.

### Manage auto-tiering \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Review the Current hot tier data and Current cold tier data fields. gcloud Look up tiering statistics of a volume: gcloud netapp volumes describe VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --format = "table(capacityGib,hotTierSizeUsedGib,coldTierSizeGib)" Replace the following information: VOLUME NAME : the name of the volume.
- When auto-tiering is enabled for a volume, NetApp Volumes identifies data that is infrequently used and moves that cold data from the primary hot tier to a cheaper but slower cold tier .
- NetApp Volumes automatically moves infrequently used data to a slower, cost-efficient storage tier.
- Click Save . gcloud Edit the auto-tiering parameters using the following command: gcloud netapp volumes update VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --tiering-policy = tier-action = ENABLED OR DISABLED ,cooling-threshold-days = DAYS Replace the following information: VOLUME NAME : the name of the volume.

### Connect NFS clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- NetApp Volumes supports the use of numeric IDs.
- The second and third rules use the default comma as separator. gcloud netapp volumes update my volume --location=us-east4 \ --export-policy=^:^access-type=READ WRITE:allowed-clients="10.10.5.3,10.10.5.9":nfsv3=true:nfsv4=true:has-root-access=true \ --export-policy=access-type=READ WRITE,allowed-clients=10.0.5.0/24,nfsv3=true,has-root-access=false \ --export-policy=access-type=READ ONLY,allowed-clients=10.0.6.0/24,nfsv3=true,has-root-access=false Example: Using the squash-mode as a parameter The following example uses the alternative squash-mode parameter to create a NO ROOT SQUASH rule for administrator hosts and an ALL SQUASH rule for a CIDR range. gcloud netapp volumes update my volume --location=us-east4 \ --export-policy=^:^allowed-clients="10.10.5.3,10.10.5.9":nfsv3=true:access-type=READ WRITE:squash-mode=NO ROOT SQUASH \ --export-policy=allowed-clients=10.0.2.0/24,nfsv3=true,access-type=READ WRITE,squash-mode=ALL SQUASH,anon-uid=2000 For more information about additional optional flags, see Google Cloud SDK for volumes export policy .
- Manage export policies Use the following instructions to update a volume's export policy using the Google Cloud CLI. gcloud Update a volume with one export policy Update a volume with one export policy rule: gcloud netapp volumes update VOLUME ID \ --project = PROJECT ID \ --location = LOCATION \ --export-policy = access-type = ACCESS TYPE ,allowed-clients = ALLOWED CLIENTS IP ADDRESSES ,has-root-access = TRUE OR FALSE ,nfsv3 = NFSV3 ,nfsv4 = NFSV4 Replace the following information: VOLUME ID : the ID of the volume.
- NFSv3 only : if your application doesn't use locks or you didn't configure your clients to enable NSM communication, we recommend that you add the nolock mount option. gcloud Look up the mount instructions for a volume: gcloud netapp volumes describe VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --format = "value(mountOptions.instructions)" Replace the following information: VOLUME NAME : the name of the volume.

