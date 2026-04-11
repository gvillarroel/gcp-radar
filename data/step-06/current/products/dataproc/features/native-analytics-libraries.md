---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.141Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Native analytics libraries"
feature_slug: "native-analytics-libraries"
latest_feature_date: "2015-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview"
  - "https://docs.cloud.google.com/dataproc/docs/reference/libraries"
keywords:
  - "native"
  - "analytics"
  - "libraries"
  - "dataproc"
  - "includes"
  - "snappy"
  - "blas"
  - "lapack"
---

# Native analytics libraries

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc includes native Snappy, BLAS, LAPACK, and ARPACK libraries to support data processing and ML workloads.

## Extended Definition

Dataproc includes native Snappy, BLAS, LAPACK, and ARPACK libraries to support data processing and ML workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview)
- [https://docs.cloud.google.com/dataproc/docs/reference/libraries](https://docs.cloud.google.com/dataproc/docs/reference/libraries)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- More Native Libraries - Cloud Dataproc now includes native Snappy libraries.
- It also includes native BLAS, LAPACK and ARPACK libraries for Spark's MLlib.
- March 31, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.97 1.2.41 2.2.41 March 28, 2025 Change Dataproc Serverless for Spark: Hadoop Native libraries are installed by default in all runtimes.
- Upgraded Hadoop to 2.8.4. (Dataproc 1.2) July 31, 2018 Fixed Fixed issue breaking native Snappy compression in spark-shell ( SPARK-24018 ) and Zeppelin .

### "google-cloud-dataproc overview (4.85.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview)
- Source ID: `site-java-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The example below demonstrates how you would import the BOM and include the google-cloud-dataproc artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-dataproc</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Dataproc Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Dataproc for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- The example below demonstrates how you would import the BOM and include the google-cloud-dataproc artifact. implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" )) implementation ( "com.google.cloud:google-cloud-dataproc" ) The platform and enforcedPlatform keywords supply dependency versions declared in a BOM.
- Home Documentation Developer tools Java Client libraries Send feedback google-cloud-dataproc overview (4.85.0) Stay organized with collections Save and categorize content based on your preferences.

### Managed Service for Apache Spark client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/libraries](https://docs.cloud.google.com/dataproc/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- ClusterControllerClient ( client options = { "api endpoint" : f " { region } -dataproc.googleapis.com:443" } ) Create the cluster config. cluster = { "project id" : project id , "cluster name" : cluster name , "config" : { "master config" : { "num instances" : 1 , "machine type uri" : "n1-standard-2" }, "worker config" : { "num instances" : 2 , "machine type uri" : "n1-standard-2" }, }, } Create the cluster. operation = cluster client . create cluster ( request = { "project id" : project id , "region" : region , "cluster" : cluster } ) result = operation . result () Output a success message. print ( f "Cluster created successfully: { result . cluster name } " ) Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Managed Service for Apache Spark client libraries Stay organized with collections Save and categorize content based on your preferences.
- Go go get cloud.google.com/go/dataproc/apiv1 For more information, see Install the Cloud Client Libraries for Go .
- This page shows how to get started with the Cloud Client Libraries for the Dataproc API.

