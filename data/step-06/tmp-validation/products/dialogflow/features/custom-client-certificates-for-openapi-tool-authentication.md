---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.664Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Custom client certificates for OpenAPI tool authentication"
feature_slug: "custom-client-certificates-for-openapi-tool-authentication"
latest_feature_date: "2024-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient"
keywords:
  - "certificates"
  - "authentication"
  - "openapi"
  - "client"
  - "tool"
  - "custom"
  - "vertex"
---

# Custom client certificates for OpenAPI tool authentication

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agents OpenAPI tool authentication supports custom client certificates for mutual TLS authentication.

## Extended Definition

Vertex AI Agents OpenAPI tool authentication supports custom client certificates for mutual TLS authentication.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.dialogflow.v2 (4.94.0) Stay organized with collections Save and categorize content based on your preferences.
- Open Api Tool An OpenAPI tool is a way to provide the Tool specifications in the Open API schema format. com. google. cloud. dialogflow. v2.
- Builder An OpenAPI tool is a way to provide the Tool specifications in the Open API schema format. com. google. cloud. dialogflow. v2.
- Function Tool A Function tool describes the functions to be invoked on the client side. com. google. cloud. dialogflow. v2.

### "Class AnswerRecordsAsyncClient (2.47.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class AnswerRecordsAsyncClient (2.47.0) Stay organized with collections Save and categorize content based on your preferences.
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- Parameter Name Description client options google.api core.client options.ClientOptions Custom options for the client.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. context path context path ( project : str , session : str , context : str ) - > str Returns a fully-qualified context string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

### "Class AnswerRecordsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class AnswerRecordsClient (2.47.0) Stay organized with collections Save and categorize content based on your preferences.
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- Parameter Name Description client options google.api core.client options.ClientOptions Custom options for the client.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. context path context path ( project : str , session : str , context : str ) - > str Returns a fully-qualified context string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

