---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.348Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine ADK integration"
feature_slug: "vertex-ai-agent-engine-adk-integration"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk"
  - "https://docs.cloud.google.com/agent-builder/agent-development-kit/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "adk"
  - "integration"
  - "development"
  - "kit"
---

# Vertex AI Agent Engine ADK integration

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Agent Development Kit integration is now available in preview for Vertex AI Agent Engine.

## Extended Definition

Agent Development Kit integration is now available in preview for Vertex AI Agent Engine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk](https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk)
- [https://docs.cloud.google.com/agent-builder/agent-development-kit/overview](https://docs.cloud.google.com/agent-builder/agent-development-kit/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: N/A

Evidence snippets:
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- AGENT IDENTITY , "requirements" : [ "google-cloud-aiplatform[adk,agent engines]" ], "staging bucket" : f "gs://" BUCKET NAME ", }, ) print ( f "Effective Identity: { remote app . api resource . spec . effective identity } " ) where BUCKET NAME is the name of your Cloud Storage bucket.

### "Develop an Agent Development Kit agent \_|\_ Vertex AI Agent Builder \_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk](https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page shows you how to develop an agent using the Agent Development Kit template (the AdkApp class in the Vertex AI SDK for Python).
- To asynchronously query the agent, use the AdkApp.async stream query method: async for event in app . async stream query ( user id = " USER ID " , session id = SESSION ID , # Optional. you can pass in the session id when querying the agent message = "What is the exchange rate from US dollars to Swedish currency on 2025-04-03?" , ): print ( event ) The agent might respond with a request for information like the following: { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'text' : 'I need to know the Swedish currency code to ' 'provide you with the exchange rate.' }], 'role' : 'model' }, 'id' : 'wIgZAtQ4' , #... } You can send a response (for example, "SEK" ) on behalf of USER ID within the session corresponding to session by specifying: async for event in app . async stream query ( user id = " USER ID " , session id = session . id , # Optional. you can pass in the session id when querying the agent message = "SEK" , ): print ( event ) You should receive a continuation of the conversation like the following sequence of dictionaries: { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'function call' : { 'args' : { 'currency date' : '2025-04-03' , 'currency from' : 'USD' , 'currency to' : 'SEK' }, 'id' : 'adk-2b9230a6-4b92-4a1b-9a65-b708ff6c68b6' , 'name' : 'get exchange rate' }}], 'role' : 'model' }, 'id' : 'bOPHtzji' , ... } { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'function response' : { 'id' : 'adk-2b9230a6-4b92-4a1b-9a65-b708ff6c68b6' , 'name' : 'get exchange rate' , 'response' : { 'amount' : 1.0 , 'base' : 'USD' , 'date' : '2025-04-03' , 'rates' : { 'SEK' : 9.6607 }}}}], 'role' : 'user' }, 'id' : '9AoDFmiL' , ... } { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'text' : 'The exchange rate from USD to SEK on ' '2025-04-03 is 1 USD to 9.6607 SEK.' }], 'role' : 'model' }, 'id' : 'hmle7trT' , ... } (Optional) Manage memories By default, AdkApp uses an in-memory implementation of agentic memory when running locally and uses Vertex AI Agent Engine Memory Bank after you deploy the agent to Vertex AI Agent Engine.
- If you want to override the default memory service, you can define a memory service builder function that returns a BaseMemoryService as follows: def memory service builder (): from google.adk.memory import InMemoryMemoryService return InMemoryMemoryService () Pass your database to AdkApp as memory service builder= : from vertexai.agent engines import AdkApp app = AdkApp ( agent = agent , # Required. memory service builder = memory service builder , # Optional. ) Use the agent with memories Test your ADK agent with memories: Create a session and interact with the agent: initial session = await app . async create session ( user id = " USER ID " ) async for event in app . async stream query ( user id = " USER ID " , session id = initial session . id , message = "Can you update the temperature to my preferred temperature?" , ): print ( event ) Since there are no available memories during the first session and the agent does not know any user preferences, the agent may reply with a response such as "What is your preferred temperature?" You can respond with the following command: async for event in app . async stream query ( user id = " USER ID " , session id = initial session . id , message = "I like it at 71 degrees" , ): print ( event ) The agent might return with a response such as "Setting the temperature to 71 degrees Fahrenheit.
- The response is a sequence of dictionaries that's similar to the following: { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'function call' : { 'args' : { 'currency date' : '2025-04-03' , 'currency from' : 'USD' , 'currency to' : 'SEK' }, 'id' : 'adk-e39f3ba2-fa8c-4169-a63a-8e4c62b89818' , 'name' : 'get exchange rate' }}], 'role' : 'model' }, 'id' : 'zFyIaaif' , ... } { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'function response' : { 'id' : 'adk-e39f3ba2-fa8c-4169-a63a-8e4c62b89818' , 'name' : 'get exchange rate' , 'response' : { 'amount' : 1.0 , 'base' : 'USD' , 'date' : '2025-04-03' , 'rates' : { 'SEK' : 9.6607 }}}}], 'role' : 'user' }, 'id' : 'u2YR4Uom' , ... } { 'author' : 'currency exchange agent' , 'content' : { 'parts' : [{ 'text' : 'The exchange rate from USD to SEK on ' '2025-04-03 is 9.6607.' }], 'role' : 'model' }, 'id' : 'q3jWA3wl' , ... } (Optional) Manage sessions AdkApp uses in-memory sessions when running locally and uses cloud-based managed sessions after you deploy the agent to Vertex AI Agent Engine.

### "Overview of Agent Development Kit \_|\_ Vertex AI Agent Builder \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-builder/agent-development-kit/overview](https://docs.cloud.google.com/agent-builder/agent-development-kit/overview)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the following resources to get started with ADK: Quickstart with Vertex AI Agent Engine : This quickstart guides you through setting up your Google Cloud project and Vertex AI SDK for Python, developing your ADK agent, deploying the agent to Vertex AI Agent Engine Runtime, and testing the deployed agent.
- We recommend deploying your ADK agent to Vertex AI Agent Engine Runtime, a fully managed Google Cloud service specifically designed for deploying, managing, and scaling AI agents built with frameworks such as ADK.
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Overview of Agent Development Kit Stay organized with collections Save and categorize content based on your preferences.
- Agent Development Kit (ADK) is a flexible and modular open-source framework for developing and deploying AI agents.

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine with Agent\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Develop and deploy agents on Vertex AI Agent Engine with Agent Development Kit This page demonstrates how to create and deploy an agent to Vertex AI Agent Engine Runtime using the Agent Development Kit (ADK) .
- For the quickstart using supported frameworks other than Agent Development Kit, see Develop and deploy agents on Vertex AI Agent Engine .
- Develop an agent Develop a currency exchange tool for your agent: def get exchange rate ( currency from : str = "USD" , currency to : str = "EUR" , currency date : str = "latest" , ): """Retrieves the exchange rate between two currencies on a specified date.""" import requests response = requests . get ( f "https://api.frankfurter.app/ { currency date } " , params = { "from" : currency from , "to" : currency to }, ) return response . json () Instantiate an agent: from google.adk.agents import Agent from vertexai import agent engines agent = Agent ( model = "gemini-2.0-flash" , name = 'currency exchange agent' , tools = [ get exchange rate ], ) app = agent engines .
- Install and initialize the Vertex AI SDK for Python Run the following command to install the Vertex AI SDK for Python and other required packages: pip install --upgrade --quiet google-cloud-aiplatform [ agent engines,adk ]>= 1 .112 Authenticate as a user Local Shell Run the following command: gcloud auth application-default login Colab Run the following code: from google.colab import auth auth . authenticate user ( project id = " PROJECT ID " ) Cloud Shell No action required.

