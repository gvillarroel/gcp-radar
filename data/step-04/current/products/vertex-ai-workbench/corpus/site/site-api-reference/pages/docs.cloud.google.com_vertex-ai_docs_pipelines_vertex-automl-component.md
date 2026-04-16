---
title: "Vertex AI AutoML components \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/vertex-automl-component
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/vertex-automl-component
  title: "Vertex AI AutoML components \_|\_ Google Cloud Documentation"
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
Vertex AI AutoML components
Stay organized with collections
Save and categorize content based on your preferences.
The AutoML TrainingPipeline resource orchestrates tasks associated
with training an AutoML model. This resource always executes the
training task, and optionally may also export data from a Vertex AI
Dataset which becomes the training input, upload the Model to
Vertex AI, and evaluate the Model. For information about
AutoML training in Vertex AI, see the
AutoML training documentation . For information
about Google Cloud Pipeline Components related to datasets, see
Dataset components .
The Google Cloud SDK includes the following operators related to
AutoML models and workflows:
Operators related to AutoML forecasting
ProphetTrainerOp
Operators related to AutoML Tabular models
CvTrainerOp
EnsembleOp
FinalizerOp
InfraValidatorOp
SplitMaterializedDataOp
Stage1TunerOp
StatsAndExampleGenOp
TrainingConfiguratorAndValidatorOp
TransformOp
Operators related to AutoML model resource creation
AutoMLForecastingTrainingJobRunOp
AutoMLImageTrainingJobRunOp
AutoMLTabularTrainingJobRunOp
AutoMLTextTrainingJobRunOp
Learn more about training and using your own AutoML models .
API reference
For AutoML component reference, see the
Google Cloud SDK reference for AutoML components .
For Vertex AI API reference, see the following API reference pages:
Dataset resource
TrainingPipeline resource
Tutorials
Learn how to use the Google Cloud pipeline components to train an image classification model using Vertex AI AutoML.
Learn how to use the Google Cloud pipeline components to train a classification model using tabular data and Vertex AI AutoML.
Learn how to use the Google Cloud pipeline components to train a linear regression model using tabular data and Vertex AI AutoML.
Learn how to use the Google Cloud pipeline components to train a text classification model using Vertex AI AutoML.
Learn how to use the Google Cloud pipeline components to upload and deploy a model.
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
