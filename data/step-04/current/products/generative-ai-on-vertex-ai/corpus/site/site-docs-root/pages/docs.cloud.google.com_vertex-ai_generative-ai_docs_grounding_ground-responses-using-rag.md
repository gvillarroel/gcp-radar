---
title: "Ground responses using RAG \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/ground-responses-using-rag
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/ground-responses-using-rag
  title: "Ground responses using RAG \_|\_ Generative AI on Vertex AI \_|\_ Google\
    \ Cloud Documentation"
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
Ground responses using RAG
Stay organized with collections
Save and categorize content based on your preferences.
Grounding is a technique that you can use to help produce model responses that
are more trustworthy, helpful, and factual. When you ground generative AI model
responses, you connect them to verifiable sources of information. To implement
grounding, usually, you must retrieve relevant source data. The
recommended best practice is to use the retrieval-augmented generation (RAG)
technique. Retrieval is usually done using a search engine, which uses an index
that's embedded with the semantic meanings of the source text.
There are also services and component APIs that implement the RAG lifecycle,
such as the Vertex AI Search Builder API, which allows for mix-and-match
building. With mix-and-match building, you can implement a RAG solution using
any of the following services or APIs:
Grounding generation API : You can use it to implement grounding, or link
to a retrieval provider for the complete RAG lifecycle.
Document layout parser : This parser represents the best of
Document AI and Gemini for document understanding. For more
information about the layout parser, see
Use the layout parser .
Vertex AI Vector Search : This search service is
highly performant and uses a high-quality vector database.
Check grounding API : This API compares RAG output with the retrieved facts
and helps to ensure that all statements are grounded before returning the
response to the user.
Ground responses using Vertex AI RAG Engine
To ground responses using Vertex AI RAG Engine, you must create a
prompt. Do the following:
In the Google Cloud console, go to the Create prompt page using
Vertex AI Studio.
Go to Create prompt
Select Grounding: Your data .
Select RAG Engine grounding source.
From the Corpus list, select your corpus name.
In the Top-K Similarity field, select 20 , which is the default.
Click Save .
What's next
To learn more about responsible AI and safety filters, see
responsible AI best practices and Vertex AI's safety filters .
To learn more about how RAG is implemented by RAG Engine, see
RAG Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
