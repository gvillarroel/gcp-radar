---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.682Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Agent monitoring"
feature_slug: "agent-monitoring"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook"
keywords:
  - "agent"
  - "monitoring"
  - "lets"
  - "you"
  - "observe"
  - "and"
  - "troubleshoot"
  - "agents"
---

# Agent monitoring

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Agent monitoring lets you observe and troubleshoot agents in Vertex AI Agent Engine.

## Extended Definition

Agent monitoring lets you observe and troubleshoot agents in Vertex AI Agent Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Agent Engine handles the infrastructure to scale agents in production so you can focus on creating applications.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Generative AI glossary Stay organized with collections Save and categorize content based on your preferences. agent In the context of generative AI, an agent is software that autonomously plans and executes a series of actions in pursuit of a goal, potentially in novel situations.
- When the agent applies an action to the environment, then the environment transitions between states. evaluation (eval) An eval, short for "evaluation", is a type of experiment in which logged or synthetic queries are sent through two Search stacks--an experimental stack that includes your change and a base stack without your change.
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- This feature lets your AI agents understand physical movement, real-time travel estimates, and the spatial relationships between locations.
- This data gives you access to information on over 250 million places that can be used to ground your model's responses, enabling your AI applications and agents to provide local data and geospatial context.
- Search Along Route allows your AI agents to discover points of interest that are geographically relevant and convenient to a user's planned journey.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Grounding with Parallel Web Search \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Automated agents that run autonomously to perform automated tasks, like news analysis and KYC checks.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " TEXT " }] }], "tools": [{ "parallelAiSearch": { "api key": " API KEY ", "customConfigs": { "source policy": { "exclude domains": [" EXCLUDE DOMAINS "], "include domains": [" INCLUDE DOMAINS "], }, "excerpts": { "max chars per result": MAX CHARS PER RESULT , "max chars total": MAX CHARS TOTAL }, "max results": MAX RESULTS } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following.

### Generative AI on Vertex AI Cookbook \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- View on GitHub Agent engine Gemini Langchain Deploying a RAG Application with AlloyDB to Agent Engine View on GitHub Agent engine Agents Gemini Rag Search Building a Conversational Search Agent with Agent Engine and RAG on Vertex AI Search View on GitHub Agent engine Agents Gemini Langgraph Rag Building a Multi-Agent RAG Application with LangGraph and Agent Engine View on GitHub Agent engine Gemini Langgraph Rag Deploying a RAG Application with Cloud SQL for PostgreSQL to Agent Engine View on GitHub Agent engine Agents Gemini Building and Deploying a Google Maps API Agent with Agent Engine View on GitHub Agent engine Gemini Langgraph Building and Deploying a LangGraph Application with Agent Engine in Vertex AI View on GitHub Gemini Multimodal YouTube Video Analysis with Gemini View on GitHub Gemini Multimodal Vector search Building a Multimodal Chatbot for Warranty Claims using Gemini and Vector Search in Vertex AI View on GitHub Gemini Multimodal Rag Multimodal Retrieval Augmented Generation (RAG) using Gemini API in Vertex AI View on GitHub Gemini Llamaindex Rag LlamaIndex with Vertex AI Vector Search to perform question answering RAG View on GitHub Gemini Langchain Multimodal Rag Multimodal Retrieval Augmented Generation (RAG) with Gemini, Vertex AI Vector Search, and LangChain View on GitHub Gemini Rag Small-to-big Retrieval-Augmented Generation View on GitHub Gemini Prompting ReAct (Reasoning + Acting) + Custom tool for Healthcare NL API + Gemini + LangChain View on GitHub Gemini Prompting Using Gemini in Education View on GitHub Gemini Prompting AI Quick Build Experience View on GitHub Gemini Multimodal Rag Code Retrieval Augmented Generation (RAG) with Gemini API View on GitHub Gemini Multimodal Product listing generation with Gemini View on GitHub Gemini Multimodal Multimodal retail recommendation: using Gemini to recommend items based on images and image reasoning View on GitHub Gemini Multimodal Prompting Sheet Music Analysis with Gemini View on GitHub Gemini Multimodal Analyzing movie posters in BigQuery with Gemini View on GitHub Gemini Langchain Getting Started with LangChain 🦜️🔗 + Gemini API in Vertex AI View on GitHub Agents Gemini Building a Weather Agent with AutoGen and Gemini View on GitHub Gemini Prompting Vertex AI Prompt Optimizer Notebook UI View on GitHub Gemini Prompting Vertex AI Prompt Optimizer - Tool usage View on GitHub Gemini Prompting Vertex AI Prompt Optimizer - Custom metric View on GitHub Gemini Prompting Intro to Vertex AI Prompt Optimizer View on GitHub Gemini Prompting Text Summarization with Generative Models on Vertex AI View on GitHub Gemini Prompting Ideation with Generative Models on Vertex AI View on GitHub Gemini Prompting Chain of Thought & ReAct View on GitHub Gemini Prompting Question Answering with Generative Models on Vertex AI View on GitHub Gemini Prompting Text Classification with Generative Models on Vertex AI View on GitHub Gemini Prompting Text Extraction with Generative Models on Vertex AI View on GitHub Gemini Tuning Supervised Fine Tuning with Gemini 2.0 Flash for Change Detection View on GitHub Gemini Tuning Supervised Fine-Tuning with Gemini 2.0 Flash for Q & A View on GitHub Gemini Tuning Supervised Fine Tuning with Gemini 2.0 Flash for Image Captioning View on GitHub Evaluation Gemini Model garden Use Gen AI Evaluation SDK to Evaluate Models in Vertex AI Studio, Model Garden, and Model Registry View on GitHub Evaluation Gemini Rag Evaluate Generated Answers from RAG using Rapid Evaluation and Dataflow ML with Vertex AI Pipelines View on GitHub Evaluation Gemini Enhancing Quality and Explainability with Vertex AI Evaluation View on GitHub Evaluation Gemini Evaluate and Compare Gen AI Model Settings View on GitHub Evaluation Gemini Bring-Your-Own-Autorater using Custom Metrics View on GitHub Evaluation Gemini Evaluate a Translation Model View on GitHub Evaluation Gemini Compare and Migrate from PaLM to Gemini Model View on GitHub Evaluation Gemini Multimodal Evaluating Multimodal Tasks View on GitHub Evaluation Gemini Langchain Evaluate LangChain View on GitHub Evaluation Gemini Compare Generative AI Models View on GitHub Evaluation Gemini Rag Evaluate Generated Answers from RAG for QA with Gen AI Evaluation Service SDK View on GitHub Evaluation Gemini Customize Model-based Metrics to Evaluate a Gen AI Model View on GitHub Evaluation Gemini Rag Evaluate Generative Model Tool Use View on GitHub Gemini Prompting Rag Security Gen AI and LLM Security - ReAct and RAG Attacks & Mitigations View on GitHub Gemini Security Responsible AI with Gemini API in Vertex AI: Safety Ratings and Thresholds View on GitHub Batch prediction Gemini Monitor Batch Prediction with Gemini API View on GitHub Imagen Multimodal Imagen 3 Customized Images View on GitHub Gemini Imagen Multimodal Create High Quality Visual Assets with Imagen and Gemini View on GitHub Imagen Multimodal Create a Photoshop Document with Image Segmentation on Vertex AI View on GitHub Gemini Imagen Multimodal Enhance Imagen Prompts with Gemini View on GitHub Imagen Multimodal Image Segmentation on Vertex AI View on GitHub Search Vertex AI Search with Filters & Metadata View on GitHub Gemini Search Vertex AI Search - Querying Blended Data Apps and Summarization with Gemini View on GitHub Search Create a Vertex AI Search Datastore and Search Engine View on GitHub Search Building Search Applications with Vertex AI Search View on GitHub Gemini Langchain Rag Search Question Answering Over Documents View on GitHub Gemini Rag Search Bulk Question Answering with Vertex AI Search View on GitHub Embeddings Search Custom Embeddings with Vertex AI Search View on GitHub Chirp Speech Get Started with Chirp 2 - Advanced Features View on GitHub Claude Function calling Model garden Multimodal Function Calling with Claude Models View on GitHub Agents Search Vertex AI Search and Conversation Data Store Status Checker View on GitHub Agents Gemini Building a Research Multi Agent System - a Design Pattern Overview with Gemini 2.0 View on GitHub Code execution Gemini Intro to Generating and Executing Python Code with Gemini 2.0 View on GitHub Agents Evaluation Gemini Evaluating Agents - Evaluate a CrewAI agent with Vertex AI Gen AI Evaluation View on GitHub Agents Evaluation Gemini Langgraph Evaluating Agents - Evaluate a LangGraph agent with Vertex AI Gen AI Evaluation View on GitHub Gemini Live api Multimodal Rag Interactive Loan Application Assistant (Financial Services) View on GitHub Rag Rag engine Search Vertex AI RAG Engine with Vertex AI Search View on GitHub Agent engine Agents Evaluation Evaluate a CrewAI agent on Vertex AI Agent Engine (Customized template) View on GitHub Agent engine Agents Evaluation Langchain Evaluating a LangChain Agent on Vertex AI Agent Engine (Prebuilt template) View on GitHub Agent engine Agents Evaluation Langgraph Evaluate a LangGraph agent on Vertex AI Agent Engine (Customized template) View on GitHub Gemini Search Q&A Chatbot with Vertex AI Search for summarized website results View on GitHub Gemini Getting started with Gemini using Vertex AI in Express Mode View on GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View on GitHub Gemini Live api Multimodal Get Started with the Gemini Live API Get started with Gemini Live API in Vertex AI using the Gen AI Python SDK View on GitHub Gemini Search Intro to Gemini Enterprise Unlock your company's data with Gemini Enterprise, the AI platform for intelligent search and shareable, automated agents.
- View on GitHub Gemini Live api Multimodal Get Started with the Gemini Live API Get started with Gemini Live API in Vertex AI using the Gen AI Python SDK View on GitHub Gemini Search Intro to Gemini Enterprise Unlock your company's data with Gemini Enterprise, the AI platform for intelligent search and shareable, automated agents.
- View on GitHub Agents Gemini Langchain Langgraph AI Agents for Engineers (Evolution of AI Agents) This notebook demonstrates 3 different approaches to generating essays using the Gemini API, Zero-Shot, Step-by-Step with LangChain, and Iterative with LangGraph.

