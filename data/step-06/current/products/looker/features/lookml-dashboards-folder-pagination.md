---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.431Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "LookML dashboards folder pagination"
feature_slug: "lookml-dashboards-folder-pagination"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
keywords:
  - "lookml"
  - "dashboards"
  - "folder"
  - "pagination"
  - "now"
  - "shows"
  - "30"
  - "per"
---

# LookML dashboards folder pagination

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The LookML dashboards folder now shows 30 dashboards per page.

## Extended Definition

The LookML dashboards folder now shows 30 dashboards per page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)

## Supporting Pages

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- If this user does not have access to see LookML or user-defined dashboards, the user would not see any dashboards that may exist in the folder.
- Folders let you set access levels that determine which users may edit folder contents (such as Looks and dashboards), view the contents in a folder, and change settings: A user needs to have at least the View access level to a folder to see that the folder exists, to view the Looks and dashboards inside it, and to copy the Looks and dashboards in the folder.
- A user who can manage a folder can manipulate the contents of a folder (copying, moving, deleting, and renaming dashboards and Looks), organize the folder itself (renaming, moving, or deleting the folder), and give other users and groups access to the folder.
- A user needs to have the Manage Access, Edit access level for a folder to manage access to the folder and to edit the folder and its content (including renaming folders, moving content, and deleting Looks and dashboards).

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- What's next Creating user-defined dashboards Editing user-defined dashboards Adding and editing user-defined dashboard filters Filtering and limiting data Sharing data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Query and visualize the data Next, you'll select fields from the Intermediate Ecommerce Explore and then define the visualization for the Top Weekly Spenders tile, which shows the top 15 customers by sales in the last 4 weeks.
- To add this Look to the Sales and Customer Insights dashboard, follow these steps: In the Looker main navigation menu, navigate to the folder where you saved your Weekly Shipping Trends (Last 8 Weeks) Look.

### "Quickstart: Build a Look with sample data \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table is an example of the query results that you'll use to build your Look: Created At Week 2024-07-29 2024-07-22 2024-07-15 2024-07-08 2024-07-01 2024-06-24 2024-06-17 2024-06-10 Shipped to Delivered Days of Order Items of Order Items of Order Items of Order Items of Order Items of Order Items of Order Items of Order Items 4 451 242 210 199 163 152 189 177 3 422 260 213 177 213 144 171 165 Before you begin To follow along with this quickstart, you'll need access to a Looker (Google Cloud core) instance that includes the sample LookML project .
- What's next Quickstart: Build a dashboard with sample data Creating and editing Explores Filtering and limiting data Creating user-defined dashboards Sharing data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: If you plan to use this Look in a dashboard, you may also need additional permissions, such as save dashboards and see user dashboards , as described in the Build a dashboard with sample data quickstart.
- Now that you've saved the visualization as a Look, you can access it again for further analysis, share it with others, or incorporate it into dashboards for broader visibility.

