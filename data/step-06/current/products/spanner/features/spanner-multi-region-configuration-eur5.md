---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.336Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner multi-region configuration eur5"
feature_slug: "spanner-multi-region-configuration-eur5"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
keywords:
  - "eur5"
  - "london"
  - "second"
  - "configuration"
  - "instance"
  - "multi"
  - "region"
---

# Spanner multi-region configuration eur5

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

A new second multi-region instance configuration, eur5 (London/Belgium), became available for Spanner.

## Extended Definition

A new second multi-region instance configuration, eur5 (London/Belgium), became available for Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- In load tests, this model does an acceptable job of distributing the secondary index read and write load across multiple Spanner splits, as illustrated in the following diagram: Although the synthetic data used in the load test is similar to the eventual steady state of the game where Attribute values are well distributed, the game design dictates that all players start with Attribute=50 .
- Although synthetic load tests are a good way to validate how many queries per second (QPS) your instance can handle, a beta test with real players is necessary to validate your schema and prepare a successful launch.
- To help support your GDPR needs, see the Google Cloud and the GDPR whitepaper and select the correct Spanner regional configuration .
- Cluster Multiple copies of the software running on many machines that together appear as a single instance to the game backend.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.
- For multi-region instances, all read-write and read-only zones in all regions must complete their backup replicas before the backup is marked as restorable.
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- You can make multiple, concurrent copies of the source backup to instances in different regions without any performance implications.

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.
- For information about data replicas in instance configurations, see Regional, dual-region, and multi-region configurations .
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.

