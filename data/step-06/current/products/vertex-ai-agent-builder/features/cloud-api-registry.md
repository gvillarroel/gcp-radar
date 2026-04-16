---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.309Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Cloud API Registry"
feature_slug: "cloud-api-registry"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
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
Coverage: MEDIUM

## Step 02 Summary

Introduces Cloud API Registry in Google Cloud console to view and manage MCP servers and tools available to an agent.

## Extended Definition

Introduces Cloud API Registry in Google Cloud console to view and manage MCP servers and tools available to an agent.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/overview](https://docs.cloud.google.com/agent-builder/overview)
- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring](https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)

## Supporting Pages

### Vertex AI Agent Builder overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/overview](https://docs.cloud.google.com/agent-builder/overview)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tools in the Cloud API Registry (Preview): Use Cloud API Registry in the Google Cloud console to view and manage the MCP servers and tools your agent has access to.
- Agent Garden (Supported in preview ) is a library in the Google Cloud console where you can find and explore sample agents and tools that are designed to accelerate your development.
- Agent Tools are tools that you can equip your ADK agent to use, including: Built-in tools such as Grounding with Google Search , Vertex AI Search , and Code Execution RAG Engine for retrieval-augmented generation (RAG) Google Cloud tools to connect to: Your APIs managed in Apigee API hub 100+ enterprise applications through Integration Connectors Custom integrations with Application Integration Model Context Protocol (MCP) tools Ecosystem tools such as LangChain tools, CrewAI tools, and GenAI Toolbox for Databases Govern : Monitor what your agents are doing with an audit trail for end-to-end observability.
- Detect threats with Security Command Center : Agent Engine Threat Detection (Preview) is a built-in service of Security Command Center that helps you detect and investigate potential attacks on agents that are deployed to Vertex AI Agent Engine Runtime.

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- To see an example of using the Vertex AI SDK as part of a more comprehensive workflow, run the "Custom training and online prediction" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Understand the Vertex AI SDK and client library differences When you install the Vertex AI SDK for Python, the Vertex AI Python client library is also installed.
- Learn about the Vertex AI SDK for Python See the following documentation: Vertex AI SDK class overview : introduces the key classes and functionality in the Vertex AI SDK.
- The Vertex AI SDK uses Python code to access the Vertex AI API so that you can programmatically accomplish most of what you can do in the Google Cloud console.

### Monitor an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring](https://docs.cloud.google.com/agent-builder/agent-engine/manage/monitoring)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once the data points are uploaded through the Cloud Monitoring API, you can view the new metric token count through the Google Cloud console: Go to Metrics Explorer page in the Google Cloud console: Go to Metrics Explorer Click Select a metric to open a search bar.
- To view the tool calling count metric and its associated logs, do the following in the Google Cloud console: Go to Metrics Explorer page in the Google Cloud console: Go to Metrics Explorer Click Select a metric to open a search bar.
- User-defined metrics The following steps demonstrate how to create and use a user-defined metric ( token count ) for an example workflow where multiple agents call multiple models, and you want to calculate the total count of consumed tokens (assuming that you track the number of tokens since application startup for each invoking agent and target model): Define the custom metric type by calling projects.metricDescriptors.create with the following parameters: name : a URL string, such as projects/ PROJECT ID Request body : a MetricDescriptor object: { "name" : "token count" , "description" : "Token Consumed by models." , "displayName" : "Token Count" , "type" : "custom.googleapis.com/token count" , "metricKind" : "CUMULATIVE" , "valueType" : "INT64" , "unit" : "1" , "labels" : [ { "key" : "model" , "valueType" : "STRING" , "description" : "Model." }, { "key" : "agent" , "valueType" : "STRING" , "description" : "Agent." } ], "monitoredResourceTypes" : [ "generic node" ] } The new metric token count is created with the kind Cumulative , representing the total number of tokens since application startup.
- See Alignment: within-series regularization for more details on time series alignment. sum over time ( increase ( aiplatform googleapis com : reasoning engine request count { monitored resource = ' aiplatform.googleapis.com/ReasoningEngine ', reasoning engine id = ' RESOURCE ID ', response code = ' RESPONSE CODE ' } [ 10m ] ) [ 10m : 10m ] ) You can query the error rate by calculating the ratio of the requests that are labeled with certain error response codes (such as 500 ) to the total number of requests (percentage of failed requests): sum over time ( sum ( rate ( aiplatform googleapis com : reasoning engine request count { monitored resource = ' aiplatform.googleapis.com/ReasoningEngine ', reasoning engine id = ' RESOURCE ID ', response code = ' 500 ' } [ 10m ] ) ) [ 10m : 10m ] ) / sum over time ( sum ( rate ( aiplatform googleapis com : reasoning engine request count { monitored resource = ' aiplatform.googleapis.com/ReasoningEngine ', reasoning engine id = ' RESOURCE ID ', } [ 10m ] ) ) [ 10m : 10m ] ) For best practices and restrictions for ratio metrics, see About ratios of metrics .

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following commands grant basic roles to all agents in a project: gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/serviceusage.serviceUsageConsumer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/browser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/aiplatform.expressUser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/cloudapiregistry.viewer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/logging.logWriter gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/monitoring.metricWriter To grant a role to all Agent Engine agents across an organization: Grant all agents in an organization the following role gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platform/aiplatform" \ --role=" ROLE NAME " Deny access to an agent To deny an agent access to resources, you can use the IAM deny policy or set up a principal access boundary policy .
- You first need to store the API Keys for access to the third party services into Secret Manager, and then retrieve these credentials from the Secret Manager. from google.adk.tools.openapi tool.auth.auth helpers import token to scheme credential from google.adk.tools.openapi tool.openapi spec parser.openapi toolset import OpenAPIToolset Access secret is defined in the code blocks above WEATHER DOT COM API KEY = access secret ( project id = 'foo' , secret id = 'weather dot com api key' ) auth scheme , auth credential = token to scheme credential ( "apikey" , "query" , "apikey" , WEATHER DOT COM API KEY ) sample api toolset = OpenAPIToolset ( spec str = "..." , spec str type = "yaml" , auth scheme = auth scheme , auth credential = auth credential , ) Log agent activity If you enable Cloud Logging, you can view logs of which agent and users have accessed a Google Cloud resource.
- Additional permissions might be needed if you use logging, metrics, and Cloud API registry, and for any other resource you want to expose to your agent.
- You can view the identity through the Vertex AI Agent Engine Google Cloud console and API.

