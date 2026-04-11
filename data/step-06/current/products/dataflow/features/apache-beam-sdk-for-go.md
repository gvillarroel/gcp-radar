---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.817Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Apache Beam SDK for Go"
feature_slug: "apache-beam-sdk-for-go"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go"
  - "https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go"
keywords:
  - "apache"
  - "beam"
  - "sdk"
  - "for"
  - "go"
  - "the"
  - "lets"
  - "you"
---

# Apache Beam SDK for Go

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Apache Beam SDK for Go lets you create batch and streaming Dataflow pipelines in Go; The Apache Beam SDK for Go lets you create batch Dataflow pipelines in Go.

## Extended Definition

The Apache Beam SDK for Go lets you create batch and streaming Dataflow pipelines in Go; The Apache Beam SDK for Go lets you create batch Dataflow pipelines in Go.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go)
- [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go)

## Supporting Pages

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To install the latest version of the Apache Beam SDK for Go, run the the following command: go get -u github.com/apache/beam/sdks/v2/go/pkg/beam Note: Version numbers have the form major.minor.patch and are incremented as follows: major version for incompatible API changes, minor version for new functionality added in a backward-compatible manner, and patch version for forward-compatible bug fixes.
- Set up your development environment For information about setting up your Google Cloud project and development environment to use Dataflow, follow one of the tutorials: Create a Dataflow pipeline using Java Create a Dataflow pipeline using Python Create a Dataflow pipeline using Go Source code and examples The Apache Beam source code is available in the Apache Beam repository on GitHub.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Install the Apache Beam SDK Stay organized with collections Save and categorize content based on your preferences.
- Go The latest released version for the Apache Beam SDK for Go is 2.72.0 .

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- Apache Beam is installed on your notebook instance, so include the interactive runner and interactive beam modules in your notebook. import apache beam as beam from apache beam.runners.interactive.interactive runner import InteractiveRunner import apache beam.runners.interactive.interactive beam as ib If your notebook uses other Google APIs, add the following import statements: from apache beam.options import pipeline options from apache beam.options.pipeline options import GoogleCloudOptions import google.auth Set interactivity options The following line sets the amount of time the InteractiveRunner records data from an unbounded source.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.
- SetupOptions ) . sdk location = ( '/root/apache-beam-custom/packages/beam/sdks/python/dist/apache-beam- %s 0.tar.gz' % beam . version . version ) You can adjust the parameter values.

### Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To run the latest version of the Beam wordcount example on your local machine, perform the following steps: Use the git clone command to clone the apache/beam GitHub repository: git clone https://github.com/apache/beam.git Switch to the beam/sdks/go directory: cd beam/sdks/go Use the following command to run the pipeline: go run examples/wordcount/wordcount.go \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output outputs The input flag specifies the file to read, and the output flag specifies the filename for the frequency count output.
- To verify the version of Go that you have installed, run the following command in your local terminal: go version Run the Beam wordcount example The Apache Beam SDK for Go includes a wordcount pipeline example .
- Create a Dataflow pipeline using Go This page shows you how to use the Apache Beam SDK for Go to build a program that defines a pipeline.
- We recommend that you use the latest version of Go when working with the Apache Beam SDK for Go.

### Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To run the latest version of the Beam wordcount example on your local machine, perform the following steps: Use the git clone command to clone the apache/beam GitHub repository: git clone https://github.com/apache/beam.git Switch to the beam/sdks/go directory: cd beam/sdks/go Use the following command to run the pipeline: go run examples/wordcount/wordcount.go \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output outputs The input flag specifies the file to read, and the output flag specifies the filename for the frequency count output.
- To verify the version of Go that you have installed, run the following command in your local terminal: go version Run the Beam wordcount example The Apache Beam SDK for Go includes a wordcount pipeline example .
- Create a Dataflow pipeline using Go This page shows you how to use the Apache Beam SDK for Go to build a program that defines a pipeline.
- We recommend that you use the latest version of Go when working with the Apache Beam SDK for Go.

