---
title: "Hosted Model Payload Formats Supported on Earth Engine \_|\_ Google Earth\
  \ Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides
source_metadata:
  url: https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats
  title: "Hosted Model Payload Formats Supported on Earth Engine \_|\_ Google Earth\
    \ Engine \_|\_ Google for Developers"
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
Hosted Model Payload Formats Supported on Earth Engine
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Custom trained models for Earth Engine on Vertex AI need to be configured to receive well-formed inference requests.
Earth Engine constructs inference requests on your behalf and you can specify the payload format using the payloadFormat parameter with ee.Model.fromVertexAi .
gRPC prediction payloads, particularly GRPC_TF_TENSORS , are the preferred method for TensorFlow models due to lower latency and higher reliability, although this is currently an experimental feature requiring specific configurations.
Earth Engine also supports HTTP API payloads with formats like SERIALIZED_TF_TENSORS (default for TensorFlow), RAW_JSON (flexible for other frameworks like PyTorch and AutoML but converts numbers to strings), and ND_ARRAYS (similar to RAW_JSON but without keys, suitable for PyTorch).
Your custom trained model must be configured such that Earth Engine can send
well-formed, interpretable inference requests to the model as it is hosted on
Vertex AI.
Supported Model Inputs
Earth Engine constructs requests on your behalf when performing inference.
Specify the payload format that EE will send requests with using the
payloadFormat parameter when you instantiate the model connector with
ee.Model.fromVertexAi .
gRPC Prediction Payloads
All hosted TensorFlow models can send predictions over the gRPC protocol.
This is the preferred way to connect hosted models with Earth Engine as
it will result in lower prediction latency and higher reliability.
Note: This is an experimental feature. Models that are deployed to Vertex AI
with this enabled must have a gRPC prediction handler implemented and the gRPC
prediction port must be specified when uploading your custom model.
GRPC_TF_TENSORS
Use the GRPC_TF_TENSORS payload format to use gRPC with TensorFlow models.
All properties and or bands will be encoded in a single
PredictRequest .
This PredictRequest will be converted to a dictionary of tensors for your
model to use.
GRPC_SERIALIZED_TF_TENSORS
Use the GRPC_SERIALIZED_TF_TENSORS format if you want to
migrate a Cloud AI Platform model that was previously already integrated with
Earth Engine without having to modify the model. You will need to re-upload and
re-deploy if container_grpc_ports is not set on your model in Vertex AI.
GRPC_SERIALIZED_TF_EXAMPLES
Use the GRPC_SERAILZED_TF_EXAMPLES for models that support tf.Example protocol
buffers. Earth Engine will send a single tensor named "input" that contains the
utf-8 encoded proto ByteString of an Example proto.
HTTP API Payloads
Vertex AI supports connecting to HTTP inference endpoints. Earth Engine supports
several of the common HTTP payload formats. By default all Vertex AI custom
models support the HTTP inference API.
SERIALIZED_TF_TENSORS
This is the default payloadFormat when connecting to a hosted model in Vertex
AI. This payload format is the most efficient of the HTTP payload formats when
using TensorFlow models.
Earth Engine will construct the inputs in the following way: for every band and
property required for your inference request will be a single key-value pair in
the instances object sent to your hosted model.
Each key will be the band or property name and each value will be a
Base64 encoded
TensorProto ByteString as a string_val .
RAW_JSON
For other model frameworks the most flexible format we can send is a JSON
dictionary of named inputs and values. This payload format works well with
PyTorch and AutoML models by default.
However do note that all numerical values will be converted into JSON strings.
For example, to represent the number we encode 12.345 this as the string
"12.345". Large inference payloads are not well supported with this payload
format.
ND_ARRAYS
This is similar to RAW_JSON payload format but will omit the keys and only
pass in a list of numbers in the same format of calling
to_list()
on a NumPy ndarray. This payload format works well with PyTorch natively.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-01 UTC."],[],["Earth Engine (EE) interacts with custom models on Vertex AI via inference requests. Users configure the payload format using `payloadFormat` in `ee.Model.fromVertexAi`. gRPC is preferred for lower latency and higher reliability, using formats like `GRPC_TF_TENSORS`, `GRPC_SERIALIZED_TF_TENSORS`, or `GRPC_SERIALIZED_TF_EXAMPLES`. HTTP API payloads are also supported, including `SERIALIZED_TF_TENSORS` (default for TensorFlow), `RAW_JSON` (for PyTorch/AutoML, converting numbers to strings), and `ND_ARRAYS` (similar to `RAW_JSON`, but without keys). Each format determines how data is sent.\n"]]
