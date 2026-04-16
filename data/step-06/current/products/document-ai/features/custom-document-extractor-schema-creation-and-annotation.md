---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.002Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor schema creation and annotation"
feature_slug: "custom-document-extractor-schema-creation-and-annotation"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "schema"
  - "creation"
  - "and"
  - "annotation"
  - "upgrades"
---

# Custom Document Extractor schema creation and annotation

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor upgrades schema creation and annotation workflows.

## Extended Definition

Custom Document Extractor upgrades schema creation and annotation workflows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)

## Supporting Pages

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- The following parsers do follow it: Extract (Custom Extractor) Legacy Bank statement parser Expense parser Invoice Parser PaySlip parser W2 Parser Code samples The following code samples demonstrate how to send a processing request and then read and print the fields from a specialized processor to the terminal: Java For more information, see the Document AI Java API reference documentation .
- The following code sample demonstrates how to configure specific entities for a foundation model Custom Document Extractor on a per-request basis and print the extracted entities: Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document custom extractor sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Entities to extract from Foundation Model CDE properties = [ documentai .
- To process this the external annotation must have these type of objects: 1) Type 2) Text 3) Bounding Box (bounding boxes must be 1 of the 3 optional types) This is the bare minimum requirement to convert the annotations but for better accuracy you will need to also have: 1) Document width & height Bounding Box Types: Type 1: bounding box:[{"x":1,"y":2},{"x":2,"y":2},{"x":2,"y":3},{"x":1,"y":3}] Type 2: bounding box:{ "Width": 1, "Height": 1, "Left": 1, "Top": 1} Type 3: bounding box: [1,2,2,2,2,3,1,3] Note: If these types are not sufficient you can propose a feature request or contribute the new type and conversion functionality.

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.
- When complete, you find the documents on the Manage Dataset tab with the label applied. (Optional) Train the processor If you're using v1.4, you must train the custom processor on training and test sets of data.
- Create a custom classifier in the Google Cloud console You can create custom classifiers that are specifically suited to your documents and trained and evaluated with your data.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- Signature detection in custom extractor Document AI's custom extractor supports signature detection in custom extractor models pretrained-foundation-model-v1.4-2025-02-05 and pretrained-foundation-model-v1.5-2025-05-05 .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Previous arrow back Custom extractor with generative AI Next Pretrained overview arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

