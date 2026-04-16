---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.702Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Data store agents customer-managed encryption keys"
feature_slug: "data-store-agents-customer-managed-encryption-keys"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
keywords:
  - "encrypting"
  - "encryption"
  - "customer"
  - "managed"
  - "keys"
  - "agents"
  - "store"
---

# Data store agents customer-managed encryption keys

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Data store agents support Customer-Managed Encryption Keys for encrypting customer data.

## Extended Definition

Data store agents support Customer-Managed Encryption Keys for encrypting customer data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dialogflow CX.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Configure an agent to use your keys When you create an agent, you can specify the agent location and whether the agent will use a Google-managed or the already configured customer-managed key for that location.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Encryption Spec A customer-managed encryption key specification that can be applied to all created resources (e.g.
- Builder A customer-managed encryption key specification that can be applied to all created resources (e.g.
- A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer.
- A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer.

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample restore agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict]] The request object.
- The request message for Agents.RestoreAgent . retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample export agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict]] The request object.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. delete agent delete agent ( request : typing .

