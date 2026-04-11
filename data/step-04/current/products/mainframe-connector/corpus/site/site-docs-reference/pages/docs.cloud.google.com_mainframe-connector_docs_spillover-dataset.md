---
title: "Transcoding spillover dataset \_|\_ Mainframe Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/spillover-dataset
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/spillover-dataset
  title: "Transcoding spillover dataset \_|\_ Mainframe Connector \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Connector
Reference
Send feedback
Transcoding spillover dataset
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Starting with the 5.16.0 release, Mainframe Connector creates a table
that logs all the errors that it encountered during the transcoding process
using the qsam decode
and qsam encode
commands. This table is called the spillover dataset. The spillover dataset
output format can be any of the following:
Optimized Row Columnar (ORC) file
Queued Sequential Access Method (QSAM) file
You can use this information to audit or debug your transcoding process.
Spillover dataset created by qsam decode
As part of the decoding process the qsam decode command creates
a spillover dataset with the following schema.
Field name
Type
Description
Row
number
The record number in which an error is encountered. The first record is
record 1. If the record number is not available, -1 is used.
Field
string
The full name of the field that failed to be decoded.
Error
string
The error that caused the record decoding to fail.
Record
bytes
The entire record.
Spillover dataset created by qsam encode
As part of the encoding process the qsam encode command creates
a spillover dataset with the following schema. For QSAM files, we recommend
that you use a file with variable record length of at least 1024.
Field name
Type
Description
Row
number
The record number that encountered the error. The first record is record
1. Some encoding sources may not provide a consistent row number. In that
case the row is -1.
Field
string
The full name of the field that failed to be encoded.
Error
string
The error that caused the record encoding to fail.
Record
string
The entire record encoded as JSON.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
