---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.311Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine Runtime free tier"
feature_slug: "vertex-ai-agent-engine-runtime-free-tier"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "runtime"
  - "free"
  - "tier"
  - "is"
---

# Vertex AI Agent Engine Runtime free tier

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

A free tier is now available for Vertex AI Agent Engine Runtime.

## Extended Definition

A free tier is now available for Vertex AI Agent Engine Runtime.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 301
- Re-rank relevance: N/A

Evidence snippets:
- This page covers the following topics: Creating an agent with agent identity : Create an agent such that the agent automatically receives a unique identity when you deploy to Vertex AI Agent Engine Runtime.
- This page describes how to use Identity Access Management (IAM) agent identity to provide security and access management features when using agents on Vertex AI Agent Engine Runtime.
- Restrict access to these credentials based on Agent ID (a principal identifier ): Create the secret container gcloud secrets create my-app-oauth-secret Add the actual client secret to Secret Manager gcloud secrets versions add my-app-oauth-secret --data-file=oauth-secret Grant agent identity access to the secret gcloud secrets add-iam-policy-binding my-app-oauth-secret \ --role='roles/secretmanager.secretAccessor' \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ Once the secret is stored, the agent can access these credentials during runtime using its principal identifier and standard Google Cloud authentication library automatically as part of Application Default Credential.
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .

### "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can modify the following example with any data recognizable by your agent, using any applicable termination logic for input stream and output stream: async with client . aio . live . agent engines . connect ( agent engine = remote live agent . api resource . name , config = { "class method" : "bidi stream query" } ) as connection : while True : input str = input ( "Enter your question: " ) if input str == "exit" : break await connection . send ({ "input" : input str }) while True : response = await connection . receive () print ( response ) if response [ "bidiStreamOutput" ][ "output" ] == "end of turn" : break Vertex AI Agent Engine Runtime streams responses as a sequence of iteratively generated objects.
- Bidirectional streaming with Vertex AI Agent Engine Runtime supports interactive, real-time agent use cases and data exchange for multimodal live APIs.
- This page describes how to use bidirectional streaming with Vertex AI Agent Engine Runtime.
- To see an example of using bidirectional streaming with Agent Engine, run the "Getting Started with Live API on Agent Engine" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Overview Bidirectional streaming provides a persistent, two-way communication channel between your application and the agent, letting you move beyond turn-based, request-response patterns.

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Develop and deploy agents on Vertex AI Agent Engine This page demonstrates how to create and deploy an agent to Vertex AI Agent Engine Runtime using the following agent frameworks: LangGraph LangChain AG2 LlamaIndex Query Pipeline (preview) This quickstart guides you through the following steps: Set up your Google Cloud project.
- For more information, see the launch stage descriptions . agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) Deploy an agent Deploy the agent by creating a reasoningEngine resource in Vertex AI: LangGraph remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) LangChain remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) AG2 remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,ag2]" ], }, ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Install and initialize the Vertex AI SDK for Python Run the following command to install the Vertex AI SDK for Python and other required packages: LangGraph pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,langchain ]>= 1 .112 LangChain pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,langchain ]>= 1 .112 AG2 pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,ag2 ]>= 1 .112 LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Local Shell Run the following command: gcloud auth application-default login Run the following code to import Vertex AI Agent Engine and initialize the SDK: (Optional) Before testing an agent you develop , you need to import Vertex AI Agent Engine and initialize the SDK as follows: Google Cloud project import vertexai vertexai . init ( project = " PROJECT ID " , # Your project ID. location = " LOCATION " , # Your cloud region. ) Where: PROJECT ID is the Google Cloud project ID under which you develop and deploy agents LOCATION is one of the supported regions .

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine with Agent\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Develop and deploy agents on Vertex AI Agent Engine with Agent Development Kit This page demonstrates how to create and deploy an agent to Vertex AI Agent Engine Runtime using the Agent Development Kit (ADK) .
- Enable the APIs To get the permissions that you need to use Vertex AI Agent Engine, ask your administrator to grant you the following IAM roles on your project: Vertex AI User ( roles/aiplatform.user ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Deploy the agent to Vertex AI Agent Engine Runtime.
- Develop an agent Develop a currency exchange tool for your agent: def get exchange rate ( currency from : str = "USD" , currency to : str = "EUR" , currency date : str = "latest" , ): """Retrieves the exchange rate between two currencies on a specified date.""" import requests response = requests . get ( f "https://api.frankfurter.app/ { currency date } " , params = { "from" : currency from , "to" : currency to }, ) return response . json () Instantiate an agent: from google.adk.agents import Agent from vertexai import agent engines agent = Agent ( model = "gemini-2.0-flash" , name = 'currency exchange agent' , tools = [ get exchange rate ], ) app = agent engines .

