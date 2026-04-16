---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.662Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Assistant chat retention period"
feature_slug: "assistant-chat-retention-period"
latest_feature_date: "2026-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings"
keywords:
  - "assistant"
  - "chat"
  - "retention"
  - "period"
  - "administrators"
  - "can"
  - "configure"
  - "how"
---

# Assistant chat retention period

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure how long assistant chat history is retained.

## Extended Definition

Administrators can configure how long assistant chat history is retained.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings](https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings)

## Supporting Pages

### Configure the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Chat history retention period section, select a retention period for assistant chat sessions.
- Chat sessions older than the selected retention period are automatically deleted.
- This page describes how to configure the assistant's behavior.
- Home Documentation AI and ML Gemini Enterprise Send feedback Configure the assistant Stay organized with collections Save and categorize content based on your preferences.

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- File formats and size limitations The following table lists the file formats and size limitations for files that you can upload to the assistant: File type Description Images Maximum image size: 30 MB Supported file extensions: .png , .jpeg , .svg Documents Maximum document size: .pdf : 100 MB .xlsx : 50 MB The .xlsx limit applies to the size of the file after it's decompressed. .csv : 7 MB .docx : 3 MB .pptx : 100 MB .txt : 7 MB .md : 2 MB .json : 1 MB .js : 1 MB .html : 0.5 MB .css : 1 MB .java : 1 MB .py : 2 MB Supported file extensions: .pdf , .xlsx , .csv , .docx , .pptx , .txt , .md , .json , .js , .html , .css , .java , .py Video Maximum document size: 200 MB Supported file extensions: .mp4 Audio Maximum document size: 200 MB Supported file extensions: .mp3 Add context with mentions You can mention an agent, person, or uploaded file in your chat with the assistant by typing @ in the chat box.
- Chat with files in connectors Gemini Enterprise can analyze content and generate answers from the following connectors: Note: A Gemini Enterprise admin must enable the required actions for the Gemini Enterprise assistant to access the content, allowing you to chat with the files.
- Chat with the assistant When you ask a question, the assistant provides a summary based on the information it can find.
- Upload and chat about files The assistant can analyze files that you upload, such as PDFs, images, and videos.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Workforce Identity Federation for third-party identity providers This section describes how to configure Workforce Identity Federation for third-party identity providers.
- If you connect to your own custom data source, learn how you can set up external identities .
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).
- Configure Workforce Identity Federation For details on configuring Workforce Identity Federation with your third-party identity connector, see the following resources: Identity provider Resources Entra ID Note: When using data ingestion to connect to Microsoft data sources like SharePoint, OneDrive, or Outlook, you must use Microsoft Entra ID groups to control document access.

### Configure field settings \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings](https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search Limitations Field settings have the following limitations: You can configure up to 50 fields as indexable, searchable, retrievable, or dynamic facetable.
- You can use the Schema tab in the Google Cloud console to configure field settings for structured data and unstructured data with metadata.
- This page shows you how to configure the fields to set up an app for structured data or for unstructured data with metadata.
- What's next Update a schema for structured data Configure results for the UI Preview search results Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

