---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.934Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Large query results"
feature_slug: "large-query-results"
latest_feature_date: "2013-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "large"
  - "query"
  - "results"
  - "lets"
  - "bigquery"
  - "return"
  - "outputs"
  - "larger"
---

# Large query results

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Large query results support lets BigQuery return query outputs larger than standard result limits.

## Extended Definition

Large query results support lets BigQuery return query outputs larger than standard result limits.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the state does not appear as an option in one of the WHEN statements, the state value will default to "None." Example: legacySQL SELECT CASE WHEN state IN ( 'WA' , 'OR' , 'CA' , 'AK' , 'HI' , 'ID' , 'MT' , 'WY' , 'NV' , 'UT' , 'CO' , 'AZ' , 'NM' ) THEN 'West' WHEN state IN ( 'OK' , 'TX' , 'AR' , 'LA' , 'TN' , 'MS' , 'AL' , 'KY' , 'GA' , 'FL' , 'SC' , 'NC' , 'VA' , 'WV' , 'MD' , 'DC' , 'DE' ) THEN 'South' WHEN state IN ( 'ND' , 'SD' , 'NE' , 'KS' , 'MN' , 'IA' , 'MO' , 'WI' , 'IL' , 'IN' , 'MI' , 'OH' ) THEN 'Midwest' WHEN state IN ( 'NY' , 'PA' , 'NJ' , 'CT' , 'RI' , 'MA' , 'VT' , 'NH' , 'ME' ) THEN 'Northeast' ELSE 'None' END as region , average mother age , average father age , state , year FROM ( SELECT year , state , SUM ( mother age ) / COUNT ( mother age ) as average mother age , SUM ( father age ) / COUNT ( father age ) as average father age FROM [ bigquery - public - data : samples . natality ] WHERE father age < 99 GROUP BY year , state ) ORDER BY year LIMIT 5 ; Returns: +--------+--------------------+--------------------+-------+------+ region average mother age average father age state year +--------+--------------------+--------------------+-------+------+ South 24.342600163532296 27.683769419460344 AR 1969 West 25.185041908446163 28.268214055448098 AK 1969 West 24.780776677578217 27.831181063905248 CA 1969 West 25.005834769924412 27.942978384829598 AZ 1969 South 24.541730952905738 27.686430093306885 AL 1969 +--------+--------------------+--------------------+-------+------+ Simulating a Pivot Table Use conditional statements to organize the results of a subselect query into rows and columns.
- Example: legacySQL SELECT / Multiply timestamp by 1000000 and convert / / into a more human-readable format. / TOP ( FORMAT UTC USEC ( timestamp 1000000 ), 5 ) AS top revision time , COUNT ( ) AS revision count FROM [ bigquery - public - data : samples . wikipedia ]; Returns: +----------------------------+----------------+ top revision time revision count +----------------------------+----------------+ 2002-02-25 15:51:15.000000 20976 2002-02-25 15:43:11.000000 15974 2010-02-02 03:34:51.000000 3 2010-02-02 01:04:59.000000 3 2010-02-01 23:55:05.000000 3 +----------------------------+----------------+ Bucketing Results by Timestamp It's useful to use date and time functions to group query results into buckets corresponding to particular years, months, or days.
- Example: legacySQL SELECT REGEXP REPLACE ( word , r 'ne\' er ', ' never ') AS expanded word FROM [bigquery-public-data:samples.shakespeare] WHERE REGEXP MATCH(word, r' ne \ 'er' ) GROUP BY expanded word ORDER BY expanded word LIMIT 5 ; Returns: +---------------+ expanded word +---------------+ Whenever never nevertheless whenever +---------------+ Advanced examples Filter result set by regular expression match BigQuery's regular expression functions can be used to filter results in a WHERE clause, as well as to display results in the SELECT .
- Example This query adds the GROUPING function to the previous example to better identify the rows added because of the ROLLUP function. legacySQL SELECT year , GROUPING ( year ) as rollup year , is male , GROUPING ( is male ) as rollup gender , COUNT ( 1 ) as count FROM [ bigquery - public - data : samples . natality ] WHERE year > = 2000 AND year < = 2002 GROUP BY ROLLUP ( year , is male ) ORDER BY year , is male ; These are the result the new query returns. +------+-------------+---------+---------------+----------+ year rollup year is male rollup gender count +------+-------------+---------+---------------+----------+ NULL 1 NULL 1 12122730 2000 0 NULL 1 4063823 2000 0 false 0 1984255 2000 0 true 0 2079568 2001 0 NULL 1 4031531 2001 0 false 0 1970770 2001 0 true 0 2060761 2002 0 NULL 1 4027376 2002 0 false 0 1966519 2002 0 true 0 2060857 +------+-------------+---------+---------------+----------+ Notes: Non-aggregated fields in the SELECT clause must be listed in the GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus ; / Succeeds because all non-aggregated fields are group keys. / legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word ; / Fails because corpus is not aggregated nor is it a group key. / Expressions computed in the SELECT clause cannot be used in the corresponding GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) word count FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus , word count ; / Fails because word count is not visible to this GROUP BY clause. / Grouping by float and double values is not supported, because the equality function for those types is not well-defined.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- ExamView GROUP BY test id ; Differential privacy clause WITH DIFFERENTIAL PRIVACY OPTIONS( privacy parameters ) privacy parameters : epsilon = expression , delta = expression , [ max groups contributed = expression ], privacy unit column = column name Description This clause lets you transform the results of a query with differentially private aggregations .
- In the following example, a value table for a STRUCT is produced with the SELECT AS VALUE statement: SELECT FROM ( SELECT AS VALUE STRUCT ( 123 AS a , FALSE AS b )) / -----+-------+ a b +-----+-------+ 123 FALSE +-----+------- / Return query results as a value table You can use GoogleSQL to return query results as a value table.
- Example: SELECT Mascot AS X , SchoolID AS Y FROM TeamMascot UNION ALL SELECT LastName , PointsScored FROM PlayerStats ; Results: X Y Jaguars 50 Knights 51 Lakers 52 Mustangs 53 Adams 3 Buchanan 0 Coolidge 1 Adams 4 Buchanan 13 INTERSECT This query returns the last names that are present in both Roster and PlayerStats.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Querying very small tables results in disproportionately large cost for on-demand The minimum "processed data per referenced table" billed for a BigQuery query is 10 MiB, regardless of the actual size of the table.
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $query = 'SELECT id, view count FROM bigquery-public-data.stackoverflow.posts questions'; // Construct a BigQuery client object. $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); // Set job configs $jobConfig = $bigQuery->query($query); $jobConfig->useQueryCache(false); $jobConfig->dryRun(true); // Extract query results $queryJob = $bigQuery->startJob($jobConfig); $info = $queryJob->info(); printf('This query will process %s bytes' .
- Billing is larger than the bytes processed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries If the billing amount is larger than the value you calculated by querying the INFORMATION SCHEMA.JOBS view, there might be certain conditions that caused this: Queries over row-level security tables Queries over tables with row-level security don't produce a value for total bytes billed in the INFORMATION SCHEMA.JOBS view, therefore, the billing calculated using total bytes billed from INFORMATION SCHEMA.JOBS view will be less than the billed value.
- Use table expiration for destination tables Best practice: If you are writing large query results to a destination table, use the default table expiration time to remove the data when it's no longer needed.

