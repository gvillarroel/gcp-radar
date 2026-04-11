---
title: "Class CreateDatabaseRequest (3.63.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/spanner/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest
  title: "Class CreateDatabaseRequest (3.63.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class CreateDatabaseRequest (3.63.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.63.0 (latest)
3.62.0
3.61.0
3.60.0
3.59.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.1
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.1
3.39.0
3.38.0
3.37.0
3.36.0
3.35.1
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.0
3.23.0
3.22.2
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.1
3.14.1
3.13.0
3.12.1
3.11.1
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.0
2.1.1
2.0.0
1.19.3
1.18.0
1.17.1
1.16.0
1.15.1
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
CreateDatabaseRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The request for
CreateDatabase][google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase] .
Attributes
Name
Description
parent
str
Required. The name of the instance that will serve the new
database. Values are of the form
projects/ .
create_statement
str
Required. A CREATE DATABASE statement, which specifies
the ID of the new database. The database ID must conform to
the regular expression [a-z][a-z0-9_\-]*[a-z0-9] and be
between 2 and 30 characters in length. If the database ID is
a reserved word or if it contains a hyphen, the database ID
must be enclosed in backticks (:literal: \ ).
extra_statements
MutableSequence[str]
Optional. A list of DDL statements to run
inside the newly created database. Statements
can create tables, indexes, etc. These
statements execute atomically with the creation
of the database:
if there is an error in any statement, the
database is not created.
encryption_config
google.cloud.spanner_admin_database_v1.types.EncryptionConfig
Optional. The encryption configuration for
the database. If this field is not specified,
Cloud Spanner will encrypt/decrypt all data at
rest using Google default encryption.
database_dialect
google.cloud.spanner_admin_database_v1.types.DatabaseDialect
Optional. The dialect of the Cloud Spanner
Database.
proto_descriptors
bytes
Optional. Proto descriptors used by CREATE/ALTER PROTO
BUNDLE statements in 'extra_statements' above. Contains a
protobuf-serialized
google.protobuf.FileDescriptorSet __.
To generate it,
install __ and
run protoc with --include_imports and
--descriptor_set_out. For example, to generate for
moon/shot/app.proto, run
::
$protoc --proto_path=/app_path --proto_path=/lib_path \
--include_imports \
--descriptor_set_out=descriptors.data \
moon/shot/app.proto
For more details, see protobuffer `self
description
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
