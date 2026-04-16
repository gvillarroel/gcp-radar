---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.693Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Nano Banana image generation and editing"
feature_slug: "nano-banana-image-generation-and-editing"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apis"
keywords:
  - "nano"
  - "banana"
  - "image"
  - "generation"
  - "and"
  - "editing"
  - "with"
  - "is"
---

# Nano Banana image generation and editing

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Image generation and editing with Nano Banana is generally available in Gemini Enterprise across the Global, EU, and US multi-regions.

## Extended Definition

Image generation and editing with Nano Banana is generally available in Gemini Enterprise across the Global, EU, and US multi-regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apis](https://docs.cloud.google.com/gemini/enterprise/docs/apis)

## Supporting Pages

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- File formats and size limitations The following table lists the file formats and size limitations for files that you can upload to the assistant: File type Description Images Maximum image size: 30 MB Supported file extensions: .png , .jpeg , .svg Documents Maximum document size: .pdf : 100 MB .xlsx : 50 MB The .xlsx limit applies to the size of the file after it's decompressed. .csv : 7 MB .docx : 3 MB .pptx : 100 MB .txt : 7 MB .md : 2 MB .json : 1 MB .js : 1 MB .html : 0.5 MB .css : 1 MB .java : 1 MB .py : 2 MB Supported file extensions: .pdf , .xlsx , .csv , .docx , .pptx , .txt , .md , .json , .js , .html , .css , .java , .py Video Maximum document size: 200 MB Supported file extensions: .mp4 Audio Maximum document size: 200 MB Supported file extensions: .mp3 Add context with mentions You can mention an agent, person, or uploaded file in your chat with the assistant by typing @ in the chat box.
- If you try to upload a file without this consent, you may encounter an error when signing in to Microsoft Entra ID: "Please ask an admin to grant permission to this app before you can use it." If you encounter this error, copy the URL from your browser's address bar and share it with your administrator, so that they can provide consent on behalf of your organization.
- Chat with files in connectors Gemini Enterprise can analyze content and generate answers from the following connectors: Note: A Gemini Enterprise admin must enable the required actions for the Gemini Enterprise assistant to access the content, allowing you to chat with the files.
- Home Documentation AI and ML Gemini Enterprise Use Gemini Enterprise Send feedback Chat with the assistant Stay organized with collections Save and categorize content based on your preferences.

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- NotebookLM Enterprise Gemini Enterprise Primary Goal Centralized knowledge, content generation from your own documents Enterprise-wide data search, multi-modal content generation, and agent orchestration Input Your uploaded documents, websites, and specific sources Broad queries and data from across enterprise systems (Google and third-party SaaS) Output Synthesized insights, generated content (FAQs, timelines), interactive audio podcasts, and chat-based questions and answers confined to sources Answers from diverse data, text and multi-modal content from across your enterprise, and automated actions by agents User Individual knowledge workers, small teams, content creators Process owners, developers, IT, operations, business analysts, general knowledge seekers, and content creators Complexity Focused knowledge management and document-specific chat experiences Orchestrating multi-agent systems for business processes and general AI assistance Core Function Understanding and extracting from unstructured text, generating content based on your sources Comprehensive information retrieval, multi-modal content creation, and autonomous agent execution How NotebookLM Enterprise and Gemini Enterprise work together NotebookLM Enterprise and Gemini Enterprise are complementary products , enhancing each other's value.
- Gemini Enterprise, the broad AI assistant and agentic platform Gemini Enterprise is an advanced AI assistant and an agentic platform for comprehensive information retrieval, multi-modal content generation, and autonomous AI agent orchestration.
- Focus : Gemini Enterprise is ideal for broad information discovery, comprehensive content generation, and orchestrating autonomous AI agents for action-oriented workflows.
- Analyze data in more complicated formats, such as Microsoft Excel, CSV, and images embedded within PDFs.

### AnswerGenerationSpec \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Reference Send feedback AnswerGenerationSpec Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-08 UTC."],[],[]]
- If this field is set to true , we skip generating answers for adversarial queries and return fallback messages instead. ignoreNonAnswerSeekingQuery boolean Specifies whether to filter out queries that are not answer-seeking.
- If this field is set to true , we skip generating summaries for jail-breaking queries and return fallback messages instead. ignoreLowRelevantContent boolean Specifies whether to filter out queries that have low relevance.

### APIs and reference \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apis](https://docs.cloud.google.com/gemini/enterprise/docs/apis)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Reference Send feedback APIs and reference Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Client libraries Gemini Enterprise API client libraries REST reference Gemini Enterprise API REST reference RPC reference Gemini Enterprise API RPC reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise.

