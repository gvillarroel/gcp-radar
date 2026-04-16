---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.854Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Apache Beam SDK for Python 2.0.0-2.4.0"
feature_slug: "apache-beam-sdk-for-python-2-0-0-2-4-0"
latest_feature_date: "2018-12-17"
deprecation_date: "March 25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
keywords:
  - "apache"
  - "beam"
  - "sdk"
  - "python"
  - "versions"
  - "through"
  - "used"
  - "dataflow"
---

# Apache Beam SDK for Python 2.0.0-2.4.0

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Apache Beam SDK for Python versions 2.0.0 through 2.4.0 are SDK versions used with Dataflow; deprecated on March 25.

## Extended Definition

Apache Beam SDK for Python versions 2.0.0 through 2.4.0 are SDK versions used with Dataflow; deprecated on March 25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtime dependency errors When you run a Dataflow job that uses the Apache Beam SDK for Python with cross-language transforms, the job might fail with an HTTP Error 403: Forbidden error when downloading JAR files from Maven Central.
- Python pipeline fails after one hour of worker inactivity When using the Apache Beam SDK for Python with Dataflow Runner V2 on worker machines with many CPU cores, use Apache Beam SDK 2.35.0 or later.
- This issue is caused by a change in Maven Central's CDN provider, which blocks requests from the Python urllib library used by the Apache Beam SDK.
- Worker logs contain stacktrace similar to following trace logs: TypeError: canonicalize version() got an unexpected keyword argument 'strip trailing zero' ERROR:absl:Internal Error Type : RuntimeError ERROR:absl:Error Message : Full trace: Traceback (most recent call last): File "/usr/local/lib/python3.9/site-packages/apache beam/utils/processes.py", line 89, in check output out = subprocess.check output( args, kwargs) IFile "/usr/local/lib/python3.9/subprocess.py", line 424, in check output return run( popenargs, stdout=PIPE, timeout=timeout, check=True, File "/usr/local/lib/python3.9/subprocess.py", line 528, in run raise CalledProcessError(retcode, process.args, subprocess.CalledProcessError: Command '['/usr/local/bin/python', 'setup.py', 'sdist', '--dist-dir', '/tmp/tmp196n6g8d']' returned non-zero exit status 1.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-reference-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.
- These Apache Beam notebooks are made available through Vertex AI Workbench , a service that hosts notebook virtual machines pre-installed with the latest data science and machine learning frameworks.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support and limitations Cloud KMS is supported in the following Apache Beam SDK versions: Java SDK versions 2.13.0 and later Python SDK versions 2.13.0 and later Go SDK versions 2.40.0 and later Cloud KMS with Dataflow supports regional keys .
- Specifying gcpTempLocation is required. mvn compile exec:java -Dexec.mainClass = org.apache.beam.examples.WordCount \ -Dexec.args = "--inputFile=gs://dataflow-samples/shakespeare/kinglear.txt \ --output=gs:// STORAGE BUCKET /counts \ --runner=DataflowRunner --project= PROJECT ID \ --gcpTempLocation=gs:// STORAGE BUCKET /tmp \ --dataflowKmsKey= KMS KEY " -Pdataflow-runner Python Dataflow does not support creating default Cloud Storage paths for temporary files when using a Cloud KMS key.
- Specifying gcpTempLocation is required. python -m apache beam.examples.wordcount \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// STORAGE BUCKET /counts \ --runner DataflowRunner \ --region HOST GCP REGION \ --project PROJECT ID \ --temp location gs:// STORAGE BUCKET /tmp/ \ --dataflow kms key = KMS KEY Go Dataflow does not support creating default Cloud Storage paths for temporary files when using a Cloud KMS key.
- Before you begin Verify that you have the Apache Beam SDK for Java 2.13.0 or later, the Apache Beam SDK for Python 2.13.0 or later, or the Apache Beam SDK for Go 2.40.0 or later.

