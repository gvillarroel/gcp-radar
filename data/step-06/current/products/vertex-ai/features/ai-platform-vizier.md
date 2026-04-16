---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.186Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "AI Platform Vizier"
feature_slug: "ai-platform-vizier"
latest_feature_date: "2021-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
keywords:
  - "ai"
  - "platform"
  - "vizier"
  - "introduced"
  - "preview"
  - "provide"
  - "black"
  - "box"
---

# AI Platform Vizier

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

AI Platform Vizier is introduced in preview to provide black-box optimization, including hyperparameter tuning and optimization of evaluable systems.

## Extended Definition

AI Platform Vizier is introduced in preview to provide black-box optimization, including hyperparameter tuning and optimization of evaluable systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)

## Supporting Pages

### Vertex AI Vizier notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Suggesting trials and updating results for Vertex AI Vizier study Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Vertex AI Training Train a multi-class classification model for ads-targeting .
- Train Tensorflow model, check autologged metrics and parameters to Vertex AI Experiments by manually setting an experiment run with aiplatform.start run() and aiplatform.end run() .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create endpoint", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for EndpointService.CreateEndpoint .
- Using a blurred baseline instead of zero (black image) is motivated by the BlurIG approach explained here: https://arxiv.org/abs/2004.03383 Examples JSON representation { "gcsSource" : { object ( GcsSource ) } , "neighborCount" : integer , // Union field source can be only one of the following: "exampleGcsSource" : { object ( ExampleGcsSource ) } // End of list of possible types for union field source . // Union field config can be only one of the following: "nearestNeighborSearchConfig" : value , "presets" : { object ( Presets ) } // End of list of possible types for union field config . } Fields gcsSource object ( GcsSource ) The Cloud Storage locations that contain the instances to be indexed for approximate nearest neighbor search. neighborCount integer The number of neighbors to return when querying for examples.
- Supported metrics: For Online Prediction: aiplatform.googleapis.com/prediction/online/accelerator/duty cycle aiplatform.googleapis.com/prediction/online/cpu/utilization aiplatform.googleapis.com/prediction/online/request count pubsub.googleapis.com/subscription/num undelivered messages prometheus.googleapis.com/vertex dcgm fi dev gpu util prometheus.googleapis.com/vertex vllm gpu cache usage perc prometheus.googleapis.com/vertex vllm num requests waiting target integer The target resource utilization in percentage (1% - 100%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change.
- Using a blurred baseline instead of zero (black image) is motivated by the BlurIG approach explained here: https://arxiv.org/abs/2004.03383 SmoothGradConfig JSON representation { "noisySampleCount" : integer , // Union field GradientNoiseSigma can be only one of the following: "noiseSigma" : number , "featureNoiseSigma" : { object ( FeatureNoiseSigma ) } // End of list of possible types for union field GradientNoiseSigma . } Fields noisySampleCount integer The number of gradient samples to use for approximation.

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.
- To import the Python client library, include one of the following in your Python script: from google.cloud import aiplatform v1 from google.cloud.aiplatform import gapic What's next Learn how to choose a training method .
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .

