---
title: "Connect psycopg2 to a PostgreSQL-dialect database \_|\_ Spanner \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/pg-psycopg2-connect
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/pg-psycopg2-connect
  title: "Connect psycopg2 to a PostgreSQL-dialect database \_|\_ Spanner \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Reference
Send feedback
Connect psycopg2 to a PostgreSQL-dialect database
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to connect the PostgreSQL psycopg2 driver to a
PostgreSQL-dialect database in Spanner. psycopg2 is a Python
driver for PostgreSQL.
Verify that PGAdapter is running on the same machine as the
application that is connecting using the PostgreSQL psycopg2 driver.
For more information, see Start PGAdapter .
connection = psycopg2 . connect ( database = " DATABASE_NAME " ,
host = " APPLICATION_HOST " ,
port = PORT )
cursor = connection . cursor ()
cursor . execute ( ' select \' Hello World \'' )
for row in cursor :
print ( row )
cursor . close ()
connection . close ()
Replace the following:
APPLICATION_HOST : the hostname or IP address of
the machine where PGAdapter is running. If running locally, you
can use localhost .
PORT : the port number where PGAdapter is
running. Change this in the connection string if PGAdapter is
running on a custom port. Otherwise, use the default port, 5432 .
Unix domain sockets
This section explains how to use Unix domain sockets to connect to a
PostgreSQL-dialect database database. Use Unix domain socket connections when you need to have
the lowest possible latency.
To use Unix domain sockets, PGAdapter must be running on the
same host as the client application.
connection = psycopg2 . connect ( database = " DATABASE_NAME " ,
host = " /tmp " ,
port = PORT )
cursor = connection . cursor ()
cursor . execute ( 'select \' Hello World \' ' )
for row in cursor :
print ( row )
cursor . close ()
connection . close ()
Replace the following:
/tmp : the default domain socket directory for
PGAdapter. This can be changed using the -dir command line
argument.
PORT : the port number where PGAdapter is
running. Change this in the connection string if PGAdapter is
running on a custom port. Otherwise, use the default port, 5432 .
What's next
Learn more about PGAdapter .
For more information about PostgreSQL psycopg2 driver connection options, see
psycopg2 Connection Options
in the PGAdapter GitHub repository.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
