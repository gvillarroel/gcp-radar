---
title: "Discover and import databases \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/discover-and-import-databases
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/discover-and-import-databases
  title: "Discover and import databases \_|\_ Migration Center \_|\_ Google Cloud\
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
Discover and import databases
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use the database collection scripts to discover,
collect, and upload your database data to Migration Center.
Migration Center uses
open-source collection scripts available on GitHub
to collect data. To understand the type of data that Migration Center
collects, you can review the code of the collection scripts.
Before you begin
The database collection scripts support the following databases and
database versions:
Microsoft SQL Server for Windows Versions 2008R2 (SP2) to SQL
Server 2022
MySQL version 8
PostgreSQL versions 14 and 15.
Download and run the scripts
To discover and collect data from your databases, follow these steps:
Download the latest version of the collection scripts for the database
type that you want to discover:
Download scripts for Microsoft SQL Server .
Download scripts for PostgreSQL .
Download scripts for MySQL .
Extract the files, then in the scripts/collector folder, open the
folder for your database.
Follow the instructions in the README file to run the script. When it
finishes running, the script creates a ZIP file with the collected data
in the output folder that you select.
Upload the collected data to Migration Center
The ZIP files created by the collection scripts contain all the specifications
and performance data collected from your database.
Permissions required for this task
To perform this task, you must have the following
permissions :
rma.collectors.create on the project
migrationcenter.sources.create on the project
migrationcenter.importJobs.create on the project
To upload the ZIP files to Migration Center, follow these steps:
In the Google Cloud console, go to the Data import page.
Go to Data import
Click Add data > Upload files .
In the Set up file upload section, enter the name of the file upload.
From the File format list, select Database import file .
Click Select files to upload , then select all the files that you
want to upload.
To upload the files, click Upload files .
If the files are validated correctly, to create the assets from the
files, click Import data , then click Confirm .
Review the upload
After you upload your files, Migration Center validates them
to check if they are formally correct. If the validation is successful,
Migration Center then processes the data to create new assets,
or update existing ones. You can check the status of your upload jobs
from the Google Cloud console.
To review the status of your upload job, follow these steps:
In the Google Cloud console, go to the Data import page.
Go to Data import
In the File uploads tab, from the list of file imports, click the import
job that you want to review.
Review the Status for your uploaded files.
You can see your files in one of the following statuses:
Completed . The import of your file was successful.
Ready . Your file passed validation, and is ready to be imported.
Pending . Your file is waiting for another file to finish processing.
Running . Your file is processing.
Validating . Your file is in the validation stage.
Failed validation . Your file contains some errors. Fix the errors and then
try to upload your file again.
Failed . Your file couldn't be imported.
Review error details
If you encounter errors after importing your files, you can review
the error message directly in the Google Cloud console.
To review the errors of your upload job, follow these steps:
In the Google Cloud console, go to the Data import page.
Go to Data import
In the File uploads tab, from the list of file imports, click the import
file that shows a warning or error.
The import file details page shows the complete list of errors.
On the import file details page, you can review the assets and data fields
that cause the errors, and view a description of the error.
Errors in the file import job might prevent Migration Center from
creating new assets or update existing ones with the new changes.
To fix the error, edit your files and create a new file import job to upload
them again.
For more information about the possible error messages, see
Troubleshoot file import errors .
What's next
Learn more about
Migration Center collection methods .
Learn how to
manage your file uploads .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
