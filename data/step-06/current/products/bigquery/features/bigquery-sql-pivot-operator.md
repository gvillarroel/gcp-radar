---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.787Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SQL PIVOT operator"
feature_slug: "bigquery-sql-pivot-operator"
latest_feature_date: "2021-05-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "row-to-column transformation"
  - "PIVOT operator"
  - "PIVOT syntax"
  - "PIVOT clause"
  - "pivot query"
  - "pivot"
  - "FOR ... IN"
---

# BigQuery SQL PIVOT operator

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery SQL now supports the PIVOT operator for transforming row data into columns.

## Extended Definition

BigQuery SQL now supports the PIVOT operator for transforming row data into columns.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM ( SELECT product , sales , quarter FROM Produce ) PIVOT ( SUM ( sales ) AS total sales , COUNT ( ) AS num records FOR quarter IN ( 'Q1' , 'Q2' )) / --------+----------------+----------------+----------------+----------------+ product total sales Q1 num records Q1 total sales Q2 num records Q2 +--------+----------------+----------------+----------------+----------------+ Kale 121 2 108 2 Apple 78 2 0 1 +--------+----------------+----------------+----------------+---------------- / UNPIVOT operator FROM from item [, ...] unpivot operator unpivot operator : UNPIVOT [ { INCLUDE NULLS EXCLUDE NULLS } ] ( { single column unpivot multi column unpivot } ) [ unpivot alias ] single column unpivot : values column FOR name column IN ( columns to unpivot ) multi column unpivot : values column set FOR name column IN ( column sets to unpivot ) values column set : ( values column [, ...]) columns to unpivot : unpivot column [ row value alias ][, ...] column sets to unpivot : ( unpivot column [ row value alias ][, ...]) unpivot alias and row value alias : [AS] alias The UNPIVOT operator rotates columns into rows.
- Examples The following examples reference a table called Produce that looks like this: WITH Produce AS ( SELECT 'Kale' as product , 51 as sales , 'Q1' as quarter , 2020 as year UNION ALL SELECT 'Kale' , 23 , 'Q2' , 2020 UNION ALL SELECT 'Kale' , 45 , 'Q3' , 2020 UNION ALL SELECT 'Kale' , 3 , 'Q4' , 2020 UNION ALL SELECT 'Kale' , 70 , 'Q1' , 2021 UNION ALL SELECT 'Kale' , 85 , 'Q2' , 2021 UNION ALL SELECT 'Apple' , 77 , 'Q1' , 2020 UNION ALL SELECT 'Apple' , 0 , 'Q2' , 2020 UNION ALL SELECT 'Apple' , 1 , 'Q1' , 2021 ) SELECT FROM Produce / ---------+-------+---------+------+ product sales quarter year +---------+-------+---------+------ Kale 51 Q1 2020 Kale 23 Q2 2020 Kale 45 Q3 2020 Kale 3 Q4 2020 Kale 70 Q1 2021 Kale 85 Q2 2021 Apple 77 Q1 2020 Apple 0 Q2 2020 Apple 1 Q1 2021 +---------+-------+---------+------ / With the PIVOT operator, the rows in the quarter column are rotated into these new columns: Q1 , Q2 , Q3 , Q4 .
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- Examples The following examples reference a table called Produce that looks like this: WITH Produce AS ( SELECT 'Kale' as product , 51 as Q1 , 23 as Q2 , 45 as Q3 , 3 as Q4 UNION ALL SELECT 'Apple' , 77 , 0 , 25 , 2 ) SELECT FROM Produce / ---------+----+----+----+----+ product Q1 Q2 Q3 Q4 +---------+----+----+----+----+ Kale 51 23 45 3 Apple 77 0 25 2 +---------+----+----+----+---- / With the UNPIVOT operator, the columns Q1 , Q2 , Q3 , and Q4 are rotated.

