---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.898Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NET IP address functions"
feature_slug: "net-ip-address-functions"
latest_feature_date: "2017-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "net"
  - "ip"
  - "address"
  - "functions"
  - "bigquery"
  - "standard"
  - "sql"
  - "provides"
---

# NET IP address functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL provides NET functions for parsing, formatting, masking, truncating, and converting IP addresses.

## Extended Definition

BigQuery Standard SQL provides NET functions for parsing, formatting, masking, truncating, and converting IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- 1515 ) AS distance , AVG ( mean temp ) AS temp , AVG ( lat / 1000 ) lat , AVG ( long / 1000 ) long FROM [ weather geo . table ] WHERE month = 1 GROUP BY distance ) WHERE distance < 100 ORDER BY distance ASC LIMIT 100 ; Regular expression functions BigQuery provides regular expression support using the re2 library; see that documentation for its regular expression syntax .
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- This example displays the top TLDs that are not in a list of common examples. legacySQL SELECT TLD ( repository homepage ) AS user tld , COUNT ( ) AS activity count FROM [ bigquery - public - data : samples . github timeline ] GROUP BY user tld HAVING / Only consider TLDs that are NOT NULL / / or in our list of common TLDs / user tld IS NOT NULL AND NOT user tld IN ( '' , '.com' , '.net' , '.org' , '.info' , '.edu' ) ORDER BY activity count DESC LIMIT 5 ; Returns: +----------+----------------+ user tld activity count +----------+----------------+ .de 22934 .io 17528 .me 13652 .fr 12895 .co.uk 9135 +----------+----------------+ Window functions Window functions, also known as analytic functions, enable calculations on a specific subset, or "window", of a result set.
- Example: legacySQL SELECT / Multiply timestamp by 1000000 and convert / / into a more human-readable format. / TOP ( FORMAT UTC USEC ( timestamp 1000000 ), 5 ) AS top revision time , COUNT ( ) AS revision count FROM [ bigquery - public - data : samples . wikipedia ]; Returns: +----------------------------+----------------+ top revision time revision count +----------------------------+----------------+ 2002-02-25 15:51:15.000000 20976 2002-02-25 15:43:11.000000 15974 2010-02-02 03:34:51.000000 3 2010-02-02 01:04:59.000000 3 2010-02-01 23:55:05.000000 3 +----------------------------+----------------+ Bucketing Results by Timestamp It's useful to use date and time functions to group query results into buckets corresponding to particular years, months, or days.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback String functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports string functions.
- Due to regular expression operator precedence, it's good practice to use parentheses around everything between ^ and $ . googlesql SELECT 'a@foo.com' AS email , REGEXP CONTAINS ( 'a@foo.com' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.com' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.com true true +----------------+---------------------+--------------------- / SELECT 'a@foo.computer' AS email , REGEXP CONTAINS ( 'a@foo.computer' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.computer' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.computer false true +----------------+---------------------+--------------------- / SELECT 'b@bar.org' AS email , REGEXP CONTAINS ( 'b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ b@bar.org true true +----------------+---------------------+--------------------- / SELECT '!b@bar.org' AS email , REGEXP CONTAINS ( '!b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( '!b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ !b@bar.org false true +----------------+---------------------+--------------------- / SELECT 'c@buz.net' AS email , REGEXP CONTAINS ( 'c@buz.net' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'c@buz.net' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ c@buz.net false false +----------------+---------------------+--------------------- / REGEXP EXTRACT REGEXP EXTRACT ( value , regexp [ , position [ , occurrence ]] ) Description Returns the substring in value that matches the re2 regular expression , regexp .
- If custom formatting is necessary for a type, you must first format it using type-specific format functions, such as FORMAT DATE() or FORMAT TIMESTAMP() .

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Functions (alphabetical) Stay organized with collections Save and categorize content based on your preferences.
- This topic contains all functions supported by GoogleSQL for BigQuery.
- NET.IP FROM STRING Converts an IPv4 or IPv6 address from a STRING value to a BYTES value in network byte order.
- NET.IP TO STRING Converts an IPv4 or IPv6 address from a BYTES value in network byte order to a STRING value.

