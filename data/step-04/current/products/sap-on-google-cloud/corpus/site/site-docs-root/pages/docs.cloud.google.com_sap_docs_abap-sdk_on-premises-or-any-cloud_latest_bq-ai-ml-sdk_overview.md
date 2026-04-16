---
title: "BigQuery AI and ML SDK for ABAP overview \_|\_ SAP on Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/bq-ai-ml-sdk/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/bq-ai-ml-sdk/overview
  title: "BigQuery AI and ML SDK for ABAP overview \_|\_ SAP on Google Cloud \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
SAP on Google Cloud
Guides
Send feedback
BigQuery AI and ML SDK for ABAP overview
Stay organized with collections
Save and categorize content based on your preferences.
On-premises or any cloud edition v1.13 keyboard_arrow_down
SAP BTP edition v1.1
On-premises or any cloud edition v1.13
The BigQuery AI and ML SDK for ABAP streamlines the integration of AI and ML
capabilities on BigQuery from ABAP applications and ABAP based AI Agents.
The BigQuery AI and ML SDK for ABAP is built on top of the ABAP SDK for Google Cloud.
The SDK is available only with the on-premises or any cloud edition of ABAP SDK for Google Cloud .
Why use the BigQuery AI and ML SDK for ABAP
The BigQuery AI and ML SDK for ABAP provides dedicated toolsets to support
your generative AI-based ABAP agents or applications with the BigQuery AI and ML capabilities.
With the BigQuery AI and ML SDK for ABAP, you can use the following capabilities from your ABAP environment:
Use Gemini to analyze your enterprise data in BigQuery.
Generate and manage embeddings for enterprise data in BigQuery
to make BigQuery as your low-cost vector database.
Perform vector search on your enterprise data in
BigQuery for similarity search or to RAG your model.
The following diagram shows how to use the BigQuery AI and ML capabilities through the BigQuery AI and ML SDK for ABAP:
As shown in the preceding diagram, the user flow with the BigQuery AI and ML SDK for ABAP is as follows:
The user invokes an ABAP AI application or an AI agent with an input prompt.
The AI agent uses the BigQuery AI and ML SDK for ABAP to use the AI and ML capabilities on source data in BigQuery.
The BigQuery AI and ML SDK for ABAP performs the following for the AI agent:
Generates Gemini-driven insight on enterprise data stored in BigQuery.
Delivers ML model-driven predictions on enterprise data stored in BigQuery.
Generates and manages embeddings in BigQuery.
Performs vector similarity search in BigQuery.
The BigQuery AI and ML SDK for ABAP responds to the AI agent with the AI and ML
insights based on the invoked BigQuery module and the user prompt.
Get started with the BigQuery AI and ML SDK for ABAP
Store and manage enterprise queries
Store, manage, and share frequently used enterprise queries centrally within BigQuery.
Get Gemini insights on BigQuery data
Use Gemini to analyze your enterprise data stored in BigQuery.
Generate and manage embeddings
Generate and manage embeddings for your enterprise data stored in BigQuery.
Perform vector similarity search
Perform vector similarity search on your enterprise data stored in BigQuery.
Pricing
The BigQuery AI and ML SDK for ABAP is offered at no cost. However, you are responsible
for the charges for the compute resources that you use to train models
and to run queries against models.
The type of model that you create affects
where the model is trained and the pricing that applies to that operation.
Queries against models always run in BigQuery and use
BigQuery compute pricing .
Because remote models make calls to Vertex AI models, queries against
remote models also incur charges from Vertex AI.
You are charged for the storage used by trained models, using BigQuery storage pricing .
For more information, see BigQuery ML pricing .
What's next
Learn how to install and configure the BigQuery AI and ML SDK for ABAP .
Ask your questions and discuss the BigQuery AI and ML SDK for ABAP with the community
on
Cloud Forums .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
