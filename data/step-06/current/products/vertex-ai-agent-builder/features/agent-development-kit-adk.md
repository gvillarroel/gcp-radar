---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.317Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Agent Development Kit (ADK)"
feature_slug: "agent-development-kit-adk"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-development-kit/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-adk"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming"
keywords:
  - "agent"
  - "development"
  - "kit"
  - "adk"
  - "has"
  - "become"
  - "available"
  - "in"
---

# Agent Development Kit (ADK)

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Agent Development Kit (ADK) has become available in preview.

## Extended Definition

Agent Development Kit (ADK) has become available in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-development-kit/overview](https://docs.cloud.google.com/agent-builder/agent-development-kit/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-adk](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-adk)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk](https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk)
- [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)

## Supporting Pages

### "Overview of Agent Development Kit \_|\_ Vertex AI Agent Builder \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-builder/agent-development-kit/overview](https://docs.cloud.google.com/agent-builder/agent-development-kit/overview)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ADK quickstart (open source documentation) : This quickstart guides you through installing the Agent Development Kit (ADK), setting up a basic agent with multiple tools, and running the agent locally either in the terminal or in the interactive, browser-based dev UI.
- Agent Development Kit (ADK) is a flexible and modular open-source framework for developing and deploying AI agents.
- You can use the following resources to get started with ADK: Quickstart with Vertex AI Agent Engine : This quickstart guides you through setting up your Google Cloud project and Vertex AI SDK for Python, developing your ADK agent, deploying the agent to Vertex AI Agent Engine Runtime, and testing the deployed agent.
- We recommend deploying your ADK agent to Vertex AI Agent Engine Runtime, a fully managed Google Cloud service specifically designed for deploying, managing, and scaling AI agents built with frameworks such as ADK.

### "Quickstart with Agent Development Kit \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-adk](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-adk)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- So, the agent doesn't know any user preferences, such as their preferred temperature, as shown in the following example: First turn: User : "Can you fix the temperature?" (Tool Call) : ADK tries to fetch memories; no memories are available.
- After you configure your Agent Development Kit (ADK) agent to use Memory Bank, your agent orchestrates calls to Memory Bank to manage long-term memories for you.
- Cloud Run To see an example of using Memory Bank with Cloud Run, run the "Get started with Sessions and Memory Bank for ADK agents in Cloud Run" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To deploy your agent to Cloud Run, refer to the instructions in the ADK documentation to learn how to define your agent to deploy to Cloud Run. adk deploy cloud run \ ... --memory service uri = agentengine:// AGENT ENGINE ID GKE To see an example of using Memory Bank with Google Kubernetes Engine, run the "Get started with Sessions and Memory Bank for ADK agents in Google Kubernetes Engine" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To deploy your agent to Google Kubernetes Engine (GKE), refer to the instructions in the ADK documentation to learn how to define your agent to deploy to GKE. adk deploy gke \ ... --memory service uri = agentengine:// AGENT ENGINE ID ADK Web Important: ADK Web is not meant for use in production deployments.
- You can either send a subset of events (with callback context.add events to memory ) or all of the events in a session (with callback context.add session to memory ) to be processed in the background: from google.adk.agents.callback context import CallbackContext async def generate memories callback ( callback context : CallbackContext ): Option 1 (Recommended): Send events to Memory Bank for memory generation, which is ideal for incremental processing of events. await callback context . add events to memory ( events = callback context . session . events [ - 5 : - 1 ]) Option 2: Send the full session to Memory Bank for memory generation.

### "Develop an Agent Development Kit agent \_|\_ Vertex AI Agent Builder \_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk](https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to develop an agent using the Agent Development Kit template (the AdkApp class in the Vertex AI SDK for Python).
- If you want to override the default memory service, you can define a memory service builder function that returns a BaseMemoryService as follows: def memory service builder (): from google.adk.memory import InMemoryMemoryService return InMemoryMemoryService () Pass your database to AdkApp as memory service builder= : from vertexai.agent engines import AdkApp app = AdkApp ( agent = agent , # Required. memory service builder = memory service builder , # Optional. ) Use the agent with memories Test your ADK agent with memories: Create a session and interact with the agent: initial session = await app . async create session ( user id = " USER ID " ) async for event in app . async stream query ( user id = " USER ID " , session id = initial session . id , message = "Can you update the temperature to my preferred temperature?" , ): print ( event ) Since there are no available memories during the first session and the agent does not know any user preferences, the agent may reply with a response such as "What is your preferred temperature?" You can respond with the following command: async for event in app . async stream query ( user id = " USER ID " , session id = initial session . id , message = "I like it at 71 degrees" , ): print ( event ) The agent might return with a response such as "Setting the temperature to 71 degrees Fahrenheit.
- Use the async search memory method to display the agent's memories: response = await app . async search memory ( user id = " USER ID " , query = "Fix the temperature!" , ) print ( response ) What's next Sessions overview Memory Bank overview Use an Agent Development Kit agent .
- To asynchronously query the agent, use the AdkApp.async stream query method: async for event in app . async stream query ( user id = " USER ID " , session id = SESSION ID , # Optional. you can pass in the session id when querying the agent message = "What is the exchange rate from US dollars to Swedish currency on 2025-04-03?" , ): print ( event ) The agent might respond with a request for information like the following: { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'text' : 'I need to know the Swedish currency code to ' 'provide you with the exchange rate.' }], 'role' : 'model' }, 'id' : 'wIgZAtQ4' , #... } You can send a response (for example, "SEK" ) on behalf of USER ID within the session corresponding to session by specifying: async for event in app . async stream query ( user id = " USER ID " , session id = session . id , # Optional. you can pass in the session id when querying the agent message = "SEK" , ): print ( event ) You should receive a continuation of the conversation like the following sequence of dictionaries: { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'function call' : { 'args' : { 'currency date' : '2025-04-03' , 'currency from' : 'USD' , 'currency to' : 'SEK' }, 'id' : 'adk-2b9230a6-4b92-4a1b-9a65-b708ff6c68b6' , 'name' : 'get exchange rate' }}], 'role' : 'model' }, 'id' : 'bOPHtzji' , ... } { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'function response' : { 'id' : 'adk-2b9230a6-4b92-4a1b-9a65-b708ff6c68b6' , 'name' : 'get exchange rate' , 'response' : { 'amount' : 1.0 , 'base' : 'USD' , 'date' : '2025-04-03' , 'rates' : { 'SEK' : 9.6607 }}}}], 'role' : 'user' }, 'id' : '9AoDFmiL' , ... } { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'text' : 'The exchange rate from USD to SEK on ' '2025-04-03 is 1 USD to 9.6607 SEK.' }], 'role' : 'model' }, 'id' : 'hmle7trT' , ... } (Optional) Manage memories By default, AdkApp uses an in-memory implementation of agentic memory when running locally and uses Vertex AI Agent Engine Memory Bank after you deploy the agent to Vertex AI Agent Engine.

### "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- For example, a set of two responses in the first turn might look like the following: Enter your next question: Weather in San Diego? {'bidiStreamOutput': {'output': "FunctionCall: {'name': 'get current weather', 'args': {'location': 'San Diego'}}\n"}} {'bidiStreamOutput': {'output': 'end of turn'}} Enter your next question: exit Use an Agent Development Kit agent If you developed your agent using Agent Development Kit (ADK), you can use bidirectional streaming to interact with the Gemini Live API .
- You can use bidirectional streaming to interact with Gemini Live API directly or using Agent Development Kit (ADK) on Vertex AI Agent Engine.
- Note that the EXPERIMENTAL agent server mode is required for an agent that supports bidirectional streaming: remote live agent = client . agent engines . create ( agent = live agent , config = { "staging bucket" : STAGING BUCKET , "requirements" : [ "google-cloud-aiplatform[agent engines,adk]==1.88.0" , "cloudpickle==3.0" , "websockets" ], "agent server mode" : vertexai types .
- The following example creates a conversation agent that takes user text questions and receives Gemini Live API response audio data: import numpy as np from google.adk.agents.live request queue import LiveRequest from google.adk.events import Event from google.genai import types def prepare live request ( input text : str ) - > LiveRequest : part = types .

