---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.519Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "IDE Modal File Operation Loading Indicator"
feature_slug: "ide-modal-file-operation-loading-indicator"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore"
keywords:
  - "ide"
  - "modal"
  - "file"
  - "operation"
  - "loading"
  - "indicator"
  - "now"
  - "appears"
---

# IDE Modal File Operation Loading Indicator

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

A loading indicator now appears in the IDE modal when creating, renaming, or deleting a file or folder.

## Extended Definition

A loading indicator now appears in the IDE modal when creating, renaming, or deleting a file or folder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)

## Supporting Pages

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- For the most part, PNG files render the same as PDF files, with a few differences: When the Arrange dashboard tiles in a single column setting is selected, each tile renders as an individual PNG file rather than all tiles rendering together as a single file.
- Home Documentation Data analytics Looker Best Practices Send feedback Downloading or delivering dashboards in rendered formats Stay organized with collections Save and categorize content based on your preferences.
- PDFs To output PDFs, follow the instructions for downloading a dashboard as a PDF or, when sending or scheduling a dashboard, choosing the PDF format .
- By default, a PDF file mirrors what you see when you view the dashboard in your browser at a width of 1680 pixels.

### Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Enabling the APIs to support Google Sheets uploads To support uploading data from Google Sheets, the following APIs must be enabled in the Google Cloud console by an IAM user with the IAM roles/serviceusage.serviceUsageAdmin permission: This API must be enabled in the Google Cloud project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page: BigQuery API: Required for all BigQuery operations These APIs must be enabled in the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection , which may or may not be the same as the Google Cloud project that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page): BigQuery API: Required for all BigQuery operations Google Sheets API: Required for retrieving the names of each sheet in a Google Sheets document Google Drive API: Required for BigQuery to read files from Drive Perform the following steps to enable the APIs: From the Google Cloud console Open project picker , select the project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page.
- The Data uploads table shows the following information about the data uploads on your instance: The name of the self-service Explore, which is also a hyperlink that opens the self-service Explore The owner of the data upload The date that the data was uploaded A Delete button that allows Looker admins to delete the file upload and its associated self-service Explore Looker admins can open any self-service Explore on the instance by using the links in the Data uploads table.
- With the Self-service Explores feature, your Looker users can upload CSV, XLS, and XLSX files to Looker and then query and visualize the data in a Looker Explore without needing to configure a LookML model or set up Git version control.
- For any user who will be creating self-service Explores, their Looker user account must have the upload data permission, which allows a user to upload CSV files to your instance.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-docs-reference-required-6`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported file formats The BigQuery Data Transfer Service supports loading data from Blob Storage in the following formats: Comma-separated values (CSV) JSON (newline delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Blob Storage supports loading compressed data.
- Example: Single file To load a single file from Blob Storage into BigQuery, specify the Blob Storage filename: my-folder/my-file.csv Example: All files To load all files from a Blob Storage container into BigQuery, set the data path to a single wildcard: Example: Files with a common prefix To load all files from Blob Storage that share a common prefix, specify the common prefix with or without a wildcard: my-folder/ or my-folder/ Example: Files with a similar path To load all files from Blob Storage with a similar path, specify the common prefix and suffix: my-folder/ .csv When you only use a single wildcard, it spans directories.
- Example: Wildcard at end of path Consider the following data path: logs/ All of the following files are selected: logs/logs.csv logs/system/logs.csv logs/some-application/system logs.log logs/logs 2019 12 12.csv Example: Wildcard at beginning of path Consider the following data path: logs.csv All of the following files are selected: logs.csv system/logs.csv some-application/logs.csv And none of the following files are selected: metadata.csv system/users.csv some-application/output.csv Example: Multiple wildcards By using multiple wildcards, you gain more control over file selection, at the cost of lower limits .
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .

