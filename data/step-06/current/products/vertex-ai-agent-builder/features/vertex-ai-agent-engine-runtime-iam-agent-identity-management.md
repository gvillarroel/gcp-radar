---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:43.312Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Engine Runtime IAM agent identity management"
feature_slug: "vertex-ai-agent-engine-runtime-iam-agent-identity-management"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/manage/access"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/deploy"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/quickstart"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "runtime"
  - "iam"
  - "identity"
  - "management"
---

# Vertex AI Agent Engine Runtime IAM agent identity management

Product: Vertex AI Agent Builder
Coverage: MEDIUM

## Step 02 Summary

Users can use IAM to create agent identities for access and authentication management when using agents on Vertex AI Agent Engine Runtime.

## Extended Definition

Users can use IAM to create agent identities for access and authentication management when using agents on Vertex AI Agent Engine Runtime.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)

## Supporting Pages

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 372
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to use Identity Access Management (IAM) agent identity to provide security and access management features when using agents on Vertex AI Agent Engine Runtime.
- Restrict access to these credentials based on Agent ID (a principal identifier ): Create the secret container gcloud secrets create my-app-oauth-secret Add the actual client secret to Secret Manager gcloud secrets versions add my-app-oauth-secret --data-file=oauth-secret Grant agent identity access to the secret gcloud secrets add-iam-policy-binding my-app-oauth-secret \ --role='roles/secretmanager.secretAccessor' \ --member="principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID " \ Once the secret is stored, the agent can access these credentials during runtime using its principal identifier and standard Google Cloud authentication library automatically as part of Application Default Credential.
- This page covers the following topics: Creating an agent with agent identity : Create an agent such that the agent automatically receives a unique identity when you deploy to Vertex AI Agent Engine Runtime.
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .

### "Managing access for deployed agents \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then run the following command: gcloud projects get-iam-policy PROJECT ID OR NUMBER \ --flatten = "bindings[].members" \ --filter = "bindings.members:serviceAccount: PRINCIPAL " \ --format = "value(bindings.role)" where PROJECT ID OR NUMBER is the ID or number for your project, and PRINCIPAL is based on the service account that was used when the agent is deployed on Vertex AI Agent Engine.
- GetIamPolicyRequest ( resource = f "projects/ { project id } " )) for binding in policy . bindings : for member in binding . members : if principal in member : print ( binding . role ) Where the PRINCIPAL is based on the service account that was used when the agent is deployed on Vertex AI Agent Engine.
- Service accounts If you used service accounts to set up the identity and permissions for your agent , agents that you deploy on Vertex AI Agent Engine run using either the AI Platform Reasoning Engine Service Agent or your custom service account.
- Then run the following command: gcloud projects remove-iam-policy-binding PROJECT ID --member = PRINCIPAL --role = ROLE NAME where PRINCIPAL is based on the service account that was used when the agent is deployed on Vertex AI Agent Engine.

### Deploy an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the agent does not depend on any environment variables, you can set it to None : env vars = None If you are using secrets as environment variables with an agent that is configured to use agent identity , grant the secretmanager.versions.access permission (included in the roles/secretmanager.secretAccessor role) to the Vertex AI Service Agent , which has the following format: service- PROJECT NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com Your configured agent identity is used at runtime, but the Vertex AI Service Agent is used to fetch secrets during deployment.
- Python Object To deploy the agent on Vertex AI, use client.agent engines.create to pass in the local agent object along with any optional configurations : remote agent = client . agent engines . create ( agent = local agent , # Optional. config = { "requirements" : requirements , # Optional. "extra packages" : extra packages , # Optional. "gcs dir name" : gcs dir name , # Optional. "display name" : display name , # Optional. "description" : description , # Optional. "labels" : labels , # Optional. "env vars" : env vars , # Optional. "build options" : build options , # Optional. "identity type" : identity type , # Optional. "service account" : service account , # Optional. "min instances" : min instances , # Optional. "max instances" : max instances , # Optional. "resource limits" : resource limits , # Optional. "container concurrency" : container concurrency , # Optional "encryption spec" : encryption spec , # Optional. "agent framework" : agent framework , # Optional. }, ) Deployment takes a few minutes, during which the following steps happen in the background: A bundle of the following artifacts are generated locally: .pkl a pickle file corresponding to local agent. requirements.txt a text file containing the package requirements . dependencies.tar.gz a tar file containing any extra packages .
- The default value is 9 . remote agent = client . agent engines . create ( agent = local agent , config = { "min instances" : 1 , "max instances" : 10 , "resource limits" : { "cpu" : "4" , "memory" : "8Gi" }, "container concurrency" : 9 , ... other configs } ) For best practices on how to optimize runtime resources, see Optimize and scale Vertex AI Agent Engine Runtime .
- The identity is tied to the Vertex AI Agent Engine's agent resource ID and is independent of the agent framework you used to develop the agent: identity type = AGENT IDENTITY For more information, see Create an agent with agent identity .

### "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs To get the permissions that you need to use Vertex AI Agent Engine, ask your administrator to grant you the following IAM roles on your project: Vertex AI User ( roles/aiplatform.user ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Develop and deploy agents on Vertex AI Agent Engine This page demonstrates how to create and deploy an agent to Vertex AI Agent Engine Runtime using the following agent frameworks: LangGraph LangChain AG2 LlamaIndex Query Pipeline (preview) This quickstart guides you through the following steps: Set up your Google Cloud project.
- Deploy the agent to Vertex AI Agent Engine Runtime.
- For more information, see the launch stage descriptions . agent . query ( input = "What is the exchange rate from US dollars to SEK today?" ) Deploy an agent Deploy the agent by creating a reasoningEngine resource in Vertex AI: LangGraph remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) LangChain remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,langchain]" ], }, ) AG2 remote agent = client . agent engines . create ( agent , config = { "requirements" : [ "google-cloud-aiplatform[agent engines,ag2]" ], }, ) LlamaIndex Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

