---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.858Z"
product_name: "Translation Hub"
product_slug: "translation-hub"
feature_name: "Default translation memory configuration"
feature_slug: "default-translation-memory-configuration"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory"
  - "https://docs.cloud.google.com/translation-hub/docs/user-translate"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage"
keywords:
  - "default"
  - "translation"
  - "memory"
  - "configuration"
  - "advanced"
  - "tier"
  - "hub"
  - "portals"
---

# Default translation memory configuration

Product: Translation Hub
Coverage: MEDIUM

## Step 02 Summary

Advanced-tier Translation Hub portals can define a default translation memory for users.

## Extended Definition

Advanced-tier Translation Hub portals can define a default translation memory for users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory)
- [https://docs.cloud.google.com/translation-hub/docs/user-translate](https://docs.cloud.google.com/translation-hub/docs/user-translate)
- [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage)

## Supporting Pages

### "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For advanced-tier portals, you must associate a translation memory with the portal.
- Translation memory (advanced tier only): A translation memory controls how matching segments are translated at the sentence level.
- Advanced-tier portals offer additional features at a different translation cost per page.
- Portal service account Translation Hub assigns each portal a unique service account and, by default, automatically assigns the Translation Hub Portal User role to the service account.

### "Save and reuse human-reviewed translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory)
- Source ID: `site-iam-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remove default translation memory In the Translation Hub section of the Google Cloud console, go to the Portals page.
- Set a default translation memory You can set a default translation memory that Translation Hub automatically selects when portal users request a translation.
- If you have an existing default, Translation Hub removes it as the default and sets your selected translation memory as the default.
- Go to the Portals page Select the portal where you want to specify a default translation memory.

### Translate documents \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/user-translate](https://docs.cloud.google.com/translation-hub/docs/user-translate)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation memory (advanced tier only): A translation memory controls how matching segments are translated at the sentence level.
- Advanced-tier portals offer additional features at a different translation cost per page, such as post-editing capabilities.
- Portal tiers Translation Hub offers two portal tiers: basic or advanced .
- If you use a combination of these resources, they work together in the following way: Translation Hub processes the translation memory first.

### "Centrally manage saved translations \_|\_ Translation Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might, for example, set a translation memory to read only for most portals so that users can apply the translation memory and freely make post edits without modifying the translation memory.
- Go to the Portals page Select the portal that contains the translation memory that you want to set as read only.
- Set translation memory to read only The read-write configuration for translation memories is set per portal.
- By default, when you assign a translation memory to a portal, the translation memory is set as read-write.

