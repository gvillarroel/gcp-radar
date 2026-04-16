---
title: "Content Guardrails \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/chart-config-editor
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails
  title: "Content Guardrails \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Content Guardrails
Stay organized with collections
Save and categorize content based on your preferences.
This documentation page describes the Content Guardrails page in the Performance Center section of the Admin panel. Content guardrails are settings that let Looker admins impose limits on how some dashboard settings can be configured by Looker users.
Although dashboards are powerful tools for conveying business insights, their performance can be impacted by several factors, including the following:
Unchecked quantities of dashboard tiles, tabs, or visualizations
Frequent query runs
Complex query runs
As an admin, content guardrails allow you to account for the trade-off between dashboard customizability and performance.
The Content guardrails page has the following options:
Limit merged results query tiles
Reduce loading time for custom visualizations
Limit dashboard refreshing
Limit dashboard tabs
Limit query tiles on tabs and on dashboards
Limit rows in a custom visualization
For more information and recommendations about building performant dashboards, see Considerations when building performant Looker
dashboards .
Limit merged results queries
You can choose to disable or limit merged results queries for all dashboards on an instance. Merged results queries are calculated post-query processing. Excessive calculations can compete for Java memory on the Looker instance, which can cause the Looker instance to respond more slowly.
You can enable one or both of the following options:
Enable the Limit all merged results queries option to stop all merged queries from executing. Existing dashboards that contain merged results query tiles will report No Results and show an
error for the corresponding elements. If Looker encounters these errors, any scheduled deliveries of dashboards that contain merged results query tiles won't be executed.
Enable the Limit new merged results queries on dashboards option to prevent users from saving new merged results queries to dashboards. Dashboards that already have merged results query tiles will not be affected.
Reduce loading time for custom visualizations
Enable the Prerender Iframes (before data loads) for custom visualizations option to reduce the custom visualization loading time by starting to render the iframe even before query data has been loaded.
Some custom visualizations may not be displayed correctly on the first load of a dashboard when this setting is enabled.
If a custom visualization's JavaScript code is written with the assumption that data is already available when the iframe environment is initialized, pre-rendering the iframe before data load can lead to errors or unexpected behavior. The visualization might try to access data that isn't there yet, which can cause it to fail or render incorrectly.
Dashboard guardrails
Dashboard guardrails allow you to further control dashboard and dashboard tile settings. In this section you can manage the auto-refresh feature for all dashboards on the instance. You can also manage the number of tabs and tiles that users can add to any dashboard on the instance.
Limit dashboard refreshing
You can control how quickly a dashboard will auto-refresh, or you can disable the option to auto-refresh, for all users except admins.
Enable Limit Automatically refresh dashboard option so that only Looker admins can configure dashboards to auto-refresh .
The Limit the minimum refresh interval for auto-refreshing dashboards and tiles globally option lets you set a minimum time interval for the dashboard auto-refresh option. This setting applies to all dashboards in the Looker instance.
Any dashboards that are configured to auto-refresh more frequently than the time interval in this field won't auto-refresh any more frequently than the value that's configured in this field.
As an example, if you have a dashboard that is configured to auto-refresh more frequently than your database ETL process occurs, then any time the dashboard refreshes before the next ETL occurs, the dashboard won't retrieve any new data. To prevent these unnecessary queries, you could use this field to set the minimum dashboard refresh time to match the time between your database ETL processes, so that when the dashboard refreshes, it will be retrieving new data.
To set a minimum time for dashboard auto-refresh, select a time interval ( Seconds , Minutes , Hours , or Days ). Then, enter the number of the selected time interval that constitutes the minimum time between dashboard auto-refreshes. After you enter the minimum time interval, click Save .
Set this field to 0 or leave it blank to enable unlimited dashboard auto-refresh
times.
Maximum dashboard tabs
The Maximum Dashboard Tabs field lets you set a maximum number of tabs that users can add to dashboards. You can set a limit of up to 10 tabs.
Note: For performance speed, downloading speed, and scheduling considerations, we recommend that you use 10 or fewer tabs.
Learn more about tabbed dashboards .
Maximum query tiles
Note: These options are available only when the Dashboard Tile Limits preview feature is enabled.
The Maximum Query Tiles per dashboard field lets you set a maximum number of query tiles that users can add to dashboards. We recommend a maximum of 25 query tiles per dashboard.
The Maximum Query Tiles per tab field lets you set the maximum number of query tiles that users can add to dashboard tabs. We recommend a maximum of 20 query tiles per tab.
If users try to add to add more tiles than the maximum that is specified in the Maximum Query Tiles per tab field, they'll see the error Tab has too many query tiles .
If you impose a maximum number that is lower than the number of tiles that users have already added to a tab, those tiles aren't affected.
Visualization limits
Note: This feature is available only when the Increased Row Limit preview feature is enabled. Caution: Setting row limits greater than 5,000 can impact instance performance. Considerations for database load , browser load , and network load should be given prior to increasing row limits. See Considerations when building performant Looker dashboards for more details about building performant dashboards.
The following fields set the row limits of user queries for map charts , scatterplot charts , and table charts . You can set the limit above the previous row limit maximum of 5,000 rows, up to 50,000 rows.
Maps visualization row limit : Sets the data density for up to 50,000 data points in a geoplot.
Scatterplot visualization row limit : Sets the data density for scatterplot charts, up to 50,000 data points.
Table visualization row limit: Sets the maximum number of rows returned and shown in results, up to 50,000 data points.
There are several things to know about Visualization limits :
Existing dashboard tiles won't automatically reflect row limit increases. You need to edit existing dashboard tiles to increase row limits.
When you edit query tiles on dashboards , or individual merged results source queries , only 5,000 rows of data will be displayed, regardless of whether you increase the row limit. However, if you set a row limit greater than 5,000 rows, the query tile and merged result source query will be saved with the limit that is set.
You can send, schedule, or download a dashboard with increased row limits in PDF format , with the following caveats:
The query results for each table chart on a dashboard will display up to 50,000 rows, to a maximum total limit of 200,000 cells per dashboard.
If the combined total of cells for table charts on a dashboard is greater than 200,000 cells, table chart results may be trimmed. If the maximum is reached, users will see a warning that will also be displayed at the bottom of the rendered PDF.
Table charts on a dashboard PDF will display more rows than are displayed on the dashboard tile thumbnail only when the Expand tables to show all rows option is selected.
Scatterplot charts and Google Maps charts support up to 50,000 data points (rows) in PDF downloads. The charts will render as the they appear in the tile thumbnail, or fail based on standard renderer limitations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
