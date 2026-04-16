---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.012Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "RegistrationType metadata property"
feature_slug: "registrationtype-metadata-property"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/OperationMetadata"
  - "https://docs.cloud.google.com/app-hub/docs/metadata-schemas"
keywords:
  - "registrationtype"
  - "field"
  - "property"
  - "include"
  - "output"
  - "metadata"
  - "only"
---

# RegistrationType metadata property

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

Services now include an output-only RegistrationType field that indicates whether they are exclusive or shared across applications.

## Extended Definition

Services now include an output-only RegistrationType field that indicates whether they are exclusive or shared across applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/OperationMetadata)
- [https://docs.cloud.google.com/app-hub/docs/metadata-schemas](https://docs.cloud.google.com/app-hub/docs/metadata-schemas)

## Supporting Pages

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to visualize this metadata, see View extended metadata schemas . ( Preview ) Identity : an output-only property that contains the service account or managed workload identity name for a service or workload.
- Key supported properties include: ( Preview ) Registration type : for services, an output-only property that indicates if a service can be registered to one or multiple applications.
- To learn which services are shared or exclusive, see the list of App Hub supported services . ( Preview ) Functional type : an output-only property that identifies the known function of a service or workload.
- For example, when an AI agent is deployed through a managed platform like Vertex AI Agent Engine , App Hub automatically classifies the resource with the AGENT functional type value to indicate that the workload runs an AI agent. ( Preview ) Extended metadata : an schema-driven property that provides rich, structured information about the service or workload.

### OperationMetadata \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/OperationMetadata)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "createTime" : string , "endTime" : string , "target" : string , "verb" : string , "statusMessage" : string , "requestedCancellation" : boolean , "apiVersion" : string } Fields createTime string ( Timestamp format) Output only.
- Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED . apiVersion string Output only.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . endTime string ( Timestamp format) Output only.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . target string Output only.

### Extended metadata schemas \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/metadata-schemas](https://docs.cloud.google.com/app-hub/docs/metadata-schemas)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page provides a catalog of the supported schemas for the extended metadata property on services and workloads.
- Each schema is identified by a unique key and defines the structure and fields for a specific type of metadata.
- Except for framework, the properties are derived from the A2A Agent Card." , "type" : "object" , "additionalProperties" : false , "properties" : { "displayName" : { "type" : "string" , "description" : "The display name of the agent." }, "description" : { "type" : "string" , "description" : "The description of the agent." }, "version" : { "type" : "string" , "description" : "Contains the version of the Agent." }, "framework" : { "type" : "string" , "description" : "The agent framework used to develop the agent." }, "agentCardUri" : { "type" : "string" , "description" : "The URI of the agent card for the agent." }, "skills" : { "type" : "array" , "description" : "A list of skills the agent possesses." , "items" : { "type" : "object" , "title" : "Skills" , "description" : "Defines a skill for an agent." , "additionalProperties" : false , "properties" : { "id" : { "type" : "string" , "description" : "A unique identifier for the agent's skill." }, "name" : { "type" : "string" , "description" : "A human readable name for the agent's skill." }, "description" : { "type" : "string" , "description" : "A description of the agent's skill." }, "tags" : { "type" : "array" , "description" : "A set of keywords describing the skill's capabilities." , "items" : { "type" : "string" } }, "examples" : { "type" : "array" , "description" : "Example prompts or scenarios that this skill can handle." , "items" : { "type" : "string" } } } } } } } Field descriptions Field Type Description displayName string The display name of the agent. description string The description of the agent. version string The version of the agent. framework string The framework used to develop the agent. agentCardUri string The URI of the agent card for the agent. skills array A list of skills the agent possesses. skills.id string A unique identifier for the agent's skill. skills.name string A human readable name for the agent's skill. skills.description string A description of the agent's skill. skills.tags array of string A set of keywords describing the skill's capabilities. skills.examples array of string Example prompts or scenarios that this skill can handle.
- Schema definition The following is the schema for this metadata type in JSON format. { "$schema" : "http://json-schema.org/draft-07/schema#" , "title" : "apphub.googleapis.com/AgentProperties" , "description" : "The schema for apphub.googleapis.com/AgentProperties.

