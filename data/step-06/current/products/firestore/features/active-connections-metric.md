---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.906Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Active Connections metric"
feature_slug: "active-connections-metric"
latest_feature_date: "2019-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/monitor-usage"
  - "https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
keywords:
  - "active"
  - "connections"
  - "metric"
  - "firestore"
  - "added"
  - "stackdriver"
  - "monitoring"
---

# Active Connections metric

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore added the Active Connections metric to Stackdriver Monitoring.

## Extended Definition

Cloud Firestore added the Active Connections metric to Stackdriver Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- [https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp](https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### Monitor usage \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Monitoring includes the following Firestore metrics: Metric Name Description Document Reads The number of successful document reads.
- Realtime updates usage Use the active connections and snapshot listeners metrics to measure your usage of realtime updates .
- Aggregated usage dashboard If your project has multiple Firestore databases, you can view aggregated usage metrics in the Google Cloud console or Firebase console.
- Additional metrics, such as latency measurements, index entry reads, and system-level metrics, are also available through Cloud Monitoring.

### "Use the Firestore remote MCP server \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp](https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following metrics are available for the firestore.googleapis.com/Database monitored resource: mcp/request count (Beta): The count of Firestore MCP calls. mcp/request latencies (Beta): The distribution of latencies for Firestore MCP calls.
- Monitor MCP usage You can monitor the usage and latency of your Firestore MCP tools through Cloud Monitoring .
- For more information about Firestore metrics, see Firestore metrics .
- POST /mcp HTTP/1.1 Host: firestore.googleapis.com Content-Type: application/json { "jsonrpc": "2.0", "method": "tools/list", } Sample use cases The following are sample use cases and prompts for the Firestore MCP server: "What tools are available for the Firestore MCP server?" "Add a document with collection "book" under my Firestore database "my-database" with the Google Cloud project "my-project" with generated book info." "Get the information for the book with ID 3VyGFIAPRHUNeuH5h2eb from the book collection." "Update the year field of document 3VyGFIAPRHUNeuH5h2eb to 1995." "List all books under the book collection." "List all collections IDs under the root of the "my-database" Firestore database." "Delete the document 3VyGFIAPRHUNeuH5h2eb under the book collection." Optional security and safety configurations MCP introduces new security risks and considerations due to the wide variety of actions that can be taken with MCP tools.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- An alert reports the success or failure of your managed import request. gcloud Use the gcloud firestore import command to import all entities that were previously exported with the managed export service. gcloud firestore import gs:// bucket-name/file-path/file-name .overall export metadata \ --async \ --database= DATABASE where bucket-name/file-path/file-name is the path to your overall export metadata file within your Cloud Storage bucket.
- An alert reports the success or failure of your managed import request. gcloud gcloud firestore import --collection-ids=" KIND1,KIND2 " \ --namespaces=" (default),NAMESPACE2 " \ gs:// bucket-name/file-path/file-name overall export metadata \ --async \ --database= DATABASE where bucket-name/file-path/file-name is the path to your overall export metadata file within your Cloud Storage bucket.
- An alert reports the success or failure of your managed export request. gcloud Use the gcloud firestore export command to export all entities in your database. gcloud firestore export gs:// bucket-name --async --database= DATABASE where bucket-name is the name of your Cloud Storage bucket and an optional prefix, for example, bucket-name /datastore-exports/export-name .
- An alert reports the success or failure of your managed export request. gcloud gcloud firestore export --collection-ids=" KIND1,KIND2 " \ --namespaces=" (default),NAMESPACE2" \ gs:// bucket-name \ --async \ --database= DATABASE where bucket-name is the name of your Cloud Storage bucket and an optional prefix, for example, bucket-name /datastore-exports/export-name .

