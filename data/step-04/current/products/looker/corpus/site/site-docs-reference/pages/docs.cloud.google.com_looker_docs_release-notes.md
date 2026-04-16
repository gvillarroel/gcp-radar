---
title: "Looker release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/release-notes
  title: "Looker release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Resources
Send feedback
Looker release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Looker (original) and Looker (Google Cloud core).
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated features for Looker.
You may also be interested in the Data Studio release notes .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 09, 2026
Looker (original) only changes
Announcement
Starting with the Looker 26.8 release, which will release in May 2026, the following changes will occur:
Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
Looker (original) admins will be able to manage which users have access to individually owned API credentials.
Users with access to API credentials will be able to access and manage their own API credentials.
Before your Looker instance is upgraded to the Looker 26.8 release, your admin must follow the steps in the Migrating users to service accounts documentation page. This is to ensure admins can either create or migrate service accounts from existing standard users if they require access to users' API credentials.
For more information, see the Discontinuing the admin capability to create, view, and manage API credentials for a standard user deprecation notice.
April 07, 2026
Feature
The Table Visualization Improvements preview feature is now available and is disabled by default.
When this preview feature is enabled, you can use the following features for table visualizations :
Pagination
Show/Hide Table Headers
Table Borders
Cell Highlighting
Conditional formatting for string fields
Note: When Cell Highlighting is enabled, conditional formatting is not available.
March 30, 2026
Announcement
Starting March 30, 2026, the following features will begin rolling out.
Looker (original) only changes
Feature
For customer-hosted Looker instances, Looker 26.6 supports MySQL 8.4.X for the Looker backend database. For customer-hosted instances that use MySQL 8.0.X for the Looker backend database, it is recommended that you update to MySQL 8.4.X as soon as you update your Looker instance to 26.6 or later. Note: This item was added on April 6, 2026.
Looker (Google Cloud core) only changes
Feature
Available in preview, Looker (Google Cloud core) now integrates with Dataplex Universal Catalog , providing a unified discovery and management experience for your Looker metadata. This allows you to search for Looker assets like LookML models and dashboards directly within Dataplex, giving you a comprehensive view of your data landscape.
Feature
Available in preview for Looker (Google Cloud core), you can now track end-to-end data lineage from BigQuery to Looker content, including views, Explores, dashboards, and Looks, through the Looker and Dataplex lineage integration. This enables impact analysis to see how BigQuery changes affect downstream Looker (Google Cloud core) contents.
Looker (Google Cloud core) and Looker (original) changes
Feature
When connecting Looker to your database, you can specify additional Java Database Connectivity (JDBC) parameters that you want Looker to include when it communicates with your database driver. In order to keep your connection secure, Looker now has an allowlist for the additional JDBC parameters that are supported for each database dialect.
If you try to create or update a connection that uses unsupported JDBC parameters, Looker will display an error message that shows the non-allowed parameters.
If you have an existing connection that uses unsupported JDBC parameters, Looker will remove the parameters and then connect to your database.
For a list of the supported JDBC parameters for your dialect, see the "Supported JDBC parameters" section of the database configuration instructions page for your dialect.
Feature
The Looker mobile application now supports sending alert notifications as push notifications to users who have the Looker mobile application on their mobile device. (This release note was updated on April 9, 2026 to reflect that this update is a feature and to correct a documentation link.)
Feature
Available in preview, you can publish the Conversational Analytics data agents that you create in Looker to Gemini Enterprise.
Feature
Available in preview, you can chat with Conversational Analytics data agents in user-defined dashboards and in LookML dashboards.
Feature
The Enhanced Content Cleanup preview feature is now available. When this feature is enabled for your instance, it lets admins and content owners access an enhanced content management experience in Looker. The Enhanced Content Cleanup preview feature provides the following capabilities:
Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
Lets admins programmatically schedule content cleanups for individual content or in bulk, and send automatic notifications to content owners.
Lets content owners opt out of automated scheduled cleanups for specific content.
Lets admins and users move content to the trash.
This feature is disabled by default. Learn more about managing unused content with Enhanced Content Cleanup .
Feature
Now generally available, Looker has full support for connections with AlloyDB for PostgreSQL . When you create a connection in Looker, you can now select Google Cloud AlloyDB for PostgreSQL from the Dialect drop-down menu. This update doesn't affect existing AlloyDB connections that were created using the PostgreSQL 9.5+ option in the Dialect menu.
Feature
The New Looker Explore and Merge Query Experience preview feature is now available.
When this feature is enabled for your instance, it lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces. The streamlined interfaces let Looker users find connections and gain insights from their data more quickly. For an AI-assisted experience, enable additional options on the Gemini in Looker page in the Platform section of the Admin panel.
This feature is disabled by default.
Learn more about the new Explore and Merge Query experience .
March 26, 2026
Feature
As part of Looker 26.6, Conversational Analytics now offers new modes for asking questions . Fast mode allows you to get answers more quickly. Thinking mode allows you to ask more complex questions and test your agent's capabilities.
Looker (Google Cloud core) and Looker (original) changes
Feature
As part of Looker 26.6, Conversational Analytics will now ask you questions to clarify any ambiguities in your original query.
March 25, 2026
Announcement
Looker 26.6 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Sunday, March 22, 2026
Expected Looker (original) final deployment and download available: Sunday, April 5, 2026
Expected Looker (Google Cloud core) deployment start: Monday, March 23, 2026
Expected Looker (Google Cloud core) final deployment: Friday, April 3, 2026
Looker (Google Cloud core) and Looker (original) changes
Breaking
Tabbed dashboards with unsupported layouts will now display a warning message prompting users to update to a new layout .
Fixed
An issue has been fixed where creating or updating database connections that use OAuth (such as Snowflake or BigQuery) could fail with the error JDBC Parameter Validation Failed . This feature now performs as expected.
Fixed
When no theme is selected, the Theme picker will now display "Default" rather than "None".
Fixed
An issue has been fixed where dashboard themes were not applying color collections correctly. This feature now performs as expected.
Fixed
An issue has been fixed where buttons on dashboards that used the extension framework could unnecessarily add /embed/ to link URLs. This feature now performs as expected.
Fixed
An issue has been fixed where the font and background color picker was not accessible when you edited visualizations on merge queries. This feature now performs as expected.
Fixed
An issue has been fixed where opening the Interaction Details dialog on the Historical Analytics Interactions Search dashboard in a new window could result in a 401 error. This feature now performs as expected.
Fixed
An issue has been fixed where searching for content could return a 500 error. This feature now performs as expected.
Fixed
An issue has been fixed where pressing Enter to confirm IME composition when writing a message in Conversational Analytics would prematurely submit the message. This feature now performs as expected.
Fixed
An issue has been fixed where the LookML Assistant could return a 404 error. This feature now performs as expected.
Fixed
An issue has been fixed where tabs could be automatically added to existing dashboards. This feature now performs as expected.
Fixed
An issue has been fixed where visualization tooltips on dashboards could use incorrect background or text colors. This feature now performs as expected.
Fixed
An issue has been fixed where the LookML dashboards folder could fail to display the complete list of LookML dashboards. This feature now performs as expected.
March 23, 2026
Looker (Google Cloud core) and Looker (original) changes
Announcement
To enhance security, the Looker language SDKs and the Looker API /login endpoint are being modified. They will exclusively accept passing credentials in the HTTP request body and will no longer support using URL query parameters.
Release date : This update is expected to take effect with the Looker 26.18 release in October 2026.
Potential impact : Any scripts or applications currently passing credentials in the URL query parameters in the Looker SDK libraries, or directly calling the /login API endpoint, will fail after this update.
Who is affected : All customers using Looker SDKs, custom scripts, or applications that call the /login API endpoint directly.
Action required :
We have sent a message to your affected customers. However, to help avoid service disruptions, please recommend that they evaluate their environment and take the following actions before October 2026:
Upgrade SDKs: Upgrade the Looker SDKs to version 26.4 or later as soon as possible.
Update custom scripts: Modify any scripts or applications that rely on passing Looker API credentials in URL query parameters so that they will pass credentials in the HTTP request body.
Test the environment: Validate these changes in an environment that can identify these potential misconfigurations.
March 20, 2026
Looker (Google Cloud core) and Looker (original) changes
Feature
A new version of the Looker mobile app is available for iOS (version 2.2.0) and Android (version 2.0.88). The mobile app now includes the following features and improvements:
The app supports tabbed dashboards.
You can open dashboard links directly in the app.
Load time has been improved.
Dashboard opening zoom bugs and other issues have been fixed.
March 17, 2026
Announcement
As part of Looker 26.4, the following features will begin rolling out on March 17, 2026.
Looker (Google Cloud core) and Looker (original) changes
Feature
Conversational Analytics now offers new modes for asking questions . Fast mode allows you to get answers more quickly. Thinking mode allows you to ask more complex questions and test your agent's capabilities. (Note: Question modes are not yet available. This release note was updated on March 24, 2026.)
Feature
Looker Connections Settings page has a new option, Disable Connection , that allows a Looker admin to disable a connection in cases where there are downstream issues with the database, instead of killing queries manually or allowing queries to remain in the query queue. When the connection is disabled, Looker will not send queries to the database and will return an error message to users.
Feature
The Visualization Assistant , which lets you customize formatting options for Looker visualizations in natural language with Gemini assistance, is now generally available. This assistant can be enabled by turning on the Gemini in Looker and Looker Assistants settings on the Gemini in Looker page in the Platform section of the Admin panel.
Feature
The Self-service Explores feature is now generally available.
In addition, if your Looker admin has enabled your Looker instance to support OAuth for Google Sheets uploads , the self-service Explores feature supports uploading data from Google Sheets using Google Drive navigation .
Feature
The content certification feature is now generally available. In Looker 26.4, the following support has been added:
LookML Explores can now be certified.
Looker admins can now automatically certify all current and future LookML dashboards and LookML Explores.
When Enhanced Search is enabled, searching for content now includes the ability to sort and filter search results based on certification status.
Feature
The Continuous Integration (CI) feature is updated for better integration with the Looker user interface:
Your Looker instance will be migrated to the new version of Looker CI. The migration will take a few minutes.
While your instance is migrating, any existing CI suites will not appear on the CI Suites page, and the history on the CI Runs page will be empty. During this time, do not create new suites or initiate manual runs.
When the migration is complete, the Suites and Runs pages will be repopulated.
If you encounter an issue during the migration, please report it using the Looker Continuous Integration - Preview Issue Tracker form .
The updated Looker Continuous Integration feature includes the following:
Your Looker admin no longer needs to manually add CI users. After your Looker instance is enabled for CI (or once your instance is updated to the new CI, if your instance was already enabled for CI), Looker automatically creates ten Looker CI users. The Looker CI users are created in the Looker CI Users user group with the Looker CI Users role . A Looker admin can view the Looker CI users from the Service Accounts tab of the Users Admin page.
A new GitHub table on the Continuous Integration Admin page lists the GitHub repositories that have been granted access to the Looker CI GitHub application, which enables Looker CI to be triggered automatically when pull requests are created .
Note: This item was updated on March 27, 2026.
Feature
The Dashboard Tile Limits preview feature is now available, and is disabled by default.
When enabled, the Dashboard Tile Limits preview feature lets admins set limits to how many query tiles can be added to each tab in a dashboard. Admins can set these limits in the Maximum Query Tiles per tab setting on the Content guardrails admin page.
Feature
The Gemini in Looker assistant that helps you generate LookML parameters is now available to enable individually from other Gemini in Looker features. This assistant, which continues to be available in preview, suggests LookML parameters that are based on the natural language prompts that you add to your project files. This assistant can be enabled by turning on the Gemini in Looker and LookML Assistant settings on the Gemini in Looker page in the Platform section of the Admin panel.
Feature
The Increased Row Limit preview feature feature is now available, and is disabled by default.
When enabled, the Increased Row Limit preview feature lets admins set row limits up to 50,000 rows or datapoints for map charts , scatterplot charts , and table charts . Admins can set the limits for each visualization type in the Visualization limits setting on the Content guardrails admin page.
Table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to additional limitations when you download, send, or schedule dashboards in PDF format. See Downloading or delivering dashboards in rendered formats for more information about scheduling and downloading dashboard PDFs with increased row limits.
Note: This item was originally published on March 16, 2026 and was updated on March 17, 2026.
Feature
Now available in preview, you can use Gemini in Looker to assist you in writing Looker expressions for table calculations and custom fields . This feature can be enabled by turning on the Expression Assistant setting on the Gemini in Looker page in the Platform section of the Admin panel.
Feature
The Enhanced Search preview feature is now available.
When enabled, Enhanced Search helps you find saved content on your instance using Gemini in Looker. Enhanced Search moves beyond keyword matching to interpreting the conceptual meaning of your search queries, letting you search for saved content using business terms or analytical questions (for example, "total customer acquisition cost").
You can filter your search results to limit them to specific content types, folders, content creators, creation dates, modification dates, and the content certification status.
To enable Gemini in Looker assistance with searching content, you must also enable the Semantic Search setting on the Gemini in Looker page in the Platform section of the Admin panel.
Note: The Semantic Search option will begin rolling out on April 6, 2026. This item was updated on April 2, 2026.
Feature
Now available in preview, Gemini in Looker can automatically generate Quick Start analyses for Explores . This feature can be enabled by turning on the AI-assisted Quick Starts setting on the Gemini in Looker page in the Platform section of the Admin panel.
Note: This feature is not yet available. This item was modified on March 19, 2026.
Feature
Available in preview, you can now use custom calendars, such as fiscal or retail calendars, for dialects that support it . The custom calendar feature lets your Looker developers create a LookML model of a custom calendar table in your database and then create custom calendar dimension groups that use the custom calendar. Your end users can then create Explore queries using the custom calendar dimension timeframes.
In addition, your LookML developers can create period-over-period measures based on custom calendar dimension groups.
Note: This item was updated on March 19, 2026.
March 12, 2026
Looker (Google Cloud core) and Looker (original) changes
Change
The Granular Dashboard Sizing preview feature is temporarily unavailable for some Looker instances. Any dashboard tiles that were resized during this feature's enablement will revert to Looker's original sizing constraints.
( Note : This release note was added on March 16, 2026.)
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) instances with public or hybrid connections now support IP allowlists , which enhance security by ensuring that only traffic from specified IP addresses can access your instance. To connect to certain Google Cloud services, like Conversational Analytics or Connected Sheets, you can select an option to automatically allowlist the necessary IP ranges for those services. You can configure an IP allowlist for an existing instance by editing it in the Google Cloud console.
This feature will roll out to instances over the next week.
March 11, 2026
Looker (original) only changes
Feature
Beginning in Looker 26.4, customer-hosted Looker instances will use a new LookML parser with optimized performance. This parser is already in use for Looker-hosted instances. For customer-hosted instances on Looker 26.4, if you want to revert to the legacy parser, contact Looker Support for details on how to disable the new parser. The legacy parser will be fully deprecated in Looker 26.6.
March 09, 2026
Looker (Google Cloud core) only changes
Feature
It is no longer necessary to manually configure OAuth credentials when creating a Looker (Google Cloud core) instance that uses only public secure connections and no custom domain. For these instances, Looker (Google Cloud core) now automatically manages OAuth client and secret information, simplifying the setup process. Manual OAuth configuration is still required for instances that use private connections, hybrid connections, or a custom domain.
March 05, 2026
Announcement
Looker 26.4 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Sunday, March 8, 2026
Expected Looker (original) final deployment and download available: Thursday, March 19, 2026
Expected Looker (Google Cloud core) deployment start: Monday, March 16, 2026
Expected Looker (Google Cloud core) final deployment: Monday, March 23, 2026
Looker (Google Cloud core) and Looker (original) changes
Feature
The Gemini in Looker page in the Admin panel has been redesigned to allow Looker admins to selectively enable Gemini in Looker features. For more information about how to enable the features that are available for each Looker instance type, see the following documentation:
Looker (Google Cloud core): Administer Gemini on your Looker (Google Cloud core) instance
Looker: Admin settings – Gemini in Looker
Feature
Full support for connections with AlloyDB for PostgreSQL is available in preview. When you create a connection in Looker, you can now select Google Cloud AlloyDB for PostgreSQL from the Dialect drop-down menu. This update does not affect existing AlloyDB connections that were created using the PostgreSQL 9.5+ option in the Dialect menu.
Note: This item was updated March 9, 2026.
Feature
Dashboard filter enhancements are now generally available. Dashboard filter enhancements include the following improvements:
Persistent filter suggestion drop-down: Filter suggestion drop-downs remain open for easier multi-selection for tag list and advanced filter type filters.
Select or deselect all filter values: Lets users select or deselect all values in tag list and advanced filter type filters.
Limit condition controls for advanced filters: Lets dashboard creators limit the condition options that are available to users for advanced filters.
Enable Include custom filter values by default for boards: Admins can choose to enable Include custom filter values for boards by default instance-wide.
Feature
Tabbed dashboards are now generally available. Dashboard editors can use tabs to organize dashboard content across multiple tabs within a single dashboard. Adding tabs to dashboards lets you do the following:
Better organize content: Group related visualizations and tiles into separate tabs.
Improve data storytelling: Guide viewers through different aspects of your data in a structured way.
Enhance performance: Load only the tiles on an active tab, potentially speeding up initial dashboard load times.
Reduce clutter: Consolidate multiple related analyses into a single dashboard.
Feature
The Looker API now includes Looker Conversational Analytics endpoints that you can use with applications that embed Looker to create and manage agents, conversations, and messages.
For tips on using the Conversational Analytics endpoints, see the Best practices for using the ConversationalAnalytics API endpoints in Looker's API documentation page.
Note: This item was updated March 13, 2026.
Feature
Custom tooltips are now generally available and supported for more visualization types. Custom tooltips let you configure tooltips within the Explore visualization editor by using a combination of UI settings and an HTML editor that supports Liquid templating. Custom tooltips are supported for most visualization types except the following:
Donut multiples charts
Word cloud charts
Static map (regions) charts
Static maps (points) charts
Charts made using the Chart Config Editor (with the exception of Sankey charts )
Custom visualizations
Learn more about custom tooltips .
Feature
The Embed Conversational Analytics feature is now generally available. In Looker 26.4, the following support has been added:
Embedding Conversational Analytics is now supported on Looker (Google Cloud core).
The Looker embed SDK now supports embedded Conversational Analytics.
Embedded themes are now partially supported with embedded Conversational Analytics. All of the General options for themes are supported. All other theme options are not supported.
Fixed
An issue has been fixed where dashboard buttons that open links in a new tab could fail to work properly when cookieless embed was enabled. This feature now performs as expected.
Fixed
An issue has been fixed where certain tables were being unnecessarily truncated when they were downloaded to PDF. This feature now performs as expected.
Fixed
An issue has been fixed where the "raw" timeframe of a dimension_group could be displayed in a 12-hour format instead of the expected 24-hour format. This feature now performs as expected.
Fixed
An issue has been fixed where dimension fill could fail to populate values when the row limit is reached. This feature now performs as expected.
Fixed
An issue has been fixed where dashboard table tiles could fail to display the scroll bar and total row. This feature now performs as expected.
Fixed
An issue has been fixed where Looker could fail to retain sorts when content from a drill modal was being downloaded. This feature now performs as expected.
Fixed
An issue has been fixed where selecting the Expand tables option during a PDF download or schedule could cause the tables to shrink instead of expand. This feature now performs as expected.
Fixed
An issue has been fixed where pivoted columns could fail to be sorted correctly when content was being downloaded. This feature now performs as expected.
Fixed
An issue has been fixed where conditional formatting rules could fail to be saved. This feature now performs as expected.
Fixed
An issue has been fixed where LookML dashboards could not be created using the ProjectFile API endpoint. This feature now performs as expected.
Fixed
An issue has been fixed where Looker would prevent users from saving changes on the Content Guardrails admin settings page. This feature now performs as expected.
Fixed
An issue has been fixed where Looker could fail to recognize non-numeric values in conditional formatting rules for single value visualizations. This feature now performs as expected.
Fixed
An issue has been fixed where entering Japanese characters into advanced filters could add extra characters. This feature now performs as expected.
Fixed
An issue has been fixed where dashboards that used ClickHouse connections could fail to load with a ClassCastException error. This feature now performs as expected.
Fixed
An issue has been fixed where comma-separated negative filters could be incorrectly interpreted with OR logic in the filter UI. This feature now performs as expected.
Looker (original) only changes
Breaking
Project-level local git hooks are no longer supported for security reasons. This change will have no effect on Looker-hosted instances, but it may affect customer-hosted instances depending on your Git setup.
Feature
The Labs page in the Admin panel has been renamed Preview Features . The new page organizes in-progress features into two categories to provide better clarity on their status:
Preview features : These features have a planned path to general availability.
Labs features : These experimental features may be removed from the product at any time, and issues may not be resolved.
Your enablement status for each feature has not changed. For more information, see the Preview Features documentation page.
Looker (Google Cloud core) only changes
Feature
The Preview Features page is now available in the Admin panel for Looker (Google Cloud core). This page lets you enable or disable new features that are currently in preview.
The following preview features are now available in Looker (Google Cloud core):
Access Content Certification
Granular Dashboard Sizing
Internal Dashboard Theming
Tile Download Default Options
Preview features that are categorized as "Labs" on the Preview Features page of the Admin panel aren't supported in Looker (Google Cloud core).
March 02, 2026
Looker (Google Cloud core) only changes
Feature
You can now manage backups for Looker (Google Cloud core) instances in the Google Cloud console. From the new Backups tab on the instance details page, you can create manual backups, and you can view, restore, or delete both automatic and manual backups. Previously, these operations were only available through the gcloud command-line tool.
February 17, 2026
Announcement
The following features will roll out over a four-day period starting February 17, 2026.
Looker (Google Cloud core) and Looker (original) changes
Feature
The System Activity User Activity dashboard has been updated to improve authentication troubleshooting. New information includes recent login failures, the authentication method that was used, the error message that was returned, and the time of the attempt.
Feature
Looker admins can grant the new schedule_without_limit permission to restrict a user's ability to deliver all data results from a Look or an Explore . This permission must be combined with another Looker permission that permits delivering data.
This permission will be automatically granted to any existing roles that already contain a data delivery permission. Looker admins must remove this permission from any users whom they wish to prevent from delivering all results from a Look or an Explore.
Note: This item was added on February 19, 2026.
Feature
The content certification feature, already available in preview, includes the following updates:
The Settings page in the General section of the Admin panel now includes options that let admins enable or disable content certification, set a custom URL for the certification process, and control whether certification is revoked when content is edited.
LookML dashboards can now be certified.
Looks and dashboards that are based on uncertified self-service Explores now display the "ungoverned" badge.
Searching for content now includes the ability to sort content based on its certification status. ( Note : This capability is not yet available. This item was modified on February 26, 2026.)
Feature
Now available in preview, the Self-service Explores feature supports uploading data from Google Sheets . To support uploading data from Google Sheets, your Looker admin must enable the required APIs in the Google Cloud project that houses your BigQuery database.
Feature
Now available in preview, LookML developers can unlock their Git branch in cases where their Git branch is locked as a result of another Git operation in progress or a previous Git operation failing. When the Git repository is locked, Looker displays the Unlock Branch option in the Git Actions panel of the Looker IDE. In addition, if a LookML developer tries to commit a change on a locked Git branch, Looker displays a warning in the Commit dialog, along with an option to delete the Git lock. See the Using version control and deploying documentation page for details.
Note: This item was added on February 18, 2026.
Feature
Now available in preview, the In-database merge queries feature is supported for merging results of two queries that are on the same BigQuery connection. Previously, the join for merging results was always performed in Looker memory, which limited each query to 5,000 rows that could be calculated in the join. If your Looker admin has enabled the In-database merge queries Looker Labs feature , the join between two queries that are on the same BigQuery connection is performed in the BigQuery database itself. Performing the join in the database is more performant and allows for unlimited rows that can be joined.
Feature
Now available in preview, the Self-service Explores feature supports updating the data for a self-service Explore. The owner of a self-service Explore can update it with data from the latest version of the file that was used to create the self-service Explore. See the Creating self-service Explores documentation page for more information.
Feature
Now available in preview, dashboard editors can change the size and layout of dashboard tiles with more granularity. To enable this feature, a Looker admin must turn on the Granular Dashboard Sizing Labs feature .
Feature
Now available in preview, the Embed Conversational Analytics Labs feature is now available. When enabled, the Embed Conversational Analytics Labs feature lets you embed Conversational Analytics conversations and agents in an iframe like other Looker content types.
Looker (original) changes
Feature
Now available in preview, dashboard editors can set default options for how the download of a dashboard tile includes query results . They can set the download to include by default all query results or the current result table that is displayed in the visualization, or set a custom number of rows and columns. To enable this feature, a Looker admin must turn on the Tile Download Default Options Labs feature .
February 09, 2026
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 26.2 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, February 9, 2026
Expected Looker (original) final deployment and download available: Monday, February 16, 2026
Expected Looker (Google Cloud core) deployment start: Monday, February 9, 2026
Expected Looker (Google Cloud core) final deployment: Friday, February 27, 2026
Looker (Google Cloud core) and Looker (original) changes
Breaking
When you use Elite System Activity , all System Activity fields of the longtext type that have a size greater than 2 MB will be truncated. If a table has only one column with a longtext type, that column will be set to a maximum of 1.9 MB in size. If a table has multiple columns of the longtext type, the total maximum size across all such columns is 2 MB, and this limit is distributed uniformly among those columns. For example, if a table has x longtext columns, each column will have a maximum length of 2 MB divided by x .
Feature
Now available in preview, Looker has full support for connections with AlloyDB for PostgreSQL . When you create a connection in Looker, you can now select "Google Cloud AlloyDB for PostgreSQL" from the Dialect drop-down menu. This update does not affect existing AlloyDB connections that were created using the PostgreSQL 9.5+ option in the Dialect menu.
Feature
Looker admins can now grant essential Google Cloud services , such as Conversational Analytics , access to a Looker instance, even when an IP allowlist is active.
Feature
The Customer Engineer Advanced Editor default role now includes the gemini_in_looker , chat_with_agent , chat_with_explore , and save_agents permissions, which grant access to Gemini features and Conversational Analytics functionality.
Feature
The user attribute pairing user interface for SAML , LDAP , and OpenID Connect authentication has been updated. A new "Manage Pairings" side panel provides a robust interface for adding, removing, and viewing attribute pairings. This new interface also includes filtering and pagination and allows for a single claim to be associated with multiple Looker user attributes.
Feature
When you are delivering content to an SFTP server , additional key exchange algorithms and host key algorithms are now supported.
Feature
The Increase SQL Runner Schema and Table Limit preview feature is now available. This preview feature increases the total number of schemas that can be returned to SQL Runner to 12,000. Enabling this feature will increase the table name display response time if your instance has access to a large number of schemas and tables.
Note: This item was added on February 20, 2026 and updated on March 16, 2026.
Looker (original) only changes
Feature
Looker admins can now enforce a password expiration policy , enhancing security for users who authenticate with an email and a password. This new feature lets admins set a password expiration window between 30 and 365 days. Fourteen days before password expiration, a banner will notify the user, and, once their password has expired, the user must reset it at the next login.
Change
The Looker Action Hub has been updated to support newer API versions for Google Ads (from v19 to v22) and Facebook Custom Audiences (from v22 to v24).
Change
When you use Elite System Activity , the merge_query table now refreshes every 10 minutes.
Fixed
An issue has been fixed where dashboard tiles with titles that included the % symbol could not be downloaded in the Safari 26.0 browser. This feature now performs as expected.
Fixed
An issue has been fixed where adding a new field to a conditionally formatted result set could fail to apply the conditional formatting to the new field. This feature now performs as expected.
Fixed
An issue has been fixed where switching filter types from Matches (Advanced) to another filter type could populate that filter with an incorrect filter configuration. This feature now performs as expected.
Fixed
An issue has been fixed where the filter bar would automatically expand on dashboard load when the filter location was set to "Right". This feature now performs as expected.
Fixed
An issue has been fixed where changing the collection in a conditional formatting rule could reset styles for the rule. This feature now performs as expected.
Fixed
An issue has been fixed where the pagination option was not being displayed in the LookML dashboards folder for some users.
This feature now performs as expected.
Fixed
An issue has been fixed where conditional formatting no longer appeared on certain dashboard tiles. This feature now performs as expected.
Fixed
An issue has been fixed where switching a visualization type from Table to Single Value could carry over unwanted conditional formatting. This feature now performs as expected.
Fixed
An issue has been fixed where Looker could return a 500 error if a user with one or more single quotes in their name attempted to commit LookML. This feature now performs as expected.
Fixed
An issue has been fixed where non-admin users could not favorite
LookML dashboards. This feature now performs as expected.
Fixed
An issue has been fixed where a modification to the color palette for the "Along a scale..." conditional formatting feature could fail to be saved. This feature now performs as expected.
Fixed
An issue has been fixed where choosing a non-default color collection and then choosing a custom color in a conditional formatting rule could cause the rule to revert to the default color collection. This feature now performs as expected.
Fixed
An issue has been fixed where custom dimensions that were based on numeric fields could be converted to strings, which caused incorrect sorting. This feature now performs as expected.
Fixed
An issue has been fixed where some drill links could fail to work when cookieless embed was enabled. This feature now performs as expected.
February 06, 2026
Looker (Google Cloud core) and Looker (original) changes
Deprecated
The DataRobot action is now deprecated. This action is no longer available in the Looker Action Hub.
February 02, 2026
Looker (Google Cloud core) and Looker (original) changes
Feature
Conversational Analytics now displays its reasoning for how it analyzes queries. After you enter your query, click Show reasoning to see a plain text explanation of the steps that Conversational Analytics took to interpret your query.
January 28, 2026
Looker (Google Cloud core) only changes
Feature
You can now view the public egress IP addresses for Looker (Google Cloud core) instances that use Private Service Connect and controlled native egress. These IP addresses may be used when setting up outbound connections .
January 26, 2026
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 26.0 includes the following feature updates, which will start rolling out on January 26, 2026:
Looker (Google Cloud core) and Looker (original) changes
Feature
Updates to the Continuous Integration (CI) feature will be available in February, 2026.
Note: This item was added on January 28, 2026 and updated on January 30, 2026.
Looker (Google Cloud core) and Looker (original) changes
Feature
Now available in preview, the Configuration tab of the Projects Settings page in the Looker IDE contains a Delete Developer Copy button that lets LookML developers delete their local developer copy of the project's Git repository. See the Using version control and deploying documentation page for details.
Looker (original) only changes
Feature
The Custom Tooltips Labs feature is now available. The Custom Tooltips Labs feature lets you configure tooltips within the Explore visualization editor using a combination of UI settings and an HTML editor that supports Liquid templating.
This feature is only for Looker (original) instances and is enabled by default.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Self-service Explores admin page now supports a connection test button so that Looker admins can verify that the BigQuery connection is able to support self-service Explores.
Looker (original) only changes
Feature
The Dashboard Filter Enhancements Labs feature is now available. The Dashboard Filter Enhancements Labs feature includes the following improvements:
Persistent filter suggestion drop-down: Filter suggestion drop-downs remain open for easier multi-selection for tag list and advanced filter type filters.
Select or deselect all filter values: Lets users select or deselect all values in tag list and advanced filter type filters.
Limit condition controls for advanced filters: Lets dashboard creators limit the condition options that are available to users for advanced filters.
Enable Include custom filter values by default for boards: Admins can choose to enable Include custom filter values for boards by default instance-wide.
This feature is only for Looker (original) instances and is enabled by default.
Looker (original) only changes
Feature
The Tabbed Dashboards Labs feature is now available. The Tabbed Dashboards Labs feature lets dashboard editors organize dashboard content across multiple tabs within a single dashboard. Adding tabs to dashboards lets you do the following:
Better organize content: Group related visualizations and tiles into separate tabs.
Improve data storytelling: Guide viewers through different aspects of your data in a structured way.
Enhance performance: Load only the tiles on an active tab, potentially speeding up initial dashboard load times.
Reduce clutter: Consolidate multiple related analyses into a single dashboard.
This feature is only for Looker (original) instances and is enabled by default.
Looker (Google Cloud core) and Looker (original) changes
Feature
Gemini in Looker can now generate a summary and an analysis of an Explore .
Looker (Google Cloud core) and Looker (original) changes
Feature
Available January 29, 2026: Conversational Analytics includes a Show reasoning toggle that provides step-by-step insight into how the agent reaches its answers. This update also includes improvements to overall answer accuracy. See the Conversational Analytics API documentation for details.
January 14, 2026
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) is now available in the asia-southeast3 (Bangkok) region. For more information, see the Looker (Google Cloud core) locations documentation.
January 08, 2026
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 26.0 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, January 12, 2026
Expected Looker (original) final deployment and download available: Monday, January 19, 2026
Expected Looker (Google Cloud core) deployment start: Monday, January 12, 2026
Expected Looker (Google Cloud core) final deployment: Friday, January 23, 2026
Looker (Google Cloud core) and Looker (original) changes
Breaking
When you use Elite System Activity , the System Activity field scheduled_plan.filters_string is limited to a length of 1.9 MB. Any data beyond the 1.9 MB limit is truncated.
Looker (Google Cloud core) and Looker (original) changes
Breaking
HTML characters are now displayed in plaintext in table visualizations to match other visualization types. For example, &quot; is no longer rendered as " .
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports conditional formatting rules for string types in single value and table visualizations.
Note: This item was added incorrectly. This feature is not included with the 26.0 release. It may be available in a future release.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports key-pair authentication in the PDT overrides for Snowflake connections .
Looker (Google Cloud core) and Looker (original) changes
Feature
The user interface for configuring group mappings for LDAP, SAML, and OpenID Connect has been updated for improved management. The new interface allows administrators to more easily add, edit, remove, and search for group mappings.
Looker (Google Cloud core) and Looker (original) changes
Feature
The JDBC driver for Databricks connections has been updated to version 3.0.5.
Looker (Google Cloud core) and Looker (original) changes
Feature
The new LookML parameter autogenerate_primary_keys parameter is now supported. When a view or Explore is defined with autogenerate_primary_keys: yes , Looker generates a temporary, distinct key for a view, allowing symmetric aggregates and one-to-many counts to be calculated correctly without any changes to your underlying database table. The primary key is generated at query runtime; it does not persist across queries. Note: This item was added on January 12, 2026.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports encrypted files for key-pair authentication for Snowflake connections .
Looker (Google Cloud core) and Looker (original) changes
Feature
When you view folders on embedded content , LookML dashboards are now visible. The LookML dashboards folder, however, will not be visible.
Looker (Google Cloud core) and Looker (original) changes
Feature
The LookML dashboards folder is now paginated, showing 30 dashboards per page.
Looker (Google Cloud core) and Looker (original) changes
Feature
For creating self-service Explores from Excel files that contain multiple worksheets, the Data upload dialog now lets you specify which Excel worksheet to upload. Previously, the self-service Explore was always based on the first worksheet in the Excel file. Note: This item was added on January 15, 2026.
Looker (Google Cloud core) and Looker (original) changes
Feature
Custom mail settings that are configured for SMTP servers now support OAuth 2.0 authentication.
Looker (Google Cloud core) and Looker (original) changes
Feature
The JDBC driver for Apache Spark 3+ connections has been updated to version 2.7.6.
Looker (original) only changes
Feature
The Dashboard Filter Enhancements Labs feature includes the following improvements:
Persistent filter suggestion drop-down: Filter suggestion drop-downs remain open for easier multi-selection for tag list and advanced filter type filters.
Select or deselect all filter values: Lets users select or deselect all values in tag list and advanced filter type filters.
Limit condition controls for advanced filters: Lets dashboard creators limit the condition options that are available to users for advanced filters.
Enable Include custom filter values by default for boards: Admins can choose to enable Include custom filter values for boards by default instance-wide.
This feature will be available beginning January 26, for Looker (Original) instances, and will be enabled by default.
Note: This item was updated on January 20, 2026.
Looker (original) only changes
Feature
The API endpoint search_lookml_dashboards is out of Labs and now generally available.
Looker (original) only changes
Feature
The Custom Tooltips Labs feature lets you configure tooltips within the Explore visualization editor using a combination of UI settings and an HTML editor that supports Liquid templating.
This feature will be available beginning January 26, for Looker (Original) instances, and will be enabled by default.
Note: This item was updated on January 20, 2026.
Looker (original) only changes
Feature
The Favoriting LookML Dashboards Labs feature, which enables LookML dashboards to be marked as favorites and displays them on the Looker Favorites tab, is now out of Labs and generally available.
Looker (original) only changes
Feature
Looker admins can now create dedicated service accounts for API-only access . Additionally, eligible standard user accounts that are being used for API access can be migrated to the new service account type from the Users page in the Admin panel.
Looker (original) only changes
Feature
The Tabbed Dashboards Labs feature lets dashboard editors organize dashboard content across multiple tabs within a single dashboard. Adding tabs to dashboards lets you do the following:
Better organize content: Group related visualizations and tiles into separate tabs.
Improve data storytelling: Guide viewers through different aspects of your data in a structured way.
Enhance performance: Load only the tiles on an active tab, potentially speeding up initial dashboard load times.
Reduce clutter: Consolidate multiple related analyses into a single dashboard.
This feature will be available beginning January 26, for Looker (Original) instances, and will be disabled by default.
Note: This item was updated on January 20, 2026.
Looker (Google Cloud core) only changes
Feature
The API endpoint search_lookml_dashboards is now generally available.
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) instances that use Private Service Connect can now connect to Google APIs through controlled native egress .
Looker (Google Cloud core) only changes
Feature
LookML dashboards can now be marked as favorites , allowing the LookML dashboards to appear on the Looker Favorites tab.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where creating a custom dimension with a single letter name could cause the query to fail. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where downloaded reports with pivoted tables could contain extra whitespace. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Show Totals option in the Plot menu was not correctly hiding totals when a user downloaded results. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where filtered custom measures could fail to load if they referenced a dimension that used the alias parameter in their filter. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Explore from SQL Runner query feature could return an error if it found Liquid syntax in the query. The feature now exports the query as plaintext.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where tooltips incorrectly displayed the text [object Object] . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an empty sorts: property in a LookML explore file definition could cause Looker to return a 500 error. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where very long dashboard names were not properly truncated. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML Validator was not surfacing errors if an invalid field name was referenced in a suggest_dimension field. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where custom measures with invalid field references could cause queries to fail, even if those measures weren't selected in the query. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Show More button wouldn't appear for large lists when a user was managing folder access. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where modifying conditional formatting rules other than the first one incorrectly affected the first rule. This fix has been backported to Looker versions 25.18.41 and 25.20.17.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where clicking Status details in the connection setup page without first selecting a dialect caused the page to crash. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where any Liquid usage in a derived table SQL resulted in full suggestions behavior. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where downloading pivoted queries with table calculations while using an Exasol database could return an error. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a table visualization could become unresponsive if a fixed column width was specified for multiple columns. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where filters with commas were not including all filter conditions on Safari browsers. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker extensions could not access webpack development servers. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where selecting the filter option "is before N hours ago" incorrectly displayed "is before N hours" in the filter.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where value_format was not respected in table visualizations for numeric values larger than 16 digits. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the dialog to select a folder would attempt to load a second page of results without being prompted by the user. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where certain fields in dialogs, such as the Format field in the Download dialog, were incorrectly labeled as read-only to screen readers. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where tooltip background colors were not being correctly rendered. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the custom tooltip editor was unable to scroll to edit long tooltip templates. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been identified and fixed in search where the latency in fetching search results spiked, causing search to be slow in returning results. A layer of caching has been added, causing search results to be more performant. Note: This item was added on January 13, 2026.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where merged queries could disappear if a user edited one of the settings in the Values tab for a field. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a SQL Runner query against a model would fail if the user had not yet opened the model in Development Mode. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Skip to Main Content accessibility link for dashboards has been removed for embedded dashboards.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where, after you uploaded data, Looker would not redirect you to the uploaded file. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A retry limit has been added for scheduled jobs. If a scheduled job fails five times in a row, then it's skipped until the next time the schedule is triggered.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where long content in tooltips could not be scrolled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where manually resetting column widths from a dashboard grid tile header had no effect. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Get LookML Model Explore API endpoint could time out without returning results. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where strings with accented characters were not being displayed properly in the Y-Axis of a visualization. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When you use the Field Picker to clear all fields, the chart type no longer changes to Table (Legacy).
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where testing a connection could fail to return an error message in cases where the user had insufficient permissions or if the connection no longer existed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker would prevent users from uploading data if they lacked the explore permission. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a join wouldn't be added to the query, even if one was required by a measure of type count_distinct , sum_distinct , or avg_distinct .
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some columns in the Query Concurrency System Activity Explore were displaying null values. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where applying filters to a Google Map visualization would require a refresh before the filters would take effect. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
For the Spanish ( es_ES ) locale, the weekday initials for Sunday and Tuesday in the schedule dashboard dialog have been set to the correct values ( D and M ).
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker would generate inefficient SQL for some Databricks queries that included date manipulation for weekly data. Looker now uses Databricks functions like date_trunc when generating SQL.
December 23, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
Historical data cannot be accessed with the API Usage System Activity Explore for Looker instances that are running Looker 25.16 or later. Looker instances that are running Looker 25.16 or later must use the API Usage Hourly System Activity Explore .
December 03, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
For Looker instances that are running Looker 25.20 or later, admins can now test the connection between their instance and the Looker Action Hub. This option is available only for the Looker Action Hub. It is not available for custom action hubs .
Looker (Google Cloud core) and Looker (original) changes
Feature
Now available in preview, the Self-service Explore feature lets Looker users upload CSV, XLS, and XLSX files to Looker and then query and visualize the data in a Looker Explore without needing to configure a LookML model or set up Git version control. In addition, content certification is supported for self-service Explores.
December 02, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
Now available in preview, Looker can display a new Connected Sheets option in the Explore actions menu. The Connected Sheets option opens Google Sheets and initiates a connection from Google Sheets to the Looker Explore. You can then build reports, pivot tables, or charts within the newly created Google Sheets using the fields available from the selected Looker Explore. The Connected Sheets quick link feature must be configured in the Google Cloud console and on your Looker instance. See the Connected Sheets quick link documentation page for details.
December 01, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker–Tableau BI Connector is now available on Tableau Exchange . This means that for Tableau Desktop and Tableau Server , you no longer need to manually download and install the Tableau connector (TACO) file. Note: This item was added on December 12, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker–Tableau BI Connector is now supported for Tableau Cloud, so that you can use a Looker Explore as a data source in Tableau Cloud. See the Looker–Tableau BI Connector documentation page for more information.
To use the Looker–Tableau BI Connector with Tableau Cloud, your admin must configure your Looker instance and your Tableau Cloud instance as described on the Administering Tableau to Looker connections documentation page.
Looker (Google Cloud core) only changes
Feature
You can now use Google-managed certificates for Looker (Google Cloud core) instances that use Private Service Connect connections. This feature simplifies custom domain configuration by using a *.private.looker.app domain, eliminating the need to manage your own SSL certificates. Instances may need to migrate to the updated service attachment URI.
Looker (Google Cloud core) only changes
Feature
You can now use global access with Looker (Google Cloud core) instances that use Private Service Connect connections. Instances may need to migrate to the updated service attachment URI.
November 26, 2025
Looker (Google Cloud core) and Looker (original) changes
Deprecated
The DataRobot action will be deprecated on February 1, 2026. After that date, this action won't be available in the Looker Action Hub.
November 17, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The content certification feature, when enabled, lets trusted users certify Looker dashboards and Looks to indicate that the content has gone through a manual review and is certified as reliable and trustworthy. This lets other users identify reliable content and confidently use that data for decision-making. Note: This item was updated on November 20, 2025.
November 12, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
Conversational Analytics is now generally available for Looker instances that are on Looker 25.18 or later. Use of Conversational Analytics in your Looker instance is now available without a Looker admin having to enable the Trusted Testers settings. Enablement of the Gemini in Looker setting is still required. Enablement of the Trusted Tester Features setting is still required when using the Code Interpreter with Conversational Analytics in Looker.
For Looker (Google Cloud core) instances, this launch includes support for Conversational Analytics in instances that are within a VPC perimeter.
See the Looker pricing page for pricing information.
(This release note was updated on November 13, 2025 to add pricing information.)
November 11, 2025
Looker (Google Cloud core) only changes
Feature
You can now schedule a daily, zero-downtime export for Looker (Google Cloud core) instances. For more information, see the Create a scheduled export job for a Looker (Google Cloud core) instance documentation page. This feature is being rolled out and will appear in all instances within a few weeks.
November 05, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.20 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Thursday, November 6, 2025
Expected Looker (original) final deployment and download available: Thursday, November 13, 2025
Expected Looker (Google Cloud core) deployment start: Thursday, November 6, 2025
Expected Looker (Google Cloud core) final deployment: Tuesday, November 18, 2025
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Clear field keep filter button on an Explore could incorrectly become disabled when a user used the field search bar in the field picker. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a measure of type: period_over_period could be referenced in the sql parameter for a measure of type: number . Attempting to do so now correctly displays an error in the LookML validator. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where SQL Runner could return a NoMethodError when trying to query a LookML model that doesn't exist in the user's development mode. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Breaking
When you use Elite System Activity , the System Activity fields sql_query.sql and sql_text.text are limited to a length of 1.9 MB. Any data beyond the 1.9 MB limit will be truncated. (This release note was updated on November 10, 2025 to specify Elite System Activity.)
Looker (Google Cloud core) and Looker (original) changes
Feature
The Max Number of PDT Builder Connections limit has been increased from 10 to 100.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Looker now recognizes results from the YEAR function as a number and not a date in MySQL 8.4. This change replicates the behavior of MySQL 8.0 and earlier.
To undo this change for a MySQL connection, add the following parameter to the Additional JDBC parameters section: yearIsDateType=true
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker 25.20 contains the following accessibility improvements:
The character count for the custom message field of a schedule is now accessible to screen readers.
The text for errors on custom filters is now accessible to screen readers.
The list of visualization types in the Visualization section of an Explore is now accessible to screen readers.
The reload button and corresponding "last refreshed" timestamp on a dashboard are now accessible to screen readers.
The timezone selector on an Explore is now accessible to screen readers.
The sort indicators in an Explore are now accessible to screen readers.
The text formatting options in the Series tab of an Explore are now accessible to screen readers.
Contrast is improved for elements that are selected when you set up dashboard filters.
Contrast is improved for fields that are selected when Looker suggests a field name in the table calculations editor.
Contrast is improved for tabs that are selected on the Schedule Delivery dialog.
Contrast is improved for radio buttons that are selected on dialogs such as the download dialog.
Dashboard filter options are no longer incorrectly classified as dialogs.
The drill links in a single value visualization are now classified as buttons and can be accessed using the keyboard.
The destination of an alert is now a required field.
Looker (original) changes
Fixed
An issue has been fixed where disabling the Favoriting LookML Dashboards Labs feature prevented users from moving LookML dashboards in folders. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Change
To support the Self-service Explore feature, upon upgrade to Looker 25.20, your Looker instance adds the upload_data permission to any role or permission set that contains the explore permission, including custom permissions sets. If a Looker admin enables the Self-service Explore feature on your Looker instance, any user with the upload_data permission will be able to upload data to create self-service Explores on your instance. Note: This item was added on January 15, 2026.
Looker (original) changes
Feature
A new Labs feature, Internal Dashboard Theming, lets users apply predefined themes to a Looker dashboard. These themes, which are distinct from the themes that are used for embedded dashboards, can be managed by users with the manage_internal_themes permission.
Looker (original) changes
Feature
The Visual Drilling feature is now out of Labs and generally available on the Admin > General Settings page.
Looker (Google Cloud core) changes
Feature
The Visual Drilling feature is now generally available on the Admin > General Settings page.
October 31, 2025
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) instances that use Private Service Connect now offer a simplified method for configuring outbound connections to external domains or the Looker Marketplace. For more information, see the Configure outbound connections documentation.
October 23, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
Conversational Analytics in Looker
The following features are available in Preview for use with Conversational Analytics in Looker instances that are running Looker 25.18 or later:
Event and event attribute information is now available in System Activity Explores .
A Conversational Analytics System Activity dashboard is now available to surface usage data for Conversational Analytics features in Looker, including the most popular data agents, the most popular Explores that are used in conversations, and the most active users.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports cloning a public Git repository using an https:// URL . Looker does not support cloning Git repositories using git:// URLs.
October 21, 2025
Looker (original) only changes
Feature
The new Looker Status Dashboard provides real-time updates about service availability or disruptions for Looker-hosted instances . For more information, see the Monitor Looker status documentation page.
October 10, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
Conversational Analytics in Looker
The following features are available in Preview for use with Conversational Analytics in Looker instances that are running Looker 25.18.9 or later:
New model-specific Looker permissions are available to manage and use the Conversational Analytics data agents that are created to chat with Looker Explores. You can grant these permissions to users as part of a custom role , or use one of two new default roles , Conversational Analytics Agent Manager and Conversational Analytics User , to manage and use agents, respectively.
You can now select up to five Looker Explores as data sources for a data agent in Looker.
Users with the admin_agents permission can now share data agents to let other users chat with your agent and its Explores. Starting in Looker 25.18.10, users with either the save_agents or the admin_agents permission can share data agents with other users.
(This release note was updated on October 10, 2025 to correct the Looker version for this release. This release note was updated on October 23, 2025 to correct the Looker version for data agent sharing permissions.)
October 06, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.18 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Tuesday, October 7, 2025
Expected Looker (original) final deployment and download available: Thursday, October 16, 2025
Expected Looker (Google Cloud core) deployment start: Tuesday, October 7, 2025
Expected Looker (Google Cloud core) final deployment: Monday, October 20, 2025
Looker (Google Cloud core) only changes
Breaking
Looker admins can no longer create or edit individual users' API keys. Instead, from the Admin > Users page, admins can enable users to manage their own API keys. Once a user has API key management enabled, they can create, view, edit, and delete their API keys from their Looker account page. Note: This item was changed on October 9, 2025 to specify that it supports Looker (Google Cloud core) only, and it was changed again on October 22, 2025 to indicate that it's a breaking change.
Looker (Google Cloud core) only changes
Feature
The Prerender iframes for custom visualizations feature is now generally available on the Admin > Content Guardrails page.
Looker (Google Cloud core) only changes
Feature
The Smart single value text size feature is now generally available on the Admin > General Settings page.
Looker (original) only changes
Feature
The Data History Playback Labs feature is is now out of Labs and generally available on the Admin > Settings page.
Looker (original) only changes
Feature
The API endpoint search_lookml_dashboards is now out of Labs and generally available. This endpoint is similar to the search_dashboards endpoint except that it searches LookML dashboards instead of user-defined dashboards. Note : This feature is available in Looker 26.0. This item was updated on January 8, 2026.
Looker (Google Cloud core) and Looker (original) changes
Feature
You can now set the Auto Resize Value setting on single value visualizations. This setting has no effect if the Smart Single Value Text Size setting is enabled on the Admin > General Settings page.
Looker (original) only changes
Feature
The Reduce Filter Queries Labs feature is now is now out of Labs and generally available on the Admin > Settings page.
Looker (Google Cloud core) only changes
Feature
The API endpoint search_lookml_dashboards is now generally available. This endpoint is similar to the search_dashboards endpoint except that it searches LookML dashboards instead of user-defined dashboards. Note : This feature is available in Looker 26.0. This item was updated on January 8, 2026.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Athena JDBC driver version has been upgraded from 2.1.5 to 2.2.2. The Athena JDBC driver is used for connections to Amazon Athena .
Looker (original) only changes
Feature
The Smart single value text size feature is now out of Labs and generally available on the Admin > General Settings page.
Looker (Google Cloud core) and Looker (original) changes
Change
Conversational Analytics users with the save_agents permission can now share data agents , which lets other users chat with the data agent and its Explores. (This release note was added on October 9, 2025.)
Looker (original) only changes
Feature
The Prerender iframes for custom visualizations feature is now out of Labs and generally available on the Admin > Content Guardrails page.
Looker (Google Cloud core) only changes
Feature
The Data History Playback feature is now generally available on the Admin > Settings page.
Looker (Google Cloud core) only changes
Feature
The Reduce Filter Queries feature is now generally available on the Admin > Settings page.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where users were sometimes unable to add line breaks to table calculations. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker 25.18 contains the following accessibility improvements:
You can navigate drill menus by using a keyboard.
When you select a button toggle with a keyboard, the focus ring uses more contrasting colors.
You can switch button toggles on or off by using the Enter key.
When you use a keyboard to select a Look, dashboard, or folder that's inside a folder, a focus ring appears around the selected item.
You can now use a keyboard to edit boards.
You can now use the keyboard to access LookML field definitions in the field picker.
The Alerts dialog is now compatible with screen readers.
The Series tab of the visualization editor is now compatible with screen readers.
Tile notes are now added to ARIA descriptions.
Actions for pivot columns are now accessible with a keyboard.
The color contrast has been improved on large text boxes such as the custom filter editor.
The options in the visualization settings panel now have names that can be read by screen readers.
The state of expanded dialogs on the Explore page, such as the field picker and visualization settings panel, can now be read by screen readers.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where, when dashboard filters were updated, column widths could resize on table visualizations that included pivoted values. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Databricks connections that used OAuth could not be saved if the password field was blank. You can now use OAuth without entering a password on the connections page.
Looker (Google Cloud core) and Looker (original) changes
Fixed
LookML dashboards that aren't deployed to production can no longer be moved into folders other than the LookML Dashboards folder.
Looker (Google Cloud core) and Looker (original) changes
Fixed
LookML project parse errors now include the LookML file path as well as the line number of the error.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where subtotal values could display incorrect values after a filter was added or updated. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where users couldn't sort tables that included pivoted values. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Collapse Subtotal toggle wasn't collapsing subtotals on table visualizations. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where non-string values that were entered in the expression element of the dynamic_fields section of a LookML dashboard could cause the LookML validator to crash. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where certain countries would not be displayed when a custom TopoJSON file was used. The following country names are now supported:
Czechia for Czech Republic
Eswatini for Swaziland
Brunei Darussalam for Brunei
North Macedonia for Macedonia
Timor-Leste for East Timor
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where, when dashboard filters were updated, table visualizations could get incorrectly cropped to exclude the Total row and scroll bar. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the maximum column limit warning could obscure the contents of a visualization. This feature now performs as expected.
October 02, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The sql_preamble parameter now supports Liquid statements . This update is supported on Looker 25.12 and later versions.
September 30, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The following features are coming soon for use with Conversational Analytics:
New model-specific Looker permissions are available to manage and use the Conversational Analytics data agents that are created to chat with Looker Explores. You can grant these to users as part of a custom role, or use one of two new default roles, Conversational Analytics Agent Manager and Conversational Analytics User , to manage and use agents, respectively.
You can now select up to five Looker Explores as data sources for a data agent.
You can now share data agents to let other users chat with your agent and its Explores.
Note: This release note was published prematurely. It was amended on October 8, 2025 to reflect that these features are coming soon and amended on October 14, 2025 to indicate that the features have been launched .
September 23, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
You can now connect to your Looker instance with the Gemini CLI using a dedicated Gemini extension . The Gemini extension can run queries, create Looks and dashboards, and retrieve elements of your LookML models.
September 10, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.16 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, September 15, 2025
Expected Looker (original) final deployment and download available: Thursday, September 25, 2025
Expected Looker (Google Cloud core) deployment start: Monday, September 15, 2025
Expected Looker (Google Cloud core) final deployment: Monday, September 29, 2025
Looker (Google Cloud core) and Looker (original) changes
Breaking
Looker no longer supports connections to Firebolt.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker-Excel Connector is now generally available. When your Looker admin enables the Looker-Excel Connector on the BI Connections admin page, Looker Explores display the Open in Excel option in the Explore gear menu. This option downloads the Explore results to a Windows PC in a format that Microsoft Excel recognizes.
Looker (original) only changes
Feature
The Full Screen Visualizations Labs feature is now generally available. You can turn it on and off on the Admin - General page.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker–Tableau BI Connector is now supported for customer-hosted Looker instances and for Looker (Google Cloud core) instances that use private connections . Note: This item was added on September 19, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Spanner JDBC Driver has been updated to version 2.32.1. This driver is used for connections to Google Spanner .
Looker (Google Cloud core) and Looker (original) changes
Feature
Suggest queries now respect the concurrency limit in the connection configuration.
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) 90-day trial instances are now available.
Looker (original) only changes
Feature
A new Labs feature, Favoriting LookML Dashboards, enables LookML dashboards to be marked as favorites causing the LookML dashboards to appear on the Looker Favorites tab.
Looker (Google Cloud core) only changes
Feature
The Full Screen Visualizations feature is now generally available. You can turn it on and off on the Admin - General page.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker–Power BI Connector is now supported for customer-hosted Looker instances and for Looker (Google Cloud core) instances that use private connections . Note: This item was added on September 19, 2025.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Dashboards that are not configured to run on load no longer show past query results when you revisit the dashboard in the same browser session. You must click the Load button to run the queries again.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where SQL Runner could fail to return new results after running a second query. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where scheduled deliveries could fail with the following error message: Async delivery failed due to errors Internal server error. [Google Cloud Storage] undefined . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where adding multiple filters to the same field could cause filter conditions to overwrite each other. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where visualization templates could be edited by API users without the need for the explore permission.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where users could enter color codes that were longer than six characters when they were updating custom color collections. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When you upload a p12 file to a database connection, Looker now checks that it is a valid file before completing the upload.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where updating a Spanner connection could fail to save changes. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where visualizations could render twice when they were first loaded on an Explore or a dashboard. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where generating an embed URL from a LookML dashboard could fail with the following error: 'models' param cannot be converted to an array of String . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Explore drill links would not open correctly if cookieless embed was enabled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Collapse subtotal toggle on table visualizations was unresponsive. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where total references and row total references in table calculations could return the following error if there was no data: Field either does not exist in the current query or is a measure. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where non-admin users were unable to select a project when they added a connection. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where generating a view inside a folder could fail if the folder's name contained special characters. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where changing the size of a visualization could cause the visualization to flicker. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where loading JavaScript files for custom visualizations could take more than one second. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the OAuth client secret could not be updated in the Connections page. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where users with only the embed_browse_spaces permission could be incorrectly classified as Standard users instead of Viewer users. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where updating a customer-hosted instance could fail with the following error message: Data import is in progress and some features will not be available . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where subtotal rows could fail to appear in downloaded result sets. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Athena JDBC driver version has been downgraded from 2.2.1 to 2.1.5 to fix an issue with result set streaming. This feature now performs as expected. The Athena JDBC driver is used for connections to Amazon Athena .
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker 25.16 contains the following accessibility improvements:
Improved keyboard navigation for embed folders.
Added ARIA labels to filter drop-down menu items.
Added ARIA labels to schedule options.
Added focus rings to navigation links.
Improved VoiceOver support for filter navigation.
Added the ability for users to close modals by using the Esc key. Users will be prevented from closing modals this way if there are unsaved changes in the modal.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where using the matches_filter function in custom filters could return an error. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where updating the Host URL in the Admin - Settings page could fail to be saved. This feature now performs as expected.
August 13, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.14 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, August 18, 2025
Expected Looker (original) final deployment and download available: Thursday, August 28, 2025
Expected Looker (Google Cloud core) deployment start: Monday, August 18, 2025
Expected Looker (Google Cloud core) final deployment: Monday, September 1, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The Query Concurrency System Activity Explore is now available. This Explore can help you identify periods of high load and investigate performance bottlenecks that are related to database connection limits. Note: This feature was included in the Looker 25.12 release notes but its launch was delayed.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Databricks JDBC driver has been upgraded to version 2.7.3. This driver is used for connections to Databricks .
Note : This change was made in Looker 25.10. This item was updated on August 18, 2025 and September 10, 2025.
Looker (Google Cloud core) only changes
Feature
Note: This item was removed on August 27, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
A new Customer Engineer Advanced Editor default role has been added and can be used to grant support access to Google Cloud customer engineers.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where drilling into values with large numbers could fail with the error "Unexpected token".
Note: This item was added on September 24, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Athena driver has been updated to version 2.2.1. This driver is used for connections to Amazon Athena . Note : This change was made in Looker 25.10. This item was updated on August 18, 2025 and September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
New visualizations have been added to the Database Performance dashboard and the Instance Performance dashboard in System Activity.
Looker (Google Cloud core) and Looker (original) changes
Feature
The API Usage Hourly System Activity Explore is now available. This Explore provides a detailed, hourly summary of the volume and performance of API calls that are made to your Looker instance.
Looker (Google Cloud core) and Looker (original) changes
Feature
The following Looker events are now visible in the System Activity Events Explore :
create_project
delete_project
update_project
create_git_deploy_key
delete_repository_credential
update_repository_credential
Looker (Google Cloud core) and Looker (original) changes
Feature
A new JavaScript event, dashboard:tile:merge , has been added.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now displays a notice to instance admins if the instance license has been revoked. Admins will have 14 days to correct any problems before the instance will be shut down.
Looker (Google Cloud core) and Looker (original) changes
Feature
Denodo 9 databases are now supported.
Looker (Google Cloud core) and Looker (original) changes
Feature
The following updates have been made for Period-over-period (PoP) measures :
The PoP measure feature is out of Preview and is now generally available. Note: This item was added on August 21, 2025.
PoP measures are now supported for MySQL 8.0.12+ connections to Looker. Note: This item was added on August 18, 2025.
You can now specify the following types of measures in the PoP measure's based_on parameter: list , median , median_distinct , number , percentile , percentile_distinct . Note: This item was added on August 21, 2025.
For queries with PoP measures and time-based filters, in order to calculate data for the PoP measure Looker now automatically retrieves an extra time period of the coarsest time granularity in the query. (Previously, the user was required to adjust the granularity of time-based filters in order to account for the PoP measure calculations.) Note: This item was added on August 21, 2025.
For queries with PoP measures, if no time-based dimensions are included in the query from the Explore's field picker, Looker can now infer the time period from time-based dimensions in the Explore's filters. (Previously, for queries with PoP measures, the user was required to specify a time-based dimension from the Explore's field picker.) See Requirements for Explore queries with PoP measures for more information. Note: This item was added on August 21, 2025.
PoP measures are now supported with Connected Sheets . Note: This item was added on August 21, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Maria JDBC Driver has been updated to version 3.5.3. This driver is used for connections to MySQL, MySQL 8.0.12+, MariaDB, SingleStore, SingleStore 7+ , Amazon Aurora MySQL , Google Cloud SQL , and HyperSQL. Note: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
For projects that are enabled for the New LookML Runtime , the synonyms parameter is now supported. The synonyms parameter lets LookML developers provide additional context about their data that will help Conversational Analytics and other features to answer questions more accurately.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The LookML validation spinner now correctly stops if there is an error with the server's validation process.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the HTTP error codes for moving and copying dashboards and Looks could return 422 when they should return 404. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the new dashboard name wasn't preserved when a LookML dashboard was copied to a folder. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where getting LookML for dashboards wouldn't preserve all query filters even if they overlapped with dashboard-level filters. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker 25.14 contains the following accessibility improvements:
ARIA labels have been added to iframes that contain custom visualizations.
ARIA labels have been added to legends on visualizations.
ARIA labels have been added to modals.
ARIA labels have been added to the Looker page header and logo.
ARIA labels have been added to untitled dashboard tiles.
Keyboard focus has been improved on modals.
Text contrast has been increased on banners.
Dashboard filters stay in focus while users are typing.
Users can use the Explore from here link in a drill menu by using the keyboard.
Users can interact with Single Value visualizations by using the keyboard.
PDF rendering progress messages have been updated to better integrate with screen readers.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the last accessed time for Looks that were saved to a dashboard as Looks wasn't updated when the dashboard was accessed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where resetting a project's git connection and attempting to use a bare repo would fail. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where unfavoriting a dashboard or Look on a board would not persist. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where color palettes with Japanese labels could not be added or removed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where sorting a pivoted column in the drill modal could sort all pivoted columns instead of just the selected one. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where projects that have not been deployed to production wouldn't appear in a user's list of available projects. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where project names weren't fully sanitized. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where special characters such as slashes, ampersands, and question marks were allowed in BigQuery and Spanner connection names. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the MoreVert button would not be disabled when no options were available in the menu. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where removing fields from embedded dashboard tiles could become impossible. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where "Create view from table" would fail if it was initiated from a LookML subfolder. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a route that wasn't intended for embedding was allowed to be embedded. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where multiple tooltips could be displayed at once. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where include statements for empty folders that used single-slash syntax returned an unrecognized project reference error. This feature now performs as expected.
July 25, 2025
VERSION_UNSPECIFIED
Announcement
The Code Interpreter in Conversational Analytics is available in Preview for Looker (original) and Looker (Google Cloud core) instances. The Code Interpreter translates your natural language questions into Python code and executes that code to provide advanced analysis and visualizations. The Code Interpreter is disabled by default.
Looker (original) instances must be on Looker 25.8 or later. Looker admins can manage enablement for the Code Interpreter on the Gemini in Looker admin page of the Looker (original) instance.
Looker (Google Cloud core) instances must be on Looker 25.10 or later. Looker admins can manage enablement for the Code Interpreter on the Gemini in Looker admin page of the Looker (Google Cloud core) instance.
July 24, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.12 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, July 28, 2025
Expected Looker (original) final deployment and download available: Thursday, August 7, 2025
Expected Looker (Google Cloud core) deployment start: Monday, July 28, 2025
Expected Looker (Google Cloud core) final deployment: Wednesday, July 30, 2025
Looker (Google Cloud core) and Looker (original) changes
Breaking
Because of security concerns, text tiles no longer support the form and input Markdown elements.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where certain API calls would fail to time out and would instead run indefinitely. Note: This item was added August 18, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Query Concurrency System Activity Explore is now available. This Explore can help you identify periods of high load and investigate performance bottlenecks that are related to database connection limits. Note: This feature launch was delayed and is now available in Looker 25.14. This item was updated on August 13, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
For faster response time for queries in BigQuery, Looker will execute BigQuery queries by using jobCreationMode=JOB_CREATION_OPTIONAL . If BigQuery can return immediate results, it will run the query without creating a job, so the record in the Looker query history will have a BigQuery query ID instead of a BigQuery job ID. See the Understanding query performance metrics documentation page for more information about the BigQuery BI Engine metrics.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Oracle JDBC driver has been updated to version 19.25. This driver is used for connections to Oracle and Oracle ADWC . Note: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker could generate duplicate SQL table references if a PDT referenced a table directly as well as through a join. This feature now performs as expected.
Looker (Google Cloud core) only changes
Fixed
An issue has been fixed where the Looker Marketplace toggle was not being displayed in Looker core instances for users who were granted Admin permissions with an IAM role. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker didn't properly sanitize slash characters in git references that were used for remote dependencies. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where API users could view a list of users on a Looker instance, even if they didn't have the see_users permission. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where SQL Runner would display a blank page if a user changed the visualization type after pivoting on a dimension. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the System Activity Query Metrics Explore was not reliably populating with data. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where editing a merged query in an embedded session would open in a new tab. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker 25.12 contains the following accessibility improvements:
Improved contrast for exit buttons on dialogs
Improved contrast for checkbox borders
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where forecasting didn't work properly on fields that were based on JSON data. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where API users without the explore permission could access visualization templates. This feature now performs as expected.
Looker (Google Cloud core) only changes
Fixed
An issue has been fixed where SAML authentication could fail for a Looker (Google Cloud core) instance. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where pull requests could display a different user than the pull request's owner. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker could return a 500 error while retrieving dashboard details if the details contained non-UTF-8 characters. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the all_connections API call could ignore the fields parameter. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a map visualization would display drill links for fields that were hidden from the visualization. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Looker IDE now checks for subparameters in local and remote dependencies and displays a more informative error if the subparameters are missing. Local dependencies must be defined with a project subparameter, while remote dependencies require both a url subparameter and a ref subparameter.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where subtotals could be incorrectly formatted in PDF downloads when an HTML parameter was defined on the field and the "Expand tables to show all rows" option was enabled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some System Activity tables were missing the element_id field. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When an Explore is saved as a new dashboard, Looker will create advanced filter type dashboard filters, rather than drop-down type dashboard filters, for number type parameters.
Looker (original) only changes
Fixed
An issue has been fixed where installing multiple drivers for the same database type on a customer-hosted instance could cause Looker to display an error. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some users were unable to create or edit BigQuery OAuth connections. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a visualization template could fail to be displayed in the list of templates if the name contained certain unicode characters. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where exploring from a dashboard tile while editing a dashboard could result in a permissions error, even if the user had permission to view the Explore. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the row limit in an Explore could display a blank field when the row limit was set to 5,000. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where invalid query killing statements could cause unnecessarily verbose log outputs. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some queries to the internal database were unoptimized, affecting instance performance. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where fields could be sorted differently when a visualization was downloaded or scheduled as a PNG. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some PDT regeneration events were not tracked in System Activity. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the response headers from some API calls were not set by Looker. This feature now performs as expected.
June 30, 2025
Looker (Google Cloud core) only changes
Feature
The Fast Dev Mode Transition feature is now available for Looker (Google Cloud core). The Fast Dev Mode Transition feature improves the performance of Development Mode on your instance by loading LookML projects in read-only mode until a developer clicks the Create Developer Copy button for the project. Note: This item was added on July 8, 2025.
Looker (original) only changes
Feature
The Fast Dev Mode Transition feature is out of Labs and is now generally available. The Fast Dev Mode Transition feature improves the performance of Development Mode on your instance by loading LookML projects in read-only mode until a developer clicks the Create Developer Copy button for the project. Note: This item was added on July 8, 2025.
June 24, 2025
Looker (Google Cloud core) only changes
Feature
The following feature is generally available for Looker reports:
The Looker connector can now connect to a private IP (private services access) only Looker (Google Cloud core) instance or to a private IP (Private Service Connect) Looker (Google Cloud core) instance using the Looker instance ID .
June 11, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.10 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Tuesday, June 17, 2025
Expected Looker (original) final deployment and download available: Thursday, June 26, 2025
Expected Looker (Google Cloud core) deployment start: Monday, June 16, 2025
Expected Looker (Google Cloud core) final deployment: Monday, June 30, 2025
Looker (Google Cloud core) only changes
Feature
The Code Interpreter in Conversational Analytics is now available as an experimental feature . The Code Interpreter translates your natural language questions into Python code and executes that code to provide advanced analysis and visualizations. The Code Interpreter is disabled by default. Admins of Looker (Google Cloud core) instances can manage enablement for the Code Interpreter on the Gemini in Looker admin page . Note: This item was added on June 23, 2025 and edited on July 25, 2025 to correct the launch type.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The Embed SDK has been upgraded to release 2.0.0. While the 2.0.0 API is backwards-compatible with Embed SDK 1.8.x, the underlying implementation has changed for some functionality. SDK 1.8.x exported a number of classes. SDK 2.0.0 replaces these classes with interfaces that are marked as deprecated (alternative interfaces are identified). We recommend that applications use the interfaces that have an 'I' prefix (the interfaces that have prefixes are identical to the interfaces that don't have them). Applications that are upgraded to SDK 2.0.0 should continue to work and behave as they did previously. To take advantage of the API improvements, some refactoring will be required. The following major changes are included in Embed SDK 2.0.0:
Navigating between dashboards, Explores, and Looks no longer requires that an iframe be recreated. Instead, the loadDashboard , loadLook , loadExplore , and loadUrl methods can be used to navigate within the Looker iframe.
connect now returns a unified connection rather than a connection that is related only to a dashboard, a Look, or an Explore. The unified connection allows embedding applications to detect a user navigating inside the iframe.
Support for additional Looker embedded content has been added for Looker reports and query visualizations.
Note: This item was added on June 13, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
For period-over-period (PoP) measures, a new subparameter, value_to_date , is available. When a PoP measure is defined with value_to_date:yes , Looker will calculate the amount of time in the current timeframe at the time that the query is run and apply that amount of time when it calculates the values for previous periods.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Firebolt JDBC driver has been updated to version 3.5.0. This driver is used for connections to Firebolt . NOTE: This item was updated on September 10, 2025.
Looker (original) only changes
Feature
You can now embed Looker reports on Looker (original) instances when Looker reports and the Embed Looker reports Labs features are enabled for your instance. Looker reports are available in preview.
Looker (Google Cloud core) and Looker (original) changes
Feature
The new Content Guardrails admin panel lets Looker admins limit both the ability for users to add or execute merged results queries on dashboards and the use of the dashboard auto-refresh option. Limiting merged results queries and dashboard auto-refreshes can reduce the number of queries that are sent to the database and improve dashboard performance. Note: This item was added on June 12, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Teradata JDBC driver has been updated to version 20.00.00.45. This driver is used for connections to Teradata . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Vertica JDBC driver has been updated to version 24.2.0-1. This driver is used for connections to Vertica . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker Continuous Integration (CI) features let you run tests on your LookML project to deliver more reliable, efficient, and user-friendly data experiences. You can use the CI validators to catch issues with SQL, data test, content, and LookML before they hit production to verify your LookML and prevent query errors for your users. You can also configure the CI validators to run automatically when a pull request is submitted to your LookML repository. Note: This item was added on June 23, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The MS SQL JDBC driver has been updated to version 12.10.0. This driver is used for connections to Microsoft SQL Server 2008+, Microsoft SQL Server 2012+, Microsoft SQL Server 2016, Microsoft SQL Server 2017+ , Microsoft Azure SQL Database , and Microsoft Azure Synapse Analytics . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Athena driver has been updated to version 2.2.1. This driver is used for connections to Amazon Athena . Note : This item was added on August 18, 2025. NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Hive JDBC driver has been updated to version 4.0.1. This driver is used for connections to Apache Hive 2.3+ and Apache Hive 3.1.2+ , Apache Spark 3+ , Cloudera Impala 3.1+ . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Databricks JDBC driver has been upgraded to version 2.7.3. This driver is used for connections to Databricks . Note : This item was added on August 18, 2025. Note : This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where entering the value 12:00 in the Time field of an alert schedule dialog would input 00:00 instead.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where PDTs could fail to rebuild with the following error message: undefined method trace_id_hex . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the count table calculation function could return incorrect values if its inputs included a list with null values. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where assigning the user attribute
looker_internal_email_domain_allowlist on the SAML config page would return a 500 error. This user attribute is not designed to be assigned at the user level, so the option to assign it has been removed from the SAML config page.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML validator would return a 500 error if a LookML file contained a sum_distinct measure for a database that doesn't support sum_distinct measures. The LookML validator now returns a more descriptive error message.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Manage Access dialog on a folder could load slowly if the Looker instance has a large number of groups. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the API calls to run git connection tests would fail unless the user was in dev mode. These calls now work as expected whether the user is in production or development mode.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the PDT Override Service Account field was not available for connections that use OAuth credentials. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where selecting fields from the Session view in the System Activity User Explore could cause fanout. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where changes to PDT override settings would not be saved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Tile Actions kebab menu now includes the name of the dashboard tile in its aria-label value.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where filtering on a custom dimension that references a datetime type field could return the following error message: No matching signature . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the drill menu did not properly translate some entries when the locale was set to Swedish (sv_SE). This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where LDAP authentication could fail with the following error message: no implicit conversion of Hash into String . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
This release contains the following accessibility improvements:
Increased contrast ratio for graphic elements, including icon bullets
Improved contrast for download links and unemphasized text to comply with Web Content Accessibility Guidelines (WCAG) Level AA
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where drilling on a query with subtotals could display incorrect values. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where SDK API calls could return a 500 error if optional headers were not specified. The API calls now work as expected even if optional headers are not included.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where restarting the Looker instance during a folder sync could cause the instance to fail to start.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The OAuth Tenant ID field will no longer appear in connections for which it is not relevant. The only connection type that supports this field is Trino.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where drill downs wouldn't be displayed for a field if the first field value had null values. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where, previously, testing a new OAuth connection before saving would run connection tests on an empty connection. OAuth settings must now be saved before running connection tests. This feature now performs as expected.
June 09, 2025
Looker (original) only changes
Announcement
Gemini in Looker will be enabled by default for Looker (original) instances that meet at least one of the following criteria:
The Automated Gemini in Looker enablement and user management setting on the Settings page in the Looker Admin panel was previously enabled.
The instance is updated to Looker 25.6 or later after June 9, 2025.
Instances that are hosted in the EMEA region and those that are enrolled in Looker's Extended Support Release (ESR) program are exempt from automatic enablement.
Looker admins can still manage Gemini in Looker enablement manually on the Gemini in Looker page in the Admin panel.
Looker (original) only changes
Feature
When the Automated Gemini in Looker enablement and user management setting is enabled, the Gemini Default Users group
is created automatically for instances that use an open system configuration . The Gemini Default Users group is populated automatically with all existing users and any new users who are added to the instance.
May 20, 2025
VERSION_UNSPECIFIED
Feature
The following features have been added to Studio in Looker, which is available in preview:
Some Looker permissions now apply to Studio in Looker reports. See Overview of Studio in Looker permissions for more information.
Studio in Looker reports now support some download and export capabilities. See Download charts and reports for more information.
May 14, 2025
Looker (original) only changes
Announcement
Looker 25.8 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, May 19, 2025
Expected Looker (original) final deployment and download available: Thursday, May 29, 2025
Expected Looker (Google Cloud core) deployment start: Monday, May 19, 2025
Expected Looker (Google Cloud core) final deployment: Monday, June 2, 2025
Looker (original) only changes
Feature
The Code Interpreter in Conversational Analytics is now available as an experimental feature . The Code Interpreter translates your natural language questions into Python code and executes that code to provide advanced analysis and visualizations. The Code Interpreter is disabled by default. Admins of Looker (original) instances can manage enablement for the Code Interpreter on the Gemini in Looker admin page. (This release note was added on May 19, 2025 and was updated on July 25, 2025 to correct the launch type.)
Looker (original) only changes
Breaking
SSL host validation is now enabled by default. If any of your SSL certificates are invalid, certain Looker workflows may break.
Looker (original) only changes
Breaking
An issue has been fixed where HTML in a LookML dimension wasn't being applied to Y-axis labels. This feature now performs as expected.
Looker (original) only changes
Feature
You can now create connections using the Amazon Redshift 2.1+ or Amazon Redshift Serverless 2.1+ SQL dialect, both of which use the Redshift JDBC driver. Connections with the original Amazon Redshift SQL dialect option use the Postgres JDBC driver.
Looker (original) only changes
Feature
The sync_lookml_dashboard API endpoint now accepts an optional dashboard_ids parameter to specify a subset of dashboards to synchronize.
Looker (original) only changes
Feature
You can now select the JDBC driver version when you create or edit a connection.
Looker (original) only changes
Fixed
When you create a custom measure, suggestions are now displayed for tier filters.
Looker (original) only changes
Feature
The Presto JDBC driver version has been updated to 0.291. This driver is used for connections to PrestoDB . NOTE: This item was updated on September 10, 2025.
Looker (original) only changes
Feature
The gemini_in_looker permission can now be applied to selected models on the Looker instance. The Gemini role still applies the gemini_in_looker permission to all models on the Looker instance; however, if needed, Looker admins can manually restrict use of Gemini in Looker to specific models by creating and assigning a Looker role with gemini_in_looker permissions on limited models.
Looker (original) only changes
Fixed
An issue has been fixed where additional queries that were used for totals and pivots would not include context comments . These queries now include context comments, and this feature performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where some of the Project API endpoints wouldn't create a fresh dev mode copy of the LookML project files if no dev mode copy already existed. These endpoints now work as expected.
Looker (original) only changes
Fixed
An issue has been fixed where Elite System Activity data could be delayed. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where filtering on a pivoted field while Grid Layout by Row was enabled could return a server error. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where the BigQuery storage project ID could be set to a user attribute value, even though Looker doesn't support user attributes in this field. The user interface for the Connections page has been updated, and this feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where links in data tables couldn't be clicked. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where Looks could appear before dashboards in embedded folder navigation. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where duplicating a dashboard tile and editing it could cause the tile to load indefinitely. This feature now performs as expected.
Looker (Google Cloud core) only changes
Fixed
Previously, using Application Default Credentials (ADC) with a BigQuery connection caused Looker to incorrectly display the service account file upload button on the PDT Override panel; this button has now been removed and this feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where changes to the row limit and visualization configuration that were applied by custom visualizations were not saved in the System Activity query record. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where navigating between Looks could cause the System Activity Explore to correlate an incorrect Look ID with a query ID. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where blank measure filters could prevent Looker from correctly displaying subtotals in table visualizations . This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where a scatterplot visualization could crash if there were less than three rows of data and clustering was enabled. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where scheduled reports could include limited columns even if All Results was enabled for the schedule. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where all the folders in the IDE would collapse when a user toggled a folder on a new session. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where running queries would not be canceled if a user navigated away from a dashboard, for example, by clicking an Explore from here link. This feature now performs as expected.
May 13, 2025
Looker (Google Cloud core) only changes
Feature
You can now create Looker (Google Cloud core) instances that use Private Service Connect with a hybrid network configuration . Instances that have this type of configuration will allow secure inbound access through a web URL and will connect to external services through a private network.
May 09, 2025
Looker (Google Cloud core) and Looker (original) changes
Change
If the Force mobile authentication setting is enabled, mobile users will be logged out after 60 minutes, rather than 30 minutes, of inactivity.
May 07, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The following features have been added to Studio in Looker, which is available in preview:
You can now create reports using the responsive layout .
You can now use variables, including parameters and query result variables . However, the ability to modify parameters using the report link is not supported in Studio in Looker.
April 29, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
For Looker connections with Google BigQuery, Looker admins can now specify a Temp Project that is used to write PDTs to your database and a PDT Override Billing Project ID that is used for billing for PDT build and maintenance queries.
Looker (Google Cloud core) only changes
Feature
In addition to automated 24-hour backups, Looker (Google Cloud core) now supports customer-initiated backups and self-service restore .
Looker (Google Cloud core) and Looker (original) changes
Feature
For dialects that support period-over-period measures , Looker developers can create a measure of type: period_over_period to enable period-over-period analysis in the corresponding Looker Explores. See Period-over-period measures in Looker for more information.
April 28, 2025
Looker (Google Cloud core) only changes
Feature
The new gcp.restrictTLSCipherSuites organization policy constraint can be applied to Looker (Google Cloud core) instances that use a public IP networking configuration. See the Restrict TLS cipher suites on a Looker (Google Cloud core) instance documentation page for more information.
April 24, 2025
Looker (original) only changes
Announcement
After May 23, 2025, Gemini in Looker will be enabled by default for Looker (original) instances outside of the EMEA region .
Looker admins can opt out of automatic enablement by disabling the Automated Gemini in Looker enablement and user management setting on the Settings page in the Looker Admin panel, now available for Looker (original) instances on Looker 25.6.
For instances outside of the EMEA region that are slated to update to Looker 25.6 after May 23, 2025, Gemini in Looker will be enabled automatically, and Looker admins must disable Gemini in Looker manually.
Note: This item was updated on April 29, 2025.
April 22, 2025
Looker (Google Cloud core) and Looker (original) changes
Deprecated
The Looker Mobile (Legacy) application will be deprecated on March 1, 2026. Use the Looker application instead.
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) now supports Google group mirroring when using OAuth authentication.
April 09, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.6 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, April 14, 2025
Expected Looker (original) final deployment and download available: Thursday, April 24, 2025
Expected Looker (Google Cloud core) deployment start: Monday, April 14, 2025
Expected Looker (Google Cloud core) final deployment: Monday, April 28, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The Dremio JDBC driver has been updated from 4.5.0 to 25.2.0. This driver is used for connections to Dremio and Dremio 11+ . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Druid JDBC driver has been updated from 1.22.0 to 1.25.0. This driver is used for connections to Apache Druid, Apache Druid 0.13+, and Apache Druid 0.18+ . NOTE: This item was updated on September 10, 2025.
Looker (original) only changes
Feature
A new Labs feature, Fast Dev Mode Transition , improves the performance of Development Mode on your instance by loading LookML projects in read-only mode until a developer clicks the Create Developer Copy button for the project.
Looker (original) only changes
Feature
The Content Validator scoping feature is now generally available for customer-hosted Looker deployments (the feature is already available for Looker-hosted deployments). This feature lets developers scope the validation to specific LookML projects and a specific content folder (including its subfolders, if any). This can improve the performance of the Content Validator.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Trino JDBC driver has been updated from 402 to 468. This driver is used for connections to Trino . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Athena JDBC driver has been updated from 2.0.35.1000 to 2.1.5.1000. This driver is used for connections to Amazon Athena . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) only changes
Feature
The New Database Connection Setup feature is now generally available. This feature updates the Add/Edit Connection page with a modernized UI, enhanced validation, connection testing capabilities, and a comprehensive configuration summary. If you want to revert to the legacy connections workflow , you can enable the Use Legacy Connections Page legacy toggle.
Looker (Google Cloud core) and Looker (original) changes
Feature
The classification for the version , versions , and page_events API endpoints have been changed from "Admin" to "N/A" in System Activity queries. These endpoints no longer count toward Admin API endpoint quotas.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports key-pair authentication for Snowflake connections. Note: This feature is available only in Looker 25.6.17 and later.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Exasol JDBC driver has been updated from 6.2.3 to 24.2.1. This driver is used for connections to Exasol . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Spark Databricks JDBC driver has been updated from 2.6.34 to 2.7.1. This driver is used for connections to Databricks . NOTE: This item was updated on September 10, 2025.
Looker (original) only changes
Feature
The New Database Connection Setup feature is now out of Labs and generally available. This feature updates the Add/Edit Connection page with a modernized UI, enhanced validation, connection testing capabilities, and a comprehensive configuration summary. If you want to revert to the legacy connections workflow , you can enable the Use Legacy Connections Page legacy toggle.
Looker (Google Cloud core) and Looker (original) changes
Feature
In the Chart Config Editor , you can save a configuration as a template so that you can reuse it in other visualizations or share it as a starting point for other users.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Denodo8 JDBC driver has been updated from 8.8.0 to 9.1.3. This driver is used for connections to Denodo 8 and Denodo 9 . NOTE: This item was updated on September 10, 2025.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where certain LookML validation errors could prevent Looker from successfully retrieving a list of models on the instance. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker would return a 500 error when it displayed a visualization with no results when the Grid Layout was set to By Row. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an embedded folder could still be loading content but not display a loading indicator. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
If a user doesn't have an email address associated with their Looker account, the schedule dialog will not display the Send Test button.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When uploading a JSON database authentication file to a connection, Looker now requires the file to be configured with the service_account type.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an Action Hub query could finish with a complete status even if the query failed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an empty manifest file could cause the LookML Validator to display an error. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue has been fixed where embed users could save Looks to shared folders that they didn't have access to if the New Explore & Look Saving Labs feature was enabled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where sorting on a table visualization could fail to retrieve cached results, even if cached results were available for the query. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The file browser in the Looker IDE can now display files nested in 21 or fewer folders. The previous limit was 6.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where changing the subtotal column sort on dashboard tiles wouldn't properly update the sort order. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a dashboard tile could appear to load indefinitely if a user didn't have permission to the model. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where schedules to SFTP destinations could time out because of long SSH key generation times. This feature now performs as expected.
April 07, 2025
Looker (Google Cloud core) and Looker (original) changes
Change
Looker has released version 1.4.2 of the Looker–Power BI Connector . See the Looker–Power BI Connector change log for details about version 1.4.2.
April 01, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The following features have been added to Studio in Looker, which is available in preview:
You can connect to Google BigQuery and Google Sheets using Owner's Credentials .
Localized number formatting is supported.
March 24, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The following features have been added to Studio in Looker, which is available in preview:
The Looker connector can now connect to a private IP (private services access) only Looker (Google Cloud core) instance or to a private IP (Private Service Connect) Looker (Google Cloud core) instance using the Looker instance ID .
The Looker connector now supports Looker export, download, and scheduling permissions .
Looker System Activity now includes usage, historical, and performance information about Looker reports .
You can now enable Studio in Looker on Looker instances that use Google OAuth authentication.
The Looker connector now supports some calculated field functions.
March 17, 2025
Looker (Google Cloud core) and Looker (original) changes
Feature
The following features have been added to Studio in Looker, which is available in preview:
If Studio in Looker is disabled and then re-enabled, reports that had been saved within the previous 30 days will still be available. Recovered reports may appear in the Recovered reports folder after an admin re-enables Studio in Looker.
The Looker Search function will include reports.
The Looker
Trash folder will now contain deleted reports, and Looker admins can restore previously deleted reports.
The ability to set an instance or a group locale for Studio in Looker.
Looker admins can manage the data source connectors that are available in Studio in Looker.
Note: This item was updated on March 19, 2025.
March 12, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.4 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, March 17, 2025
Expected Looker (original) final deployment and download available: Thursday, March 27, 2025
Expected Looker (Google Cloud core) deployment start: Monday, March 17, 2025
Expected Looker (Google Cloud core) final deployment: Monday, March 31, 2025
Looker (Google Cloud core) and Looker (original) changes
Breaking
The gemini_in_looker permission, available only in the Looker Gemini role, is now being enforced at the Looker instance level. This permission is required for any Looker user who will be using Gemini assistance to perform the following tasks:
Write LookML
Create custom Looker visualizations
Query data with Conversational Analytics
Looker (Google Cloud core) and Looker (original) changes
Breaking
Use of Conversational Analytics in Looker no longer requires Studio in Looker to be enabled for the Looker instance. Gemini in Looker enablement is still required. Admins must disable and then re-enable Gemini in Looker to access Conversational Analytics. We recommend that customers participating in Looker's Extended support release program update to Looker 25.6 to use Conversational Analytics. Note : This item was added on March 18, 2025.
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) instances now support the Admin via IAM Looker role . This role has full administrative privileges within a Looker (Google Cloud core) instance, but it's managed exclusively through Identity and Access Management (IAM), providing a direct sync between a principal's Looker Admin IAM role and admin privileges within the instance.
Looker (Google Cloud core) only changes
Feature
The Content Validator scoping feature is now generally available. This feature allows developers to scope the validation to specific LookML projects and a specific content folder (including its subfolders, if any). This can improve the performance of the Content Validator.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports dynamic annotations . Use the annotationsSource and annotationsTarget parameters to use data from a field as an annotation on a visualization.
Looker (original) only changes
Feature
The Content Validator scoping feature is now out of Labs and generally available for Looker-hosted instances. This feature allows developers to scope the validation to specific LookML projects and a specific content folder (including its subfolders, if any). This can improve the performance of the Content Validator. Update April 8, 2025 : This feature is not supported for customer-hosted Looker deployments in Looker 25.4, and will instead be available for customer-hosted Looker deployments in Looker 25.6.
Looker (original) only changes
Feature
The New Database Connection Setup feature is now out of Labs and generally available. This feature updates the Add/Edit Connection page with a modernized UI, enhanced validation, connection testing capabilities, and a comprehensive configuration summary. If you want to revert to the legacy connections workflow , you can enable the Use Legacy Connections Page legacy toggle. Note: This item was updated on March 17, 2025. Update April 4, 2025: This feature is still in Labs in Looker 25.4, and will be generally available in Looker 25.6.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Open SQL Interface feature now supports Explores that use the conditionally_filters parameter. Previously disabled Explores are now enabled.
Looker (original) only changes
Feature
A new Labs feature, Fast Dev Mode Transition , improves the performance of Development Mode on your instance by loading LookML projects in read-only mode until a developer clicks the Create Developer Copy button for the project. Update April 4, 2025: This Labs feature is not available in Looker 25.4, and will instead be available in Looker 25.6.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports key-pair authentication for Snowflake connections. Update May 5, 2025 : This feature is not available in Looker 25.4, and will instead be available in Looker 25.6.
Looker (Google Cloud core) only changes
Feature
The Add/Edit Connection page is updated with a modernized UI, enhanced validation, connection testing capabilities, and a comprehensive configuration summary. Update April 8, 2025 : This feature is not available in Looker 25.4, and will instead be available in Looker 25.6.
Looker (Google Cloud core) and Looker (original) changes
Feature
By default, Looker connects to your database using the latest version of the JDBC driver for your database dialect. If your selected database dialect has more than one JDBC driver version that is supported by Looker, you can now select an earlier version of the JDBC driver for your dialect. See the Connecting Looker to your database documentation page for more information. Update April 8, 2025 : This feature is not available in Looker 25.4, and will instead be available in Looker 25.6.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the text for the Query Tracker was misaligned in German. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where dashboard filters could not be saved if two or more filters shared a name. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some schedules did not appear in the User Schedules page. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where using the legacy dashboards-next URL path for an embedded dashboard could cause a blank screen. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When you change the sorting type or direction for folder contents, Looker now brings you to the first page of results. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where selecting "Sort by Favorited Date" in a folder would sort incorrectly. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Liquid references to parameters required view scoping even if the parameter was defined in the same view file. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where circular references in Liquid could cause the LookML validator to crash. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Explore page could crash while using Google Chrome. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an unspecified 'hidden' attribute could cause the LookML validator to crash if localization was enabled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Snowflake connection certificates in the .p12 file format were not accepted. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where users with different "bqserviceaccount" user attribute values could access the same cached results. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where deployed LookML could still appear on the Uncommitted Changes pages. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the PDT Activity Dashboard would only include one model that the PDT is included in. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where downloading a dashboard with a radial chart with no data as a PDF in the French locale could cause a rendering failure. This feature now performs as expected.
February 24, 2025
Looker (original) only changes
Feature
The following Gemini in Looker features are available in Preview for instances on Looker 25.2 and later:
Create custom Looker visualizations : The Visualization Assistant helps you generate custom formatting options for Looker visualizations by using natural language.
Generate LookML : Use Gemini assistance to generate LookML code suggestions in response to natural language prompts. In the Looker IDE , click the Help me code icon to get Gemini assistance to create dimensions, dimension groups, and measures in your LookML project.
To learn more about how to activate these features, see Admin settings – Gemini in Looker .
Looker (original) only changes
Feature
Gemini in Looker is now available in Preview for Looker (original) instances on Looker 25.0 and later. Looker admins can enable Gemini in Looker in the Looker Admin panel. We recommend that customers participating in Looker's Extended support release program update to Looker 25.6 to use Conversational Analytics. (This release note was added on April 29, 2025 to clarify the release launch of Gemini in Looker for Looker (original) instances.)
Looker (Google Cloud core) and Looker (original) changes
Feature
The following Gemini in Looker feature is available in Preview :
Conversational Analytics : Query your Looker Explore data in natural language.
Conversational Analytics is available for Looker (original) and Looker (Google Cloud core) instances on Looker 25.0 and later that have Studio in Looker , Gemini in Looker , and the Gemini in Looker Trusted Tester features setting enabled.
We recommend that customers participating in Looker's Extended support release program update to Looker 25.6 to use Conversational Analytics.
February 12, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.2 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Tuesday, February 18, 2025
Expected Looker (original) final deployment and download available: Thursday, February 27, 2025
Expected Looker (Google Cloud core) deployment start: Tuesday, February 18, 2025
Expected Looker (Google Cloud core) final deployment: Tuesday, March 4, 2025
Looker (Google Cloud core) and Looker (original) changes
Breaking
Looker now prevents developers from creating new models named system__activity .
Looker (Google Cloud core) and Looker (original) changes
Breaking
The Search Content Summaries API endpoint now returns more secure results when a closed system is enabled for an instance. The target_user_id value must be a user who is visible to the user who is calling the endpoint, and the target_group_id value must be a group that the user is a part of.
Looker (Google Cloud core) and Looker (original) changes
Feature
Aggregate tables now support the publish_as_db_view parameter for database dialects that support PDT stable database views . When an aggregate table is configured with publish_as_db_view: yes , Looker creates a stable database view on your database for the aggregate table to enable querying the table outside of Looker. NOTE : This item was added on March 4, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports the median function in the formatters.select parameter.
Looker (Google Cloud core) and Looker (original) changes
Feature
The manage_schedules permission is now generally available. This permission lets users reassign and delete schedules on the Schedules page for the models that they have access to.
Looker (Google Cloud core) and Looker (original) changes
Feature
The manage_modelsets_restricted permission is now generally available. This permission lets users add or remove models from specified model sets.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where exploring from a merge query on an embedded dashboard could lead to a blank page. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where setting a long external_group_id when creating an embed user caused Looker to display a vague error. The recommended external_group_id length is now documented as 81 characters, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Marketplace auto-update and auto-install processes could cause other parts of Looker to take longer to respond. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where embed users were unable to see certain shared folders. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where certain custom visualization configurations could cause rendered PDF downloads to be blank. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML Validator could surface outdated LookML errors that were related to extensions. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an invalid conditional formatting string could cause the Explore page to crash. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where searching terms with multiple words in the field picker would match each word separately. The search now correctly matches multi-word phrases, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where dashboard filters could prevent users from using commas to add multiple filter conditions. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where reordering columns in an Explore could cause hidden table calculations to be removed from the table. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where tables could be cut off on dashboard PDFs that included multiple pages. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where creating a visualization with no unpivoted dimensions could cause Looker to display a vague error message for some chart types. Looker now informs the user that at least one unpivoted dimension is required for the visualization, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where actions whose connection tests failed would continue to run excessive tests in the background. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where using a Snowflake or Postgres connection could trigger the following error message: Driver cannot be initialized: can't modify frozen String . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where adding multiple dashboard filters to the same date field could cause Looker to remove filters from the dashboard. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where navigating to a Look from another Look could cause incorrect System Activity records. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where encoded embed domains could not be used with the Embed SDK. Looker can now decode URLs in the embed_domain parameter, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where downloading a dashboard as a PDF with multiple pages could cause some content to be cut off. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker did not correctly apply theme text colors to axis labels on timeline visualizations. This feature now performs as expected.
January 16, 2025
Looker (Google Cloud core) only changes
Feature
You can now provision, configure, and manage non-production instances of the Standard, Enterprise, and Embed Looker (Google Cloud core) editions for staging and testing. The functionalities that are available for each non-production edition are the same as the functionalities that are available for the production editions. Non-production Looker instances also can have the same network connection types as production instances.
January 14, 2025
Looker (Google Cloud core) only changes
Announcement
We're excited to announce a new series of quickstarts in the official Looker (Google Cloud core) documentation. This set of quickstarts walks users through all the procedures they need to get up and running with Looker. The quickstarts use the sample LookML project that is automatically configured on Looker (Google Cloud core) instances so that users can use Looker immediately.
Here are the links to the new quickstarts (and overview):
Looker (Google Cloud core) quickstart overview
Create a database connection for a public IP instance
Generate a model from sample data
Model your data in LookML
Build a Look with sample data
Build a dashboard with sample data
These quickstarts were inspired by the Looker Basics for New Customers webinar , which is free and available to all.
January 08, 2025
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 25.0 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, January 20, 2025
Expected Looker (original) final deployment and download available: Thursday, January 30, 2025
Expected Looker (Google Cloud core) deployment start: Tuesday, January 21, 2025
Expected Looker (Google Cloud core) final deployment: Tuesday, February 4, 2025
Note: All dates were updated on January 16, 2025. The introductory sentence was updated on January 29, 2025.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Extensions can no longer be accessed outside of the sandboxed iframe.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The Liquid divided_by filter now performs floating point number division instead of integer division when the inputs are integers. For example, 1 | divided_by: 2 will now return 0.5 instead of 0 .
Looker (Google Cloud core) and Looker (original) changes
Breaking
The LookML Validator no longer supports the Liquid variables base_view , explore , model , and view without an underscore in the prefix. The variables _base_view , _explore , _model , and _view are supported.
Looker (Google Cloud core) and Looker (original) changes
Breaking
An issue has been fixed where Looker failed to include some required fields in queries. Queries that use fields with Liquid references to other fields may now include additional fields.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Custom visualizations can no longer be accessed outside of the sandboxed iframe.
Looker (Google Cloud core) and Looker (original) changes
Feature
The manage_spaces permission can now be granted to embed users. Note: This item was updated on January 15, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
Local Project Import is now removed from Looker Labs and is now a generally available feature on both Looker (Google Cloud core) and Looker (original). Note: This item was updated on January 27, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker–Power BI Connector now provides the option to show or display hidden fields when connecting to a Looker Explore.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports conditional data formatters , which let you compare data values to other measure values.
Looker (original) only changes
Feature
A new Labs feature, Content Validator Scoping, allows developers to scope a Content Validator job to a specific content folder and specific LookML projects. Note: This Labs feature will be available on Looker instances on February 4, 2025. This item was updated on January 27, 2025.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Redshift driver now configures TCP keep-alives to make long-running queries more reliable.
Looker (Google Cloud core) only changes
Feature
Google Cloud Core instances now support the Looker Mobile app . To get started, enable the mobile app on your Looker instance.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Open SQL Interface feature now supports Explores that use the conditionally_filters parameter. Previously disabled Explores are now enabled.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports comparing data values to the mean value for a series.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Overwriting an existing user-defined dashboard using the import_dashboard_from_lookml endpoint no longer removes the existing dashboard from boards or favorites.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where item charts were unable to recognize custom measures as measures.
Looker (Google Cloud core) only changes
Fixed
An issue has been fixed where users could not log in to Google Cloud Core instances using private embed when Google Auth was enabled.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the collapse icon in dashboard tile notes could be displayed in rendered PDFs.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where setting the dashboard auto-refresh interval to 0 seconds could cause the dashboard to disappear from folders.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the search bar in the embed navigation sidebar could be cut off.
Looker (Google Cloud core) only changes
Fixed
An issue has been fixed where Google Cloud MySQL and PostgreSQL dialects incorrectly reported that they did not support Application Default Credentials.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where malformed legends or titles could cause an entire PDF download to fail.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When the Labs feature New Explore & Look Saving is enabled, an embed user who does not have permissions to see the Shared folder will no longer be able to see the Shared folder. ( Note: This information was updated on January 10, 2025.)
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where rendered jobs could become indefinitely queued if they were created while a cluster node was starting up.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where certain errors in the Chart Config Editor would not be displayed until query runtime.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML Validator could fail to catch circular references in Liquid.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Reset All Column Widths button didn't work as expected in drill windows.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a dashboard filter could get truncated if its location was set to right in a LookML dashboard.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where deleting a board opened a possibility for HTML injection.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where unnecessary data was included in the dashboard:tile:explore event for embedded dashboards.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Chart Config Editor could incorrectly match strings with spaces.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where date filters and map visualizations did not reflect the locale setting.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a locale value of fr would resolve to fr-CA instead of fr-FR , leading to incorrectly translated text.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some scheduled jobs could fail without sending a failure email to the schedule owner.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where dashboard element IDs for dashboard elements on LookML dashboards were not consistently displayed in System Activity queries.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The links to the API Explorer installation guides on the Admin API page have been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the file explorer search bar could be cut off when a tile was saved to a dashboard.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Git Actions and Advanced Deploy tabs could be displayed on projects where they were not enabled.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where using the Update Project API endpoint could return a 500 error.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Chart Config Editor could render stale query data after changes were made to an Explore.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When you're setting up a project in Looker using GitLab, the links to GitLab's SSH key settings will be updated.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a user could sudo as another user and use their OAuth token to connect to a database.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Embed theme colors now correctly apply to drop-down menus in Explores.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where disabling an action might not have disabled all schedules that used the action.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The list of Persistent Derived Tables shown under Databases is now filtered to include only PDTs for connections where the viewer has the see_pdts permissions on an associated model.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The unstyled, transparent, and gray table themes now correctly apply in PDF
downloads when the Expand tables to show all rows option is selected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where merge queries could not be added when totals were enabled.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where URL parameters could be lost on page load for dashboards with merge query tiles.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an exact date filter could prevent Looker from optimizing an aggregate table.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where non-ASCII characters in filenames could cause Git errors.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where date filters could switch to is in the past when selected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
LookML dashboards that use a static layout now render a PDF with the correct height.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML Validator would return a 500 error if a dimension referenced a measure in the required_fields parameter.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where toggling between settings on the Edit Actions page would not save user input.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where incorrect dashboard LookML could cause the IDE to fail to display the project.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where queries would fail after a dashboard was edited and rerun with different filter values without the page being refreshed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where incremental PDT builds with multiple SQL statements could partially succeed. Now, if one statement fails, the build fails.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Get LookML endpoint could fail to return the list of Explores if certain localization settings were enabled.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Invalid hex codes now resolve to a default black color when data from a dashboard tile is downloaded as an Excel spreadsheet with visualization options applied.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The ability to kill BigQuery queries from Looker has been reintroduced.
Looker (Google Cloud core) and Looker (original) changes
Change
The Looker–Power BI Connector is now deployed in the Microsoft PowerBI Service. This means that the Power BI Service can now connect to data from a Looker Explore without setting up an on-premises gateway and without having to configure folder permissions. (For Power BI Desktop, you still need to perform a custom installation, as described in the Looker–Power BI Connector documentation.) Note: This item was added on January 16, 2025.
December 06, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
Starting on December 9, 2024, default permissions for OAuth authentication to BigQuery connections are limited to read-only for Looker instances on Looker 24.20+.
On March 1, 2025, Looker will sign out any users with read and write scopes from all corresponding BigQuery connections. This will cause any schedules dependent on these connections to fail. Each of these users will need to reauthorize their OAuth connection credentials in order to ensure uninterrupted schedule delivery. For more information, see the Restricting OAuth scope to read-only for Google BigQuery connections article.
November 14, 2024
Looker (Google Cloud core) only changes
Feature
You can now use the Google Cloud console to create a Looker (Google Cloud core) Private Service Connect instance . The console also includes additional options to edit Looker (Google Cloud core) Private Service Connect instance settings .
November 07, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.20 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, November 11, 2024
Expected Looker (original) final deployment and download available: Thursday, November 21, 2024
Expected Looker (Google Cloud core) deployment start: Thursday, November 7, 2024
Expected Looker (Google Cloud core) final deployment: Thursday, November 14, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
In the Looker application API, for methods that include a query_id field or, in the case of Query APIs, an id field, the query_id and id fields no longer accept a numeric value and now require a query slug value. This change will be released in phases:
Looker 24.20: December 4, 2024 for Americas Early (Note: This information was updated on November 12, 2024.)
Looker 25.0: January 27, 2025 for Americas Mid (Note: This information was updated on January 6, 2025.)
Looker 25.2: March 3 for General Availability (GA) (Note: This information was updated on January 6, 2025.)
Looker (original) only changes
Breaking
Upon upgrade to Looker 24.20, support access will be disabled on Looker (original) instances. To enable it, set a duration and a support access role on the Support Access page of the Admin panel.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Users no longer need the download_without_limit permission to select the All Results option when they schedule Looks and dashboards.
Looker (original) only changes
Feature
Google Cloud Technical Support access has updated duration settings of 0 to 48 hours. Admins may choose to grant all Support users either a Support Basic Editor role or a Support Advanced Editor role.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker has released version 1.4.0 of the Looker–Power BI Connector . See the Looker–Power BI Connector change log for details about the version 1.4.0.
Note : This item was added on November 11, 2024.
Looker (original) only changes
Feature
A new Labs feature is available, New Database Connection Setup. When enabled, this feature updates the Add/Edit Connection page with a modernized UI, enhanced validation and connection testing capabilities, and a comprehensive configuration summary.
Looker (original) only changes
Feature
Looker (original) deployments can now use the Redshift 2.1.0.30 driver.
Looker (original) only changes
Feature
A new legacy feature is available, Use Legacy Project Creation Page . When this feature is enabled, it hides the Create a Model page and displays the deprecated New Project page.
Looker (Google Cloud core) and Looker (original) changes
Feature
With Connected Sheets for Looker , pivot tables can now pull up to 100,000 rows from a Looker Explore (increased from the previous limit of 30,000). See the Looker & Looker Studio Community for the announcement. Note : This information was added on December 11, 2024.
Looker (Google Cloud core) and Looker (original) changes
Feature
The New Project page in Looker has been replaced with the Create a Model page . However, you can still access the New Project page if you are using a Looker (original) instance and your Looker admin has enabled the Use Legacy Project Creation Page legacy feature or through the informational banner at the top of the Create a Model page.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports creating an Item visualization.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports creating a Dependency Wheel visualization.
Looker (original) only changes
Feature
A new Labs feature is available, Tiered Support Access , which defaults to enabled. When this feature is disabled, Looker uses the legacy version of support access.
Looker (Google Cloud core) only changes
Feature
Google Cloud Technical Support access is now available for Looker (Google Cloud core) instances. Update: This feature will become available to customers in January 2025. This item was updated on December 3, 2024.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where a locale value of fr would fall back to fr-CA instead of fr-FR , which was causing text to be translated incorrectly. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Actions page could fail to reflect recently saved settings. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The PDF and PNG rendering software has been upgraded to the latest stable version.
Looker (Google Cloud core) only changes
Fixed
An issue has been fixed where logging in to an instance using IP Allowlist could take a long time. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML IDE did not persist line wrap settings. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where killing queries on BigQuery Standard SQL could be unnecessarily expensive. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where selecting the word cloud visualization could cause Looker to display a blank page. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where downloading a dashboard tile with an invalid hex color code as an Excel spreadsheet could cause the download to fail. Looker now applies a default font color instead.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where conditional formatting could fail to apply to total rows if the value was zero. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where progress bars in single value visualizations could disappear when the visualization was resized. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where editing a model set could take a long time to load. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML Validator would not display an error message if the convert_tz parameter was used in an invalid context. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Tooltips have been added for truncated progress values in single value visualizations.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where special characters (such as < and > ) in pivoted dimension values could cause Looker to incorrectly truncate legend labels. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where progress values in single value visualizations were unnecessarily truncated. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where invalid "set" or "when" LookML fields could cause the LookML Validator to fail with a 500 error. The LookML Validator now displays a more informative error message.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where relative date filters could misinterpret numbers with more than three digits (such as "in the last 1000 minutes") as dates. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where visualizations that were created with the Chart Config Editor could fail to be displayed in an embedded context. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where certain System Activity queries could time out. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where modifying dashboard filters after deleting a tile could cause Looker to display an error. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where location type fields could not be used in custom filter expressions. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Sankey charts could ignore series values if they matched other series values.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker could generate datagroup names with dashes even though dashes aren't allowed in datagroup names. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where renaming a project using a bare repository could prevent deploying to production for that project. This feature now performs as expected.
October 09, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.18 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, October 14, 2024
Expected Looker (original) final deployment and download available: Thursday, October 24, 2024
Expected Looker (Google Cloud core) deployment start: Monday, October 14, 2024
Expected Looker (Google Cloud core) final deployment: Monday, October 28, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
Note: As of October 17, 2024, this feature has been disabled to resolve an issue. When the feature is available, this release note will be updated. In Looker application API methods that include a query_id field, or, in the case of Query APIs, an id field, the query_id and id fields no longer accept a numeric value and now require a query slug value.
Looker (Google Cloud core) and Looker (original) changes
Breaking
As of Looker 24.18, Google Maps is the only visualization engine for all map visualizations. The Legacy Maps chart type has been removed from Looker. The Allow Legacy Maps Legacy feature has been removed. Please reach out to Looker Support if you encounter any issues.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The LookML validator will now return an error if an Explore name contains the % character. The % character will also be highlighted as an invalid character for object names in the Looker IDE.
Looker (original) only changes
Breaking
The Dashboard in Drill Menus Looker Labs feature has been removed. Use the LookML link parameter instead.
Looker (original) only changes
Breaking
The Propose to switch to google map if mapbox fails within the dashboard Looker Labs feature has been removed. All map visualizations are now rendered with Google Maps.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Studio in Looker feature is now available to preview for most Looker-hosted and Looker (Google Cloud core) instances. This opt-in feature lets you create, view, and edit Looker Studio reports in your Looker instance, including both governed and ad hoc data. You can share and manage your reports in Looker folders and see your recent reports and the reports that you have marked as favorites from the Looker Home page.
For more information, see the Studio in Looker Public Preview documentation:
Enabling and disabling Studio in Looker
Using Studio in Looker
Move, share, and copy reports
Feature availability in Studio in Looker
Troubleshooting Studio in Looker errors
Both Looker (Google Cloud core) customers and Looker (original) customers who use Google OAuth for authentication must sign up for the preview using the Sign-up for Looker Cloud Core form . Looker (Google Cloud core) customers who use Google OAuth authentication only need to submit the form once.
Looker (original) customers who use authentication methods other than Google OAuth do not need to submit the sign-up form.
Note : This item was updated on October 10, 2024 to include the list of Public Preview documents. Update October 15, 2024: This item was updated to clarify which customers are required to submit the sign-up form.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now lets you change the data label color.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports a {log} variable, which returns all available data values for an attribute. We recommend that you use this feature only while building and testing visualizations, as it can affect visualization performance.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Home page now displays updated Favorites and Recently Viewed sections.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Explore query tracker is now generally available. The query tracker includes a progress bar that appears in the Explore UI when a query is running and that tracks the phases of the query. The GA release includes a new sidebar with a detailed breakdown of times for each query stage as well as a new System Activity dashboard for query performance that enables deeper exploration. Note : This item was added to the release notes on October 10, 2024.
Looker (Google Cloud core) and Looker (original) changes
Feature
Improved search now returns more complete results for folders and Explores.
Looker (Google Cloud core) only changes
Feature
You can use the BigQuery Quickstart connection to create a default BigQuery connection that can leverage Application Default Credentials.
Looker (Google Cloud core) only changes
Feature
Cloud Audit Log is now generally available for Looker (Google Cloud Core) instances.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, interacting with chart legends could impact visualization performance. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where heatmaps would not render data when switching from a legacy map to a Google Maps visualization. This feature now performs as expected. Note : As of Looker 24.18, Google Maps is the only visualization engine for all map visualizations.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker now loads projects faster when a user first enters dev mode for a project.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Get Async Query Results API now returns a string rather than a QueryTask object.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The filters tab in the Save to Dashboard dialog in an Explore now scrolls when there are many filters present.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, drilling on values with ampersands would return incomplete results. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When a field is referenced in a SQL field that does not allow field references, such as sql_table_name , the LookML validator message that is returned is now more descriptive.
Looker (Google Cloud core) only changes
Fixed
The principal_subject attribute in the Cloud audit logs now includes the Looker user ID.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue that was preventing users from downloading or scheduling dashboards without any tiles has been resolved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the model_fieldname_suggestions API failed to generate suggestions when a suggest_explore and suggest_dimension were defined. This feature now performs as expected.
September 24, 2024
Looker (Google Cloud core) only changes
Feature
The following Gemini in Looker features are available in Public Preview :
Create custom Looker visualizations : The Visualization Assistant helps you generate custom formatting options for Looker visualizations by using natural language.
Generate LookML : Use Gemini assistance to generate LookML code suggestions in response to natural language prompts. In the Looker IDE , click the Help me code icon to get Gemini assistance to create dimensions, dimension groups, and measures in your LookML project.
To learn more about how to activate these features, see Administer Gemini on your Looker (Google Cloud core) instance .
September 11, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Beginning in Looker 24.18, the October 2024 Looker release, Google Maps will be the only visualization engine for all map visualizations. The Legacy Maps chart type will be removed. Please go to the Legacy features page in the Admin panel and disable "Allow legacy maps"; if you encounter any issues, contact Looker Support.
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.16 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, September 16, 2024
Expected Looker (original) final deployment and download available: Thursday, September 26, 2024
Expected Looker (Google Cloud core) deployment start: Monday, September 16, 2024
Expected Looker (Google Cloud core) final deployment: Monday, September 30, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
The LookML Validator now checks for incompatible types in Liquid comparison expressions and, if it finds them, returns an error.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker IDE now supports text line wrapping in the IDE editor. Line wrapping is now the default behavior. You can turn off line wrap mode in the new IDE Settings page in the Looker IDE. Note: Item added to release notes on September 16, 2024.
Looker (original) only changes
Feature
A new Labs feature, Delegate Model Set Management, lets admins grant a new permission, manage_modelsets_restricted . This permission grants users permissions that are similar to manage_models , but only for model sets to which the users have access.
Looker (Google Cloud core) and Looker (original) changes
Feature
You can change the width of the panels in the Looker IDE, both the feature panel (which contains File Browser, Object Browser, and Git Actions) and the side panel (which contains Project Health, Quick Help, and Metadata). The size of the side panels is persisted across logins and refreshes.
Looker (Google Cloud core) only changes
Feature
The render event has been added to the audit log list.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker IDE supports Vim and Emacs editors in addition to the default Looker IDE editor. You now can set your editor preference in the new IDE Settings page in the Looker IDE. Note: Item added to release notes on September 16, 2024.
Looker (Google Cloud core) and Looker (original) changes
Feature
The content_summary API endpoint is now generally available. You can use this endpoint to search for recently viewed content or content that you have marked as a favorite.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker IDE now persists a user's IDE state , including the open LookML file in the file browser; the expanded or collapsed status of items in the file browser; the selected item in the IDE navigation bar (such as the file browser, Git actions, object browser, or project settings); the sidebar item (such as the Quick Help panel, the Metadata panel, and the Project Health panel), and the size of the IDE side panels. You can remove the persistence by clicking the Reset IDE Layout button in the new IDE Settings page of the Looker IDE. Note: Item added to release notes on September 16, 2024.
Looker (Google Cloud core) and Looker (original) changes
Feature
Comprehensive API support for Looker Connected Sheets is now accessible through both AppsScript and the Google Sheets APIs . API support enables automated data refresh, custom workflows, and integration with external tools and services.
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud Core) provides comprehensive audit logging through Cloud Audit Logs , including full Data Access and System Event audit log coverage. Previously, Cloud Audit Logs for Looker (Google Cloud core) captured only admin activities like instance creation and deletion. Note: Item added to release notes on September 16, 2024.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker instances with the Redshift license feature enabled will now use the driver version 2.1.0.30.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports sunburst visualizations.
Looker (Google Cloud core) and Looker (original) changes
Fixed
To improve performance for LookML validation, the LookML parser object pool has been increased from a fixed-size pool of three LookML parser objects per Looker node to a dynamic pool size that is equal to the number of provisioned CPUs in the Looker node.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Redshift driver is now configured with AWS's recommended TCP keep-alive settings.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The LookML validator no longer forces the full_suggestions parameter to be enabled in certain situations involving Liquid variables and derived tables.
Looker (Google Cloud core) only changes
Fixed
The audit log buffer is now persisted to minimize log data loss.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the Looker SQL Interface could not connect to Tableau using OAuth. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML validator would not return an error when value_format and named_value_format were both defined for a field. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Chart Config Editor now displays a more informative error message if you try to use an unsupported visualization type.
Looker (Google Cloud core) and Looker (original) changes
Fixed
CJK characters are now displayed properly in mobile browsers when they are included within inline table email attachments.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where downloaded queries would not show error messages has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the LookML Validator would return incorrect errors on cancel_grouping_fields in Explores with joins. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Internal database calls during LookML validation have been reduced.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some schedules would fail to send if a PDT was rebuilding. This feature now performs as expected.
Looker (Google Cloud core) only changes
Fixed
An issue with SAML authentication has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed with the TRUNC function on some Denodo 8 dialects. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where the LookML Validator could crash if a LookML file incorrectly referenced a dimension_group in a filters parameter has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where measures would remove COALESCE SQL expressions from dimensions during query generation. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The child_count property can now be omitted from dashboard and Look API responses when a feature flag is enabled.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker was incorrectly sanitizing some of the allowed CSS properties . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed that was causing the Collapse All Folders button in the Looker IDE to not work correctly. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the progress bar on single value visualizations could overlap with the visualization note. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where query metrics were not appearing in the Explore list. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Change
Google BigQuery supports clustering without a partition, so Looker has removed the limitation for BigQuery connections where the cluster_keys parameter worked only with PDTs or aggregate tables that were also partitioned using the partition_keys parameter. Note : This item was added on February 11, 2025.
August 26, 2024
Looker (Google Cloud core) only changes
Change
To create a Looker (Google Cloud core) instance with Private Service Connect, it is no longer necessary to be added to an allowlist.
August 15, 2024
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) customers can now create a Looker (Google Cloud core) instance with Private Service Connect . To create a Private Service Connect instance, ensure that you have received confirmation from your sales representative that your project has been added to the allowlist for Private Service Connect.
August 14, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.14 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, August 19, 2024
Expected Looker (original) final deployment and download available: Thursday, August 29, 2024
Expected Looker (Google Cloud core) deployment start: Monday, August 19, 2024
Expected Looker (Google Cloud core) final deployment: Saturday, September 7, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
The presumed_looker_employee property is now omitted from the user API response model. If you were relying on this functionality, migrate to use the verified_looker_employee property instead.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The Edit Connection page URL has been changed from admin/next/connections/:id to admin/next/connections/:id/edit . The Looker UI will not change, but any scripts or hyperlinks that you have created that reference the old URLs may break.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker–Tableau BI Connector is now generally available. You can now use Tableau Desktop to connect to your Looker data.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker IDE now persists a user's IDE state , including the open LookML file in the file browser; the expanded or collapsed status of items in the file browser; the selected item in the IDE navigation bar (such as the file browser, Git actions, object browser, or project settings); and the sidebar item (such as the Quick Help panel, the Metadata panel, and the Project Health panel). You can remove the persistence by clicking the Reset IDE Layout button in the new IDE Settings page of the Looker IDE. Note : This feature will be available in a future release. Update : This feature is supported in Looker 24.16.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Queries Admin page now contains a SQL Interface tab in the Details pop-up for queries that originate from the Open SQL Interface .
Looker (Google Cloud core) and Looker (original) changes
Feature
The Edit button appears only for model sets for which the user has edit access.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker IDE supports Vim and Emacs editors in addition to the default Looker IDE editor. You now can set your editor preference in the new IDE Settings page in the Looker IDE. Note : The IDE Settings page will be available in a future release. Update : This feature is supported in Looker 24.16.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker IDE now supports text line wrapping in the IDE editor. Line wrapping is now the default behavior. You can turn off line wrap mode in the new IDE Settings page in the Looker IDE. Note : This feature will be available in a future release. Update : This feature is supported in Looker 24.16.
Looker (Google Cloud core) only changes
Feature
For Google BigQuery connections, Looker (Google Cloud core) can automatically use the OAuth application credentials that your Looker admin used when they created the Looker (Google Cloud core) instance. See the Looker (Google Cloud core) documentation for more information.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports a Venn diagram chart type.
Looker (original) only changes
Feature
A new progress bar, called the Explore query tracker , appears in the Explore UI when a query is running. You can toggle this off in the Labs features under Explore Query Tracker.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports a new Sankey chart type.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Open SQL Interface is now generally available and the SQL Interface Looker Labs toggle is removed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The editing experience in the Chart Config Editor is now more responsive.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with SSO logins has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where unlocalized strings were rendered as "Bad Translation Key" when the project localization level was set to "permissive." This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, Look IDs were not always saved in the query metadata. This issue has been fixed, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Performance has been improved for model preparation for models that use local import.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where LookML details were exposed to users who did not have the see_lookml permission.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, updating an OAuth client secret when there were multiple connections sometimes failed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with Exasol pivot queries has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, an issue could cause one invalid conditional data formatting rule to disable all conditional formatting rules for a series. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with the User Activity dashboard has been resolved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed with the Denodo dialect where the TRUNC() function could erroneously return a NULL value. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Rather than returning a 500 error as it would have previously, the sync_lookml_dashboard endpoint will now return a 422 with a more informative error message if there is an issue with the LookML dashboard layout.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where dashboard filters were applied to tile queries during tile editing. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue that could cause the LookML Validator to time out has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A previous issue with some Liquid variables would unnecessarily pull fields into the SQL query. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker can now use more efficient queries to determine the names of Redshift external schemas.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, a Validation or Query operation might fail if a measure did not have a type and used a sql_distinct_key . This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
System Activity queries that count Looker employee usage on your instance will no longer count Google employees that don't work on Looker products.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The custom field editor now displays an error when users attempt to enter a conditional formatting rule with more than three conditions.
Looker (Google Cloud core) and Looker (original) changes
Fixed
HighCharts error codes are now displayed in the UI rather than a blank visualization being rendered.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, an issue caused some table calculations that referenced row totals to not appear in the series editor. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Unqualified field references in Liquid will no longer trigger SQL dependencies if the value does not depend on the result set.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue that caused some schedules to get indefinitely stuck in the scheduler queue has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, the PDT Admin panel could not be filtered by the status "Failed." This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Looker would draw incorrect markers in the Google map visualization. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where, previously, a project could not be deleted because of a timeout on the Delete Confirmation page. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some custom fields could not be deleted from the data table in an Explore. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the top-level item in an object tree was sometimes not expanded upon first loading. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The LookML validator will no longer report inaccessible field errors for fields that are excluded from Explores.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where an escaped single quote in a LookML string was being treated as the end of the string. The fix enables color formatting to be applied to the entire string.
August 13, 2024
Looker (original) only changes
Announcement
Choosing a hosting option for a Looker (original) instance helps you understand the benefits and limitations of each hosting option — Looker-hosted or customer-hosted — so that you can make the best decision for their organization.
Looker (Google Cloud core) and Looker (original) changes
Announcement
A new Looker and Looker Studio shared terms and concepts glossary is available. This resource compares and contrasts terms and concepts that are used in common between Looker and Looker Studio, including some that have similar-seeming naming conventions but different functionality.
Looker (Google Cloud core) only changes
Announcement
Looker (Google Cloud core) users now have access to the first-ever Learn Assistant panel on Google Cloud console pages. This panel provides tailored documentation and tutorials that are specifically related to the tasks or concepts covered on that console page.
July 10, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.12 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, July 15, 2024
Expected Looker (original) final deployment and download available: Thursday, July 25, 2024
Expected Looker (Google Cloud core) deployment start: Monday, July 15, 2024
Expected Looker (Google Cloud core) final deployment: Monday, July 29, 2024
Looker (original) only changes
Breaking
OpenJDK 8 is no longer supported. Self-hosted customers must upgrade to OpenJDK 11 .
Looker (Google Cloud core) and Looker (original) changes
Breaking
A LookML validator error, which catches illegal sql_trigger values in models with parameterized connections, has been added.
Looker (original) only changes
Feature
A new Labs feature, Delegate Schedule Management, introduces the manage_schedules permission . This permission lets users reassign and delete schedules on the Schedules page for the models that they can access.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports Databricks Unity Catalog . When you create a Databricks connection in Looker, you can define the Databricks catalog in which Looker will run queries.
Looker (Google Cloud core) only changes
Feature
If a Looker instance does not yet have any Looks or dashboards, the Looker homepage now shows sample dashboards. Note: This feature will be released in late July. Update: Because of a code freeze during the Olympics, this feature will be released in mid-August.
Looker (Google Cloud core) and Looker (original) changes
Feature
A new Explore from Here icon now appears on dashboard tiles and lets dashboard viewers explore a tile's data in one click. Note: This feature will be released in late July. Update: Because of a code freeze during the Olympics, this feature will be released in mid-August.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports the following pie chart legend properties: align , verticalAlign , and layout .
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) now supports connections to Teradata databases.
Looker (Google Cloud core) and Looker (original) changes
Feature
A new Create button in the main navigation panel lets users create dashboards, boards, LookML models, and database connections. To view the button, users must have the permissions to create dashboards, models, or connections. Note: This feature will be released in late July. Update: Because of a code freeze during the Olympics, this feature will be released in mid-August.
Looker (Google Cloud core) and Looker (original) changes
Feature
When a file or folder is created, updated, or accessed in the Looker IDE, Looker now displays a loading indicator.
Looker (Google Cloud core) and Looker (original) changes
Feature
Admins can now edit groups and roles for users who only have API keys.
Looker (Google Cloud core) and Looker (original) changes
Feature
For LookML projects that are configured with the Use Legacy Runtime feature, the LookML Validator may return an information-level alert that the legacy runtime is being deprecated. We recommend that you migrate LookML projects to the new LookML runtime .
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was causing Looker to generate incorrect join SQL for circular join references. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, some Looks had a null Look ID in System Activity Explores. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Query results that contained characters that aren't in the UTF-8 character set could cause queries to fail. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, extra filter suggestions queries would run when a filter was removed in an Explore. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with the Closed System option allowed the name of the user who created or updated a dashboard last to be viewed by users who weren't in the same group. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Rendering for dashboards that include special characters in their titles has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, drill-downs didn't work properly in some map visualizations. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, queries could not be sorted on date fields in specific situations. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was causing Looker to sometimes incorrectly generate date literals for Postgres queries. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was causing the LookML validator to return an incorrect error for an improperly formed value format string. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, user attribute values that contained certain special characters could not be saved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was causing tooltips on timeline visualizations to not respect timezone conversion settings. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was causing visualization formats to round incorrectly. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The LookML validator will now return an error if a sql_distinct_key is used in a field type that does not support it.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where Aurora MySQL connections that do not provide the lookerFailover parameter in the Additional JDBC parameters setting would fail to connect. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where PDT overrides could not be toggled off in some situations has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where filter values with a special character and a trailing space would filter out valid results. This feature now performs as expected.
June 12, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.10 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, June 17, 2024
Expected Looker (original) final deployment and download available: Thursday, June 27, 2024
Expected Looker (Google Cloud core) deployment start: Monday, June 17, 2024
Expected Looker (Google Cloud core) final deployment: Monday, July 1, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
An issue where some Liquid number comparisons were returning incorrect results has been fixed. This feature now returns errors for certain invalid Liquid syntax as expected. Please note that this may raise errors in your existing model that did not previously get surfaced. You will need to resolve these incorrect Liquid comparisons in your model.
Looker (Google Cloud core) and Looker (original) changes
Breaking
When an admin edits a user's email address, Looker will now log out that user and send an email verification link to the user's new email address. Looker will prevent the user from logging in again until the user clicks the email verification link.
Looker (original) only changes
Breaking
The Disallow Numeric Query IDs Legacy feature is now deprecated.
Looker (Google Cloud core) and Looker (original) changes
Breaking
If your LookML model includes duplicate datagroup names, the LookML validator will return this error message during model compilation: A datagroup named "xxxx" has been defined multiple times. Each datagroup in a model must have a unique name.
If you receive this message, you will need to change your datagroup names so that each datagroup in your model has a unique name. The error message text will include the duplicate datagroup names.
Looker (original) only changes
Breaking
The account setup URL field and the password reset URL field have both been removed from the Edit User page UI to ensure that the URLs aren't misused. These fields will also not appear in the responses of any Looker API calls.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The ability to change your Development Mode folder from the Account page has been removed. To view LookML in another user's dev mode folder, switch to their branch instead.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with git initialization that could potentially have caused Looker to fail when starting up has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Feature
OAuth 2.0 support has been added for Databricks connections.
Looker (Google Cloud core) and Looker (original) changes
Feature
OAuth 2.0 support has been added for Trino connections.
Looker (Google Cloud core) and Looker (original) changes
Feature
The lightweight drill links Labs feature is now GA.
Looker (Google Cloud core) only changes
Feature
CloudSQL dialects on Looker (Google Cloud core) can connect using application default credentials and service account impersonation.
Looker (Google Cloud core) and Looker (original) changes
Feature
The listen property on a merge query dashboard element can now be defined on a source query directly, rather than on the element as a whole. Extending this parameter is also supported.
Looker (Google Cloud core) only changes
Feature
Admins can now update a user email address through IAM or IdP.
Looker (Google Cloud core) and Looker (original) changes
Feature
A loading indicator will show up on the IDE modal when you're creating, renaming, or deleting a file or folder.
Looker (Google Cloud core) and Looker (original) changes
Feature
You can now create treemap charts using the Chart Config Editor .
Looker (Google Cloud core) and Looker (original) changes
Feature
The SingleStore7+ derived table strategy has been updated to use Common Table Expressions.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, when users searched for fields in the field picker, some special characters were not being properly escaped. This issue has been fixed, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Referencing another view by using Liquid in the sql_table_name parameter will no longer cause suggestions on fields that are defined with full_suggestions: no to be forced to full_suggestions: yes .
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue in map visualizations where null values caused the map to disappear has been resolved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A curated sidebar title was not being localized properly. This issue has been resolved, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where merged results filters did not retain certain settings after a dashboard was saved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, dashboard tiles that were based on map visualizations with no data would display an error rather than report an absence of data. This issue has been resolved, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where BOOL_OR and BOOL_AND functions on Snowflake were generating incorrect SQL has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where the "is in the month" filter was displaying the incorrect month has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where attributes in the Attribute Pairing section of the SAML, LDAP, and OIDC settings could not be deleted. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Default permissions of OAuth authentication to BigQuery connections are limited to read-only.
Looker (Google Cloud core) and Looker (original) changes
Fixed
SQL generation measures of type: min and type: max for Firebolt connections have been updated.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue in table visualizations has been fixed where column widths were not always respected when subtotals were enabled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Generation of a signed embed URL now requires the manage_embed_settings permission.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Performance improvements have been implemented for the loading time of Explores for projects that use local import.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where parameter filters of type: number were not showing the filter label has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where text visualizations were causing errors on other dashboard tiles immediately after the dashboard was saved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Content validator queries have been optimized. This may improve content validator performance for instances that have many dashboards with merged query tiles.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where users were unable to drill on pivot tables that were transposed has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Timeline visualizations can now have the same start and end time.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The LookML validator will now return an error if the url parameter of a link parameter uses http instead of https .
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where refreshing the page could cause unexpected behavior with "is not between" filters. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The timeline visualization has been updated to better enable integration with annotations using the Chart Config Editor .
Looker (Google Cloud core) and Looker (original) changes
Fixed
The User Activity dashboard has been updated with new Looks.
Looker (Google Cloud core) and Looker (original) changes
Fixed
LookML model loading time has been optimized by reducing unnecessary filesystem interactions.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A startup issue related to database connection pooling has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where, previously, dates were not accepted when a "before absolute" filter was used in Explores.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where downloading all results with subtotals enabled from a BigQuery database with BI Engine enabled would sometimes produce no results. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The performance of the folder copying and moving actions has been improved.
Looker (Google Cloud core) and Looker (original) changes
Fixed
In the Open SQL Interface, user errors and internal server errors are now more clearly differentiated.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where suggest_explore failed to link to filter suggestion results has been fixed. This feature now performs as expected.
May 08, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.8 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Monday, May 13, 2024
Expected Looker (original) final deployment and download available: Thursday, May 23, 2024
Expected Looker (Google Cloud core) deployment start: Monday, May 13, 2024
Expected Looker (Google Cloud core) final deployment: Monday, May 20, 2024
Looker (Google Cloud core) and Looker (original) changes
Feature
Database connection pooling is becoming generally available. For Looker (original) instances, the feature is moved out of Looker Labs . For dialects that support database connection pooling , the Connection settings page will include a Database Connection Pooling option. As part of this update, the Database Connection Pooling Labs setting for your instance has been applied to the Database Connection Pooling setting for the applicable database connections on your instance. If you very recently changed the Database Connection Pooling Labs setting, please check your connection settings to verify that the migration has applied the Database Connection Pooling setting that you want for each database connection.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, queries for totals would not run when a derived table referenced an ephemeral derived table using the SQL_TABLE_NAME syntax. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When you search for a user or group, strings with commas now work as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When a custom filter is too large for the JSON parser to handle, Looker now returns a more descriptive error.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where embed download filter parameters for cookieless embed were incorrectly escaped (space mapped to x2B [+] rather than x20). This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When a Git project becomes corrupted, Looker now proactively converts it to a clone to prevent further issues.
Looker (Google Cloud core) and Looker (original) changes
Fixed
HSQLDB has been updated to version 2.7.2 to comply with GHSA-77xx-rxvh-q682.
Looker (Google Cloud core) and Looker (original) changes
Fixed
You can now see longer embedded Look titles without needing to scroll.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, queries that were defined with the API occasionally could not be downloaded as PNGs or JPGs. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, if Looker encountered an invalid visualization type on a tile, the dashboard would not load. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The log error about getting an access token from the Google OAuth library has been reclassified as a warning.
Looker (original) only changes
Fixed
On the Looker Labs page, links to documentation will now open in a new browser tab instead of navigating away from the Looker UI.
Looker (Google Cloud core) and Looker (original) changes
Fixed
For LookML projects with a large number of files, IDE folders were slow to respond when you were navigating and creating, editing, or deleting LookML files. A performance issue has been identified and fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When a LookML project fails to load, a log message will now be generated.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, an issue caused filters to be incorrectly restored in the dashboard edit filter dialog. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Referencing the ALL_FIELDS set in a join or view will no longer cause validation to fail.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed with the scrollbar appearing in text tiles. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Text in the project IDE will now be line wrapped.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Quick start queries with missing identifiers will no longer cause validation to fail.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, query downloads of type json_bi could have failed if they included fields that were hidden from the visualization. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where paper size did not change correctly when Fit to Dashboard was used has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The last_logged_in_at time is now captured when a URL that is created by the create_embed_url is used to log in to the Looker instance. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, an issue could cause Look titles to be cut off. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker now initializes Development Mode projects for Looker projects that are in Production Mode.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, when embedded Explores were rendered in an iframe, a screen jump might have occurred. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where ↙ ↘ characters were being reversed in single value visualizations. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Text is now properly truncated in table visualizations even when the underlying field has defined html and link parameters.
April 10, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.6 includes the following changes, features, and fixes:
Expected Looker (original) deployment start: Wednesday, April 17, 2024
Expected Looker (original) final deployment and download available: Tuesday, April 30, 2024
Expected Looker (Google Cloud core) deployment start: Monday, April 15, 2024
Expected Looker (Google Cloud core) final deployment: Monday, April 22, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
The Embedded Looker Studio feature is now available to preview. This feature lets you view and edit Looker Studio reports in Looker and create ad hoc analyses in embedded Looker Studio reports with the Open in Reports feature on Looker Explores.
To participate in this closed experiment, you must meet the following requirements:
Your Looker instance must be running on Looker 24.6 or later.
Your Looker instance must be using Google OAuth authentication .
You must have a Looker Studio Pro license for each user who accesses embedded Looker Studio.
You must submit the sign-up form for the closed experiment.
More information for using the Embedded Looker Studio feature is coming soon.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The Allow Legacy Maps legacy feature is now disabled by default. When the Allow Legacy Maps legacy feature is disabled, any map visualization that uses the Map (Legacy) chart type will be converted to use the Google Maps chart type . This may be a breaking change for some customers who are still using Legacy Maps.
Looker (Google Cloud core) and Looker (original) changes
Feature
Open SQL Interface now supports parameters and filter-only fields .
Looker (Google Cloud core) and Looker (original) changes
Feature
As part of a Looker Studio Pro subscription, Looker Studio Pro licenses are available at no cost to Looker users. Looker admins of Looker (original) instances and Looker (Google Cloud core) instances can accept these complimentary licenses and finish setting up a Looker Studio Pro subscription to get started using Looker Studio.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, comparison text on single value visualization dashboard tiles could be cut off when the tile was a specific height. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue that caused user attribute filter values to fail to load in some situations has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, an unclear error message was returned when you selected a measure in an aggregate query using the SQL interface. The language of this error message has been clarified.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When New LookML Runtime is enabled, the LookML Validator will now include more descriptive error information when an aliased derived table's definition references an unqualified field name in Liquid.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Performant Field Picker is now generally available. Search modifiers in the Field Picker can no longer be used.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the fiscal year was not rendering correctly in some Excel downloads. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was causing the LookML Validator to incorrectly mark some fields as duplicates. This feature now performs as expected.
Looker (original) only changes
Fixed
An issue was causing QR codes for mobile app authentication to be improperly generated. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The json_bi and json_detail_lite_stream query result formats did not respect the apply_formatting parameter in certain cases. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A more descriptive error message is now returned when a user tries to delete a project using the API while not in dev mode.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Performance for PDT stable view publishing has been improved.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, fields with full_suggestions would not show suggestions while interacting with the filter. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An intermittent issue was rendering a blank page when content was added to a board. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where some projects were empty when a user first entered dev mode. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, an issue would cause Looker to incorrectly generate derived table SQL if a derived table referenced a view that referenced another derived table that was using the SQL_TABLE_NAME syntax. This feature now performs as expected.
March 13, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.4 includes the following changes, features, and fixes.
Expected Looker (original) deployment start: Monday, March 18, 2024
Expected Looker (original) final deployment and download available: Thursday, March 28, 2024
Expected Looker (Google Cloud core) deployment start: Monday, March 18, 2024
Expected Looker (Google Cloud core) final deployment: Monday, April 1, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
Chrome is starting to deprecate third-party cookies as of January 2024. Because of Looker's dependency on third-party cookies to establish embed user sessions, this may impact your embed use case. For more information, see the Chrome is deprecating third-party cookies notice.
Looker (original) only changes
Feature
The Disallow Numeric Query IDs legacy feature has been added to let users opt in to or out of query API changes.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Previously, custom visualizations would not call the updateAsync function after the vis config is updated via the custom visualization API. Now, the function will be called. If a custom visualization is set up to update the vis config every time updateAsync is called, it could cause excessive refreshes.
If your custom visualization is fails to load after this update, double check your custom visualization code for unnecessary vis config updates. If you have a Looker (original) instance, you can also enable the Custom Vis Reliable Render Labs feature which causes Looker to suppress excess refresh behavior in custom visualizations.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Query IDs can no longer be used to fetch queries or create render tasks through the API. The Get All Running Queries API endpoint is now restricted to admins only. Query slugs that are generated by Looker will be 32 characters instead of 7.
Looker (Google Cloud core) and Looker (original) changes
Feature
The save_content permission now has two child permissions, save_dashboards and save_looks . These permissions let Looker admins exert finer control over the kinds of content that users can save.
Looker (Google Cloud core) and Looker (original) changes
Feature
When an instance has no projects, Looker will more prominently prompt users to create a model.
Looker (original) only changes
Feature
The Advanced Features for New Schedules Page Labs feature is now available. This lets you sort and filter the list of scheduled plans on the Admin - Schedules page.
Looker (Google Cloud core) and Looker (original) changes
Feature
In the Create a model wizard, your selections are now saved even if you close steps without having completed the model creation process.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Performant Field Picker feature is now generally available.
Looker (Google Cloud core) and Looker (original) changes
Feature
Adding a query slug to source queries in the merge query API response GET merge_queries/<merge_query_id> returns the query slug in addition to the ID.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Content Validator has added support for field replacement within custom measure filters (across Looks, dashboard elements, and merge queries).
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, the lookml_model_explore API endpoint would return a 500 error in certain cases. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Subtotals have been fixed for queries with order_by_field references in query streaming pathways. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed that caused small decimals to be displayed in scientific notation even when formatting was disabled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, the Errors and Broken Content dashboard appeared twice in the admin panel. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Only users who have access to dashboard extensions will be shown the Add Extension tile.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Filter suggestion requests have been reduced while the user is typing. Because normal typing will invoke fewer requests, the load on the server will be reduced.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where extension documents would appear when hiding Looker document links was disabled. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
On the new Admin - Users page, Looker Support users were shown as having never logged in even for currently logged-in users. This issue has been fixed and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Queries with order_by_field references and subtotals should render correctly in downloads / run_query APIs.
Looker (Google Cloud core) only changes
Fixed
IAM checks for ephemeral users were disabled as a result of rendering issues for users who were logged in with SAML in Looker (Google Cloud core).
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker no longer imposes the Explore row limit of 5,000 on queries that are run using the run inline query API endpoint.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where embed secrets might have been visible to non-admin users has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Filter expressions including user attributes and OR logical conditions were being incorrectly populated when generating SQL. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Downloading results from SQL Runner now only downloads the file and does not open the file in a new browser tab.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Errors about UI downloads are now more descriptive, similar to descriptive API error messages.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue that caused single value change indicators to not render in Safari when dashboards scrolled has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker now shows a clearer warning message when a user attempts to download a query with dimension fill and All Results enabled.
Looker (Google Cloud core) and Looker (original) changes
Fixed
LookML-defined fields that are used in field filters will not be rejected from a set when the field requiring them is rejected from that set. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A change in the Snowflake dialect was ported to Kotlin to maintain parity. Snowflake column names with mixed cases are now properly quoted.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, the All Results option was unavailable for schedules on Looks. This feature now performs as expected.
Looker (original) only changes
Fixed
The Export function has been re-enabled, which lets Looker admins export data from a Looker (original) instance for import into a Looker (Google Cloud core) instance.
Looker (Google Cloud core) only changes
Fixed
Incorrect quoting in Snowflake views has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Internal encryption has been migrated from AES-128 to AES-GCM-256 encryption.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Performant field picker sorting behavior has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker should now correctly handle cases where the sorts query had an empty string or was entirely empty.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The LookML Validator no longer hangs on a connection that references a deleted or malformed user attribute. The Validator also surfaces a detailed error when the user tests the connection.
Looker (original) only changes
Fixed
Previously, when a dashboard was scheduled using PNG format and one of the tiles contained an empty note , the schedule would fail. This feature now works as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue has been fixed where the PDT Context Override toggle was improperly reflecting the ON state when it had been cleared prior. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A data validation message is now returned for waterfall charts when there are multiple measures and a hidden dimension.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker now ignores all blank filter strings, including IS NOT .
February 14, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.2 includes the following changes, features, and fixes.
Expected Looker (original) deployment start: Tuesday, February 20, 2024
Expected Looker (original) final deployment and download available: Thursday, February 29, 2024
Expected Looker (Google Cloud core) deployment start: Tuesday, February 20, 2024
Expected Looker (Google Cloud core) final deployment: Tuesday, March 5, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Planned for Looker 24.4, the Allow Legacy Maps legacy feature will be disabled by default. When the Allow Legacy Maps legacy feature is disabled, any map visualization that uses the Map (Legacy) chart type will be converted to use the Google Maps chart type. This may be a breaking change for some customers who are still using Legacy Maps.
Looker (Google Cloud core) and Looker (original) changes
Breaking
A new LookML warning is returned when the convert_tz parameter is used on a LookML field that is configured as type: date_raw . date_raw fields have never supported timezone conversion, so this LookML warning has been added to alert LookML developers.
Looker (Google Cloud core) and Looker (original) changes
Breaking
For projects that use the new LookML runtime , the LookML validator will now correctly show a model-level error when a join name is duplicated within an Explore. The error already existed for projects that use the legacy LookML runtime, so this update is just to bring the new LookML runtime behavior in line with the legacy LookML runtime.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Duplicate join names will throw a new model-level LookML error during validation.
Looker (Google Cloud core) and Looker (original) changes
Feature
The following permissions are now generally available to use in permission sets: manage_groups , manage_roles , manage_user_attributes , manage_embed_settings , manage_themes , manage_privatelabel .
Looker (Google Cloud core) and Looker (original) changes
Feature
The Signed Embed URL generator can now include themes, current parameters, and external group IDs.
Looker (Google Cloud core) and Looker (original) changes
Feature
The looker_internal_email_domain_allowlist user attribute is now generally available. This lets admins configure the Email Domain Allowlist for Scheduled Content feature on a per-group basis.
Looker (Google Cloud core) and Looker (original) changes
Feature
A new Dashboard Diagnostics System Activity dashboard is available for troubleshooting the performance of individual dashboards.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker now supports self-service migration from Looker (original) instances to Looker (Google Cloud core) instances. Looker (original) instances must meet certain prerequisites, and you must have a Looker (Google Cloud core) instance into which you can import.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor now supports customizing tooltip content and styles .
Looker (Google Cloud core) only changes
Feature
The Login Consent Configuration option causes a consent screen with a configurable message to be displayed to all users who attempt to sign in to the Looker instance.
Looker (original) only changes
Change
For instances with offline licenses: When an offline license expiration date is less than 14 days away, Looker admins will see a license expiration banner on all Looker pages.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where download and Explore options were showing up on drill modals for merged queries when the user did not have permission has been resolved. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
BigQuery : Previously, if OAuth tokens were passed through as query parameters rather than in the authentication header, Looker would return the following error: "OAuth token was passed in the query parameter. Please send it in Authorization header instead."
The BigQuery driver has been updated, so this error will no longer appear.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An XSS security issue in Grid code has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Filters on yesno fields will no longer show the "is not" option.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Size-by field rendering for scatter charts has been fixed. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, text truncation wasn't working properly on headers on small tiles. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Waterfall charts now render all available columns as expected.
Looker (Google Cloud core) and Looker (original) changes
Change
The minimum Git command line version has been increased to 2.36.0+.
Looker (Google Cloud core) and Looker (original) changes
Change
The user interface of the Admin Settings - Schedules page has been updated.
January 10, 2024
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 24.0 includes the following changes, features, and fixes.
Expected Looker (original) deployment start: Tuesday, January 23, 2024
Expected Looker (original) final deployment and download available: Thursday, February 1, 2024
Expected Looker (Google Cloud core) deployment start: Tuesday, January 23, 2024
Expected Looker (Google Cloud core) final deployment: Monday, February 5, 2024
Looker (Google Cloud core) and Looker (original) changes
Breaking
The default values have changed for the Persistent Sessions and Inactivity Logout settings. Persistent Sessions is now disabled by default, while Inactivity Logout is now enabled by default. You can change these values on the Admin Sessions page. The behavior of these settings will not change for users who have modified the session defaults.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The run_inline_query endpoint now applies the same query validations as the create_query endpoint. Existing calls to the run_inline endpoint that do not match the API spec now return an error message that explains the issue.
Looker (Google Cloud core) and Looker (original) changes
Breaking
stream_to_cache time has been reduced for New LookML Runtime queries with Liquid in their result set. This does not include downloads.
Looker (original) only changes
Feature
An optional parameter has been added to the LookML Model Explore parameter endpoint , which defaults to false . If the parameter is true and the user has see_lookml permission, then the endpoint returns drill_fields and link entities defined for that field in LookML. The response for each field will also contain a Boolean, has_drills_metadata , to signify that either drill_fields or link was defined, regardless of whether the user has see_lookml permission. drill_fields in the response will correspond directly with those defined under the field in LookML or on the view level for measure-type fields.
Looker (Google Cloud core) and Looker (original) changes
Feature
The custom URLs for alert and schedule emails feature is now generally available.
Looker (original) only changes
Feature
The Lightweight Drill Links Labs feature is now available. Enable this Labs feature for potential improvements in browser and query performance times for queries that contain drill fields.
Looker (Google Cloud core) and Looker (original) changes
Feature
Extensions can now be developed to run in a tile on dashboards . Extensions that support being run as a tile or visualization can be added while the dashboard is in edit mode or saved to a dashboard as a visualization from an Explore . Extensions can also be configured as tiles in LookML dashboards .
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) now supports the SAML and OpenID Connect authentication methods.
Looker (Google Cloud core) and Looker (original) changes
Feature
New quick resize and tile repositioning features are available for editing dashboard layouts.
Looker (Google Cloud core) and Looker (original) changes
Feature
AND/OR filtering is now generally available when creating filters in Explores.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Chart Config Editor is now generally available. You can use the Chart Config Editor to customize formatting options on Looker visualizations that use the HighCharts API.
Looker (Google Cloud core) only changes
Feature
The Looker Admin role can now be granted within a Looker (Google Cloud core) instance. You are no longer required to have a Looker Admin IAM role to be an admin within the instance.
Looker (Google Cloud core) and Looker (original) changes
Change
The Open SQL Interface now supports Looker-specific metadata to indicate if a field is configured as a hidden parameter in LookML.
Looker (Google Cloud core) and Looker (original) changes
Change
Raw SQL will now be included in the json_bi format.
Looker (Google Cloud core) and Looker (original) changes
Change
The Presto JDBC driver version has been updated to 0.284.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, filters could not be localized correctly in dashboards. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The custom filter editor is now persisted when users toggle AND/OR filters, even if the editor is empty.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, a performance regression in the New LookML Runtime caused slow validation in models that included many dashboards. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, Google Maps visualizations on tiles in the lower section of a dashboard were blank in PDF downloads. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, Looks that were saved with the Legacy map type broke when the legacy feature was turned off. These Looks should now use Google Maps instead and perform correctly.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Username and password are no longer required fields in the SMTP settings user interface.
Looker (Google Cloud core) and Looker (original) changes
Fixed
If an aggregate table references a base view, joined in dimensions, and a measure that will cause fanout, then any query that references only the base dimensions will not optimize with the aggregate table. The aggregate table will continue to optimize with exact query matches.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, drill modals on measures would be cut off in the data pane for Looks. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, users who did not have the explore permission could not view /embed/query pages. This feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, there were performance issues with large pivot tables that involved filled-in date values. The performance issues have been resolved, and this feature now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When used with the OR operator in AND/OR filters, filter-only fields will show a "not supported" warning.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, "Fiscal years from now" could not be selected with AND/OR filters. This feature now performs as expected.
November 09, 2023
Looker (Google Cloud core) only changes
Change
Looker (Google Cloud core) now supports the following regions:
asia-east2 - Hong Kong
asia-northeast2 - Osaka
asia-northeast3 - Seoul
europe-southwest1 - Madrid
europe-west6 - Zurich
europe-west8 - Milan
europe-west9 - Paris
northamerica-northeast2 - Toronto
southamerica-east1 - São Paulo
us-west2 - Los Angeles
November 08, 2023
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 23.20 includes the following changes, features, and fixes.
Expected Looker (original) deployment start: Monday, November 13, 2023
Expected Looker (original) final deployment and download available: Thursday, November 30, 2023
Expected Looker (Google Cloud core) deployment start: Monday, November 13, 2023
Expected Looker (Google Cloud core) final deployment: Tuesday, December 05, 2023
Looker (Google Cloud core) and Looker (original) changes
Breaking
Drilling on a scatterplot with quadrants and a size-by field shows all data points.
Looker (original) only changes
Breaking
The Performant Field Picker Labs feature now defaults to a new "Any" search option that searches for matches across views, groups, and fields for Explores with fewer than 5,000 fields.
Looker (Google Cloud core) and Looker (original) changes
Change
References to history_id are being replaced with a slug for query event tracking.
Looker (Google Cloud core) and Looker (original) changes
Change
The Data history playback feature requires users to have the explore role permission in order to use it.
Looker (Google Cloud core) and Looker (original) changes
Change
The default values have changed for the Persistent Sessions and Inactivity Logout settings. Persistent Sessions is now disabled by default while Inactivity Logout is now enabled by default. You can change these values on the Admin Sessions page. The behavior of these settings will not change for users who have modified the session defaults.
Looker (Google Cloud core) and Looker (original) changes
Feature
Admins can now restrict non-admins from accessing the dashboard auto-refresh option .
Looker (Google Cloud core) and Looker (original) changes
Feature
Quick Layout for dashboard editors is now available to customers in preview. Users can quickly move dashboard tiles to the left or the right side and also resize them to standard sizes. Fill out the Looker Dashboard Layout Accelerator Preview Sign Up form to sign up for the preview.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The "Go to LookML" link on the Explore page now works as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, conditional formats such as "[>=1000] $#0.00,k; $#0.00" did not properly format negative numbers in tables and legacy tables. This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Malformed type declarations in a dimension_group no longer crash the LookML validator and now work as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, resizing Google Maps immediately after loading could produce an error. This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
AND/OR filters no longer highlight required filters in red.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Custom value formats are no longer double escaped in table charts and legacy tables.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with configuring an SMTP server has been fixed, and the fields (Mail Server, From, User Name, Password, Port) have been made mandatory on the UI.
Looker (Google Cloud core) and Looker (original) changes
Fixed
AND/OR filters now improve browser performance by delaying fetching suggestions until the user interacts with the filter.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Custom filter expressions get pushed down into NDT queries as expected when using bind_all_filters .
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Databricks JDBC driver has been updated from 2.6.27 to 2.6.32.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Number filter of type "between" reverted to type "is" when the first number was entered. This issue has been fixed.
October 11, 2023
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 23.18 includes the following changes, features, and fixes.
Expected Looker (original) deployment start: Monday, October 16, 2023
Expected Looker (original) final deployment and download available: Thursday, October 26, 2023
Expected Looker (Google Cloud core) deployment start: Monday, October 23, 2023
Expected Looker (Google Cloud core) final deployment: Friday, November 3, 2023
Looker (original) only changes
Breaking
Clustrix database support has been removed. Any existing connections to a Clustrix database will fail to run in Looker 23.18.
Looker (original) only changes
Breaking
API 3.0 and API 3.1 have been removed in Looker 23.18.
Looker (Google Cloud core) only changes
Announcement
IAM permissions have been clarified and made more visible in the Looker (Google Cloud core) documentation .
Looker (Google Cloud core) and Looker (original) changes
Feature
Public preview is now available for the Open SQL Interface . The Open SQL Interface allows access to Looker models and Explores for applications (such as Tableau ) that use JDBC to connect to data sources. For Looker (original) instances, enable the SQL Interface Experimental Labs feature on the Looker instance. (Only Looker-hosted instances support this Labs feature.) For Looker (Google Cloud core) instances, fill out the Looker SQL Interface Pre-GA Agreement interest form . The Google team will enable your instance for the SQL Interface feature.
Looker (original) only changes
Breaking
For LookML projects that use the New LookML Runtime , an error has been added: "Datagroup names may only include letters, numbers and underscores." Starting in Looker 23.18, datagroups will generate an error if they contain hyphens or any characters besides letters, numbers, and underscores.
Looker (original) only changes
Change
Performance improvements have been made to query preparation time by front-loading LookML model compilation during production deployments.
Looker (Google Cloud core) only changes
Change
The in-app support in the Help menu has been updated to integrate with the Google Cloud console. You will see in-app support only if you have purchased at least a Standard Support service with Google Cloud Customer care .
Looker (original) only changes
Change
To prevent confusion with SSO authentication, the SSO embed feature has been renamed Signed embed .
Looker (original) only changes
Feature
The New Schedules Page Labs feature updates the interface of the Admin settings - Schedules page.
Looker (original) only changes
Feature
Embedded Looks now support themes, so the Get embed URL dialog now shows a theme selector for Looks.
Looker (original) only changes
Feature
The manage_project_connections_restricted permission lets users edit a subset of settings for new and existing connections.
Looker (original) only changes
Feature
The Get embed URL option from a dashboard, a Look, or an Explore can now generate a
signed embed URL .
Looker (original) only changes
Fixed
An issue with drilling for transposed tables has been fixed. Drilling for transposed tables now performs as expected.
Looker (original) only changes
Fixed
Fixed date field values were not being displayed correctly when referenced by Liquid in the label or html LookML parameter. This feature now performs as expected.
Looker (original) only changes
Fixed
Unreferenced custom fields from drill URL have been removed.
Looker (original) only changes
Fixed
The Box Shadow theme now performs as expected for static and tile LookML dashboards.
September 13, 2023
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 23.16 includes the following changes, features, and fixes.
Expected Looker (original) deployment start: Monday, September 18, 2023
Expected Looker (original) final deployment and download available: Thursday, September 28, 2023
Expected Looker (Google Cloud core) deployment start: Monday, October 2, 2023
Expected Looker (Google Cloud core) final deployment: Thursday, October 12, 2023
Looker (Google Cloud core) only changes
Announcement
A new Looker (Google Cloud core) codelab has been published. The Connect Looker Cloud over hybrid networking codelab provides a walkthrough of deploying a public and private IP Looker (Google Cloud core) instance and connecting it to an on-premises database.
Looker (Google Cloud core) only changes
Announcement
Looker (Google Cloud core) instances can now be created by provisioning a Terraform resource. The new Terraform tab on the Create a Looker (Google Cloud core) instance documentation page describes how to provision various editions of a Looker (Google Cloud core) instance.
Looker (original) only changes
Breaking
The following SQL dialects are no longer supported by Looker, and queries against existing connections will return errors: Apache Hive 2, Apache Spark 1.5+, Apache Spark 2.0, and Quobole Presto.
Looker (original) only changes
Breaking
Looker no longer supports connections to the Impala dialect called Cloudera Impala (with no version number and without a native driver). Queries on connections to this release of Cloudera Impala will return an error. Looker is continuing to support Cloudera Impala 3.1+, Cloudera Impala 3.1+ with Native Driver, and Cloudera Impala with Native Driver.
Looker (original) only changes
Change
The New LookML Runtime feature now allows a wider variety of strings for Liquid date parsing. Date string formats that were previously accepted in the Legacy LookML Runtime legacy feature but not in the New LookML Runtime feature should now format properly.
Looker (Google Cloud core) and Looker (original) changes
Change
Personal folders for users who have never logged in will no longer appear in embedded content navigation.
Looker (original) only changes
Change
The Teradata JDBC driver has been updated to 16.20.00.13.
Looker (Google Cloud core) and Looker (original) changes
Change
When a dashboard or an element refresh interval is entered that is higher than the supported maximum value (24.8 days), Looker now returns a validation message.
Looker (Google Cloud core) and Looker (original) changes
Change
The API call to create signed embed URL endpoints has been updated to remove the majority of embed administration configuration changes that need to be made when a signed embed URL is requested using the endpoint. The description of the endpoint is also changed to use a signed embed URL instead of an SSO embed URL to reduce the confusion with standard SSO authentication.
Looker (Google Cloud core) and Looker (original) changes
Change
The look and feel of the Get LookML dialog on Explore pages has been updated.
Looker (Google Cloud core) and Looker (original) changes
Change
update_embed_config events are now reflected in the System Activity Event Explore .
Looker (Google Cloud core) and Looker (original) changes
Change
Auto-updates for Looker and third-party applications now display a list of entitlements that may be applied when a Marketplace listing is automatically updated.
Looker (Google Cloud core) and Looker (original) changes
Feature
For SFTP and S3 destinations, the timestamp in the filename of the scheduled delivery will respect the Delivery time zone.
Looker (original) only changes
Feature
When you set up SAML authentication, merging users from OIDC into SAML is now supported.
Looker (original) only changes
Feature
When the Advanced Granular Permissions Labs feature is enabled, admin users can use six new permissions to delegate management of user attributes, groups, roles, private labels, themes, and embed settings to non-admin users.
Looker (original) only changes
Feature
When the Email Allowlist for Scheduled Content Labs feature is enabled, admin users can use the looker_internal_email_domain_allowlist user attribute to define email allowlist domains at a group level.
Looker (original) only changes
Feature
The AND/OR Filters in Explores Labs feature is now enabled by default. When this feature is enabled, Looker Explores contain a new experience for creating and editing filters with AND/OR filter logic without the need to create custom filter expressions.
Looker (Google Cloud core) and Looker (original) changes
Feature
The create_dashboard_render_task now takes in an optional theme property to specify the theme to apply to the rendered dashboard.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A previous issue would cause suggestions to not work for fields in views with inter-view references in their sql_table_name parameter. This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
LookML dashboard descriptions are now correctly localized in folders.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A previous issue would cause scheduled plans for System Activity to fail with an undefined method 'path' for nil:NilClass error. This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The average_distinct field type now supports symmetric aggregates.
Looker (original) only changes
Fixed
The Table (Legacy) visualization hide_totals option now performs as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A previous issue would cause Marketplace updates to fail when a user had not entered dev mode since the last update. This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
For bar and column charts that use stacked series positioning and stack sorting with a combination of negative and positive values, the values are now rendered and sorted on the correct side of 0.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A warning message will be returned when a user tries to use a subtotal with a sql_always_having parameter.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Intermittent code: 1002 errors returned from Clickhouse connections have been fixed.
Looker (original) only changes
Fixed
Liquid Ruby dependency has been updated to 5.0.0. You can now make a Liquid reference that results in a non-string value in the link parameter using the Legacy LookML Runtime legacy feature by using the {{
value }} Liquid reference syntax.
Looker (Google Cloud core) and Looker (original) changes
Fixed
yesno filters on filtered measures when BI Engine is enabled now perform as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A previous issue would cause Session Duration to be wrongly defaulted on the UI when the Inactivity Logout was enabled. This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Updates that are sent from inside custom visualizations now perform as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
For cell visualizations in columns with large positive and negative values, the negative value text will now appear on a single line instead of wrapping to fit the cell space.
September 06, 2023
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) now supports the following regions:
asia-southeast1 (Singapore)
australia-southeast1 (Sydney)
europe-west2 (London)
europe-west3 (Frankfurt)
me-west1 (Tel Aviv)
us-east4 (Northern Virginia)
August 22, 2023
Looker (Google Cloud core) only changes
Change
Looker (Google Cloud core) now supports multiple private IP instances in a single Virtual Private Cloud (VPC) network .
August 18, 2023
Looker (Google Cloud core) only changes
Announcement
Looker (Google Cloud core) instances will be receiving Looker 23.12 and Looker 23.14 changes simultaneously, during the Looker 23.14 release. See the Looker (Google Cloud core) and Looker (original) changes section of the 23.14 release notes for deployment dates.
August 09, 2023
Looker (original) only changes
Breaking
The Clustrix database dialect is no longer supported by Looker.
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 23.14 includes the following changes, features, and fixes.
Expected Looker (original) deployment start: Tuesday, August 15, 2023
Expected Looker (original) final deployment and download available: Thursday, August 24, 2023
Expected Looker (Google Cloud core) deployment start: Monday, September 11, 2023
Expected Looker (Google Cloud core) final deployment: Friday, September 22, 2023
Looker (original) only changes
Breaking
New connections for IBM DB2 can no longer be created. Existing connections will still work.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The new LookML runtime now reports errors for multiple primary key declarations during project validation and at query time.
Looker (original) only changes
Breaking
New connections for Qubole Presto Service can no longer be created. Existing connections will still work.
Looker (original) only changes
Breaking
New connections for Apache Hive 2 can no longer be created. Existing connections will continue to work.
Looker (original) only changes
Breaking
New connections for IBM AS400 can no longer be created. Existing connections will still work.
Looker (original) only changes
Breaking
This information applies only to customers who are part of the Private Preview for the SQL interface. All modeled timestamps, except for the raw timeframe, will be treated as BigQuery DATETIME objects instead of TIMESTAMP objects.
Looker (original) only changes
Breaking
New connections for Apache Spark 1.5+ can no longer be created. Existing connections will continue to work.
Looker (original) only changes
Breaking
New connections for Qubole Presto can no longer be created. Existing connections will still work.
Looker (original) only changes
Breaking
New connections for Apache Spark 2.0 can no longer be created. Existing connections will still work.
Looker (Google Cloud core) only changes
Announcement
The Set up a trial Looker (Google Cloud core) instance documentation page now clarifies that you can cancel a Looker (Google Cloud core) 30-day trial by deleting the trial instance.
Looker (Google Cloud core) and Looker (original) changes
Change
The Embed Content Management and Dashboard Embed Content Navigation features, previously available as Labs features, are now generally available.
Looker (Google Cloud core) and Looker (original) changes
Change
The new LookML runtime now allows a wider variety of strings for Liquid date parsing. Date string formats that were previously accepted in the legacy runtime but not in the new runtime should now format properly.
Looker (Google Cloud core) only changes
Change
When you create a Looker (Google Cloud core) instance, the Google Cloud console now displays a cost estimate on the right side of the console pane.
Looker (Google Cloud core) and Looker (original) changes
Change
Cookieless embedding no longer requires that the Persistent Sessions setting on the Admin > Authentication > Sessions panel be enabled.
Looker (Google Cloud core) and Looker (original) changes
Change
Now generally available, the new permissions manage_project_connections , manage_project_models , and use_global_connections let admins delegate connection creation and model connection.
Looker (Google Cloud core) only changes
Feature
Looker (Google Cloud core) instances can now be created with the Google Cloud Terraform Provider, by provisioning a google_looker_instance resource . To learn more about this release, please see the Google Cloud Terraform Provider documentation .
Looker (Google Cloud core) and Looker (original) changes
Feature
Admins and other System Activity users can now easily see all recent queries to your Looker instance from Looker's BI Connectors , using the new Recent BI Connector Queries Quick Start in the System Activity History Explore. This quick start shows BI Connector queries from the last seven days by connector, user, Looker model, and other relevant dimensions.
Looker (Google Cloud core) and Looker (original) changes
Feature
In the new LookML runtime, using the Liquid case tag with a parameter value of type: string will evaluate the same as the legacy runtime.
Looker (Google Cloud core) and Looker (original) changes
Feature
An embed_domain parameter has been added to the signed embed url creation endpoint to streamline the process of adding a domain to the embed domain allowlist. If the parameter is passed to the endpoint, is valid, and is not found in the current allowlist, it will be added before the created URL is passed back to the API caller.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where suggestions failed to populate on Exasol connections has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where suggestions were not working when a field's derived table referenced another view in Liquid has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with visualization options for table calcs not being added to the generated dashboard LookML has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Project level README files will not be overwritten when new project files are generated.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with navigating to group folders when viewing SSO embedded content has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where geoJSON map layers would not load on embedded content has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When hitting the Get Async Query Results endpoint for queries in JSON formats, Looker now returns a meaningful error.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The drilling dialog will now inherit the visualization settings from the query or dashboard element from which drilling was initiated. For example, conditional formatting and color collection settings will carry over to the visualization in the drilling dialog.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where a hardcoded row limit of 5000 would cause visualization options to disappear has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue where the Blocks section of the left navigation panel would load indefinitely on certain pages has been fixed.
July 12, 2023
Looker (Google Cloud core) and Looker (original) changes
Announcement
Two new "cookbooks," or collections of instructions for common use cases, have been added to the Best Practices section of the Looker documentation site. The Getting the most out of Looker visualizations guide describes some common use cases for customizing visualizations, and the Maximizing code reusability with DRY LookML guide presents a series of use cases for applying DRY (don't repeat yourself) principles to your LookML development.
Looker (Google Cloud core) and Looker (original) changes
Announcement
The Looker API reference documentation is now available on the Looker documentation site at https://cloud.google.com/looker/docs/reference/looker-api/latest .
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 23.12 includes the following changes, features, and fixes.
Expected Looker (original) rollout start: Tuesday July 18, 2023
Expected Looker (original) final deployment and download available: Thursday July 27, 2023
Looker (Google Cloud core) deployments will be receiving Looker 23.12 and Looker 23.14 changes simultaneously, during the Looker 23.14 release. See the Looker (Google Cloud core) and Looker (original) changes section of the 23.14 release notes for deployment dates.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Changes to the settings API : Users with the manage_embed_settings or manage_privatelabel permission will now have limited access to the API. Users with the manage_embed_settings permission can update the embed_cookieless_v2 field , and users with the manage_privatelabel permission can update the whitelabel_configuration field.
Looker (Google Cloud core) and Looker (original) changes
Change
For customer-hosted Looker instances, Looker now fails to start if an appropriate version of the git command line tool is unavailable.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Lexp expression matches_filter now supports the tier, location, and zip code LookML field types.
Looker (Google Cloud core) and Looker (original) changes
Feature
The new Border Radius option for custom embed themes lets you adjust how rounded the corners in dashboard tiles will appear.
Looker (Google Cloud core) and Looker (original) changes
Feature
BigQuery OAuth access for a user's Drive is now read-only.
Looker (Google Cloud core) and Looker (original) changes
Feature
Custom links in alert and scheduled email deliveries can now specify a URL that uses content slugs .
Looker (Google Cloud core) and Looker (original) changes
Feature
Downloads of embedded dashboards or embedded dashboard tiles that have a custom theme applied will be displayed using the custom theme.
Looker (Google Cloud core) and Looker (original) changes
Feature
Looker (Google Cloud core) now supports the following regions:
us-east1 (South Carolina)
europe-north1 (Finland)
europe-west1 (Belgium)
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, a query that used custom measures could fail to render data on dialects that support APPROXIMATE COUNT DISTINCT . This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker access filters now work with bind-filters and bind_all_filters when used in an NDT.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Looker Marketplace functionality has been restored for Looker (Google Cloud core).
Looker (Google Cloud core) and Looker (original) changes
Fixed
In Looker 23.12, Looker rendering supports Chrome versions up to and including Chrome 114. Looker versions earlier than Looker 23.10 support up to Chrome version 109.
Looker (Google Cloud core) and Looker (original) changes
Fixed
LookML that is generated from results will no longer double-quote labels that contain spaces.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Incorrect alignment of error messages on dashboard visualizations has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Failures during updates to Marketplace installations now show meaningful errors.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, a derived table could fail to pick up on a filter value declared on the Explore level in a view that referenced the derived table via ${SQL_TABLE_NAME} . This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The documentation has been updated regarding the behavior of the order_by_fields parameter when a table is being downloaded.
June 14, 2023
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 23.10 includes the following changes, features, and fixes.
Expected Looker (original) rollout start: Tuesday, June 20, 2023
Expected Looker (original) final deployment and download available: Wednesday, June 28, 2023
Expected Looker (Google Cloud core) deployment start: Friday, June 30, 2023
Expected Looker (Google Cloud core) deployment end: Friday, July 14, 2023
Looker (Google Cloud core) and Looker (original) changes
Breaking
Liquid value and rendered_value now return YYYY-MM-DD style dates for date references.
Looker (Google Cloud core) and Looker (original) changes
Breaking
YAML LookML projects, except for LookML dashboards, will now return an error, and all content that is based on YAML LookML projects will break.
Looker (Google Cloud core) and Looker (original) changes
Breaking
When you are exporting data to, for example, a CSV file, a date field backed by a string column in the backend database will now serialize the same as a date field backed by a date column: YYYY-MM-DD.
Looker (Google Cloud core) and Looker (original) changes
Breaking
The LookML generator will always generate LookML for new projects, derived tables, and aggregate tables.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Starting in Looker 23.10, SSO embed functionality, including SSO embed APIs and other SSO embed-specific features, is disabled on the Standard and Enterprise editions of Looker (Google Cloud core) instances.
Looker (Google Cloud core) and Looker (original) changes
Breaking
Until API 3.0 and 3.1 are disabled in Looker 23.12, the new Deny API 3.x requests Legacy feature toggle can be used to configure a Looker instance to reject API 3.x requests and log those requests to the Looker system log. This will cause API 3.x requests on that instance to fail, allowing administrators to verify that no remaining calls are made to API 3.0 and 3.1.
Looker (Google Cloud core) and Looker (original) changes
Change
The Looker-Power BI Connector is now generally available. This connector lets users explore modeled Looker data through the Power BI interface. A Looker admin must enable this feature in the BI Connectors Admin page .
Looker (Google Cloud core) and Looker (original) changes
Change
The new URL for the Looker Marketplace CDN is https://static-a.cdn.looker.app/marketplace/ instead of https://marketplace-api.looker.com/ . If your Looker instance configuration requires explicit access to the Marketplace CDN, use the new domain value. The content at both URLs is identical, but https://marketplace-api.looker.com/ is now deprecated.
Looker (Google Cloud core) and Looker (original) changes
Change
By default, new LookML projects require data tests to pass : If your project has one or more test parameters, you must run the data tests and the data tests must pass before you can deploy the project to production.
Looker (Google Cloud core) and Looker (original) changes
Change
The Looker deployment process is now asynchronous when it is triggered by the deploy webhook. The deploy webhook will no longer require deployment to complete prior to responding, speeding up the webhook response time. With this change, the deploy webhook response will no longer contain commit information.
Looker (Google Cloud core) and Looker (original) changes
Change
Performance of Git pull operations has been improved by leveraging Looker's required shared file system mount, since Looker does not support clustered deployments without a shared file system.
Looker (Google Cloud core) and Looker (original) changes
Feature
The new Embed Your Data Welcome Guide steps first-time embedding users through creating a private embed URL for a dashboard, applying a theme to an embedded dashboard, and links to a new codelab that demonstrates how to create an SSO embed URL using one of Looker's publicly available scripts.
Looker (Google Cloud core) and Looker (original) changes
Feature
SQL format queries will now be supported by the create_query_task API.
Looker (Google Cloud core) and Looker (original) changes
Feature
PNG downloads of visualizations from embedded Explores, Looks, and dashboards can now use applied themes .
Looker (Google Cloud core) and Looker (original) changes
Feature
The model_fieldname_suggestions API endpoint now supports fields with suggest_dimension defined. Previously these would return a 404 error.
Looker (Google Cloud core) and Looker (original) changes
Feature
The new Get embed URL feature lets you automatically generate a private embedding URL for a dashboard, a Look, or an Explore. The embed URL can optionally include parameters, such as filter values, and apply an existing theme .
Looker (Google Cloud core) and Looker (original) changes
Feature
Custom filters now support the zipcode data type for the matches_filter function.
Looker (Google Cloud core) and Looker (original) changes
Feature
A function has been added to ensure that required fields are added to pivot fields to address an ordinal error. Additionally, a new function ensures that there are no duplicate fields in the ORDER BY.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An update to the GitLab Merge Request URL due to a new naming scheme from GitLab has fixed a 404 issue.
Looker (Google Cloud core) and Looker (original) changes
Fixed
In Looker 23.10, Looker rendering supports Chrome versions up to and including Chrome 113. Looker versions earlier than Looker 23.10 support up to Chrome version 109.
Looker (Google Cloud core) and Looker (original) changes
Fixed
For email destinations, the delivery time zone set will be applied to the filename of the schedule sent.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When BI Engine Optimization is enabled, filter_expression for custom measures is supported.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The New LookML Runtime will not generate symmetric aggregate SQL for measures that have a sql_distinct_key that references dimensions in different views. This is also true if a dimension with primary_key: yes references a dimension in a different view.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, users were unable to right-click to drill down on a point of a line/area/scatter series that had been customized from a column/bar chart and been put on a cross filtered dashboard. This issue has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A bug has been fixed for Legacy BigQuery that was preventing the approximate_threshold value from being added to the query SQL.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A bug has been fixed where previously a blank filter value would still bring in required_fields in the New LookML Runtime.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Fixed time fields with a yesno timeframe now display their names as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
When grouping fields or creating custom measures in Explore, the "matches a user attribute" feature of the filters is fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Markdown files in LookML projects are no longer accessible to Embed users through the "View Document" URLs described on the Types of files in a LookML project documentation page.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue with rendering JPGs via the Looker API has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An error when trying to go fullscreen from a dashboard has been fixed.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Selecting dashboard filter values containing a backslash and another special character will now properly filter the data.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The CTE order for derived tables that share a common ancestor is now as expected.
May 10, 2023
Looker (Google Cloud core) and Looker (original) changes
Announcement
Looker 23.8 includes the following changes, features, and fixes.
Expected Looker (original) rollout start: Monday, May 15, 2023
Expected Looker (original) final deployment and download available: Wednesday, May 24, 2023
Expected Looker (Google Cloud core) deployment start: Monday, May 29, 2023
Expected Looker (Google Cloud core) deployment end: Wednesday, June 7, 2023
Looker (Google Cloud core) and Looker (original) changes
Change
The API3 keys setting on the Admin API page is now named API keys, in preparation for the deprecation of API3 in June 2023.
Looker (Google Cloud core) and Looker (original) changes
Change
Users will now be warned when text on a dashboard tile is close to reaching the maximum length of 256 characters.
Looker (Google Cloud core) and Looker (original) changes
Change
The Hide dashboard filters feature is now generally available.
Looker (Google Cloud core) and Looker (original) changes
Change
Starting in Looker 23.6, customer-hosted Looker instances require Git 2.39.1 or later on the host image. (See the Installing the Looker application documentation page for the full list of requirements for customer-hosted Looker instances.) Git 2.39.1 supports Git worktrees instead of complete Git history clones. Looker uses Git worktrees to provide faster entry into Developer Mode, among other benefits.
Looker (Google Cloud core) and Looker (original) changes
Change
The New Explore Visualizations Labs feature is now generally available. The Explore page, Looks, embedded Looks or Explores, and dashboard tile edit windows will display the same style of funnel chart , timeline , single value, and table visualizations as those that appear on dashboard tiles. Additionally, the drill overlay that appears when you drill into an Explore will match the style of the drill overlay that appears in dashboards, instead of the style that appears in Looks.
Looker (Google Cloud core) and Looker (original) changes
Change
Previously, a LookML validation error occurred when a project_name parameter was added to a project manifest file that also defined a Looker extension . This LookML error was triggered when the Local Project Import Labs feature was disabled for the Looker instance. Looker extensions do not require local project import, so with this bug fix this scenario will no longer trigger a LookML validation error.
Looker (Google Cloud core) and Looker (original) changes
Feature
Cookieless embed API endpoints are now marked as stable.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Source column in the Admin > Queries panel now correctly displays the API version for queries that are initiated from the Looker API.
Looker (Google Cloud core) and Looker (original) changes
Feature
The Looker IDE will now display an error when incompatible types are being compared in Liquid statements.
Looker (Google Cloud core) and Looker (original) changes
Feature
When the filter definition for matches_filter is empty, 1=1 will be added to the WHERE clause so that there are no SQL errors and the query can run. This functionality mirrors the is equal to [empty] standard filter option.
Looker (Google Cloud core) and Looker (original) changes
Feature
When the Advanced Vis Config Labs feature is enabled, any user who has either the Looker Admin role or the can_override_vis_config permission can access the Chart Config Editor . This editor lets users modify HighCharts visualizations by exposing certain JSON parameters of the visualization to enable deep customization. These customizations will not dynamically interact with data.
Looker (Google Cloud core) and Looker (original) changes
Fixed
A new input for specifying a minimum column width override value enables PDFs with a large number of columns to render properly.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Previously, the Content Validator wasn't updating column_order references during rename/replace operations. This issue has been addressed, and the fix adds visualization configuration field references to the Content Validator that were previously missing.
Looker (Google Cloud core) and Looker (original) changes
Fixed
The Remove option is no longer available for removing table calculations from merged Explore queries . Use the Delete option instead.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Sorting for custom bin fields on New LookML Runtime now sorts by tier number as expected.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was fixed where, previously, a row's value could be mapped to different tiers for a custom bin field and the internal sort field generated for it.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was fixed that caused users to be unable to select a domain from an allowlist with more than one item when including a custom link for scheduling.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Contents that are displayed in table visualization cells now shift to avoid being cut off when a column is too narrow to display the full range of values.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Y-axis scales are no longer miscalculated in bar charts or column charts with trellised grid layouts.
Looker (Google Cloud core) and Looker (original) changes
Fixed
An issue was fixed for the BigQuery Standard SQL dialect with the Optimistic Pivot feature where pivoted results weren't included for downloads.
Looker (Google Cloud core) and Looker (original) changes
Fixed
Conditional formatting logic that is applied in visualization settings now honors hidden No values when the Hide Nos from Visualization setting is applied.
May 08, 2023
Looker (Google Cloud core) only changes
Announcement
Looker (Google Cloud core) is now generally available for the Looker 23.6 release.
For more information, see the Looker now available from Google Cloud console blog post.
April 14, 2023
Looker (original) only changes
Announcement
The Looker 23.6 release includes the following changes, features, and fixes.
Expected rollout start: Monday, April 17th, 2023
Expected final deployment and download available: Thursday, April 27th, 2023
Looker (original) only changes
Change
The New LookML Runtime will only return Liquid variable not found references on parameter tags if the field reference refers to a field that is in the scope of the current Explore being validated.
Looker (original) only changes
Change
The Liquid date filter %Y will now return YYYY instead of YYYY-MM-DD with New LookML Runtime.
Looker (original) only changes
Change
The SQL generator is now fixed and adds a ${TABLE} to a field's generated LookML only when there is no other LookML reference to that field.
Looker (original) only changes
Change
The LookML string type is now referenced correctly and no number formatting will occur.
Looker (original) only changes
Change
You can no longer upgrade dashboards from the Folders page because legacy dashboards have been deprecated in this release.
Looker (original) only changes
Change
The Liquid parameter tag and _parameter_value variables now return a date string rather than date SQL in non-SQL contexts (for example, the html and link LookML parameters) for date parameters.
Looker (original) only changes
Change
The Legacy Dashboards Button Colors section has been removed from the Admin > Themes page because legacy dashboards are removed in this release.
Looker (original) only changes
Change
The Can Access Legacy Dashboards legacy flag has been removed because legacy dashboards are fully deprecated and removed in this release. Now all legacy dashboards are shown in the new dashboard viewer.
Looker (original) only changes
Change
Code for legacy dashboards has been removed because legacy dashboards are fully deprecated and removed in this release. Now all legacy dashboards are shown in the new dashboard viewer.
Looker (original) only changes
Change
References to legacy dashboards have been removed from the Admin > Themes page .
Looker (original) only changes
Feature
Customers can now set the position of pop-up dialogs in an embedded environment. Customers must make changes to their embedded applications to take advantage of this feature. Methods have been added to the Embed SDK, and an updated Embed SDK has been published. The Embed SDK repository has also been updated to provide examples of using this feature with the Embed Javascript (windows postMessage) API.
Looker (original) only changes
Feature
Content thumbnails now support dark theme.
Looker (original) only changes
Feature
Looker now supports incremental PDTs for Databricks connections when Databricks version 12.1 or later is used.
Looker (original) only changes
Fixed
The custom fields in filter expressions are now referenced correctly instead of returning "inaccessible field name" errors.
Looker (original) only changes
Fixed
If a browser does not support full-screen displays, a full-screen menu item is not displayed. By default, iframes do not support full screen. This behavior can be overridden by adding allow=fullscreen to the iframe element. The Embed SDK has been updated to support this.
Looker (original) only changes
Fixed
Previously, having no results in a pivot led to an error when the Scheduler was used to send a PDF. This issue has been fixed.
Looker (original) only changes
Fixed
When trend lines were used in a scatter plot visualization, PDF rendering was causing an error. This issue has been resolved.
Looker (original) only changes
Fixed
Donut multiples now render custom HTML labels in the legend and tooltip.
Looker (original) only changes
Fixed
The New LookML Runtime now shows the correct parameter localization translation.
Looker (original) only changes
Fixed
Previously, when all data was hidden with the "Hide No's from Vis" option, the PDF renderer failed and returned an error. This behavior has been fixed. A successful PDF is created with a "No Results" message.
Looker (original) only changes
Fixed
The average_distinct measure computed through a number type measure in the Snowflake dialect has been fixed and no longer returns a SQL error.
Looker (original) only changes
Fixed
An issue has been fixed that caused custom visualizations to become blank when they were moved during dashboard edits. Custom visualization tiles no longer lose content when you move a tile during a dashboard edit.
Looker (original) only changes
Fixed
The performance of the add filter to dashboard modal has been improved. A calculation that took ~4s in earlier Looker versions now takes ~4ms (1,000 times faster).
Looker (original) only changes
Fixed
Dashboards with duplicate filters can now be restored from the trash.
Looker (original) only changes
Fixed
The left sidebar content is no longer selectable when the sidebar is closed.
Looker (original) only changes
Fixed
An issue has been fixed where having no results in a pivot led to an error when a PDF was downloaded.
March 14, 2023
Looker (original) only changes
Announcement
Looker 23.4 release includes the following changes, features, and fixes.
Looker (original) only changes
Change
The unversioned Denodo dialect was deprecated in Looker as of January 31, 2023. Any queries run against it will return an error. The updated dialects (Denodo 7 or Denodo 8) continue to be supported. However, customers running Denodo 7 are encouraged to move to Denodo 8.
Looker (original) only changes
Change
Support for YAML LookML is scheduled to end in the latter part of June 2023. All YAML LookML projects will generate a warning to this effect upon project validation, and all instances of YAML LookML must be converted to New LookML by this date.
Looker (original) only changes
Change
The New Users Page and New Groups Page Labs features are now generally available. These features add a host of performance improvements to the Users and Groups pages, including pagination options on the Groups page.
Looker (original) only changes
Change
The download dashboard modal now allows CSV download without Chromium. If the user is an admin, a message about installing Chromium is displayed.
Looker (original) only changes
Change
The Support Access page in the Admin panel now contains a link to an upgraded support access audit dashboard .
Looker (original) only changes
Fixed
When New LookML Runtime is enabled, fields of type: parameter are no longer automatically added to the SELECT statement of generated SQL queries. Any references to parameter type fields using Liquid will still apply to SQL queries.
Looker (original) only changes
Feature
The Looker Studio Connector and Connected Sheets features are now available for all Looker-hosted instances, including those Looker-hosted on AWS and Azure. Previously, these features were available only for instances that were Looker-hosted on Google Cloud. A Looker admin must enable these features in the new BI Connectors Admin page .
Looker (original) only changes
Fixed
The grid visualization feature now correctly styles different column types using classic themes and contrasting colors.
Looker (original) only changes
Feature
The new logging feature allows Looker to collect metrics on the number of NFS read, write, open, and status operations.
Looker (original) only changes
Fixed
Distinct measure types such as count_distinct and sum_distinct now bring through their filter values when referenced in a number type measure.
Looker (original) only changes
Fixed
The Create Connection and Edit Connection pages have received a design refresh for improved clarity and usability.
Looker (original) only changes
Feature
The Performant Field Picker Labs feature offers more refined search options, which let users more quickly and efficiently search for fields in large Explore field pickers .
Looker (original) only changes
Fixed
The Query Reload custom filter in the Automagic Heatmap now correctly maintains the rendered data after every refresh. Previously, Looker removed the custom filter when a user refreshed a query.
February 10, 2023
Looker (original) only changes
Announcement
Looker 23.2 is released. The Looker 23.2 release includes the following changes, features, and fixes.
Looker (original) only changes
Change
The Use Legacy Internal Query API legacy feature is now disabled by default. When this feature is disabled, Explores, Looks, and SQL Runner use the upgraded internal API for running queries. Upgrading the internal query API does not affect applications that use the externally available Looker API.
Looker (original) only changes
Change
Users will no longer be able to view legacy dashboards unless a Looker admin turns on the Can use Legacy Dashboards legacy flag on the instance. This is in preparation for the complete deprecation of legacy dashboards in Looker 23.6.
Looker (original) only changes
Change
When users are running model-based SQL Runner queries, the New Query Admin page should not show Error fetching requested Queries .
Looker (original) only changes
Change
The Admin > Usage page now uses the new dashboard experience.
Looker (original) only changes
Feature
The Presto and Trino dialects now support the approximate parameter.
Looker (original) only changes
Feature
A new Center Dashboard Title dashboard control on the Admin > Themes page lets you center dashboard titles on embedded dashboards.
Looker (original) only changes
Fixed
An issue has been fixed where a persistent derived table (PDT) that was referenced in the SQL of the query and a dependency of another PDT that was both referenced in that same SQL query and required with a direct join would not build unless the parent PDT was also required to be rebuilt in that query. This occurred only when New LookML Runtime was enabled.
Looker (original) only changes
Feature
Error logging for cookieless embed has been improved. Additional error details are logged if an issue is detected while Looker is processing a cookieless embed request.
Looker (original) only changes
Fixed
The gray theme in Grid visualizations now works as expected.
Looker (original) only changes
Feature
Looker has added merged_queries and join_fields as legal types for extending dashboards.
Looker (original) only changes
Feature
A new parameter, Email Domain Allowlist , has been added to the external settings API. This parameter takes an array of email domains of type: string as input. Email Domain Allowlist validates these email domains and saves them to the email domain allowlist if the domains are valid.
Looker (original) only changes
Fixed
Dashboard URLs in alerts are now rendered as expected.
January 11, 2023
Looker (original) only changes
Announcement
The Looker 23.0 release includes the following changes, features, and fixes.
Looker (original) only changes
Change
The Legacy Render Card Height legacy feature is now removed.
Looker (original) only changes
Change
The Use Legacy Internal Query API legacy feature , when enabled, configures Explores , Looks , and SQL Runner to use the legacy API for running queries. When this feature is disabled, Explores, Looks, and SQL Runner use the upgraded internal API for running queries. Upgrading the internal query API does not affect applications that use the externally available Looker API. This legacy feature is enabled by default for Looker 23.0 and will be disabled by default starting in Looker 23.2.
Looker (original) only changes
Change
The BI Engine Optimizations feature is removed from Labs and is now generally available and enabled for all Looker instances. With BI Engine optimizations, Looker will generate experimental SQL patterns for certain types of LookML queries that use a BigQuery database connection. These SQL changes are designed specifically to execute faster on Google BigQuery's BI Engine. This feature affects the query runtime and has no effect on query results.
Looker (original) only changes
Fixed
Drill fields are no longer added to links in New LookML Runtime when they are not accessible in the context of the given Explore.
Looker (original) only changes
Fixed
The new_lookml_runtime parameter, when used in conjunction with the sql_always_where and always_filter parameters, now works as expected when there is an always_filter option on a parameter with no form value in the Explore.
Looker (original) only changes
Change
The Athena JDBC driver is now upgraded from 2.0.27 to 2.0.35.1000.
Looker (original) only changes
Change
If an API request to create or edit database connections passes a value that is less than the 90-second minimum for the pool_timeout parameter, an error will be returned to enforce the minimum allowed pool_timeout value.
Looker (original) only changes
Feature
Scatterplot charts now contain an option to customize the value label for data points to any of the dimensions that are present in the visualization.
Looker (original) only changes
Feature
The settings API 4.0 endpoint now allows for setting the instance-wide host URL.
Looker (original) only changes
Feature
The Expanded Dashboard Theming Labs feature, which lets admin users display and hide dashboard header elements on embedded dashboards , is now available.
Looker (original) only changes
Fixed
The external group folder in embedded content navigation will now appear as the Group folder name instead of in the external_group_id .
Looker (original) only changes
Feature
The Looker Studio connector is now generally available on the BI Connectors page in the Admin panel. When enabled, the Looker Studio connector lets you access data from Looker Explores within Looker Studio by adding an Explore as a data source in a Looker Studio report. See the Connect to Looker article in the Looker Studio help center for more information about how to use the Looker connector in Looker Studio.
Looker (original) only changes
Feature
Cookieless embed session status events are now published.
Looker (original) only changes
Fixed
Label parameters, Times, and DateTimes formatting for the New LookML Runtime feature now work as expected.
Looker (original) only changes
Feature
The Custom urls for alert and schedule emails Labs feature lets you customize the View full dashboard links in emailed alerts and scheduled email deliveries . Both link URL and link text can be customized.
Looker (original) only changes
Feature
The Hide Dashboard Filters Labs feature lets users hide dashboard filters through the dashboard URL , using the new hide_filters URL parameter.
Looker (original) only changes
Feature
Explores and Looks now use the correct fonts.
Looker (original) only changes
Fixed
When the liquid_filters parameter is being used and no value is set in the new_lookml_runtime parameter, there is now parity between New LookML Runtime and legacy LookML
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
