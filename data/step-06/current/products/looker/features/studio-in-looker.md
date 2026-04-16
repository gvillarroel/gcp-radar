---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.505Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker"
feature_slug: "studio-in-looker"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
keywords:
  - "studio"
  - "looker"
  - "lets"
  - "users"
  - "create"
  - "view"
  - "edit"
  - "share"
---

# Studio in Looker

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Studio in Looker lets users create, view, edit, share, and manage Looker Studio reports inside Looker.

## Extended Definition

Studio in Looker lets users create, view, edit, share, and manage Looker Studio reports inside Looker.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)

## Supporting Pages

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- To enable a user to manage their API keys, in the API Keys section of the Admin > Users > Edit User page, use the API Keys field to enable or disable the ability for the user to create, view, and delete API keys for their user account.
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- Viewing and searching users The Users page shows the following information: Tabs group your users by type: The Standard Users tab shows users who sign in to Looker directly, through either the regular authentication process or through the Looker API.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- This Labs feature enables the Looker reports feature , which lets you create, view, and edit Looker Studio reports in your Looker instance, including both governed and ad hoc data.
- The Enhanced Content Cleanup preview feature provides the following capabilities: Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
- When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.
- When enabled, the New Looker Explore and Merge Query Experience feature lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces.

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Data Studio Guides Send feedback Connect to Google BigQuery Stay organized with collections Save and categorize content based on your preferences. description: Learn how to connect Data Studio to BigQuery to access and visualize data from BigQuery tables, views, or custom SQL queries.
- To enable the BigQuery Storage Read API, grant the following permissions to your BigQuery user who is connected to Data Studio: bigquery.readsessions.create bigquery.readsessions.getData Quotas and general limits The maximum number of rows that can be returned using the BigQuery Connector is 2 million rows.
- To select an existing reusable data source, click the My data sources tab, and then select a data source of any type that you've created previously or that has been shared with you.
- Support for VPC Service Controls Data Studio can connect to BigQuery projects that are protected by VPC Service Controls (VPC-SC) perimeters through viewer IP-based access levels .

