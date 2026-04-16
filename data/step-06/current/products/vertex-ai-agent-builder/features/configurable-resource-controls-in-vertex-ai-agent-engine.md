---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.314Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Configurable resource controls in Vertex AI Agent Engine"
feature_slug: "configurable-resource-controls-in-vertex-ai-agent-engine"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/evaluate"
keywords:
  - "configurable"
  - "resource"
  - "controls"
  - "in"
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
---

# Configurable resource controls in Vertex AI Agent Engine

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Agent Engine allows customization of resource controls, including instance counts, container resource limits, and container concurrency.

## Extended Definition

Agent Engine allows customization of resource controls, including instance counts, container resource limits, and container concurrency.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 341
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- The identity is tied to the Vertex AI Agent Engine's agent resource ID and is independent of the agent framework you used to develop the agent.
- For example, the following commands grant basic roles to all agents in a project: gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/serviceusage.serviceUsageConsumer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/browser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/aiplatform.expressUser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/cloudapiregistry.viewer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/logging.logWriter gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/monitoring.metricWriter To grant a role to all Agent Engine agents across an organization: Grant all agents in an organization the following role gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platform/aiplatform" \ --role=" ROLE NAME " Deny access to an agent To deny an agent access to resources, you can use the IAM deny policy or set up a principal access boundary policy .
- Restrict access to these credentials based on Agent ID (a principal identifier ): Create the secret container gcloud secrets create my-app-oauth-secret Add the actual client secret to Secret Manager gcloud secrets versions add my-app-oauth-secret --data-file=oauth-secret Grant agent identity access to the secret gcloud secrets add-iam-policy-binding my-app-oauth-secret \ --role='roles/secretmanager.secretAccessor' \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ Once the secret is stored, the agent can access these credentials during runtime using its principal identifier and standard Google Cloud authentication library automatically as part of Application Default Credential.

### "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming](https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can modify the following example with any data recognizable by your agent, using any applicable termination logic for input stream and output stream: async with client . aio . live . agent engines . connect ( agent engine = remote live agent . api resource . name , config = { "class method" : "bidi stream query" } ) as connection : while True : input str = input ( "Enter your question: " ) if input str == "exit" : break await connection . send ({ "input" : input str }) while True : response = await connection . receive () print ( response ) if response [ "bidiStreamOutput" ][ "output" ] == "end of turn" : break Vertex AI Agent Engine Runtime streams responses as a sequence of iteratively generated objects.
- Note that with the GenAI SDK, all deployment configurations (additional packages and customized resource controls) are assigned as a value of config when creating the Agent Engine instance.
- Content ( parts = [ part ]) return LiveRequest ( content = content ) async with client . aio . live . agent engines . connect ( agent engine = remote live agent . api resource . name , config = { "class method" : "bidi stream query" , "input" : { "input str" : "hello" }, }) as connection : first req = True while True : input text = input ( "Enter your question: " ) if input text == "exit" : break if first req : await connection . send ({ "user id" : USER ID , "live request" : prepare live request ( input text ) . dict () }) first req = False else : await connection . send ( prepare live request ( input text ) . dict ()) audio data = [] while True : async def receive (): return await connection . receive () receiving = asyncio .
- To see an example of using bidirectional streaming with Agent Engine, run the "Getting Started with Live API on Agent Engine" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Overview Bidirectional streaming provides a persistent, two-way communication channel between your application and the agent, letting you move beyond turn-based, request-response patterns.

### "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, you can delete the individual resources you created in this tutorial, as follows: Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance. agent engine . delete ( force = True ) Delete any locally created files.
- Created memories are available for similarity search and can be consolidated for future requests when generating memories . memory = client . agent engines . memories . create ( name = agent engine . api resource . name , fact = "This is a fact." , scope = { "user id" : "123" } ) """ Returns an AgentEngineMemoryOperation containing the created Memory like: AgentEngineMemoryOperation( done=True, metadata={ "@type': 'type.googleapis.com/google.cloud.aiplatform.v1beta1.CreateMemoryOperationMetadata", "genericMetadata": { "createTime": '2025-06-26T01:15:29.027360Z', "updateTime": '2025-06-26T01:15:29.027360Z' } }, name="projects/.../locations/us-central1/reasoningEngines/.../memories/.../operations/...", response=Memory( create time=datetime.datetime(2025, 6, 26, 1, 15, 29, 27360, tzinfo=TzInfo(UTC)), fact="This is a fact.", name="projects/.../locations/us-central1/reasoningEngines/.../memories/...", scope={ "user id": "123" }, update time=datetime.datetime(2025, 6, 26, 1, 15, 29, 27360, tzinfo=TzInfo(UTC)) ) ) """ Retrieve and use memories You can retrieve memories for your user and include them in your system instructions to give the LLM access to your personalized context.
- This conversation history is used as the source material for generating memories for that particular user. import datetime client . agent engines . sessions . events . append ( name = session . response . name , author = "user" , # Required by Sessions. invocation id = "1" , # Required by Sessions. timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions. config = { "content" : { "role" : "user" , "parts" : [{ "text" : "hello" }] } } ) To generate memories from your conversation history, trigger a memory generation request for the session: client . agent engines . memories . generate ( name = agent engine . api resource . name , vertex session source = { session should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...". "session" : session . response . name }, Optional when using Agent Engine Sessions.
- You must specify at least one of filter (applied to system fields) or filter groups (applied to metadata fields). operation = client . agent engines . memories . purge ( name = agent engine . api resource . name , Specify at least one of filter or filter groups. filter = " FILTER STRING " , filter groups = FILTER GROUPS , Set to false (default) if you want to stage but not execute the purge operation. force = True , config = { Set to false (default) if you want to purge memories asynchronously. "wait for completion" : True } ) Replace the following: FILTER STRING : A string using EBNF syntax for filtering against system fields.

### "Evaluate agents using the GenAI Client in Vertex AI SDK \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/evaluate](https://docs.cloud.google.com/agent-builder/agent-engine/evaluate)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AdkApp ( agent = root agent , ) remote app = client . agent engines . create ( agent = app , config = { "staging bucket" : gs : // BUCKET NAME , "requirements" : [ 'google-cloud-aiplatform[adk,agent engines]' ], "env vars" : { "GOOGLE CLOUD AGENT ENGINE ENABLE TELEMETRY" : "true" } } ) return remote app agent engine = deploy adk agent ( my agent ) agent engine resource name = agent engine . api resource . name To get the list of agents that are deployed to Vertex AI Agent Engine, see Manage deployed agents .
- For more information on developing an agent, see Develop an Agent Development Kit agent . from google.adk import Agent Define Agent Tools def search products ( query : str ): """Searches for products based on a query.""" Mock response for demonstration if "headphones" in query . lower (): return { "products" : [{ "name" : "Wireless Headphones" , "id" : "B08H8H8H8H" }]} else : return { "products" : []} def get product details ( product id : str ): """Gets the details for a given product ID.""" if product id == "B08H8H8H8H" : return { "details" : "Noise-cancelling, 20-hour battery life." } else : return { "error" : "Product not found." } def add to cart ( product id : str , quantity : int ): """Adds a specified quantity of a product to the cart.""" return { "status" : f "Added { quantity } of { product id } to cart." } Define Agent my agent = Agent ( model = "gemini-2.5-flash" , name = 'ecommerce agent' , instruction = 'You are an ecommerce expert' , tools = [ search products , get product details , add to cart ], ) Deploy agent Deploy your agent to Vertex AI Agent Engine Runtime.
- Install the Vertex AI SDK for Python: %pip install google-cloud-aiplatform [ adk,agent engines ] %pip install --upgrade --force-reinstall -q google-cloud-aiplatform [ evaluation ] Set up your credentials.
- Args: root agent: The ADK agent to deploy. """ app = vertexai . agent engines .

