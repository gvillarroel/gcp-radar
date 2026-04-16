---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.847Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Python 3 support"
feature_slug: "python-3-support"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest"
keywords:
  - "python"
  - "dataflow"
  - "supports"
  - "running"
  - "apache"
  - "beam"
  - "pipelines"
---

# Python 3 support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7; Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7.

## Extended Definition

Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7; Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)

## Supporting Pages

### "Python Client for Dataflow \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)
- Source ID: `site-python-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-dataflow-client Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-dataflow-client Next Steps Read the Client Library Documentation for Dataflow to see other available methods on the client.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Dataflow Stay organized with collections Save and categorize content based on your preferences.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.

### Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python)
- Source ID: `site-docs-reference-required-3`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the pipeline: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- Create a Dataflow pipeline using Python This document shows you how to use the Apache Beam SDK for Python to build a program that defines a pipeline.
- Set up your environment Dataflow no longer supports pipelines using Python 2.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Read about the Apache Beam programming model .

### Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the pipeline: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- Create a Dataflow pipeline using Python This document shows you how to use the Apache Beam SDK for Python to build a program that defines a pipeline.
- Set up your environment Dataflow no longer supports pipelines using Python 2.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Read about the Apache Beam programming model .

