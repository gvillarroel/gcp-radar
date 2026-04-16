---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.704Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Image generation"
feature_slug: "image-generation"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data"
keywords:
  - "image"
  - "generation"
  - "users"
  - "can"
  - "create"
  - "images"
  - "from"
  - "the"
---

# Image generation

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Users can create images from the chat box.

## Extended Definition

Users can create images from the chat box.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- [https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page](https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)

## Supporting Pages

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- NotebookLM Enterprise Gemini Enterprise Primary Goal Centralized knowledge, content generation from your own documents Enterprise-wide data search, multi-modal content generation, and agent orchestration Input Your uploaded documents, websites, and specific sources Broad queries and data from across enterprise systems (Google and third-party SaaS) Output Synthesized insights, generated content (FAQs, timelines), interactive audio podcasts, and chat-based questions and answers confined to sources Answers from diverse data, text and multi-modal content from across your enterprise, and automated actions by agents User Individual knowledge workers, small teams, content creators Process owners, developers, IT, operations, business analysts, general knowledge seekers, and content creators Complexity Focused knowledge management and document-specific chat experiences Orchestrating multi-agent systems for business processes and general AI assistance Core Function Understanding and extracting from unstructured text, generating content based on your sources Comprehensive information retrieval, multi-modal content creation, and autonomous agent execution How NotebookLM Enterprise and Gemini Enterprise work together NotebookLM Enterprise and Gemini Enterprise are complementary products , enhancing each other's value.
- Users can then add these newly-discovered sources directly into a NotebookLM Enterprise notebook, further enriching their curated knowledge bases.
- Content synthesis : NotebookLM Enterprise can quickly synthesize insights, summarize, and draft new content from your uploaded documents.
- Focus : You can create, centralize, and leverage knowledge from specific, sources that you provide.

### Configure the app home page \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page](https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Configure details such as title, description, images, links, and scheduling so that the announcement reaches users at the right time.
- Create and manage shortcuts Shortcuts in the app provide users with quick access to commonly accessed links, such as internal document sites, knowledge bases, or frequently used tools.
- Note : The Image URL must be accessible to all users within the organization.
- End users can see only these configured items.

### "Configure results for the UI \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Provides buttons thumb up and thumb down so that users can rate the quality of the search results.
- Click the Thumbnail box and select a field to map to the thumbnail images in your search results.
- This page describes how to configure results for the web app UI, which is the interface that your users use to access your app.
- This feature provides a paragraph of information (the answer) synthesized from the top results of website or unstructured data.

### "Connect to data from AlloyDB for PostgreSQL (Preview) \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Enterprise is designed to only read data from your database and not change anything, but Google can't fully exclude the possibility that the AI might generate unintended write-queries.
- All users with access to your Gemini Enterprise app can see the same data.
- Users in Gemini Enterprise can only see data they are supposed to see.
- For example: CREATE ROLE USER NAME WITH LOGIN PASSWORD ' PASSWORD ' ; GRANT SELECT ON TABLE "public" . " TABLE NAME 1 " TO USER NAME ; GRANT SELECT ON TABLE "public" . " TABLE NAME 2 " TO USER NAME ; When linking Gemini Enterprise with AlloyDB, provide the username and password in the User and Password fields of alloydbConnectionConfig .

