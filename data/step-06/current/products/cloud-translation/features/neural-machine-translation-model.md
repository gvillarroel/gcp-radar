---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.615Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Neural Machine Translation model"
feature_slug: "neural-machine-translation-model"
latest_feature_date: "2017-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/basic/translate-text-basic"
  - "https://docs.cloud.google.com/translate/docs/basic/translating-text"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Translation supports Neural Machine Translation as a translation model option and uses it by default when available.

## Extended Definition

Cloud Translation supports Neural Machine Translation as a translation model option and uses it by default when available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)

## Supporting Pages

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- Model parameter When you make a translation request to the Cloud Translation - Basic, Cloud Translation - Basic translates your text using the Google Neural Machine Translation (NMT) model by default.
- Find available languages and codes here: https://cloud.google.com/translate/docs/languages#neural machine translation model """ Initialize Translation client. client = translate v3 .
- They give you access to the standard Neural Machine Translation (NMT) model and the Translation LLM, which is our latest LLM-style translation model.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- Model parameter When you make a translation request to the Cloud Translation - Basic, Cloud Translation - Basic translates your text using the Google Neural Machine Translation (NMT) model by default.
- Find available languages and codes here: https://cloud.google.com/translate/docs/languages#neural machine translation model """ Initialize Translation client. client = translate v3 .
- They give you access to the standard Neural Machine Translation (NMT) model and the Translation LLM, which is our latest LLM-style translation model.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- Model parameter When you make a translation request to the Cloud Translation - Basic, Cloud Translation - Basic translates your text using the Google Neural Machine Translation (NMT) model by default.
- Find available languages and codes here: https://cloud.google.com/translate/docs/languages#neural machine translation model """ Initialize Translation client. client = translate v3 .
- They give you access to the standard Neural Machine Translation (NMT) model and the Translation LLM, which is our latest LLM-style translation model.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- Model parameter When you make a translation request to the Cloud Translation - Basic, Cloud Translation - Basic translates your text using the Google Neural Machine Translation (NMT) model by default.
- Find available languages and codes here: https://cloud.google.com/translate/docs/languages#neural machine translation model """ Initialize Translation client. client = translate v3 .
- They give you access to the standard Neural Machine Translation (NMT) model and the Translation LLM, which is our latest LLM-style translation model.

