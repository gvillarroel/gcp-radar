---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.852Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Dataflow SDK 2.4.0"
feature_slug: "cloud-dataflow-sdk-2-4-0"
latest_feature_date: "2019-03-20"
deprecation_date: "2019-03-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines"
keywords:
  - "dataflow"
  - "sdk"
  - "version"
  - "pipelines"
  - "deprecated"
  - "2019"
  - "03"
  - "20"
---

# Cloud Dataflow SDK 2.4.0

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Cloud Dataflow SDK 2.4.0 is an SDK version for Dataflow pipelines; deprecated on 2019-03-20.

## Extended Definition

Cloud Dataflow SDK 2.4.0 is an SDK version for Dataflow pipelines; deprecated on 2019-03-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)

## Supporting Pages

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on September 22, 2026.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on August 12, 2026.
- 2.70.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on December 16, 2026.

### Work with Dataflow data pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data pipeline roles For Dataflow data pipeline operations to succeed, you need the necessary IAM roles, as follows: You need the appropriate role to perform operations: Datapipelines.admin : Can perform all data pipeline operations Datapipelines.viewer : Can view data pipelines and jobs Datapipelines.invoker : Can invoke a data pipeline job run (this role can be enabled using the API) The service account used by Cloud Scheduler needs to have the roles/iam.serviceAccountUser role, whether the service account is user-specified or the default Compute Engine service account.
- Create a data pipeline You can create a Dataflow data pipeline in two ways: Import a job , or Create a data pipeline The data pipelines setup page: When you first access the Dataflow pipelines feature in the Google Cloud console, a setup page opens.
- Note: You can report Dataflow data pipelines issues and request new features at google-data-pipelines-feedback ." Overview You can use Dataflow data pipelines for the following tasks: Create recurrent job schedules.
- Data pipeline job fails to launch When you use data pipelines to create a recurring job schedule, your Dataflow job might not launch, and a 503 status error appears in the Cloud Scheduler log files.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Pipelines that use Managed I/O might fail with this error if Dataflow can't automatically upgrade the I/O transforms to the latest supported version.
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- If you're using the Apache Beam SDK, to import the correct libraries BOM, use beam-sdks-java-io-google-cloud-platform-bom : Maven <dependencyManagement> <dependencies> <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-google-cloud-platform-bom</artifactId> <version> BEAM VERSION </version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> Gradle dependencies { implementation ( platform ( "org.apache.beam:beam-sdks-java-google-cloud-platform-bom: BEAM VERSION " )) } For more information, see Manage pipeline dependencies in Dataflow .
- ModuleNotFoundError: No module named 'pkg resources' When you run a Dataflow job, the following error occurs during worker startup or dependency installation: ModuleNotFoundError: No module named 'pkg resources' This issue occurs because as of setuptools version 82.0.0 (released on February 8, 2026), the pkg resources module has been removed.

