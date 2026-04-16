---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.382Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BY NAME and CORRESPONDING set operation modifiers"
feature_slug: "by-name-and-corresponding-set-operation-modifiers"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
keywords:
  - "name"
  - "corresponding"
  - "set"
  - "operation"
  - "modifiers"
  - "let"
  - "operations"
  - "match"
---

# BY NAME and CORRESPONDING set operation modifiers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BY NAME and CORRESPONDING modifiers let set operations match columns by name instead of position.

## Extended Definition

The BY NAME and CORRESPONDING modifiers let set operations match columns by name instead of position.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Name-based column matching To make set operations match columns by name instead of by column position, use the BY NAME or CORRESPONDING modifier.
- BY NAME or CORRESPONDING Use the BY NAME or CORRESPONDING modifier with set operations to match columns by name instead of by position.
- The following table shows the equivalent syntaxes between the BY NAME and CORRESPONDING modifiers, using the UNION ALL set operator as an example: BY NAME syntax Equivalent CORRESPONDING syntax UNION ALL BY NAME UNION ALL STRICT CORRESPONDING INNER UNION ALL BY NAME UNION ALL CORRESPONDING {LEFT FULL} [OUTER] UNION ALL BY NAME {LEFT FULL} [OUTER] UNION ALL CORRESPONDING [FULL] OUTER UNION ALL BY NAME [FULL] OUTER UNION ALL CORRESPONDING UNION ALL BY NAME ON (col1, col2, ...) UNION ALL STRICT CORRESPONDING BY (col1, col2, ...) The following table shows the behavior of the mode prefixes for the BY NAME and CORRESPONDING modifiers when left and right input columns don't match: Mode prefix and modifier Behavior when left and right input columns don't match BY NAME (no prefix) or STRICT CORRESPONDING Error, all columns must match in both inputs.
- Example: SELECT 1 AS one digit , 10 AS two digit UNION ALL BY NAME SELECT 20 AS two digit , 2 AS one digit ; -- Column values match by name and not position in query. / -----------+-----------+ one digit two digit +-----------+-----------+ 1 10 2 20 +-----------+----------- / Other column-related rules For set operations other than UNION ALL , all column types must support equality comparison.

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Year Google Ads Table Name: AdGroupCriterion Google Ads API Resource: ad group criterion Google Ads Field Name Description Adwords Mapped Field Name ad group criterion ad group The ad group to which the criterion belongs. ad group criterion bid modifier The modifier for the bid when the criterion matches.
- Google Ads Table Name: LocationBasedCampaignCriterion Google Ads API Resource: location view Google Ads Field Name Description Adwords Mapped Field Name campaign criterion bid modifier The modifier for the bids when the criterion matches.
- Week Google Ads Table Name: CampaignCriterion Google Ads API Resource: campaign criterion Google Ads Field Name Description Adwords Mapped Field Name campaign criterion bid modifier The modifier for the bids when the criterion matches.
- Ad group bid modifier resource names have the form: customers/{customer id}/adGroupBidModifiers/{ad group id} {criterion id} ad group id The ID of the ad group. ad group name The name of the ad group.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.
- For example: TIMESTAMP('2012-10-01 02:03:04') DATE ADD(CURRENT TIMESTAMP(), -7, 'DAY') Example: get tables between two days This example assumes the following tables exist: mydata.people20140325 mydata.people20140326 mydata.people20140327 legacySQL SELECT name FROM TABLE DATE RANGE ([ myproject - 1234 : mydata . people ], TIMESTAMP ( '2014-03-25' ), TIMESTAMP ( '2014-03-27' )) WHERE age > = 35 Matches the following tables: mydata.people20140325 mydata.people20140326 mydata.people20140327 Example: get tables in a two-day range up to "now" This example assumes the following tables exist in a project named myproject-1234 : mydata.people20140323 mydata.people20140324 mydata.people20140325 legacySQL SELECT name FROM ( TABLE DATE RANGE ([ myproject - 1234 : mydata . people ], DATE ADD ( CURRENT TIMESTAMP (), - 2 , 'DAY' ), CURRENT TIMESTAMP ())) WHERE age > = 35 Matches the following tables: mydata.people20140323 mydata.people20140324 mydata.people20140325 TABLE DATE RANGE STRICT( prefix , timestamp1 , timestamp2 ) This function is equivalent to TABLE DATE RANGE .
- Example: legacySQL SELECT page title , / Populate these columns as True or False, / / depending on the condition / IF ( page title CONTAINS 'search' , INTEGER ( total ), 0 ) AS search , IF ( page title CONTAINS 'Earth' OR page title CONTAINS 'Maps' , INTEGER ( total ), 0 ) AS geo , FROM / Subselect to return top revised Wikipedia articles / / containing 'Google', followed by additional text. / ( SELECT TOP ( title , 5 ) as page title , COUNT ( ) as total FROM [ bigquery - public - data : samples . wikipedia ] WHERE REGEXP MATCH ( title , r '^Google.+' ) AND wp namespace = 0 ); Returns: +---------------+--------+------+ page title search geo +---------------+--------+------+ Google search 4261 0 Google Earth 0 3874 Google Chrome 0 0 Google Maps 0 2617 Google bomb 0 0 +---------------+--------+------+ Using HASH to select a random sample of your data Some queries can provide a useful result using random subsampling of the result set.
- Example: match tables whose names contain "oo" and have a length greater than 4 This example assumes the following tables exist: mydata.boo mydata.fork mydata.ooze mydata.spoon legacySQL SELECT speed FROM ( TABLE QUERY ([ myproject - 1234 : mydata ], 'table id CONTAINS "oo" AND length(table id) >= 4' )) Matches the following tables: mydata.ooze mydata.spoon Example: match tables whose names start with "boo", followed by 3-5 numeric digits This example assumes the following tables exist in a project named myproject-1234 : mydata.book4 mydata.book418 mydata.boom12345 mydata.boom123456789 mydata.taboo999 legacySQL SELECT speed FROM TABLE QUERY ([ myproject - 1234 : mydata ], 'REGEXP MATCH(table id, r"^boo[\d]{3,5}")' ) Matches the following tables: mydata.book418 mydata.boom12345 URL functions Syntax URL functions HOST() Given a URL, returns the host name as a string.

