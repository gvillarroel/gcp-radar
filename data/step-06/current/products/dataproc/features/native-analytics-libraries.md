---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.713Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Native analytics libraries"
feature_slug: "native-analytics-libraries"
latest_feature_date: "2015-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/api-libraries-overview"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
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
Coverage: MEDIUM

## Step 02 Summary

Dataproc includes native Snappy, BLAS, LAPACK, and ARPACK libraries to support data processing and ML workloads.

## Extended Definition

Dataproc includes native Snappy, BLAS, LAPACK, and ARPACK libraries to support data processing and ML workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- [https://docs.cloud.google.com/dataproc/docs/reference/libraries](https://docs.cloud.google.com/dataproc/docs/reference/libraries)

## Supporting Pages

### "Overview of APIs and Client Libraries \_|\_ Managed Service for Apache Spark\

- URL: [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These "legacy" libraries access REST but not gRPC APIs (see Google API Client Libraries for additional information). gRPC : If a client library is not available for your programming language of choice, you can generate gRPC client libraries for Dataproc in any gRPC-supported language.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Overview of APIs and Client Libraries Stay organized with collections Save and categorize content based on your preferences.
- These are the available interfaces, in the order that we recommend using them: Google Cloud Client Libraries : Managed Service for Apache Spark ( alpha and beta release ) client libraries are available in multiple languages and are built on gRPC .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Most Google Cloud client libraries do . -- > < transformer implementation = "org.apache.maven.plugins.shade.resource.ServicesResourceTransformer" / > < / transformers > < filters > < filter > < artifact > : </ artifact > < excludes > < exclude>META - INF / maven / </ exclude > < exclude>META - INF / .SF</exclude> <exclude>META-INF/ .DSA</exclude> <exclude>META-INF/ .RSA</exclude> </excludes> </filter> </filters> <relocations> <relocation> <pattern>com</pattern> <shadedPattern>repackaged.com.google.common</shadedPattern> <includes> <include>com.google.common. </ include > < / includes > < / relocation > < / relocations > < / configuration > < / execution > < / executions > < / plugin > < / plugins > < / build > < / project > To run the build: mvn package Notes about pom.xml : ManifestResourceTransformer processes attributes in the uber JAR's manifest file ( MANIFEST.MF ).
- The next example shades the Guava and Protobuf libraries. < relocation > < pattern>com < / pattern > < shadedPattern>repackaged . com < / shadedPattern > < includes > < include>com . google . protobuf . </ include > < include>com . google . common . </ include > < / includes > < / relocation > Create a shaded uber JAR with SBT SBT is a tool for building Scala applications.
- The next example shades the Guava and Protobuf libraries. assemblyShadeRules in assembly := Seq ( ShadeRule . rename ( "com.google.common. " - > "repackaged.com.google.common.@1" ). inAll , ShadeRule . rename ( "com.google.protobuf. " - > "repackaged.com.google.protobuf.@1" ). inAll ) Submit the uber JAR to Managed Service for Apache Spark After you have created a shaded uber JAR that contains your Spark applications and its dependencies, you are ready to submit a job to Managed Service for Apache Spark.
- Example: gcloud dataproc jobs submit spark \ --cluster=my-cluster \ --region= region \ --properties=spark.jars.packages='com.google.cloud:google-cloud-translate:1.35.0,org.apache.bahir:spark-streaming-pubsub 2.11:2.2.0' When submitting a job directly on your cluster use the spark-submit command with the --packages=[DEPENDENCIES] parameter.

### Managed Service for Apache Spark client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/libraries](https://docs.cloud.google.com/dataproc/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- ClusterControllerClient ( client options = { "api endpoint" : f " { region } -dataproc.googleapis.com:443" } ) Create the cluster config. cluster = { "project id" : project id , "cluster name" : cluster name , "config" : { "master config" : { "num instances" : 1 , "machine type uri" : "n1-standard-2" }, "worker config" : { "num instances" : 2 , "machine type uri" : "n1-standard-2" }, }, } Create the cluster. operation = cluster client . create cluster ( request = { "project id" : project id , "region" : region , "cluster" : cluster } ) result = operation . result () Output a success message. print ( f "Cluster created successfully: { result . cluster name } " ) Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Managed Service for Apache Spark client libraries Stay organized with collections Save and categorize content based on your preferences.
- Go go get cloud.google.com/go/dataproc/apiv1 For more information, see Install the Cloud Client Libraries for Go .
- This page shows how to get started with the Cloud Client Libraries for the Dataproc API.

