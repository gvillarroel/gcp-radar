---
title: "Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/bi-connectors
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/bi-connectors
  title: "Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Admin settings - BI Connectors
Stay organized with collections
Save and categorize content based on your preferences.
The BI Connectors page in the Platform section of the Admin menu lets you enable or disable connections from Looker to other business intelligence (BI) applications.
In Looker (Google Cloud core) instances that use public secure connections or hybrid connections, the ability for Looker users to connect to other BI applications is enabled by default. Those with the Admin Looker role can use this page to disable any or all of these connectors.
In Looker (original), this ability is disabled by default. Looker admins can use this page to enable any or all of these connectors.
Requirements
To view the BI Connectors page, the following requirements must be met:
Your Looker instance must be Looker-hosted.
You must have the Admin role on your Looker instance.
All Looker BI Connectors
Enable or disable the All Looker BI Connectors option to control connections to all BI applications to which Looker has a connection. When enabled, this option automatically enables all of the connectors on the Looker instance.
Google Sheets
Enable or disable this option to allow or disallow connections to Looker from Google Sheets . This option is automatically enabled if the All Looker BI Connectors option is enabled.
For Looker (Google Cloud core) instances, Connected Sheets is supported for all of the networking options .
For Looker (original) instances, Connected Sheets is supported only for Looker-hosted instances. Customer-hosted Looker instances are not supported.
Enable Connected Sheets quick link
When the Google Sheets toggle is enabled, Looker displays an additional toggle, Enable Connected Sheets quick link . This toggle enables the Connected Sheets option in the settings Explore actions gear menu that opens Google Sheets and initiates a connection from Google Sheets to the Looker Explore.
See the Connected Sheets quick link documentation page for information on how to enable and configure this feature.
For Looker (Google Cloud core) instances, the Connected Sheets quick link is supported only for public secure or hybrid network connections. Looker (Google Cloud core) private connections (private services access) instances aren't supported.
For Looker (original) instances, the Connected Sheets quick link is supported only for Looker-hosted instances. Customer-hosted Looker instances aren't supported.
Looker Studio
Enable or disable this option to allow or disallow connecting to Looker Studio from Looker Explores , monitoring System Activity information from Looker Studio data sources , and allowing connections from Looker Studio . This option is automatically enabled if the All Looker BI Connectors option is enabled.
For Looker (Google Cloud core) instances, the Looker Studio connector is supported for all of the networking options .
For Looker (original) instances, the Looker Studio connector is supported only for Looker-hosted instances. Customer-hosted Looker instances are not supported.
Microsoft Excel
Enable or disable this option to allow or disallow connections from Microsoft Excel to Looker . This option is automatically enabled if the All Looker BI Connectors option is enabled.
The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections . For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Microsoft Excel can reach your Looker instance.
Microsoft Power BI
Enable or disable this option to allow or disallow connections to Looker from Microsoft Power BI . This option is automatically enabled if the All Looker BI Connectors option is enabled.
The Power BI connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections . For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Power BI can reach your Looker instance.
Tableau Desktop
Enable or disable this option to allow or disallow connections to Looker from Tableau Desktop . This option is automatically enabled if the All Looker BI Connectors option is enabled.
Note: The Tableau Desktop toggle applies only to Tableau Desktop. Looker also supports connections from Tableau Cloud and Tableau Server . See the Administering Tableau to Looker connections page for information on enabling connections from Tableau Server and Tableau Cloud to Looker.
The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections . For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Tableau Desktop can reach your Looker instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
