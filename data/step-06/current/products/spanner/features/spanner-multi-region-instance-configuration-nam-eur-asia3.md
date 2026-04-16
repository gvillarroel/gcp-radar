---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.306Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner multi-region instance configuration nam-eur-asia3"
feature_slug: "spanner-multi-region-instance-configuration-nam-eur-asia3"
latest_feature_date: "2022-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
keywords:
  - "asia3"
  - "configuration"
  - "instance"
  - "multi"
  - "region"
---

# Spanner multi-region instance configuration nam-eur-asia3

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports a new three-continent, nine-replica multi-region instance configuration named nam-eur-asia3.

## Extended Definition

Spanner now supports a new three-continent, nine-replica multi-region instance configuration named nam-eur-asia3.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.
- For multi-region instances, all read-write and read-only zones in all regions must complete their backup replicas before the backup is marked as restorable.
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- You can make multiple, concurrent copies of the source backup to instances in different regions without any performance implications.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- When using geo-partitioning, you must use a regional Cloud KMS key for each instance replica locatoin, including those in the instance partition configuration.
- Filter instance id = INSTANCE ID is key revoked = FALSE Across time series Time series group by database Across time series Time series aggregation sum Rolling window 10 m Rolling window function mean Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold 0 Retest window 1 hr Configure alert trigger Field Value Multi-condition trigger All conditions are met After you create the alert, if Spanner detects that a subset of CMEK has been disabled, an incident summary item appears under the Incidents table on the alert's Policy details page.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For a full list of all available instance configurations, see Regional, dual-region, and multi-region configurations .
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- You can create a free trial instance in any of the Spanner regional instance configurations .

