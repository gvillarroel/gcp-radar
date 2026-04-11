---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.741Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "COLLATE function in Google Standard SQL"
feature_slug: "collate-function-in-google-standard-sql"
latest_feature_date: "2022-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "explicit collation specification"
  - "Google Standard SQL COLLATE"
  - "return STRING with collation"
  - "Standard SQL collation function"
  - "collation in expressions"
  - "COLLATE function"
  - "STRING COLLATE"
  - "STRING with collation"
---

# COLLATE function in Google Standard SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now provides the COLLATE function in Google Standard SQL to return a STRING value with an explicit collation specification.

## Extended Definition

The provided BigQuery documentation shows `COLLATE` as a collation specifier used in GoogleSQL DDL, such as `STRING COLLATE <collation specification>` on column definitions and `DEFAULT COLLATE` at table scope, to explicitly assign collation behavior to STRING data. The snippets also indicate this setting applies to schema-defined STRING values (including inside nested structures) while existing columns keep prior collation settings when table defaults change. The evidence does not explicitly show the standalone `COLLATE(expr)` function form, so support for a function-style `COLLATE` call is not directly evidenced here.

## Evidence Summary

The cited page provides syntax and examples for declaring STRING collation in table/column DDL, but it does not directly document a `COLLATE` SQL function returning a STRING expression.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Note: Constraints cannot be specified on ARRAY or STRUCT elements. column := column name column schema column schema := { simple type STRUCT<field list> ARRAY<array element schema> } [ PRIMARY KEY NOT ENFORCED REFERENCES table name ( column name ) NOT ENFORCED ] [ DEFAULT default expression GENERATED ALWAYS AS ( generation expression ) STORED OPTIONS ( generation option list ) ] [ NOT NULL ] [ OPTIONS ( column option list ) ] simple type := { data type STRING COLLATE collate specification } field list := field name column schema [ , ... ] array element schema := { simple type STRUCT<field list> } [ NOT NULL ] column name is the name of the column.
- For example, collation is added to characters when you create the mytable b table in the mydataset dataset: CREATE TABLE mydataset . mytable b ( amount INT64 , characters STRING ) +--------------------------------------+ mydataset.mytable b amount INT64 characters STRING COLLATE 'und:ci' +--------------------------------------+ However, although you have updated the collation specification for the dataset, your existing table, mytable a , continues to use the previous collation specification.
- All STRING column schemas in this table are collated with 'und:ci' : CREATE TABLE mydataset . newtable ( a STRING , b STRING , c STRUCT < x FLOAT64 y ARRAY < STRING > ) DEFAULT COLLATE 'und:ci' ; Only b and y are collated with 'und:ci' : CREATE TABLE mydataset . newtable ( a STRING , b STRING COLLATE 'und:ci' , c STRUCT < x FLOAT64 y ARRAY < STRING COLLATE 'und:ci' > ); Creating a table with parameterized data types The following example creates a table named newtable in mydataset .
- ALTER TABLE mydataset . mytable SET DEFAULT COLLATE '' Although you have updated the collation specification, your existing column, word , continues to use the previous collation specification. +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' +--------------------------------+ However, if you create a new column for your table, the new column includes the new collation specification.

