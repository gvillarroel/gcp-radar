---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.005Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Confidential Computing for Vertex AI Workbench instances"
feature_slug: "confidential-computing-for-vertex-ai-workbench-instances"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train"
keywords:
  - "confidential"
  - "computing"
  - "vertex"
  - "ai"
  - "workbench"
  - "instances"
  - "now"
  - "supports"
---

# Confidential Computing for Vertex AI Workbench instances

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench now supports data-in-use encryption through Confidential Computing by enabling Confidential VM services when creating an instance; Adds support for data-in-use encryption by enabling the Confidential VM service when creating a Vertex AI Workbench instance.

## Extended Definition

Vertex AI Workbench now supports data-in-use encryption through Confidential Computing by enabling Confidential VM services when creating an instance; Adds support for data-in-use encryption by enabling the Confidential VM service when creating a Vertex AI Workbench instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train)

## Supporting Pages

### Introduction to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- To use Confidential Computing, you enable the Confidential VM service when you create a Vertex AI Workbench instance.
- Although the use of custom virtual machine (VM) images or Deep Learning VM images with Vertex AI Workbench instances can be possible, Vertex AI Workbench doesn't provide any support for unexpected behaviors or malfunctions when using those images.
- When you use Access Context Manager and Chrome Enterprise Premium to protect Vertex AI Workbench instances with context-aware access controls, access is evaluated each time the user authenticates to the instance.
- To edit a Vertex AI Workbench instance's underlying VM, use the projects.locations.instances.patch method in the Notebooks API or the gcloud workbench instances update command in the Google Cloud SDK.

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see an example of using the Vertex AI SDK as part of a more comprehensive workflow, run the "Custom training and online prediction" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Understand the Vertex AI SDK and client library differences When you install the Vertex AI SDK for Python, the Vertex AI Python client library is also installed.
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- Use Vertex AI Python client library and SDK together If you use the Vertex AI SDK for Python and discover you need greater flexibility or control, or if you need a method not included in the Vertex AI SDK, you can use the Vertex AI Python client library in the same workflow.
- Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.

### "Hello tabular data: Create a dataset and train an AutoML classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello tabular data: Create a dataset and train an AutoML classification model Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI examines the source data type and feature values and infers how it will use that feature in model training.
- Create a tabular dataset In the Google Cloud console, in the Vertex AI section, go to the Datasets page.
- Vertex AI offers two model training methods, AutoML and custom training.

