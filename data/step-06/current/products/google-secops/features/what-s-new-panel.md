---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.805Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "What's New panel"
feature_slug: "what-s-new-panel"
latest_feature_date: "2025-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "what"
  - "panel"
  - "menu"
  - "shows"
  - "top"
  - "five"
  - "secops"
  - "features"
---

# What's New panel

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The What's New menu shows the top five new Google SecOps features.

## Extended Definition

The What's New menu shows the top five new Google SecOps features.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to enter a query to match the common UDM fields that might contain the specified IP address: ip = "1.2.3.4" You can match a grouped field using a regular expression and using the nocase operator.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- For example: Optimized results view Timelines chart Aggregations window Optimized results view To maximize the space available for viewing search results, Google SecOps provides an event-focused view.
- Definition of events and alerts An event is generated from a raw log source that is ingested into Google SecOps and processed by Google SecOps's ingestion and normalization process.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- To add a feed to your Google SecOps account, complete the following steps: In the Google SecOps menu, select SIEM Settings > Feeds .
- Create an Amazon Data Firehose feed In the Google SecOps menu, select Settings , and then click Feeds .
- Create a Pub/Sub push feed In the Google SecOps menu, select Settings , and then click Feeds .

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Impact of data RBAC on Google SecOps features Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that restricts user access to data based on individual user roles within an organization.
- Entity details across Google SecOps The following fields, which describe an asset or a user, appear on multiple pages in Google SecOps, such as the Entity Context panel in UDM Search.
- As part of the curated detections, GCTI provides and manages a set of YARA-L rules to help you identify common security threats within your Google SecOps environment.
- Access control : While feature RBAC determines who can create or edit a dashboard, data RBAC determines what specific data is visible within the charts and tables.

