# Mutual TLS authentication for webhooks

Product: Dialogflow
Feature slug: `mutual-tls-authentication-for-webhooks`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dialogflow supports mutual TLS authentication for securing and trusting webhook traffic.

## Lifecycle

- Latest feature date: 2019-12-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook), [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters), [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent))
- key (evidence: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook), [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters), [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent))
- permission (evidence: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook), [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters), [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent))

## Official Evidence

- [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent)
- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
