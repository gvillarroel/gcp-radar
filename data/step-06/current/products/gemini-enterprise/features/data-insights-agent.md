---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.659Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Data Insights agent"
feature_slug: "data-insights-agent"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer"
keywords:
  - "insights"
  - "agent"
  - "the"
  - "provides"
  - "from"
  - "in"
  - "gemini"
  - "enterprise"
---

# Data Insights agent

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

The Data Insights agent provides insights from BigQuery data in Gemini Enterprise.

## Extended Definition

The Data Insights agent provides insights from BigQuery data in Gemini Enterprise.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer)

## Supporting Pages

### Agents overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- Source ID: `site-docs-root`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Agent type Gemini Enterprise tool Description Employee-made agents from your organization Agent Designer This interactive, no-code, low-code tool lets users in your organization create, launch, and manage single and multi-step agents on the Gemini Enterprise web app.
- Custom agents from your organization ADK agents hosted on Vertex AI Agent Engine Gemini Enterprise admins can register custom agents built by your organization and hosted on Vertex AI Agent Engine, making them available to users on the Gemini Enterprise web app.
- Manage agents A Gemini Enterprise admin can manage the lifecycle of the available agents from the Agents page in the Gemini Enterprise console and can perform the following tasks: Task Description Update an agent You can update the details of an agent.
- Gemini Enterprise provides centralized oversight and management for agents used by your organization, including those from Google, third parties, and internal teams.

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NotebookLM Enterprise Gemini Enterprise Primary Goal Centralized knowledge, content generation from your own documents Enterprise-wide data search, multi-modal content generation, and agent orchestration Input Your uploaded documents, websites, and specific sources Broad queries and data from across enterprise systems (Google and third-party SaaS) Output Synthesized insights, generated content (FAQs, timelines), interactive audio podcasts, and chat-based questions and answers confined to sources Answers from diverse data, text and multi-modal content from across your enterprise, and automated actions by agents User Individual knowledge workers, small teams, content creators Process owners, developers, IT, operations, business analysts, general knowledge seekers, and content creators Complexity Focused knowledge management and document-specific chat experiences Orchestrating multi-agent systems for business processes and general AI assistance Core Function Understanding and extracting from unstructured text, generating content based on your sources Comprehensive information retrieval, multi-modal content creation, and autonomous agent execution How NotebookLM Enterprise and Gemini Enterprise work together NotebookLM Enterprise and Gemini Enterprise are complementary products , enhancing each other's value.
- Gemini Enterprise provides broad, enterprise data search that often leads to the discovery of new, valuable sources from Google systems and third-party SaaS applications.
- Gemini Enterprise, the broad AI assistant and agentic platform Gemini Enterprise is an advanced AI assistant and an agentic platform for comprehensive information retrieval, multi-modal content generation, and autonomous AI agent orchestration.
- Content synthesis : NotebookLM Enterprise can quickly synthesize insights, summarize, and draft new content from your uploaded documents.

### Discovery Engine API \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha.projects.locations.licenseConfigs Methods create POST /v1alpha/{parent=projects/ /locations/ }/licenseConfigs Creates a LicenseConfig This method should only be used for creating NotebookLm licenses or Gemini Enterprise free trial licenses. get GET /v1alpha/{name=projects/ /locations/ /licenseConfigs/ } Gets a LicenseConfig . patch PATCH /v1alpha/{licenseConfig.name=projects/ /locations/ /licenseConfigs/ } Updates the LicenseConfig REST Resource: v1alpha.projects.locations.notebooks Methods batchDelete POST /v1alpha/{parent=projects/ /locations/ }/notebooks:batchDelete Batch deletes Notebooks. create POST /v1alpha/{parent=projects/ /locations/ }/notebooks Creates a notebook. get GET /v1alpha/{name=projects/ /locations/ /notebooks/ } Gets a notebook. listRecentlyViewed GET /v1alpha/{parent=projects/ /locations/ }/notebooks:listRecentlyViewed Lists the notebooks ordered by last view time. share POST /v1alpha/{name=projects/ /locations/ /notebooks/ }:share Shares a notebook to other accounts.
- REST Resource: v1beta.projects.locations.licenseConfigs Methods create POST /v1beta/{parent=projects/ /locations/ }/licenseConfigs Creates a LicenseConfig This method should only be used for creating NotebookLm licenses or Gemini Enterprise free trial licenses. get GET /v1beta/{name=projects/ /locations/ /licenseConfigs/ } Gets a LicenseConfig . patch PATCH /v1beta/{licenseConfig.name=projects/ /locations/ /licenseConfigs/ } Updates the LicenseConfig REST Resource: v1beta.projects.locations.operations Methods get GET /v1beta/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v1beta/{name=projects/ /locations/ }/operations Lists operations that match the specified filter in the request.
- REST Resource: v1.projects.locations.licenseConfigs Methods create POST /v1/{parent=projects/ /locations/ }/licenseConfigs Creates a LicenseConfig This method should only be used for creating NotebookLm licenses or Gemini Enterprise free trial licenses. get GET /v1/{name=projects/ /locations/ /licenseConfigs/ } Gets a LicenseConfig . patch PATCH /v1/{licenseConfig.name=projects/ /locations/ /licenseConfigs/ } Updates the LicenseConfig REST Resource: v1.projects.locations.operations Methods get GET /v1/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v1/{name=projects/ /locations/ }/operations Lists operations that match the specified filter in the request.
- REST Resource: v1.projects.locations.collections.engines.assistants.agents.a2a.v1.tasks Methods cancel POST /v1/{tenant=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ }/a2a/v1/{name=tasks/ }:cancel Cancel a task from the agent. get GET /v1/{tenant=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ }/a2a/v1/{name=tasks/ } Get the current state of a task from the agent. subscribe GET /v1/{tenant=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ }/a2a/v1/{name=tasks/ }:subscribe TaskSubscription is a streaming call that will return a stream of task update events.

### Agent Designer overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Designer pane: the designer pane provides you with granular, low-code control over your agent's configuration and is organized into three tabs: Flow: presents a visual representation of your agent's workflow and control logic.
- Home Documentation AI and ML Gemini Enterprise Use Gemini Enterprise Send feedback Agent Designer overview Stay organized with collections Save and categorize content based on your preferences.
- The canvas is divided into two main panes: Chat pane: the chat pane provides a conversational interface to build and refine your agent using natural language prompts.
- It's perfect for no-code users who want to use Gemini's intelligence to quickly develop and adjust their agent's details, instructions, or behaviors.

