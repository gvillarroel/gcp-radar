---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.856Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Private Service Connect support for Firestore API endpoints"
feature_slug: "private-service-connect-support-for-firestore-api-endpoints"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/reference/mcp"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/datastore/docs/apis"
keywords:
  - "private"
  - "connect"
  - "firestore"
  - "endpoints"
  - "supports"
  - "regional"
  - "backends"
  - "multi"
---

# Private Service Connect support for Firestore API endpoints

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports using Private Service Connect regional endpoints and backends to connect to its regional and multi-regional API endpoints.

## Extended Definition

Firestore supports using Private Service Connect regional endpoints and backends to connect to its regional and multi-regional API endpoints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/reference/mcp](https://docs.cloud.google.com/firestore/docs/reference/mcp)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/datastore/docs/apis](https://docs.cloud.google.com/datastore/docs/apis)

## Supporting Pages

### APIs & Reference \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/apis](https://docs.cloud.google.com/datastore/docs/apis)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datastore mode client libraries Datastore mode Client Libraries Get started with Firestore in Datastore mode in your language of choice.

### "MCP Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/reference/mcp](https://docs.cloud.google.com/firestore/docs/reference/mcp)
- Source ID: `site-api-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Server Endpoints An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection.
- Google MCP endpoints can be global or regional.
- The firestore.googleapis.com MCP server has the following tools: MCP Tools get document Get a document from a Firestore database. add document Create a document from a Firestore database. update document Update a document from a Firestore database. delete document Delete a document from a Firestore database. list documents List documents from a Firestore database. list collections List all the collection IDs underneath a document. create database Create a Firestore database. get database Get a Firestore database. list databases List Firestore databases. update database Update a Firestore database. delete database Delete a Firestore database. create index Create a composite index. get index Get a Firestore index. list indexes List Firestore indexes. delete index Delete a Firestore index.
- Curl Request curl --location 'https://firestore.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/list", "jsonrpc": "2.0", "id": 1 }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class FirestoreAdminClient (2.23.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample create backup schedule(): Create a client client = firestore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample delete backup schedule(): Create a client client = firestore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample update backup schedule(): Create a client client = firestore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample bulk delete documents(): Create a client client = firestore admin v1.

