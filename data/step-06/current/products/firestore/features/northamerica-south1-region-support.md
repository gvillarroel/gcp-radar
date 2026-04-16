---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.869Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "northamerica-south1 region support"
feature_slug: "northamerica-south1-region-support"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/reference/rest"
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
  - "https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox"
keywords:
  - "northamerica"
  - "south1"
  - "region"
  - "firestore"
  - "supports"
  - "queretaro"
---

# northamerica-south1 region support

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports the northamerica-south1 Queretaro region.

## Extended Definition

Firestore supports the northamerica-south1 Queretaro region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)

## Supporting Pages

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.

### "Use Firestore with MCP, Gemini CLI, and other agents \_|\_ Firestore in\

- URL: [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-required-4`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To use the tools in the Gemini CLI extension for Firestore, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Read and write data in Firestore database Cloud Datastore User roles/datastore.user View and test security rules Firebase Rules Viewer roles/firebaserules.viewer Set up Firestore Create a new Google Cloud project or select an existing one .
- This page describes how to use the MCP Toolbox for Databases to expose your developer assistance tools to a Firestore instance using the following IDEs: Gemini CLI Gemini Code Assist Cursor Windsurf (Codium) Visual Studio Code (Copilot) Cline (VS Code extension) Claude desktop Claude code About Gemini CLI and extensions Gemini CLI is an open-source AI agent designed to assist with development workflows by assisting with coding, debugging, data exploration, and content creation.
- The FIRESTORE DATABASE variable is optional and defaults to (default) . { "mcpServers": { "firestore": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","firestore","--stdio"], "env": { "FIRESTORE PROJECT": " PROJECT ID ", "FIRESTORE DATABASE": " DATABASE NAME " } } } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Category Tools Example natural language prompt Document and data retrieval get documents Show me the Firestore data for the test users qa user 123 and qa user 456 from the users-staging collection. list collections List all subcollections under the users-staging collection. query collection Find all users in the users-staging collection whose wishlist contains product-glasses.

### Cloud Firestore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://firestore.googleapis.com REST Resource: v1beta2.projects.databases Methods exportDocuments POST /v1beta2/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. importDocuments POST /v1beta2/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://firestore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- REST Resource: v1.projects.databases Methods bulkDeleteDocuments POST /v1/{name=projects/ /databases/ }:bulkDeleteDocuments Bulk deletes a subset of documents from Google Cloud Firestore. clone POST /v1/{parent=projects/ }/databases:clone Creates a new database by cloning an existing one. create POST /v1/{parent=projects/ }/databases Create a database. delete DELETE /v1/{name=projects/ /databases/ } Deletes a database. exportDocuments POST /v1/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. get GET /v1/{name=projects/ /databases/ } Gets information about a database. importDocuments POST /v1/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore. list GET /v1/{parent=projects/ }/databases List all the databases in the project. patch PATCH /v1/{database.name=projects/ /databases/ } Updates a database. restore POST /v1/{parent=projects/ }/databases:restore Creates a new database by restoring from an existing backup.
- REST Resource: v1beta1.projects.databases Methods exportDocuments POST /v1beta1/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. importDocuments POST /v1beta1/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore.

