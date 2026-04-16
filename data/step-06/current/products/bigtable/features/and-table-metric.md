---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.025Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "and table metric"
feature_slug: "and-table-metric"
latest_feature_date: "2021-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
keywords:
  - "utilization"
  - "profile"
  - "metric"
  - "table"
  - "adds"
---

# and table metric

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Adds a Cloud Bigtable metric for CPU utilization by app profile, method, and table for finer-grained observability.

## Extended Definition

Adds a Cloud Bigtable metric for CPU utilization by app profile, method, and table for finer-grained observability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)

## Supporting Pages

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Observability Using separate app profiles for different workloads gives you better insight into your applications' usage of Bigtable, because metrics are available per app profile.
- To learn which metrics that are available at the profile level, see the table at System insights charts for Bigtable resources .
- You can use the Bigtable Google Cloud console to view separate graphs of your Bigtable metrics for each app profile.
- Monitoring the CPU utilization per app profile for a workload using a standard app profile can help you troubleshoot CPU utilization issues or make decisions about the size or location of the cluster, so you can optimize usage and reduce costs.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.
- The policy accounts for the data center topology and vnode token ranges. application profile : settings that instruct Bigtable how to route a client API call to the appropriate cluster in the instance.
- Google recommends that you test the performance of Bigtable with representative data and queries to establish a metric for the per-node QPS that's achievable for your workload.
- The Bigtable service routes API calls to a destination cluster based on a parameter (an application profile identifier) that's provided with each operation.

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name final operation status streaming operation client name Client library support The following table shows the minimum client library versions required to use the operation latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the attempt latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the server latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status client name Client library support The following table shows the minimum client library versions required to use the connectivity error count metric.

