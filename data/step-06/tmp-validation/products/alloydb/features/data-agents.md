---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.074Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Data agents"
feature_slug: "data-agents"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
keywords:
  - "agents"
  - "build"
  - "conversational"
  - "interact"
---

# Data agents

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Data agents let you build conversational agents that interact with AlloyDB data and can be used as tools in applications.

## Extended Definition

Data agents let you build conversational agents that interact with AlloyDB data and can be used as tools in applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview](https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)

## Supporting Pages

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The following example tools.yaml shows how to set up multiple QueryData agents for a database source: kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : < var>PROJECT ID</var> --- kind : tool name : cloud gda query tool v1 type : cloud-gemini-data-analytics-query source : gda-api-source context : datasourceReferences : < var>DB SOURCE</var> : databaseReference : ... agentContextReference : contextSetId : " V1 YOUR CONTEXT SET ID " generationOptions : ... --- kind : tool name : cloud gda query tool v2 type : cloud-gemini-data-analytics-query source : gda-api-source context : datasourceReferences : < var>DB SOURCE</var> : databaseReference : ... agentContextReference : contextSetId : " V2 YOUR CONTEXT SET ID " generationOptions : ...
- Replace the contents of the agent.py file with the following Flight Data Assistant sample application code. from typing import cast from google.adk.agents.llm agent import Agent from google.adk.agents.llm agent import ToolUnion from toolbox core import ToolboxSyncClient TOOLBOX URL = "http://127.0.0.1:5000" INSTRUCTION = """ ROLE You are a friendly and factual flight data assistant.
- Run the following commands under the flight-assistant-app directory to start the application and access the ADK web server at http://127.0.0.1:8000 . adk web --port 8000 Enter any text, such as hello , to start interacting with the agent.
- Learn how to build the context set file, create a context set that uses the context set file, use MCP Toolbox to call the QueryData API to generate SQL queries for natural language questions, and integrate it with your application.

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Codelab: Part 1: Build a Smart Shopping Assistant with AlloyDB and AI Applications Codelab: Part 2: Deploy a Smart Shopping Assistant with AlloyDB and AI Applications Build an LLM and RAG-based chat application using AlloyDB AI and LangChain This codelab guides you through deploying the GenAI Databases Retrieval Service and then shows you how to build a sample interactive application using your newly set up environment.
- Codelab: Installing and Setting-up Toolbox for your Generative AI & Agentic Applications on AlloyDB Build and deploy a personalized fashion styling assistant The following codelabs show you how to build and deploy a personalized style assistant with Gemini, model endpoint management, vector search, Vertex AI, and agents.
- Codelab: Build an AI-powered outfit recommendation app with AlloyDB and serverless runtimes Build an application that invokes a database query from your agent or a generative AI application The following codelab shows you how to build an application that uses Gen AI Toolbox for Databases to perform a simple AlloyDB query that you can invoke from your agent or from a generative AI application.
- Codelab: Build a Patent Search App with AlloyDB, vector search, and Vertex AI Codelab: Build a Patent Search App with AlloyDB, vector search, and Java Agent Development Kit Generate multimodal Embeddings in AlloyDB This codelab demonstrates how to use AlloyDB AI's capabilities for semantic search using multimodal embeddings.

### QueryData overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview](https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- QueryData lets you to interact with the data in your database using conversational language and build data agents.
- In a conversational application, the QueryData endpoint must be used within the framework that manages the conversation history and context.To enforce entity resolution while maintaining strict row-level security, you can use parameterized secure views (PSVs).
- The QueryData endpoint in the Conversational Analytics API is an agentic tool that allows programmatic integration with your applications to enable SQL query generation from natural language questions.
- How QueryData works To build effective agentic applications, QueryData must understand your data organization and business logic.

