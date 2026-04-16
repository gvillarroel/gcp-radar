---
title: "Predictions using TensorFlow and Cloud AI Platform \_|\_ Google Earth Engine\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/tensorflow
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/command_line
source_metadata:
  url: https://developers.google.com/earth-engine/guides/tensorflow
  title: "Predictions using TensorFlow and Cloud AI Platform \_|\_ Google Earth Engine\
    \ \_|\_ Google for Developers"
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
Predictions using TensorFlow and Cloud AI Platform
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
TensorFlow, an open source ML platform, is used in Earth Engine for advanced ML methods, with the API supporting data and imagery export/import in TFRecord format.
The ee.Model package in Earth Engine handles interactions with TensorFlow-backed machine learning models, including creating instances from AI Platform Predictor.
To interact with models hosted on AI Platform, they need to be in TensorFlow's SavedModel format and have compatible input/output formats for TensorProto interchange, which can be facilitated by the Earth Engine CLI's model prepare command.
Using models with ee.Model.fromAiPlatformPredictor() requires sufficient permissions, specifically the ML Engine Model User role.
Image predictions on an ee.Image can be made using model.predictImage() , which returns an ee.Image and handles tiling and output projection adjustments automatically.
Deprecated! This guide uses datasets that may be removed from the
Earth Engine catalog and/or methods that may be removed in future versions of the Earth
Engine API. See instead.
TensorFlow is an open source ML platform that
supports advanced ML methods such as deep learning. This page describes TensorFlow
specific features in Earth Engine. Although TensorFlow models are developed and trained
outside Earth Engine, the Earth Engine API provides methods for exporting training and
testing data in TFRecord format and importing/exporting imagery in TFRecord format. See
the TensorFlow examples page for more information about how to
develop pipelines for using TensorFlow with data from Earth Engine. See
the TFRecord page to learn more about how Earth Engine writes data to
TFRecord files.
ee.Model
The ee.Model package handles interaction with TensorFlow backed machine
learning models.
Interacting with models hosted on AI Platform
A new ee.Model instance can be created with
ee.Model.fromAiPlatformPredictor() . This is an ee.Model object
that packages Earth Engine data into tensors, forwards them as predict requests to
Google AI Platform then automatically
reassembles the responses into Earth Engine data types. Note that depending on the size
and complexity of your model and its inputs, you may wish to
adjust
the minimum node size of your AI Platform model to accommodate a high volume of
predictions.
Earth Engine requires AI Platform models to use TensorFlow's
SavedModel
format. Before a hosted model can interact with Earth Engine, its inputs/outputs need to
be compatible with the TensorProto interchange format, specifically serialized
TensorProtos in base64. To make this easier, the Earth Engine CLI has the
model prepare command that wraps an existing
SavedModel in the required operations to convert input/output formats.
To use a model with ee.Model.fromAiPlatformPredictor() , you must have sufficient
permissions to use the model. Specifically, you (or anyone who uses the model) needs at
least the
ML Engine Model User role . You can inspect and set model permissions from the
models page of the Cloud
Console .
Regions
You should use regional endpoints for your models, specifying the region at model creation,
version creation and in ee.Model.fromAiPlatformPredictor() . Any region will
work (don't use global), but us-central1 is preferred. Don't specify the
REGIONS parameter. If you are are creating a model from the
Cloud Console ,
ensure the regional box is checked.
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
Image Predictions
Use model.predictImage() to make predictions on an ee.Image
using a hosted model. The return type of predictImage() is an
ee.Image which can be added to the map, used in other computations,
exported, etc. Earth Engine will automatically tile the input bands and adjust
the output projection for scale changes and overtiling as needed. (See
the TFRecord doc for more information on how tiling
works). Note that Earth Engine will always forward 3D tensors to your model even when
bands are scalar (the last dimension will be 1).
Nearly all convolutional models will have a fixed input projection (that of the data
on which the model was trained). In this case, set the fixInputProj parameter
to true in your call to ee.Model.fromAiPlatformPredictor() .
When visualizing predictions, use caution when zooming out on a model that has a fixed
input projection. This is for the same reason as described
here . Specifically, zooming to a large spatial scope can result in requests for too
much data and may manifest as slowdowns or rejections by AI Platform.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-11-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-11-03 UTC."],[],["This content outlines using TensorFlow models with Earth Engine, focusing on `ee.Model` for AI Platform interaction. Key actions include creating `ee.Model` instances with `ee.Model.fromAiPlatformPredictor()`, packaging Earth Engine data into tensors for AI Platform prediction requests, and reassembling responses. Models must use TensorFlow's SavedModel format, prepared using the Earth Engine CLI. Image predictions utilize `model.predictImage()`, returning an `ee.Image`. The document warns about costs associated with AI Platform and Cloud Storage and recommend using regional endpoints.\n"]]
