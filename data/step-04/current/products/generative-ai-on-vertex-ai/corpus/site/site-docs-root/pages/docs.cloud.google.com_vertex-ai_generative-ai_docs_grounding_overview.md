---
title: "Grounding overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview
  title: "Grounding overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
Grounding overview
Stay organized with collections
Save and categorize content based on your preferences.
To see an example of grounding,
run the "Intro to grounding" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
In generative AI, grounding is the ability to connect model output to verifiable
sources of information. If you provide models with access to specific data
sources, then grounding tethers their output to these data and reduces the
chances of inventing content. This is particularly important in situations where
accuracy and reliability are significant.
Grounding provides the following benefits:
Reduces model hallucinations, which are instances where the model generates
content that isn't factual.
Anchors model responses to your data sources.
Provides auditability by
providing grounding support, which are links to sources.
You can ground supported-model output in Vertex AI in the following ways:
Grounding type
Description
Grounding with Google Search
Connect your model to world knowledge and a wide possible range of
topics using results from Google's search engine.
Grounding with Google Maps
Use Google Maps data with your model to provide more accurate and context-aware responses to your prompts, including geospatial context.
Grounding with Vertex AI Search
Use retrieval-augmented generation (RAG) to connect your model to your website data or your sets of documents stored in Vertex AI Search.
Grounding with Vertex AI RAG Engine
Ground using your data through Vertex AI RAG Engine, which is
a configurable managed RAG service.
Grounding with Elasticsearch
Use retrieval-augmented generation with your existing Elasticsearch indexes and Gemini.
Grounding with your search API
Connect Gemini to your external data sources by grounding with any search API.
Web Grounding for Enterprise
Use a web index suitable for highly-regulated industries to generate grounded responses with compliance controls.
Grounding with Parallel web search
Connect Gemini to an LLM-optimized web index to use the most recent information from the web.
For language support, see
Supported languages for prompts .
What's next
To learn more about responsible AI best practices and Vertex AI's
safety filters, see Responsible AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
