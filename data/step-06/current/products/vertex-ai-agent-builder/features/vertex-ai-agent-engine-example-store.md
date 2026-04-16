---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.318Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine Example Store"
feature_slug: "vertex-ai-agent-engine-example-store"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/example-store/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "example"
  - "store"
  - "is"
  - "now"
---

# Vertex AI Agent Engine Example Store

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Example Store is now available in preview for Vertex AI Agent Engine.

## Extended Definition

Example Store is now available in preview for Vertex AI Agent Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/example-store/overview](https://docs.cloud.google.com/agent-builder/agent-engine/example-store/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore](https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 334
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- For example, the following commands grant basic roles to all agents in a project: gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/serviceusage.serviceUsageConsumer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/browser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/aiplatform.expressUser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/cloudapiregistry.viewer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/logging.logWriter gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/monitoring.metricWriter To grant a role to all Agent Engine agents across an organization: Grant all agents in an organization the following role gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platform/aiplatform" \ --role=" ROLE NAME " Deny access to an agent To deny an agent access to resources, you can use the IAM deny policy or set up a principal access boundary policy .
- Restrict access to these credentials based on Agent ID (a principal identifier ): Create the secret container gcloud secrets create my-app-oauth-secret Add the actual client secret to Secret Manager gcloud secrets versions add my-app-oauth-secret --data-file=oauth-secret Grant agent identity access to the secret gcloud secrets add-iam-policy-binding my-app-oauth-secret \ --role='roles/secretmanager.secretAccessor' \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ Once the secret is stored, the agent can access these credentials during runtime using its principal identifier and standard Google Cloud authentication library automatically as part of Application Default Credential.
- Create an IAM allow policy to grant an agent an IAM role: Example: Grant the agent access to vision API. gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ --role=" ROLE NAME " \ Replace the following: ORGANIZATION ID : The ID for your organization.

### "Example Store overview \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/example-store/overview](https://docs.cloud.google.com/agent-builder/agent-engine/example-store/overview)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: N/A

Evidence snippets:
- If an agent based on the Vertex AI Agent Development Kit is linked to the Example Store instance, then the agent automatically retrieves the examples and include them in LLM request.
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Example Store overview Stay organized with collections Save and categorize content based on your preferences.
- The uploaded examples become available immediately to the agent or LLM application associated with the Example Store instance.
- The examples become available to the agent or application as soon as you upload them to the Example Store instance.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.
- For example, the following request would delete existing memories that contain information about dietary preferences, if they exist for the given scope : from google import genai client . agent engines . memories . generate ( name = agent engine . api resource . name , direct contents source = { "events" : [{ "content" : genai . types .

### "Create or reuse an Example Store instance \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore](https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore)
- Source ID: `site-docs-root`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example Store supports the following embedding models: textembedding-gecko@003 text-embedding-004 text-multilingual-embedding-002 HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /exampleStores Request JSON body: { "display name": " DISPLAY NAME ", "example store config": {"vertex embedding model": EMBEDDING MODEL } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Create or reuse an Example Store instance Stay organized with collections Save and categorize content based on your preferences.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /exampleStores" Select-Object -Expand Content You should receive a JSON response similar to the following, where EXAMPLE STORE ID represents the ID of the Example Store instance.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /exampleStores" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

