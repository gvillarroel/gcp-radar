# Dialogflow regionalization and data residency

Product: Dialogflow
Feature slug: `dialogflow-regionalization-and-data-residency`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dialogflow supports regionalization and data residency controls.

## Lifecycle

- Latest feature date: 2020-08-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- encrypt
- key
- security

## Official Evidence

- [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_datasets.ConversationDatasetsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_datasets.ConversationDatasetsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_datasets.ConversationDatasetsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_datasets.ConversationDatasetsClient)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
