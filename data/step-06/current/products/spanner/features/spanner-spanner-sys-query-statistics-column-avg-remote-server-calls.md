---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.229Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SPANNER_SYS query statistics column AVG_REMOTE_SERVER_CALLS"
feature_slug: "spanner-spanner-sys-query-statistics-column-avg-remote-server-calls"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/query-operators-unary"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-distributed"
keywords:
  - "remote"
  - "server"
  - "statistics"
  - "column"
  - "query"
---

# Spanner SPANNER_SYS query statistics column AVG_REMOTE_SERVER_CALLS

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for the AVG_REMOTE_SERVER_CALLS column in the SPANNER_SYS query statistics table.

## Extended Definition

Spanner added support for the AVG_REMOTE_SERVER_CALLS column in the SPANNER_SYS query statistics table.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)

## Supporting Pages

### Unary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following query demonstrates this operator: SELECT s . songgenre FROM songs AS s ORDER BY songgenre LIMIT 3 ; / --------------------------+ SongGenre +--------------------------+ BLUES BLUES BLUES +-------------------------- / The execution plan appears as follows: The execution plan shows the local limit for the remote servers and the global limit for the root server.
- The following query demonstrates this operator: SELECT s . songname FROM songs AS s LIMIT 3 ; / ----------------------+ SongName +----------------------+ Not About The Guitar The Second Time Starting Again +---------------------- / The execution plan appears as follows: The local limit is the limit for each remote server.
- The following query demonstrates this operator: SELECT genre , songname FROM ml . predict ( model genreclassifier , TABLE songs ) / -----------------------+--------------------------+ Genre SongName +-----------------------+--------------------------+ Country Not About The Guitar Rock The Second Time Pop Starting Again Pop Nothing Is The Same Country Let's Get Back Together Pop I Knew You Were Magic Electronic Blue Rock 42 Rock Fight Story +-----------------------+-------------------------- / Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- The following query demonstrates this operator: DELETE FROM singers WHERE firstname = 'Alice' ; / 4 rows deleted This statement deleted 4 rows and did not return any rows. / The execution plan appears as follows: Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The cross apply operator output is the FirstName value from the input row, and the SongName value from the map row. (The SongName value is NULL if there is no map row that matches on SingerId .) The distributed union operator at the top of the execution plan then combines all of the output rows from the remote servers and returns them as the query results.
- The following query uses a semi join to find which singers do have an Album: SELECT FirstName , LastName FROM Singers WHERE SingerId IN ( SELECT SingerId FROM Albums ); / -----------+----------+ FirstName LastName +-----------+----------+ Marc Richards Catalina Smith Alice Trentor Lea Martin +-----------+---------- / The plan segment appears as follows: Anti-semi apply An Anti-semi apply operator is similar to a semi apply operator, except that it returns the input table columns only when a match doesn't occur on the map side.
- SELECT si . firstname , ( SELECT so . songname FROM songs AS so WHERE so . singerid = si . singerid LIMIT 1 ) FROM singers AS si ; / -----------+--------------------------+ FirstName Unspecified +-----------+--------------------------+ Alice Not About The Guitar Catalina Let's Get Back Together David NULL Lea NULL Marc NULL +-----------+-------------------------- / The query populates the first column from the Singers table, and the second column from the Songs table.
- The distributed union operator distributes sub plans to remote servers.

### Distributed operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following query demonstrates this operator: SELECT s . songname , s . songgenre FROM songs AS s WHERE s . singerid = 2 AND s . songgenre = 'ROCK' ; / -----------------+-----------+ SongName SongGenre +-----------------+-----------+ Starting Again ROCK The Second Time ROCK Fight Story ROCK +-----------------+----------- / The execution plan appears as follows: The distributed union operator sends subplans to remote servers, which perform a table scan across splits that satisfy the query's predicate WHERE s.SingerId = 2 AND s.SongGenre = 'ROCK' .
- A distributed merge union executes the following steps: The root server sends a subquery to each remote server that hosts a split of the queried data.
- Split pruning means the remote servers execute subplans only on splits that satisfy the predicate, improving latency and query performance.
- The distributed union operator then returns the combined results from the remote servers as the SQL query results.

