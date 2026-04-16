---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.779Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Aggregation functions: sum and avg"
feature_slug: "aggregation-functions-sum-and-avg"
latest_feature_date: "2023-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/aggregation-queries"
  - "https://docs.cloud.google.com/datastore/docs/reference/gql_reference"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations"
keywords:
  - "aggregation"
  - "functions"
  - "sum"
  - "and"
  - "avg"
  - "queries"
  - "the"
---

# Aggregation functions: sum and avg

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Aggregation queries support the sum and avg functions.

## Extended Definition

Aggregation queries support the sum and avg functions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations](https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations)

## Supporting Pages

### Aggregation queries \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore in Datastore mode supports the following aggregation queries: count() sum() avg() Aggregation queries simplify your application code and cost less than fetching each entity for processing.
- Pricing Pricing for the count() , sum() , and avg() aggregation queries depends on the number of index entries scanned during the operation.
- String kind = "Sales" ; Key sales1Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales1" ); Key sales2Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales2" ); Key sales3Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales3" ); // Save all the sales. datastore . put ( Entity . newBuilder ( sales1Key ). set ( "amount" , 89 ). set ( "customerId" , 1 ). build (), Entity . newBuilder ( sales2Key ). set ( "amount" , 95 ). set ( "customerId" , 1 ). build (), Entity . newBuilder ( sales3Key ). set ( "amount" , 55 ). set ( "customerId" , 2 ). build ()); EntityQuery baseQuery = Query . newEntityQueryBuilder (). setKind ( kind ). build (); // Creating an aggregation query with COUNT, SUM and AVG aggregations.
- GetDoubleValue ()) GQL AGGREGATE SUM(hours) AS total hours, COUNT( ) AS total tasks OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) GQL supports a simplified form for aggregation queries: SELECT SUM(hours) AS total hours, COUNT( ) AS total tasks FROM tasks WHERE is done = false AND tag = 'house' This example uses the optional aliases of total hours and total tasks .

### GQL Reference \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grammar The GQL grammar is summarized as follows: < aggregation query > : = ( SELECT ( < aggregation > + , ) [ FROM < kind > ] [ WHERE < compound - condition > ] AGGREGATE ( < aggregation > + , ) OVER "(" < query > ")" ) < aggregation > : = ( COUNT "(" " " ")" COUNT UP TO "(" < integer - literal > ")" SUM "(" < property - name > ")" AVG "(" < property - name > ")" ) [ AS < alias > ] < alias > : = < name > < query > : = SELECT ( " " < property - name > + , DISTINCT < property - name > + , DISTINCT ON "(" < property - name > + , ")" " " DISTINCT ON "(" < property - name > + , ")" < property - name > + , ) [ FROM < kind > ] [ WHERE < compound - condition > ] [ ORDER BY ( < property - name > [ ASC DESC ] ) + , ] [ LIMIT ( < result - position > FIRST "(" < result - position > , < result - position > ")" ) ] [ OFFSET < result - position > [ "+" < result - position > ] ] < compound - condition > := < condition > AND < compound - condition > < condition > OR < compound - condition > "(" < compound - condition > ")" < condition > < condition > : = < property - name > IS NULL < property - name > < forward - comparator > < value > < value > < backward - comparator > < property - name > < forward - comparator > := < either - comparator > CONTAINS HAS ANCESTOR IN NOT IN < backward - comparator > := < either - comparator > IN HAS DESCENDANT < either - comparator > := = < < = > > = != < result - position > := < binding - site > < integer - literal > < value > : = < binding - site > < synthetic - literal > < string - literal > < integer - literal > < double - literal > < boolean - literal > < null - literal > < synthetic - literal > := KEY "(" [ "PROJECT" "(" < string - literal > ")" "," ] [ "NAMESPACE" "(" < string - literal > ")" "," ] < key - path - element > + , ")" ARRAY "(" < value > + , ")" BLOB "(" < string - literal > ")" DATETIME "(" < string - literal > ")" < key - path - element > := < kind > "," ( < integer - literal > < string - literal > ) < kind > : = < name > < property - name > := < name > + .
- AGGREGATE COUNT( ) OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) AGGREGATE COUNT UP TO(5) OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) Or over a more complicated base query: AGGREGATE COUNT( ) AS total OVER ( SELECT FROM tasks WHERE is done = true LIMIT 5 OFFSET 10 ) AGGREGATE COUNT UP TO(5) AS total OVER ( SELECT FROM tasks WHERE is done = true LIMIT 5 OFFSET 10 ) Simplified form SELECT COUNT( ) AS total FROM tasks WHERE is done = false AND tag = 'house' SELECT COUNT UP TO(5) AS total FROM tasks WHERE is done = false AND tag = 'house' SUM() and AVG() Use the SUM() aggregation to return the sum of the values of the requested property.
- AGGREGATE SUM(hours) OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) AGGREGATE AVG(hours) OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) Or over a more complicated base query: AGGREGATE SUM(hours) AS total hours OVER ( SELECT FROM tasks WHERE is done = true LIMIT 5 OFFSET 10 ) AGGREGATE AVG(hours) AS average hours OVER ( SELECT FROM tasks WHERE is done = true LIMIT 5 OFFSET 10 ) Simplified form SELECT SUM ( hours ) AS total hours FROM tasks WHERE is done = false AND tag = 'house' SELECT AVG ( hours ) AS average hours FROM tasks WHERE is done = false AND tag = 'house' Multiple Aggregations Multiple aggregations can be combined.
- For example: AGGREGATE SUM(hours) AS total hours, AVG(hours) AS average hours, COUNT( ) AS total tasks OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) Tips about GQL behavior The following table highlights some important aspects of GQL literal values and operators: Behavior Example An integer value is not equal to the equivalent double: for example 4 is not equal to 4.0 SELECT FROM Task WHERE priority = 4.0 will never yield a Task with priority set to a value of 4 ; SELECT WHERE percent complete = 50 will never yield a Task with percent complete set to a value of 50.0 .

### "Class AggregationQuery (2.24.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods add aggregation add aggregation ( aggregation ) Adds an aggregation operation to the nested query Parameter Name Description aggregation BaseAggregation An aggregation operation, e.g. a CountAggregation add aggregations add aggregations ( aggregations ) Adds a list of aggregations to the nested query Parameter Name Description aggregations list a list of aggregation operations avg avg ( property ref , alias = None ) Adds a avg over the nested query Parameter Name Description property ref str The property ref for the sum count count ( alias = None ) Adds a count over the nested query Parameter Name Description alias str (Optional) The alias for the count fetch fetch ( client = None , limit = None , eventual = False , retry = None , timeout = None , read time = None ) Execute the Aggregation Query; return an iterator for the aggregation results.
- Returns Type Description AggregationIterator The iterator for the aggregation query. sum sum ( property ref , alias = None ) Adds a sum over the nested query Parameter Name Description property ref str The property ref for the sum Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Client (namespace='ns{}'.format(unique)) .. doctest:: aggregation-query-fetch >> andy = datastore.Entity(client.key('Person', 1234)) >> andy['name'] = 'Andy' >> sally = datastore.Entity(client.key('Person', 2345)) >> sally['name'] = 'Sally' >> bobby = datastore.Entity(client.key('Person', 3456)) >> bobby['name'] = 'Bobby' >> client.put multi([andy, sally, bobby]) >> query = client.query(kind='Andy') >> aggregation query = client.aggregation query(query) >> result = aggregation query.count(alias="total").fetch(limit=5) >> result <<xref uid="google.cloud.datastore.aggregation.AggregationResultIterator">google.cloud.datastore.aggregation.AggregationResultIterator</xref> object at ...> .. testcleanup:: aggregation-query-fetch client.delete(andy.key) Parameters Name Description client Client (Optional) client used to connect to datastore.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

### Aggregations \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations](https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations)
- Source ID: `site-python-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If not passed, will use value from given query. add aggregation(aggregation) Adds an aggregation operation to the nested query Parameters aggregation ( google.cloud.datastore.aggregation.BaseAggregation ) – An aggregation operation, e.g. a CountAggregation add aggregations(aggregations) Adds a list of aggregations to the nested query :type aggregations: list :param aggregations: a list of aggregation operations avg(property ref, alias=None) Adds a avg over the nested query Parameters property ref ( str ) – The property ref for the sum count(alias=None) Adds a count over the nested query Parameters alias ( str ) – (Optional) The alias for the count fetch(client=None, limit=None, eventual=False, retry=None, timeout=None, read time=None) Execute the Aggregation Query; return an iterator for the aggregation results.
- Return type str Returns The project for the query. sum(property ref, alias=None) Adds a sum over the nested query Parameters property ref ( str ) – The property ref for the sum class google.cloud.datastore.aggregation.AggregationResult(alias, value) Bases: object A class representing result from Aggregation Query Parameters alias ( str ) – The alias for the aggregation. value ( int ) – The resulting value from the aggregation. class google.cloud.datastore.aggregation.AggregationResultIterator(aggregation query, client, limit=None, eventual=False, retry=None, timeout=None, read time=None) Bases: google.api core.page iterator.Iterator Represent the state of a given execution of a Query.
- Parameters alias ( str ) – The alias for the aggregation. value ( int ) – The resulting value from the aggregation. class google.cloud.datastore.aggregation.SumAggregation(property ref, alias=None) Bases: google.cloud.datastore.aggregation.BaseAggregation Representation of a “Sum” aggregation query.
- Raises QueryExplainError if explain metrics is not available on the query. class google.cloud.datastore.aggregation.AvgAggregation(property ref, alias=None) Bases: google.cloud.datastore.aggregation.BaseAggregation Representation of a “Avg” aggregation query.

