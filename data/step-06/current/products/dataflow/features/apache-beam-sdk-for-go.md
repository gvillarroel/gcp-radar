---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.786Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Apache Beam SDK for Go"
feature_slug: "apache-beam-sdk-for-go"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
keywords:
  - "apache"
  - "beam"
  - "sdk"
  - "go"
  - "lets"
  - "you"
  - "create"
  - "batch"
---

# Apache Beam SDK for Go

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Apache Beam SDK for Go lets you create batch and streaming Dataflow pipelines in Go; The Apache Beam SDK for Go lets you create batch Dataflow pipelines in Go.

## Extended Definition

The Apache Beam SDK for Go lets you create batch and streaming Dataflow pipelines in Go; The Apache Beam SDK for Go lets you create batch Dataflow pipelines in Go.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)

## Supporting Pages

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-reference-required-3`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up your development environment For information about setting up your Google Cloud project and development environment to use Dataflow, follow one of the tutorials: Create a Dataflow pipeline using Java Create a Dataflow pipeline using Python Create a Dataflow pipeline using Go Source code and examples The Apache Beam source code is available in the Apache Beam repository on GitHub.
- To install the latest version of the Apache Beam SDK for Go, run the the following command: go get -u github.com/apache/beam/sdks/v2/go/pkg/beam Note: Version numbers have the form major.minor.patch and are incremented as follows: major version for incompatible API changes, minor version for new functionality added in a backward-compatible manner, and patch version for forward-compatible bug fixes.
- Install Python wheel by running the following command: pip install wheel Install the latest version of the Apache Beam SDK for Python by running the following command from a virtual environment: pip install 'apache-beam[gcp]' Depending on the connection, the installation might take some time.
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifying gcpTempLocation is required. mvn compile exec:java -Dexec.mainClass = org.apache.beam.examples.WordCount \ -Dexec.args = "--inputFile=gs://dataflow-samples/shakespeare/kinglear.txt \ --output=gs:// STORAGE BUCKET /counts \ --runner=DataflowRunner --project= PROJECT ID \ --gcpTempLocation=gs:// STORAGE BUCKET /tmp \ --dataflowKmsKey= KMS KEY " -Pdataflow-runner Python Dataflow does not support creating default Cloud Storage paths for temporary files when using a Cloud KMS key.
- Specifying gcpTempLocation is required. python -m apache beam.examples.wordcount \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// STORAGE BUCKET /counts \ --runner DataflowRunner \ --region HOST GCP REGION \ --project PROJECT ID \ --temp location gs:// STORAGE BUCKET /tmp/ \ --dataflow kms key = KMS KEY Go Dataflow does not support creating default Cloud Storage paths for temporary files when using a Cloud KMS key.
- Support and limitations Cloud KMS is supported in the following Apache Beam SDK versions: Java SDK versions 2.13.0 and later Python SDK versions 2.13.0 and later Go SDK versions 2.40.0 and later Cloud KMS with Dataflow supports regional keys .
- Before you begin Verify that you have the Apache Beam SDK for Java 2.13.0 or later, the Apache Beam SDK for Python 2.13.0 or later, or the Apache Beam SDK for Go 2.40.0 or later.

### Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go)
- Source ID: `site-docs-reference-required-3`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Programming model for Apache Beam Setting pipeline options Pipeline options reference Deploying a pipeline Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a Dataflow pipeline using Go This page shows you how to use the Apache Beam SDK for Go to build a program that defines a pipeline.
- To run the latest version of the Beam wordcount example on your local machine, perform the following steps: Use the git clone command to clone the apache/beam GitHub repository: git clone https://github.com/apache/beam.git Switch to the beam/sdks/go directory: cd beam/sdks/go Use the following command to run the pipeline: go run examples/wordcount/wordcount.go \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output outputs The input flag specifies the file to read, and the output flag specifies the filename for the frequency count output.
- To verify the version of Go that you have installed, run the following command in your local terminal: go version Run the Beam wordcount example The Apache Beam SDK for Go includes a wordcount pipeline example .

