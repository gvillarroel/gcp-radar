---
title: "Batch prediction components \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component
  title: "Batch prediction components \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
Batch prediction components
Stay organized with collections
Save and categorize content based on your preferences.
To learn more,
run the "Learn how to use prebuilt Pipeline Components to train a custom model" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
The BatchPredictionJob resource lets you run an asynchronous
prediction request. Request batch predictions directly from the model
resource. You don't need to deploy the model to an endpoint . For data types
that support both batch and online predictions you can use batch predictions.
This is useful when you don't require an immediate response and want to process
accumulated data by using a single request.
To make a batch prediction, specify an input source and an output location
for Vertex AI to store predictions results. The inputs and outputs
depend on the model type that you're working with. For example, batch
predictions for the AutoML image model type require an input
JSON Lines
file and the name of a Cloud Storage bucket to store the output.
For more information about batch prediction, see
Get batch predictions .
You can use the ModelBatchPredictOp component to access this resource through Vertex AI Pipelines.
API reference
For component reference, see the
Google Cloud SDK reference for Batch prediction components .
For Vertex AI API reference, see the BatchPredictionJob resource page.
Tutorials
Custom training with prebuilt Google Cloud Pipeline Components
Version history and release notes
To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
Technical support contacts
If you have any questions, reach out to
kubeflow-pipelines-components@google.com .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
