---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.655Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Generative phrase and synonym translation"
feature_slug: "generative-phrase-and-synonym-translation"
latest_feature_date: "2025-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "translation"
  - "synonym"
  - "auto"
  - "phrase"
  - "generative"
---

# Generative phrase and synonym translation

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can auto-generate and auto-translate intent training phrases, entity synonyms, and fulfillment phrases into a selected language.

## Extended Definition

Dialogflow CX can auto-generate and auto-translate intent training phrases, entity synonyms, and fulfillment phrases into a selected language.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Multilingual agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- You can type a reference value in your default language, and both the reference value and its synonyms will be automatically translated into the new language. (Preview) Fulfillment AI generation AI generation is available for route, route groups, and event handler fulfillment types.
- Auto-generate and auto-translate reference values and synonyms in a non-default language: Go to Agent settings > Languages and make sure you have one or more non-default languages enabled for your agent.
- Intent AI generation Auto-generate training phrases in a non-default language: Go to Agent settings > Languages and make sure you have one or more non-default languages enabled for your agent.
- To copy and automatically translate your existing training phrases, select All training phrases from your Default Language translated by AI generation .

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- See the following options for any existing entities (some of these may only be visible after expanding Advanced options ): Entities only (no synonyms) Regexp entities Automatically add entities Fuzzy matching Redact in log Entity exclusions If you are building an agent using the API instead of the console, see the EntityType type.
- Use AI generation to auto-generate synonyms Instead of entering synonyms manually, you can use an AI generator to auto-generate synonyms for your reference value.
- When you initially enter a reference value with the console, it is automatically added as a synonym.
- Go to the EntityType API reference Select a protocol and version for the EntityType reference: Protocol V3 V3beta1 REST EntityType resource EntityType resource RPC EntityType interface EntityType interface C++ EntityTypesClient Not available C# EntityTypesClient Not available Go EntityTypesClient Not available Java EntityTypesClient EntityTypesClient Node.js EntityTypesClient EntityTypesClient PHP Not available Not available Python EntityTypesClient EntityTypesClient Ruby Not available Not available Close Map entity Map entities provide a map from reference values to synonyms for each reference value.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Generative AI settings The following generative AI settings are available: General Banned phrases List of phrases that are banned for generative AI.
- Banned phrases link List of phrases that are banned for generative AI.
- Banned phrases List of phrases that are banned for generative AI.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

