---
title: "Predictions from Hosted Models \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/guides/ee-vertex-overview
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides
source_metadata:
  url: https://developers.google.com/earth-engine/guides/ee-vertex-overview
  title: "Predictions from Hosted Models \_|\_ Google Earth Engine \_|\_ Google for\
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
Predictions from Hosted Models
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Earth Engine uses ee.Model to connect to models hosted on Vertex AI, sending image or table data as online prediction requests.
TensorFlow models can be used with Earth Engine, leveraging its capabilities for advanced machine learning methods and data handling in TFRecord format.
ee.Model.fromVertexAi facilitates interaction with hosted machine learning models, packaging Earth Engine data into tensors, forwarding predictions to Vertex AI, and reassembling responses.
Using a hosted model with ee.Model.fromVertexAi() requires sufficient permissions, specifically the Vertex AI user role for the Cloud Project where the model is hosted.
Costs are associated with using billable components of Google Cloud, including Vertex AI, Cloud Storage, and Earth Engine.
Earth Engine provides ee.Model as a connector to models hosted on
Vertex AI .
Earth Engine will send image or table data as online prediction requests to a
trained model deployed on a Vertex AI endpoint. The model outputs are then
available as Earth Engine images or tables.
TensorFlow Models
TensorFlow is an open source machine learning
(ML) platform that supports advanced ML methods such as deep learning. The Earth
Engine API provides methods for importing and or exporting imagery, training and
testing data in TFRecord format. See the
ML examples page for demonstrations that use
TensorFlow with data from Earth Engine. See the
TFRecord page for details about how Earth
Engine writes data to TFRecord files.
ee.Model
The ee.Model package handles interaction with hosted machine learning models.
Hosted Models on Vertex AI
A new ee.Model instance can be created with
ee.Model.fromVertexAi . This is an
ee.Model object that packages Earth Engine data into tensors, forwards them as
predict requests to Vertex AI then
reassembles the responses into Earth Engine.
Earth Engine supports TensorFlow (e.g. a
SavedModel
format), PyTorch, and AutoML models. To prepare a model for hosting,
save it ,
import it to Vertex AI ,
then
deploy the model to an endpoint .
Input Formats
To interact with Earth Engine, a hosted model's inputs and outputs need to be
compatible with a supported interchange format. The default is the TensorProto
interchange format, specifically serialized TensorProtos in base64
( reference ). This can
be done programmatically, as shown on the
ML examples page , after training and before
saving, or by loading, adding the input and output transformation, and
re-saving. Other supported payload formats include
JSON with RAW_JSON and multi-dimensional arrays with ND_ARRAYS . See our
payload format documentation
for more details.
Endpoint IAM Permissions
To use a model with ee.Model.fromVertexAi() , you must have sufficient
permissions to use the model. Specifically, you (or anyone who uses the model)
needs at least the
Vertex AI user role
for the Cloud Project where the model is hosted. You control permissions for
your Cloud Project using
Identify and Access Management (IAM) controls.
Regions
When deploying your model to an endpoint, you will need to specify which region
to deploy to. The us-central1 region is recommended since it will likely
perform best due to proximity to Earth Engine servers, but almost any region
will work. See the
Vertex AI location docs
for details about Vertex AI regions and what features each one supports.
If you are migrating from AI Platform, note that Vertex AI does not have a
global endpoint, and ee.Model.fromVertexAi() does not have a region
parameter.
Costs
Warning: These guides use billable components of Google Cloud.
For detailed information on costs, see each product's associated pricing page.
Vertex AI ( pricing )
Cloud Storage ( pricing )
Earth Engine
( pricing (commercial) )
You can use the
Pricing Calculator to generate a
cost estimate based on your projected usage.
Further Reading
For more details on how to use a hosted model with Earth Engine see our
Image Prediction page for
image prediction, or our
Properties Prediction page
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-01 UTC."],[],[]]
