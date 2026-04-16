---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.266Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "M109: PyTorch 2.0 with Python 3.10 and CUDA 11.8 support"
feature_slug: "m109-pytorch-2-0-with-python-3-10-and-cuda-11-8-support"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
  - "https://docs.cloud.google.com/vertex-ai/docs/start/training-guide"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
keywords:
  - "m109"
  - "pytorch"
  - "python"
  - "10"
  - "cuda"
  - "11"
  - "release"
  - "adds"
---

# M109: PyTorch 2.0 with Python 3.10 and CUDA 11.8 support

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

The M109 release adds support for PyTorch 2.0 with Python 3.10 and CUDA 11.8 for Vertex AI Workbench user-managed notebooks.

## Extended Definition

The M109 release adds support for PyTorch 2.0 with Python 3.10 and CUDA 11.8 for Vertex AI Workbench user-managed notebooks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- [https://docs.cloud.google.com/vertex-ai/docs/start/training-guide](https://docs.cloud.google.com/vertex-ai/docs/start/training-guide)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)

## Supporting Pages

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- To see an example of using the Vertex AI SDK as part of a more comprehensive workflow, run the "Custom training and online prediction" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Understand the Vertex AI SDK and client library differences When you install the Vertex AI SDK for Python, the Vertex AI Python client library is also installed.
- Use Vertex AI Python client library and SDK together If you use the Vertex AI SDK for Python and discover you need greater flexibility or control, or if you need a method not included in the Vertex AI SDK, you can use the Vertex AI Python client library in the same workflow.
- Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.

### Custom training beginner's guide \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/training-guide](https://docs.cloud.google.com/vertex-ai/docs/start/training-guide)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an example of packaging your training application as a Python Source Distribution, see the notebook tutorial Training, tuning and deploying a PyTorch classification model .
- Notebooks To see examples of how to enable Profiler for a custom training job, run the following notebooks in the environment of your choice: "Training, tuning and deploying a PyTorch text sentiment classification model on Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Get started with Vertex AI Distributed Training": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Run hyperparameter tuning for a TensorFlow model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI TensorBoard custom training with prebuilt container": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "PyTorch distributed training with Vertex AI Reduction Server": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Custom training and batch prediction (image classification)": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Custom training and online prediction (image classification)": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Video Training custom models Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Recommended training application structure If you choose to package up your code as a Python source distribution or as a custom container, it's recommended that you structure your application as follows: training-application-dir/ ....setup.py ....Dockerfile trainer/ ....task.py ....model.py ....utils.py Create a directory to store all of your training application code, in this case, training-application-dir .
- You can use this option if all of the code needed to execute your training application is in one Python file and one of the prebuilt Vertex AI training containers has all of the libraries needed to run your application.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Package training application into a Python source distribution Configure and run training job in a prebuilt container Package model artifacts in a model archive file Upload model for deployment Deploy model using a prebuilt container for prediction Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Get started with PyTorch on Ray on Vertex AI .
- Tutorial steps Create a PyTorch distributed training application Package the training application with prebuilt containers Create a custom job on Vertex AI with Reduction Server Submit and monitor the job Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Custom training using Python package, managed text dataset, and TF Serving container .
- Learn how to create a distributed PyTorch training job using Vertex AI SDK for Python and custom containers.
- Learn how to create a distributed PyTorch training job using Vertex AI SDK for Python and custom containers.

