---
title: "Method: publishers.models.streamGenerateContent \_|\_ Generative AI on Vertex\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/streamGenerateContent
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/streamGenerateContent
  title: "Method: publishers.models.streamGenerateContent \_|\_ Generative AI on Vertex\
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
Generative AI on Vertex AI
API reference
Send feedback
Method: publishers.models.streamGenerateContent
Stay organized with collections
Save and categorize content based on your preferences.
Generate content with multimodal inputs in express mode with streaming support.
Endpoint
post
https: / /aiplatform.googleapis.com /v1 /{model}:streamGenerateContent
Path parameters
model
string
Required. The fully qualified name of the publisher model to use.
Publisher model format: publishers/google/models/*
Request body
The request body contains data with the following structure:
Fields
contents[]
object ( Content )
Required. The content of the current conversation with the model.
For single-turn queries, this is a single instance. For multi-turn queries, this is a repeated field that contains conversation history + latest request.
tools[]
object ( Tool )
Optional. A list of Tools the model may use to generate the next response.
A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model.
toolConfig
object ( ToolConfig )
Optional. Tool config. This config is shared for all tools provided in the request.
labels
map (key: string, value: string)
Optional. The labels with user-defined metadata for the request. It is used for billing and reporting only.
label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. label values are optional. label keys must start with a letter.
safetySettings[]
object ( SafetySetting )
Optional. Per request settings for blocking unsafe content. Enforced on GenerateContentResponse.candidates.
generationConfig
object ( GenerationConfig )
Optional. Generation config.
systemInstruction
object ( Content )
Optional. The user provided system instructions for the model. Note: only text should be used in parts and content in each part will be in a separate paragraph.
Response body
If successful, the response body contains a stream of GenerateContentResponse instances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
