---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.025Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable CPU utilization by app profile"
feature_slug: "cloud-bigtable-cpu-utilization-by-app-profile"
latest_feature_date: "2021-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
keywords:
  - "method"
  - "utilization"
  - "profile"
  - "metric"
  - "adds"
---

# Cloud Bigtable CPU utilization by app profile

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Adds a Cloud Bigtable metric for CPU utilization by app profile, method, and table for finer-grained observability.

## Extended Definition

Adds a Cloud Bigtable metric for CPU utilization by app profile, method, and table for finer-grained observability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)

## Supporting Pages

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name final operation status streaming operation client name Client library support The following table shows the minimum client library versions required to use the operation latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the attempt latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the server latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status client name Client library support The following table shows the minimum client library versions required to use the connectivity error count metric.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.
- You can also use the application profile as a tag to segment metrics.
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- The drawback of a single-cluster approach is that in a failover, either the application must be able to retry by using an alternative application profile identifier, or you must manually perform the failover of impacted, single-cluster routing profiles.

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring the CPU utilization per app profile for a workload using a standard app profile can help you troubleshoot CPU utilization issues or make decisions about the size or location of the cluster, so you can optimize usage and reduce costs.
- Observability Using separate app profiles for different workloads gives you better insight into your applications' usage of Bigtable, because metrics are available per app profile.
- Metrics at the app profile level are useful if you need to seek support , because you're better able to share the exact workload that is causing an issue.
- To learn which metrics that are available at the profile level, see the table at System insights charts for Bigtable resources .

