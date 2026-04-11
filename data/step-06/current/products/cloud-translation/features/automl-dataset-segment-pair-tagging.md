---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.587Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "AutoML dataset segment pair tagging"
feature_slug: "automl-dataset-segment-pair-tagging"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
keywords:
  - "automl"
  - "dataset"
  - "segment"
  - "pair"
  - "tagging"
  - "datasets"
  - "can"
  - "tag"
---

# AutoML dataset segment pair tagging

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

AutoML datasets can tag segment pairs during import in the Google Cloud console.

## Extended Definition

AutoML datasets can tag segment pairs during import in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)

## Supporting Pages

### Create and manage datasets \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export data You can export segment pairs from existing datasets to a Cloud Storage bucket.
- Import segments into a dataset After you have created a dataset, you can import segment pairs into the dataset.
- You can add tags when you import segments through the Google Cloud console; tagging isn't supported by the API.
- Import issues When you create a dataset, Cloud Translation might drop segment pairs if they are too long, if segments in the source and target languages are identical (untranslated), or if there are duplicates (multiple segments with the same source language text).

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Legacy Native Import data into datasets when using the API Use CSV file to specify source file locations in Cloud Storage Specify TMX and TSV files locations in Cloud Storage Export data Supports exporting segment pairs from a dataset or data from the model evaluation, which includes the test set along with model predictions Supports exporting segment pairs from a dataset only View data splits by source file The Google Cloud console shows a list of source files that were used to populate a dataset and how the data was split for each file.
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.
- Upgraded resources can take advantage of those future enhancements such as additional language pair support.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- Importing data After you've decided whether a manual or automatic split of your data is right for you, there are two ways to add data: You can import data as a tab-separated values (TSV) file containing source and target segments, one segment pair per line.
- For automatic data splitting, Cloud Translation - Advanced API performs additional processing (see Dataset division ): After the dataset is uploaded, it removes segment pairs with identical source segments.
- Manual splitting gives you more control over the process, not only letting you determine the split percentages, but also letting you specify particular sets in which to include particular segment pairs.

