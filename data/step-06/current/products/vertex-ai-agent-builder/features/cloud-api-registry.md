---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.326Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Cloud API Registry"
feature_slug: "cloud-api-registry"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/overview"
keywords:
  - "api"
  - "registry"
  - "introduces"
  - "in"
  - "console"
  - "to"
  - "view"
  - "and"
---

# Cloud API Registry

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Introduces Cloud API Registry in Google Cloud console to view and manage MCP servers and tools available to an agent.

## Extended Definition

Introduces Cloud API Registry in Google Cloud console to view and manage MCP servers and tools available to an agent.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring](https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/overview](https://docs.cloud.google.com/agent-builder/overview)

## Supporting Pages

### Monitor an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring](https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Once the data points are uploaded through the Cloud Monitoring API, you can view the new metric token count through the Google Cloud console: Go to Metrics Explorer page in the Google Cloud console: Go to Metrics Explorer Click Select a metric to open a search bar.
- To view the tool calling count metric and its associated logs, do the following in the Google Cloud console: Go to Metrics Explorer page in the Google Cloud console: Go to Metrics Explorer Click Select a metric to open a search bar.
- User-defined metrics The following steps demonstrate how to create and use a user-defined metric ( token count ) for an example workflow where multiple agents call multiple models, and you want to calculate the total count of consumed tokens (assuming that you track the number of tokens since application startup for each invoking agent and target model): Define the custom metric type by calling projects.metricDescriptors.create with the following parameters: name : a URL string, such as projects/ PROJECT ID Request body : a MetricDescriptor object: { "name" : "token count" , "description" : "Token Consumed by models." , "displayName" : "Token Count" , "type" : "custom.googleapis.com/token count" , "metricKind" : "CUMULATIVE" , "valueType" : "INT64" , "unit" : "1" , "labels" : [ { "key" : "model" , "valueType" : "STRING" , "description" : "Model." }, { "key" : "agent" , "valueType" : "STRING" , "description" : "Agent." } ], "monitoredResourceTypes" : [ "generic node" ] } The new metric token count is created with the kind Cumulative , representing the total number of tokens since application startup.
- See Alignment: within-series regularization for more details on time series alignment. sum over time ( increase ( aiplatform googleapis com : reasoning engine request count { monitored resource = ' aiplatform.googleapis.com/ReasoningEngine ', reasoning engine id = ' RESOURCE ID ', response code = ' RESPONSE CODE ' } [ 10m ] ) [ 10m : 10m ] ) You can query the error rate by calculating the ratio of the requests that are labeled with certain error response codes (such as 500 ) to the total number of requests (percentage of failed requests): sum over time ( sum ( rate ( aiplatform googleapis com : reasoning engine request count { monitored resource = ' aiplatform.googleapis.com/ReasoningEngine ', reasoning engine id = ' RESOURCE ID ', response code = ' 500 ' } [ 10m ] ) ) [ 10m : 10m ] ) / sum over time ( sum ( rate ( aiplatform googleapis com : reasoning engine request count { monitored resource = ' aiplatform.googleapis.com/ReasoningEngine ', reasoning engine id = ' RESOURCE ID ', } [ 10m ] ) ) [ 10m : 10m ] ) For best practices and restrictions for ratio metrics, see About ratios of metrics .

### "Develop a LlamaIndex Query Pipeline agent \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline](https://docs.cloud.google.com/agent-builder/agent-engine/develop/llama-index/query-pipeline)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- NEXT : '3' > : RelatedNodeInfo ( node id = 'f7d2cb7e-fa0c-40bf-b8e7-b888e36b87f9' , node type = '1' , metadata = {}, hash = 'db7cc1a67fa3afd1e5f24c8c61583781ce6a00c444da8f25a5374468c17b7de0' ) }, metadata template = ' {key} : {value} ' , metadata separator = ' \n ' , text = 'So I looked around to see what I could salvage from the wreckage of my plans, and there was Lisp...' , mimetype = 'text/plain' , start char idx = 7166 , end char idx = 11549 , metadata separator = ' \n ' , text template = ' {metadata str} \n\n {content} ' ), score = 0.7403571819090398 ) ] To use the retriever inside LlamaIndexQueryPipelineAgent , add it under the retriever builder= argument: from vertexai.preview import reasoning engines agent = reasoning engines .
- Request () creds . refresh ( auth req ) if model kwargs is None : model kwargs = {} endpoint = f "https:// { location } -aiplatform.googleapis.com" api base = f ' { endpoint } /v1beta1/projects/ { project } /locations/ { location } /endpoints/openapi' return OpenAILike ( model = model name , api base = api base , api key = creds . token , model kwargs , ) Use the model in LlamaIndexQueryPipelineAgent : from vertexai.preview import reasoning engines agent = reasoning engines .
- Google GenAI Google GenAI is installed by default when you set up your environment and is automatically used in LlamaIndexQueryPipelineAgent when you omit model builder . from vertexai.preview import reasoning engines agent = reasoning engines .
- LlamaIndexQueryPipelineAgent ( model = model , runnable builder = runnable with postprocessor builder , ) Query the agent: result = agent . query ( input = "What is Paul Graham's life in College?" ) The output should be similar to the following: [ { 'node' : { 'id ' : 'bb7d2942-213d-4fb3-a7cb-1a664642a7ff' , 'embedding' : None , 'metadata' : { 'file path' : '/content/data/paul graham/paul graham essay.txt' , 'file name' : 'paul graham essay.txt' , 'file type' : 'text/plain' , 'file size' : 75042 , 'creation date' : '2025-03-25' , 'last modified date' : '2025-03-25' }, 'excluded embed metadata keys' : [ 'file name' , 'file type' , 'file size' , 'creation date' , 'last modified date' , 'last accessed date' ], 'excluded llm metadata keys' : [ 'file name' , 'file type' , 'file size' , 'creation date' , 'last modified date' , 'last accessed date' ], 'relationships' : { '1' : { 'node id' : 'c508cee5-5ef2-4fdf-a33d-0427dcb78b5c' , 'node type' : '4' , 'metadata' : { 'file path' : '/content/data/paul graham/paul graham essay.txt' , 'file name' : 'paul graham essay.txt' , 'file type' : 'text/plain' , 'file size' : 75042 , 'creation date' : '2025-03-25' , 'last modified date' : '2025-03-25' }, 'hash' : '0c3c3f46cac874b495d944dfc4b920f6b68817dbbb1699ecc955d1fafb2bf87b' , 'class name' : 'RelatedNodeInfo' }, '2' : { 'node id' : '97a84b41-62bf-4959-acae-cfd4bdfbd4d9' , 'node type' : '1' , 'metadata' : { 'file path' : '/content/data/paul graham/paul graham essay.txt' , 'file name' : 'paul graham essay.txt' , 'file type' : 'text/plain' , 'file size' : 75042 , 'creation date' : '2025-03-25' , 'last modified date' : '2025-03-25' }, 'hash' : 'a7dd352be97e47e8e553ceda3d2d2c9e9d5c54adb298063c94da06167938d583' , 'class name' : 'RelatedNodeInfo' }, '3' : { 'node id' : 'b984eea1-f0bc-4880-812e-3f49f1e304b8' , 'node type' : '1' , 'metadata' : {}, 'hash' : 'db7cc1a67fa3afd1e5f24c8c61583781ce6a00c444da8f25a5374468c17b7de0' , 'class name' : 'RelatedNodeInfo' }}, 'metadata template' : ' {key} : {value} ' , 'metadata separator' : ' \n ' , 'text' : 'So I looked around to see what I could salvage from the wreckage of my plans, and there was Lisp...' , 'mimetype' : 'text/plain' , 'start char idx' : 7166 , 'end char idx' : 11549 , 'metadata separator' : ' \n ' , 'text template' : ' {metadata str} \n\n {content} ' , 'class name' : 'TextNode' }, 'score' : 0.7403571819090398 , 'class name' : 'NodeWithScore' }, { 'node' : { 'id ' : 'b984eea1-f0bc-4880-812e-3f49f1e304b8...' } 'score' : 0.7297395567513889 , 'class name' : 'NodeWithScore' } ] ReAct Agent To provide tool-calling behavior with your own ReAct agent, override runnable builder for LlamaIndexQueryPipelineAgent .

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following commands grant basic roles to all agents in a project: gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/serviceusage.serviceUsageConsumer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/browser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/aiplatform.expressUser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/cloudapiregistry.viewer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/logging.logWriter gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/monitoring.metricWriter To grant a role to all Agent Engine agents across an organization: Grant all agents in an organization the following role gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platform/aiplatform" \ --role=" ROLE NAME " Deny access to an agent To deny an agent access to resources, you can use the IAM deny policy or set up a principal access boundary policy .
- You first need to store the API Keys for access to the third party services into Secret Manager, and then retrieve these credentials from the Secret Manager. from google.adk.tools.openapi tool.auth.auth helpers import token to scheme credential from google.adk.tools.openapi tool.openapi spec parser.openapi toolset import OpenAPIToolset Access secret is defined in the code blocks above WEATHER DOT COM API KEY = access secret ( project id = 'foo' , secret id = 'weather dot com api key' ) auth scheme , auth credential = token to scheme credential ( "apikey" , "query" , "apikey" , WEATHER DOT COM API KEY ) sample api toolset = OpenAPIToolset ( spec str = "..." , spec str type = "yaml" , auth scheme = auth scheme , auth credential = auth credential , ) Log agent activity If you enable Cloud Logging, you can view logs of which agent and users have accessed a Google Cloud resource.
- Additional permissions might be needed if you use logging, metrics, and Cloud API registry, and for any other resource you want to expose to your agent.
- You can view the identity through the Vertex AI Agent Engine Google Cloud console and API.

### Vertex AI Agent Builder overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/overview](https://docs.cloud.google.com/agent-builder/overview)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Tools in the Cloud API Registry (Preview): Use Cloud API Registry in the Google Cloud console to view and manage the MCP servers and tools your agent has access to.
- Agent Garden (Supported in preview ) is a library in the Google Cloud console where you can find and explore sample agents and tools that are designed to accelerate your development.
- Agent Tools are tools that you can equip your ADK agent to use, including: Built-in tools such as Grounding with Google Search , Vertex AI Search , and Code Execution RAG Engine for retrieval-augmented generation (RAG) Google Cloud tools to connect to: Your APIs managed in Apigee API hub 100+ enterprise applications through Integration Connectors Custom integrations with Application Integration Model Context Protocol (MCP) tools Ecosystem tools such as LangChain tools, CrewAI tools, and GenAI Toolbox for Databases Govern : Monitor what your agents are doing with an audit trail for end-to-end observability.
- Detect threats with Security Command Center : Agent Engine Threat Detection (Preview) is a built-in service of Security Command Center that helps you detect and investigate potential attacks on agents that are deployed to Vertex AI Agent Engine Runtime.

