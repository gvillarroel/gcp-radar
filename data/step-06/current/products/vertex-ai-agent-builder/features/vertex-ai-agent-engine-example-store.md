---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.350Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine Example Store"
feature_slug: "vertex-ai-agent-engine-example-store"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "example"
  - "store"
  - "is"
  - "now"
---

# Vertex AI Agent Engine Example Store

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Example Store is now available in preview for Vertex AI Agent Engine.

## Extended Definition

Example Store is now available in preview for Vertex AI Agent Engine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore](https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain](https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 298
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- For example, the following commands grant basic roles to all agents in a project: gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/serviceusage.serviceUsageConsumer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/browser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/aiplatform.expressUser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/cloudapiregistry.viewer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/logging.logWriter gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/monitoring.metricWriter To grant a role to all Agent Engine agents across an organization: Grant all agents in an organization the following role gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platform/aiplatform" \ --role=" ROLE NAME " Deny access to an agent To deny an agent access to resources, you can use the IAM deny policy or set up a principal access boundary policy .
- Restrict access to these credentials based on Agent ID (a principal identifier ): Create the secret container gcloud secrets create my-app-oauth-secret Add the actual client secret to Secret Manager gcloud secrets versions add my-app-oauth-secret --data-file=oauth-secret Grant agent identity access to the secret gcloud secrets add-iam-policy-binding my-app-oauth-secret \ --role='roles/secretmanager.secretAccessor' \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ Once the secret is stored, the agent can access these credentials during runtime using its principal identifier and standard Google Cloud authentication library automatically as part of Application Default Credential.
- Create an IAM allow policy to grant an agent an IAM role: Example: Grant the agent access to vision API. gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ --role=" ROLE NAME " \ Replace the following: ORGANIZATION ID : The ID for your organization.

### "Create or reuse an Example Store instance \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore](https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example Store supports the following embedding models: textembedding-gecko@003 text-embedding-004 text-multilingual-embedding-002 HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /exampleStores Request JSON body: { "display name": " DISPLAY NAME ", "example store config": {"vertex embedding model": EMBEDDING MODEL } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Create or reuse an Example Store instance Stay organized with collections Save and categorize content based on your preferences.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /exampleStores" Select-Object -Expand Content You should receive a JSON response similar to the following, where EXAMPLE STORE ID represents the ID of the Example Store instance.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /exampleStores" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see an example of using Memory Bank with the Agent Engine SDK, run the "Get started with Memory Bank" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub To see an example of using Memory Bank with LangGraph, run the "Get started with Memory Bank - LangGraph" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Before you begin To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.
- For example, the following request would delete existing memories that contain information about dietary preferences, if they exist for the given scope : from google import genai client . agent engines . memories . generate ( name = agent engine . api resource . name , direct contents source = { "events" : [{ "content" : genai . types .

### "Develop a LangChain agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain](https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default prompt template is generated if you create the agent without specifying your own prompt template, and will look like the following in full: from langchain core.prompts import ChatPromptTemplate from langchain.agents.format scratchpad.tools import format to tool messages prompt template = { "user input" : lambda x : x [ "input" ], "history" : lambda x : x [ "history" ], "agent scratchpad" : lambda x : format to tool messages ( x [ "intermediate steps" ]), } ChatPromptTemplate . from messages ([ ( "system" , " {system instruction} " ), ( "placeholder" , " {history} " ), ( "user" , " {user input} " ), ( "placeholder" , " {agent scratchpad} " ), ]) You are implicitly using the full prompt template when you instantiate the agent in the following example: from vertexai import agent engines system instruction = "I help look up the rate between currencies" agent = agent engines .
- Client ( project = " PROJECT ID " ) return FirestoreChatMessageHistory ( client = client , session id = session id , collection = " TABLE NAME " , encode message = False , ) Bigtable def get session history ( session id : str ): from langchain google bigtable import BigtableChatMessageHistory return BigtableChatMessageHistory ( instance id = " INSTANCE ID " , table id = " TABLE NAME " , session id = session id , ) Spanner def get session history ( session id : str ): from langchain google spanner import SpannerChatMessageHistory return SpannerChatMessageHistory ( instance id = " INSTANCE ID " , database id = " DATABASE ID " , table name = " TABLE NAME " , session id = session id , ) Finally, create the agent and pass it in as chat history : from vertexai import agent engines agent = agent engines .
- Example: {"amount": 1.0, "base": "USD", "date": "2023-11-24", "rates": {"EUR": 0.95534}} """ import requests response = requests . get ( f "https://api.frankfurter.app/ { currency date } " , params = { "from" : currency from , "to" : currency to }, ) return response . json () To test the function before you use it in your agent, run the following: get exchange rate ( currency from = "USD" , currency to = "SEK" ) The response should be similar to the following: { 'amount' : 1.0 , 'base' : 'USD' , 'date' : '2024-02-22' , 'rates' : { 'SEK' : 10.3043 }} To use the tool inside LangchainAgent , you will add it to the list of tools under the tools= argument: from vertexai import agent engines agent = agent engines .
- LangChain Tool First, install the package that defines the tool. pip install langchain-google-community Next, import the package and create the tool. from langchain google community import VertexAISearchRetriever from langchain.tools.retriever import create retriever tool retriever = VertexAISearchRetriever ( project id = " PROJECT ID " , data store id = " DATA STORE ID " , location id = " DATA STORE LOCATION ID " , engine data type = 1 , max documents = 10 , ) movie search tool = create retriever tool ( retriever = retriever , name = "search movies" , description = "Searches information about movies." , ) Finally, use the tool inside LangchainAgent : from vertexai import agent engines agent = agent engines .

