---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.186Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "AI Platform (Unified) Python SDK"
feature_slug: "ai-platform-unified-python-sdk"
latest_feature_date: "2021-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk"
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
keywords:
  - "ai"
  - "platform"
  - "unified"
  - "python"
  - "sdk"
  - "was"
  - "introduced"
  - "offering"
---

# AI Platform (Unified) Python SDK

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The AI Platform (Unified) Python SDK was introduced, offering a renamed client library with high-level aiplatform wrappers and a lower-level aiplatform.gapic interface for additional flexibility.

## Extended Definition

The AI Platform (Unified) Python SDK was introduced, offering a renamed client library with high-level aiplatform wrappers and a lower-level aiplatform.gapic interface for additional flexibility.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk)
- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)

## Supporting Pages

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Import the Vertex AI Python client library namespace The Vertex AI Python client library namespace is google.cloud.aiplatform.gapic .
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.
- To import the Python client library, include one of the following in your Python script: from google.cloud import aiplatform v1 from google.cloud.aiplatform import gapic What's next Learn how to choose a training method .

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk)
- Source ID: `site-docs-reference-required-5`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Import the Vertex AI Python client library namespace The Vertex AI Python client library namespace is google.cloud.aiplatform.gapic .
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.
- To import the Python client library, include one of the following in your Python script: from google.cloud import aiplatform v1 from google.cloud.aiplatform import gapic What's next Learn how to choose a training method .

### Install the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/install-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/start/install-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install or update the Vertex AI SDK package To install or update the Vertex AI SDK, run the following command in your virtual environment: pip install --upgrade google-cloud-aiplatform Initialize the Vertex AI SDK After you install the Vertex AI SDK for Python, you must initialize the SDK with your Vertex AI and Google Cloud details.
- Installation of the Vertex AI SDK for Python includes the following steps: Create an isolated Python environment Install the Vertex AI SDK package Initialize the Vertex AI SDK Create an isolated Python environment A Python best practice is to install the Vertex AI SDK in an isolated Python environment for each project.
- Home Documentation AI and ML Vertex AI Reference Send feedback Install the Vertex AI SDK for Python Stay organized with collections Save and categorize content based on your preferences.
- For more information about the Vertex AI SDK, see the following resources: To learn about the Vertex AI SDK for Python, see Introduction to the Vertex AI SDK for Python .

