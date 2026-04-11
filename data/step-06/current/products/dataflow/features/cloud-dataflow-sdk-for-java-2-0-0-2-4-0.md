---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.858Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Dataflow SDK for Java 2.0.0-2.4.0"
feature_slug: "cloud-dataflow-sdk-for-java-2-0-0-2-4-0"
latest_feature_date: "2018-12-17"
deprecation_date: "March 25"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java"
keywords:
  - "dataflow"
  - "sdk"
  - "for"
  - "java"
  - "versions"
  - "through"
  - "are"
  - "jobs"
---

# Cloud Dataflow SDK for Java 2.0.0-2.4.0

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Cloud Dataflow SDK for Java versions 2.0.0 through 2.4.0 are SDK versions for Dataflow jobs; deprecated on March 25.

## Extended Definition

Cloud Dataflow SDK for Java versions 2.0.0 through 2.4.0 are SDK versions for Dataflow jobs; deprecated on March 25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java)

## Supporting Pages

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These fields have no effect when specified during job creation. com. google. dataflow. v1beta3.SDK Info SDK Information. com. google. dataflow. v1beta3.SDK Info.
- MessagesV1 Beta3 Grpc The Dataflow Messages API is used for monitoring the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- Sdk Harness Container Image Defines an SDK harness container for executing Dataflow pipelines. com. google. dataflow. v1beta3.
- Parameter Type ParameterType specifies what kind of input we need for this parameter. com. google. dataflow. v1beta3.SDK Info.

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Warning: On Dataflow, when Java SDK is used, Coders that extend CustomCoder (excluding SchemaCoder and RowCoder) are update incompatible with previous versions (prior to 2.63) of the same transform.
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on September 22, 2026.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on August 12, 2026.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To resolve this issue, if you use Apache Beam SDK version 2.56.0 or later, enable the disable global windowed args caching experiment flag: --experiments = disable global windowed args caching Total number of BoundedSource objects ... is larger than the allowable limit One of the following errors might occur when running jobs with Java: Total number of BoundedSource objects generated by splitIntoBundles() operation is larger than the allowable limit Or: Total size of the BoundedSource objects generated by splitIntoBundles() operation is larger than the allowable limit Java This error might occur if you're reading from a very large number of files by using TextIO , AvroIO , BigQueryIO through EXPORT, or some other file-based source.
- If you're using the Apache Beam SDK, to import the correct libraries BOM, use beam-sdks-java-io-google-cloud-platform-bom : Maven <dependencyManagement> <dependencies> <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-google-cloud-platform-bom</artifactId> <version> BEAM VERSION </version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> Gradle dependencies { implementation ( platform ( "org.apache.beam:beam-sdks-java-google-cloud-platform-bom: BEAM VERSION " )) } For more information, see Manage pipeline dependencies in Dataflow .
- For configurations available in the Apache Beam SDK for Java, see BigQueryPipelineOptions , and for configurations available in the Apache Beam SDK for Python, see the WriteToBigQuery transform . rateLimitExceeded When using the BigQuery connector, the following error occurs: rateLimitExceeded This error occurs if too many BigQuery API requests are sent during a short duration.
- Error reporting workitem progress For Java pipelines, if you are not using Runner V2, you might see the following error: Error reporting workitem progress update to Dataflow service: ...

### Create a Dataflow pipeline using Java \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Create a Dataflow pipeline using Java This document shows you how to set up your Google Cloud project, create an example pipeline built with the Apache Beam SDK for Java, and run the example pipeline on the Dataflow service.
- Verify that your word-count-beam directory contains the pom.xml file: Linux or macOS cd word-count-beam/ ls The output is the following: pom.xml src Windows cd word-count-beam/ dir The output is the following: pom.xml src Verify that your Maven project contains the example pipelines: Linux or macOS ls src/main/java/org/apache/beam/examples/ The output is the following: DebuggingWordCount.java WindowedWordCount.java common MinimalWordCount.java WordCount.java Windows dir src/main/java/org/apache/beam/examples/ The output is the following: DebuggingWordCount.java WindowedWordCount.java common MinimalWordCount.java WordCount.java For a detailed introduction to the Apache Beam concepts that are used in these examples, see the Apache Beam WordCount Example .
- Learn how to grant roles . gcloud services enable dataflow compute component logging storage component storage api bigquery pubsub datastore.googleapis.com cloudresourcemanager.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .
- Learn how to grant roles . gcloud services enable dataflow compute component logging storage component storage api bigquery pubsub datastore.googleapis.com cloudresourcemanager.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .

