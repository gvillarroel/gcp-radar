---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.436Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Connected Sheets quick link"
feature_slug: "connected-sheets-quick-link"
latest_feature_date: "2025-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore"
keywords:
  - "connected"
  - "sheets"
  - "quick"
  - "link"
  - "adds"
  - "option"
  - "explore"
  - "actions"
---

# Connected Sheets quick link

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Adds a Connected Sheets option to Explore actions that opens Google Sheets and starts a connection to the selected Explore.

## Extended Definition

Adds a Connected Sheets option to Explore actions that opens Google Sheets and starts a connection to the selected Explore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)

## Supporting Pages

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This toggle enables the Connected Sheets option in the settings Explore actions gear menu that opens Google Sheets and initiates a connection from Google Sheets to the Looker Explore.
- Enable Connected Sheets quick link When the Google Sheets toggle is enabled, Looker displays an additional toggle, Enable Connected Sheets quick link .
- For Looker (Google Cloud core) instances, the Connected Sheets quick link is supported only for public secure or hybrid network connections.
- See the Connected Sheets quick link documentation page for information on how to enable and configure this feature.

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This quickstart guides you through building a dashboard with the following tiles, including an optional Look-linked tile that you can add to your dashboard if you've completed the Build a Look with sample data quickstart: Top Weekly Spenders : Identify the top spenders for the past four weeks to target them with personalized promotions.
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- Yearly Sales Goal Tracking (2024) : Visualize your year-to-date sales and compare them to a set goal by using table calculations to visualize a running total and by adding a reference line. (Optional) Weekly Shipping Trends (Last 8 Weeks) : If you've completed the Build a Look with sample data quickstart, you can also add your shipping delay analysis Look to this dashboard.
- In the Explore field picker, select the following fields: Order Items > Created At Week Order Items > Sales (Validated) To filter the data to show only 2024 sales, follow these steps: Click the Filters section of the Explore to show the filter options, and then click + Filter .

### Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling the APIs to support Google Sheets uploads To support uploading data from Google Sheets, the following APIs must be enabled in the Google Cloud console by an IAM user with the IAM roles/serviceusage.serviceUsageAdmin permission: This API must be enabled in the Google Cloud project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page: BigQuery API: Required for all BigQuery operations These APIs must be enabled in the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection , which may or may not be the same as the Google Cloud project that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page): BigQuery API: Required for all BigQuery operations Google Sheets API: Required for retrieving the names of each sheet in a Google Sheets document Google Drive API: Required for BigQuery to read files from Drive Perform the following steps to enable the APIs: From the Google Cloud console Open project picker , select the project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page.
- The Data uploads table shows the following information about the data uploads on your instance: The name of the self-service Explore, which is also a hyperlink that opens the self-service Explore The owner of the data upload The date that the data was uploaded A Delete button that allows Looker admins to delete the file upload and its associated self-service Explore Looker admins can open any self-service Explore on the instance by using the links in the Data uploads table.
- Enabling self-service Explores Important: To support the Self-service Explore feature, upon upgrade to Looker 25.20, your Looker instance adds the upload data permission to any role or permission set that contains the explore permission, including custom permission sets.
- Enabling OAuth for Google Sheets uploads After you have enabled self-service Explores and enabled the APIs to support Google Sheets uploads , you can also enable your users to use Google Drive navigation to select Google Sheets documents for data uploads .

