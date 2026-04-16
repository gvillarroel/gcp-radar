---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.316Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Garden tag filtering"
feature_slug: "vertex-ai-agent-garden-tag-filtering"
latest_feature_date: "2025-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/deploy"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a"
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
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agent Garden now supports filtering resources by tags.

## Extended Definition

Vertex AI Agent Garden now supports filtering resources by tags.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a](https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- We recommend the following roles: roles/aiplatform.expressUser : Grant access to running inference, sessions, and memory. roles/serviceusage.serviceUsageConsumer : Grant the agent permission to use the project's quota and the Vertex AI SDK. roles/browser : Grant access to basic Google Cloud functionalities.
- AGENT IDENTITY , "requirements" : [ "google-cloud-aiplatform[adk,agent engines]" ], "staging bucket" : f "gs://" BUCKET NAME ", }, ) print ( f "Effective Identity: { remote app . api resource . spec . effective identity } " ) where BUCKET NAME is the name of your Cloud Storage bucket.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- You must specify at least one of filter (applied to system fields) or filter groups (applied to metadata fields). operation = client . agent engines . memories . purge ( name = agent engine . api resource . name , Specify at least one of filter or filter groups. filter = " FILTER STRING " , filter groups = FILTER GROUPS , Set to false (default) if you want to stage but not execute the purge operation. force = True , config = { Set to false (default) if you want to purge memories asynchronously. "wait for completion" : True } ) Replace the following: FILTER STRING : A string using EBNF syntax for filtering against system fields.
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- Remove by resource name If you know exactly which memory resource you want to remove, you can delete a specific memory using its resource name: client . agent engines . memories . delete ( name = MEMORY NAME , config = { Set to false (default) if you want to delete the memory asynchronously. "wait for completion" : True } ) Replace the following: MEMORY NAME : The name of the Memory to delete.

### Deploy an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Vertex AI Agent Engine deployment only supports Python.
- Update package lists again and install Node.js apt-get update apt-get install nodejs -y echo "--- System-wide Node.js installation complete ---" echo "Verifying versions:" These commands will now work for ANY user because node and npx are installed in /usr/bin/ which is in everyone's default PATH. node -v npm -v npx -v install uvx.sh #!/bin/bash Exit immediately if a command exits with a non-zero status. set -e echo "Starting setup..." Install uv apt-get update apt-get install -y curl curl -LsSf https://astral.sh/uv/install.sh env UV INSTALL DIR = "/usr/local/bin" sh These commands will now work for ANY user because uv and uvx are installed in /usr/local/bin/ which is in everyone's default PATH. uv --version uvx --version install gcloud cli.sh #!/bin/bash Exit immediately if a command exits with a non-zero status. set -e apt-get install -y curl gpg curl https://packages.cloud.google.com/apt/doc/apt-key.gpg gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" tee -a /etc/apt/sources.list.d/google-cloud-sdk.list apt-get update -y && apt-get install google-cloud-cli -y gcloud --version Define the agent framework You can specify the agent framework that your agent uses: agent framework = "google-adk" The following are the supported values: google-adk langchain langgraph ag2 llama-index custom If agent framework isn't specified, the value is auto-detected if you are deploying from an agent object .
- Python Object To deploy the agent on Vertex AI, use client.agent engines.create to pass in the local agent object along with any optional configurations : remote agent = client . agent engines . create ( agent = local agent , # Optional. config = { "requirements" : requirements , # Optional. "extra packages" : extra packages , # Optional. "gcs dir name" : gcs dir name , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) Deployment takes a few minutes, during which the following steps happen in the background: A bundle of the following artifacts are generated locally: .pkl a pickle file corresponding to local agent. requirements.txt a text file containing the package requirements . dependencies.tar.gz a tar file containing any extra packages .
- The following is an example of deploying an agent from source files: from google.cloud.aiplatform import vertexai Example file structure: /agent directory ├── agent.py ├── requirements.txt Example agent directory/agent.py: class MyAgent: def ask(self, question: str) -> str: return f"Answer to {question}" root agent = MyAgent() remote agent = client . agent engines . create ( config = { "display name" : "My Agent" , "description" : "An agent deployed from a local source." , "source packages" : [ "agent directory" ], "entrypoint module" : "agent directory.agent" , "entrypoint object" : "root agent" , "requirements file" : "requirements.txt" , "class methods" : [ { "name" : "ask" , "api mode" : "" , "parameters" : { "type" : "object" , "properties" : { "question" : { "type" : "string" } }, "required" : [ "question" ] }}, ], Other optional configs: "env vars": {...}, "service account": "...", } ) Dockerfile To deploy from Dockerfile on Vertex AI, it follows a similar approach to deploying from source files .

### "Develop an Agent2Agent agent \_|\_ Vertex AI Agent Builder \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a](https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Define an AgentCard The following code sample defines an AgentCard for a currency exchange rate agent: from a2a.types import AgentCard , AgentSkill from vertexai.preview.reasoning engines.templates.a2a import create agent card Define the skill for the CurrencyAgent currency skill = AgentSkill ( id = 'get exchange rate' , name = 'Get Currency Exchange Rate' , description = 'Retrieves the exchange rate between two currencies on a specified date.' , tags = [ 'Finance' , 'Currency' , 'Exchange Rate' ], examples = [ 'What is the exchange rate from USD to EUR?' , 'How many Japanese Yen is 1 US dollar worth today?' , ], ) Create the agent card using the utility function agent card = create agent card ( agent name = 'Currency Exchange Agent' , description = 'An agent that can provide currency exchange rates' , skills = [ currency skill ] ) Define an AgentExecutor The following code example defines an AgentExecutor that responds with the currency exchange rate.
- If the tool returns an error, inform the user about the error.""" , tools = [ get exchange rate ], ) Create a local agent Once you have defined your agent's components, create an instance of the A2aAgent class that uses the AgentCard , AgentExecutor , and LlmAgent to begin local testing. from vertexai.preview.reasoning engines import A2aAgent a2a agent = A2aAgent ( agent card = agent card , # Assuming agent card is defined agent executor builder = lambda : CurrencyAgentExecutorWithRunner ( agent = my llm agent , ) ) a2a agent . set up () The A2A Agent template helps you create an A2A-compliant service.
- To see an example of Get started with A2A on Agent Engine, run the "Get started with A2A on Agent Engine" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub The core workflow involves the following steps: Define key components Create local agent Test the local agent Define agent components To create an A2A agent, you need to define the following components: an AgentCard , an AgentExecutor , and an ADK LlmAgent .
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Develop an Agent2Agent agent Stay organized with collections Save and categorize content based on your preferences.

