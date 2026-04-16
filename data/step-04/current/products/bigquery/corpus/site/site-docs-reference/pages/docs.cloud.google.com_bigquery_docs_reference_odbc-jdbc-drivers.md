---
title: "Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers
  title: "Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Use the Simba ODBC and JDBC drivers for BigQuery
The Simba Open Database Connectivity (ODBC) and Java Database Connectivity
(JDBC) drivers for BigQuery connect your applications to
BigQuery, letting you use BigQuery features with
your preferred tooling and infrastructure. Generally, the JDBC driver is used
with Java applications, and the ODBC driver is used otherwise.
The Simba ODBC and JDBC drivers are developed by
insightsoftware , a
Google Cloud Ready - BigQuery partner .
As an alternative to the Simba JDBC driver, a
Google-developed JDBC driver for BigQuery
is available in
Preview .
Limitations
The Simba ODBC and JDBC drivers for BigQuery are subject to the
following limitations:
BigQuery load features aren't
supported.
BigQuery export features aren't
supported.
Query prefixes aren't supported.
All
data manipulation language (DML) limitations
apply.
Parameterized queries only
provide query validation. Query performance isn't affected.
The drivers are specific to BigQuery and can't be used with
other products or services.
Before you begin
When you use the Simba ODBC and JDBC drivers for BigQuery, you
have the option to read data with the BigQuery Storage Read API, instead of with
the standard BigQuery API. In the insightsoftware documentation, this
feature is called the High-Throughput API . If you plan to use this optional
feature, ensure that you have the required roles .
Required roles for the High-Throughput API
To get the permissions that
you need to use the High-Throughput API,
ask your administrator to grant you the
BigQuery Read Session User ( roles/bigquery.readSessionUser )
IAM role on your BigQuery project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to use the High-Throughput API. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to use the High-Throughput API:
resourcemanager.projects.get
resourcemanager.projects.list
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.readsessions.update
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Install and configure the Simba ODBC driver for BigQuery
Download the 3.1.6.3037 version of the driver for your operating system:
Windows 32-bit ( .msi file)
Windows 64-bit ( .msi file)
Linux 32-bit and 64-bit ( .tar.gz file)
macOS ( .dmg file)
Follow the instructions in the
insightsoftware installation and configuration guide .
For information on feature changes and workflow updates, see
Simba Google BigQuery ODBC Data Connector Release Notes .
To see a list of previous driver versions, expand the following section:
Previous Simba ODBC driver versions
3.1.6.1026
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.1.5.1022
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.1.4.1020
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.1.2.1009
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.1.2.1004
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.0.7.1016
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.0.5.1011
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.0.4.1008
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.0.3.1006
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.0.2.1005
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
3.0.0.1001
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.5.2.1004
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.5.0.1001
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.4.6.1015
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.4.5.1014
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.4.3.1012
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.4.1.1009
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.4.0.1002
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.3.5.1009
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.3.3.1005
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
2.3.2.1003
Windows 32-bit
Windows 64-bit
Linux 32-bit and 64-bit
macOS
Install and configure the Simba JDBC driver for BigQuery
Note: As an alternative to the Simba JDBC driver, a
Google-developed JDBC driver for BigQuery
is available in
Preview .
Download the
1.6.5.1002 version of the driver .
Follow the instructions in the
insightsoftware installation and configuration guide .
For information on feature changes and workflow updates, see
Simba Google BigQuery JDBC Data Connector Release Notes .
To see a list of previous driver versions, expand the following section:
Previous Simba JDBC driver versions
1.6.5.1001
1.6.3.1004
1.6.2.1003
1.6.1.1002
1.5.4.1008
1.5.0.1001
1.3.3.1004
1.3.2.1003
1.3.0.1001
1.2.25.1029
1.2.23.1027
1.2.22.1026
1.2.21.1025
1.2.19.1023
1.2.18.1022
1.2.16.1020
1.2.14.1017
1.2.1.1001 (JDBC 4.2-compatible)
1.2.1.1001 (JDBC 4.1-compatible)
Support
Support for the Simba ODBC and JDBC drivers for BigQuery is
available through standard Cloud Customer Care channels.
Pricing
You can download the Simba ODBC and JDBC drivers for BigQuery
at no cost, and you don't need any additional licenses to use the drivers.
However, when you use the driver, the following BigQuery pricing
applies:
Compute pricing
for the queries that you run.
Storage pricing ,
if your driver is configured to write large result sets to a destination
table.
BigQuery Storage Read API pricing
for data reads of large result sets, if your driver uses the High-Throughput
API feature.
What's next
Learn more about the
Google-developed JDBC driver for BigQuery .
Explore other
BigQuery developer tools .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
