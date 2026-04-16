---
title: "Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features
  title: "Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Admin settings - Preview Features
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
The Preview Features page in the General section of the Admin panel lets you enable and disable
features that are in preview.
Preview features overview
Preview features are new, in-progress features whose details can change over
time.
You can choose to use these features or leave them disabled. The Preview Features page lists each feature with a short description underneath it
explaining the functionality that it adds to or changes in Looker.
Preview features are split into two categories:
Preview features : Preview features have a planned path to general availability, and we expect to resolve feature issues. However, these features may change in detail, and errors may not be fixed with the same speed as with general availability features. You can see the list of current preview features in the Current preview features section on this page.
Labs features : Labs features may be removed from the product at any time, without extended notice. Feature issues may or may not be resolved. These experimental features are intended to show you functionality that could be incorporated into Looker in the future and to get your feedback. Labs features are available only in Looker (original). You can see the list of current experimental Labs features in the Labs features (Looker (original) only) section on this page.
Note: These features are Preview offerings, subject to the "Pre-GA Offerings
Terms" of the Google Cloud Service Specific
Terms . Pre-GA products and
features may have limited support, and changes to pre-GA products and features
may not be compatible with other pre-GA versions. For more information, see the
launch stage
descriptions . For these features, you can process personal data as outlined in the Cloud Data Processing
Addendum , subject to
applicable restrictions and obligations in the Agreement (as defined in the
Pre-GA Offerings Terms).
Enabling and disabling preview features
To enable or disable a feature, click the switch next to the feature name.
Caution: Use caution when disabling a preview feature. If users or developers have relied on the feature to create a certain behavior, disabling the feature breaks that functionality.
Current preview features
Looker supports the following preview features.
Enhanced Search
This preview feature is disabled by default.
When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.
Dashboard Tile Limits
This feature is disabled by default.
This feature allows admins to set limits on tiles per dashboard and per tab to optimize performance, which is configured on the Content Guardrails page in the Performance Center section of the Admin panel.
Enhanced Content Cleanup
This preview feature is disabled by default.
When enabled, the Enhanced Content Cleanup preview feature lets admins and content owners access an enhanced content management experience in Looker. The Enhanced Content Cleanup preview feature provides the following capabilities:
Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
Lets admins programmatically schedule content cleanups for individual content or in bulk, and send automatic notifications to content owners.
Lets content owners opt out of automated scheduled cleanups for specific content.
Lets admins and users move content to the trash.
Learn more about managing unused content with the Enhanced Content Cleanup preview feature .
Dataplex Lineage
This preview feature is disabled by default.
Share Looker (Google Cloud core) metadata with Knowledge Catalog to power data lineage. To use lineage, ensure that the following are also enabled:
the Knowledge Catalog integration for Looker
the Data Lineage API
the service-level lineage integration in your Knowledge Catalog settings.
This feature is available only for Looker (Google Cloud core) instances.
Granular Dashboard Sizing
Note: This feature is temporarily unavailable for some Looker instances.
This preview feature is enabled by default.
When this preview feature is enabled, dashboard editors can change the size and layout of dashboard tiles with more granularity. If the preview feature is disabled, any dashboard tiles that were resized during its enablement will revert to Looker's original sizing constraints.
Increased Row Limit
This preview feature is disabled by default.
When enabled,the Increased Row Limit preview feature lets admins set row limits up to 50,000 rows or datapoints for map charts , scatterplot charts , and table charts . Admins can set the limits for each visualization type in the Visualization limits setting on the Content guardrails admin page.
Increase SQL Runner Schema and Table Limit
This preview feature is disabled by default.
When this preview feature is enabled, the total number of schemas that can be returned to SQL Runner increases to 12,000.
Warning: Enabling this preview feature will increase the table name display response time if your instance has access to a large number of schemas and tables.
Internal Dashboard Theming
This preview feature is enabled by default.
When this setting is enabled, users can apply
themes to their Looker
dashboards. These themes, which are distinct from the themes that are used for
embedded dashboards, Explores, and
Looks , can be managed by users who have the
manage_internal_themes permission.
New Looker Explore and Merge Query Experience
This preview feature is disabled by default.
When enabled, the New Looker Explore and Merge Query Experience feature lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces. The streamlined interfaces let Looker users find connections and gain insights from their data more quickly. For an AI-assisted experience, enable additional options on the Gemini in Looker page in the Platform section of the Admin panel.
Learn more about the new Explore and Merge Query experience .
Table Visualization Improvements
This preview feature is disabled by default.
When this preview feature is enabled, you can use the following features for table visualizations :
Pagination
Show/Hide Table Headers
Table Borders
Cell Highlighting
Conditional formatting for string fields
Note: When Cell Highlighting is enabled, conditional formatting is not available.
Tile Download Default Options
This preview feature is disabled by default.
When this preview feature is enabled, dashboard editors can set default row and column limits for dashboard tile downloads. Dashboard viewers can choose to edit these values when downloading the tile.
Labs features (Looker (original) only)
The following features are available only on Looker (original) instances.
These features aren't fully developed and may be significantly changed or completely removed in future releases. Don't use them for production workloads.
BI Engine Symmetric Aggregates
This Labs feature is disabled by default.
When the BI Engine Symmetric Aggregates feature is enabled, for queries that
use symmetric
aggregates ,
Looker generates experimental SQL patterns that execute faster on the
BigQuery BI Engine. This feature has no effect on query results, only on
execution performance.
Guided analyses in System Activity
This Labs feature is disabled by default.
When enabled, the
History
System Activity Explore displays guided
analysis
options to provide a question-and-answer format for performing analyses.
In-database merge queries
This Labs feature is disabled by default.
This feature improves performance and allows for unlimited rows of data being joined for merged queries when both queries being merged use the same BigQuery connection. By default, merged queries are processed in Looker memory, and therefore each query is limited to 5,000 rows that can be joined. When the In-database merge queries feature is enabled and both queries are from the same BigQuery connection, the join of the queries is run in the BigQuery database itself. See the Merging results from different Explores documentation page for more information.
New Explore & Look Saving
This Labs feature is enabled by default.
This feature improves the visibility and navigation of Save dialogs on the
Explore and Look pages. The new experience allows quick navigation of folders,
and users can choose to sort existing content by Name, Created Date, or Last
Update. It does not change any functionality of these pages.
Redux DevTools
This Labs feature is disabled by default.
This feature enables Redux DevTools for debugging application state.
Rigorous Dashboard Download Permission Checking
This Labs feature is disabled by default.
When this feature is enabled, users can download a dashboard only if they have
the
download_with_limit
or
download_without_limit
permission on every model that the dashboard includes.
Access Studio in Looker
Important: Starting on December 4, 2025, new instances or instances that have
not already enabled Looker reports cannot enable
Looker reports.
This Labs feature enables the Looker reports
feature , which lets you create, view,
and edit Looker Studio reports in your
Looker instance, including both governed and ad hoc data. You can
share and manage your reports in
Looker folders and see your recent reports and the reports that you
have marked as favorites from the Looker Home page.
SQL Runner Vis
This Labs feature is disabled by default.
This feature adds the ability to visualize ad hoc queries from SQL Runner.
Tiered Support Access
This Labs feature is enabled by default.
Enabling the Tiered Support Access feature enables enhanced support access,
including updated access duration times and access levels. For more information,
see the Admin settings - Support
Access documentation page.
Disabling this feature enables legacy support
access .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
