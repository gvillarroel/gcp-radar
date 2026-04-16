---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.663Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Overlapping permissions for High Scale and Enterprise tier instances"
feature_slug: "overlapping-permissions-for-high-scale-and-enterprise-tier-instances"
latest_feature_date: "2023-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/mounting-fileshares"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier"
  - "https://docs.cloud.google.com/filestore/docs/overview"
keywords:
  - "overlapping"
  - "permissions"
  - "for"
  - "high"
  - "scale"
  - "and"
  - "enterprise"
  - "tier"
---

# Overlapping permissions for High Scale and Enterprise tier instances

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

High Scale and Enterprise tier instances support overlapping permissions.

## Extended Definition

High Scale and Enterprise tier instances support overlapping permissions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)

## Supporting Pages

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- Scales up or down in increments of 256 GiB Regional (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Scales up or down in increments of 256 GiB Performance Basic HDD : Static Basic SSD : Performance step at 10 TiB Configurable Configurable Scales linearly with capacity Protocol NFSv3 NFSv3, NFSv4.1 NFSv3, NFSv4.1 NFSv3, NFSv4.1 Create operations for zonal, regional, and enterprise instances can take anywhere between 15 minutes and one hour to complete, depending on instance size.
- You can set the default location by running the config set filestore/zone command: gcloud config set filestore/zone zone For the regional or enterprise tier, use the config set filestore/region command: gcloud config set filestore/region region DESCRIPTION A description of the Filestore instance.
- Regional and zonal tiers For regional and zonal tiers you can set an IOPS per TiB ratio which allows instance IOPS to scale with capacity, or a constant IOPS value that doesn't scale with capacity but can be adjusted at any time if the capacity changes.

### "Mounting file shares on Compute Engine clients \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect . ip-address is the IP address for the Filestore instance. file-share is the name of the file share on the instance.
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- Install NFS: Debian/Ubuntu Use the following commands to install NFS on Debian or Ubuntu. sudo apt-get -y update && sudo apt-get install nfs-common RHEL/CentOS Use the following commands to install NFS on Red Hat Enterprise Linux or CentOS. sudo yum update && sudo yum install nfs-utils SUSE Use the following commands to install NFS on SUSE. sudo zypper update && sudo zypper -n install nfs-client Make a local directory to map to the Filestore file share: sudo mkdir -p mount-point-directory where mount-point-directory is the directory to create, for example /mnt/filedir .

### Tier \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HIGH SCALE SSD HIGH SCALE instances offer expanded capacity and performance scaling capabilities.
- ENTERPRISE ENTERPRISE instances offer the features and availability needed for mission-critical workloads.
- BASIC HDD is an alias for STANDARD Tier, offering economical performance backed by HDD.
- BASIC SSD is an alias for PREMIUM Tier, and offers improved performance backed by SSD.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Each service tier is tailored for specific use cases: Zonal tier: Optimized for HPC, batch compute, media rendering, and localized workloads requiring high throughput and low latency.
- Multishares for GKE (Enterprise): Optimized for GKE workloads that require high availability and multishares.
- Instance replication is supported for the Zonal, Regional, and Enterprise tiers.
- Filestore supports the following file system protocols: Protocol Supported service tiers Highlights NFSv3 All service tiers Supports bidirectional communication between the client and server.

