---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.667Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore High Scale SSD tier"
feature_slug: "filestore-high-scale-ssd-tier"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier"
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/mounting-fileshares"
keywords:
  - "filestore"
  - "high"
  - "scale"
  - "ssd"
  - "tier"
  - "the"
  - "provides"
  - "higher"
---

# Filestore High Scale SSD tier

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

The High Scale SSD tier provides higher performance and supports scaling capacity from 60 TB to 320 TB.

## Extended Definition

The High Scale SSD tier provides higher performance and supports scaling capacity from 60 TB to 320 TB.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)

## Supporting Pages

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- If you need to create an instance using an enterprise or high scale SSD tier, you must run your operations directly through the Filestore API or by using gcloud .
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### Tier \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HIGH SCALE SSD HIGH SCALE instances offer expanded capacity and performance scaling capabilities.
- BASIC SSD is the preferred term for this tier.
- Home Documentation Storage Filestore Reference Send feedback Tier Stay organized with collections Save and categorize content based on your preferences.
- BASIC SSD is an alias for PREMIUM Tier, and offers improved performance backed by SSD.

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Filestore uses the NFSv3 file system protocol on the Filestore instance by default and supports any NFSv3-compatible client.
- Reconnect Filestore single share volumes If you are using Filestore with the basic HDD, basic SSD, or enterprise (single share) tier, you can follow these instructions to reconnect your existing Filestore instance to your GKE workloads.
- To learn more, see Filestore multishares for Google Kubernetes Engine . standard-rwx , using the Filestore basic HDD service tier . premium-rwx , using the Filestore basic SSD service tier .
- Any supported Filestore tier can be specified in the tier parameter (for example, BASIC HDD , BASIC SSD , ZONAL , or ENTERPRISE ).

### "Mounting file shares on Compute Engine clients \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect . ip-address is the IP address for the Filestore instance. file-share is the name of the file share on the instance.
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- Install NFS by running the following commands: Debian/Ubuntu Use the following commands to install NFS on Debian or Ubuntu. sudo apt-get -y update && sudo apt-get install nfs-common RHEL/CentOS Use the following commands to install NFS on Red Hat Enterprise Linux or CentOS. sudo yum update && sudo yum install nfs-utils SUSE Use the following commands to install NFS on SUSE. sudo zypper update && sudo zypper -n install nfs-client From the terminal window of the client VM, install autofs : Debian/Ubuntu sudo apt-get install autofs RHEL/CentOS sudo yum install autofs SUSE sudo zypper -n install autofs Configure autofs to dynamically mount the file share to the client VM Enable autofs : sudo systemctl enable --now autofs Make a local directory to map to the Filestore file share: sudo mkdir -p mount-point-directory where mount-point-directory is the directory to create.

