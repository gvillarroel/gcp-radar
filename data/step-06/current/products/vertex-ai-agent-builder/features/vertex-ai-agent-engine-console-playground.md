---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.310Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine console playground"
feature_slug: "vertex-ai-agent-engine-console-playground"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/evaluate"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "console"
  - "playground"
  - "the"
  - "now"
---

# Vertex AI Agent Engine console playground

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console now includes a playground to test and interact with agents in Vertex AI Agent Engine.

## Extended Definition

The Google Cloud console now includes a playground to test and interact with agents in Vertex AI Agent Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: N/A

Evidence snippets:
- List agents and their identities You can see the list of your agent identities in Vertex AI Agent Engine using the Google Cloud console and command line.
- You can view the identity through the Vertex AI Agent Engine Google Cloud console and API.
- Console In the Google Cloud console, go to the Vertex AI Agent Engine page.
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .

### "Evaluate agents using the GenAI Client in Vertex AI SDK \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on developing an agent, see Develop an Agent Development Kit agent . from google.adk import Agent Define Agent Tools def search products ( query : str ): """Searches for products based on a query.""" Mock response for demonstration if "headphones" in query . lower (): return { "products" : [{ "name" : "Wireless Headphones" , "id" : "B08H8H8H8H" }]} else : return { "products" : []} def get product details ( product id : str ): """Gets the details for a given product ID.""" if product id == "B08H8H8H8H" : return { "details" : "Noise-cancelling, 20-hour battery life." } else : return { "error" : "Product not found." } def add to cart ( product id : str , quantity : int ): """Adds a specified quantity of a product to the cart.""" return { "status" : f "Added { quantity } of { product id } to cart." } Define Agent my agent = Agent ( model = "gemini-2.5-flash" , name = 'ecommerce agent' , instruction = 'You are an ecommerce expert' , tools = [ search products , get product details , add to cart ], ) Deploy agent Deploy your agent to Vertex AI Agent Engine Runtime.
- AdkApp ( agent = root agent , ) remote app = client . agent engines . create ( agent = app , config = { "staging bucket" : gs : // BUCKET NAME , "requirements" : [ 'google-cloud-aiplatform[adk,agent engines]' ], "env vars" : { "GOOGLE CLOUD AGENT ENGINE ENABLE TELEMETRY" : "true" } } ) return remote app agent engine = deploy adk agent ( my agent ) agent engine resource name = agent engine . api resource . name To get the list of agents that are deployed to Vertex AI Agent Engine, see Manage deployed agents .
- Install the Vertex AI SDK for Python: %pip install google-cloud-aiplatform [ adk,agent engines ] %pip install --upgrade --force-reinstall -q google-cloud-aiplatform [ evaluation ] Set up your credentials.
- Args: root agent: The ADK agent to deploy. """ app = vertexai . agent engines .

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- Remove by resource name If you know exactly which memory resource you want to remove, you can delete a specific memory using its resource name: client . agent engines . memories . delete ( name = MEMORY NAME , config = { Set to false (default) if you want to delete the memory asynchronously. "wait for completion" : True } ) Replace the following: MEMORY NAME : The name of the Memory to delete.
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the launch stage descriptions . agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) Deploy an agent Deploy the agent by creating a reasoningEngine resource in Vertex AI: LangGraph remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) LangChain remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) AG2 remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,ag2]" ], }, ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For more information, see the launch stage descriptions . from vertexai.preview import reasoning engines def runnable with tools builder ( model , runnable kwargs = None , kwargs ): from llama index.core.query pipeline import QueryPipeline from llama index.core.tools import FunctionTool from llama index.core.agent import ReActAgent llama index tools = [] for tool in runnable kwargs . get ( "tools" ): llama index tools . append ( FunctionTool . from defaults ( tool )) agent = ReActAgent . from tools ( llama index tools , llm = model , verbose = True ) return QueryPipeline ( modules = { "agent" : agent }) agent = reasoning engines .
- Install and initialize the Vertex AI SDK for Python Run the following command to install the Vertex AI SDK for Python and other required packages: LangGraph pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,langchain ]>= 1 .112 LangChain pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,langchain ]>= 1 .112 AG2 pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,ag2 ]>= 1 .112 LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Local Shell Run the following command: gcloud auth application-default login Run the following code to import Vertex AI Agent Engine and initialize the SDK: (Optional) Before testing an agent you develop , you need to import Vertex AI Agent Engine and initialize the SDK as follows: Google Cloud project import vertexai vertexai . init ( project = " PROJECT ID " , # Your project ID. location = " LOCATION " , # Your cloud region. ) Where: PROJECT ID is the Google Cloud project ID under which you develop and deploy agents LOCATION is one of the supported regions .

