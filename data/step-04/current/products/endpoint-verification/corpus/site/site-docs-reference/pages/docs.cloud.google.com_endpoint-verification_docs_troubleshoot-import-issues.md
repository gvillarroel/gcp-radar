---
title: "Troubleshoot device import issues \_|\_ Endpoint Verification \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-import-issues
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/creating-device-access-level
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-import-issues
  title: "Troubleshoot device import issues \_|\_ Endpoint Verification \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Endpoint Verification
Guides
Send feedback
Troubleshoot device import issues
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how administrators can resolve the device import issues
when importing the company-owned devices.
The following table lists error messages that you might encounter when importing
the company-owned devices and provides suggestions for how to fix each of them.
Error message
Workaround
There was a problem uploading your file.
The file could not be uploaded.
Upload the file again.
The file is empty.
The uploaded CSV file is empty.
Add details for your company-owned devices and upload the file again.
The file might be damaged or the format might be wrong.
The uploaded CSV file does not have a header. Ensure that the header
format matches the import template and upload the file again.
There's a problem in the file header.
The uploaded CSV file has an invalid header. Ensure that the header format
matches the import template and upload the file again.
There's a formatting problem in the CSV file.
The uploaded CSV file contains some errors. Ensure that the format of
each row is correct and upload the file again.
The file type must be CSV.
Ensure that the file type is CSV
and upload the file again.
The CSV file is too large.
The maximum file size is 10 MB. Split the data into two CSV files and
upload the files.
The uploaded CSV file has some unsupported columns.
Some extra columns were added to the import template. Remove the columns
and upload the file again.
The column-name column is missing from the file.
Add the missing column to the import template and upload the file again.
There's more than 1 column-name column in the file.
Remove the duplicate column from the file and upload the file again.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
