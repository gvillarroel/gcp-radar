---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.785Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Not-equal"
feature_slug: "not-equal"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/queries"
  - "https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes"
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
keywords:
  - "not"
  - "equal"
  - "queries"
  - "the"
  - "in"
  - "and"
  - "filter"
  - "operators"
---

# Not-equal

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Queries support the not-equal, IN, and NOT_IN filter operators in client libraries; Queries support the not-equal, IN, and NOT_IN filter operators in the console and client libraries.

## Extended Definition

Queries support the not-equal, IN, and NOT_IN filter operators in client libraries; Queries support the not-equal, IN, and NOT_IN filter operators in the console and client libraries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)

## Supporting Pages

### Datastore queries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . query = datastore . query ( "Task" ) . where ( "priority" , ">" , 3 ) . order ( "priority" ) . order ( "created" ) GQL SELECT FROM Task WHERE priority > 3 ORDER BY priority , created This query is not valid, because it doesn't sort on the property used in the inequality filter: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- If a multi-valued property is used in an inequality or an NOT IN filter: and the query results are sorted in ascending order by the property, the smallest value that satisfies all of the query's inequality filters is used for ordering. and the query results are sorted in descending order by the property, the greatest value that satisfies all of the query's inequality filters is used for ordering.
- Note that if a set of inequality filters on a property translate into an equality filter, such as WHERE tag >= 'math' AND tag <= 'math' any sort order on that property is ignored, as the filters evaluate the same as the equality filter WHERE tag = 'math' Projections and array-valued properties Projecting a property with array values won't populate all values for that property.
- Restrictions Sort orders have the following restrictions: Because of the way Datastore mode executes queries, if a query specifies inequality filters on a property and sort orders on other properties, the property used in the inequality filters must be ordered before the other properties .

### Optimizing Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- Source ID: `site-iam-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore in Datastore mode databases execute a query using a perfect index using the following steps: Identifies the index corresponding to the query's kind, filter properties, filter operators, and sort orders Scans from the beginning of the index to the first entity that meets all or a subset of the query's filter conditions Continues scanning the index, returning each entity that satisfies all the filter conditions, until it encounters an entity that does not meet the filter conditions, or reaches the end of the index, or has collected the maximum number of results requested by the query For example, consider the following query: SELECT FROM Task WHERE category = 'Personal' AND priority < 3 ORDER BY priority DESC The perfect composite index for this query is an index of keys for entities of kind Task , with columns for the values of the category and priority properties.
- The perfect composite index for a query, which allows the query to be executed most efficiently, is defined on the following properties, in order: Properties used in equality filters Properties used in sort orders Properties used in distinctOn filter Properties used in range & inequality filters (that are not already included in sort orders) Properties used in aggregations and projections (that are not already included in sort orders and range & inequality filters) This ensures that all results for every possible execution of the query are accounted.
- Client () query owner id = client . query ( kind = "Photo" , filters = [( "owner id" , "=" , "user1234" )]) query size = client . query ( kind = "Photo" , filters = [( "size" , "=" , 2 )]) query coloration = client . query ( kind = "Photo" , filters = [( "coloration" , "=" , 2 )]) The Photo filter feature also requires queries that combine multiple equality filters with a logical AND : Python from google.cloud import datastore For help authenticating your client, visit https://cloud.google.com/docs/authentication/getting-started client = datastore .
- Selecting indexes for your app You can select optimal indexes for your Datastore mode database by using two approaches: Use index merging to support additional queries Requires less composite indexes Reduces storage cost per entity Improves write latency Avoids exploding indexes Performance depends on the shape of the data Define a composite index that matches multiple filters in a query Improves query performance Consistent query performance that's not dependent on shape of data Must stay under the limit of composite indexes Increased storage cost per entity Increased write latency When figuring out the optimal indexes for your app, the answer can change as the shape of your data changes.

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Composite indexes are required for queries of the following form: Queries with ancestor and inequality filters Queries with one or more inequality filters on a property and one or more equality filters on other properties Queries with a sort order on keys in descending order Queries with multiple sort orders Queries with one or more filters and one or more sort orders Composite indexes are defined in the application's index configuration file ( index.yaml ). (Built-in indexes are not contained in the index configuration file.) Composite indexes are composed of multiple properties and require that each individual property must not be excluded from your indexes .
- Index configuration Firestore in Datastore mode provides built-in , or automatic, indexes for queries of the following forms: Kindless queries using only ancestor and key filters Queries using only ancestor and equality filters Queries using only inequality filters (which are limited to a single property ) Queries using only ancestor filters, equality filters on properties, and inequality filters on keys Queries with no filters and only one sort order on a property, either ascending or descending As an example, by default, Datastore mode databases automatically predefine two single property indexes for each property of each entity kind, one in ascending order and one in descending order.
- For example, suppose you had an existing query like SELECT FROM Task WHERE priority > 1 ORDER BY priority, percent complete which requires the index: indexes: - kind: Task properties: - name: priority - name: percent complete Converting this to either of the projection queries SELECT created FROM Task WHERE priority > 1 ORDER BY priority , percent complete SELECT priority , percent complete , created FROM Task WHERE priority > 1 ORDER BY priority , percent complete introduces a new property ( created ) and thus will require building a new index: indexes: - kind: Task properties: - name: priority - name: percent complete - name: created However, SELECT priority, percent complete FROM Task WHERE priority > 1 ORDER BY priority, percent complete would not change the required index, since the projected properties priority and percent complete were already included in the existing query.
- However, it does not support some kinds of query common in other database technologies: in particular, joins and aggregate queries aren't supported within the Datastore mode query engine.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Limitations of Entity Group and Ancestor Query The approach of using entity groups and ancestor queries is not a silver bullet.
- Define the Person entity class Person(db.Model): given name = db.StringProperty() surname = db.StringProperty() organization = db.StringProperty() Add a person and retrieve the list of all people class MainPage(webapp2.RequestHandler): def post(self): person = Person(given name='GI', surname='Joe', organization='ATeam') person.put() q = db.GqlQuery("SELECT FROM Person") people = [] for p in q.run(): people.append({'given name': p.given name, 'surname': p.surname, 'organization': p.organization}) The problem with this code is that, in most cases, the query will not return the entity added in the statement above it.
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- However, it may not be feasible to migrate an existing application, which may include changing an existing data model and application logic from global queries to ancestor queries.

