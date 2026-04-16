---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.287Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Service account authorization for tools and webhooks"
feature_slug: "service-account-authorization-for-tools-and-webhooks"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient"
keywords:
  - "account"
  - "authorization"
  - "tools"
  - "webhooks"
  - "you"
  - "can"
  - "now"
  - "configure"
---

# Service account authorization for tools and webhooks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

You can now configure service account authorization for both tools and webhooks.

## Extended Definition

You can now configure service account authorization for both tools and webhooks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control](https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient)

## Supporting Pages

### "Class ContextsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. context path context path ( project : str , session : str , context : str ) - > str Returns a fully-qualified context string. create context create context ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description ContextsAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description ContextsAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.

### "Class ContextsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient)
- Source ID: `site-python-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. context path context path ( project : str , session : str , context : str ) - > str Returns a fully-qualified context string. create context create context ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description ContextsClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description ContextsClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.

### Access control \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control](https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When implementing your own client and using OAuth , you must use the following OAuth scope: https://www.googleapis.com/auth/cloud-platform (access to all project resources) Custom roles for playbook tool access You can provide granular access control for playbook tools by using permissions and custom roles.
- For example, a service account with this condition can only call the Dialogflow CX API to access the agent specified in the condition for the project, but not other agents in the project.
- You can configure access using the Conversational Agents console or by using the Google Cloud console ( visit documentation , open console ) with Identity and Access Management (IAM) .
- Control access with the Conversational Agents console The Conversational Agents console allows you to apply convenient agent roles configured for agent-level sharing.

