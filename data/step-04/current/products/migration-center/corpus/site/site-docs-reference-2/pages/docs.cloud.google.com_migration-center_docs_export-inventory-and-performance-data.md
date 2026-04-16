---
title: "Export asset and performance data \_|\_ Migration Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/migration-center/docs/export-inventory-and-performance-data
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/export-inventory-and-performance-data
  title: "Export asset and performance data \_|\_ Migration Center \_|\_ Google Cloud\
    \ Documentation"
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
Export asset and performance data
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to export your inventory of assets, and
how to export the performance data collected for the assets.
Export your asset details
Migration Center lets you generate a report of your inventory of
assets. You can download the report as a CSV file or a Microsoft Excel
spreadsheet, or export it to a Google Sheets file in your Google Drive,
which you can then share with your colleagues or customers.
Export details for all in-scope assets
To export your asset details, follow these steps:
In the Google Cloud console, go to the Create reports page.
Go to Create reports
In the Assets section, click Asset details export .
To view a list of all assets in your asset inventory, click All . By
default, the In scope tab is selected.
To export to CSV or Google Sheets, click Export to CSV/Google Sheets .
After the export is complete, a dialog appears.
To download the files in CSV format, click Download .
To export your report to Google Sheets, click Export to Google Sheets .
Then, when the export finishes, to view your report, click
Open in Google Sheets .
To export to Microsoft Excel format, click Export to Microsoft Excel .
After the export is complete, a dialog appears where you can download
the file.
Filter and export assets
If you only want to export assets that satisfy certain conditions, first filter
the assets, and then export them. You must filter servers and databases
separately.
In the Google Cloud console, go to the Create reports page.
Go to Create reports
In the Assets section, click Asset details export .
To view a list of assets belonging to a specific group or asset type, click
Groups or an asset type such as Servers or S3 .
To export to CSV or Google Sheets, click Export to CSV/Google Sheets .
After the export is complete, a dialog appears.
To download the files in CSV format, click Download .
To export your report to Google Sheets, click Export to Google Sheets .
Then, when the export finishes, to view your report, click
Open in Google Sheets .
To export to Microsoft Excel format, click Export to Microsoft Excel .
After the export is complete, a dialog appears where you can download
the file.
Export groups of assets
To export groups of assets, follow these steps:
In the Google Cloud console, go to the Create reports page.
Go to Create reports
In the Assets section, click Asset details export .
To view groups of assets, click Group .
Select the groups that you want to export.
To export to CSV or Google Sheets, click Export to CSV/Google Sheets .
After the export is complete, a dialog appears with a list of files containing
your asset details:
To download the files in CSV format, click Download .
To export your report to Google Sheets, click Export to Google Sheets .
Then, when the export finishes, to view your report, click
Open in Google Sheets .
To export to Microsoft Excel format, click Export to Microsoft Excel .
After the export is complete, a dialog appears where you can download
the file.
Export details for all out-of-scope assets
To export your out-of-scope assets, follow these steps:
In the Google Cloud console, go to the Create reports page.
Go to Create reports
In the Assets section, click Asset details export .
Click the All tab, then click the Out of scope tab.
The page shows the total number of out of scope assets to export.
To export to CSV or Google Sheets, click Export to CSV/Google Sheets .
After the export is complete, a dialog appears.
To download the files in CSV format, click Download .
To export your report to Google Sheets, click Export to Google Sheets .
Then, when the export finishes, to view your report, click
Open in Google Sheets .
To export to Microsoft Excel format, click Export to Microsoft Excel .
After the export is complete, a dialog appears where you can download
the file.
Export performance data
Migration Center lets you generate a report with the performance data
collected from your assets with the discovery client or the
mcdc CLI.
A performance data export contains daily aggregated metrics from your assets.
You can export metrics for the past available days, from a minimum of 10
up to a maximum of 420 days.
You can download the report as a CSV file or a Microsoft Excel
spreadsheet, or export it to a Google Sheets file in your Google Drive.
Export performance data for all assets
To export the performance data for all the assets in your inventory,
including servers and databases, follow these steps:
In the Google Cloud console, go to the Create reports page.
Go to Create reports
In the Assets section, click Performance data export .
Click the All assets tab. The page shows the total number of in scope
assets to export. Choose if you want to export servers, databases, or both.
To export to CSV format or Google Sheets, click
Export to CSV/Google Sheets .
To export to Microsoft Excel format, click Export to Microsoft Excel .
In the dialog that appears, select the number of days of performance data
that you want to export for each asset, then click Export .
After the export is complete, a dialog appears with one or two files to
download, depending on the format you chose.
To download the files, click Download .
To export your report to Google Sheets, click Export to Google Sheets .
Then, when the export finishes, to view your report, click
Open in Google Sheets .
This export doesn't include assets that you
marked as out of scope .
Filter assets and export performance data
To limit the performance data export to selected assets, filter them first by
specifying the conditions that you want to apply to your export.
In the Google Cloud console, go to the Create reports page.
Go to Create reports
In the Assets section, click Performance data export .
Depending on the asset type you want to export, click either the
Export servers or Export databases tab.
Use the Filter tab to select assets based on properties and values.
For example, filter assets based on the OS or fit level.
You can apply multiple filters at the same time.
To export to CSV format or Google Sheets, click
Export to CSV/Google Sheets .
To export to Microsoft Excel format, click Export to Microsoft Excel .
In the dialog that appears, select the number of days of performance data
that you want to export for each asset, then click Export .
After the export is complete, a dialog appears with one file to
download, depending on the format you chose.
To download the file, click Download .
To export your report to Google Sheets, click Export to Google Sheets .
Then, when the export finishes, to view your report, click
Open in Google Sheets .
Export performance data for groups of assets
To export the performance data for groups of assets, follow these steps:
In the Google Cloud console, go to the Create reports page.
Go to Create reports
In the Assets section, click Performance data export .
Click the Export groups tab. The page shows all the groups in your
Migration Center project.
Select the groups that you want to export, either manually, or with the
Filter tab.
To export to CSV format or Google Sheets, click
Export to CSV/Google Sheets .
To export to Microsoft Excel format, click Export to Microsoft Excel .
In the dialog that appears, select the number of days of performance data
that you want to export for each asset, then click Export .
After the export is complete, a dialog appears with one or two files to
download, depending on the format you chose.
To download the files, click Download .
To export your report to Google Sheets, click Export to Google Sheets .
Then, when the export finishes, to view your report, click
Open in Google Sheets .
View recent exported reports
Migration Center lets you view the last 100 reports that you've
generated.
You can't see reports generated by other users, nor reports generated in other
Google Cloud projects.
To view your recent reports, go to the Recent exports page.
Go to Recent exports
What's next
Learn how to generate a total cost of ownership (TCO) report for
your infrastructure .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
