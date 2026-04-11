---
title: "Connect to BigQuery \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/connect-to-bigquery
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/connector/connect-to-bigquery
  title: "Connect to BigQuery \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Connect to BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
BigQuery, Google's petabyte-scale data warehousing solution, seamlessly integrates with Looker Studio for data analysis and visualization.
Looker Studio offers a native BigQuery connector and the option to develop custom Community Connectors for bringing in BigQuery data.
Community Connectors provide advantages like pre-built queries, centralized billing via service accounts, and custom caching options.
For basic data visualization needs, the native BigQuery connector within Looker Studio UI is often sufficient, while Community Connectors cater to more complex requirements and advanced functionalities.
BigQuery is Google's petabyte scale data warehousing solution. Looker Studio
natively integrates with BigQuery and can be used to analyze and visualize
BigQuery data.
Implementation steps
There are multiple ways to bring your BigQuery data into Looker Studio:
Using the native BigQuery connector in the Looker Studio UI
Developing and using a Community Connector
Using the native BigQuery connector in the Looker Studio UI
Users can use the native BigQuery connector in
Looker Studio to visualize BigQuery tables or specific queries. You can fetch
entire tables or run custom queries on BigQuery from within Looker Studio. It is
also possible to use the Looker Studio Explorer feature to complete
exploratory analysis of your BigQuery data.
This approach is helpful if your users:
are doing exploratory analysis.
are familiar with SQL and can write their own queries.
are familiar with the data and know how to visualize it from scratch.
Note: Your users will need a BigQuery billing account to use the native BigQuery
connector in Looker Studio UI.
Example: Querying birth-rate data from BigQuery
[This guide][Visualizing BigQuery Data Using Looker Studio] shows how an
end-user can use Looker Studio's native BigQuery connector from the Looker Studio
UI to visualize BigQuery data. This example queries the BigQuery
natality sample table and fetches the entire table into Looker Studio.
Example: Building a BI dashboard with BigQuery, App Engine, and Looker Studio
[How to build a BI dashboard using Looker Studio and BigQuery] shows how you can
use App Engine to pre-aggregate BigQuery data and then visualize it with Looker Studio.
Developing and using a Community Connector
You can develop a Community Connector that fetches data from BigQuery. This
approach gives you benefits over using the native connector:
You can incorporate existing queries into your Connector. Your users won't
have to write their own SQL or copy/paste SQL snippets to get the exact
query. Additionally, you can parameterize your queries and let your users
provide input via the connector configuration to customize the queries.
You can use service accounts to centralize billing. Your users will not need
access to a GCP billing account.
Your users can start with ready made template reports with their own data.
You can implemented your own caching layer to control BigQuery cost.
In a Community Connector, you can access BigQuery data in three separate ways:
[Looker Studio Advanced Services]
Apps Script BigQuery Service
BigQuery REST API
This table summarizes the pros and cons:
Looker Studio
Advanced Services
Apps Script
BigQuery Service
BigQuery REST API
Reference
[Looker Studio
Advanced
Services]
Apps Script
BigQuery Service
BigQuery REST
API
Flow of data
BigQuery > Looker Studio
BigQuery > Apps
Script > Looker Studio
BigQuery > Apps
Script > Looker Studio
Calculated
fields supported
via getschema
Yes
Yes
Yes
Can be used with
a service
account/custom
access control
Yes
No (effective
user's
credentials
enforced)
Yes
Filters are
automatically
pushed down
Yes
No
No
Additional data
transformation
needed in
getData
No
Yes
Yes
Fetched data can
be accessed in
Apps Script
(Lets you do
additional
transformation)
No
Yes
Yes
Custom caching
supported
No
Yes
Yes
UrlfetchApp
Quota applied
No
No
Yes
Example
implementation
World Bank data
connector
Apps Script
BigQuery Service
Chrome UX
Connector
Unless you need to transform the fetched data from BigQuery or need custom
caching, in most use cases, you can use Looker Studio Advanced Services .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
