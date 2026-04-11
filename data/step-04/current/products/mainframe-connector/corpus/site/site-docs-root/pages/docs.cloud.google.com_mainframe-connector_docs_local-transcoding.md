---
title: "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\
  \ Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding
  title: "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\
    \ Connector \_|\_ Google Cloud Documentation"
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
Move data transcoded locally on the mainframe to Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
This page discusses how you can transcode mainframe data locally on the
mainframe to a supported format ,
and then move the content to BigQuery. Transcoding is the process of
converting information from one form of coded representation to another. This
page discusses how you can use Mainframe Connector to transcode mainframe
data to optimized row columnar (ORC) and then save the data to Cloud Storage.
Mainframe Connector provides three ways in which you can transcode
mainframe data locally on the mainframe.
Using qsam commands (release 5.16.0 and later)
Using the vsam decode command (release 5.18.0
and later)
Using the gsutil cp command
Advantages of qsam and vsam commands
The qsam and vsam commands provide the following
advantages:
Support for compound data types, including the OCCURS clause (lists), REDEFINES
clause, and nested records. For more information about these data types, see
qsam and vsam transcoding reference .
Support for the configuration of the transcoding process through a
transcoder configuration file .
This capability offers more flexibility when decoding data to Google Cloud,
and encoding the data back to the mainframe.
Support for the creation of a spillover dataset ,
which is a table of transcoding errors that can be used for error inspection.
Support for multiple input and output formats .
This capability lets you load your data to and from various data warehouses.
Before you begin
Install Mainframe Connector
to any mainframe-partitioned dataset that you want to use as a procedure library
(PROCLIB).
Move data transcoded locally on the mainframe to Google Cloud
To transcode data locally on a mainframe and then move it to
BigQuery, you must perform the following tasks:
Read and transcode a dataset on a mainframe, and upload it to Cloud Storage
in the ORC format (for other formats supported only by the
qsam or vsam commands, see
TranscodeFormat ).
Transcoding is done during the qsam decode ,
vsam decode , or gsutil cp operations (based on the
command you choose), where a mainframe extended binary coded decimal
interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8
during the copy to a Cloud Storage bucket.
Load the dataset to a BigQuery table.
(Optional) Execute a SQL query on the BigQuery table.
(Optional) Export data from BigQuery back to the mainframe.
The following sections describe in detail how you can move data transcoded
locally on the mainframe to Google Cloud using
qsam or vsam commands and the
gsutil cp command .
Transcode locally using qsam and vsam commands
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To transcode your mainframe data locally on your mainframe using
qsam or vsam commands, use the following steps:
Create a job to read the dataset on your mainframe and transcode it to the ORC
format, as shown in the following command. Read the data from the
INFILE dataset , and the
record layout from the COPYBOOK DD .
You can modify the default behavior of the Mainframe Connector
transcoding process by providing a transcoder configuration file
using the --transcode-configuration
argument.
If your input dataset is a Queued Sequential Access Method (QSAM) file with
fixed or variable record length, use the following command:
//STEP01 EXEC BQSH
//INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR
//COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY
//CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS
//STDIN DD *
BUCKET= BUCKET_NAME
qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename
/*
If your input dataset is a Virtual Storage Access Method (VSAM) file with
fixed or variable record length, use the following command:
//STEP01 EXEC BQSH
//INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR
//COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY
//CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS
//STDIN DD *
BUCKET= BUCKET_NAME
vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename
/*
Replace BUCKET_NAME with the name of the
Cloud Storage bucket to which you want to copy mainframe data.
To avoid specifying variables such as project IDs and bucket names in each
job control language (JCL) procedure, you can add them in the BQSH PROCLIB
and reference them across several JCL procedures as environment variables.
This approach also helps give you a seamless transition between production
and non-production environments, as environment-specific variables are set
in the environment's BQSH PROCLIB.
In this example, the DD DataPath is used to specify the path of
the copybook, input, and transcoding configuration. See
DataPath
for other options.
If you want to log the commands executed during this process, you can enable load statistics .
Create and submit a BigQuery load job that loads ORC file
partitions from tablename.orc into
MY_DATASET.MY_TABLE , as follows.
Example JCL
//STEP02 EXEC BQSH
//STDIN DD *
BUCKET= BUCKET_NAME
PROJECT= PROJECT_NAME
bq load --project_id=$PROJECT \
myproject:MY_DATASET.MY_TABLE \
gs://$BUCKET/tablename.orc/*
/*
Replace the following:
BUCKET_NAME : the name of the Cloud Storage
bucket which contains the ORC files that you want to load to
BigQuery.
PROJECT_NAME : the name of the project in which you
want to execute the query.
(Optional) Create and submit a BigQuery query job that
executes a SQL read from the QUERY DD file .
Typically the query will be a MERGE or SELECT INTO DML
statement that results in transformation of a BigQuery table.
Note that Mainframe Connector logs in job metrics but doesn't
write query results to a file.
You can query BigQuery in various ways - inline, with a
separate dataset using DD, or with a separate dataset using DSN.
Example JCL
//STEP03 EXEC BQSH
//QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR
//STDIN DD *
PROJECT= PROJECT_NAME
LOCATION= LOCATION
bq query --project_id=$PROJECT \
--location=$LOCATION/*
/*
Replace the following:
PROJECT_NAME : the name of the project in which you
want to execute the query.
LOCATION : The location for where the query will be
executed. We recommended that you execute the query in a location close to
the data.
(Optional) Create and submit an export job that executes a SQL read from the
QUERY DD file , and
exports the resulting dataset to a mainframe as a binary file.
You can modify the default behavior of the Mainframe Connector
transcoding process by providing a transcoder configuration file using the --transcode-configuration argument.
//STEP04 EXEC BQSH
//OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR
//COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY
//CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS
//QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR
//STDIN DD *
PROJECT=PROJECT_NAME
qsam encode \
dd:QUERY
dd:OUTFILE
--copybook dd:COPYBOOK
--transcode-configuration dd:CONFIG
--input-format=BIGQUERY \
--input-parameter project_id= PROJECT_NAME \
--input-parameter location= LOCATION /*
/*
Replace the following:
PROJECT_NAME : the name of the project in which you
want to execute the query.
LOCATION : The location for where the query will be
executed. We recommended that you execute the query in a location close to
the data.
The data is exported to the OUTFILE DD
dataset. The record layout is described by the COPYBOOK DD . For other options for copybook, outfile, and
transcoding configuration paths, see DataPath .
Transcode locally using gsutil cp command
To transcode your mainframe data locally on your mainframe using the
gsutil cp command, use the following steps:
Create a job to read the dataset on your mainframe and transcode it to the ORC
format, as shown in the following command. Read the data from the
INFILE dataset , and the
record layout from the COPYBOOK DD .
The input dataset must be a Queued Sequential Access Method (QSAM) file with
fixed or variable record length.
//STEP01 EXEC BQSH
//INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR
//COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME
//STDIN DD *
BUCKET= BUCKET_NAME
gsutil cp --replace gs://$BUCKET/tablename.orc
/*
Replace BUCKET_NAME with the name of the
Cloud Storage bucket to which you want to copy mainframe data.
Note
From version 5.12.0 onwards, Mainframe Connector replaces
hyphens ("-") with underscores ("_") in variable names. If you want to
keep hyphens in your variable names, disable this automatic conversion by
setting the database variable
BQSH_FEATURE_CONVERT_UNDERSCORE_IN_FIELDS_NAME to
false .
Variables with the suffix FILLER are ignored during the
import process.
To avoid specifying variables such as project IDs and bucket names in each
JCL procedure, you can add them in the BQSH PROCLIB and reference them across
several JCL procedures as environment variables. This approach also helps
give you a seamless transition between production and non-production
environments, as environment-specific variables are set in the environment's
BQSH PROCLIB. For the complete list of environment variables supported by
Mainframe Connector, see Environment variables .
In this example, standard input (STDIN) is provided
as in-stream data to the STDIN DD .
Alternately, you can provide this input using a data source name (DSN), which
makes it easier to manage symbol substitution.
If you want to log the commands executed during this process, you can enable load statistics .
Create and submit a BigQuery load job that loads ORC file
partitions from tablename.orc into
MY_DATASET.MY_TABLE , as follows.
Example JCL
//STEP02 EXEC BQSH
//STDIN DD *
BUCKET= BUCKET_NAME
PROJECT= PROJECT_NAME
bq load --project_id=$PROJECT \
myproject:MY_DATASET.MY_TABLE \
gs://$BUCKET/tablename.orc/*
/*
Replace the following:
BUCKET_NAME : the name of the Cloud Storage
bucket which contains the ORC files that you want to load to
BigQuery.
PROJECT_NAME : the name of the project in which you
want to execute the query.
(Optional) Create and submit a BigQuery query job that
executes a SQL read from the QUERY DD file .
Typically the query will be a MERGE or SELECT INTO DML
statement that results in transformation of a BigQuery table.
Note that Mainframe Connector logs in job metrics but doesn't
write query results to a file.
You can query BigQuery in various ways - inline, with a
separate dataset using DD, or with a separate dataset using DSN.
Example JCL
//STEP03 EXEC BQSH
//QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR
//STDIN DD *
PROJECT= PROJECT_NAME
LOCATION= LOCATION
bq query --project_id=$PROJECT \
--location=$LOCATION/*
/*
Replace the following:
PROJECT_NAME : the name of the project in which you
want to execute the query.
LOCATION : The location for where the query will be
executed. We recommended that you execute the query in a location close to
the data.
(Optional) Create and submit an export job that executes a SQL read from the
QUERY DD file , and
exports the resulting dataset to a mainframe as a binary file.
Example JCL
//STEP04 EXEC BQSH
//OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR
//COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME
//QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR
//STDIN DD *
PROJECT= PROJECT_NAME
DATASET_ID= DATASET_ID
DESTINATION_TABLE= DESTINATION_TABLE
bq export --project_id=$PROJECT \
--dataset_id=$DATASET_ID \
--destination_table=$DESTINATION_TABLE \
--location="US" \
--remoteHost <mainframe-connector-url>.a.run.app \
--remotePort 443
/*
Replace the following:
PROJECT_NAME : The name of the project in which you
want to execute the query.
DATASET_ID : The BigQuery dataset ID
that contains the table that you want to export.
DESTINATION_TABLE : The BigQuery
table that you want to export.
The data is exported to the OUTFILE DD
dataset. The record layout is described by the COPYBOOK DD .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
