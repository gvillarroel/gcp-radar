---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.327Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine default CAA-managed agent identity credentials"
feature_slug: "vertex-ai-agent-engine-default-caa-managed-agent-identity-credentials"
latest_feature_date: "2025-12-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/deploy"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/access"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "default"
  - "caa"
  - "managed"
  - "identity"
---

# Vertex AI Agent Engine default CAA-managed agent identity credentials

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Vertex AI Agent Engine now secures agent identity credentials by default through a Google-managed Context-Aware Access (CAA) policy.

## Extended Definition

Vertex AI Agent Engine now secures agent identity credentials by default through a Google-managed Context-Aware Access (CAA) policy.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 330
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Restrict access to these credentials based on Agent ID (a principal identifier ): Create the secret container gcloud secrets create my-app-oauth-secret Add the actual client secret to Secret Manager gcloud secrets versions add my-app-oauth-secret --data-file=oauth-secret Grant agent identity access to the secret gcloud secrets add-iam-policy-binding my-app-oauth-secret \ --role='roles/secretmanager.secretAccessor' \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ Once the secret is stored, the agent can access these credentials during runtime using its principal identifier and standard Google Cloud authentication library automatically as part of Application Default Credential.
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- You must specify at least one of filter (applied to system fields) or filter groups (applied to metadata fields). operation = client . agent engines . memories . purge ( name = agent engine . api resource . name , Specify at least one of filter or filter groups. filter = " FILTER STRING " , filter groups = FILTER GROUPS , Set to false (default) if you want to stage but not execute the purge operation. force = True , config = { Set to false (default) if you want to purge memories asynchronously. "wait for completion" : True } ) Replace the following: FILTER STRING : A string using EBNF syntax for filtering against system fields.
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- Remove by resource name If you know exactly which memory resource you want to remove, you can delete a specific memory using its resource name: client . agent engines . memories . delete ( name = MEMORY NAME , config = { Set to false (default) if you want to delete the memory asynchronously. "wait for completion" : True } ) Replace the following: MEMORY NAME : The name of the Memory to delete.
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.

### Deploy an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is an example: labels = { "author" : "username" , "version" : "latest" } Configure a default agent identity You can provision agents you deploy to Vertex AI Agent Engine with a unique identity upon creating your agent.
- Python Object To deploy the agent on Vertex AI, use client.agent engines.create to pass in the local agent object along with any optional configurations : remote agent = client . agent engines . create ( agent = local agent , # Optional. config = { "requirements" : requirements , # Optional. "extra packages" : extra packages , # Optional. "gcs dir name" : gcs dir name , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) Deployment takes a few minutes, during which the following steps happen in the background: A bundle of the following artifacts are generated locally: .pkl a pickle file corresponding to local agent. requirements.txt a text file containing the package requirements . dependencies.tar.gz a tar file containing any extra packages .
- The default value is 9 . remote agent = client . agent engines . create ( agent = local agent , config = { "min instances" : 1 , "max instances" : 10 , "resource limits" : { "cpu" : "4" , "memory" : "8Gi" }, "container concurrency" : 9 , ... other configs } ) For best practices on how to optimize runtime resources, see Optimize and scale Vertex AI Agent Engine Runtime .
- The identity is tied to the Vertex AI Agent Engine's agent resource ID and is independent of the agent framework you used to develop the agent: identity type = AGENT IDENTITY For more information, see Create an agent with agent identity .

### "Managing access for deployed agents \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service accounts If you used service accounts to set up the identity and permissions for your agent , agents that you deploy on Vertex AI Agent Engine run using either the AI Platform Reasoning Engine Service Agent or your custom service account.
- Agent identity If you used agent identity to set up the identity and permissions for your agent , see Use agent identity with Vertex AI Agent Engine for information about how to manage access control to resources.
- The service account has a Vertex AI Reasoning Engine Service Agent role ( roles/aiplatform.reasoningEngineServiceAgent ) that grants the default permissions required for deployed agents.
- Then run the following command: gcloud projects get-iam-policy PROJECT ID OR NUMBER \ --flatten = "bindings[].members" \ --filter = "bindings.members:serviceAccount: PRINCIPAL " \ --format = "value(bindings.role)" where PROJECT ID OR NUMBER is the ID or number for your project, and PRINCIPAL is based on the service account that was used when the agent is deployed on Vertex AI Agent Engine.

