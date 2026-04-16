---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.521Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Merge Query Dashboard Element Listen on Source Query"
feature_slug: "merge-query-dashboard-element-listen-on-source-query"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/api-performance"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
keywords:
  - "merge"
  - "query"
  - "dashboard"
  - "element"
  - "listen"
  - "source"
  - "property"
  - "can"
---

# Merge Query Dashboard Element Listen on Source Query

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The listen property for a merge query dashboard element can now be defined directly on the source query and extended as needed.

## Extended Definition

The listen property for a merge query dashboard element can now be defined directly on the source query and extended as needed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)

## Supporting Pages

### API performance tips \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- Source ID: `site-docs-reference-required-6`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- The request uses the fields parameter to specify which fields to return. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) The partial response looks like this: 200 OK { "kind": "demo", "items": [{ "title": "First title", "characteristics": { "length": "short" } }, { "title": "Second title", "characteristics": { "length": "long" } }, ... ] } Note: For APIs that support query parameters for data pagination ( maxResults and nextPageToken , for example), use those parameters to reduce the results of each query to a manageable size.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-docs-reference-required-6`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The preceding example shows how the BigQuery Data Transfer Service looks at the updated timestamp property of the source file to determine if any changes were made to the source files, and to transfer those changes if any were detected.
- Warning: BigQuery Data Transfer Service relies on the "last modified time" property in each source file to determine which files to transfer, as seen in the incremental transfer examples.
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.
- IP restrictions If you restrict access to your Azure resources using an Azure Storage firewall, you must add the IP ranges used by BigQuery Data Transfer Service workers to your list of allowed IPs.

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-docs-reference-required-6`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The preceding example shows how the BigQuery Data Transfer Service looks at the updated timestamp property of the source file to determine if any changes were made to the source files, and to transfer those changes if any were detected.
- Warning: BigQuery Data Transfer Service relies on the "last modified time" property in each source file to determine which files to transfer, as seen in the incremental transfer examples.
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.
- As this is the first transfer run for this configuration, BigQuery Data Transfer Service attempts to load all files matching the source URI into the destination BigQuery table.

