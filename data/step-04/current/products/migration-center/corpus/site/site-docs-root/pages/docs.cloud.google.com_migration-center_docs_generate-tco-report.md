---
title: "Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/generate-tco-report
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/generate-tco-report
  title: "Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Guides
Send feedback
Generate TCO reports
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to generate total cost of ownership (TCO) reports
for your infrastructure.
Understand your TCO report
The TCO report is the core of your infrastructure assessment.
It describes the options you have for migrating your groups of assets to
Google Cloud, and the associated costs, based on the migration preferences
that you specify.
You choose groups of assets to include in the report,
then you choose multiple sets of preferences
to compare different migration scenarios. Your TCO report provides you with
a high-level summary of the specifications of your assets across your groups,
including information such as memory usage and storage usage. It also gives you
a detailed comparison of the costs of migration for each individual group.
If assets don't have performance data, Migration Center generates sizing
recommendations based on the target sizing strategy that you choose in the
migration preferences. The TCO report indicates how many assets are sized
using these estimates instead of performance data. For more information,
see Sizing and network preferences .
You can view your TCO report directly in Migration Center, or
export it to Google Slides or Google Sheets, or download it as a CSV file
or a Microsoft Excel spreadsheet.
The report in Google Slides format gives you a summary of your
infrastructure and is useful for making executive-level decisions.
It aggregates the cost items into a total cost, and gives a summary of
the proposed configurations and target VM series for each asset group.
It contains the information that you see in the Google Cloud console.
The report in Google Sheets format consists of two sheets, one
for servers, and one for databases. It provides the details of the
discovered assets, the recommended target VMs,
and the associated costs for each individual asset in the group for
which you generated the report.
The report in CSV format consists of two CSV files, one
for servers, and one for databases. It provides the details of the
discovered assets, the recommended target product for migration,
and the associated costs for each individual asset in the groups for
which you generated the report.
The report in Microsoft Excel format provides the same information as
the report in CSV format, but contained in a single file for both servers and
databases.
Out of scope assets are never included
in a TCO report.
Limitations
If you generate a TCO report for a group that contains a database deployment
and its underlying server, Migration Center generates separate cost
estimates for the server and the database. For example, if server_1 is
hosting database_1 , and you group them together to generate the TCO report,
you get cost estimates for running server_1 as a standalone VM in
Compute Engine, and for running database_1 in Cloud SQL.
A report in Microsoft Excel format cannot contain more than 100,000 rows
per sheet.
A report in Google Sheets format cannot contain more than 10 million cells.
When you make changes to your software assets, for example by installing new
software, you might see a discrepancy between the list of software
aggregated on the Summary page and what is shown in the TCO report. This is
because the Summary page is updated asynchronously.
Generate a report
To generate a TCO report, follow these steps:
In the Google Cloud console, go to the Create reports page.
Go to Create reports
Click TCO and detailed pricing reports .
On the Basic information page, enter a name and, optionally,
a description for your report, then click Next .
On the Select groups page, select up to five groups of assets
that you want to include in the report, then click Next .
On the Assign migration preferences page, expand each group to assign
up to four preference sets that you want to compare. To use the same
preference sets for all groups, select Apply to all groups .
Click Generate report .
Your new report appears in the Reports page. For large groups of
assets, it might take a few minutes for the report to be ready.
Export your TCO report
To export your report, follow these steps:
In the Google Cloud console, go to the Reports page.
Go to Reports
From the list of reports, click the report that you want to export.
Depending on the report that you want to generate, on the report details
page do the following:
To export the TCO summary report in Google Slides format, click
Export report > Export TCO report to Google Slides .
To export the detailed pricing report, click either
Export report > Export detailed pricing report to
CSV/Google Sheets or Export report > Export
detailed pricing report to Microsoft Excel .
The report generation starts. Don't navigate away from the window
while the system generates the report. When the report generation finishes,
do the following:
If you generated a TCO report in Google Slides format,
to open your report, click Open report .
If you generated a detailed pricing report, do the following:
To download the files in Excel or CSV format, click Download .
To export your report to Google Sheets
click Export to Google Sheets . Then, when the export finished,
to view your report click Open in Google Sheets .
What's next
Learn how to plan your migration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
