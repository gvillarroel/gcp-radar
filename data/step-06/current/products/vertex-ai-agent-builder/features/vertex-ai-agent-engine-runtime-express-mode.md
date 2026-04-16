---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.311Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine Runtime Express mode"
feature_slug: "vertex-ai-agent-engine-runtime-express-mode"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/evaluate"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "runtime"
  - "express"
  - "mode"
  - "now"
---

# Vertex AI Agent Engine Runtime Express mode

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agent Engine Runtime now supports an Express mode.

## Extended Definition

Vertex AI Agent Engine Runtime now supports an Express mode.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: N/A

Evidence snippets:
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.
- This page covers the following topics: Creating an agent with agent identity : Create an agent such that the agent automatically receives a unique identity when you deploy to Vertex AI Agent Engine Runtime.
- This page describes how to use Identity Access Management (IAM) agent identity to provide security and access management features when using agents on Vertex AI Agent Engine Runtime.

### "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can modify the following example with any data recognizable by your agent, using any applicable termination logic for input stream and output stream: async with client . aio . live . agent engines . connect ( agent engine = remote live agent . api resource . name , config = { "class method" : "bidi stream query" } ) as connection : while True : input str = input ( "Enter your question: " ) if input str == "exit" : break await connection . send ({ "input" : input str }) while True : response = await connection . receive () print ( response ) if response [ "bidiStreamOutput" ][ "output" ] == "end of turn" : break Vertex AI Agent Engine Runtime streams responses as a sequence of iteratively generated objects.
- Note that the EXPERIMENTAL agent server mode is required for an agent that supports bidirectional streaming: remote live agent = client . agent engines . create ( agent = live agent , config = { "staging bucket" : STAGING BUCKET , "requirements" : [ "google-cloud-aiplatform[agent engines,adk]==1.88.0" , "cloudpickle==3.0" , "websockets" ], "agent server mode" : vertexai types .
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Bidirectional streaming with Vertex AI Agent Engine Runtime Stay organized with collections Save and categorize content based on your preferences.
- Bidirectional streaming with Vertex AI Agent Engine Runtime supports interactive, real-time agent use cases and data exchange for multimodal live APIs.

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the launch stage descriptions . from vertexai.preview import reasoning engines def runnable with tools builder ( model , runnable kwargs = None , kwargs ): from llama index.core.query pipeline import QueryPipeline from llama index.core.tools import FunctionTool from llama index.core.agent import ReActAgent llama index tools = [] for tool in runnable kwargs . get ( "tools" ): llama index tools . append ( FunctionTool . from defaults ( tool )) agent = ReActAgent . from tools ( llama index tools , llm = model , verbose = True ) return QueryPipeline ( modules = { "agent" : agent }) agent = reasoning engines .
- Develop and deploy agents on Vertex AI Agent Engine This page demonstrates how to create and deploy an agent to Vertex AI Agent Engine Runtime using the following agent frameworks: LangGraph LangChain AG2 LlamaIndex Query Pipeline (preview) This quickstart guides you through the following steps: Set up your Google Cloud project.
- LanggraphAgent ( model = "gemini-2.0-flash" , tools = [ get exchange rate ], model kwargs = { "temperature" : 0.28 , "max output tokens" : 1000 , "top p" : 0.95 , }, ) LangChain from vertexai import agent engines agent = agent engines .
- LangchainAgent ( model = "gemini-2.0-flash" , tools = [ get exchange rate ], model kwargs = { "temperature" : 0.28 , "max output tokens" : 1000 , "top p" : 0.95 , }, ) AG2 from vertexai import agent engines agent = agent engines .

### "Evaluate agents using the GenAI Client in Vertex AI SDK \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- For more information on developing an agent, see Develop an Agent Development Kit agent . from google.adk import Agent Define Agent Tools def search products ( query : str ): """Searches for products based on a query.""" Mock response for demonstration if "headphones" in query . lower (): return { "products" : [{ "name" : "Wireless Headphones" , "id" : "B08H8H8H8H" }]} else : return { "products" : []} def get product details ( product id : str ): """Gets the details for a given product ID.""" if product id == "B08H8H8H8H" : return { "details" : "Noise-cancelling, 20-hour battery life." } else : return { "error" : "Product not found." } def add to cart ( product id : str , quantity : int ): """Adds a specified quantity of a product to the cart.""" return { "status" : f "Added { quantity } of { product id } to cart." } Define Agent my agent = Agent ( model = "gemini-2.5-flash" , name = 'ecommerce agent' , instruction = 'You are an ecommerce expert' , tools = [ search products , get product details , add to cart ], ) Deploy agent Deploy your agent to Vertex AI Agent Engine Runtime.
- Deploy an agent : Deploy the agent to Vertex AI Agent Engine Runtime.
- AdkApp ( agent = root agent , ) remote app = client . agent engines . create ( agent = app , config = { "staging bucket" : gs : // BUCKET NAME , "requirements" : [ 'google-cloud-aiplatform[adk,agent engines]' ], "env vars" : { "GOOGLE CLOUD AGENT ENGINE ENABLE TELEMETRY" : "true" } } ) return remote app agent engine = deploy adk agent ( my agent ) agent engine resource name = agent engine . api resource . name To get the list of agents that are deployed to Vertex AI Agent Engine, see Manage deployed agents .
- Install the Vertex AI SDK for Python: %pip install google-cloud-aiplatform [ adk,agent engines ] %pip install --upgrade --force-reinstall -q google-cloud-aiplatform [ evaluation ] Set up your credentials.

