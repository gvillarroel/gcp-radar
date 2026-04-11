---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.343Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Private VPC and Private Service Connect deployment for Vertex AI Agent Engine"
feature_slug: "private-vpc-and-private-service-connect-deployment-for-vertex-ai-agent-engine"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/deploy"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
keywords:
  - "private"
  - "vpc"
  - "and"
  - "connect"
  - "deployment"
  - "for"
  - "vertex"
  - "ai"
---

# Private VPC and Private Service Connect deployment for Vertex AI Agent Engine

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Agents can be deployed in a private VPC with a Private Service Connect interface to improve data privacy.

## Extended Definition

Agents can be deployed in a private VPC with a Private Service Connect interface to improve data privacy.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)

## Supporting Pages

### Deploy an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To specify the environment variables, there are a few different options available: Dictionary env vars = { "VARIABLE 1" : "VALUE 1" , "VARIABLE 2" : "VALUE 2" , } These environment variables will become available in Vertex AI Agent Engine through os.environ, e.g. import os os.environ["VARIABLE 1"] # will have the value "VALUE 1" and os.environ["VARIABLE 2"] # will have the value "VALUE 2" To reference a secret in Secret Manager and have it be available as an environment variable (for example, CLOUD SQL CREDENTIALS SECRET ), first follow the instructions to Create a secret for CLOUD SQL CREDENTIALS SECRET in your project , before specifying the environment variables as: env vars = { ... (other environment variables and their values) "CLOUD SQL CREDENTIALS SECRET" : { "secret" : SECRET ID , "version" : SECRET VERSION ID }, } where SECRET VERSION ID is the ID of the secret version.
- Configure Private Service Connect interface If you have Private Service Connect interface and DNS peering set up, you can specify your network attachment and private DNS peering while deploying your agent: remote agent = client . agent engines . create ( agent = local agent , config = { "psc interface config" : { "network attachment" : " NETWORK ATTACHMENT " , "dns peering configs" : [ { "domain" : " DOMAIN SUFFIX " , "target project" : " TARGET PROJECT " , "target network" : " TARGET NETWORK " , }, ], }, }, ) where NETWORK ATTACHMENT is the name or full path of your network attachment.
- If the agent does not depend on any environment variables, you can set it to None : env vars = None If you are using secrets as environment variables with an agent that is configured to use agent identity , grant the secretmanager.versions.access permission (included in the roles/secretmanager.secretAccessor role) to the Vertex AI Service Agent , which has the following format: service- PROJECT NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com Your configured agent identity is used at runtime, but the Vertex AI Service Agent is used to fetch secrets during deployment.
- The default value is 9 . remote agent = client . agent engines . create ( agent = local agent , config = { "min instances" : 1 , "max instances" : 10 , "resource limits" : { "cpu" : "4" , "memory" : "8Gi" }, "container concurrency" : 9 , ... other configs } ) For best practices on how to optimize runtime resources, see Optimize and scale Vertex AI Agent Engine Runtime .

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- We recommend the following roles: roles/aiplatform.expressUser : Grant access to running inference, sessions, and memory. roles/serviceusage.serviceUsageConsumer : Grant the agent permission to use the project's quota and the Vertex AI SDK. roles/browser : Grant access to basic Google Cloud functionalities.
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.
- If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need to build a custom frontend and migrate ADK-web authentication or redirect code into your frontend to perform the same OAuth integration.
- For example, the following commands grant basic roles to all agents in a project: gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/serviceusage.serviceUsageConsumer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/browser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/aiplatform.expressUser gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/cloudapiregistry.viewer gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/logging.logWriter gcloud projects add-iam-policy-binding PROJECT ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT NUMBER " \ --role=roles/monitoring.metricWriter To grant a role to all Agent Engine agents across an organization: Grant all agents in an organization the following role gcloud RESOURCE TYPE add-iam-policy-binding RESOURCE ID \ --member="principalSet://agents.global.org- ORGANIZATION ID .system.id.goog/attribute.platform/aiplatform" \ --role=" ROLE NAME " Deny access to an agent To deny an agent access to resources, you can use the IAM deny policy or set up a principal access boundary policy .

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.endpoints Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. create POST /v1beta1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1beta1/{name} Deletes an Endpoint. deployModel POST /v1beta1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1beta1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1beta1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1beta1/{endpoint}:explain Perform an online explanation. get GET /v1beta1/{name} Gets an Endpoint. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1beta1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1beta1/{endpoint.name} Updates an Endpoint. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. undeployModel POST /v1beta1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1beta1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- REST Resource: v1.projects.locations.endpoints Methods create POST /v1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1/{name} Deletes an Endpoint. deployModel POST /v1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1/{endpoint}:explain Perform an online explanation. get GET /v1/{name} Gets an Endpoint. list GET /v1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1/{endpoint.name} Updates an Endpoint. predict POST /v1/{endpoint}:predict Perform an online prediction. rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. undeployModel POST /v1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- REST Resource: v1beta1.projects.locations.metadataStores.executions Methods addExecutionEvents POST /v1beta1/{execution}:addExecutionEvents Adds Events to the specified Execution. create POST /v1beta1/{parent}/executions Creates an Execution associated with a MetadataStore. delete DELETE /v1beta1/{name} Deletes an Execution. get GET /v1beta1/{name} Retrieves a specific Execution. list GET /v1beta1/{parent}/executions Lists Executions in the MetadataStore. patch PATCH /v1beta1/{execution.name} Updates a stored Execution. purge POST /v1beta1/{parent}/executions:purge Purges Executions. queryExecutionInputsAndOutputs GET /v1beta1/{execution}:queryExecutionInputsAndOutputs Obtains the set of input and output Artifacts for this Execution, in the form of LineageSubgraph that also contains the Execution and connecting Events.
- REST Resource: v1.projects.locations.metadataStores.executions Methods addExecutionEvents POST /v1/{execution}:addExecutionEvents Adds Events to the specified Execution. create POST /v1/{parent}/executions Creates an Execution associated with a MetadataStore. delete DELETE /v1/{name} Deletes an Execution. get GET /v1/{name} Retrieves a specific Execution. list GET /v1/{parent}/executions Lists Executions in the MetadataStore. patch PATCH /v1/{execution.name} Updates a stored Execution. purge POST /v1/{parent}/executions:purge Purges Executions. queryExecutionInputsAndOutputs GET /v1/{execution}:queryExecutionInputsAndOutputs Obtains the set of input and output Artifacts for this Execution, in the form of LineageSubgraph that also contains the Execution and connecting Events.

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- To see an example of using the Vertex AI SDK as part of a more comprehensive workflow, run the "Custom training and online prediction" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Understand the Vertex AI SDK and client library differences When you install the Vertex AI SDK for Python, the Vertex AI Python client library is also installed.
- Use Vertex AI Python client library and SDK together If you use the Vertex AI SDK for Python and discover you need greater flexibility or control, or if you need a method not included in the Vertex AI SDK, you can use the Vertex AI Python client library in the same workflow.
- Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.

