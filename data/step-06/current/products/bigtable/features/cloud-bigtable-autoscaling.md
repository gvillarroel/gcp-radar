---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.023Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable autoscaling"
feature_slug: "cloud-bigtable-autoscaling"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
keywords:
  - "makes"
  - "autoscaling"
  - "allowing"
  - "automatically"
  - "clusters"
  - "generally"
  - "available"
---

# Cloud Bigtable autoscaling

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Makes autoscaling generally available for Cloud Bigtable, allowing clusters to automatically add or remove nodes based on usage and exposing related operational metrics.

## Extended Definition

Makes autoscaling generally available for Cloud Bigtable, allowing clusters to automatically add or remove nodes based on usage and exposing related operational metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)

## Supporting Pages

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bigtable autoscaling determines the number of nodes required, based on the following dimensions: CPU utilization target Storage utilization target Minimum number of nodes Maximum number of nodes Each scaling dimension generates a recommended node count, and Bigtable automatically uses the highest one.
- When you enable infrequent access as part of tiered storage, autoscaling additionally makes sure that the combined SSD and the infrequent access storage doesn't exceed the limit of 32 TB per node.
- Account for replication In an instance that uses replication, each cluster's autoscaling settings and activity are completely independent of those for the other clusters in the instance.
- For example, if you store 10 TB on an SSD cluster, you can divide 10 TB by 2.5 TB, which is the storage utilization target set by default for SSD clusters that use autoscaling.

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Read and write latency are unaffected : A continuous materialized view has minimal impact on performance on the source table when the instance's clusters are adequately provisioned or use autoscaling.
- As a best practice to make sure the data in the continuous materialized view remains fresh, enable autoscaling for the clusters in the instance that contains your continuous materialized view.
- Autoscaling automatically adds enough nodes to handle the processing overhead and then removes them when they're no longer needed.
- Autoscaling lets your clusters scale up or down in size as storage requirements change.

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- CMEK-protected Bigtable resources (instances, clusters, tables, or backups) tied to a key that has been made inaccessible as the result of a user-triggered action (such as disabling or destroying a key, or by revoking the Encrypter/Decrypter role) for more than 30 consecutive days are automatically deleted .
- The Bigtable process of automatically disabling all clusters in an instance after one key is disabled can take up to several hours.
- Cross-region protection: You can enable CMEK in instances that have clusters in any region where Bigtable is available.
- Google Cloud console Google Cloud CLI All generally available (GA) client libraries that call the Cloud Bigtable APIs.

