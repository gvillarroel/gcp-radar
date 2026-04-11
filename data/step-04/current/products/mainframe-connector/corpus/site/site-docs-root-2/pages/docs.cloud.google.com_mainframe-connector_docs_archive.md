---
title: "Archive mainframe data to Cloud Storage \_|\_ Mainframe Connector \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/archive
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/archive
  title: "Archive mainframe data to Cloud Storage \_|\_ Mainframe Connector \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Connector
Guides
Send feedback
Archive mainframe data to Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how you can archive and restore your mainframe data to
Cloud Storage by using Mainframe Connector.
Before you begin
Get started with Mainframe Connector
Install Mainframe Connector on your mainframe
Archive mainframe files to Cloud Storage
To archive files from your mainframe to Cloud Storage, follow these
steps:
Create a storage bucket for your archives.
When creating the bucket, make sure to choose the Archive storage class.
You can archive your mainframe binary data as is to a Cloud Storage
bucket. To do this, use the scp command
as follows:
scp --inDD= INPUT_DD
--gcsOutUri= URI
--encoding= ENCODING
–-noConvert
Replace the following:
INPUT_DD: the data definition (DD) file to be
copied. The default value is DD INFILE .
URI: the destination Cloud Storage
uniform resource identifier (URI) of the file to be copied.
ENCODING: the input character encoding. The
default value is CP037.
Note: Optionally, you can convert your mainframe binary data to an ORC, CSV,
or JSON file to a Cloud Storage bucket using the
qsam decode command .
Restore a file from Cloud Storage to your mainframe
You can use the gsutil cp command to restore a file from
Cloud Storage to a mainframe dataset. Note that you cannot copy
partitioned data sets (PDS).
Note: You can only restore mainframe binary data that you archived as is
(without converting to any other file format) using the gsutil cp
command. Mainframe Connector doesn't support restoring mainframe data
that is converted to other file formats.
To restore a file from Cloud Storage to a mainframe dataset, use the
following steps:
Specify the DSN and space requirements of the file you want to download to
your mainframe in JCL. In the following example, the record format (RECFM) in
the output file is FB . Modify the OUTFILE DD to fit your
requirements.
//OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG),
// RECFM=FB,DSORG=PS,
// SPACE=(10,(2,1),RLSE),
// AVGREC=M,
// UNIT=SYSDA
//SYSPRINT DD SYSOUT=*
//SYSDUMP DD SYSOUT=*
//STDIN DD *
Run the gsutil cp command in the following format. If the file
already exists on your Mainframe, make sure that you add the
--replace flag to the command.
gsutil cp GCS_URI DSN --recfm= RECFM --lrecl= LRECL --blksize= BLKSIZE --noseek
Replace the following:
GCS_URI : the Cloud Storage URI of the
Cloud Storage file. For example, gs://bucket/sample.mainframe.dsn .
DSN : the DSN destination location on the mainframe.
RECFM : the record format (RECFM) of the mainframe file. The
valid values are F, FB, and U. Note that these values are case-insensitive.
LRECL : (optional) the record length ( LRECL ) of the
file. The value must be an integer >= 0. If LRECL is not
specified the file is assumed to be in the undefined-length record format
(U).
BLKSIZE : (Optional) The block-size of the file. If set to 0, the
system will determine the optimal block-size. The value must be an integer
>= 0. If you don't specify a value, the file is treated as an unblocked
file.
noseek : (Optional) Include this parameter if you want to improve
download performance. This flag is set to false by default, that is, seek
operations are enabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
