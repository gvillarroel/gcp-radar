---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.643Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Data store sources"
feature_slug: "data-store-sources"
latest_feature_date: "2025-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
keywords:
  - "sources"
  - "native"
  - "third"
  - "party"
  - "additional"
  - "available"
  - "store"
---

# Data store sources

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Additional native and third-party data store sources are now available in private GA.

## Extended Definition

Additional native and third-party data store sources are now available in private GA.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)

## Supporting Pages

### Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Restricted access data store sources Google offers many additional first- and third-party data store sources as a restricted access feature.
- To see a list of available sources and to request access, see the additional data store sources section on this page.
- Third-party data store sources Data store source Description Box Import data from your organization's Box site.
- Supported regions For supported regions, see the region reference . (Restricted access) Additional data store sources Additional data store types are listed in the following table.

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- The found sources are rendered in a specific format: [1] title of first source content of first source [2] title of second source content of second source $end-user-metadata : Information about the user sending the query is rendered in the following format: The following additional information is available about the human: { "key1": "value1", "key2": "value2", ... } $conversation : The conversation history is rendered in the following format: Human: user's first query AGENT: answer to user's first query Human: user's second query AGENT: answer to user's second query ${conversation USER:"<user prefix>" AGENT:"<agent prefix>" TURNS:<turn count>} : A parameterized version of the $conversation placeholder.
- The conversation history is rendered as: Human says: user's first query Agent says: answer to user's first query $end-user-metadata : Information about the user sending the query is rendered in the following format: The following additional information is available about the human: { "key1": "value1", "key2": "value2", ... } For example: Your goal is to perform a search query to help the AI assistant respond to the human's last statement.
- Follow these guidelines: + Answer the Human's query and make sure you mention all relevant details from the sources, using exactly the same words as the sources if possible. + The answer must be based only on the sources and not introduce any additional information. + All numbers, like price, date, time or phone numbers must appear exactly as they are in the sources. + Give as comprehensive answer as possible given the sources.
- The following data store tool configuration settings are available.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Information How to access Snippet of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "snippet") Title of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "title") Link of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "uri") Number of identified sources for the top answer $sys.func.COUNT($sys.func.IDENTITY($request.knowledge.sources[0])) Number of knowledge answers $sys.func.COUNT($request.knowledge.answers) Question corresponding to the top answer (for FAQ data store answers only) $request.knowledge.questions[0] Grounding confidence for the top answer $request.knowledge.grounding confidences[0] Previous arrow back Data stores Next Data store tool settings arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Advanced response customization Additional information might be available in $request.knowledge. that could be used to customize the response.
- They are available both by calling the API directly or by clicking on the data store name on Tools page in the console.
- For more information about additional these additional configuration options, see the data store settings page .

