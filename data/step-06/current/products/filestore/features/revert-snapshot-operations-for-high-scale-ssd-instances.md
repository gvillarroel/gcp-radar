---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.659Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Revert snapshot operations for high-scale SSD instances"
feature_slug: "revert-snapshot-operations-for-high-scale-ssd-instances"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/deleting-instances"
  - "https://docs.cloud.google.com/filestore/docs/monitoring-instances"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
keywords:
  - "revert"
  - "snapshot"
  - "operations"
  - "for"
  - "high"
  - "scale"
  - "ssd"
  - "instances"
---

# Revert snapshot operations for high-scale SSD instances

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

High-scale SSD instances support revert snapshot operations in preview.

## Extended Definition

High-scale SSD instances support revert snapshot operations in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/deleting-instances](https://docs.cloud.google.com/filestore/docs/deleting-instances)
- [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)

## Supporting Pages

### Delete instances \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/deleting-instances](https://docs.cloud.google.com/filestore/docs/deleting-instances)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Zonal with a higher capacity range (previously high scale SSD) tier instances can take up to 10 minutes to delete, depending on the instance size.
- Delete instances that have snapshots If you want to delete a zonal, regional, or enterprise instance that contains snapshots, you must complete either of the following tasks: Delete the instance's snapshots before deleting the instance.
- The Google Cloud console allows for the deletion of instances containing snapshots and automatically deletes the snapshots.
- Click Delete . gcloud Before you begin To use the gcloud CLI, you must either install the gcloud CLI or use the Cloud Shell that's built into the Google Cloud console: Go to the Google Cloud console You can delete a Filestore instance by running the instances delete command: gcloud filestore instances delete instance-id \ --project=" project-id " \ --zone= zone --force where: instance-id is the instance ID of the Filestore instance you want to delete. project-id is the project ID of the Google Cloud project that contains the Filestore instance.

### Monitoring instances and quota \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- If the Filestore instance caches the data, some write operations are not reflected as disk writes. ✓ ✓ Metadata operations count Number of disk metadata operations. ✓ Free bytes Number of free disk bytes. ✓ ✓ Free disk space percent Percentage of free disk bytes. ✓ ✓ Free raw capacity percent Free raw capacity as a percentage of total space. ✓ Procedure call count Returns the same information as the nfsstat -s command. ✓ Snapshots used bytes The amount of space used for storing snapshots, measured in bytes. ✓ Time (in milliseconds) spent on read operations Time spent on disk reads. ✓ Time (in milliseconds) spent on write operations Time spent on disk writes. ✓ Used bytes Number of used disk bytes. ✓ ✓ Used space percent Percentage of used disk bytes. ✓ ✓ Memory-cached operations only occur in basic tier instances.
- Set the following specifications: Field Configuration Alert trigger Any time series violates Threshold position Below threshold Threshold value Enter the lowest acceptable free disk space percentage for each of your Filestore instances.
- If you want to measure low disk space for zonal, regional, or enterprise instances, use the following steps to set up two separate alerts using free disk space percent and free raw capacity percent metrics.
- Low backups quota If you are scheduling or automating backups creation for your Filestore instances, you should set up alerts for when you're running low on backups quota.

### "REST Resource: projects.locations.instances \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates an instance. delete Deletes an instance. get Gets the details of a specific instance. list Lists all instances in a project for either a specified location or for all locations. patch Updates the settings of a specific instance. promoteReplica Promote the standby instance (replica). restore Restores an existing instance's file share from a backup. revert Revert an existing instance's file system to a specified snapshot.
- When specified as a direct CIDR value, it must be a /29 CIDR block for Basic tier, a /24 CIDR block for High Scale tier, or a /26 CIDR block for Enterprise tier in one of the internal IP address ranges that identifies the range of IP addresses reserved for this instance.
- The resource name of the instance, in the format projects/{project}/locations/{location}/instances/{instance} . description string The description of the instance (2048 characters or less). state enum ( State ) Output only.
- The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network. ipAddresses[] string Output only.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Scales up or down in increments of 256 GiB Regional (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Scales up or down in increments of 256 GiB Performance Basic HDD : Static Basic SSD : Performance step at 10 TiB Configurable Configurable Scales linearly with capacity Protocol NFSv3 NFSv3, NFSv4.1 NFSv3, NFSv4.1 NFSv3, NFSv4.1 Create operations for zonal, regional, and enterprise instances can take anywhere between 15 minutes and one hour to complete, depending on instance size.
- If you need to create an instance using an enterprise or high scale SSD tier, you must run your operations directly through the Filestore API or by using gcloud .
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.

