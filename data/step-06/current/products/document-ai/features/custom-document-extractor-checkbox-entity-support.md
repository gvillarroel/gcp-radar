---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.994Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor checkbox entity support"
feature_slug: "custom-document-extractor-checkbox-entity-support"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "checkbox"
  - "entity"
  - "adds"
  - "annotation"
  - "training"
---

# Custom Document Extractor checkbox entity support

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor adds checkbox annotation, training, and extraction support.

## Extended Definition

Custom Document Extractor adds checkbox annotation, training, and extraction support.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)

## Supporting Pages

### Custom extractor overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview The goal of the custom extractor is to enable Document AI users to build custom entity extraction solutions for new document types for which no pre-trained processors are available.
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor overview Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor extracts entities from documents of a particular type.
- For example, determining whether the text in an entity is "Hello, world!" or "HeIIo vvorld!" The benefits of this approach allow for spotting individual entities with low confidence, setting thresholds for which predictions are used, selecting the optimal confidence threshold , and development of new strategies for training models with higher accuracy and confidence scores.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.
- In the Create processor menu, enter a name for your processor, such as my-custom-document-extractor .

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document custom extractor sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Entities to extract from Foundation Model CDE properties = [ documentai .
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Custom Document Extractor The Custom Document Extractor processor can extract custom entities from documents which don't have a pretrained processor available.
- EntityType ( name = "custom extraction document type" , base types = [ "document" ], properties = properties , ) ], ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) for entity in document . entities : print entity ( entity ) Print Nested Entities (if any) for prop in entity . properties : print entity ( prop ) def print entity ( entity : documentai .
- The following parsers do follow it: Extract (Custom Extractor) Legacy Bank statement parser Expense parser Invoice Parser PaySlip parser W2 Parser Code samples The following code samples demonstrate how to send a processing request and then read and print the fields from a specialized processor to the terminal: Java For more information, see the Document AI Java API reference documentation .

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that the checkbox entity shown on the left is either selected or deselected to match what is in the document.
- Dataset metadata, such as processor schema, document assignments (training/test/unassigned), and document labeling status (labeled, unlabeled, auto-labeled) are not exported.
- Add a description prompt When adding labels to the schema in custom extractor and custom classifier, you can add a description for the label.
- If the entity in the document matches the label in the processor schema, the entity is converted to a label instance by the importer.

