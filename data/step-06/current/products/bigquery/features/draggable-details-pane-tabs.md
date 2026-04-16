---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.443Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Draggable details pane tabs"
feature_slug: "draggable-details-pane-tabs"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles"
keywords:
  - "draggable"
  - "details"
  - "pane"
  - "tabs"
  - "bigquery"
  - "console"
  - "lets"
  - "users"
---

# Draggable details pane tabs

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery console lets users drag details pane tabs into new columns or positions for side-by-side comparison and rearrangement.

## Extended Definition

The BigQuery console lets users drag details pane tabs into new columns or positions for side-by-side comparison and rearrangement.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Query , and then click In new tab or In split tab : Click the field name that you want to query: The following image shows the details pane with two open tabs.
- Work with tabs in Studio Whenever you select a resource or click add box SQL query in the details pane, a new tab opens.
- If you accidentally replace the current page, you can locate it by clicking tab recent Recent tabs in the details pane.
- The Explorer pane lists different code assets and data resources, and it lets you search for BigQuery resources.

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.
- In the body of the request, specify updated values for the following fields: displayName description primaryContact documentation icon categories[] discoveryType logLinkedDatasetQueryUserEmail bigqueryDataset.replicaLocations For details on these fields, see Resource: Listing .
- Create a non-authenticated URL for public listing To create a non-authenticated BigQuery sharing listing URL that is viewable to even non-Google Cloud users, do the following: Go to the Sharing (Analytics Hub) page.
- Even though you can allow Google Cloud users ( allAuthenticatedUsers ) to subscribe to your listings, the listing will remain private and won't show as a public listing on the BigQuery sharing page .

### Configure BigQuery sharing roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Analytics Hub Subscriber and Viewer roles To view and subscribe to listings and data exchanges , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Subscriber role ( roles/analyticshub.subscriber ), which lets users view and subscribe to listings.
- Analytics Hub Publisher and Listing Admin roles To manage listings , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets users do the following: Create, update, and delete listings.
- Analytics Hub Subscription Owner role To manage subscriptions , Sharing provides the following predefined role that you can grant at the project level: Analytics Hub Subscription Owner role ( roles/analyticshub.subscriptionOwner ), which lets users manage their subscriptions.
- Analytics Hub Listing Admin role ( roles/analyticshub.listingAdmin ), which lets users do the following: Update and delete listings.

