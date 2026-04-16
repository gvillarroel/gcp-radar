---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.168Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Google Cloud Pipeline Components SDK"
feature_slug: "google-cloud-pipeline-components-sdk"
latest_feature_date: "2022-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/components-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component"
keywords:
  - "pipeline"
  - "components"
  - "sdk"
  - "reached"
  - "availability"
---

# Google Cloud Pipeline Components SDK

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Pipeline Components SDK reached general availability.

## Extended Definition

The Google Cloud Pipeline Components SDK reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/components-quickstart](https://docs.cloud.google.com/vertex-ai/docs/pipelines/components-quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component)

## Supporting Pages

### "Quickstart: Google Cloud Pipeline Components \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/components-quickstart](https://docs.cloud.google.com/vertex-ai/docs/pipelines/components-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can use the following code to import and use the Dataflow component in a pipeline. from google cloud pipeline components.v1.dataflow import DataflowPythonJobOp from kfp import dsl @dsl . pipeline ( name = PIPELINE NAME , description = 'Dataflow launch python pipeline' ) def pipeline ( python file path : str = 'gs://ml-pipeline-playground/samples/dataflow/wc/wc.py' , project id : str = PROJECT ID , location : str = LOCATION , staging dir : str = PIPELINE ROOT , requirements file path : str = 'gs://ml-pipeline-playground/samples/dataflow/wc/requirements.txt' , ): dataflow python op = DataflowPythonJobOp ( project = project id , location = location , python module path = python file path , temp location = staging dir , requirements file path = requirements file path , args = [ '--output' , OUTPUT FILE ], ) What's next Read the Introduction to Google Cloud Pipeline Components .
- Install latest release Use the following command to install the Google Cloud SDK from the Python Package Index (PyPI): pip install -- upgrade google - cloud - pipeline - components Import a prebuilt component by using the Google Cloud SDK After you install the Google Cloud SDK, you can use it to import a prebuilt component.
- Home Documentation AI and ML Vertex AI Send feedback Quickstart: Google Cloud Pipeline Components Stay organized with collections Save and categorize content based on your preferences.
- This quickstart guides you through the installation of the Google Cloud Pipeline Components (GCPC) SDK.

### Batch prediction components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, run the "Learn how to use prebuilt Pipeline Components to train a custom model" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub The BatchPredictionJob resource lets you run an asynchronous prediction request.
- Tutorials Custom training with prebuilt Google Cloud Pipeline Components Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Technical support contacts If you have any questions, reach out to kubeflow-pipelines-components@google.com .
- Home Documentation AI and ML Vertex AI Reference Send feedback Batch prediction components Stay organized with collections Save and categorize content based on your preferences.

### Dataflow components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Dataflow resource reference, see the following API reference pages: LaunchFlexTemplateParameter resource Job resource Tutorials Get started with the Dataflow Flex Template component Get started with the Dataflow Python Job component Specify a network and subnetwork Using customer-managed encryption keys (CMEK) Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Technical support contacts If you have any questions, reach out to kubeflow-pipelines-components@google.com .
- You can pass this parameter to a WaitGcpResourcesOp component, to wait for the Dataflow job to complete. dataflow python op = DataflowPythonJobOp ( project = project id , location = location , python module path = python file path , temp location = staging dir , requirements file path = requirements file path , args = [ '--output' , OUTPUT FILE ], ) dataflow wait op = WaitGcpResourcesOp ( gcp resources = dataflow python op . outputs [ "gcp resources" ] ) Vertex AI Pipelines optimizes the WaitGcpResourcesOp to execute it in a serverless fashion, and has zero cost.
- When you run your pipeline with the Dataflow service, the runner uploads your executable code to the location specified by the python module path parameter and dependencies to a Cloud Storage bucket (specified by temp location ), and then creates a Dataflow job that executes your Apache Beam pipeline on managed resources in Google Cloud.

