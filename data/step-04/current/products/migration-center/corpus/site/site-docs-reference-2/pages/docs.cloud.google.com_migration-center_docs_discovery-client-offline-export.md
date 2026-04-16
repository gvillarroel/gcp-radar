---
title: "Use the discovery client in a disconnected environment \_|\_ Migration Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/discovery-client-offline-export
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/discovery-client-offline-export
  title: "Use the discovery client in a disconnected environment \_|\_ Migration Center\
    \ \_|\_ Google Cloud Documentation"
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
Use the discovery client in a disconnected environment
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to export asset data from a disconnected environment
using the discovery client, and how to import it to
Migration Center. This feature is particularly
useful when direct network connectivity between your discovery client instance
and Migration Center is not possible due to security policies, network
constraints, or other reasons. This method lets you collect asset data offline,
and then transfer it to Migration Center for analysis and planning.
Limitations
You can run only a single export at a time.
The number of existing exports is limited to 3 to avoid unintentionally
consuming excessive disk space with old reports.
In case of a crash, reports that were still running don't resume nor
restart, and will be marked as failed. You need to manually delete the
reports.
Export asset data from the discovery client
You can export the complete data about your assets from the
discovery client.
Both the mcdc CLI and the discovery client
use the same export format.
Export using the mcdc CLI
To export asset data using the mcdc CLI, use the
mcdc export command.
The following are examples of common usage:
Export all collected data:
Linux
./mcdc export mc-frames-zip
Windows
mcdc.exe export mc-frames-zip
The command creates a zip file in the working directory.
Export using the discovery client installed mode
Follow these steps to create an export report using the discovery client
in installed mode:
In the discovery client, go to Exports , then click
New exports .
In the pane that appears, enter a name for the export, then select
Export full MCDC data .
To confirm, click Export data .
In the Exports page, you can track the progress of your export with
the progress bar under the Completion column. When finished, click Go
to export to view the details about your export.
In the dialog that appears, copy the path to the directory where the
generated export file was created, and open it using your file explorer to
access the outputs.
Cancel an in-progress export
Depending on the number of exported assets, the report creation might take
several hours. If you need to cancel an in-progress export, you must delete the
report from the discovery client.
In the discovery client, do the following:
In the discovery client, go to the Exports tab.
From the list of reports, select the in-progress report that you want to
cancel, then click Delete .
Content of the output file
The discovery client exports the asset data in a zip file. Each zip file
contains at least two JSON files:
metadata.json : contains metadata information about the export,
such as the API version used and the timestamp of the export.
data.<n>.json : contains the actual asset data in a human-readable
format. Depending on the amount of exported data, the discovery client
creates multiple files.
The JSON file contains an array of
AssetFrame
objects.
[
{
objec t (Asse t Frame)
}
]
Import data into Migration Center
After you have exported the asset data from the discovery client, you
can copy the zip file to a machine with access to Migration Center and
manually import it:
In Migration Center, go to Data import .
Go to Data import
Click Add data > Import files .
On the upload page, do the following:
Enter a name for the file import job.
From the File format list, select MCDC (ZIP) .
Click Select files to upload and select the zip file to upload.
To start the upload process, click Upload files .
You're redirected to the import job page. When the validation of the
file is complete, click Import data , then Confirm . The status of
the import will update automatically to Completed when the import
successfully completes.
To view the imported assets, go to the Assets page.
What's next
Learn how to run an offline assessment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
