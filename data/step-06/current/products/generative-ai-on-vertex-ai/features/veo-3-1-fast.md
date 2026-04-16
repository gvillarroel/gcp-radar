---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.652Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Veo 3.1 Fast"
feature_slug: "veo-3-1-fast"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook"
keywords:
  - "veo"
  - "fast"
  - "is"
  - "generally"
  - "available"
  - "for"
  - "video"
  - "generation"
---

# Veo 3.1 Fast

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Veo 3.1 Fast is generally available for video generation; Veo 3.1 Fast is a fast preview model for Veo video generation.

## Extended Definition

Veo 3.1 Fast is generally available for video generation; Veo 3.1 Fast is a fast preview model for Veo video generation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook)

## Supporting Pages

### "Veo on Vertex AI video generation prompt guide \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples of actions that you can use: Basic movements : walking, running, jumping, flying, swimming, dancing, spinning, falling, standing still, sitting Interactions : talking, laughing, arguing, hugging, fighting, playing a game, cooking, building, writing, reading, observing Emotional expressions : smiling, frowning, surprise, concentrating deeply, appearing thoughtful, showing excitement, crying Subtle actions : a gentle breeze ruffling hair, leaves rustling, a subtle nod, fingers tapping impatiently, eyes blinking slowly Transformations or processes : a flower blooming in fast-motion, ice melting, a city skyline developing over time (however, keep clip length in mind for events that occur over a longer period) Example The following video and prompt demonstrate directing a story by sequencing actions and emotional changes: "A gloved hand carefully slices open the spine of an ancient, leather-bound book with a scalpel.
- What's next Best practices for Veo on Vertex AI Generate videos with Veo on Vertex AI from text prompts Generate videos with Veo on Vertex AI from an image Generate videos with Veo on Vertex AI using first and last video frames Extend Veo on Vertex AI-generate videos Understand responsible AI and usage guidelines for Veo on Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following are examples of scene or context that you can use: Location (interior) : a cozy living room with a crackling fireplace, a sterile futuristic laboratory, a cluttered artist's studio, a grand ballroom, a dusty attic Location (exterior) : a sun-drenched tropical beach, a misty ancient forest, a bustling futuristic cityscape at night, a serene mountain peak at dawn, a desolate alien planet Time of day : golden hour, midday sun, twilight, deep night, pre-dawn Weather : clear blue sky, overcast and gloomy, light drizzle, heavy thunderstorm with visible lightning, gentle snowfall, swirling fog Historical or fantastical period : a medieval castle courtyard, a roaring 1920s jazz club, a cyberpunk alleyway, an enchanted forest glade Atmospheric details : floating dust motes in a sunbeam, shimmering heat haze, reflections on wet pavement, leaves scattered by the wind Example The following video demonstrates building an immersive world: "The scene is a rain-slicked, crumbling street in a forgotten city, shrouded in perpetual twilight.
- The following are examples of subjects that you can use: People : Generic descriptors : man, woman, elderly person Specific professions : "a seasoned detective", "a joyful baker", "a futuristic astronaut" Historical figures Mythical beings : a "mischievous fairy", "a stoic knight" Animals or creatures : Specific breeds of animals : "a playful Golden Retriever puppy", "a majestic bald eagle", "a sleek black panther" Fantastical creatures : "a miniature dragon with iridescent scales", "a wise, ancient talking tree" Objects : Everyday items : "a vintage typewriter", "a steaming cup of coffee", "a worn leather-bound book" Vehicles : "a classic 1960s muscle car", "a futuristic hovercraft", "a weathered pirate ship" Abstract shapes : "glowing orbs", "crystalline structures" You can combine people, animals, objects, or any mix of them in the same video (for example, "A group of diverse friends laughing around a campfire while a curious fox watches from the shadows", "a busy marketplace scene with vendors and shoppers").

### "Responsible AI for Veo on Vertex AI video generation \_|\_ Generative AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Responsible AI for Veo on Vertex AI video generation Stay organized with collections Save and categorize content based on your preferences.
- The following table displays the support code to safety category mappings: Support code Safety category Description 58061214 17301594 Child Rejects requests to generate content depicting children if personGeneration isn't set to "allow all" or if the project isn't on the allowlist for this feature.
- Prompts that are provided to Veo are assessed against a list of safety filters, which include harmful categories (for example, violence , sexual , derogatory , and toxic ).
- If fewer videos than requested are returned, then some generated output is being blocked for not meeting safety requirements.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- However, for generative tasks like summarization and text generation, other metrics like Rough-L score might be more appropriate. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature extraction In the context of generative AI, feature extraction refers to the process of identifying and selecting relevant features from input data to be used in model training.
- This is done by transforming existing examples to create additional, varied examples, which can improve model performance, especially when the original dataset is limited. bounding box A bounding box for an object in the video frame can be specified in either of two ways (i) Using 2 vertices consisting of a set of x,y coordinates if they are diagonally opposite points of the rectangle.
- The format is as follows: projects/PROJECT ID OR NUMBER/locations/REGION/tensorboards/TENSORBOARD INSTANCE ID. time offset Time offset is relative to the beginning of a video. time series metrics Time series metrics are longitudinal metric values where each value represents a step in the training routine portion of a run.
- A model that can generalize is the opposite of a model that is overfitting. generation In the context of generative AI, "generation" refers to the process of creating new data or content from existing data or information.

### Generative AI on Vertex AI Cookbook \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- View on GitHub Multimodal Veo Veo 3 Video Generation In this tutorial, you will learn how to use the Google Gen AI SDK for Python to interact with Veo 3 and generate new videos from text prompts.
- View on GitHub Multimodal Veo Veo 3 Video Generation In this tutorial, you will learn how to use the Google Gen AI SDK for Python to interact with Veo 3 and generate new videos from text prompts.
- View on GitHub Agent engine Gemini Langchain Deploying a RAG Application with AlloyDB to Agent Engine View on GitHub Agent engine Agents Gemini Rag Search Building a Conversational Search Agent with Agent Engine and RAG on Vertex AI Search View on GitHub Agent engine Agents Gemini Langgraph Rag Building a Multi-Agent RAG Application with LangGraph and Agent Engine View on GitHub Agent engine Gemini Langgraph Rag Deploying a RAG Application with Cloud SQL for PostgreSQL to Agent Engine View on GitHub Agent engine Agents Gemini Building and Deploying a Google Maps API Agent with Agent Engine View on GitHub Agent engine Gemini Langgraph Building and Deploying a LangGraph Application with Agent Engine in Vertex AI View on GitHub Gemini Multimodal YouTube Video Analysis with Gemini View on GitHub Gemini Multimodal Vector search Building a Multimodal Chatbot for Warranty Claims using Gemini and Vector Search in Vertex AI View on GitHub Gemini Multimodal Rag Multimodal Retrieval Augmented Generation (RAG) using Gemini API in Vertex AI View on GitHub Gemini Llamaindex Rag LlamaIndex with Vertex AI Vector Search to perform question answering RAG View on GitHub Gemini Langchain Multimodal Rag Multimodal Retrieval Augmented Generation (RAG) with Gemini, Vertex AI Vector Search, and LangChain View on GitHub Gemini Rag Small-to-big Retrieval-Augmented Generation View on GitHub Gemini Prompting ReAct (Reasoning + Acting) + Custom tool for Healthcare NL API + Gemini + LangChain View on GitHub Gemini Prompting Using Gemini in Education View on GitHub Gemini Prompting AI Quick Build Experience View on GitHub Gemini Multimodal Rag Code Retrieval Augmented Generation (RAG) with Gemini API View on GitHub Gemini Multimodal Product listing generation with Gemini View on GitHub Gemini Multimodal Multimodal retail recommendation: using Gemini to recommend items based on images and image reasoning View on GitHub Gemini Multimodal Prompting Sheet Music Analysis with Gemini View on GitHub Gemini Multimodal Analyzing movie posters in BigQuery with Gemini View on GitHub Gemini Langchain Getting Started with LangChain 🦜️🔗 + Gemini API in Vertex AI View on GitHub Agents Gemini Building a Weather Agent with AutoGen and Gemini View on GitHub Gemini Prompting Vertex AI Prompt Optimizer Notebook UI View on GitHub Gemini Prompting Vertex AI Prompt Optimizer - Tool usage View on GitHub Gemini Prompting Vertex AI Prompt Optimizer - Custom metric View on GitHub Gemini Prompting Intro to Vertex AI Prompt Optimizer View on GitHub Gemini Prompting Text Summarization with Generative Models on Vertex AI View on GitHub Gemini Prompting Ideation with Generative Models on Vertex AI View on GitHub Gemini Prompting Chain of Thought & ReAct View on GitHub Gemini Prompting Question Answering with Generative Models on Vertex AI View on GitHub Gemini Prompting Text Classification with Generative Models on Vertex AI View on GitHub Gemini Prompting Text Extraction with Generative Models on Vertex AI View on GitHub Gemini Tuning Supervised Fine Tuning with Gemini 2.0 Flash for Change Detection View on GitHub Gemini Tuning Supervised Fine-Tuning with Gemini 2.0 Flash for Q & A View on GitHub Gemini Tuning Supervised Fine Tuning with Gemini 2.0 Flash for Image Captioning View on GitHub Evaluation Gemini Model garden Use Gen AI Evaluation SDK to Evaluate Models in Vertex AI Studio, Model Garden, and Model Registry View on GitHub Evaluation Gemini Rag Evaluate Generated Answers from RAG using Rapid Evaluation and Dataflow ML with Vertex AI Pipelines View on GitHub Evaluation Gemini Enhancing Quality and Explainability with Vertex AI Evaluation View on GitHub Evaluation Gemini Evaluate and Compare Gen AI Model Settings View on GitHub Evaluation Gemini Bring-Your-Own-Autorater using Custom Metrics View on GitHub Evaluation Gemini Evaluate a Translation Model View on GitHub Evaluation Gemini Compare and Migrate from PaLM to Gemini Model View on GitHub Evaluation Gemini Multimodal Evaluating Multimodal Tasks View on GitHub Evaluation Gemini Langchain Evaluate LangChain View on GitHub Evaluation Gemini Compare Generative AI Models View on GitHub Evaluation Gemini Rag Evaluate Generated Answers from RAG for QA with Gen AI Evaluation Service SDK View on GitHub Evaluation Gemini Customize Model-based Metrics to Evaluate a Gen AI Model View on GitHub Evaluation Gemini Rag Evaluate Generative Model Tool Use View on GitHub Gemini Prompting Rag Security Gen AI and LLM Security - ReAct and RAG Attacks & Mitigations View on GitHub Gemini Security Responsible AI with Gemini API in Vertex AI: Safety Ratings and Thresholds View on GitHub Batch prediction Gemini Monitor Batch Prediction with Gemini API View on GitHub Imagen Multimodal Imagen 3 Customized Images View on GitHub Gemini Imagen Multimodal Create High Quality Visual Assets with Imagen and Gemini View on GitHub Imagen Multimodal Create a Photoshop Document with Image Segmentation on Vertex AI View on GitHub Gemini Imagen Multimodal Enhance Imagen Prompts with Gemini View on GitHub Imagen Multimodal Image Segmentation on Vertex AI View on GitHub Search Vertex AI Search with Filters & Metadata View on GitHub Gemini Search Vertex AI Search - Querying Blended Data Apps and Summarization with Gemini View on GitHub Search Create a Vertex AI Search Datastore and Search Engine View on GitHub Search Building Search Applications with Vertex AI Search View on GitHub Gemini Langchain Rag Search Question Answering Over Documents View on GitHub Gemini Rag Search Bulk Question Answering with Vertex AI Search View on GitHub Embeddings Search Custom Embeddings with Vertex AI Search View on GitHub Chirp Speech Get Started with Chirp 2 - Advanced Features View on GitHub Claude Function calling Model garden Multimodal Function Calling with Claude Models View on GitHub Agents Search Vertex AI Search and Conversation Data Store Status Checker View on GitHub Agents Gemini Building a Research Multi Agent System - a Design Pattern Overview with Gemini 2.0 View on GitHub Code execution Gemini Intro to Generating and Executing Python Code with Gemini 2.0 View on GitHub Agents Evaluation Gemini Evaluating Agents - Evaluate a CrewAI agent with Vertex AI Gen AI Evaluation View on GitHub Agents Evaluation Gemini Langgraph Evaluating Agents - Evaluate a LangGraph agent with Vertex AI Gen AI Evaluation View on GitHub Gemini Live api Multimodal Rag Interactive Loan Application Assistant (Financial Services) View on GitHub Rag Rag engine Search Vertex AI RAG Engine with Vertex AI Search View on GitHub Agent engine Agents Evaluation Evaluate a CrewAI agent on Vertex AI Agent Engine (Customized template) View on GitHub Agent engine Agents Evaluation Langchain Evaluating a LangChain Agent on Vertex AI Agent Engine (Prebuilt template) View on GitHub Agent engine Agents Evaluation Langgraph Evaluate a LangGraph agent on Vertex AI Agent Engine (Customized template) View on GitHub Gemini Search Q&A Chatbot with Vertex AI Search for summarized website results View on GitHub Gemini Getting started with Gemini using Vertex AI in Express Mode View on GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View on GitHub All Tutorials Filter by: Agent Engine Agents Batch Prediction Chirp Claude Code Execution Embeddings Evaluation Function Calling Gemini Gemma Grounding Hugging Face Image Generation Imagen LangChain LangGraph Live API LlamaIndex Model Garden Multimodal Orchestration Prompting RAG RAG Engine Search Security Speech Thinking Tuning Vector Search Veo Workspace Function calling Gemini Grounding Multimodal Prompting Thinking Intro to Gemini 3 Pro Get started with Gemini 3 Pro in Vertex AI with the Gen AI Python SDK.

