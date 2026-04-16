---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.315Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Customer-managed encryption keys (CMEK) for Vertex AI Agent Engine"
feature_slug: "customer-managed-encryption-keys-cmek-for-vertex-ai-agent-engine"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/access"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/deploy"
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
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
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agent Engine now supports encryption of data at rest using customer-managed encryption keys.

## Extended Definition

Vertex AI Agent Engine now supports encryption of data at rest using customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)

## Supporting Pages

### "Managing access for deployed agents \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Refer to the CMEK for Vertex AI documentation for general requirements and guidance on using CMEK with Vertex AI, including: Project setup (billing and enabled APIs) Creation of key rings and keys Required permission grants To enable CMEK for your agent, you need to specify the encryption spec with your Cloud KMS key when creating an Agent Engine instance.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for your deployed agents.
- Customer-managed encryption keys (CMEK) By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- Refer to Configure customer-managed encryption keys for code samples.

### Dataflow components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- For Dataflow resource reference, see the following API reference pages: LaunchFlexTemplateParameter resource Job resource Tutorials Get started with the Dataflow Flex Template component Get started with the Dataflow Python Job component Specify a network and subnetwork Using customer-managed encryption keys (CMEK) Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- For example, you can use these arguments to set the apache beam.options.pipeline options to specify a network, a subnetwork, customer-managed encryption key (CMEK), and other options when you run Dataflow jobs.
- You can pass this parameter to a WaitGcpResourcesOp component, to wait for the Dataflow job to complete. dataflow python op = DataflowPythonJobOp ( project = project id , location = location , python module path = python file path , temp location = staging dir , requirements file path = requirements file path , args = [ '--output' , OUTPUT FILE ], ) dataflow wait op = WaitGcpResourcesOp ( gcp resources = dataflow python op . outputs [ "gcp resources" ] ) Vertex AI Pipelines optimizes the WaitGcpResourcesOp to execute it in a serverless fashion, and has zero cost.
- DataflowPythonJobOp The DataflowPythonJobOp operator lets you create a Vertex AI Pipelines component that prepares data by submitting a Python-based Apache Beam job to Dataflow for execution.

### Deploy an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- See Agent Engine Customer-managed encryption keys (CMEK) for more details.
- Configure customer-managed encryption keys You can use a custom key to encrypt your agent's data at rest.
- Python Object To deploy the agent on Vertex AI, use client.agent engines.create to pass in the local agent object along with any optional configurations : remote agent = client . agent engines . create ( agent = local agent , # Optional. config = { "requirements" : requirements , # Optional. "extra packages" : extra packages , # Optional. "gcs dir name" : gcs dir name , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) Deployment takes a few minutes, during which the following steps happen in the background: A bundle of the following artifacts are generated locally: .pkl a pickle file corresponding to local agent. requirements.txt a text file containing the package requirements . dependencies.tar.gz a tar file containing any extra packages .
- With this method, you don't need to pass an agent object or Cloud Storage bucket. remote agent = client . agent engines . create ( config = { "source packages" : source packages , # Required. "entrypoint module" : entrypoint module , # Required. "entrypoint object" : entrypoint object , # Required. "class methods" : class methods , # Required. "requirements file" : requirements file , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) The parameters for inline source deployment are: source packages (Required, list[str] ): A list of local file or directory paths to include in the deployment.

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- To see an example of using the Vertex AI SDK as part of a more comprehensive workflow, run the "Custom training and online prediction" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Understand the Vertex AI SDK and client library differences When you install the Vertex AI SDK for Python, the Vertex AI Python client library is also installed.
- Use Vertex AI Python client library and SDK together If you use the Vertex AI SDK for Python and discover you need greater flexibility or control, or if you need a method not included in the Vertex AI SDK, you can use the Vertex AI Python client library in the same workflow.
- Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.

