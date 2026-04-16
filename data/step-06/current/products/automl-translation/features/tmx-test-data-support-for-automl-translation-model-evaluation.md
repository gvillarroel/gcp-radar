---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:23:11.938Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "TMX test-data support for AutoML Translation model evaluation"
feature_slug: "tmx-test-data-support-for-automl-translation-model-evaluation"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
  - "https://docs.cloud.google.com/translate/docs/advanced/nmt-customization"
keywords:
  - "evaluation"
  - "files"
  - "test"
  - "added"
  - "model"
---

# TMX test-data support for AutoML Translation model evaluation

Product: AutoML Translation
Coverage: MEDIUM

## Step 02 Summary

AutoML Translation added support for .tmx files as test data when evaluating existing translation models.

## Extended Definition

AutoML Translation added support for .tmx files as test data when evaluating existing translation models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation](https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- [https://docs.cloud.google.com/translate/docs/advanced/nmt-customization](https://docs.cloud.google.com/translate/docs/advanced/nmt-customization)

## Supporting Pages

### Evaluate translation models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation](https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These files will be named with the associated model ID with the test set name appended.
- Your model is evaluated against the test set and an evaluation score is produced.
- Use Gen AI evaluation service The Gen AI evaluation service offers the following translation task evaluation metrics: MetricX COMET BLEU MetricX and COMET are pointwise model-based metrics that have been trained for translation tasks.
- Evaluate a custom NMT model on Google Cloud console After you have trained a new custom NMT model, you can use your TEST set to evaluate the model's quality and accuracy directly on the Google Cloud console.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there's a mistake that you're particularly worried about your model making (like a translation mistake that might be costly in money or reputation) make sure your test set or procedure covers that case adequately for you to feel safe using your model in everyday tasks.
- Testing Even if your BLEU score looks okay, it's a good practice to check the model yourself to make sure its performance matches your expectations.
- The performance of your model on the test set is intended to give you a pretty good idea of how your model will perform on real-world data.
- Preliminary evaluation of your custom model After your model is trained, you receive a summary of your model performance.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/nmt-customization](https://docs.cloud.google.com/translate/docs/advanced/nmt-customization)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there's a mistake that you're particularly worried about your model making (like a translation mistake that might be costly in money or reputation) make sure your test set or procedure covers that case adequately for you to feel safe using your model in everyday tasks.
- Testing Even if your BLEU score looks okay, it's a good practice to check the model yourself to make sure its performance matches your expectations.
- The performance of your model on the test set is intended to give you a pretty good idea of how your model will perform on real-world data.
- Preliminary evaluation of your custom model After your model is trained, you receive a summary of your model performance.

