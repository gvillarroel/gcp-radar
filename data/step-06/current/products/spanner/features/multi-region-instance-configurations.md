---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.365Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Multi-region instance configurations"
feature_slug: "multi-region-instance-configurations"
latest_feature_date: "2017-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "configurations"
  - "introduced"
  - "including"
  - "instance"
  - "multi"
  - "region"
---

# Multi-region instance configurations

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner introduced multi-region instance configurations, including one-continent (nam3) and three-continent (nam-eur-asia1) deployment options.

## Extended Definition

Spanner introduced multi-region instance configurations, including one-continent (nam3) and three-continent (nam-eur-asia1) deployment options.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.
- For information about data replicas in instance configurations, see Regional, dual-region, and multi-region configurations .
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- When using geo-partitioning, you must use a regional Cloud KMS key for each instance replica locatoin, including those in the instance partition configuration.
- Filter instance id = INSTANCE ID is key revoked = FALSE Across time series Time series group by database Across time series Time series aggregation sum Rolling window 10 m Rolling window function mean Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold 0 Retest window 1 hr Configure alert trigger Field Value Multi-condition trigger All conditions are met After you create the alert, if Spanner detects that a subset of CMEK has been disabled, an incident summary item appears under the Incidents table on the alert's Policy details page.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Size the database to testing and production needs During development, a single-node Spanner instance is likely sufficient for most activities, including functional testing.
- Cluster Multiple copies of the software running on many machines that together appear as a single instance to the game backend.
- This setup requires that transactions span multiple database instances, leading to complex, error-prone application-side logic.
- For example, a cluster runs multiple copies of the database software, but appears as a single instance to the game backend.

