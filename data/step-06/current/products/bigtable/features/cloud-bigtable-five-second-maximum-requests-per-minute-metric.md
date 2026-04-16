---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.009Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable five-second maximum requests per minute metric"
feature_slug: "cloud-bigtable-five-second-maximum-requests-per-minute-metric"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/iam/docs/retry-strategy"
  - "https://docs.cloud.google.com/bigtable/docs/garbage-collection"
keywords:
  - "minute"
  - "maximum"
  - "second"
  - "five"
  - "requests"
  - "metric"
---

# Cloud Bigtable five-second maximum requests per minute metric

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Adds the five-second maximum requests per minute observability metric to Cloud Bigtable.

## Extended Definition

Adds the five-second maximum requests per minute observability metric to Cloud Bigtable.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/iam/docs/retry-strategy](https://docs.cloud.google.com/iam/docs/retry-strategy)
- [https://docs.cloud.google.com/bigtable/docs/garbage-collection](https://docs.cloud.google.com/bigtable/docs/garbage-collection)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- SSD The SSD node's capacity of 5 TB, which is preferred for most workloads, provides higher storage density in comparison with the recommended configuration for Cassandra machines, which have a practical maximum storage density of less than 2 TB for each node.
- They implement multidimensional key-value stores that can support tens of thousands of queries per second (QPS), low latency reads and writes, storage that scales up to petabytes of data, and tolerance for node failure.
- Google recommends that you test the performance of Bigtable with representative data and queries to establish a metric for the per-node QPS that's achievable for your workload.
- Secondary indexes You can use continuous materialized views as asynchronous secondary indexes for tables to query the same data using different lookup patterns or attributes.

### "Retry failed requests \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/retry-strategy](https://docs.cloud.google.com/iam/docs/retry-strategy)
- Source ID: `site-iam-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- For example, in a continuous integration/continuous deployment (CI/CD) pipeline that is not highly time-sensitive, you might set deadline to 300 seconds (5 minutes).
- Continue this pattern, waiting 2 n + random-fraction seconds after each retry, up to a maximum-backoff time.
- Replace maximum-backoff with the maximum amount of time, in seconds, to wait between retries.
- Replace deadline with the maximum number of seconds to keep sending retries.

### Garbage collection overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/garbage-collection](https://docs.cloud.google.com/bigtable/docs/garbage-collection)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- In another case, you might want to keep the last five versions of a user's password hash to make sure they don't reuse the password, so you would set the maximum number of versions for the column family containing the password column to 5 .
- Before you use artificial timestamps, review the use cases for artificial timestamps, including the risks of using them: Simulating cell-level TTL Storing sequential numbers in timestamps Make sure that you set a default timestamp when sending write requests unless you need to support a use case with artificial timestamps.
- Version-based garbage collection and CPU usage In an instance that uses replication, deletes from version-based garbage collection are replicated to all clusters in the instance in the same way that application requests are replicated.
- For example, if you want to keep only the latest username and email address for a customer, you can create a column family containing those two columns and set the maximum number of values to 1 for that column family.

