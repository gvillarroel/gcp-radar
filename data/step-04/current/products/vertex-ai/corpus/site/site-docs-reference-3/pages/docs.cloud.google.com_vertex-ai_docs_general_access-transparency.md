---
title: "Access Transparency in Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency
  title: "Access Transparency in Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Access Transparency in Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the support Access Transparency
provides for Vertex AI.
Overview
Access Transparency provides you with logs that capture the actions Google
personnel take when accessing your content.
Cloud Audit Logs show when members of your
organization access content in your Google Cloud projects. Similarly,
Access Transparency provides
logs of the actions
taken by Google personnel.
You can
enable Access Transparency
for a Google Cloud project, if the project resides in an organization.
Supported services
Access Transparency supports the following Vertex AI services:
Colab Enterprise
Generative AI on Vertex AI
Vertex AI AutoML training
Vertex AI custom training
Vertex AI Feature Store
Vertex AI Model Monitoring
Vertex AI Pipelines
Vertex AI Inference
Vector Search
Vertex AI TensorBoard
Vertex AI Workbench instances
Vertex AI Workbench managed notebooks
Vertex AI Workbench user-managed notebooks
Vertex Explainable AI
Vertex ML Metadata
Vertex AI Vizier
Vertex AI Agent Engine
Vertex AI model tuning
Limitations of Access Transparency in Vertex AI
All access to your data in Vertex AI by Google personnel is logged,
except for the following scenarios:
Scenarios where Access Transparency logs are excluded in all supported
Google Cloud services
Using custom containers to serve
online inference
or batch inference requests
from custom-trained models
Using Vertex Explainable AI with
custom containers
Using AutoML forecasting-related resources such as forecasting
datasets and forecasting models.
Using the following components:
Generative AI on Vertex AI: Online inference (Vision)
Vertex AI Vizier
Vertex AI RAG Engine
Vertex AI Vector Search 2.0
What's next
Learn about the content of Access Transparency logs .
Learn when you would use Access Transparency .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
