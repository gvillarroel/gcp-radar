---
title: "Answer generation model versions and lifecycle \_|\_ Vertex AI Search \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models
  title: "Answer generation model versions and lifecycle \_|\_ Vertex AI Search \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Answer generation model versions and lifecycle
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Search offers multiple model versions for you to choose when
generating answers. You can choose the model versions when using search
summaries and answers and
follow-ups .
Available models
Vertex AI Search uses two types of models for question and answering
use cases:
Vertex AI LLM models that have been tested on question and
answering tasks
Vertex AI Search models that are based on Vertex AI LLM
models and further trained to address question and answering tasks
Vertex AI Search models share the same discontinuation date as their
base Vertex AI LLM models. The base LLM model is available for six
months after the release date of the next version of the model, per the Vertex
AI model lifecycle
policy .
Leave enough time to migrate to new models before the discontinuation dates.
The following table lists model version specifications. When you set a model
specification, the API uses the specified model to generate answers.
Model version
Description
Context window
Discontinuation date
stable
The default model choice if the model version is not set.
The stable model specification points to
gemini-2.5-flash/answer_gen/v1 .
The model designated as stable changes periodically as new
models and versions become available.
128K
June 17, 2026
gemini-3.1-pro-preview/answer_gen/v1
The gemini-3.1-pro-preview model.
128K
N/A
gemini-3-flash-preview/answer_gen/v1
The gemini-3-flash-preview model.
128K
N/A
gemini-2.5-flash/answer_gen/v1
The gemini-2.5-flash model.
The model is frozen after release.
128K
June 17, 2026
gemini-2.0-flash-001/answer_gen/v1
The gemini-2.0-flash-001 model.
The model is frozen after release.
128K
March 31, 2026
preview
The preview model specification points to the
gemini-2.5-flash
model. The preview model is subject to change without notification. If
you use preview as the model, you might see changes in the responses when the
model changes. If you want consistency in the responses, select a
specific model.
128K
June 17, 2026
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
