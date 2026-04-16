---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.696Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Outer joins in Search"
feature_slug: "outer-joins-in-search"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
keywords:
  - "outer"
  - "joins"
  - "search"
  - "now"
  - "supports"
  - "left"
  - "right"
  - "preserve"
---

# Outer joins in Search

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Search now supports left and right outer joins that preserve unmatched records.

## Extended Definition

Search now supports left and right outer joins that preserve unmatched records.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Retrieve a saved search To retrieve and run a saved search, do the following: In the Search manager dialog, select a saved search from the list to the left.
- View alerts in search To view alerts, click the Alerts tab, located next to the Events tab, at the top right of the Search page.
- View aggregated results For statistics-based searches, Google SecOps supports large aggregated result sets.
- Search large result sets Google SecOps supports returning and navigating up to 1 million results.

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Sample Request https://backstory.googleapis.com/v1/events:udmSearch?query=metadata.event type+%3D+%22NETWORK CONNECTION%22+and+principal.hostname%3D%22jdx%22&time range.start time=2022-08-04T00%3A00%3A00Z&time range.end time=2022-08-04T01%3A00%3A00Z&limit=100 Sample Response { "events": [ { "name": "00000000c5fd1146ce52d833659247f68b82009d000000000500000000000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.783486Z", "id": "AAAAAMX9EUbOUtgzZZJH9ouCAJ0AAAAABQAAAAAAAAA=" }, "principal": { "ip": [ "10.9.8.7" ], }, "target": { "ip": [ "74.125.197.190" ], "port": 443 } } }, { "name": "000000000f8e8dc25f873448a3b51ed3e81af0d900000000050000001c000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.071428Z", "id": "AAAAAA+OjcJfhzRIo7Ue0+ga8NkAAAAABQAAABwAAAA=" }, "principal": { "ip": [ "10.9.8.7" ] }, "target": { "ip": [ "74.125.135.103" ], "port": 443 } } } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Request GET https://backstory.googleapis.com/v1/events:udmSearch?query=<query>&time range.start time=<start time>&time range.end time=<end time>&limit=<limit> Parameters Parameter Name Type Description query string UDM search query. time range.start time ISO 8601 format Inclusive start time. time range.end time ISO 8601 format Exclusive end time. limit integer (Optional) The maximum number of matched events to return.
- The following query submission rate limits are enforced, measured in queries per second (QPS) or queries per hour (QPH): API API Method Limit Search List Alerts 1 QPS ListEvents 1 QPS ListIocs 1 QPS ListIocDetails 1 QPS ListAssets 5 QPS ListAssetAliases 1 QPS ListUserAliases 1 QPS udmSearch 360 QPH GetLog 60 QPS GetEvent 60 QPS See the detailed list of the Backstory API query limits .
- Search This document explains how you can use the Backstory Search API to programmatically access your security data directly through API calls to the Google Security Operations platform, which stores and processes that data.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Troubleshoot failed feeds On the Feeds page, you can view details such as source type, log type, feed ID, and status of the existing feeds, as follows: Hold the pointer over an existing feed and click more vert in the right column.
- The Feeds page provides several tools to help you navigate and organize your list of configured feeds: Search: Use the search bar to find a feed by its Feed Name , Feed ID , or Source type .
- Edit existing feeds On the Feeds page, you can edit an existing feed, as follows: Hold the pointer over an existing feed and click more vert in the right column.

