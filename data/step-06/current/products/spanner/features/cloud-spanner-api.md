---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.369Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner API"
feature_slug: "cloud-spanner-api"
latest_feature_date: "2017-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AbstractLazyInitializer"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "initial"
  - "beta"
  - "available"
  - "made"
---

# Cloud Spanner API

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Cloud Spanner API was made available in initial Beta.

## Extended Definition

The Cloud Spanner API was made available in initial Beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AbstractLazyInitializer](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AbstractLazyInitializer)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Module pagers (3.63.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers)
- Source ID: `site-python-reference`
- Final score: 73
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This class thinly wraps an initial ListBackupSchedulesResponse object, and provides an aiter method to iterate through its backup schedules field.
- This class thinly wraps an initial ListBackupSchedulesResponse object, and provides an iter method to iterate through its backup schedules field.
- This class thinly wraps an initial ListDatabaseOperationsResponse object, and provides an aiter method to iterate through its operations field.
- This class thinly wraps an initial ListDatabaseOperationsResponse object, and provides an iter method to iterate through its operations field.

### "Class AbstractLazyInitializer<T> (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AbstractLazyInitializer](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AbstractLazyInitializer)
- Source ID: `site-java-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- 6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1 public abstract class AbstractLazyInitializer<T> Generic AbstractLazyInitializer for any heavy-weight object that might throw an exception during initialization.
- Inheritance java.lang.Object > AbstractLazyInitializer<T> Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Type Parameter Name Description T Constructors AbstractLazyInitializer() public AbstractLazyInitializer () Methods get() public T get () Returns an initialized instance of T.
- Home Documentation Developer tools Java Client libraries Send feedback Class AbstractLazyInitializer<T> (6.111.1) Stay organized with collections Save and categorize content based on your preferences.
- Returns Type Description T Exceptions Type Description Exception initialize() protected abstract T initialize () Initializes the actual object that should be returned.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- To be able to use the SpannerIO connector, the dependency needs to be added to your pom.xml file: <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-io-google-cloud-platform</artifactId> <version>${beam-version}</version> <!-- available from version 2.38.0 --> </dependency> Create a metadata database The connector needs to keep track of each partition when running the Apache Beam pipeline.
- Build a Dataflow pipeline This section covers the connector's initial configuration, and provides samples for common integrations with the Spanner change streams feature.
- We recommend experimenting with an initial worker pool size and monitor how your pipeline deals with the load, increasing the number of nodes if necessary.
- Size your cluster A rule of thumb for an initial number of workers in a Spanner change streams job is one worker per 1,000 writes per second.

