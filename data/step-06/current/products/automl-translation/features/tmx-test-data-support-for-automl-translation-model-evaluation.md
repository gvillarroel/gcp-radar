---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:52:53.926Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "TMX test-data support for AutoML Translation model evaluation"
feature_slug: "tmx-test-data-support-for-automl-translation-model-evaluation"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
keywords:
  - "evaluation"
  - "test"
  - "tmx"
  - "added"
  - "for"
  - "translation"
  - "model"
  - "automl"
---

# TMX test-data support for AutoML Translation model evaluation

Product: AutoML Translation
Coverage: LOW

## Step 02 Summary

AutoML Translation added support for .tmx files as test data when evaluating existing translation models.

## Extended Definition

AutoML Translation added support for .tmx files as test data when evaluating existing translation models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation](https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)

## Supporting Pages

### Evaluate translation models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation](https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use Gen AI evaluation service The Gen AI evaluation service offers the following translation task evaluation metrics: MetricX COMET BLEU MetricX and COMET are pointwise model-based metrics that have been trained for translation tasks.
- Test model predictions By using the Google Cloud console, you compare translation results for your custom model against the default NMT model.
- To learn how to run evaluations for translation models using Gen AI evaluation service, see Evaluate a translation model .
- You can optionally save the results for each model as a TSV file in a Cloud Storage bucket, where each row has the following format: Source segment tab Model candidate translation tab Reference translation Go to the Cloud Translation console.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there's a mistake that you're particularly worried about your model making (like a translation mistake that might be costly in money or reputation) make sure your test set or procedure covers that case adequately for you to feel safe using your model in everyday tasks.
- You can import data as a TMX file , a standard format for providing segment pairs to automatic translation model tools (see Prepare training data ) for more about the TMX format).
- For information about those evaluation options, see Evaluate translation models .
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Legacy Native Import data into datasets when using the API Use CSV file to specify source file locations in Cloud Storage Specify TMX and TSV files locations in Cloud Storage Export data Supports exporting segment pairs from a dataset or data from the model evaluation, which includes the test set along with model predictions Supports exporting segment pairs from a dataset only View data splits by source file The Google Cloud console shows a list of source files that were used to populate a dataset and how the data was split for each file.
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- For example, if you have commands that call the deprecated AutoML API and reference legacy resource IDs, you need to update those commands to call the Cloud Translation API and reference the native resource IDs.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.

