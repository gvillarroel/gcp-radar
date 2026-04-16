---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.655Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Basic HDD extended range tier"
feature_slug: "basic-hdd-extended-range-tier"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier"
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
keywords:
  - "basic"
  - "hdd"
  - "extended"
  - "range"
  - "tier"
  - "the"
  - "is"
  - "available"
---

# Basic HDD extended range tier

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

The basic HDD extended range tier is available to GKE customers through the Filestore CSI driver.

## Extended Definition

The basic HDD extended range tier is available to GKE customers through the Filestore CSI driver.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)

## Supporting Pages

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Filestore uses the NFSv3 file system protocol on the Filestore instance by default and supports any NFSv3-compatible client.
- Reconnect Filestore single share volumes If you are using Filestore with the basic HDD, basic SSD, or enterprise (single share) tier, you can follow these instructions to reconnect your existing Filestore instance to your GKE workloads.
- To learn more, see Filestore multishares for Google Kubernetes Engine . standard-rwx , using the Filestore basic HDD service tier . premium-rwx , using the Filestore basic SSD service tier .
- The minimum instance size is as at least 100 GiB for Basic HDD tier and at least 1 TiB for Zonal, Regional, and Enterprise service tiers.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- For basic HDD tiers the performance limits change depending if the capacity falls within the range of 1 TiB to 10 TiB or from 10 TiB to 63.9 TiB.
- Basic SSD and basic HDD tiers For basic SSD tiers the number of IOPS is constant and doesn't change when you change capacity settings.

### Tier \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- Source ID: `site-api-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BASIC HDD is the preferred term for this tier.
- BASIC HDD is an alias for STANDARD Tier, offering economical performance backed by HDD.
- BASIC SSD is the preferred term for this tier.
- BASIC SSD is an alias for PREMIUM Tier, and offers improved performance backed by SSD.

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Only the following Filestore service tiers are supported: Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Use control plane versions 1.17 or later.
- You can restore a backup of a basic instance to the source instance of the same service tier, an already existing instance, or a new instance.
- If you choose a new instance, you can choose between basic HDD and basic SSD instance regardless of the source instance tier.
- For example, Filestore snapshots must be greater than or equal to 1 TiB in size for the basic HDD tier.

