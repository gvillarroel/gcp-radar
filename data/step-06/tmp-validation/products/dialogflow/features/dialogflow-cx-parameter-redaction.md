---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.776Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX parameter redaction"
feature_slug: "dialogflow-cx-parameter-redaction"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings"
keywords:
  - "redact"
  - "redaction"
  - "parameter"
  - "user"
---

# Dialogflow CX parameter redaction

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can redact end-user parameter data from logs.

## Extended Definition

Dialogflow CX can redact end-user parameter data from logs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- User consent is collected using a boolean session parameter: $session.params.conversation-redaction .
- User consent is collected using a boolean session parameter: $session.params.conversation-redaction .

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Redact in log If you enable entity redaction, all runtime extracted parameter values for the entity type will be redacted when logging.
- For example, each of the following rows are entity entries for a material entity type: Value fabric wood metal If any value is matched for an end-user input part, the value is extracted for the match and is used to resolve the associated parameter value.
- If any of the synonyms are matched for an end-user input part, the associated reference value is extracted for the match and is used to resolve the associated parameter value.
- As an alternative, you can redact individual parameters .

### AdvancedSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "enableStackdriverLogging" : boolean , "enableInteractionLogging" : boolean , "enableConsentBasedRedaction" : boolean } Fields enableStackdriverLogging boolean Enables Google Cloud Logging. enableInteractionLogging boolean Enables DF Interaction logging. enableConsentBasedRedaction boolean Enables consent-based end-user input redaction, if true, a pre-defined session parameter $session.params.conversation-redaction will be used to determine if the utterance should be redacted.
- JSON representation GcsDestination JSON representation SpeechSettings JSON representation DtmfSettings JSON representation LoggingSettings JSON representation Hierarchical advanced settings for agent/flow/page/fulfillment/parameter.
- Exposed at the following levels: - Agent level - Flow level - Page level - Parameter level. loggingSettings object ( LoggingSettings ) Settings for logging.
- Exposed at the following levels: - Agent level - Flow level - Page level - Parameter level dtmfSettings object ( DtmfSettings ) Settings for DTMF.

