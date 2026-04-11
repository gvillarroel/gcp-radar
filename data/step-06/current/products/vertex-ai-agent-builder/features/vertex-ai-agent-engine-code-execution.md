---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.339Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine Code Execution"
feature_slug: "vertex-ai-agent-engine-code-execution"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/quickstart"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "code"
  - "execution"
  - "supports"
  - "so"
---

# Vertex AI Agent Engine Code Execution

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Agent Engine supports code execution so agents can run code in an isolated sandbox environment.

## Extended Definition

Agent Engine supports code execution so agents can run code in an isolated sandbox environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/quickstart)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)

## Supporting Pages

### "Vertex AI Agent Engine Code Execution \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)
- Source ID: `site-docs-root`
- Final score: 336
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Vertex AI Agent Engine Code Execution Stay organized with collections Save and categorize content based on your preferences.
- However, you don't need to deploy your agent to Vertex AI Agent Engine to use Code Execution.
- Code Execution is part of the Vertex AI Agent Engine suite.
- Agent Engine Code Execution lets your agent to run code in a secure, isolated, and managed sandbox environment.

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.
- To do so, create an Agent Engine instance with just the identity type field: import vertexai from vertexai import agent engines from vertexai import types client = vertexai .

### "Code Execution quickstart \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/quickstart)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Here's an example of how to decode the output: import base64 import json if response . outputs [ 0 ] . mime type == "application/json" : json output = json . loads ( response . outputs [ 0 ] . data . decode ( "utf-8" )) output file content = json output . get ( "output files" )[ 0 ] . get ( "content" ) print ( output file content . b64decode ( output file content )) Here's the sample output: b 'HelloWorld \n ' Clean up To clean up resources created by this quickstart, delete your sandbox and Vertex AI Agent Engine instance. client . agent engines . sandboxes . delete ( name = sandbox name ) agent engine . delete () What's next Code Execution troubleshooting Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This page demonstrates how to make direct API calls to Vertex AI Agent Engine Code Execution to run untrusted code in an isolated sandbox environment.
- Install libraries Install the Vertex AI SDK: pip install google-cloud-aiplatform> = 1 .112.0 Authenticate to Vertex AI To authenticate: Local shell gcloud init gcloud auth application - default login Colab from google.colab import auth auth . authenticate user () Create an Vertex AI Agent Engine instance To use Code Execution, first create an Vertex AI Agent Engine instance.
- In this quickstart, you perform the follow tasks: Create an Vertex AI Agent Engine instance to access Code Execution Create a Code Execution sandbox (Optional) List and get sandboxes Execute code in a sandbox Execute more code using the same sandbox.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.
- This tutorial uses the following steps: Create memories using the following options: Generate memories using Vertex AI Agent Engine Memory Bank : Write sessions and events to Vertex AI Agent Engine Sessions as sources for Vertex AI Agent Engine Memory Bank to generate memories.
- Created memories are available for similarity search and can be consolidated for future requests when generating memories . memory = client . agent engines . memories . create ( name = agent engine . api resource . name , fact = "This is a fact." , scope = { "user id" : "123" } ) """ Returns an AgentEngineMemoryOperation containing the created Memory like: AgentEngineMemoryOperation( done=True, metadata={ "@type': 'type.googleapis.com/google.cloud.aiplatform.v1beta1.CreateMemoryOperationMetadata", "genericMetadata": { "createTime": '2025-06-26T01:15:29.027360Z', "updateTime": '2025-06-26T01:15:29.027360Z' } }, name="projects/.../locations/us-central1/reasoningEngines/.../memories/.../operations/...", response=Memory( create time=datetime.datetime(2025, 6, 26, 1, 15, 29, 27360, tzinfo=TzInfo(UTC)), fact="This is a fact.", name="projects/.../locations/us-central1/reasoningEngines/.../memories/...", scope={ "user id": "123" }, update time=datetime.datetime(2025, 6, 26, 1, 15, 29, 27360, tzinfo=TzInfo(UTC)) ) ) """ Retrieve and use memories You can retrieve memories for your user and include them in your system instructions to give the LLM access to your personalized context.
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.

