---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.687Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Nano Banana Pro image generation"
feature_slug: "nano-banana-pro-image-generation"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents"
keywords:
  - "nano"
  - "banana"
  - "pro"
  - "image"
  - "generation"
  - "gemini"
  - "enterprise"
  - "supports"
---

# Nano Banana Pro image generation

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise supports Nano Banana Pro, also called Gemini 3 Pro Image, for image generation in Public Preview.

## Extended Definition

Gemini Enterprise supports Nano Banana Pro, also called Gemini 3 Pro Image, for image generation in Public Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents)

## Supporting Pages

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- NotebookLM Enterprise Gemini Enterprise Primary Goal Centralized knowledge, content generation from your own documents Enterprise-wide data search, multi-modal content generation, and agent orchestration Input Your uploaded documents, websites, and specific sources Broad queries and data from across enterprise systems (Google and third-party SaaS) Output Synthesized insights, generated content (FAQs, timelines), interactive audio podcasts, and chat-based questions and answers confined to sources Answers from diverse data, text and multi-modal content from across your enterprise, and automated actions by agents User Individual knowledge workers, small teams, content creators Process owners, developers, IT, operations, business analysts, general knowledge seekers, and content creators Complexity Focused knowledge management and document-specific chat experiences Orchestrating multi-agent systems for business processes and general AI assistance Core Function Understanding and extracting from unstructured text, generating content based on your sources Comprehensive information retrieval, multi-modal content creation, and autonomous agent execution How NotebookLM Enterprise and Gemini Enterprise work together NotebookLM Enterprise and Gemini Enterprise are complementary products , enhancing each other's value.
- Gemini Enterprise, the broad AI assistant and agentic platform Gemini Enterprise is an advanced AI assistant and an agentic platform for comprehensive information retrieval, multi-modal content generation, and autonomous AI agent orchestration.
- Product comparison The following product comparison table summarizes and contrasts various important aspects of the two products (NotebookLM Enterprise and Gemini Enterprise).
- Focus : Gemini Enterprise is ideal for broad information discovery, comprehensive content generation, and orchestrating autonomous AI agents for action-oriented workflows.

### AnswerGenerationSpec \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Reference Send feedback AnswerGenerationSpec Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "ignoreLowRelevantContent" : boolean } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- JSON representation ModelSpec JSON representation PromptSpec JSON representation Answer generation specification.
- For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Third-party identity provider When you only connect Gemini Enterprise to third-party data sources, and you are already using a third-party identity provider that supports OIDC or SAML 2.0, such as Microsoft Entra ID, Active Directory Federation Services (AD FS), Okta, and others, you must use Workforce Identity Federation.
- Gemini Enterprise supports the following options: Identity provider type When to use Google Identity When you connect Gemini Enterprise to Google Workspace data sources, you must use Google Identity .
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).
- Connect identity provider To specify an identity provider for Gemini Enterprise and turn on data source access control, follow these steps: In the Google Cloud console, go to the Gemini Enterprise page.

### "Configure cross-project ADK agent access \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant permissions in the agent project Grant the Gemini Enterprise service agent permissions in the project where the ADK agent is hosted with Vertex AI Agent Engine: In the Google Cloud console, go to the project where the ADK agent is hosted with Vertex AI Agent Engine.
- Identify the Gemini Enterprise service agent To find the service agent email address for your Gemini Enterprise app project: In the Google Cloud console, go to the project that contains your Gemini Enterprise app.
- Home Documentation AI and ML Gemini Enterprise Send feedback Configure cross-project ADK agent access Stay organized with collections Save and categorize content based on your preferences.
- This page explains how administrators can grant permission for Gemini Enterprise to access an ADK agent that runs within Vertex AI Agent Engine in a different Google Cloud project.

