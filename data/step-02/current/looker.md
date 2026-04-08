# Looker

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 368
Unique features: 327

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | AlloyDB for PostgreSQL connections |  | This feature adds full Looker support for connections to Google Cloud AlloyDB for PostgreSQL; Looker now supports full connections to Google Cloud AlloyDB for PostgreSQL in preview through the Dialect menu. |
| 2026-03-30 | Conversational Analytics data agents in dashboards |  | This feature lets users chat with Conversational Analytics data agents in user-defined and LookML dashboards. |
| 2026-03-30 | Conversational Analytics data agents publishing to Gemini Enterprise |  | This feature lets you publish Conversational Analytics data agents from Looker to Gemini Enterprise. |
| 2026-03-30 | Dataplex Universal Catalog integration for Looker |  | This integration makes Looker metadata discoverable and manageable in Dataplex Universal Catalog. |
| 2026-03-30 | Enhanced Content Cleanup |  | This preview feature adds enhanced content management tools for identifying and cleaning up unused Looker content. |
| 2026-03-30 | JDBC parameter allowlist for database connections |  | This feature restricts additional JDBC parameters to a supported allowlist for each database dialect. |
| 2026-03-30 | Looker and Dataplex lineage integration |  | This integration tracks end-to-end lineage from BigQuery to Looker content for impact analysis. |
| 2026-03-30 | New Looker Explore and Merge Query Experience |  | This preview feature provides redesigned Explore and Merge Query interfaces in Looker. |
| 2026-03-26 | Conversational Analytics Fast mode |  | This mode returns answers more quickly for Conversational Analytics questions. |
| 2026-03-26 | Conversational Analytics query clarification |  | This feature prompts users with clarifying questions when a Conversational Analytics query is ambiguous. |
| 2026-03-26 | Conversational Analytics Thinking mode |  | This mode supports more complex Conversational Analytics questions and agent testing. |
| 2026-03-20 | Dashboard links in the Looker mobile app |  | This feature lets users open dashboard links directly in the Looker mobile app. |
| 2026-03-20 | Tabbed dashboards in the Looker mobile app |  | This feature adds support for tabbed dashboards in the Looker mobile app. |
| 2026-03-17 | AI-assisted Quick Starts |  | AI-assisted Quick Starts automatically generates Quick Start analyses for Explores. |
| 2026-03-17 | Content certification |  | Content certification marks trusted LookML dashboards and Explores and supports automatic certification and certification-aware search; Content certification now includes admin controls, support for LookML dashboards, an ungoverned badge for uncertified content, and certification-aware search sorting. |
| 2026-03-17 | Conversational Analytics question modes |  | Conversational Analytics question modes provide Fast mode for quicker answers and Thinking mode for more complex questions. |
| 2026-03-17 | Custom calendars |  | Custom calendars let Looker models use custom calendar tables and custom calendar dimension groups for time-based analysis. |
| 2026-03-17 | Dashboard Tile Limits |  | This preview feature lets admins limit how many query tiles can be added to each dashboard tab. |
| 2026-03-17 | Disable Connection |  | Disable Connection lets admins disable a database connection so Looker stops sending queries to it and returns an error to users. |
| 2026-03-17 | Enhanced Search |  | Enhanced Search uses Gemini in Looker to find saved content by conceptual meaning and supports filtering by content metadata. |
| 2026-03-17 | Increased Row Limit |  | Increased Row Limit lets admins raise visualization row limits for maps, scatterplots, and tables up to 50,000 rows or datapoints. |
| 2026-03-17 | Looker Continuous Integration |  | Looker Continuous Integration validates content through CI suites and integrates with GitHub-triggered runs; Looker CI lets you run validators on LookML projects to catch SQL, data test, content, and LookML issues before production. |
| 2026-03-17 | LookML Assistant |  | LookML Assistant suggests LookML parameters from natural-language prompts added to project files. |
| 2026-03-17 | Self-service Explores |  | Self-service Explores lets users upload and analyze data in Explores, including from Google Sheets when OAuth uploads are enabled; Self-service Explores can now be updated with data from the latest version of the source file used to create them. |
| 2026-03-17 | Visualization Assistant |  | Visualization Assistant lets users customize Looker visualization formatting with natural-language prompts using Gemini assistance; Generates custom formatting options for Looker visualizations from natural-language prompts. |
| 2026-03-12 | IP allowlists |  | Looker (Google Cloud core) instances with public or hybrid connections can restrict access to specified IP addresses using IP allowlists. |
| 2026-03-11 | Legacy LookML parser | 2026-03-11 | The legacy LookML parser can be disabled on customer-hosted Looker 26.4 instances and is fully deprecated in Looker 26.6; deprecated on 2026-03-11. |
| 2026-03-11 | LookML parser |  | Customer-hosted Looker 26.4 instances use a new optimized LookML parser, matching the parser already used by Looker-hosted instances. |
| 2026-03-09 | Automatic OAuth credential management |  | Looker (Google Cloud core) can automatically manage OAuth client and secret information for instances that use only public secure connections and no custom domain. |
| 2026-03-05 | Access Content Certification |  | Access Content Certification is available as a preview feature in Looker (Google Cloud core). |
| 2026-03-05 | Custom tooltips |  | Custom tooltips are generally available in the Explore visualization editor and support UI settings plus an HTML editor with Liquid templating for most visualization types; Custom Tooltips lets users configure Explore visualization tooltips with UI controls and an HTML editor that supports Liquid templating. |
| 2026-03-05 | Dashboard filter enhancements |  | Dashboard filter enhancements are generally available and improve filter selection, bulk selection, advanced filter controls, and board defaults; Dashboard filter controls gain persistent suggestion menus, bulk selection, advanced filter limits, and a default board setting for custom filter values. |
| 2026-03-05 | Embed Conversational Analytics |  | Embed Conversational Analytics is generally available, including support on Looker (Google Cloud core), the Looker embed SDK, and partial embedded theme support; Conversational Analytics conversations and agents can be embedded in an iframe like other Looker content types. |
| 2026-03-05 | Granular Dashboard Sizing |  | Granular Dashboard Sizing is available as a preview feature in Looker (Google Cloud core); Dashboard editors can adjust the size and layout of dashboard tiles with finer-grained controls. |
| 2026-03-05 | Internal Dashboard Theming |  | Internal Dashboard Theming is available as a preview feature in Looker (Google Cloud core); Users can apply predefined themes to Looker dashboards and manage them with the manage_internal_themes permission. |
| 2026-03-05 | Looker Conversational Analytics API endpoints |  | The Looker API now includes Conversational Analytics endpoints for creating and managing agents, conversations, and messages. |
| 2026-03-05 | Preview Features page |  | The Admin panel's Preview Features page lets admins enable or disable in-progress features and replaces the Labs page; The Admin panel's Labs page has been renamed Preview Features and now organizes in-progress features into preview and labs categories. |
| 2026-03-05 | Tile Download Default Options |  | Tile Download Default Options is available as a preview feature in Looker (Google Cloud core). |
| 2026-03-02 | Looker (Google Cloud core) backups |  | Backups for Looker (Google Cloud core) instances can now be created, viewed, restored, and deleted in the Google Cloud console. |
| 2026-02-17 | Dashboard tile download default options |  | Dashboard editors can set default download options for dashboard tiles, including result scope and custom row and column limits. |
| 2026-02-17 | Git branch unlock |  | LookML developers can unlock a locked Git branch from the Looker IDE when Git operations fail or are still in progress. |
| 2026-02-17 | In-database merge queries |  | Merge queries on the same BigQuery connection can now be joined in the database instead of in Looker memory. |
| 2026-02-17 | schedule_without_limit permission |  | The schedule_without_limit permission lets admins restrict a user's ability to deliver all data results from a Look or Explore. |
| 2026-02-17 | System Activity User Activity dashboard |  | The User Activity dashboard has been updated with authentication troubleshooting details such as login failures, methods, errors, and timestamps. |
| 2026-02-09 | Conversational Analytics |  | Conversational Analytics lets users ask questions and analyze queries in natural language; Lets users query Looker Explore data in natural language. |
| 2026-02-09 | Gemini in Looker |  | Gemini in Looker provides AI-assisted features in Looker; Provides Gemini-based AI features in Looker for supported instances. |
| 2026-02-09 | IP allowlist exceptions for essential Google Cloud services |  | Looker admins can allow essential Google Cloud services to access an instance even when an IP allowlist is active. |
| 2026-02-09 | Password expiration policy |  | Admins can enforce password expiration windows for users who authenticate with an email and password. |
| 2026-02-09 | SFTP content delivery algorithms |  | SFTP content delivery now supports additional key exchange and host key algorithms. |
| 2026-02-09 | SQL Runner schema and table limits |  | The SQL Runner schema and table limit preview increases the number of schemas that can be returned to SQL Runner. |
| 2026-02-09 | User attribute pairing management |  | User attribute pairing management adds a side panel for adding, removing, viewing, filtering, and paginating attribute pairings. |
| 2026-02-06 | DataRobot action | 2026-02-06 | The DataRobot action enabled Looker users to send content through the Looker Action Hub; Lets Looker users send data to DataRobot through the Looker Action Hub; deprecated on 2026-02-06. |
| 2026-02-02 | Conversational Analytics Show reasoning |  | Conversational Analytics includes a Show reasoning control that explains how it interprets and answers queries; Conversational Analytics includes a Show reasoning control that explains how it interprets and answers queries. |
| 2026-01-28 | Public egress IP address visibility |  | Looker users can view the public egress IP addresses for instances that use Private Service Connect and controlled native egress. |
| 2026-01-26 | Continuous Integration (CI) |  | Looker's Continuous Integration feature will receive updates in February 2026. |
| 2026-01-26 | Delete Developer Copy |  | A button in the Looker IDE lets LookML developers delete their local developer copy of a project's Git repository. |
| 2026-01-26 | Gemini in Looker Explore summaries and analyses |  | Gemini in Looker can generate summaries and analyses of Explores. |
| 2026-01-26 | Self-service Explores connection test |  | The Self-service Explores admin page includes a connection test button for verifying BigQuery support. |
| 2026-01-26 | Tabbed Dashboards |  | Dashboard editors can organize dashboard content across multiple tabs within a single dashboard; Lets dashboard editors organize dashboard content across multiple tabs within a single dashboard. |
| 2026-01-14 | Looker (Google Cloud core) Bangkok region availability |  | Looker (Google Cloud core) is available in the asia-southeast3 (Bangkok) region. |
| 2026-01-08 | advanced filter condition controls |  | Lets dashboard creators restrict which condition options users can choose in advanced filters. |
| 2026-01-08 | autogenerate_primary_keys parameter |  | Lets Looker generate a temporary distinct key at query runtime so symmetric aggregates and one-to-many counts work without changing the underlying table. |
| 2026-01-08 | Controlled native egress for Private Service Connect |  | Looker (Google Cloud core) instances using Private Service Connect can connect to Google APIs through controlled native egress. |
| 2026-01-08 | Custom Tooltips Labs feature |  | Lets users configure Explore visualization tooltips with UI settings and an HTML editor that supports Liquid templating. |
| 2026-01-08 | Databricks JDBC driver 3.0.5 |  | Updates the Databricks JDBC driver used by Looker connections to version 3.0.5. |
| 2026-01-08 | dedicated API-only service accounts |  | Lets admins create dedicated service accounts for API-only access and migrate eligible user accounts to them. |
| 2026-01-08 | default custom filter values for boards |  | Lets admins enable custom filter values for boards by default at the instance level. |
| 2026-01-08 | Encrypted key-pair authentication for Snowflake connections |  | Lets Looker use encrypted files for key-pair authentication on Snowflake connections. |
| 2026-01-08 | Excel worksheet selection for self-service Explores |  | Lets users choose which worksheet to upload when creating a self-service Explore from a multi-worksheet Excel file. |
| 2026-01-08 | Favoriting LookML Dashboards |  | LookML dashboards can be marked as favorites and shown on the Looker Favorites tab; LookML dashboards can now be marked as favorites and shown on the Looker Favorites tab. |
| 2026-01-08 | group mapping management UI |  | Provides an updated interface for managing LDAP, SAML, and OpenID Connect group mappings. |
| 2026-01-08 | JDBC driver for Apache Spark 3+ connections |  | The JDBC driver for Apache Spark 3+ connections has been updated to version 2.7.6. |
| 2026-01-08 | LookML dashboard favorites |  | Lets users mark LookML dashboards as favorites so they appear on the Looker Favorites tab. |
| 2026-01-08 | LookML dashboards folder pagination |  | The LookML dashboards folder now shows 30 dashboards per page. |
| 2026-01-08 | LookML dashboards in embedded content folders |  | Shows LookML dashboards when viewing folders in embedded content. |
| 2026-01-08 | PDT overrides key-pair authentication for Snowflake connections |  | Looker supports key-pair authentication in PDT overrides for Snowflake connections. |
| 2026-01-08 | persistent filter suggestion drop-down |  | Keeps filter suggestion drop-downs open to make multi-select filtering easier for tag list and advanced filters. |
| 2026-01-08 | search_lookml_dashboards API endpoint |  | The search_lookml_dashboards API endpoint is generally available after being out of Labs; Provides a generally available API endpoint for searching LookML dashboards. |
| 2026-01-08 | select/deselect all filter values control |  | Adds a control to select or clear all values in tag list and advanced filter types. |
| 2026-01-08 | SMTP OAuth 2.0 authentication |  | Adds OAuth 2.0 authentication for SMTP-based custom mail settings. |
| 2026-01-08 | string conditional formatting rules |  | Adds conditional formatting rules for string values in single value and table visualizations. |
| 2025-12-23 | API Usage System Activity Explore | 2025-12-23 | Historical data is no longer available in this Explore for Looker 25.16 and later instances; deprecated on 2025-12-23. |
| 2025-12-03 | Looker Action Hub connection test |  | Lets admins test the connection between a Looker instance and the Looker Action Hub. |
| 2025-12-03 | Self-service Explore |  | Lets users upload CSV, XLS, and XLSX files to Looker and query and visualize them without LookML or Git. |
| 2025-12-02 | Connected Sheets quick link |  | Adds a Connected Sheets option to Explore actions that opens Google Sheets and starts a connection to the selected Explore. |
| 2025-12-01 | Global access with Private Service Connect |  | Enables global access for Looker (Google Cloud core) instances that use Private Service Connect connections. |
| 2025-12-01 | Google-managed certificates for Private Service Connect |  | Uses Google-managed certificates to simplify custom domain setup for Looker (Google Cloud core) instances with Private Service Connect. |
| 2025-12-01 | Looker Tableau BI Connector |  | Makes the Looker Tableau BI Connector available on Tableau Exchange for Tableau Desktop and Tableau Server; Lets Tableau Cloud use a Looker Explore as a data source through the Looker Tableau BI Connector. |
| 2025-11-12 | Conversational Analytics in Looker |  | Conversational Analytics is generally available for Looker instances running Looker 25.18 or later. |
| 2025-11-11 | Scheduled export jobs for Looker (Google Cloud core) |  | Looker (Google Cloud core) instances can now schedule daily zero-downtime export jobs. |
| 2025-11-05 | Visual Drilling |  | Visual Drilling is generally available on the Admin > General Settings page; Visual Drilling has graduated from Labs and is generally available on the Admin > General Settings page. |
| 2025-10-31 | Private Service Connect outbound connections |  | Looker (Google Cloud core) instances using Private Service Connect can configure outbound connections to external domains or the Looker Marketplace more simply. |
| 2025-10-23 | Conversational Analytics System Activity dashboard |  | A System Activity dashboard now surfaces usage data for Conversational Analytics features, including popular data agents, Explores, and users. |
| 2025-10-23 | Conversational Analytics System Activity event tracking |  | System Activity Explores now include Conversational Analytics event and event-attribute data. |
| 2025-10-23 | Git repository cloning over HTTPS |  | Looker can clone public Git repositories using HTTPS URLs. |
| 2025-10-21 | Looker Status Dashboard |  | The Looker Status Dashboard provides real-time service availability and disruption updates for Looker-hosted instances. |
| 2025-10-10 | Conversational Analytics data agent access controls |  | New model-specific permissions and default roles let users manage and use Conversational Analytics data agents. |
| 2025-10-10 | Conversational Analytics data agent sharing |  | Users with the save_agents or admin_agents permission can share data agents with other users; Conversational Analytics data agents can now be shared so other users can chat with the agent and its Explores. |
| 2025-10-10 | Conversational Analytics data agent source limits |  | Data agents can now use up to five Looker Explores as data sources. |
| 2025-10-06 | Athena JDBC driver |  | The JDBC driver Looker uses for Amazon Athena connections was upgraded to version 2.2.2; A JDBC driver used for Looker connections to Amazon Athena. |
| 2025-10-06 | Auto Resize Value |  | Lets single value visualizations automatically resize their value text based on available space. |
| 2025-10-06 | Data History Playback |  | Provides a Data History Playback capability from the Admin > Settings page; Provides a Data History Playback capability from the Admin > Settings page. |
| 2025-10-06 | Prerender iframes for custom visualizations |  | Pre-renders iframes for custom visualizations from the Admin > Content Guardrails page; Pre-renders iframes for custom visualizations from the Admin > Content Guardrails page. |
| 2025-10-06 | Reduce Filter Queries |  | Reduces the number of filter queries Looker runs from the Admin > Settings page; Reduces the number of filter queries Looker runs from the Admin > Settings page. |
| 2025-10-06 | Smart single value text size |  | Automatically adjusts text size for single value visualizations; Automatically adjusts text size for single value visualizations. |
| 2025-10-02 | sql_preamble parameter |  | The sql_preamble parameter now supports Liquid statements. |
| 2025-09-30 | Conversational Analytics data agent sources |  | A Conversational Analytics data agent can now use up to five Looker Explores as data sources. |
| 2025-09-30 | Conversational Analytics default roles |  | Looker added the Conversational Analytics Agent Manager and Conversational Analytics User default roles for data agents. |
| 2025-09-30 | Conversational Analytics model-specific permissions |  | Looker now provides model-specific permissions for managing and using Conversational Analytics data agents. |
| 2025-09-23 | Gemini CLI extension for Looker |  | A dedicated Gemini CLI extension can connect to Looker to run queries, create Looks and dashboards, and retrieve LookML model elements. |
| 2025-09-10 | Full Screen Visualizations |  | The Full Screen Visualizations Labs feature is now generally available; The Full Screen Visualizations feature is now generally available. |
| 2025-09-10 | Looker (Google Cloud core) 90-day trial instances |  | Looker (Google Cloud core) 90-day trial instances are now available. |
| 2025-09-10 | Looker Power BI Connector |  | The Looker Power BI Connector is now supported for customer-hosted Looker instances and Looker (Google Cloud core) instances that use private connections; The Looker Power BI Connector now lets users show or display hidden fields when connecting to a Looker Explore. |
| 2025-09-10 | Looker-Excel Connector |  | The Looker-Excel Connector lets users open Explore results in Excel from the Explore gear menu. |
| 2025-09-10 | Spanner JDBC Driver |  | The Spanner JDBC Driver was updated to version 2.32.1 for Google Spanner connections. |
| 2025-09-10 | Suggest Queries |  | Suggest Queries now respects the concurrency limit configured for the connection. |
| 2025-08-13 | API Usage Hourly System Activity Explore |  | This Explore provides an hourly summary of API call volume and performance for the Looker instance. |
| 2025-08-13 | Athena driver |  | The Athena driver was updated to version 2.2.1 for Amazon Athena connections; The Athena driver has been updated to version 2.2.1 for Amazon Athena connections. |
| 2025-08-13 | Customer Engineer Advanced Editor default role |  | A new default role grants support access to Google Cloud customer engineers. |
| 2025-08-13 | dashboard:tile:merge JavaScript event |  | A new JavaScript event named dashboard:tile:merge is available. |
| 2025-08-13 | Database Performance dashboard |  | New visualizations have been added to the Database Performance dashboard in System Activity. |
| 2025-08-13 | Databricks JDBC driver |  | The Databricks JDBC driver was upgraded to version 2.7.3 for Databricks connections; The Databricks JDBC driver has been upgraded to version 2.7.3 for Databricks connections. |
| 2025-08-13 | Denodo 9 database support |  | Looker now supports connections to Denodo 9 databases. |
| 2025-08-13 | instance license revoked notice |  | Instance admins now receive a notice when the instance license is revoked and have 14 days to correct issues before shutdown. |
| 2025-08-13 | Instance Performance dashboard |  | New visualizations have been added to the Instance Performance dashboard in System Activity. |
| 2025-08-13 | Maria JDBC driver |  | The Maria JDBC driver was updated to version 3.5.3 for supported MySQL and MariaDB-related connections. |
| 2025-08-13 | Period-over-period measures |  | PoP measures are now generally available with added MySQL 8.0.12+ and Connected Sheets support, expanded based_on measure types, and improved time-based query handling. |
| 2025-08-13 | Query Concurrency System Activity Explore |  | This Explore helps identify periods of high load and investigate performance bottlenecks related to database connection limits; This Explore helps identify periods of high load and investigate performance bottlenecks related to database connection limits. |
| 2025-08-13 | synonyms parameter |  | LookML developers can use the synonyms parameter to provide additional context for Conversational Analytics and other features. |
| 2025-08-13 | System Activity Events Explore |  | The Explore now surfaces create_project, delete_project, update_project, create_git_deploy_key, delete_repository_credential, and update_repository_credential events. |
| 2025-07-24 | BigQuery optional job creation query execution |  | Looker can execute BigQuery queries with jobCreationMode=JOB_CREATION_OPTIONAL to return immediate results without creating a job when possible. |
| 2025-07-24 | Oracle JDBC driver |  | The Oracle JDBC driver has been updated to version 19.25 for Oracle and Oracle ADWC connections. |
| 2025-06-30 | Fast Dev Mode Transition |  | This feature improves Development Mode performance by loading LookML projects in read-only mode until a developer creates a developer copy; This feature improves Development Mode performance by loading LookML projects in read-only mode until a developer creates a developer copy. |
| 2025-06-24 | Looker connector private IP support |  | The Looker connector can connect to private IP Looker (Google Cloud core) instances using the Looker instance ID. |
| 2025-06-11 | Code Interpreter in Conversational Analytics |  | This experimental feature translates natural language questions into Python code and executes it to provide advanced analysis and visualizations; Code Interpreter translates natural language questions into Python code to support advanced analysis and visualizations in Conversational Analytics. |
| 2025-06-11 | Content Guardrails admin panel |  | The Content Guardrails admin panel lets Looker admins limit merged results queries and dashboard auto-refreshes. |
| 2025-06-11 | Firebolt JDBC driver update |  | The Firebolt JDBC driver was updated to version 3.5.0 for connections to Firebolt. |
| 2025-06-11 | Hive JDBC driver update |  | The Hive JDBC driver was updated to version 4.0.1 for connections to supported Apache Hive, Apache Spark, and Cloudera Impala versions. |
| 2025-06-11 | Looker reports embedding on Looker original instances |  | Looker reports can now be embedded on Looker original instances when the required Labs features are enabled. |
| 2025-06-11 | MS SQL JDBC driver update |  | The MS SQL JDBC driver was updated to version 12.10.0 for connections to supported Microsoft SQL Server and Azure SQL services. |
| 2025-06-11 | Period-over-period value_to_date subparameter |  | The value_to_date subparameter for period-over-period measures lets Looker calculate prior-period values using the current timeframe-to-date. |
| 2025-06-11 | Teradata JDBC driver update |  | The Teradata JDBC driver was updated to version 20.00.00.45 for connections to Teradata. |
| 2025-06-11 | Vertica JDBC driver update |  | The Vertica JDBC driver was updated to version 24.2.0-1 for connections to Vertica. |
| 2025-06-09 | Gemini Default Users group auto-creation |  | When enabled, the Gemini Default Users group is created automatically and populated with existing and new users on open-system instances. |
| 2025-05-14 | Amazon Redshift 2.1+ SQL dialect |  | Adds support for creating connections with the Amazon Redshift 2.1+ SQL dialect using the Redshift JDBC driver. |
| 2025-05-14 | Amazon Redshift Serverless 2.1+ SQL dialect |  | Adds support for creating connections with the Amazon Redshift Serverless 2.1+ SQL dialect using the Redshift JDBC driver. |
| 2025-05-14 | JDBC driver version selection for connections |  | Users can now select the JDBC driver version when creating or editing a connection. |
| 2025-05-14 | Model-scoped Gemini in Looker permission |  | Lets Looker admins apply the gemini_in_looker permission to selected models instead of all models. |
| 2025-05-14 | Presto JDBC driver update |  | The Presto JDBC driver was updated to version 0.291 for connections to PrestoDB. |
| 2025-05-14 | sync_lookml_dashboard dashboard_ids parameter |  | Adds an optional dashboard_ids parameter so the sync_lookml_dashboard API endpoint can synchronize only a subset of dashboards. |
| 2025-05-13 | Private Service Connect hybrid network configuration for Looker (Google Cloud core) |  | Lets Looker (Google Cloud core) instances use Private Service Connect with a hybrid network configuration for secure inbound web access and private outbound connectivity. |
| 2025-05-07 | Responsive report layout in Studio in Looker |  | Lets users create reports with a responsive layout in Studio in Looker. |
| 2025-05-07 | Variables in Studio in Looker |  | Lets users use parameters and query result variables in Studio in Looker reports. |
| 2025-04-29 | BigQuery PDT Override Billing Project ID setting |  | Lets Looker admins specify the billing project used for PDT build and maintenance queries on BigQuery connections. |
| 2025-04-29 | BigQuery Temp Project setting |  | Lets Looker admins specify the project used to write PDTs for BigQuery connections. |
| 2025-04-29 | Customer-initiated backups for Looker (Google Cloud core) |  | Lets users create backups on demand in addition to automated 24-hour backups. |
| 2025-04-29 | period_over_period measure type |  | Lets developers define period-over-period measures for analysis in Looker Explores. |
| 2025-04-29 | Self-service restore for Looker (Google Cloud core) |  | Lets users restore Looker (Google Cloud core) instances through a self-service workflow. |
| 2025-04-28 | gcp.restrictTLSCipherSuites organization policy constraint |  | Lets admins apply a TLS cipher suite restriction policy to Looker (Google Cloud core) instances that use public IP networking. |
| 2025-04-22 | Google group mirroring with OAuth authentication |  | Lets Looker (Google Cloud core) mirror Google groups when using OAuth authentication. |
| 2025-04-22 | Looker Mobile (Legacy) application | 2026-03-01 | The Looker Mobile (Legacy) application is being deprecated in favor of the Looker application; deprecated on 2026-03-01. |
| 2025-04-09 | Chart Config Editor templates |  | A Chart Config Editor capability to save configurations as reusable templates. |
| 2025-04-09 | Content Validator scoping |  | A Content Validator option that scopes validation to specific LookML projects and content folders; Content Validator scoping lets developers limit validation to specific LookML projects and content folders. |
| 2025-04-09 | Denodo JDBC driver |  | A JDBC driver used for Looker connections to Denodo 8 and Denodo 9. |
| 2025-04-09 | Dremio JDBC driver update |  | Updates the Dremio JDBC driver used for Dremio connections to version 25.2.0. |
| 2025-04-09 | Druid JDBC driver |  | Looker updated the Druid JDBC driver to version 1.25.0 for Apache Druid connections. |
| 2025-04-09 | Exasol JDBC driver |  | A JDBC driver used for Looker connections to Exasol. |
| 2025-04-09 | New Database Connection Setup |  | A modernized Add/Edit Connection page with enhanced validation, connection testing, and a configuration summary; A modernized Add/Edit Connection page with enhanced validation, connection testing, and a configuration summary. |
| 2025-04-09 | Snowflake key-pair authentication |  | A connection authentication method for Snowflake that uses key pairs; Looker supports key-pair authentication for Snowflake connections. |
| 2025-04-09 | System Activity API endpoint classifications |  | A System Activity query classification change for the version, versions, and page_events API endpoints. |
| 2025-04-09 | Trino JDBC driver |  | A JDBC driver used for Looker connections to Trino. |
| 2025-04-01 | Studio in Looker localized number formatting |  | Studio in Looker supports localized number formatting. |
| 2025-04-01 | Studio in Looker Owner's Credentials for BigQuery and Google Sheets |  | Studio in Looker can connect to Google BigQuery and Google Sheets using Owner's Credentials. |
| 2025-03-24 | and scheduling permissions |  | The Looker connector supports export, download, and scheduling permissions. |
| 2025-03-24 | download |  | The Looker connector supports export, download, and scheduling permissions. |
| 2025-03-24 | Studio in Looker calculated field functions |  | The Looker connector supports some calculated field functions. |
| 2025-03-24 | Studio in Looker export |  | The Looker connector supports export, download, and scheduling permissions. |
| 2025-03-24 | Studio in Looker private IP connections to Looker (Google Cloud core) |  | The Looker connector can connect to private IP Looker (Google Cloud core) instances using the Looker instance ID. |
| 2025-03-24 | Studio in Looker reports in System Activity |  | Looker System Activity includes usage, historical, and performance information about Looker reports. |
| 2025-03-24 | Studio in Looker support for Google OAuth-authenticated instances |  | Studio in Looker can be enabled on Looker instances that use Google OAuth authentication. |
| 2025-03-17 | Studio in Looker data source connector management |  | Looker admins can manage the data source connectors available in Studio in Looker. |
| 2025-03-17 | Studio in Looker locale settings |  | Administrators can set an instance locale or a group locale for Studio in Looker. |
| 2025-03-17 | Studio in Looker report recovery after re-enable |  | Reports saved within the previous 30 days remain available after Studio in Looker is disabled and then re-enabled. |
| 2025-03-17 | Studio in Looker reports search |  | The Looker Search function includes reports. |
| 2025-03-17 | Studio in Looker Trash folder for reports |  | Deleted reports are stored in the Looker Trash folder and can be restored by admins. |
| 2025-03-12 | Add/Edit Connection page modernization |  | The Add/Edit Connection page now includes a modernized UI, enhanced validation, connection testing, and a configuration summary. |
| 2025-03-12 | Admin via IAM Looker role |  | Looker (Google Cloud core) instances support an admin role that is managed exclusively through IAM and grants full administrative privileges. |
| 2025-03-12 | Chart Config Editor dynamic annotations |  | The Chart Config Editor supports dynamic annotations using annotationsSource and annotationsTarget parameters. |
| 2025-03-12 | JDBC driver version selection |  | Looker lets users select an earlier supported JDBC driver version for a database dialect. |
| 2025-03-12 | Open SQL Interface support for conditionally filtered Explores |  | The Open SQL Interface supports Explores that use the conditionally_filters parameter. |
| 2025-02-24 | Generate LookML |  | Uses Gemini assistance to generate LookML code suggestions from natural-language prompts; Gemini assistance can generate LookML code suggestions from natural-language prompts in the Looker IDE. |
| 2025-02-12 | Aggregate tables publish_as_db_view parameter |  | Allows aggregate tables to publish a stable database view for supported database dialects. |
| 2025-02-12 | Chart Config Editor median function support |  | Adds support for the median function in the formatters.select parameter. |
| 2025-02-12 | manage_modelsets_restricted permission |  | Lets users add or remove models from specified model sets. |
| 2025-02-12 | manage_schedules permission |  | Lets users reassign and delete schedules on the Schedules page for models they can access. |
| 2025-01-16 | Non-production Looker (Google Cloud core) instances |  | Lets you provision, configure, and manage non-production Standard, Enterprise, and Embed Looker (Google Cloud core) instances. |
| 2025-01-08 | Chart Config Editor |  | The Chart Config Editor now supports conditional data formatters for comparing data values to other measure values; The Chart Config Editor now supports comparing data values to the mean value for a series. |
| 2025-01-08 | Local Project Import |  | Local Project Import is now generally available in Looker (Google Cloud core) and Looker (original). |
| 2025-01-08 | Looker Mobile app |  | Provides support for the Looker Mobile app on Google Cloud Core instances. |
| 2025-01-08 | manage_spaces permission |  | The manage_spaces permission can now be granted to embed users. |
| 2025-01-08 | Open SQL Interface |  | The Open SQL Interface now supports Explores that use the conditionally_filters parameter and enables previously disabled Explores; The Open SQL Interface is generally available and the corresponding Looker Labs toggle is removed. |
| 2025-01-08 | Redshift driver |  | The Redshift driver now configures TCP keep-alives to improve reliability for long-running queries; Looker uses Redshift driver version 2.1.0.30 when the Redshift license feature is enabled. |
| 2024-11-14 | Looker Google Cloud core Private Service Connect instance |  | You can now create and edit Looker (Google Cloud core) Private Service Connect instances in the Google Cloud console. |
| 2024-11-07 | Connected Sheets for Looker |  | Connected Sheets for Looker pivot tables can now pull up to 100,000 rows from a Looker Explore. |
| 2024-11-07 | Create a Model page |  | The Create a Model page replaces the New Project page for project creation in Looker. |
| 2024-11-07 | Dependency Wheel visualization |  | The Chart Config Editor can create Dependency Wheel visualizations. |
| 2024-11-07 | Google Cloud Technical Support access |  | Google Cloud Technical Support access is available for Looker (Google Cloud core) instances; Google Cloud Technical Support access lets admins configure support access duration and support user roles. |
| 2024-11-07 | Redshift 2.1.0.30 driver |  | Looker (original) deployments can use the Redshift 2.1.0.30 driver. |
| 2024-11-07 | Tiered Support Access |  | Tiered Support Access lets Looker use a legacy or updated support access model. |
| 2024-11-07 | Use Legacy Project Creation Page |  | When enabled, this legacy feature shows the deprecated New Project page instead of the Create a Model page; When enabled, this legacy feature shows the deprecated New Project page instead of the Create a Model page. |
| 2024-10-09 | BigQuery Quickstart connection |  | The BigQuery Quickstart connection can create a default BigQuery connection that uses Application Default Credentials. |
| 2024-10-09 | Chart Config Editor data label color |  | The Chart Config Editor lets you change the data label color. |
| 2024-10-09 | Chart Config Editor log variable |  | The Chart Config Editor supports a log variable that returns all available data values for an attribute. |
| 2024-10-09 | Cloud Audit Logs for Looker (Google Cloud Core) |  | Cloud Audit Logs are generally available for Looker (Google Cloud Core) instances; Cloud Audit Logs now provide comprehensive audit logging for Looker (Google Cloud Core), including full Data Access and System Event coverage. |
| 2024-10-09 | Explore query tracker |  | The Explore query tracker shows query progress and timing details in the Explore UI; A progress bar appears in the Explore UI while a query is running. |
| 2024-10-09 | Home page Favorites and Recently Viewed sections |  | The Home page now shows updated Favorites and Recently Viewed sections. |
| 2024-10-09 | Looker search |  | Looker search now returns more complete results for folders and Explores. |
| 2024-10-09 | Studio in Looker |  | Studio in Looker lets users create, view, edit, share, and manage Looker Studio reports inside Looker. |
| 2024-09-11 | content_summary API endpoint |  | The content_summary API endpoint is generally available for searching recently viewed content and favorites. |
| 2024-09-11 | Delegate Model Set Management |  | This Labs feature lets admins grant the manage_modelsets_restricted permission to users with access to specific model sets. |
| 2024-09-11 | Looker Connected Sheets API support |  | Looker Connected Sheets now has comprehensive API support through Apps Script and the Google Sheets APIs. |
| 2024-09-11 | Looker IDE editor preferences |  | The Looker IDE supports Vim and Emacs editors and lets users set their editor preference in IDE Settings. |
| 2024-09-11 | Looker IDE line wrapping |  | The Looker IDE editor now supports line wrapping by default, with an option to turn it off in IDE Settings. |
| 2024-09-11 | Looker IDE panel resizing |  | Users can resize Looker IDE feature and side panels, and side panel sizes persist across logins and refreshes. |
| 2024-09-11 | Looker IDE state persistence |  | The Looker IDE now persists user layout and navigation state across sessions, with an option to reset the layout; The Looker IDE now persists a user's layout and navigation state, with an option to reset the saved layout in IDE Settings. |
| 2024-09-11 | Render event audit log entry |  | The render event is now included in the audit log list. |
| 2024-09-11 | Sunburst visualizations |  | The Chart Config Editor now supports sunburst visualizations. |
| 2024-08-15 | Private Service Connect for Looker (Google Cloud core) |  | Looker (Google Cloud core) customers can create an instance with Private Service Connect. |
| 2024-08-14 | IDE editor line wrapping |  | The Looker IDE editor supports text line wrapping, with wrap mode enabled by default and configurable in IDE settings. |
| 2024-08-14 | Model set Edit button access control |  | The Edit button is shown only for model sets that the user has permission to edit. |
| 2024-08-14 | OAuth application credentials for BigQuery connections in Looker (Google Cloud core) |  | Looker (Google Cloud core) can automatically use the OAuth application credentials associated with the instance to connect to Google BigQuery. |
| 2024-08-14 | Queries Admin SQL Interface tab |  | The Queries Admin page adds a SQL Interface tab in the Details pop-up for queries created from the Open SQL Interface. |
| 2024-08-14 | Sankey chart type in Chart Config Editor |  | The Chart Config Editor supports creating Sankey charts. |
| 2024-08-14 | Venn diagram chart type |  | The Chart Config Editor now supports Venn diagram charts. |
| 2024-07-10 | API Key User Group and Role Editing |  | Admins can edit groups and roles for users who authenticate only with API keys. |
| 2024-07-10 | Databricks Unity Catalog support |  | Looker supports Databricks Unity Catalog and lets users define the catalog used for queries. |
| 2024-07-10 | Delegate Schedule Management |  | This Labs feature adds the manage_schedules permission so users can reassign and delete schedules on the Schedules page for accessible models. |
| 2024-07-10 | Explore from Here dashboard tile action |  | Dashboard tiles include an Explore from Here action that opens the tile's data for one-click exploration. |
| 2024-07-10 | IDE file and folder loading indicators |  | The Looker IDE displays a loading indicator when files or folders are created, updated, or accessed. |
| 2024-07-10 | Legacy LookML runtime | 2024-07-10 | Looker indicates that the legacy LookML runtime is being deprecated and recommends migrating projects to the new LookML runtime; deprecated on 2024-07-10. |
| 2024-07-10 | Pie chart legend properties in Chart Config Editor |  | The Chart Config Editor supports additional pie chart legend properties including align, verticalAlign, and layout. |
| 2024-07-10 | Sample dashboards on the Looker homepage |  | The Looker homepage can show sample dashboards when an instance does not yet have any Looks or dashboards. |
| 2024-07-10 | Teradata connections in Looker (Google Cloud core) |  | Looker (Google Cloud core) supports connections to Teradata databases. |
| 2024-06-12 | Cloud SQL Dialect Authentication with Application Default Credentials and Service Account Impersonation |  | Cloud SQL dialects on Looker (Google Cloud core) can connect using application default credentials and service account impersonation. |
| 2024-06-12 | IDE Modal File Operation Loading Indicator |  | A loading indicator now appears in the IDE modal when creating, renaming, or deleting a file or folder. |
| 2024-06-12 | Lightweight Drill Links |  | This Labs feature is now generally available; The Lightweight Drill Links Labs feature may improve browser and query performance for queries that contain drill fields. |
| 2024-06-12 | Merge Query Dashboard Element Listen on Source Query |  | The listen property for a merge query dashboard element can now be defined directly on the source query and extended as needed. |
| 2024-06-12 | OAuth 2.0 for Databricks Connections |  | Databricks connections now support OAuth 2.0 authentication. |
| 2024-06-12 | OAuth 2.0 for Trino Connections |  | Trino connections now support OAuth 2.0 authentication. |
| 2024-06-12 | SingleStore 7+ Derived Tables via Common Table Expressions |  | The SingleStore 7+ derived table strategy now uses Common Table Expressions. |
| 2024-06-12 | Treemap Charts in Chart Config Editor |  | Users can now create treemap charts using the Chart Config Editor. |
| 2024-06-12 | User Email Address Updates via IAM or IdP |  | Admins can update a user email address through IAM or an identity provider. |
| 2024-05-08 | Database Connection Pooling |  | Database connection pooling is now generally available and is available as a connection-level setting for supported dialects. |
| 2024-04-10 | Complimentary Looker Studio Pro licenses for Looker users |  | Looker admins can accept complimentary Looker Studio Pro licenses and set up a Looker Studio Pro subscription for Looker users. |
| 2024-04-10 | Open SQL Interface parameters and filter-only fields |  | Open SQL Interface supports parameters and filter-only fields. |
| 2024-03-13 | Advanced Features for New Schedules Page |  | This Labs feature adds sorting and filtering to the scheduled plans list on the Admin Schedules page. |
| 2024-03-13 | Create a model wizard selection persistence |  | The Create a model wizard preserves selections even if users close steps before finishing model creation. |
| 2024-03-13 | Disallow Numeric Query IDs legacy feature |  | This legacy feature lets users opt in to or out of query API changes that affect numeric query IDs. |
| 2024-03-13 | Merge query API query slug response |  | The merge queries API returns the query slug alongside the query ID for source queries. |
| 2024-03-13 | Model creation prompt when no projects exist |  | Looker more prominently prompts users to create a model when an instance has no projects. |
| 2024-03-13 | Performant Field Picker |  | The Performant Field Picker feature is generally available. |
| 2024-03-13 | save_content child permissions |  | The save_content permission now includes save_dashboards and save_looks as child permissions. |
| 2024-02-14 | Additional permission set permissions |  | Permission sets now support manage_groups, manage_roles, manage_user_attributes, manage_embed_settings, manage_themes, and manage_privatelabel permissions. |
| 2024-02-14 | Dashboard Diagnostics System Activity dashboard |  | The Dashboard Diagnostics System Activity dashboard helps troubleshoot the performance of individual dashboards. |
| 2024-02-14 | Login Consent Configuration |  | Login Consent Configuration displays a configurable consent screen to users signing in to the Looker instance. |
| 2024-02-14 | Looker to Looker (Google Cloud core) migration |  | Looker supports self-service migration from Looker (original) instances to Looker (Google Cloud core) instances. |
| 2024-02-14 | Scheduled Content Email Domain Allowlist |  | Admins can configure the email domain allowlist for scheduled content on a per-group basis using the looker_internal_email_domain_allowlist user attribute. |
| 2024-02-14 | Signed Embed URL Generator |  | The signed embed URL generator can include themes, current parameters, and external group IDs. |
| 2024-01-10 | Custom URLs for alert and schedule emails |  | Alerts and scheduled emails can use custom URLs; Email alerts and scheduled deliveries can customize the View full dashboard link URL and link text. |
| 2024-01-10 | Dashboard Quick Resize |  | Dashboard layouts can be edited with a quick resize capability. |
| 2024-01-10 | Dashboard Tile Extensions |  | Extensions can be developed to run as tiles on dashboards and can also be used as visualizations in LookML dashboards. |
| 2024-01-10 | Dashboard Tile Repositioning |  | Dashboard layouts can be edited by repositioning tiles more quickly. |
| 2024-01-10 | Explore AND/OR Filtering |  | AND/OR filtering is generally available when creating filters in Explores. |
| 2024-01-10 | Looker Admin Role in Looker (Google Cloud core) |  | The Looker Admin role can be granted within a Looker (Google Cloud core) instance without requiring a Looker Admin IAM role. |
| 2024-01-10 | LookML Model Explore parameter endpoint drill metadata |  | The LookML Model Explore parameter endpoint can return drill_fields and link entities for fields when requested and permitted. |
| 2024-01-10 | OpenID Connect Authentication |  | Looker (Google Cloud core) supports OpenID Connect authentication. |
| 2024-01-10 | SAML Authentication |  | Looker (Google Cloud core) supports SAML authentication. |
| 2023-11-08 | Dashboard auto-refresh option access restriction |  | Admins can restrict non-admin users from accessing the dashboard auto-refresh option. |
| 2023-11-08 | Quick Layout for dashboard editors |  | Quick Layout lets dashboard editors move tiles left or right and resize them to standard sizes. |
| 2023-10-11 | Embedded Looks themes |  | Embedded Looks now support themes in the Get embed URL dialog. |
| 2023-10-11 | manage_project_connections_restricted permission |  | The manage_project_connections_restricted permission lets users edit a subset of settings for new and existing connections. |
| 2023-10-11 | New Schedules Page |  | The New Schedules Page Labs feature updates the Admin settings Schedules page interface. |
| 2023-10-11 | Signed embed URLs |  | The Get embed URL option can now generate a signed embed URL for a dashboard, Look, or Explore. |
| 2023-09-13 | Advanced Granular Permissions |  | Advanced Granular Permissions adds new permissions that let admins delegate management of user attributes, groups, roles, private labels, themes, and embed settings to non-admin users. |
| 2023-09-13 | AND/OR Filters in Explores |  | AND/OR Filters in Explores provides a new filter-editing experience with AND/OR filter logic without custom filter expressions. |
| 2023-09-13 | create_dashboard_render_task theme property |  | The create_dashboard_render_task API method now accepts an optional theme property for rendered dashboards. |
| 2023-09-13 | Email Allowlist for Scheduled Content Labs |  | This Labs feature lets admin users define email allowlist domains at the group level with the looker_internal_email_domain_allowlist user attribute. |
| 2023-09-13 | OIDC to SAML user migration |  | Looker now supports merging users from OIDC into SAML during SAML authentication setup. |
| 2023-09-13 | Scheduled delivery filename time zone |  | Scheduled delivery filenames for SFTP and S3 destinations now use the delivery time zone in their timestamp. |
| 2023-09-06 | Looker (Google Cloud core) regional availability |  | Looker (Google Cloud core) now supports additional deployment regions; Looker (Google Cloud core) now supports additional deployment regions. |
| 2023-08-09 | Google Cloud Terraform Provider support for Looker instance creation |  | Looker (Google Cloud core) instances can now be created with the Google Cloud Terraform Provider using the google_looker_instance resource. |
| 2023-08-09 | Liquid case tag compatibility in new LookML runtime |  | In the new LookML runtime, Liquid case tags with string parameters evaluate the same as they do in the legacy runtime. |
| 2023-08-09 | Recent BI Connector Queries Quick Start |  | This System Activity Quick Start shows recent BI Connector queries to a Looker instance from the last seven days. |
| 2023-08-09 | Signed embed URL domain allowlist auto-add |  | The signed embed URL creation endpoint can now add a valid embed domain to the allowlist automatically. |
| 2023-07-12 | BigQuery OAuth Drive access read-only |  | BigQuery OAuth access for a user's Drive is now read-only. |
| 2023-07-12 | Content slug URLs in custom links |  | Custom links in alert and scheduled email deliveries can use a URL built from content slugs. |
| 2023-07-12 | Custom embed theme border radius |  | Custom embed themes now include a border radius option for dashboard tiles. |
| 2023-07-12 | Custom theme support for embedded dashboard downloads |  | Downloads of embedded dashboards and dashboard tiles now render using the applied custom theme. |
| 2023-07-12 | Lexp matches_filter field type support |  | The Lexp matches_filter expression now supports tier, location, and zip code field types. |
| 2023-06-14 | create_query_task API SQL format queries |  | The create_query_task API now supports SQL format queries. |
| 2023-06-14 | Get embed URL |  | This feature automatically generates a private embed URL for a dashboard, Look, or Explore and can include parameters and an existing theme. |
| 2023-06-14 | matches_filter zipcode support |  | Custom filters now support the zipcode data type in the matches_filter function. |
| 2023-06-14 | model_fieldname_suggestions API suggest_dimension support |  | The model_fieldname_suggestions API endpoint now supports fields that define suggest_dimension. |
| 2023-06-14 | ORDER BY duplicate-field validation |  | A validation function prevents duplicate fields from appearing in an ORDER BY clause. |
| 2023-06-14 | Pivot field required-field validation |  | A validation function adds required fields to pivot fields to prevent ordinal errors. |
| 2023-06-14 | Themed PNG downloads for embedded visualizations |  | PNG downloads from embedded Explores, Looks, and dashboards can use the applied theme. |
| 2023-05-10 | Cookieless embed API endpoints |  | Cookieless embed API endpoints are now marked as stable. |
| 2023-05-10 | Liquid type compatibility errors in Looker IDE |  | The Looker IDE now shows an error when incompatible types are compared in Liquid statements. |
| 2023-05-10 | Queries panel source column API version display |  | The Admin > Queries panel Source column now displays the API version for queries initiated from the Looker API. |
| 2023-04-14 | Content thumbnails dark theme support |  | Content thumbnails now support dark theme. |
| 2023-04-14 | Embed SDK pop-up dialog positioning |  | Embedded applications can now set the position of pop-up dialogs in embedded environments. |
| 2023-04-14 | Incremental PDTs for Databricks connections |  | Looker now supports incremental PDTs for Databricks connections when Databricks version 12.1 or later is used. |
| 2023-03-14 | Connected Sheets |  | Connected Sheets is available for all Looker-hosted instances, including those hosted on AWS and Azure. |
| 2023-03-14 | Looker Studio connector |  | The Looker Studio Connector is available for all Looker-hosted instances, including those hosted on AWS and Azure; The Looker Studio connector is generally available and lets users add Looker Explores as data sources in Looker Studio reports. |
| 2023-03-14 | NFS operations logging |  | Looker can collect metrics on NFS read, write, open, and status operations. |
| 2023-03-14 | Performant Field Picker Labs |  | The Performant Field Picker Labs feature adds refined search options for finding fields in large Explore field pickers. |
| 2023-02-10 | Center Dashboard Title control |  | A new Admin > Themes control lets admins center dashboard titles on embedded dashboards. |
| 2023-02-10 | Cookieless embed error logging |  | Cookieless embed requests now log additional error details when an issue is detected. |
| 2023-02-10 | Dashboard extension types merged_queries and join_fields |  | Looker now treats merged_queries and join_fields as legal types for extending dashboards. |
| 2023-02-10 | Email Domain Allowlist external settings API parameter |  | The external settings API now includes an Email Domain Allowlist parameter for validating and saving email domains. |
| 2023-02-10 | Presto and Trino approximate parameter support |  | The Presto and Trino dialects now support the approximate parameter. |
| 2023-01-11 | Cookieless embed session status events |  | Looker now publishes status events for cookieless embed sessions. |
| 2023-01-11 | Expanded dashboard theming |  | Admin users can show or hide dashboard header elements on embedded dashboards. |
| 2023-01-11 | Font updates for Explores and Looks |  | Explores and Looks now use the correct fonts. |
| 2023-01-11 | Hide dashboard filters |  | Embedded dashboards can hide dashboard filters through the URL by using the hide_filters parameter. |
| 2023-01-11 | Scatterplot chart value labels |  | Scatterplot charts can now display data point value labels using any dimension present in the visualization. |
| 2023-01-11 | Settings API 4.0 host URL setting |  | The Settings API 4.0 endpoint now supports setting the instance-wide host URL. |

Source file slug: `looker.md`

