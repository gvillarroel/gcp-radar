---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.344Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Garden tag filtering"
feature_slug: "vertex-ai-agent-garden-tag-filtering"
latest_feature_date: "2025-07-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/evaluate"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/deploy"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "garden"
  - "tag"
  - "filtering"
  - "now"
  - "supports"
---

# Vertex AI Agent Garden tag filtering

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Vertex AI Agent Garden now supports filtering resources by tags.

## Extended Definition

Vertex AI Agent Garden now supports filtering resources by tags.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- We recommend the following roles: roles/aiplatform.expressUser : Grant access to running inference, sessions, and memory. roles/serviceusage.serviceUsageConsumer : Grant the agent permission to use the project's quota and the Vertex AI SDK. roles/browser : Grant access to basic Google Cloud functionalities.
- AGENT IDENTITY , "requirements" : [ "google-cloud-aiplatform[adk,agent engines]" ], "staging bucket" : f "gs://" BUCKET NAME ", }, ) print ( f "Effective Identity: { remote app . api resource . spec . effective identity } " ) where BUCKET NAME is the name of your Cloud Storage bucket.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- You must specify at least one of filter (applied to system fields) or filter groups (applied to metadata fields). operation = client . agent engines . memories . purge ( name = agent engine . api resource . name , Specify at least one of filter or filter groups. filter = " FILTER STRING " , filter groups = FILTER GROUPS , Set to false (default) if you want to stage but not execute the purge operation. force = True , config = { Set to false (default) if you want to purge memories asynchronously. "wait for completion" : True } ) Replace the following: FILTER STRING : A string using EBNF syntax for filtering against system fields.
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- Remove by resource name If you know exactly which memory resource you want to remove, you can delete a specific memory using its resource name: client . agent engines . memories . delete ( name = MEMORY NAME , config = { Set to false (default) if you want to delete the memory asynchronously. "wait for completion" : True } ) Replace the following: MEMORY NAME : The name of the Memory to delete.

### "Evaluate agents using the GenAI Client in Vertex AI SDK \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- AdkApp ( agent = root agent , ) remote app = client . agent engines . create ( agent = app , config = { "staging bucket" : gs : // BUCKET NAME , "requirements" : [ 'google-cloud-aiplatform[adk,agent engines]' ], "env vars" : { "GOOGLE CLOUD AGENT ENGINE ENABLE TELEMETRY" : "true" } } ) return remote app agent engine = deploy adk agent ( my agent ) agent engine resource name = agent engine . api resource . name To get the list of agents that are deployed to Vertex AI Agent Engine, see Manage deployed agents .
- For more information on developing an agent, see Develop an Agent Development Kit agent . from google.adk import Agent Define Agent Tools def search products ( query : str ): """Searches for products based on a query.""" Mock response for demonstration if "headphones" in query . lower (): return { "products" : [{ "name" : "Wireless Headphones" , "id" : "B08H8H8H8H" }]} else : return { "products" : []} def get product details ( product id : str ): """Gets the details for a given product ID.""" if product id == "B08H8H8H8H" : return { "details" : "Noise-cancelling, 20-hour battery life." } else : return { "error" : "Product not found." } def add to cart ( product id : str , quantity : int ): """Adds a specified quantity of a product to the cart.""" return { "status" : f "Added { quantity } of { product id } to cart." } Define Agent my agent = Agent ( model = "gemini-2.5-flash" , name = 'ecommerce agent' , instruction = 'You are an ecommerce expert' , tools = [ search products , get product details , add to cart ], ) Deploy agent Deploy your agent to Vertex AI Agent Engine Runtime.
- To see an example of Create a Gen AI Agent Evaluation for a Deployed Agent, run the "Create & Deploy Agent and Run Gen AI Agent Evaluation" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin Sign in to your Google Cloud account.
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Evaluate agents using the GenAI Client in Vertex AI SDK Stay organized with collections Save and categorize content based on your preferences.

### Deploy an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Vertex AI Agent Engine deployment only supports Python.
- Update package lists again and install Node.js apt-get update apt-get install nodejs -y echo "--- System-wide Node.js installation complete ---" echo "Verifying versions:" These commands will now work for ANY user because node and npx are installed in /usr/bin/ which is in everyone's default PATH. node -v npm -v npx -v install uvx.sh #!/bin/bash Exit immediately if a command exits with a non-zero status. set -e echo "Starting setup..." Install uv apt-get update apt-get install -y curl curl -LsSf https://astral.sh/uv/install.sh env UV INSTALL DIR = "/usr/local/bin" sh These commands will now work for ANY user because uv and uvx are installed in /usr/local/bin/ which is in everyone's default PATH. uv --version uvx --version install gcloud cli.sh #!/bin/bash Exit immediately if a command exits with a non-zero status. set -e apt-get install -y curl gpg curl https://packages.cloud.google.com/apt/doc/apt-key.gpg gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" tee -a /etc/apt/sources.list.d/google-cloud-sdk.list apt-get update -y && apt-get install google-cloud-cli -y gcloud --version Define the agent framework You can specify the agent framework that your agent uses: agent framework = "google-adk" The following are the supported values: google-adk langchain langgraph ag2 llama-index custom If agent framework isn't specified, the value is auto-detected if you are deploying from an agent object .
- Python Object To deploy the agent on Vertex AI, use client.agent engines.create to pass in the local agent object along with any optional configurations : remote agent = client . agent engines . create ( agent = local agent , # Optional. config = { "requirements" : requirements , # Optional. "extra packages" : extra packages , # Optional. "gcs dir name" : gcs dir name , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) Deployment takes a few minutes, during which the following steps happen in the background: A bundle of the following artifacts are generated locally: .pkl a pickle file corresponding to local agent. requirements.txt a text file containing the package requirements . dependencies.tar.gz a tar file containing any extra packages .
- The following is an example of deploying an agent from source files: from google.cloud.aiplatform import vertexai Example file structure: /agent directory ├── agent.py ├── requirements.txt Example agent directory/agent.py: class MyAgent: def ask(self, question: str) -> str: return f"Answer to {question}" root agent = MyAgent() remote agent = client . agent engines . create ( config = { "display name" : "My Agent" , "description" : "An agent deployed from a local source." , "source packages" : [ "agent directory" ], "entrypoint module" : "agent directory.agent" , "entrypoint object" : "root agent" , "requirements file" : "requirements.txt" , "class methods" : [ { "name" : "ask" , "api mode" : "" , "parameters" : { "type" : "object" , "properties" : { "question" : { "type" : "string" } }, "required" : [ "question" ] }}, ], Other optional configs: "env vars": {...}, "service account": "...", } ) Dockerfile To deploy from Dockerfile on Vertex AI, it follows a similar approach to deploying from source files .

