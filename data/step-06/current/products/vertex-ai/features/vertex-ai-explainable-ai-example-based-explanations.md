---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.126Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Explainable AI example-based explanations"
feature_slug: "vertex-ai-explainable-ai-example-based-explanations"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview"
keywords:
  - "vertex"
  - "ai"
  - "explainable"
  - "example"
  - "based"
  - "explanations"
  - "added"
  - "ga"
---

# Vertex AI Explainable AI example-based explanations

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Explainable AI added GA support for example-based explanations; Vertex AI Explainable AI adds preview support for generating example-based explanations.

## Extended Definition

Vertex AI Explainable AI added GA support for example-based explanations; Vertex AI Explainable AI adds preview support for generating example-based explanations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview)

## Supporting Pages

### "Configure example-based explanations \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based)
- Source ID: `site-docs-reference-3`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample is from the image classification example-based explanations notebook : {"id": "0", "bytes inputs": {"b64": "..."}} {"id": "1", "bytes inputs": {"b64": "..."}} {"id": "2", "bytes inputs": {"b64": "..."}} Update the index or configuration Vertex AI lets you update a model's nearest neighbor index or Example configuration.
- Home Documentation AI and ML Vertex AI Send feedback Configure example-based explanations Stay organized with collections Save and categorize content based on your preferences.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /models:upload Request JSON body: { "model": { "displayName": " my-model ", "artifactUri": " gs://your-model-artifact-folder ", "containerSpec": { "imageUri": " us-docker.pkg.dev/vertex-ai/prediction/tf2-cpu.2-11:latest ", }, "explanationSpec": { "parameters": { "examples": { "gcsSource": { "uris": [" gs://your-examples-folder "] }, "neighborCount": 10 , "presets": { "modality": " image " } } }, "metadata": { "outputs": { "embedding": { "output tensor name": " embedding " } }, "inputs": { "my fancy input": { "input tensor name": " input tensor name ", "encoding": " identity ", "modality": " image " }, "id": { "input tensor name": " id ", "encoding": " identity " } } } } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The flags most pertinent to example-based explanations are bolded. gcloud ai models upload \ -- region = LOCATION \ -- display - name = MODEL NAME \ -- container - image - uri = IMAGE URI \ -- artifact - uri = MODEL ARTIFACT URI \ -- explanation - method = examples \ -- uris = [ URI , ... ] \ -- explanation - neighbor - count = NEIGHBOR COUNT \ -- explanation - metadata - file = explanation - metadata . json \ -- explanation - modality = IMAGE TEXT TABULAR \ -- explanation - query = PRECISE FAST \ -- explanation - nearest - neighbor - search - config - file = search config . json See gcloud ai models upload for more information.

### "Configure feature-based explanations \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based)
- Source ID: `site-docs-reference-3`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use Vertex Explainable AI with a custom-trained model, you must configure certain options when you create the Model resource that you plan to request explanations from, when you deploy the model, or when you submit a batch explanation job.
- For example, consider a Model that expects each input instance to have the following format: [ < value > , < value > ] In this case, provide Vertex Explainable AI with a single feature name of your choosing, like dimensions .
- If the value of the scores field is an array, then when you get explanations, Vertex Explainable AI returns feature attributions for the element with the highest value in each prediction.
- Home Documentation AI and ML Vertex AI Send feedback Configure feature-based explanations Stay organized with collections Save and categorize content based on your preferences.

### "Introduction to Vertex Explainable AI \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview)
- Source ID: `site-docs-reference-3`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- References For feature attribution, the implementations of sampled Shapley, integrated gradients, and XRAI are based on the following references, respectively: Bounding the Estimation Error of Sampling-based Shapley Value Approximation Axiomatic Attribution for Deep Networks XRAI: Better Attributions Through Regions Notebooks To get started using Vertex Explainable AI, use these notebooks: Notebook Explainability method ML framework Modality Task GitHub link example-based explanations TensorFlow image Train a classification model that predicts the class of the provided input image and get online explanations GitHub link feature-based AutoML tabular Train a binary classification model that predicts whether a bank custom purchased a term deposit and get batch explanations GitHub link feature-based AutoML tabular Train a classification model that predicts the type of Iris flower species and get online explanations GitHub link feature-based (sampled Shapley) scikit-learn tabular Train a linear regression model that predicts taxi fares and get online explanations GitHub link feature-based (integrated gradients) TensorFlow image Train a classification model that predicts the class of the provided input image and get batch explanations GitHub link feature-based (integrated gradients) TensorFlow image Train a classification model that predicts the class of the provided input image and get online explanations GitHub link feature-based (integrated gradients) TensorFlow tabular Train a regression model that predicts the median price of a house and get batch explanations GitHub link feature-based (integrated gradients) TensorFlow tabular Train a regression model that predicts the median price of a house and get online explanations GitHub link feature-based (sampled Shapley) TensorFlow text Train a LSTM model that classifies movie reviews as positive or negative using the text of the review and get online explanations Educational resources The following resources provide further useful educational material: Explainable AI for Practitioners Interpretable Machine Learning: Shapley values Ankur Taly's Integrated Gradients GitHub repository .
- Vertex Explainable AI offers Feature-based and Example-based explanations to provide better understanding of model decision making.
- Example-based explanations With example-based explanations, Vertex AI uses nearest neighbor search to return a list of examples (typically from the training set) that are most similar to the input.
- Feature-based explanations Vertex Explainable AI integrates feature attributions into Vertex AI.

