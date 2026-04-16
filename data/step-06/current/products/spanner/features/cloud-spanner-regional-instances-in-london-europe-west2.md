---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.350Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner regional instances in London (europe-west2)"
feature_slug: "cloud-spanner-regional-instances-in-london-europe-west2"
latest_feature_date: "2019-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
keywords:
  - "london"
  - "west2"
  - "instances"
  - "regional"
  - "europe"
---

# Cloud Spanner regional instances in London (europe-west2)

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner regional instances can now be created in the London (europe-west2) region.

## Extended Definition

Spanner regional instances can now be created in the London (europe-west2) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- In addition, if a database is protected by multiple regional keys and all keys are disabled or destroyed, then Spanner immediately starts to make your database inaccessible.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- For regional instances , the backup is stored in each of the three read-write zones.
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.
- Each backup resource is organized under the same instance as its source database in the resource hierarchy and has a resource path that uses the following format: projects/ PROJECT ID /instances/ INSTANCE ID /backups/ BACKUP NAME Replace the following: PROJECT ID : the project ID.

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.
- As detailed in Quotas & limits , to provide high availability and low latency when accessing a database, Spanner uses the compute capacity of an instance as a basis for determining storage limits, using the following guidelines: For instances smaller than 1 node (1000 PUs), Spanner allots 1024.0 GiB of data for every 100 PUs in the database.
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.

