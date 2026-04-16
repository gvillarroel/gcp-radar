---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.855Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Dataflow SDK for Java 2.0.0-2.4.0"
feature_slug: "cloud-dataflow-sdk-for-java-2-0-0-2-4-0"
latest_feature_date: "2018-12-17"
deprecation_date: "March 25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
keywords:
  - "dataflow"
  - "sdk"
  - "java"
  - "versions"
  - "through"
  - "jobs"
  - "deprecated"
  - "march"
---

# Cloud Dataflow SDK for Java 2.0.0-2.4.0

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Cloud Dataflow SDK for Java versions 2.0.0 through 2.4.0 are SDK versions for Dataflow jobs; deprecated on March 25.

## Extended Definition

Cloud Dataflow SDK for Java versions 2.0.0 through 2.4.0 are SDK versions for Dataflow jobs; deprecated on March 25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)

## Supporting Pages

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- This issue has been seen in SpannerIO in particular and manifests as a NoClassDefFoundError. org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed Deprecated on March 31, 2026.
- For more information, see the Apache Beam GitHub issue #26789 . org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-runners-core-construction-java org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-extensions-sql Deprecated on March 10, 2024.
- For more information, see the Apache Beam GitHub issue #26521 . org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-runners-core-construction-java org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-extensions-sql Deprecated on March 4, 2023.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this issue, if you use Apache Beam SDK version 2.56.0 or later, enable the disable global windowed args caching experiment flag: --experiments = disable global windowed args caching Total number of BoundedSource objects ... is larger than the allowable limit One of the following errors might occur when running jobs with Java: Total number of BoundedSource objects generated by splitIntoBundles() operation is larger than the allowable limit Or: Total size of the BoundedSource objects generated by splitIntoBundles() operation is larger than the allowable limit Java This error might occur if you're reading from a very large number of files by using TextIO , AvroIO , BigQueryIO through EXPORT, or some other file-based source.
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- If you're using the Apache Beam SDK, to import the correct libraries BOM, use beam-sdks-java-io-google-cloud-platform-bom : Maven <dependencyManagement> <dependencies> <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-google-cloud-platform-bom</artifactId> <version> BEAM VERSION </version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> Gradle dependencies { implementation ( platform ( "org.apache.beam:beam-sdks-java-google-cloud-platform-bom: BEAM VERSION " )) } For more information, see Manage pipeline dependencies in Dataflow .
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.dataflow.v1beta3 (0.92.0) Stay organized with collections Save and categorize content based on your preferences.
- MessagesV1 Beta3 Grpc The Dataflow Messages API is used for monitoring the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- MetricsV1 Beta3 Grpc The Dataflow Metrics API lets you monitor the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- Async Service The Dataflow Messages API is used for monitoring the progress of Dataflow jobs. com. google. dataflow. v1beta3.

