---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.339Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine bidirectional streaming"
feature_slug: "vertex-ai-agent-engine-bidirectional-streaming"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "bidirectional"
  - "streaming"
  - "supports"
  - "for"
---

# Vertex AI Agent Engine bidirectional streaming

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Agent Engine supports bidirectional streaming for agent interactions.

## Extended Definition

Agent Engine supports bidirectional streaming for agent interactions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)

## Supporting Pages

### "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that the EXPERIMENTAL agent server mode is required for an agent that supports bidirectional streaming: remote live agent = client . agent engines . create ( agent = live agent , config = { "staging bucket" : STAGING BUCKET , "requirements" : [ "google-cloud-aiplatform[agent engines,adk]==1.88.0" , "cloudpickle==3.0" , "websockets" ], "agent server mode" : vertexai types .
- Bidirectional streaming with Vertex AI Agent Engine Runtime supports interactive, real-time agent use cases and data exchange for multimodal live APIs.
- To see an example of using bidirectional streaming with Agent Engine, run the "Getting Started with Live API on Agent Engine" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Overview Bidirectional streaming provides a persistent, two-way communication channel between your application and the agent, letting you move beyond turn-based, request-response patterns.
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Bidirectional streaming with Vertex AI Agent Engine Runtime Stay organized with collections Save and categorize content based on your preferences.

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.
- This tutorial uses the following steps: Create memories using the following options: Generate memories using Vertex AI Agent Engine Memory Bank : Write sessions and events to Vertex AI Agent Engine Sessions as sources for Vertex AI Agent Engine Memory Bank to generate memories.
- Use the Vertex AI Agent Engine SDK if you don't want an agent framework to orchestrate calls for you, or you want to integrate Sessions and Memory Bank with agent frameworks other than Agent Development Kit (ADK).

### "Vertex AI Agent Engine Code Execution \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Vertex AI Agent Engine Code Execution Stay organized with collections Save and categorize content based on your preferences.
- However, you don't need to deploy your agent to Vertex AI Agent Engine to use Code Execution.
- Code Execution is part of the Vertex AI Agent Engine suite.
- To see an example of using , run the "Get started with on " notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Note: Code Execution is supported in only the us-central1 region.

