---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.316Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine Console support for managing deployed agents"
feature_slug: "vertex-ai-agent-engine-console-support-for-managing-deployed-agents"
latest_feature_date: "2025-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/access"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/evaluate"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "console"
  - "for"
  - "managing"
  - "deployed"
---

# Vertex AI Agent Engine Console support for managing deployed agents

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agent Engine now adds console-based management capabilities for deployed agents.

## Extended Definition

Vertex AI Agent Engine now adds console-based management capabilities for deployed agents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/overview](https://docs.cloud.google.com/agent-builder/agent-engine/manage/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)

## Supporting Pages

### "Managing access for deployed agents \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- Source ID: `site-docs-root`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then run the following command: gcloud projects get-iam-policy PROJECT ID OR NUMBER \ --flatten = "bindings[].members" \ --filter = "bindings.members:serviceAccount: PRINCIPAL " \ --format = "value(bindings.role)" where PROJECT ID OR NUMBER is the ID or number for your project, and PRINCIPAL is based on the service account that was used when the agent is deployed on Vertex AI Agent Engine.
- GetIamPolicyRequest ( resource = f "projects/ { project id } " )) for binding in policy . bindings : for member in binding . members : if principal in member : print ( binding . role ) Where the PRINCIPAL is based on the service account that was used when the agent is deployed on Vertex AI Agent Engine.
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Managing access for deployed agents Stay organized with collections Save and categorize content based on your preferences.
- The service account has a Vertex AI Reasoning Engine Service Agent role ( roles/aiplatform.reasoningEngineServiceAgent ) that grants the default permissions required for deployed agents.

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 320
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.

### "Manage deployed agents \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/overview](https://docs.cloud.google.com/agent-builder/agent-engine/manage/overview)
- Source ID: `site-iam-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View metrics for your deployed agent For deployed agents, you can use the console to view metrics for your agent: In the Google Cloud console, go to the Vertex AI Agent Engine page.
- List deployed agents List all deployed agents for a given project and location: Console In the Google Cloud console, go to the Vertex AI Agent Engine page.
- Configure telemetry for deployed agents with telemetry enabled: In the Google Cloud console, go to the Vertex AI Agent Engine page.
- If you already have an existing instance of the deployed agent (as remote agent ), you can run the following command: remote agent . delete ( force = True , # Optional, if the agent has resources (e.g. sessions, memory) ) Alternatively, you can call agent engines.delete() to delete the deployed agent corresponding to RESOURCE NAME in the following way: import vertexai client = vertexai .

### "Evaluate agents using the GenAI Client in Vertex AI SDK \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AdkApp ( agent = root agent , ) remote app = client . agent engines . create ( agent = app , config = { "staging bucket" : gs : // BUCKET NAME , "requirements" : [ 'google-cloud-aiplatform[adk,agent engines]' ], "env vars" : { "GOOGLE CLOUD AGENT ENGINE ENABLE TELEMETRY" : "true" } } ) return remote app agent engine = deploy adk agent ( my agent ) agent engine resource name = agent engine . api resource . name To get the list of agents that are deployed to Vertex AI Agent Engine, see Manage deployed agents .
- For more information on developing an agent, see Develop an Agent Development Kit agent . from google.adk import Agent Define Agent Tools def search products ( query : str ): """Searches for products based on a query.""" Mock response for demonstration if "headphones" in query . lower (): return { "products" : [{ "name" : "Wireless Headphones" , "id" : "B08H8H8H8H" }]} else : return { "products" : []} def get product details ( product id : str ): """Gets the details for a given product ID.""" if product id == "B08H8H8H8H" : return { "details" : "Noise-cancelling, 20-hour battery life." } else : return { "error" : "Product not found." } def add to cart ( product id : str , quantity : int ): """Adds a specified quantity of a product to the cart.""" return { "status" : f "Added { quantity } of { product id } to cart." } Define Agent my agent = Agent ( model = "gemini-2.5-flash" , name = 'ecommerce agent' , instruction = 'You are an ecommerce expert' , tools = [ search products , get product details , add to cart ], ) Deploy agent Deploy your agent to Vertex AI Agent Engine Runtime.
- To see an example of Create a Gen AI Agent Evaluation for a Deployed Agent, run the "Create & Deploy Agent and Run Gen AI Agent Evaluation" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin Sign in to your Google Cloud account.
- Install the Vertex AI SDK for Python: %pip install google-cloud-aiplatform [ adk,agent engines ] %pip install --upgrade --force-reinstall -q google-cloud-aiplatform [ evaluation ] Set up your credentials.

