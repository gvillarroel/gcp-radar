---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.663Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "High Scale SSD tier"
feature_slug: "high-scale-ssd-tier"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier"
  - "https://docs.cloud.google.com/filestore/docs/mounting-fileshares"
  - "https://docs.cloud.google.com/filestore/docs/deleting-instances"
keywords:
  - "high"
  - "scale"
  - "ssd"
  - "tier"
  - "filestore"
  - "is"
  - "generally"
  - "available"
---

# High Scale SSD tier

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore High Scale SSD tier is generally available.

## Extended Definition

Filestore High Scale SSD tier is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- [https://docs.cloud.google.com/filestore/docs/deleting-instances](https://docs.cloud.google.com/filestore/docs/deleting-instances)

## Supporting Pages

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- If you need to create an instance using an enterprise or high scale SSD tier, you must run your operations directly through the Filestore API or by using gcloud .
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- Alternatively, Filestore multishares for GKE , available for enterprise-tier instances only, offers access to multiple shares on a single instance.

### Tier \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/Tier)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HIGH SCALE SSD HIGH SCALE instances offer expanded capacity and performance scaling capabilities.
- BASIC SSD is an alias for PREMIUM Tier, and offers improved performance backed by SSD.
- BASIC SSD is the preferred term for this tier.
- Home Documentation Storage Filestore Reference Send feedback Tier Stay organized with collections Save and categorize content based on your preferences.

### "Mounting file shares on Compute Engine clients \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect . ip-address is the IP address for the Filestore instance. file-share is the name of the file share on the instance.
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- Install NFS by running the following commands: Debian/Ubuntu Use the following commands to install NFS on Debian or Ubuntu. sudo apt-get -y update && sudo apt-get install nfs-common RHEL/CentOS Use the following commands to install NFS on Red Hat Enterprise Linux or CentOS. sudo yum update && sudo yum install nfs-utils SUSE Use the following commands to install NFS on SUSE. sudo zypper update && sudo zypper -n install nfs-client From the terminal window of the client VM, install autofs : Debian/Ubuntu sudo apt-get install autofs RHEL/CentOS sudo yum install autofs SUSE sudo zypper -n install autofs Configure autofs to dynamically mount the file share to the client VM Enable autofs : sudo systemctl enable --now autofs Make a local directory to map to the Filestore file share: sudo mkdir -p mount-point-directory where mount-point-directory is the directory to create.

### Delete instances \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/deleting-instances](https://docs.cloud.google.com/filestore/docs/deleting-instances)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Zonal with a higher capacity range (previously high scale SSD) tier instances can take up to 10 minutes to delete, depending on the instance size.
- Click Delete . gcloud Before you begin To use the gcloud CLI, you must either install the gcloud CLI or use the Cloud Shell that's built into the Google Cloud console: Go to the Google Cloud console You can delete a Filestore instance by running the instances delete command: gcloud filestore instances delete instance-id \ --project=" project-id " \ --zone= zone --force where: instance-id is the instance ID of the Filestore instance you want to delete. project-id is the project ID of the Google Cloud project that contains the Filestore instance.
- Use cURL to call the Filestore API : curl -s \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --request DELETE "https://file.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /instances/ INSTANCE NAME " Where: PROJECT is the name of the project where your instance is located.
- You can set the default project by running the config set project command: gcloud config set project project-id zone is the zone where the Filestore instance resides.

