---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.862Z"
product_name: "Translation Hub"
product_slug: "translation-hub"
feature_name: "Automatic portal service account enablement"
feature_slug: "automatic-portal-service-account-enablement"
latest_feature_date: "2023-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory"
keywords:
  - "automatic"
  - "portal"
  - "account"
  - "enablement"
  - "translation"
  - "hub"
  - "can"
  - "now"
---

# Automatic portal service account enablement

Product: Translation Hub
Coverage: MEDIUM

## Step 02 Summary

Translation Hub can now automatically enable a portal's service account when creating a portal.

## Extended Definition

Translation Hub can now automatically enable a portal's service account when creating a portal.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)
- [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage)
- [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory)

## Supporting Pages

### "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Portal service account Translation Hub assigns each portal a unique service account and, by default, automatically assigns the Translation Hub Portal User role to the service account.
- After Translation Hub creates your portal, you can go to the Portals page to find and view details about your portal, such as its URL and its service account name.
- Translation Hub automatically assigns the Translation Hub Portal User IAM role to the portal service account.
- Users with the EMAIL PASSWORD sign-in method receive an email notification with a portal URL; they can also sign in by going to https://translationhub.cloud.google.com/ .

### Enable post-editing requests \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can set a default translation memory so that Translation Hub automatically sets a translation memory when a portal user requests a translation.
- Go to the IAM page From the list of principals, check to see if the cloud-translation-hub@system.gserviceaccount.com service account already exists with the Storage Admin role.
- To allow access, grant the Translation Hub service account the Storage Admin role, which allows Translation Hub to upload and read CSV files from your Cloud Storage buckets.
- If a portal user selects a read-only translation memory, no post edits can be saved; the translation memory is used only for matching translations.

### "Centrally manage saved translations \_|\_ Translation Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might, for example, set a translation memory to read only for most portals so that users can apply the translation memory and freely make post edits without modifying the translation memory.
- You can continue using Translation Hub until September 20, 2026, when it will be shut down.
- In the Translation Hub section of the Google Cloud console, go to the Portals page.
- Home Documentation AI and ML Translation Hub Guides Send feedback Centrally manage saved translations Stay organized with collections Save and categorize content based on your preferences.

### "Save and reuse human-reviewed translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set a default translation memory You can set a default translation memory that Translation Hub automatically selects when portal users request a translation.
- Portal users can apply a translation memory on their translation jobs so that exact matches on source-language segments are replaced by their corresponding target-language segments.
- For example, if a portal user edits a segment that Translation Hub translated with a translation memory, Translation Hub replaces the existing segment with the newly edited segment.
- Translation memory compared to other translation resources In addition to translation memories, you can provide other resources to assist portal users with their translations.

