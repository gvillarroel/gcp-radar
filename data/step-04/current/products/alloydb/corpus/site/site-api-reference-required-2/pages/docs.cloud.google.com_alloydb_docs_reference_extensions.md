---
title: "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/extensions
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/extensions
  title: "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
Supported database extensions
Stay organized with collections
Save and categorize content based on your preferences.
The following table lists all of the extensions supported by
AlloyDB.
All of these extensions are available on every AlloyDB instance.
To enable any of them, see Enable an extension .
The table also marks which extensions are included with AlloyDB Omni ,
the containerized edition of AlloyDB that you can run in your own
Linux-based environment.
Note that some extensions require additional steps before you can enable
them—typically, by setting one or more database
flags on your instances.
Extension
Included with AlloyDB
Included with AlloyDB Omni
Description
amcheck
Provides functions for verifying the logical consistency of the structure of relations, enabling the pg_amcheck application to check for corruption.
anon
Helps you hide or replace personally identifiable information (PII) or commercially sensitive data.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
alloydb.enable_anon
to the value on in the AlloyDB instance where
you want to use the extension.
auto_explain
Enables automatic logging of execution plans of slow statements, for
troubleshooting and more. It provides an automated way to perform the
functionality of the EXPLAIN command.
Important: Before you can use the
LOAD command to enable this extension, you must first
set the database flag
alloydb.enable_auto_explain
to the value on in the AlloyDB instance where
you want to use the extension.
Alternatively, you can connect to a database as a user that's a member
of the alloydbsuperuser role and use the command
LOAD 'auto_explain' to load this extension for one
session.
autoinc
Provides functions for incrementing fields automatically. This trigger stores the next value of a sequence into an integer field.
alloydb_scann
Implements a highly efficient nearest-neighbor index powered by the ScaNN algorithm . This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings.
bloom
Provides an index access method based on Bloom filters.
btree_gin
Provides sample GIN operator classes that implement B-tree equivalent
behavior.
btree_gist
Provides GiST index operator classes that implement B-tree equivalent
behavior.
citext
Provides a case-insensitive character string type citext .
cube
Implements a data type cube for representing multidimensional
cubes.
dblink
Provides functions to connect to PostgreSQL databases from within a
database session.
dict_int
An add-on dictionary template for full-text search that controls the
indexing of integers.
earthdistance
Provides two approaches to calculating great circle distances on the
surface of the Earth.
fuzzystrmatch
Provides several functions to determine similarities and distance between
strings.
google_columnar_engine
Provides the columnar engine feature of AlloyDB, which
handles HTAP (hybrid transactional analytical processing) and OLAP (online
analytical processing) workloads very efficiently.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
google_columnar_engine.enabled
to the value on in the AlloyDB instance where
you want to use the extension.
google_db_advisor
Provides the index advisor feature of AlloyDB, which
recommends indexes to speed up query processing.
google_ml_integration
Provides functions you use to register model endpoints and generate embeddings or invoke predictions in SQL.
google_plan_management
Provides functions you use to manage your query plans using query plan management for consistent query plan selection. This feature is available in ( Preview ).
hstore
Implements the hstore data type for storing sets of key/value
pairs within a single PostgreSQL value.
hypopg
Provides support for hypothetical indexes.
insert_username
Provides functions for storing the current user's name into a text field. You can use this function to track which user last modified a row in a database table.
intagg
Provides an integer aggregator and an enumerator.
intarray
Provides a set of functions and operators for manipulating null-free
arrays of integers and performing indexed searches on them.
ip4r
Provides data types for IPv4/v6 addresses, and address ranges, plus index
support.
isn
Provides data types for some international product numbering standards.
lo
Support for managing Large Objects (also called LOs or BLOBs).
ltree
Implements a data type ltree for representing labels of data
stored in a hierarchical tree-like structure.
moddatetime
Provides functions for storing the current time into a timestamp field. You can use this function to track the last time that a row in a database table was modified.
oracle_fdw
Provides a foreign data wrapper (fdw) for accessing Oracle databases easily and efficiently.
orafce
Emulates a subset of functions, packages, and operators from the Oracle RDBMS.
Note: By default, AlloyDB Omni does
not include Orafce. However, you can manually install Orafce
to an existing AlloyDB Omni installation.
pageinspect
Inspects the contents of database pages at a low level.
pg_background
Lets you run arbitrary commands in a background worker.
pg_bigm
Provides full text search capability in PostgreSQL using 2-gram (bigram)
indexes for faster full text searches.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
alloydb.enable_pg_bigm
to the value on in the AlloyDB instance where
you want to use the extension.
pg_buffercache
Provides a means for examining what's happening in the shared buffer cache
in real time.
pg_cron
Provides a simple cron-based job scheduler for PostgreSQL that runs
inside the database as an extension. It uses the same syntax as regular
cron , but it allows you to schedule PostgreSQL commands
directly from the database.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
alloydb.enable_pg_cron
to the value on in the AlloyDB instance where
you want to use the extension.
pg_freespacemap
Examines the free space map (FSM).
pg_hint_plan
Enables you to improve PostgreSQL execution plans using hints, which are
simple descriptions in SQL comments.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
alloydb.enable_pg_hint_plan
to the value on in the AlloyDB instance where
you want to use the extension.
Alternatively, you can connect to a database as a user that's a member
of the alloydbsuperuser role and use the command
LOAD 'pg_hint_plan' to load this extension for one
session.
pg_ivm
Provides support for materialized views. You can use materialized views to make incremental changes to the views instead of recomputing the contents from scratch.
pg_partman
Enables you to create and manage time-based and serial-based table
partition sets.
pg_prewarm
Provides a convenient way to load relation data into either the operating
system buffer cache or the PostgreSQL buffer cache.
This extension is supported for manual prewarming by calling its functions directly. You can't enable or configure automatic prewarming features, because you can't configure the shared_preload_libraries or pg_prewarm.autoprewarm parameters in AlloyDB.
pg_proctab
Enables you to use pg_top with
AlloyDB, and generate reports from the operating system
process table.
pg_repack
Lets you remove bloat from tables and indexes. Optionally, lets you
perform an online CLUSTER (order tables by cluster index).
pg_similarity
Provides support for similarity queries on PostgreSQL.
pg_squeeze
Removes unused space from a table and optionally uses an index to sort records or rows (tuples) of the table.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
alloydb.enable_pg_squeeze
to the value on in the AlloyDB instance where
you want to use the extension.
pg_stat_statements
Provides a means for tracking execution statistics of all SQL statements
executed.
pg_trgm
Provides functions and operators for determining the similarity of
alphanumeric text based on trigram matching, as well as index operator
classes that support fast searching for similar strings.
pg_visibility
Provides a way to examine the visibility map (VM) and the page-level
visibility information of a table.
pg_wait_sampling
Provides the ability to collect sampling statistics of wait events.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
alloydb.enable_pg_wait_sampling
to the value on in the AlloyDB instance where
you want to use the extension.
pgaudit
Provides detailed session and object audit logging using the standard
logging facility provided by PostgreSQL.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flag
alloydb.enable_pgaudit
to the value on in the AlloyDB instance where
you want to use the extension.
Warning: In AlloyDB Omni only, enabling this extension and the PostgreSQL logging_collector parameter might result in loss of audit logs. To enable the PostgreSQL and audit logs, set logging_collector to off and alloydb.enable_pgaudit to true . To enable the PostgreSQL log, set logging_collector to on and allobydb.enable_pgaudit to false .
pgcrypto
Provides cryptographic functions for PostgreSQL.
pgfincore
A set of functions to manage pages in operating system disk cache memory
from PostgreSQL.
Note: AlloyDB does not use
operating system disk cache memory pages, so this extension offers no
value when used with AlloyDB.
pglogical
Provides logical streaming replication for PostgreSQL using a
publish/subscribe model.
AlloyDB includes a number of plugins used by the
pglogical extension.
Important: Before you can use
CREATE EXTENSION to enable this extension, you must first
set the database flags
alloydb.enable_pglogical and alloydb.logical_decoding
to the value on in the AlloyDB instance where
you want to use the extension.
pgrowlocks
Provides row locking information for the specified table.
pgRouting
Extends PostGIS , enabling geospatial processing through network routing and analysis.
pgstattuple
Provides various functions to obtain tuple-level statistics.
pgtap
Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and
PL/SQL.
pgtt
Adds support for global temporary tables to your databases.
vector
The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector . It lets you store vector embeddings, generate vector-optimized indexes, and perform nearest-neighbor search.
plpgsql
A loadable procedural language for creating functions, procedures and
triggers. You also can use this language for direct execution of code in
DO blocks.
plproxy
Procedural language handler that allows remote procedure calls among
PostgreSQL databases, with optional sharding.
plv8
Provides a procedural language for enabling JavaScript.
PostGIS
Provides a spatial database extender for PostgreSQL. It adds support for
geographic objects and allows location queries to be run in SQL.
PostGIS includes a number of further extensions which
AlloyDB supports; see PostGIS extensions .
Note: By default, AlloyDB Omni does
not include PostGIS . However, you can manually install PostGIS to an existing AlloyDB Omni installation.
postgres_fdw
Provides a foreign-data wrapper that you can use to access data stored in
external PostgreSQL servers.
postgresql-hll
Introduces a new data type, hll , which is a HyperLogLog data
structure.
prefix
Provides prefix-matching, plus index support.
rdkit
Provides functions for comparing, manipulating, and identifying molecular structures.
refint
Includes functions to check foreign key restraints, the referencing table, and the referenced table.
rum
Implements support to create RUM indexes for high-performance full-text search. RUM indexes improve upon standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data.
sslinfo
Provides information about the SSL certificate that the current client
provided when it connected to the instance.
tablefunc
Provides various functions that return tables (multiple rows).
tcn
Provides a trigger function that notifies listeners of changes to the content of database tables.
tds_fdw
Provides a foreign data wrapper ( fdw ) for accessing databases
that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server
or Sybase.
temporal_tables
Provides support for temporal tables. In databases, a temporal table records the period of time for which a row is valid.
tsm_system_rows
Provides the table sampling method SYSTEM_ROWS, which can be used in the
TABLESAMPLE clause of a SELECT command.
tsm_system_time
Provides the table sampling method SYSTEM_TIME, which can be used in the
TABLESAMPLE clause of a SELECT command.
unaccent
A text search dictionary that removes accents and other diacritical signs from
lexemes.
uuid-ossp
Provides functions to generate universally unique identifiers (UUIDs)
using one of several standard algorithms.
Logical decoding plugins
In addition to the extensions listed earlier on this page,
AlloyDB supports the following plugins used by the
pglogical extension for formatting that extension's streamed
output.
Plugin
Description
decoderbufs
Formats streamed data as
protocol buffers .
pgoutput
PostgreSQL's built-in logical
decoding plugin.
test-decoding
Formats streamed data into a simple
text format.
wal2json
Formats streamed data as JSON.
PostGIS extensions
AlloyDB's PostGIS support includes the following extensions:
postgis
postgis_raster
postgis_sfcgal
postgis_tiger_geocoder
postgis_topology
address_standardizer
address_standardizer_data_us
Enable an extension
Enable an extension by connecting to a database in
an AlloyDB
cluster's primary instance, then running a CREATE
EXTENSION
command. For example, after connecting to your primary instance, you can enable
the citext extension using psql :
mydatabase = > CREATE EXTENSION IF NOT EXISTS citext ;
Only database users who are members of the alloydbsuperuser role can run the
CREATE EXTENSION command. By default, this includes the postgres user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
