---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.330Z"
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
  - "generative"
  - "phrase"
  - "synonym"
  - "translation"
  - "dialogflow"
  - "cx"
  - "can"
  - "auto"
---

# Generative phrase and synonym translation

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can auto-generate and auto-translate intent training phrases, entity synonyms, and fulfillment phrases into a selected language.

## Extended Definition

Dialogflow CX can auto-generate and auto-translate intent training phrases, entity synonyms, and fulfillment phrases into a selected language.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

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
- When you enable a non-default language, Dialogflow CX does not automatically translate any existing reference values and synonyms.
- Requests that do not supply an agent's language When Dialogflow receives a request that does not supply a language supported by the agent, the following rules apply: When a request does not supply a language, Dialogflow automatically determines the input language and responds in that language if automatic language detection is enabled .
- Entity Synonyms XS XS, extra pequeño S S, pequeño M M, medio L L, grande XL XL, extra grande AI generate language-specific data Dialogflow CX gives you the option to speed up the process of adding language-specific data by using AI generation to provide the data for you, instead of manually entering it by hand.
- You can type a reference value in your default language, and both the reference value and its synonyms will be automatically translated into the new language. (Preview) Fulfillment AI generation AI generation is available for route, route groups, and event handler fulfillment types.

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
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- For regular API calls, make sure the service account used to call Dialogflow CX is granted with "AutoML Predictor" role in your custom voice project.
- For regular API calls, make sure the service account used to call Dialogflow CX is granted with "AutoML Predictor" role in your custom voice project.

