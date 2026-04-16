---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.317Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Agent Garden"
feature_slug: "agent-garden"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline"
  - "https://docs.cloud.google.com/agent-builder/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart"
keywords:
  - "agent"
  - "garden"
  - "is"
  - "now"
  - "available"
  - "in"
  - "preview"
  - "vertex"
---

# Agent Garden

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Agent Garden is now available in preview in Vertex AI Agent Builder.

## Extended Definition

Agent Garden is now available in preview in Vertex AI Agent Builder.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- [https://docs.cloud.google.com/agent-builder/overview](https://docs.cloud.google.com/agent-builder/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)

## Supporting Pages

### "Develop a LlamaIndex Query Pipeline agent \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- Source ID: `site-docs-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NEXT : '3' > : RelatedNodeInfo ( node id = 'f7d2cb7e-fa0c-40bf-b8e7-b888e36b87f9' , node type = '1' , metadata = {}, hash = 'db7cc1a67fa3afd1e5f24c8c61583781ce6a00c444da8f25a5374468c17b7de0' ) }, metadata template = ' {key} : {value} ' , metadata separator = ' \n ' , text = 'So I looked around to see what I could salvage from the wreckage of my plans, and there was Lisp...' , mimetype = 'text/plain' , start char idx = 7166 , end char idx = 11549 , metadata separator = ' \n ' , text template = ' {metadata str} \n\n {content} ' ), score = 0.7403571819090398 ) ] To use the retriever inside LlamaIndexQueryPipelineAgent , add it under the retriever builder= argument: from vertexai.preview import reasoning engines agent = reasoning engines .
- Request () creds . refresh ( auth req ) if model kwargs is None : model kwargs = {} endpoint = f "https:// { location } -aiplatform.googleapis.com" api base = f ' { endpoint } /v1beta1/projects/ { project } /locations/ { location } /endpoints/openapi' return OpenAILike ( model = model name , api base = api base , api key = creds . token , model kwargs , ) Use the model in LlamaIndexQueryPipelineAgent : from vertexai.preview import reasoning engines agent = reasoning engines .
- ChatPromptTemplate ( message templates = message templates ) You can use the full prompt template when you instantiate the agent in the following example: from vertexai.preview import reasoning engines system instruction = "I help to find what is Paul Graham's life in College" agent = reasoning engines .
- He attended the Accademia, but was disappointed by the lack of instruction." To use the response synthesizer inside LlamaIndexQueryPipelineAgent , add it under the response synthesizer builder= argument: from vertexai.preview import reasoning engines agent = reasoning engines .

### Vertex AI Agent Builder overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/overview](https://docs.cloud.google.com/agent-builder/overview)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detect threats with Security Command Center : Agent Engine Threat Detection (Preview) is a built-in service of Security Command Center that helps you detect and investigate potential attacks on agents that are deployed to Vertex AI Agent Engine Runtime.
- Agent Garden (Supported in preview ) is a library in the Google Cloud console where you can find and explore sample agents and tools that are designed to accelerate your development.
- Vertex AI Agent Builder Workflow for building and deploying agents Discover agent samples and tools specific to your use cases in the Agent Garden .
- Agent Tools are tools that you can equip your ADK agent to use, including: Built-in tools such as Grounding with Google Search , Vertex AI Search , and Code Execution RAG Engine for retrieval-augmented generation (RAG) Google Cloud tools to connect to: Your APIs managed in Apigee API hub 100+ enterprise applications through Integration Connectors Custom integrations with Application Integration Model Context Protocol (MCP) tools Ecosystem tools such as LangChain tools, CrewAI tools, and GenAI Toolbox for Databases Govern : Monitor what your agents are doing with an audit trail for end-to-end observability.

### "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- Note: Bidirectional streaming is in Preview and is only available on EXPERIMENTAL server mode. from typing import AsyncIterable , Iterable class CustomAgent ( BidiStreamingAgent ): ... same get state and get state history function definition. async def get state bidi mode ( self , request queue : asyncio .
- Queue () async def generate input (): This is just an illustration, you're free to use any appropriate input generator. request queue . put nowait ( { "input" : "What is the exchange rate from US dolloars to Swedish currency" } ) time . sleep ( 5 ) request queue . put nowait ( { "input" : "What is the exchange rate from US dolloars to Euro currency" } ) time . sleep ( 5 ) request queue . put nowait ( "END" ) async def print query result (): async for chunk in agent . bidi stream query ( request queue ): pprint . pprint ( chunk , depth = 1 ) input task = asyncio . create task ( generate input ()) output task = asyncio . create task ( print query result ()) await asyncio . gather ( input task , output task , return exceptions = True ) The same bidirectional query connection can handle multiple requests and responses.
- You can modify the following example with any data recognizable by your agent, using any applicable termination logic for input stream and output stream: async with client . aio . live . agent engines . connect ( agent engine = remote live agent . api resource . name , config = { "class method" : "bidi stream query" } ) as connection : while True : input str = input ( "Enter your question: " ) if input str == "exit" : break await connection . send ({ "input" : input str }) while True : response = await connection . receive () print ( response ) if response [ "bidiStreamOutput" ][ "output" ] == "end of turn" : break Vertex AI Agent Engine Runtime streams responses as a sequence of iteratively generated objects.
- To see an example of using bidirectional streaming with Agent Engine, run the "Getting Started with Live API on Agent Engine" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Overview Bidirectional streaming provides a persistent, two-way communication channel between your application and the agent, letting you move beyond turn-based, request-response patterns.

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the launch stage descriptions . agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) Deploy an agent Deploy the agent by creating a reasoningEngine resource in Vertex AI: LangGraph remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) LangChain remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) AG2 remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,ag2]" ], }, ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Install and initialize the Vertex AI SDK for Python Run the following command to install the Vertex AI SDK for Python and other required packages: LangGraph pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,langchain ]>= 1 .112 LangChain pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,langchain ]>= 1 .112 AG2 pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,ag2 ]>= 1 .112 LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Develop and deploy agents on Vertex AI Agent Engine This page demonstrates how to create and deploy an agent to Vertex AI Agent Engine Runtime using the following agent frameworks: LangGraph LangChain AG2 LlamaIndex Query Pipeline (preview) This quickstart guides you through the following steps: Set up your Google Cloud project.
- For more information, see the launch stage descriptions . remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,llama index]" ], }, ) Use an agent Test the deployed agent by sending a query: LangGraph remote agent . query ( input = { "messages" : [ ( "user" , "What is the exchange rate from US dollars to SEK today?" ), ]}) LangChain remote agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) AG2 remote agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

