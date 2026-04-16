---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.774Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Query Explain"
feature_slug: "query-explain"
latest_feature_date: "2024-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations"
keywords:
  - "query"
  - "explain"
  - "returns"
  - "plans"
  - "and"
  - "billing"
  - "performance"
  - "statistics"
---

# Query Explain

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Query Explain returns query plans and billing and performance statistics for query execution.

## Extended Definition

Query Explain returns query plans and billing and performance statistics for query execution.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations](https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations)

## Supporting Pages

### "Class AggregationQuery (2.24.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationQuery)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description AggregationIterator The iterator for the aggregation query. sum sum ( property ref , alias = None ) Adds a sum over the nested query Parameter Name Description property ref str The property ref for the sum Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Client (namespace='ns{}'.format(unique)) .. doctest:: aggregation-query-fetch >> andy = datastore.Entity(client.key('Person', 1234)) >> andy['name'] = 'Andy' >> sally = datastore.Entity(client.key('Person', 2345)) >> sally['name'] = 'Sally' >> bobby = datastore.Entity(client.key('Person', 3456)) >> bobby['name'] = 'Bobby' >> client.put multi([andy, sally, bobby]) >> query = client.query(kind='Andy') >> aggregation query = client.aggregation query(query) >> result = aggregation query.count(alias="total").fetch(limit=5) >> result <<xref uid="google.cloud.datastore.aggregation.AggregationResultIterator">google.cloud.datastore.aggregation.AggregationResultIterator</xref> object at ...> .. testcleanup:: aggregation-query-fetch client.delete(andy.key) Parameters Name Description client Client (Optional) client used to connect to datastore.
- 2.24.0 (latest) 2.23.0 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.0 2.16.1 2.15.2 2.14.0 2.13.2 2.12.0 2.11.1 2.10.0 2.9.0 2.8.3 2.7.2 2.6.2 2.5.1 2.4.0 2.3.0 2.2.0 2.1.6 2.0.1 1.15.5 1.14.0 1.13.2 1.12.0 1.11.0 1.10.0 1.9.0 AggregationQuery ( client , query , explain options = None ) An Aggregation query against the Cloud Datastore.
- Parameters Name Description client Client The client used to connect to Datastore. query Query The query used for aggregations. explain options ExplainOptions (Optional) Options to enable query profiling for this query.

### "Interface Datastore (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore)
- Source ID: `site-java-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Submits a AggregationQuery with specified com.google.cloud.datastore.models.ExplainOptions and returns AggregationResults .
- Submits a Query with specified com.google.cloud.datastore.models.ExplainOptions and returns its result.
- StructuredQuery example: EntityQuery selectAllQuery = Query . newEntityQueryBuilder () . setKind ( "Task" ) . build (); AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder () . addAggregation ( count (). as ( "total count" )) . over ( selectAllQuery ) . build (); AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery ); for ( AggregationResult aggregationResult : aggregationResults ) { System . out . println ( aggregationResult . get ( "total count" )); } GqlQuery example: GqlQuery selectAllGqlQuery = Query . newGqlQueryBuilder ( "AGGREGATE COUNT( ) AS total count, COUNT UP TO(100) AS count upto 100 OVER(SELECT FROM Task)" ) . setAllowLiteral ( true ) . build (); AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder () . over ( selectAllGqlQuery ) . build (); AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery ); for ( AggregationResult aggregationResult : aggregationResults ) { System . out . println ( aggregationResult . get ( "total count" )); System . out . println ( aggregationResult . get ( "count upto 100" )); } Parameters Name Description query AggregationQuery options ReadOption [] Returns Type Description AggregationResults AggregationResults runAggregation(AggregationQuery query, ExplainOptions explainOptions, ReadOption[] options) public abstract AggregationResults runAggregation ( AggregationQuery query , ExplainOptions explainOptions , ReadOption [] options ) Beta This feature is covered by the Pre-GA Offerings Terms of the Terms of Service.
- String kind = "my kind" ; String property = "my property" ; String value = "my value" ; StructuredQuery<Entity> query = Query . newEntityQueryBuilder () . setKind ( kind ) . setFilter ( PropertyFilter . eq ( property , value )) . build (); QueryResults<Entity> results = datastore . run ( query ); List<Entity> entities = Lists . newArrayList (); while ( results . hasNext ()) { Entity result = results . next (); // do something with result entities . add ( result ); } Parameters Name Description query Query < T > options ReadOption [] Returns Type Description QueryResults < T > <T>run(Query<T> query, ExplainOptions explainOptions, ReadOption[] options) public abstract QueryResults<T> < T>run ( Query<T> query , ExplainOptions explainOptions , ReadOption [] options ) Beta This feature is covered by the Pre-GA Offerings Terms of the Terms of Service.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- This is demonstrated with the Python code below. class Organization(db.Model): name = db.StringProperty() class Person(db.Model): given name = db.StringProperty() surname = db.StringProperty() class MainPage(webapp2.RequestHandler): def post(self): org = Organization.get or insert('ateam', name='ATeam') person = Person(parent=org) person.given name='GI' person.surname='Joe' person.put() q = db.GqlQuery("SELECT FROM Person WHERE ANCESTOR IS :1 ", org) people = [] for p in q.run(): people.append({'given name': p.given name, 'surname': p.surname}) This time, with the ancestor org specified in the GqlQuery, the query returns the entity just inserted.
- Define the Person entity class Person(db.Model): given name = db.StringProperty() surname = db.StringProperty() organization = db.StringProperty() Add a person and retrieve the list of all people class MainPage(webapp2.RequestHandler): def post(self): person = Person(given name='GI', surname='Joe', organization='ATeam') person.put() q = db.GqlQuery("SELECT FROM Person") people = [] for p in q.run(): people.append({'given name': p.given name, 'surname': p.surname, 'organization': p.organization}) The problem with this code is that, in most cases, the query will not return the entity added in the statement above it.
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.

### Aggregations \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations](https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Return type ExplainMetrics Returns The metrics associated with the query execution.
- Return type str Returns The project for the query. sum(property ref, alias=None) Adds a sum over the nested query Parameters property ref ( str ) – The property ref for the sum class google.cloud.datastore.aggregation.AggregationResult(alias, value) Bases: object A class representing result from Aggregation Query Parameters alias ( str ) – The alias for the aggregation. value ( int ) – The resulting value from the aggregation. class google.cloud.datastore.aggregation.AggregationResultIterator(aggregation query, client, limit=None, eventual=False, retry=None, timeout=None, read time=None) Bases: google.api core.page iterator.Iterator Represent the state of a given execution of a Query.
- For example: >> andy = datastore.Entity(client.key('Person', 1234)) >> andy['name'] = 'Andy' >> sally = datastore.Entity(client.key('Person', 2345)) >> sally['name'] = 'Sally' >> bobby = datastore.Entity(client.key('Person', 3456)) >> bobby['name'] = 'Bobby' >> client.put multi([andy, sally, bobby]) >> query = client.query(kind='Andy') >> aggregation query = client.aggregation query(query) >> result = aggregation query.count(alias="total").fetch(limit=5) >> result <google.cloud.datastore.aggregation.AggregationResultIterator object at ...> Parameters client ( google.cloud.datastore.client.Client ) – (Optional) client used to connect to datastore.
- 2.24.0 (latest) 2.23.0 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.0 2.16.1 2.15.2 2.14.0 2.13.2 2.12.0 2.11.1 2.10.0 2.9.0 2.8.3 2.7.2 2.6.2 2.5.1 2.4.0 2.3.0 2.2.0 2.1.6 2.0.1 1.15.5 1.14.0 1.13.2 1.12.0 1.11.0 1.10.0 1.9.0 class google.cloud.datastore.aggregation.AggregationQuery(client, query, explain options=None) Bases: object An Aggregation query against the Cloud Datastore.

