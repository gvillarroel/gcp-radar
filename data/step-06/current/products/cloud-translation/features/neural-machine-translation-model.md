---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.612Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Neural Machine Translation model"
feature_slug: "neural-machine-translation-model"
latest_feature_date: "2017-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/basic/translate-text-basic"
  - "https://docs.cloud.google.com/translate/docs/advanced/compare-models"
keywords:
  - "neural"
  - "machine"
  - "translation"
  - "model"
  - "supports"
  - "as"
  - "option"
  - "and"
---

# Neural Machine Translation model

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation supports Neural Machine Translation as a translation model option and uses it by default when available.

## Extended Definition

Cloud Translation supports Neural Machine Translation as a translation model option and uses it by default when available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- [https://docs.cloud.google.com/translate/docs/advanced/compare-models](https://docs.cloud.google.com/translate/docs/advanced/compare-models)

## Supporting Pages

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- November 01, 2021 Feature Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements: Right to left language support for PDFs Preserves font size, font color, font style, and hyperlinks for native PDFs only Batch document translation requests support PDF to DOCX conversions for native PDFs only August 02, 2021 Change Removed the Phrase-Based Machine Translation (PBMT) model.
- In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports: User labels Audit logging Separate quotas for batch translation and for translation using AutoML models Client libraries for additional languages PHP, GO, C#, and Ruby Note: Existing users should pay careful attention to client library versions before updating.
- September 15, 2017 Change The Translation API has added support for 70 new languages in the Neural Machine Translation (NMT) model.
- Change The https://www.googleapis.com/language/translate/v2 endpoint now supports the Neural Machine Translation (NMT) model.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- Model parameter When you make a translation request to the Cloud Translation - Basic, Cloud Translation - Basic translates your text using the Google Neural Machine Translation (NMT) model by default.
- Find available languages and codes here: https://cloud.google.com/translate/docs/languages#neural machine translation model """ Initialize Translation client. client = translate v3 .
- They give you access to the standard Neural Machine Translation (NMT) model and the Translation LLM, which is our latest LLM-style translation model.

### "Choose the right model for your application \_|\_ Cloud Translation \_|\_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/compare-models](https://docs.cloud.google.com/translate/docs/advanced/compare-models)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- This is a new feature of Cloud Translation - Advanced. translation-llm-custom/{model-id} Adaptive Machine Translation model This option involves real-time, lightweight customization of the Translation LLM using Adaptive Translation based on a limited dataset of translation examples. general/translation-llm-adaptive Customized NMT model You can train a new customized version of the NMT model using training data specific to your domain and use case.
- Model Description Model ID Translation LLM (TLLM) Highest quality translation model - a Large language model (LLM) powered by Gemini and fine-tuned for translation to provide the highest quality translations at fast latencies (2x faster latency than Gemini 2.0 Flash). general/translation-llm Neural Machine Translation (NMT) model Fastest translation model - ideal for real time and latency critical use cases.
- Cloud Translation - Basic API gives you straightforward access to Google's Neural Machine Translation (NMT) model without modified settings.
- Cloud Translation - Basic supports only standard models, not customized models.

