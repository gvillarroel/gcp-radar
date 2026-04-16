---
title: "TensorFlow example workflows \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/tf_examples
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/command_line
source_metadata:
  url: https://developers.google.com/earth-engine/guides/tf_examples
  title: "TensorFlow example workflows \_|\_ Google Earth Engine \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
TensorFlow example workflows
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide provides example workflows demonstrating the use of TensorFlow with Earth Engine, focusing on the Earth Engine Python API and TensorFlow in Colab Notebooks.
The examples cover multi-class prediction with a DNN, hosting DNN models for direct prediction in Earth Engine, implementing logistic regression, and performing regression with an FCNN.
These guides utilize billable Google Cloud components including AI Platform Training, AI Platform Prediction, and Cloud Storage.
For larger models and extended training sessions beyond Colab's free VM limits, training on AI Platform is demonstrated.
Deprecated! This guide uses datasets that may be removed from the
Earth Engine catalog and/or methods that may be removed in future versions of the Earth
Engine API. See Vertex AI example workflows
instead.
This page has example workflows to demonstrate uses of TensorFlow with Earth Engine. See
the TensorFlow page for more details. These examples are
written using the Earth Engine Python API and TensorFlow
running in Colab Notebooks .
Costs
Warning! These guides use billable components of Google Cloud including:
AI Platform Training
( pricing )
AI Platform Prediction
( pricing )
Cloud Storage ( pricing )
You can use the
Pricing Calculator to generate
a cost estimate based on your projected usage.
Multi-class prediction with a DNN
A "deep" neural network (DNN) is simply an artificial neural network (ANN) with one or more
hidden layers. This example demonstrates a very simple DNN with a single hidden layer. The
DNN takes spectral vectors as inputs (i.e. one pixel at a time) and outputs a single class
label and class probabilities per pixel. The Colab notebook below demonstrates creating
the DNN, training it with data from Earth Engine, making predictions on exported imagery and
importing the predictions to Earth Engine.
Run in Google Colab
View source on GitHub
Hostable DNN for prediction in Earth Engine
To get predictions from your trained model directly in Earth Engine (e.g. in the
Code Editor ), you need to host the model
on Google AI Platform. This guide
demonstrates how to save a trained model in
SavedModel
format, prepare the model for hosting with the earthengine model prepare
command, and get predictions in Earth Engine interactively with
ee.Model.fromAiPlatformPredictor .
Run in Google Colab
View source on GitHub
Logistic regression the TensorFlow way
Classical machine learning methods such as logistic regression are natural to implement
in TensorFlow. This notebook demonstrates a logistic regression based deforestation
detector from before and after annual composites. Note that this very simplistic model
is just for demonstration purposes; add a few hidden layers for higher accuracy.
Run in Google Colab
View source on GitHub
Regression with an FCNN
A "convolutional" neural network (CNN) contains one or more convolutional layers, in which
inputs are neighborhoods of pixels, resulting in a network that is not fully-connected, but
is suited to identifying spatial patterns. A fully convolutional neural network (FCNN) does
not contain a fully-connected layer as output. This means that it does not learn a global
output (i.e. a single output per image), but rather localized outputs (i.e. per-pixel).
This Colab notebook demonstrates the use of the
UNET model , an FCNN developed for medical
image segmentation, for predicting a continuous [0,1] output in each pixel from 256x256
neighborhoods of pixels. Specifically, this example shows how to export patches of data to
train the network and how to overtile image patches for inference, to eliminate tile boundary
artifacts.
Run in Google Colab
View source on GitHub
Training on AI Platform
For relatively large models (like the FCNN example), the longevity of the free virtual
machine on which Colab notebooks run may not be sufficient for a long-running training
job. Specifically, if the expected prediction error is not minimized on the evaluation
dataset, then more training iterations may be prudent. For performing large training
jobs in the Cloud, this Colab notebook demonstrates how to
package your training
code , start a
training job , prepare a
SavedModel
with the earthengine model prepare command, and get predictions in Earth
Engine interactively with ee.Model.fromAiPlatformPredictor .
Run in Google Colab
View source on GitHub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-12-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-12-19 UTC."],[],[]]
