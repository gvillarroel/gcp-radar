---
title: "Cloud Text-to-Speech API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/libraries
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest
  title: "Cloud Text-to-Speech API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Reference
Send feedback
Cloud Text-to-Speech API
Stay organized with collections
Save and categorize content based on your preferences.
Synthesizes natural-sounding speech by applying powerful neural network models.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1beta1.text
REST Resource: v1beta1.voices
REST Resource: v1.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.operations
REST Resource: v1.text
REST Resource: v1.voices
Service: texttospeech.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://texttospeech.googleapis.com/$discovery/rest?version=v1
https://texttospeech.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://texttospeech.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
synthesizeLongAudio
POST /v1beta1/{parent=projects/*/locations/*}:synthesizeLongAudio
Synthesizes long form text asynchronously.
REST Resource: v1beta1.projects.locations.operations
Methods
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.text
Methods
synthesize
POST /v1beta1/text:synthesize
Synthesizes speech synchronously: receive results after all text input has been processed.
REST Resource: v1beta1.voices
Methods
list
GET /v1beta1/voices
Returns a list of Voice supported for synthesis.
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=operations/**}
Deletes a long-running operation.
REST Resource: v1.projects.locations
Methods
synthesizeLongAudio
POST /v1/{parent=projects/*/locations/*}:synthesizeLongAudio
Synthesizes long form text asynchronously.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.text
Methods
synthesize
POST /v1/text:synthesize
Synthesizes speech synchronously: receive results after all text input has been processed.
REST Resource: v1.voices
Methods
list
GET /v1/voices
Returns a list of Voice supported for synthesis.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
