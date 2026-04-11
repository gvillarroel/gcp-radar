---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.340Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Customer-managed encryption keys (CMEK) for Vertex AI Agent Engine"
feature_slug: "customer-managed-encryption-keys-cmek-for-vertex-ai-agent-engine"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/access"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/deploy"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "for"
  - "vertex"
  - "ai"
---

# Customer-managed encryption keys (CMEK) for Vertex AI Agent Engine

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Vertex AI Agent Engine now supports encryption of data at rest using customer-managed encryption keys.

## Extended Definition

Vertex AI Agent Engine now supports encryption of data at rest using customer-managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component)

## Supporting Pages

### "Managing access for deployed agents \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Refer to the CMEK for Vertex AI documentation for general requirements and guidance on using CMEK with Vertex AI, including: Project setup (billing and enabled APIs) Creation of key rings and keys Required permission grants To enable CMEK for your agent, you need to specify the encryption spec with your Cloud KMS key when creating an Agent Engine instance.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for your deployed agents.
- Customer-managed encryption keys (CMEK) By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- Refer to Configure customer-managed encryption keys for code samples.

### Deploy an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Agent Engine Customer-managed encryption keys (CMEK) for more details.
- Configure customer-managed encryption keys You can use a custom key to encrypt your agent's data at rest.
- Python Object To deploy the agent on Vertex AI, use client.agent engines.create to pass in the local agent object along with any optional configurations : remote agent = client . agent engines . create ( agent = local agent , # Optional. config = { "requirements" : requirements , # Optional. "extra packages" : extra packages , # Optional. "gcs dir name" : gcs dir name , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) Deployment takes a few minutes, during which the following steps happen in the background: A bundle of the following artifacts are generated locally: .pkl a pickle file corresponding to local agent. requirements.txt a text file containing the package requirements . dependencies.tar.gz a tar file containing any extra packages .
- With this method, you don't need to pass an agent object or Cloud Storage bucket. remote agent = client . agent engines . create ( config = { "source packages" : source packages , # Required. "entrypoint module" : entrypoint module , # Required. "entrypoint object" : entrypoint object , # Required. "class methods" : class methods , # Required. "requirements file" : requirements file , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) The parameters for inline source deployment are: source packages (Required, list[str] ): A list of local file or directory paths to include in the deployment.

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- Define the agent in your preferred framework: from google.adk.agents import Agent agent = Agent ( model = "gemini-2.5-flash" , name = "minimal agent" , instruction = "You are a helpful assistant." , ) Then, deploy it: import vertexai from vertexai import types from vertexai.agent engines import AdkApp Initialize the Vertex AI client with v1beta1 API for agent identity support client = vertexai .
- To set up the integration with Secret Manager, you first need to store the auxiliary credentials (Client ID or Client Secret) for accessing the third party services into Secret Manager (in the consumer project where the agent is lifecycle managed) using the following steps: Create a new container in Secret Manager.
- We recommend the following roles: roles/aiplatform.expressUser : Grant access to running inference, sessions, and memory. roles/serviceusage.serviceUsageConsumer : Grant the agent permission to use the project's quota and the Vertex AI SDK. roles/browser : Grant access to basic Google Cloud functionalities.

### Dataflow components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For Dataflow resource reference, see the following API reference pages: LaunchFlexTemplateParameter resource Job resource Tutorials Get started with the Dataflow Flex Template component Get started with the Dataflow Python Job component Specify a network and subnetwork Using customer-managed encryption keys (CMEK) Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- For example, you can use these arguments to set the apache beam.options.pipeline options to specify a network, a subnetwork, customer-managed encryption key (CMEK), and other options when you run Dataflow jobs.
- You can pass this parameter to a WaitGcpResourcesOp component, to wait for the Dataflow job to complete. dataflow python op = DataflowPythonJobOp ( project = project id , location = location , python module path = python file path , temp location = staging dir , requirements file path = requirements file path , args = [ '--output' , OUTPUT FILE ], ) dataflow wait op = WaitGcpResourcesOp ( gcp resources = dataflow python op . outputs [ "gcp resources" ] ) Vertex AI Pipelines optimizes the WaitGcpResourcesOp to execute it in a serverless fashion, and has zero cost.
- DataflowPythonJobOp The DataflowPythonJobOp operator lets you create a Vertex AI Pipelines component that prepares data by submitting a Python-based Apache Beam job to Dataflow for execution.

