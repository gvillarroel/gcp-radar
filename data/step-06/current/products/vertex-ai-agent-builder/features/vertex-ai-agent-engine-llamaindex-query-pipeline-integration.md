---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.350Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine LlamaIndex Query Pipeline integration"
feature_slug: "vertex-ai-agent-engine-llamaindex-query-pipeline-integration"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/tracing"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "llamaindex"
  - "query"
  - "pipeline"
  - "integration"
---

# Vertex AI Agent Engine LlamaIndex Query Pipeline integration

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

LlamaIndex Query Pipeline integration is now available in preview for Vertex AI Agent Engine.

## Extended Definition

LlamaIndex Query Pipeline integration is now available in preview for Vertex AI Agent Engine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/tracing](https://docs.cloud.google.com/agent-builder/agent-engine/manage/tracing)

## Supporting Pages

### "Develop a LlamaIndex Query Pipeline agent \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- Source ID: `site-docs-reference`
- Final score: 312
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- NEXT : '3' > : RelatedNodeInfo ( node id = 'f7d2cb7e-fa0c-40bf-b8e7-b888e36b87f9' , node type = '1' , metadata = {}, hash = 'db7cc1a67fa3afd1e5f24c8c61583781ce6a00c444da8f25a5374468c17b7de0' ) }, metadata template = ' {key} : {value} ' , metadata separator = ' \n ' , text = 'So I looked around to see what I could salvage from the wreckage of my plans, and there was Lisp...' , mimetype = 'text/plain' , start char idx = 7166 , end char idx = 11549 , metadata separator = ' \n ' , text template = ' {metadata str} \n\n {content} ' ), score = 0.7403571819090398 ) ] To use the retriever inside LlamaIndexQueryPipelineAgent , add it under the retriever builder= argument: from vertexai.preview import reasoning engines agent = reasoning engines .
- Request () creds . refresh ( auth req ) if model kwargs is None : model kwargs = {} endpoint = f "https:// { location } -aiplatform.googleapis.com" api base = f ' { endpoint } /v1beta1/projects/ { project } /locations/ { location } /endpoints/openapi' return OpenAILike ( model = model name , api base = api base , api key = creds . token , model kwargs , ) Use the model in LlamaIndexQueryPipelineAgent : from vertexai.preview import reasoning engines agent = reasoning engines .
- LlamaIndexQueryPipelineAgent ( model = model , system instruction = system instruction , ) You can override the default prompt template with your own prompt template, and use it when constructing the agent: prompt str = "Please answer {question} about {name} " prompt tmpl = PromptTemplate ( prompt str ) from vertexai.preview import reasoning engines agent = reasoning engines .
- Define model builder to return the Anthropic model: def model builder ( , model name : str , model kwargs = None , kwargs ): from llama index.llms.anthropic import Anthropic return Anthropic ( model = model name , model kwargs ) Use the Anthropic model in LlamaIndexQueryPipelineAgent : from vertexai.preview import reasoning engines agent = reasoning engines .

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Develop and deploy agents on Vertex AI Agent Engine This page demonstrates how to create and deploy an agent to Vertex AI Agent Engine Runtime using the following agent frameworks: LangGraph LangChain AG2 LlamaIndex Query Pipeline (preview) This quickstart guides you through the following steps: Set up your Google Cloud project.
- For more information, see the launch stage descriptions . agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) Deploy an agent Deploy the agent by creating a reasoningEngine resource in Vertex AI: LangGraph remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) LangChain remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) AG2 remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,ag2]" ], }, ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For more information, see the launch stage descriptions . from vertexai.preview import reasoning engines def runnable with tools builder ( model , runnable kwargs = None , kwargs ): from llama index.core.query pipeline import QueryPipeline from llama index.core.tools import FunctionTool from llama index.core.agent import ReActAgent llama index tools = [] for tool in runnable kwargs . get ( "tools" ): llama index tools . append ( FunctionTool . from defaults ( tool )) agent = ReActAgent . from tools ( llama index tools , llm = model , verbose = True ) return QueryPipeline ( modules = { "agent" : agent }) agent = reasoning engines .
- For more information, see the launch stage descriptions . remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,llama index]" ], }, ) Use an agent Test the deployed agent by sending a query: LangGraph remote agent . query ( input = { "messages" : [ ( "user" , "What is the exchange rate from US dollars to SEK today?" ), ]}) LangChain remote agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) AG2 remote agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.

### Trace an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/tracing](https://docs.cloud.google.com/agent-builder/agent-engine/manage/tracing)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For example: from vertexai.preview import reasoning engines def runnable with tools builder ( model , runnable kwargs = None , kwargs ): from llama index.core.query pipeline import QueryPipeline from llama index.core.tools import FunctionTool from llama index.core.agent import ReActAgent llama index tools = [] for tool in runnable kwargs . get ( "tools" ): llama index tools . append ( FunctionTool . from defaults ( tool )) agent = ReActAgent . from tools ( llama index tools , llm = model , verbose = True ) return QueryPipeline ( modules = { "agent" : agent }) agent = reasoning engines .
- For example: from vertexai.agent engines import LanggraphAgent agent = LanggraphAgent ( model = model , # Required. tools = [ get exchange rate ], # Optional. enable tracing = True , # [New] Optional. ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- LlamaIndexQueryPipelineAgent ( model = "gemini-2.0-flash" , runnable kwargs = { "tools" : [ get exchange rate ]}, runnable builder = runnable with tools builder , enable tracing = True , # Optional ) Custom To enable tracing for custom agents , visit Tracing using OpenTelemetry for details.
- To enable tracing for LlamaIndexQueryPipelineAgent , specify enable tracing=True when you develop a LlamaIndex agent .

