---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.857Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Apache Beam SDK for Java 2.0.0-2.4.0"
feature_slug: "apache-beam-sdk-for-java-2-0-0-2-4-0"
latest_feature_date: "2018-12-17"
deprecation_date: "March 25"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
keywords:
  - "apache"
  - "beam"
  - "sdk"
  - "for"
  - "java"
  - "versions"
  - "through"
  - "are"
---

# Apache Beam SDK for Java 2.0.0-2.4.0

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Apache Beam SDK for Java versions 2.0.0 through 2.4.0 are SDK versions used with Dataflow; deprecated on March 25.

## Extended Definition

Apache Beam SDK for Java versions 2.0.0 through 2.4.0 are SDK versions used with Dataflow; deprecated on March 25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)

## Supporting Pages

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To install the latest version of the Apache Beam SDK for Go, run the the following command: go get -u github.com/apache/beam/sdks/v2/go/pkg/beam Note: Version numbers have the form major.minor.patch and are incremented as follows: major version for incompatible API changes, minor version for new functionality added in a backward-compatible manner, and patch version for forward-compatible bug fixes.
- For more information about Apache Beam SDK for Java dependencies, see Apache Beam SDK for Java dependencies and Managing Beam dependencies in Java in the Apache Beam documentation.
- To get the Apache Beam SDK for Java using Maven, use one of the released artifacts from the Maven Central Repository .
- Java The latest released version for the Apache Beam SDK for Java is 2.72.0 .

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on September 22, 2026.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on August 12, 2026.
- This issue has been seen in SpannerIO in particular and manifests as a NoClassDefFoundError. org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed Deprecated on March 31, 2026.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For configurations available in the Apache Beam SDK for Java, see BigQueryPipelineOptions , and for configurations available in the Apache Beam SDK for Python, see the WriteToBigQuery transform . rateLimitExceeded When using the BigQuery connector, the following error occurs: rateLimitExceeded This error occurs if too many BigQuery API requests are sent during a short duration.
- To resolve this issue, if you use Apache Beam SDK version 2.56.0 or later, enable the disable global windowed args caching experiment flag: --experiments = disable global windowed args caching Total number of BoundedSource objects ... is larger than the allowable limit One of the following errors might occur when running jobs with Java: Total number of BoundedSource objects generated by splitIntoBundles() operation is larger than the allowable limit Or: Total size of the BoundedSource objects generated by splitIntoBundles() operation is larger than the allowable limit Java This error might occur if you're reading from a very large number of files by using TextIO , AvroIO , BigQueryIO through EXPORT, or some other file-based source.
- If you're using the Apache Beam SDK, to import the correct libraries BOM, use beam-sdks-java-io-google-cloud-platform-bom : Maven <dependencyManagement> <dependencies> <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-google-cloud-platform-bom</artifactId> <version> BEAM VERSION </version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> Gradle dependencies { implementation ( platform ( "org.apache.beam:beam-sdks-java-google-cloud-platform-bom: BEAM VERSION " )) } For more information, see Manage pipeline dependencies in Dataflow .
- For example: --expansion service https://maven-central.storage-download.googleapis.com/maven2/org/apache/beam/beam-sdks-java-extensions-schemaio-expansion-service/ BEAM VERSION /beam-sdks-java-extensions-schemaio-expansion-service- BEAM VERSION .jar Stage JARs in Cloud Storage : Download the required JARs, stage them in a Cloud Storage bucket, and then provide the Cloud Storage path of the JAR to the --expansion service pipeline option.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- These Apache Beam notebooks are made available through Vertex AI Workbench , a service that hosts notebook virtual machines pre-installed with the latest data science and machine learning frameworks.
- Apache Beam notebooks are built against the master branch of the Apache Beam SDK.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.

