---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:52:53.929Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "AutoML Translation Google NMT TPU training architecture"
feature_slug: "automl-translation-google-nmt-tpu-training-architecture"
latest_feature_date: "2019-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
  - "https://docs.cloud.google.com/translate/docs/advanced/nmt-customization"
keywords:
  - "architecture"
  - "upgraded"
  - "based"
  - "nmt"
  - "tpu"
  - "training"
  - "translation"
  - "automl"
---

# AutoML Translation Google NMT TPU training architecture

Product: AutoML Translation
Coverage: LOW

## Step 02 Summary

AutoML Translation upgraded Google NMT-based model training and serving to a new end-to-end TPU-based architecture.

## Extended Definition

AutoML Translation upgraded Google NMT-based model training and serving to a new end-to-end TPU-based architecture.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- [https://docs.cloud.google.com/translate/docs/advanced/nmt-customization](https://docs.cloud.google.com/translate/docs/advanced/nmt-customization)

## Supporting Pages

### "Create a custom translation model \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Before you can start using AutoML Translation, your project must have the Cloud Translation API enabled, and you must have the permissions that are granted by the following roles: Viewer role to view existing resources in your project Cloud Translation API Editor role to create and manage datasets and models Storage Admin role to upload training data to a Cloud Storage bucket Create a translation dataset and import segment pairs Download the archive file that contains the sample data for training the model, and extract the files.
- AutoML Translation automatically splits your data into training, validation, and testing sets.
- The following example uses AutoML Translation to train an English-to-Spanish translation model by using a dataset that contains technology-oriented segment pairs from software localization.
- Note: The following tutorial assumes that, for your project, the Google Cloud console is using the Cloud Translation API instead of the AutoML API to create datasets.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- If the translation task is ambiguous enough that a person fluent in both languages would have a hard time doing a satisfactory job, the NMT model might perform as well as a custom model.
- You can import data as a TMX file , a standard format for providing segment pairs to automatic translation model tools (see Prepare training data ) for more about the TMX format).
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/nmt-customization](https://docs.cloud.google.com/translate/docs/advanced/nmt-customization)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- If the translation task is ambiguous enough that a person fluent in both languages would have a hard time doing a satisfactory job, the NMT model might perform as well as a custom model.
- You can import data as a TMX file , a standard format for providing segment pairs to automatic translation model tools (see Prepare training data ) for more about the TMX format).
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

