---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.602Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "AutoML dataset segment pair tagging"
feature_slug: "automl-dataset-segment-pair-tagging"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart"
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
Coverage: MEDIUM

## Step 02 Summary

AutoML datasets can tag segment pairs during import in the Google Cloud console.

## Extended Definition

AutoML datasets can tag segment pairs during import in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)

## Supporting Pages

### Create and manage datasets \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- Source ID: `site-iam-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export data You can export segment pairs from existing datasets to a Cloud Storage bucket.
- Import segments into a dataset After you have created a dataset, you can import segment pairs into the dataset.
- You can add tags when you import segments through the Google Cloud console; tagging isn't supported by the API.
- Import issues When you create a dataset, Cloud Translation might drop segment pairs if they are too long, if segments in the source and target languages are identical (untranslated), or if there are duplicates (multiple segments with the same source language text).

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Legacy Native Import data into datasets when using the API Use CSV file to specify source file locations in Cloud Storage Specify TMX and TSV files locations in Cloud Storage Export data Supports exporting segment pairs from a dataset or data from the model evaluation, which includes the test set along with model predictions Supports exporting segment pairs from a dataset only View data splits by source file The Google Cloud console shows a list of source files that were used to populate a dataset and how the data was split for each file.
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.
- Upgraded resources can take advantage of those future enhancements such as additional language pair support.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- Importing data After you've decided whether a manual or automatic split of your data is right for you, there are two ways to add data: You can import data as a tab-separated values (TSV) file containing source and target segments, one segment pair per line.
- For automatic data splitting, Cloud Translation - Advanced API performs additional processing (see Dataset division ): After the dataset is uploaded, it removes segment pairs with identical source segments.
- Manual splitting gives you more control over the process, not only letting you determine the split percentages, but also letting you specify particular sets in which to include particular segment pairs.

### "Create a custom translation model \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you can start using AutoML Translation, your project must have the Cloud Translation API enabled, and you must have the permissions that are granted by the following roles: Viewer role to view existing resources in your project Cloud Translation API Editor role to create and manage datasets and models Storage Admin role to upload training data to a Cloud Storage bucket Create a translation dataset and import segment pairs Download the archive file that contains the sample data for training the model, and extract the files.
- The following example uses AutoML Translation to train an English-to-Spanish translation model by using a dataset that contains technology-oriented segment pairs from software localization.
- Note: The following tutorial assumes that, for your project, the Google Cloud console is using the Cloud Translation API instead of the AutoML API to create datasets.
- You can view these splits and the imported sentence pairs in the Sentences tab of your dataset.

