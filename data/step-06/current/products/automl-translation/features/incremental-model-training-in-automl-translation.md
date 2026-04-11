---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:52:53.927Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "Incremental model training in AutoML Translation"
feature_slug: "incremental-model-training-in-automl-translation"
latest_feature_date: "2020-07-01"
deprecation_date: "2020-07-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-prepare"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
keywords:
  - "incremental"
  - "stopped"
  - "in"
  - "training"
  - "for"
  - "translation"
  - "model"
  - "automl"
---

# Incremental model training in AutoML Translation

Product: AutoML Translation
Coverage: LOW

## Step 02 Summary

AutoML Translation stopped support for incremental model training and now requires training new models with combined datasets; deprecated on 2020-07-01.

## Extended Definition

AutoML Translation stopped support for incremental model training and now requires training new models with combined datasets; deprecated on 2020-07-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-prepare](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-prepare)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)

## Supporting Pages

### Prepare training data for Translation LLM models \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-prepare](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-prepare)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Prepare training data for Translation LLM models This document describes how to define a supervised fine-tuning dataset for a Translation LLM model.
- AutoML Translation dataset If you already have Translation datasets uploaded to AutoML Translation, you can follow the Colab example to export them for TLLM tuning.
- For limits on the inputs, such as the maximum number of tokens or the number of images, see the model specifications on the Google models page.
- Dataset format Your model tuning dataset must be in the JSON Lines (JSONL) format, where each line contains a single tuning example.

### "Create a custom translation model \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Before you can start using AutoML Translation, your project must have the Cloud Translation API enabled, and you must have the permissions that are granted by the following roles: Viewer role to view existing resources in your project Cloud Translation API Editor role to create and manage datasets and models Storage Admin role to upload training data to a Cloud Storage bucket Create a translation dataset and import segment pairs Download the archive file that contains the sample data for training the model, and extract the files.
- The following example uses AutoML Translation to train an English-to-Spanish translation model by using a dataset that contains technology-oriented segment pairs from software localization.
- Note: The following tutorial assumes that, for your project, the Google Cloud console is using the Cloud Translation API instead of the AutoML API to create datasets.
- Create a custom translation model Note: Translation LLM can be customized with your training data using Vertex AI supervised fine-tuning - Public Preview .

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can import data as a TMX file , a standard format for providing segment pairs to automatic translation model tools (see Prepare training data ) for more about the TMX format).
- The higher the BLEU score, the better translations your model can give you for segments that are similar to your training data.
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- You're building on top of a model that already does a pretty good job with general-purpose translation - your examples are the special last step that makes custom models work for your use case in particular, so make sure they're relevant and representative of usage you expect to see.

