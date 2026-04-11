---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.859Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "OR queries"
feature_slug: "or-queries"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/queries"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes"
keywords:
  - "or"
  - "queries"
  - "can"
  - "combine"
  - "conditions"
  - "with"
  - "logic"
---

# OR queries

Product: Datastore
Coverage: LOW

## Step 02 Summary

Queries can combine conditions with OR logic.

## Extended Definition

Queries can combine conditions with OR logic.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)

## Supporting Pages

### Datastore queries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . query = datastore . query ( "Task" ) . where ( "done" , "=" , false ) . where ( "priority" , "=" , 4 ) GQL SELECT FROM Task WHERE done = FALSE AND priority = 4 The following example combines filters with a logical OR : C# Snippet not available.
- NOT IN Use the NOT IN operator to combine up to 10 not-equal ( != ) clauses on the same property with a logical AND .
- IN Use the IN operator to combine up to 30 equality ( == ) clauses on the same property with a logical OR .
- Use the IN operator to combine up to 10 equality ( == ) clauses on the same property with a logical OR .

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It may also be important to combine Datastore with BigQuery to fulfill business requirements for complex queries and to reduce the usage of Datastore indexes as far as possible.
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Alternatives to Ancestor Queries If you already have an existing application with a large number of entities stored in Datastore, it may be difficult to incorporate entity groups afterwards in a refactoring exercise.

### Optimizing Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Client () query owner id = client . query ( kind = "Photo" , filters = [( "owner id" , "=" , "user1234" )]) query size = client . query ( kind = "Photo" , filters = [( "size" , "=" , 2 )]) query coloration = client . query ( kind = "Photo" , filters = [( "coloration" , "=" , 2 )]) The Photo filter feature also requires queries that combine multiple equality filters with a logical AND : Python from google.cloud import datastore For help authenticating your client, visit https://cloud.google.com/docs/authentication/getting-started client = datastore .
- Firestore in Datastore mode databases execute a query using a perfect index using the following steps: Identifies the index corresponding to the query's kind, filter properties, filter operators, and sort orders Scans from the beginning of the index to the first entity that meets all or a subset of the query's filter conditions Continues scanning the index, returning each entity that satisfies all the filter conditions, until it encounters an entity that does not meet the filter conditions, or reaches the end of the index, or has collected the maximum number of results requested by the query For example, consider the following query: SELECT FROM Task WHERE category = 'Personal' AND priority < 3 ORDER BY priority DESC The perfect composite index for this query is an index of keys for entities of kind Task , with columns for the values of the category and priority properties.
- By merging different sections of the built-in index for the tag property, Firestore in Datastore mode supports queries that combine multiple tag filters in a logical AND : Python from google.cloud import datastore For help authenticating your client, visit https://cloud.google.com/docs/authentication/getting-started client = datastore .
- With this information, you can add indexes to improve the performance of queries that are both common and slow.

