---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.906Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON functions"
feature_slug: "json-functions"
latest_feature_date: "2016-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "json"
  - "functions"
  - "bigquery"
  - "standard"
  - "sql"
  - "provides"
  - "provide"
  - "built"
---

# JSON functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL provides JSON functions; JSON functions provide built-in query functions for working with JSON data in BigQuery.

## Extended Definition

BigQuery Standard SQL provides JSON functions; JSON functions provide built-in query functions for working with JSON data in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Categories The JSON functions are grouped into the following categories based on their behavior: Category Functions Description Standard extractors JSON QUERY JSON VALUE JSON QUERY ARRAY JSON VALUE ARRAY Functions that extract JSON data.
- Home Documentation Data analytics BigQuery Reference Send feedback JSON functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports the following functions, which can retrieve and transform JSON data.
- Accessors JSON KEYS JSON TYPE Functions that provide access to JSON properties.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- 1515 ) AS distance , AVG ( mean temp ) AS temp , AVG ( lat / 1000 ) lat , AVG ( long / 1000 ) long FROM [ weather geo . table ] WHERE month = 1 GROUP BY distance ) WHERE distance < 100 ORDER BY distance ASC LIMIT 100 ; Regular expression functions BigQuery provides regular expression support using the re2 library; see that documentation for its regular expression syntax .
- Examples: PARSE PACKED IP('48.49.50.51') returns 'MDEyMw==' PARSE PACKED IP('3031:3233:3435:3637:3839:4041:4243:4445') returns 'MDEyMzQ1Njc4OUBBQkNERQ==' JSON functions BigQuery's JSON functions give you the ability to find values within your stored JSON data, by using JSONPath -like expressions.
- Use JSON functions instead of BigQuery's regular expression functions if working with structured data, as JSON functions are easier to use.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON '{"name":"apple","stock":3}' Error conditions If a format specifier is invalid, or isn't compatible with the related argument type, or the wrong number or arguments are provided, then an error is produced.
- Home Documentation Data analytics BigQuery Reference Send feedback String functions Stay organized with collections Save and categorize content based on your preferences.
- If json scope is not provided, this is used by default. 'JSON KEYS' : Only the JSON keys are searched. 'JSON KEYS AND VALUES' : The JSON keys and values are searched.
- Note: GoogleSQL provides regular expression support using the re2 library; see that documentation for its regular expression syntax.

