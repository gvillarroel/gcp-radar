---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.951Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table wildcard functions"
feature_slug: "table-wildcard-functions"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
keywords:
  - "_TABLE_SUFFIX"
  - "wildcard table name"
  - "table wildcard functions"
  - "wildcard tables"
  - "table wildcard"
  - "TABLE_DATE_RANGE"
  - "FROM `dataset.table_*`"
  - "TABLE_QUERY"
---

# Table wildcard functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added table wildcard functions to query a specified set of tables efficiently.

## Extended Definition

BigQuery added table wildcard functions to query a specified set of tables efficiently.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: The reference is for Legacy SQL syntax overall, with only indirect relevance to table referencing patterns and not specific table wildcard functions.

Evidence snippets:
- Syntax Table wildcard functions TABLE DATE RANGE() Queries multiple daily tables that span a date range.
- Table wildcard functions TABLE DATE RANGE() Queries multiple daily tables that span a date range.
- Some examples of escaping: 'this is a space: \x20' 'this string has \'single quote\' inside it' 'first line \n second line' "double quotes are also ok" '\070' -> ERROR : octal escaping is not supported Table wildcard functions Table wildcard functions are a convenient way to query data from a specific set of tables.
- Table wildcard functions The term table wildcard function refers to a special type of function unique to BigQuery.

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: The page mainly documents wildcard tables in GoogleSQL and only references table wildcard functions as the legacy SQL equivalent.

Evidence snippets:
- For example, the following query is valid because it uses backticks: #standardSQL / Valid SQL query / SELECT max FROM bigquery-public-data.noaa gsod.gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC The following query is NOT valid because it isn't properly quoted with backticks: #standardSQL / Syntax error: Expected end of statement but got "-" at [4:11] / SELECT max FROM missing backticks bigquery - public - data . noaa gsod . gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Quotation marks don't work: #standardSQL / Syntax error: Unexpected string literal: 'bigquery-public-data.noaa gsod.gsod ' at [4:3] / SELECT max FROM quotes are not backticks 'bigquery-public-data.noaa gsod.gsod ' WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Query tables using wildcard tables Wildcard tables enable you to query several tables concisely.
- For example, to find the maximum temperature reported in the years between 1929 and 1935 inclusive, use the table wildcard to represent the last two digits of the year: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' and '35' ORDER BY max DESC Scanning a range of ingestion-time partitioned tables using PARTITIONTIME To scan a range of ingestion-time partitioned tables, use the PARTITIONTIME pseudocolumn with the TABLE SUFFIX pseudocolumn.
- Tables omitted for brevity SELECT FROM bigquery-public-data.noaa gsod.gsod1940 ) WHERE max != 9999.9 # code for missing data ORDER BY max DESC The same query using a wildcard table is much more concise: #standardSQL SELECT max , ROUND (( max - 32 ) 5 / 9 , 1 ) celsius , mo , da , year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' AND '40' ORDER BY max DESC Wildcard tables support built-in BigQuery storage only.
- For example, the following query scans the January 1, 2017 partition in the table my dataset.mytable id1 . standardSQL SELECT field1, field2, field3 FROM my dataset.mytable WHERE TABLE SUFFIX = 'id1' AND PARTITIONTIME = TIMESTAMP('2017-01-01') Querying all tables in a dataset To scan all tables in a dataset, you can use an empty prefix and the table wildcard, which means that the TABLE SUFFIX pseudocolumn contains full table names.

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Watch issue https://github.com/googleapis/python-bigquery-dataframes/issues/169 for updates to read gbq to support wildcard tables. df = bpd . read gbq table ( "bigquery-public-data.google analytics sample.ga sessions " , filters = [ ( " table suffix" , ">=" , "20160801" ), ( " table suffix" , "<=" , "20170630" ), ], ) Extract the total number of transactions within the Google Analytics session.
- EVALUATE ( MODEL bqml tutorial.sample model , ( SELECT IF ( totals . transactions IS NULL , 0 , 1 ) AS label , IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( geoNetwork . country , "" ) AS country , IFNULL ( totals . pageviews , 0 ) AS pageviews FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) The results should look like the following: +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ precision recall accuracy f1 score log loss roc auc +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ 0.468503937007874 0.11080074487895716 0.98534315834767638 0.17921686746987953 0.04624221101176898 0.98174125874125873 +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ Because you performed a logistic regression, the results include the following columns: precision : a metric for classification models.
- PREDICT ( MODEL bqml tutorial.sample model , ( SELECT IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( totals . pageviews , 0 ) AS pageviews , IFNULL ( geoNetwork . country , "" ) AS country , fullVisitorId FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) GROUP BY fullVisitorId ORDER BY total predicted purchases DESC LIMIT 10 The results should look like the following: +---------------------+---------------------------+ fullVisitorId total predicted purchases +---------------------+---------------------------+ 9417857471295131045 4 112288330928895942 2 2158257269735455737 2 489038402765684003 2 057693500927581077 2 2969418676126258798 2 5073919761051630191 2 7420300501523012460 2 0456807427403774085 2 2105122376016897629 2 +---------------------+---------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- PREDICT ( MODEL bqml tutorial.sample model , ( SELECT IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( totals . pageviews , 0 ) AS pageviews , IFNULL ( geoNetwork . country , "" ) AS country FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) GROUP BY country ORDER BY total predicted purchases DESC LIMIT 10 The results should look like the following: +----------------+---------------------------+ country total predicted purchases +----------------+---------------------------+ United States 220 Taiwan 8 Canada 7 India 2 Turkey 2 Japan 2 Italy 1 Brazil 1 Singapore 1 Australia 1 +----------------+---------------------------+ Query details The initial SELECT statement retrieves the country column and sums the predicted label column.

