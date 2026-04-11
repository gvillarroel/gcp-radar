---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.592Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Transliteration"
feature_slug: "transliteration"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/basic/translate-text-basic"
keywords:
  - "transliteration"
  - "converts"
  - "text"
  - "between"
  - "writing"
  - "systems"
  - "while"
  - "preserving"
---

# Transliteration

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Transliteration converts text between writing systems while preserving pronunciation.

## Extended Definition

Transliteration converts text between writing systems while preserving pronunciation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)

## Supporting Pages

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE ", "contents": " SOURCE TEXT ", "mime type": "text/plain", "transliteration config": { "enable transliteration": true} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The output retains the (untranslated) HTML tags, with the translated text between the tags to the extent possible due to differences between the source and target languages.
- Considerations Transliteration differs from standard text translations in the following ways: Transliteration supports a limited number of languages.
- Cloud Translation API doesn't translate any HTML tags in the input, only text that appears between the tags.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE ", "contents": " SOURCE TEXT ", "mime type": "text/plain", "transliteration config": { "enable transliteration": true} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The output retains the (untranslated) HTML tags, with the translated text between the tags to the extent possible due to differences between the source and target languages.
- Considerations Transliteration differs from standard text translations in the following ways: Transliteration supports a limited number of languages.
- Cloud Translation API doesn't translate any HTML tags in the input, only text that appears between the tags.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE ", "contents": " SOURCE TEXT ", "mime type": "text/plain", "transliteration config": { "enable transliteration": true} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The output retains the (untranslated) HTML tags, with the translated text between the tags to the extent possible due to differences between the source and target languages.
- Considerations Transliteration differs from standard text translations in the following ways: Transliteration supports a limited number of languages.
- Cloud Translation API doesn't translate any HTML tags in the input, only text that appears between the tags.

