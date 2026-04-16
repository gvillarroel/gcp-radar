---
title: "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/hadoop-metadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/hadoop-metadata
  title: "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Extracting metadata from Apache Hive for migration
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To get support or provide feedback for this feature, contact bigquery-permission-migration-support@google.com .
This document shows how you can use the dwh-migration-dumper tool to extract
the necessary metadata before running a Apache Hive data or permissions
migration.
This document covers metadata extraction from the following data sources:
Apache Hive
Apache Hadoop Distributed File System (HDFS)
Apache Ranger
Cloudera Manager
Apache Hive query logs
Before you begin
Before you can use the dwh-migration-dumper tool, do the following:
Install Java
The server on which you plan to run dwh-migration-dumper tool must have
Java 8 or higher installed. If it doesn't, download Java from the
Java downloads page
and install it.
Required permissions
The user account that you specify for connecting the dwh-migration-dumper tool to
the source system must have permissions to read metadata from that system.
Confirm that this account has appropriate role membership to query the metadata
resources available for your platform. For example, INFORMATION_SCHEMA is a
metadata resource that is common across several platforms.
Install the dwh-migration-dumper tool
To install the dwh-migration-dumper tool, follow these steps:
On the machine where you want to run the dwh-migration-dumper tool, download the
zip file from the
dwh-migration-dumper tool GitHub repository .
To validate the dwh-migration-dumper tool zip file, download the
SHA256SUMS.txt file
and run the following command:
Bash
sha256sum --check SHA256SUMS.txt
If verification fails, see Troubleshooting .
Windows PowerShell
( Get-FileHash RELEASE_ZIP_FILENAME ) .Hash -eq (( Get-Content SHA256SUMS.txt ) -Split " " )[ 0 ]
Replace the RELEASE_ZIP_FILENAME with the downloaded
zip filename of the dwh-migration-dumper command-line extraction tool release—for example,
dwh-migration-tools-v1.0.52.zip
The True result confirms successful checksum verification.
The False result indicates verification error. Make sure the checksum and
zip files are downloaded from the same release version and placed in the
same directory.
Extract the zip file. The extraction tool binary is in the
/bin subdirectory of the folder created by extracting the zip file.
Update the PATH environment variable to include the installation path for
the extraction tool.
Extracting metadata for migration
Select one of the following options to learn how to extract metadata for your
data source:
Apache Hive
Perform the steps in the Apache Hive section Extract metadata and query logs from your data warehouse
to extract your Apache Hive metadata. You can then upload the metadata
to your Cloud Storage bucket containing your migration files.
HDFS
Run the following command to extract metadata from HDFS
using the dwh-migration-dumper tool.
dwh-migration-dumper \
--connector hdfs \
--host HDFS-HOST \
--port HDFS-PORT \
--output gs:// MIGRATION-BUCKET /hdfs-dumper-output.zip \
--assessment \
Replace the following:
HDFS-HOST : the HDFS NameNode hostname
HDFS-PORT : the HDFS NameNode port number. You can
skip this argument if you are using the default 8020 port.
MIGRATION-BUCKET : the Cloud Storage bucket
that you are using to store the migration files.
This command extracts metadata from HDFS to a
file named hdfs-dumper-output.zip in the MIGRATION-BUCKET
directory.
There are several known limitations when extracting metadata from HDFS:
Some tasks in this connector are optional and can fail, logging a full
stack trace in the output. As long as the required tasks have
succeeded and the hdfs-dumper-output.zip is generated, then you can
proceed with the HDFS migration.
The extraction process might fail or run slower than expected if the
configured thread pool size is too large. If you are encountering these
issues, we recommend decreasing the thread pool size using the command
line argument --thread-pool-size .
Apache Ranger
Run the following command to extract metadata from Apache Ranger
using the dwh-migration-dumper tool.
dwh-migration-dumper \
--connector ranger \
--host RANGER-HOST \
--port 6080 \
--user RANGER-USER \
--password RANGER-PASSWORD \
--ranger-scheme RANGER-SCHEME \
--output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \
--assessment \
Replace the following:
RANGER-HOST : the hostname of the
Apache Ranger instance
RANGER-USER : the username of the Apache Ranger
user
RANGER-PASSWORD : the password of the Apache Ranger
user
RANGER-SCHEME : specify if Apache Ranger
is using http or https . Default value is http .
MIGRATION-BUCKET : the Cloud Storage bucket
that you are using to store the migration files.
You can also include the following optional flags:
--kerberos-auth-for-hadoop : replaces --user and --password , if Apache Ranger
is protected by kerberos instead of basic authentication. You must run the
kinit command before the dwh-migration-dumper tool tool to use this flag.
--ranger-disable-tls-validation : include this flag if the https
certificate used by the API is self signed. For example, when using
Cloudera.
This command extracts metadata from Apache Ranger to a
file named ranger-dumper-output.zip in the MIGRATION-BUCKET
directory.
Cloudera
Run the following command to extract metadata from Cloudera
using the dwh-migration-dumper tool.
dwh-migration-dumper \
--connector cloudera-manager \
--url CLOUDERA-URL \
--user CLOUDERA-USER \
--password CLOUDERA-PASSWORD \
--output gs:// MIGRATION-BUCKET /cloudera-dumper-output.zip \
--yarn-application-types APPLICATION-TYPES \
--pagination-page-size PAGE-SIZE \
--assessment \
Replace the following:
CLOUDERA-URL : the URL for Cloudera Manager
CLOUDERA-USER : the username of the Cloudera
user
CLOUDERA-PASSWORD : the password of the Cloudera
user
MIGRATION-BUCKET : the Cloud Storage bucket
that you are using to store the migration files.
APPLICATION-TYPES : (Optional) list of all
existing application types from Hadoop YARN. For example, SPARK, MAPREDUCE .
PAGE-SIZE : (Optional) specify how much data is
fetched from 3rd party services, like the Hadoop
YARN API. The default value is 1000 , which represents 1000 entities per
request.
This command extracts metadata from Cloudera to a
file named dwh-migration-cloudera.zip in the MIGRATION-BUCKET
directory.
Apache Hive query logs
Perform the steps in the Apache Hive section Extract query logs with the hadoop-migration-assessment logging hook
to extract your Apache Hive query logs. You can then upload the logs
to your Cloud Storage bucket containing your migration files.
What's next
With your extracted metadata from Hadoop, you can use
these metadata files to do the following:
Migrate permissions from Hadoop
Schedule a Hadoop transfer
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
