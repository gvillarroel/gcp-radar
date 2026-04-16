---
title: "PostgreSQL table bloat check \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/postgres-table-bloat-check
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/postgres-table-bloat-check
  title: "PostgreSQL table bloat check \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
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
PostgreSQL table bloat check
Stay organized with collections
Save and categorize content based on your preferences.
Use the following script to estimate table bloat. This script requires
up-to-date table statistics. Otherwise, the estimate is inaccurate.
WITH constants AS (
-- define some constants for sizes of things
-- for reference down the query and easy maintenance
SELECT current_setting ( 'block_size' ):: numeric AS bs , 23 AS hdr , 8 AS ma
),
no_stats AS (
-- screen out table who have attributes
-- which don't have stats, such as JSON
SELECT table_schema , table_name ,
n_live_tup :: numeric as est_rows ,
pg_table_size ( relid ):: numeric as table_size
FROM information_schema . columns
JOIN pg_stat_user_tables as psut
ON table_schema = psut . schemaname
AND table_name = psut . relname
LEFT OUTER JOIN pg_stats
ON table_schema = pg_stats . schemaname
AND table_name = pg_stats . tablename
AND column_name = attname
WHERE attname IS NULL
AND table_schema NOT IN ( 'pg_catalog' , 'information_schema' )
GROUP BY table_schema , table_name , relid , n_live_tup
),
null_headers AS (
-- calculate null header sizes
-- omitting tables which don't have complete stats
-- and attributes which aren't visible
SELECT
hdr + 1 + ( sum ( case when null_frac <> 0 THEN 1 else 0 END ) / 8 ) as nullhdr ,
SUM (( 1 - null_frac ) * avg_width ) as datawidth ,
MAX ( null_frac ) as maxfracsum ,
schemaname ,
tablename ,
hdr , ma , bs
FROM pg_stats CROSS JOIN constants
LEFT OUTER JOIN no_stats
ON schemaname = no_stats . table_schema
AND tablename = no_stats . table_name
WHERE schemaname NOT IN ( 'pg_catalog' , 'information_schema' )
AND no_stats . table_name IS NULL
AND EXISTS ( SELECT 1
FROM information_schema . columns
WHERE schemaname = columns . table_schema
AND tablename = columns . table_name )
GROUP BY schemaname , tablename , hdr , ma , bs
),
data_headers AS (
-- estimate header and row size
SELECT
ma , bs , hdr , schemaname , tablename ,
( datawidth + ( hdr + ma - ( case when hdr % ma = 0 THEN ma ELSE hdr % ma END ))):: numeric AS datahdr ,
( maxfracsum * ( nullhdr + ma - ( case when nullhdr % ma = 0 THEN ma ELSE nullhdr % ma END ))) AS nullhdr2
FROM null_headers
),
table_estimates AS (
-- make estimates of how large the table should be
-- based on row and page size
SELECT schemaname , tablename , bs ,
reltuples :: numeric as est_rows , relpages * bs as table_bytes ,
CEIL (( reltuples *
( datahdr + nullhdr2 + 4 + ma -
( CASE WHEN datahdr % ma = 0
THEN ma ELSE datahdr % ma END )
) / ( bs - 20 ))) * bs AS expected_bytes ,
reltoastrelid
FROM data_headers
JOIN pg_class ON tablename = relname
JOIN pg_namespace ON relnamespace = pg_namespace . oid
AND schemaname = nspname
WHERE pg_class . relkind = 'r'
),
estimates_with_toast AS (
-- add in estimated TOAST table sizes
-- estimate based on 4 toast tuples per page because we don't have
-- anything better. also append the no_data tables
SELECT schemaname , tablename ,
TRUE as can_estimate ,
est_rows ,
table_bytes + ( coalesce ( toast . relpages , 0 ) * bs ) as table_bytes ,
expected_bytes + ( ceil ( coalesce ( toast . reltuples , 0 ) / 4 ) * bs ) as expected_bytes
FROM table_estimates LEFT OUTER JOIN pg_class as toast
ON table_estimates . reltoastrelid = toast . oid
AND toast . relkind = 't'
),
table_estimates_plus AS (
-- add some extra metadata to the table data
-- and calculations to be reused
-- including whether we can estimate it
-- or whether we think it might be compressed
SELECT current_database () as databasename ,
schemaname , tablename , can_estimate ,
est_rows ,
CASE WHEN table_bytes > 0
THEN table_bytes :: NUMERIC
ELSE NULL :: NUMERIC END
AS table_bytes ,
CASE WHEN expected_bytes > 0
THEN expected_bytes :: NUMERIC
ELSE NULL :: NUMERIC END
AS expected_bytes ,
CASE WHEN expected_bytes > 0 AND table_bytes > 0
AND expected_bytes < = table_bytes
THEN ( table_bytes - expected_bytes ):: NUMERIC
ELSE 0 :: NUMERIC END AS bloat_bytes
FROM estimates_with_toast
UNION ALL
SELECT current_database () as databasename ,
table_schema , table_name , FALSE ,
est_rows , table_size ,
NULL :: NUMERIC , NULL :: NUMERIC
FROM no_stats
),
bloat_data AS (
-- do final math calculations and formatting
select current_database () as databasename ,
schemaname , tablename , can_estimate ,
table_bytes , round ( table_bytes / ( 1024 ^ 2 ):: NUMERIC , 3 ) as table_mb ,
expected_bytes , round ( expected_bytes / ( 1024 ^ 2 ):: NUMERIC , 3 ) as expected_mb ,
round ( bloat_bytes * 100 / table_bytes ) as pct_bloat ,
round ( bloat_bytes / ( 1024 :: NUMERIC ^ 2 ), 2 ) as mb_bloat ,
table_bytes , expected_bytes , est_rows
FROM table_estimates_plus
)
-- filter output for bloated tables
SELECT databasename , schemaname , tablename ,
can_estimate ,
est_rows ,
pct_bloat , mb_bloat ,
table_mb
FROM bloat_data
-- this where clause defines which tables actually appear
-- in the bloat chart
-- example below filters for tables which are either 50%
-- bloated and more than 20mb in size, or more than 25%
-- bloated and more than 4GB in size
WHERE ( pct_bloat > = 50 AND mb_bloat > = 10 )
OR ( pct_bloat > = 25 AND mb_bloat > = 1000 )
AND tablename = '%'
ORDER BY mb_bloat DESC NULLS LAST ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
