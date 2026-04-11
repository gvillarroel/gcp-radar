---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.338Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Agent-to-Agent (A2A) protocol support in Vertex AI Agent Engine"
feature_slug: "agent-to-agent-a2a-protocol-support-in-vertex-ai-agent-engine"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/evaluate"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a"
keywords:
  - "agent"
  - "to"
  - "a2a"
  - "protocol"
  - "in"
  - "vertex"
  - "ai"
  - "engine"
---

# Agent-to-Agent (A2A) protocol support in Vertex AI Agent Engine

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Agent Engine now supports developing, deploying, and using agents that follow the A2A protocol.

## Extended Definition

Agent Engine now supports developing, deploying, and using agents that follow the A2A protocol.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a](https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This also includes access to other agents hosted on Vertex AI Agent Engine using Agent2Agent (A2A) Protocol .
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.

### "Develop a LlamaIndex Query Pipeline agent \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- Source ID: `site-docs-reference`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- NEXT : '3' > : RelatedNodeInfo ( node id = 'f7d2cb7e-fa0c-40bf-b8e7-b888e36b87f9' , node type = '1' , metadata = {}, hash = 'db7cc1a67fa3afd1e5f24c8c61583781ce6a00c444da8f25a5374468c17b7de0' ) }, metadata template = ' {key} : {value} ' , metadata separator = ' \n ' , text = 'So I looked around to see what I could salvage from the wreckage of my plans, and there was Lisp...' , mimetype = 'text/plain' , start char idx = 7166 , end char idx = 11549 , metadata separator = ' \n ' , text template = ' {metadata str} \n\n {content} ' ), score = 0.7403571819090398 ) ] To use the retriever inside LlamaIndexQueryPipelineAgent , add it under the retriever builder= argument: from vertexai.preview import reasoning engines agent = reasoning engines .
- Request () creds . refresh ( auth req ) if model kwargs is None : model kwargs = {} endpoint = f "https:// { location } -aiplatform.googleapis.com" api base = f ' { endpoint } /v1beta1/projects/ { project } /locations/ { location } /endpoints/openapi' return OpenAILike ( model = model name , api base = api base , api key = creds . token , model kwargs , ) Use the model in LlamaIndexQueryPipelineAgent : from vertexai.preview import reasoning engines agent = reasoning engines .
- Define model builder to return the Anthropic model: def model builder ( , model name : str , model kwargs = None , kwargs ): from llama index.llms.anthropic import Anthropic return Anthropic ( model = model name , model kwargs ) Use the Anthropic model in LlamaIndexQueryPipelineAgent : from vertexai.preview import reasoning engines agent = reasoning engines .
- ChatPromptTemplate ( message templates = message templates ) You can use the full prompt template when you instantiate the agent in the following example: from vertexai.preview import reasoning engines system instruction = "I help to find what is Paul Graham's life in College" agent = reasoning engines .

### "Evaluate agents using the GenAI Client in Vertex AI SDK \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on developing an agent, see Develop an Agent Development Kit agent . from google.adk import Agent Define Agent Tools def search products ( query : str ): """Searches for products based on a query.""" Mock response for demonstration if "headphones" in query . lower (): return { "products" : [{ "name" : "Wireless Headphones" , "id" : "B08H8H8H8H" }]} else : return { "products" : []} def get product details ( product id : str ): """Gets the details for a given product ID.""" if product id == "B08H8H8H8H" : return { "details" : "Noise-cancelling, 20-hour battery life." } else : return { "error" : "Product not found." } def add to cart ( product id : str , quantity : int ): """Adds a specified quantity of a product to the cart.""" return { "status" : f "Added { quantity } of { product id } to cart." } Define Agent my agent = Agent ( model = "gemini-2.5-flash" , name = 'ecommerce agent' , instruction = 'You are an ecommerce expert' , tools = [ search products , get product details , add to cart ], ) Deploy agent Deploy your agent to Vertex AI Agent Engine Runtime.
- AdkApp ( agent = root agent , ) remote app = client . agent engines . create ( agent = app , config = { "staging bucket" : gs : // BUCKET NAME , "requirements" : [ 'google-cloud-aiplatform[adk,agent engines]' ], "env vars" : { "GOOGLE CLOUD AGENT ENGINE ENABLE TELEMETRY" : "true" } } ) return remote app agent engine = deploy adk agent ( my agent ) agent engine resource name = agent engine . api resource . name To get the list of agents that are deployed to Vertex AI Agent Engine, see Manage deployed agents .
- Args: root agent: The ADK agent to deploy. """ app = vertexai . agent engines .
- Deploy an agent : Deploy the agent to Vertex AI Agent Engine Runtime.

### "Develop an Agent2Agent agent \_|\_ Vertex AI Agent Builder \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a](https://docs.cloud.google.com/agent-builder/agent-engine/develop/a2a)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Define an AgentCard The following code sample defines an AgentCard for a currency exchange rate agent: from a2a.types import AgentCard , AgentSkill from vertexai.preview.reasoning engines.templates.a2a import create agent card Define the skill for the CurrencyAgent currency skill = AgentSkill ( id = 'get exchange rate' , name = 'Get Currency Exchange Rate' , description = 'Retrieves the exchange rate between two currencies on a specified date.' , tags = [ 'Finance' , 'Currency' , 'Exchange Rate' ], examples = [ 'What is the exchange rate from USD to EUR?' , 'How many Japanese Yen is 1 US dollar worth today?' , ], ) Create the agent card using the utility function agent card = create agent card ( agent name = 'Currency Exchange Agent' , description = 'An agent that can provide currency exchange rates' , skills = [ currency skill ] ) Define an AgentExecutor The following code example defines an AgentExecutor that responds with the currency exchange rate.
- If the tool returns an error, inform the user about the error.""" , tools = [ get exchange rate ], ) Create a local agent Once you have defined your agent's components, create an instance of the A2aAgent class that uses the AgentCard , AgentExecutor , and LlmAgent to begin local testing. from vertexai.preview.reasoning engines import A2aAgent a2a agent = A2aAgent ( agent card = agent card , # Assuming agent card is defined agent executor builder = lambda : CurrencyAgentExecutorWithRunner ( agent = my llm agent , ) ) a2a agent . set up () The A2A Agent template helps you create an A2A-compliant service.
- To see an example of Get started with A2A on Agent Engine, run the "Get started with A2A on Agent Engine" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub The core workflow involves the following steps: Define key components Create local agent Test the local agent Define agent components To create an A2A agent, you need to define the following components: an AgentCard , an AgentExecutor , and an ADK LlmAgent .
- It takes a CurrencyAgent instance and initializes the ADK Runner to execute requests. import requests from a2a.server.agent execution import AgentExecutor , RequestContext from a2a.server.events import EventQueue from a2a.server.tasks import TaskUpdater from a2a.types import TaskState , TextPart , UnsupportedOperationError , Part from a2a.utils import new agent text message from a2a.utils.errors import ServerError from google.adk import Runner from google.adk.agents import LlmAgent from google.adk.artifacts import InMemoryArtifactService from google.adk.memory.in memory memory service import InMemoryMemoryService from google.adk.sessions import InMemorySessionService from google.genai import types class CurrencyAgentExecutorWithRunner ( AgentExecutor ): """Executor that takes an LlmAgent instance and initializes the ADK Runner internally.""" def init ( self , agent : LlmAgent ): self . agent = agent self . runner = None def init adk ( self ): if not self . runner : self . runner = Runner ( app name = self . agent . name , agent = self . agent , artifact service = InMemoryArtifactService (), session service = InMemorySessionService (), memory service = InMemoryMemoryService (), ) async def cancel ( self , context : RequestContext , event queue : EventQueue ): raise ServerError ( error = UnsupportedOperationError ()) async def execute ( self , context : RequestContext , event queue : EventQueue , ) - > None : self . init adk () # Initialize on first execute call if not context . message : return user id = context . message . metadata . get ( 'user id' ) if context . message and context . message . metadata else 'a2a user' updater = TaskUpdater ( event queue , context . task id , context . context id ) if not context . current task : await updater . submit () await updater . start work () query = context . get user input () content = types .

