---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.492Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker Trash folder for reports"
feature_slug: "studio-in-looker-trash-folder-for-reports"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/studio"
keywords:
  - "studio"
  - "looker"
  - "trash"
  - "folder"
  - "reports"
  - "deleted"
  - "stored"
  - "can"
---

# Studio in Looker Trash folder for reports

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Deleted reports are stored in the Looker Trash folder and can be restored by admins.

## Extended Definition

Deleted reports are stored in the Looker Trash folder and can be restored by admins.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/studio](https://docs.cloud.google.com/looker/docs/studio)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Looker Studio users with this permission can view Looker data on Looker Studio reports that use the Looker connector. see lookml dashboards access data Model Specific Users can see the LookML Dashboards folder, which includes all LookML dashboards.
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Looker Studio Pro users with this permission can schedule deliveries of Looker Studio reports that use the Looker connector. schedule external look emails schedule look emails Model Specific Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to email.
- Looker Studio Pro users with this permission can download Looker Studio reports that use the Looker connector. download without limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.

### Welcome to Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio](https://docs.cloud.google.com/looker/docs/studio)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Visualize your data Data Studio is a no-cost tool that turns your data into informative, easy to read, easy to share, and fully customizable dashboards and reports.
- Looker Studio is now called Data Studio.
- Get started Try Data Studio now Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use Data Studio in your organization Data Studio's enterprise features let Cloud Identity and Google Workspace administrators manage users and control access to Data Studio assets.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- If the number of complimentary Pro licenses that are allocated to your account becomes less than the number of licenses that are in use, the difference will be converted within 24 hours to paid licenses, subject to Looker Studio Pro pricing .
- Historical usage information for the user Kept Most are deleted Disabling users To prevent a user account's or a service account's access to Looker, it is typically best practice to disable the account.
- Deleting users from a Looker account that is associated with a Looker Studio Pro subscription reduces the number of complimentary Looker Studio Pro licenses that are allocated to the account.

