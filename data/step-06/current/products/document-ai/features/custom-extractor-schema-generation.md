---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.892Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom extractor schema generation"
feature_slug: "custom-extractor-schema-generation"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-schema-extraction"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
keywords:
  - "custom"
  - "extractor"
  - "schema"
  - "generation"
  - "you"
  - "can"
  - "automatically"
  - "generate"
---

# Custom extractor schema generation

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

You can automatically generate a document schema from a test document and then approve, edit, or decline it.

## Extended Definition

You can automatically generate a document schema from a test document and then approve, edit, or decline it.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-schema-extraction](https://docs.cloud.google.com/document-ai/docs/ce-schema-extraction)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)

## Supporting Pages

### Automated schema generation \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-schema-extraction](https://docs.cloud.google.com/document-ai/docs/ce-schema-extraction)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Document AI's automated schema generation lets you automatically generate a document's schema from a test document you supply.
- Optional: If the resulting schema doesn't serve your needs, or requires more than manual editing, you can enter a prompt in Generate a schema prompt to provide additional input and direction for the generator.
- Tip: You can use the View More more vert option by each field to edit the auto-generated schema after applying it.
- Home Documentation AI and ML Document AI Guides Send feedback Automated schema generation Stay organized with collections Save and categorize content based on your preferences.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor with property descriptions With property descriptions, you can train a model by describing what the labeled fields are like.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Send a processing request with property descriptions If the document schema already has descriptions set, you can send a process request with the instructions at Send a processing request .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- In the currency code example, you can create a field with the name currency code and provide the following description: "Find the ISO 4217 currency code of the amount values in the document, using contextual signals present in the document, like currency symbols and addresses." Limitations Derived fields are generated on a per-page basis.
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Extract versus derived overview When you define an entity in your processor schema, you can choose a method for how its value is populated.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- Name Data Type Occurrence control number Number Optional multiple employees social security number Number Required multiple employer identification number Number Required multiple employers name address and zip code Address Required multiple federal income tax withheld Money Required multiple social security tax withheld Money Required multiple social security wages Money Required multiple wages tips other compensation Money Required multiple You can also create and use other types of labels in your processor schema, such as checkboxes and tabular entities .
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .

