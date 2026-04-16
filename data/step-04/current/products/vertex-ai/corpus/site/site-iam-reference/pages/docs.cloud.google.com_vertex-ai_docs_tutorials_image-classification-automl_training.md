---
title: "Hello image data: Train an AutoML image classification model \_|\_ Vertex\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/training
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/general/access-control
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/training
  title: "Hello image data: Train an AutoML image classification model \_|\_ Vertex\
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
Hello image data: Train an AutoML image classification model
Stay organized with collections
Save and categorize content based on your preferences.
Use the Google Cloud console to train an AutoML image classification model.
After your dataset is created and data is imported, use the
Google Cloud console to review the training images and begin model
training.
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
Review imported images
After the dataset import, you are taken to the Browse tab. You can also access
this tab by selecting Datasets from the menu. Select the
annotation set (set of single-label image annotations) associated with your
new dataset.
Key point: An annotation set is the
collection of annotations associated with a data type and a specific
objective (image data type, classification objective in this case). For more
information about annotation sets , see
Creating an annotation
set .
Go to the Datasets page
Begin AutoML model training
Choose one of the following options to begin training:
Choose Train new model .
Select Models from the menu, and select Create .
Go to the Models page
Select Create to open the Train new model window.
Select Select Training method , and select the target Dataset
if they are not automatically selected. Make sure
the radio_button_checked AutoML
radio button is selected, and then choose CONTINUE .
(Optional) Select Define your model , and enter the Model name . Click CONTINUE .
Select Train options . Select a model option according to your accuracy and latency needs. Optionally, enable incremental training and click CONTINUE .
Incremental training considerations follow:
Incremental training can be enabled when there is at least one base model
that has been trained in this project with the same objective.
Incremental training lets you use an existing base model as a starting point
to train a new model rather than training a new model from scratch.
Incremental training generally helps training to occur faster and saves
training time.
The base model can be trained from a different dataset.
Select Compute and pricing . Specify a node-hour budget of 8 node hours . Select Start training .
Node-hour budget is the maximum time (may vary slightly) that the model
spends training. This value is multiplied by the
price per node hour
to calculate to total training cost. More training hours results in a more
accurate (up to a point) model but results in a higher cost. For development
purposes, a low budget is fine but for production it's important to strike a
balance between cost and accuracy.
Training takes several hours. An email notification is sent when the model training completes.
What's next
Follow the next page of this tutorial to check the
performance of your trained AutoML model and explore ways of making it better.
Follow Deploy a model to an endpoint and make a prediction to deploy your trained AutoML model. An image is sent to the model for prediction.
Previous
arrow_back
Create a dataset and import images
Next
Evaluate and analyze model performance
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
