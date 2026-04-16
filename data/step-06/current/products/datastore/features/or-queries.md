---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.782Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "OR queries"
feature_slug: "or-queries"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/queries"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore"
  - "https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator"
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
Coverage: MEDIUM

## Step 02 Summary

Queries can combine conditions with OR logic.

## Extended Definition

Queries can combine conditions with OR logic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore)
- [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)

## Supporting Pages

### Datastore queries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- Source ID: `site-iam-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . query = datastore . query ( "Task" ) . where ( "done" , "=" , false ) . where ( "priority" , "=" , 4 ) GQL SELECT FROM Task WHERE done = FALSE AND priority = 4 The following example combines filters with a logical OR : C# Snippet not available.
- NOT IN Use the NOT IN operator to combine up to 10 not-equal ( != ) clauses on the same property with a logical AND .
- IN Use the IN operator to combine up to 30 equality ( == ) clauses on the same property with a logical OR .
- Use the IN operator to combine up to 10 equality ( == ) clauses on the same property with a logical OR .

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It may also be important to combine Datastore with BigQuery to fulfill business requirements for complex queries and to reduce the usage of Datastore indexes as far as possible.
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Alternatives to Ancestor Queries If you already have an existing application with a large number of entities stored in Datastore, it may be difficult to incorporate entity groups afterwards in a refactoring exercise.

### "Package com.google.cloud.datastore (2.37.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore)
- Source ID: `site-java-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Retry And Trace Datastore Rpc Decorator An implementation of DatastoreRpc which acts as a Decorator and decorates the underlying DatastoreRpc with the logic of retry and Traceability. com. google. cloud. datastore.
- Aggregation Query An implementation of a Google Cloud Datastore Query that returns AggregationResults , It can be constructed by providing a nested query ( StructuredQuery or GqlQuery ) to run the aggregations on and a set of Aggregation . com. google. cloud. datastore.
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.datastore (2.37.0) Stay organized with collections Save and categorize content based on your preferences.
- Full Entity A full entity is a BaseEntity that holds all the properties associated with a Datastore entity (as opposed to ProjectionEntity ). com. google. cloud. datastore.

### Running the Datastore Emulator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The emulator does not allow non-ancestor queries within transactions.
- The emulator allows for non-ancestor queries within transactions.
- Automatically removing the variables If your application and the emulator run on the same machine, you can remove the environment variables automatically: Linux / macOS Run env-unset using command substitution: $(gcloud beta emulators datastore env-unset) Windows Create and run a batch file using output from env-unset : gcloud beta emulators datastore env - unset > remove vars . cmd && remove vars . cmd Your application will now connect to your production Datastore mode database.
- Automatically setting the variables If your application and the emulator run on the same machine, you can set the environment variables automatically: Linux / macOS Run env-init using command substitution: $(gcloud beta emulators datastore env-init) Windows Create and run a batch file using output from env-init : gcloud beta emulators datastore env - init > set vars . cmd && set vars . cmd Your application will now connect to the Datastore emulator.

