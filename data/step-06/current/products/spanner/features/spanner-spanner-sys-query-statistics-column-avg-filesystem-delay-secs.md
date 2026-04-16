---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.227Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SPANNER_SYS query statistics column AVG_FILESYSTEM_DELAY_SECS"
feature_slug: "spanner-spanner-sys-query-statistics-column-avg-filesystem-delay-secs"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-unary"
keywords:
  - "filesystem"
  - "delay"
  - "statistics"
  - "column"
  - "query"
---

# Spanner SPANNER_SYS query statistics column AVG_FILESYSTEM_DELAY_SECS

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for the AVG_FILESYSTEM_DELAY_SECS column in the SPANNER_SYS query statistics table.

## Extended Definition

Spanner added support for the AVG_FILESYSTEM_DELAY_SECS column in the SPANNER_SYS query statistics table.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)

## Supporting Pages

### "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- Source ID: `site-java-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Partition Options Defines the configuration for the number and size of partitions returned from BatchReadOnlyTransaction#partitionRead , BatchReadOnlyTransaction#partitionReadUsingIndex and BatchReadOnlyTransaction#partitionQuery Note: these options may not be honored based on the other parameters in the request. com. google. cloud. spanner.
- For example, Mutation.WriteBuilder#set(String) returns a binder to bind a column value, and Statement#bind(String) returns a binder to bind a parameter to a value. com. google. cloud. spanner.X Goog Spanner Request Id Interfaces Interface Description com. google. cloud. spanner.
- Individual rows from a read or query operation can be considered as structs; ResultSet#getCurrentRowAsStruct() allows an immutable struct to be created from the row that the result set is currently positioned over. com. google. cloud. spanner.
- Commit Stats Commit statistics are returned by a read/write transaction if specifically requested by passing in Options#commitStats() to the transaction. com. google. cloud. spanner.

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The following query uses a semi join to find which singers do have an Album: SELECT FirstName , LastName FROM Singers WHERE SingerId IN ( SELECT SingerId FROM Albums ); / -----------+----------+ FirstName LastName +-----------+----------+ Marc Richards Catalina Smith Alice Trentor Lea Martin +-----------+---------- / The plan segment appears as follows: Anti-semi apply An Anti-semi apply operator is similar to a semi apply operator, except that it returns the input table columns only when a match doesn't occur on the map side.
- SELECT si . firstname , ( SELECT so . songname FROM songs AS so WHERE so . singerid = si . singerid LIMIT 1 ) FROM singers AS si ; / -----------+--------------------------+ FirstName Unspecified +-----------+--------------------------+ Alice Not About The Guitar Catalina Let's Get Back Together David NULL Lea NULL Marc NULL +-----------+-------------------------- / The query populates the first column from the Singers table, and the second column from the Songs table.
- Consider another merge join example using the following query: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = merge join } songs AS s ON a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Total Junk The Second Time Total Junk Starting Again Total Junk Nothing Is The Same Total Junk Let's Get Back Together Total Junk I Knew You Were Magic Total Junk Blue Total Junk 42 Total Junk Not About The Guitar Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Green Not About The Guitar Nothing To Do With Me The Second Time Nothing To Do With Me Starting Again Nothing To Do With Me Nothing Is The Same Nothing To Do With Me Let's Get Back Together Nothing To Do With Me I Knew You Were Magic Nothing To Do With Me Blue Nothing To Do With Me 42 Nothing To Do With Me Not About The Guitar Play The Second Time Play Starting Again Play Nothing Is The Same Play Let's Get Back Together Play I Knew You Were Magic Play Blue Play 42 Play Not About The Guitar Terrified Fight Story +-----------------------+-------------------------- / The execution plan appears as follows: In the preceding execution plan, the query optimizer introduced additional sort operators to execute the merge join.
- To use this operator, set the join method to MERGE JOIN on the query hint, as shown in the following example: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = merge join } songs AS s ON a . singerid = s . singerid AND a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Terrified Fight Story Nothing To Do With Me Not About The Guitar +-----------------------+-------------------------- / The execution plan appears as follows: In this execution plan, the merge join is distributed so that the join executes where the data resides.

### Unary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- The following query demonstrates this operator: SELECT genre , songname FROM ml . predict ( model genreclassifier , TABLE songs ) / -----------------------+--------------------------+ Genre SongName +-----------------------+--------------------------+ Country Not About The Guitar Rock The Second Time Pop Starting Again Pop Nothing Is The Same Country Let's Get Back Together Pop I Knew You Were Magic Electronic Blue Rock 42 Rock Fight Story +-----------------------+-------------------------- / Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- The following query demonstrates this operator: DELETE FROM singers WHERE firstname = 'Alice' ; / 4 rows deleted This statement deleted 4 rows and did not return any rows. / The execution plan appears as follows: Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- The following query demonstrates this operator: SELECT array ( select as struct so . songname , so . songgenre FROM songs AS so WHERE so . singerid = s . singerid ) FROM singers AS s ; / ------------------------------------------------------------------+ Unspecified +------------------------------------------------------------------+ [] [[Let's Get Back Together, COUNTRY], [Starting Again, ROCK]] [["Not About The Guitar", "BLUES"]] [] [] +------------------------------------------------------------------ / The execution plan appears as follows: The serialize result operator creates a result that contains, for each row of the Singers table, an array of SongName and SongGenre pairs for the songs by the singer.
- The following query demonstrates this operator: SELECT s . songgenre FROM songs AS s ORDER BY songgenre ; / --------------------------+ SongGenre +--------------------------+ BLUES BLUES BLUES BLUES CLASSICAL COUNTRY ROCK ROCK ROCK +-------------------------- / The execution plan appears as follows: In this execution plan, the sort operator receives its input rows from a distributed union operator, sorts the input rows, and returns the sorted rows to a serialize result operator.

