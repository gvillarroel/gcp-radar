---
title: "Hello image data: Evaluating and analyzing model performance \_|\_ Vertex\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis
  title: "Hello image data: Evaluating and analyzing model performance \_|\_ Vertex\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Hello image data: Evaluating and analyzing model performance
Stay organized with collections
Save and categorize content based on your preferences.
Use the Google Cloud console to check your model performance. Analyze test
errors to iteratively improve model quality by fixing data issues.
This tutorial has several pages:
Set up your project and environment.
Create an image classification dataset, and
import images.
Train an AutoML image classification
model.
Evaluate and analyze model performance.
Deploy a model to an endpoint, and send a
prediction.
Clean up your project.
Each page assumes that you have already performed the instructions from the
previous pages of the tutorial.
1. Understand AutoML model evaluation results
After training is completed, your model is automatically evaluated against the
test data split. The corresponding evaluation results are presented by clicking
the model's name from either the Model Registry page or the Dataset
page.
From there, you can find the metrics to measure the model's performance.
You can find a more detailed introduction to different evaluation metrics in the
Evaluate, test, and deploy your model section.
2. Analyze test results
If you want to continue improving the model performance, the first step is often
to examine the error cases and investigate the potential causes. The
evaluation page of each class presents detailed test images of the given
class categorized as false negatives, false positives, and true positives. The
definition of each category can be found in the
Evaluate, test, and deploy your model section.
For each image under every category, you can further check the prediction
details by clicking the image and access the detailed analysis results. You will
see the Review similar images panel on the right side of the page, where the
closest samples from the training set are presented with distances measured in
the feature space.
There are two types of data issues that you might want to pay attention:
Label inconsistency. If a visually similar sample from the training set has
different labels from the test sample, it's possible that one of them is
incorrect, or that the subtle difference requires more data for the model to
learn from,
or that the current class labels are simply not accurate enough to describe
the given sample.
Reviewing similar images can help you get the label information accurate by
either correcting the error cases or excluding the problematic sample from
the test set. You can conveniently change the label of either the test image
or training images on the Review similar images panel on the same page.
Outliers. If a test sample is marked as an outlier, it's possible that there
are no visually similar samples in the training set to help train the model.
Reviewing similar images from the training set can help you identify these
samples and add similar images into the training set to further improve the
model performance on these cases.
What's next
If you're happy with the model performance, follow the
next page of this tutorial to deploy your trained
AutoML model to an endpoint and send an image to the model for prediction.
Otherwise, if you make any corrections on the data, train a new model using the
Training an AutoML image classification model
tutorial.
Previous
arrow_back
Train an AutoML image classification model
Next
Deploy a model to an endpoint and make an inference
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
