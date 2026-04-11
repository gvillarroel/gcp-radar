---
title: "Method: publishers.models.countTokens \_|\_ Generative AI on Vertex AI \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens
  title: "Method: publishers.models.countTokens \_|\_ Generative AI on Vertex AI \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
API reference
Send feedback
Method: publishers.models.countTokens
Stay organized with collections
Save and categorize content based on your preferences.
Perform a token count in express mode.
Endpoint
post
https: / /aiplatform.googleapis.com /v1 /{model}:countTokens
Path parameters
model
string
Required. The name of the model requested to perform token counting. Format: /publishers/google/models/*
Request body
The request body contains data with the following structure:
Fields
model
string
Optional. The name of the publisher model requested to serve the prediction. Format: publishers/*/models/*
instances[]
value ( Value format)
Optional. The instances that are the input to token counting call. Schema is identical to the prediction schema of the underlying model.
contents[]
object ( Content )
Optional. Input content.
tools[]
object ( Tool )
Optional. A list of Tools the model may use to generate the next response.
A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model.
systemInstruction
object ( Content )
Optional. The user provided system instructions for the model. Note: only text should be used in parts and content in each part will be in a separate paragraph.
generationConfig
object ( GenerationConfig )
Optional. Generation config that the model will use to generate the response.
Response body
If successful, the response body contains an instance of CountTokensResponse .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
