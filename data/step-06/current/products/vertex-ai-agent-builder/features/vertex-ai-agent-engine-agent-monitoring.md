---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.318Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine agent monitoring"
feature_slug: "vertex-ai-agent-engine-agent-monitoring"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "monitoring"
  - "is"
  - "now"
  - "generally"
---

# Vertex AI Agent Engine agent monitoring

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Agent monitoring is now generally available for Vertex AI Agent Engine.

## Extended Definition

Agent monitoring is now generally available for Vertex AI Agent Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring](https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following commands grant basic roles to all agents in a project: gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/serviceusage.serviceUsageConsumer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/browser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/aiplatform.expressUser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/cloudapiregistry.viewer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/logging.logWriter gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/monitoring.metricWriter To grant a role to all Agent Engine agents across an organization: Grant all agents in an organization the following role gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platform/aiplatform" \ --role=" ROLE NAME " Deny access to an agent To deny an agent access to resources, you can use the IAM deny policy or set up a principal access boundary policy .
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: N/A

Evidence snippets:
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.
- This tutorial uses the following steps: Create memories using the following options: Generate memories using Vertex AI Agent Engine Memory Bank : Write sessions and events to Vertex AI Agent Engine Sessions as sources for Vertex AI Agent Engine Memory Bank to generate memories.

### "Vertex AI Agent Engine Code Execution \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- Code Execution is part of the Vertex AI Agent Engine suite.
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Vertex AI Agent Engine Code Execution Stay organized with collections Save and categorize content based on your preferences.
- However, you don't need to deploy your agent to Vertex AI Agent Engine to use Code Execution.
- To see an example of using , run the "Get started with on " notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Note: Code Execution is supported in only the us-central1 region.

### Monitor an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring](https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query metrics with Cloud Monitoring API You can use the Cloud Monitoring API to do the following: Get the Vertex AI Agent Engine monitored resource definition List available agent metric definitions Query time-series data for request count All Agent metrics are associated with the Agent Engine monitored resource aiplatform.googleapis.com/ReasoningEngine .
- List available agent metric definitions The following command uses projects.metricDescriptors to retrieve all metrics and label filters for Agent Engine: gcurl https://monitoring.googleapis.com/v3/projects/ PROJECT ID /metricDescriptors?filter = 'metric.type=starts with("aiplatform.googleapis.com/reasoning engine")' The result should include the definition for the following metrics as well as their specific labels: aiplatform.googleapis.com/reasoning engine/request count aiplatform.googleapis.com/reasoning engine/request latencies aiplatform.googleapis.com/reasoning engine/cpu/allocation time aiplatform.googleapis.com/reasoning engine/memory/allocation time Query time-series data for request count You can use projects.timeSeries.list along with parameters like interval , filter , and aggregation to query time-series data.
- The following example shows how to query the raw data points for request count metric for a specific agent instance during a specific time window: Note: Certain characters need to be URL-encoded. gcurl https://monitoring.googleapis.com/v3/projects/ PROJECT ID /timeSeries?filter = 'metric.type="aiplatform.googleapis.com/reasoning engine/request count"%20AND%20resource.labels.reasoning engine id=" RESOURCE ID "&interval.endTime=2025-03-26T11:00:0.0-08:00&interval.startTime=2025-03-26T10:00:0.0-08:00' Replace the following: PROJECT ID : Your Google Cloud project ID.
- Get the Agent Engine monitored resource definition The following command retrieves the definition of the monitored resource using projects.monitoredResourceDescriptors , as well as all available labels which can be used for filtering: gcurl https://monitoring.googleapis.com/v3/projects/ PROJECT ID /monitoredResourceDescriptors/aiplatform.googleapis.com/ReasoningEngine The labels should include resource container , location and reasoning engine id .

