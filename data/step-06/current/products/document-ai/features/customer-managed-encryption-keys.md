---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.032Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Customer-Managed Encryption Keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2021-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/cmek"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "document"
  - "ai"
  - "now"
  - "supports"
---

# Customer-Managed Encryption Keys

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI now supports customer-managed encryption keys.

## Extended Definition

Document AI now supports customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/cmek](https://docs.cloud.google.com/document-ai/docs/cmek)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/cmek](https://docs.cloud.google.com/document-ai/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 334
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Document AI Guides Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Document AI.
- Instead of Google managing the encryption keys that protect your data, your Document AI processor is protected using a key that you control and manage in Cloud Key Management Service (KMS) .
- ProcessorVersion All Evaluation All CMEK supported APIs The APIs that use the CMEK key for encryption include the following: Method Encryption processDocument N/A - no data saved to disk. batchProcessDocuments Data is temporarily stored on disk and encrypted using an ephemeral key (see CMEK compliance ). trainProcessorVersion Documents used for training are encrypted using the provided KMS/CMEK key. evaluateProcessorVersion Evaluations are encrypted using the provided KMS/CMEK key.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- You also have the option to use Google-managed or Customer-managed encryption keys (CMEK) .
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Use generative AI to auto-label documents The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- If you used an existing Google Cloud project, delete the resources you created to avoid incurring charges to your account: In the Google Cloud console navigation menu, select Document AI and select My Processors .

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use your own storage in order to use Customer-Managed Encryption Keys (CMEK), select I'll specify my own storage location and follow the later procedure.
- Assign annotated document to the training set Now that you have labeled this example document, you can assign it to the training set.
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .
- Enable the APIs Required roles To get the permissions that you need to create a custom splitter, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Select I'll specify my own storage location if you want to use your own storage to use Customer-Managed Encryption Keys (CMEK), and follow the procedure in Create a dataset .
- Assign annotated document to the training set Now that you have labeled this example document, you can assign it to the training set.
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.

