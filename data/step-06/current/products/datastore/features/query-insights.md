---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.766Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Query insights"
feature_slug: "query-insights"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/concepts/overview"
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes"
keywords:
  - "query"
  - "insights"
  - "provides"
  - "performance"
  - "metrics"
  - "for"
  - "database"
---

# Query insights

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Query insights provides query performance metrics for a database; Query insights provides query performance metrics for a database.

## Extended Definition

Query insights provides query performance metrics for a database; Query insights provides query performance metrics for a database.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/concepts/overview](https://docs.cloud.google.com/datastore/docs/concepts/overview)
- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Datastore also provides a number of features that relational databases are not optimally suited to provide, including high-performance at a very large scale and high-reliability.
- Figure 2: Conceptual Depiction of Replication with Strong Consistency Balancing Strong and Eventual Consistency Non-relational databases have become popular recently, especially for web applications that require high-scalability and performance with high-availability.
- Conclusion Eventual consistency is an essential element of non-relational databases that allows developers to find an optimal balance between scalability, performance, and consistency.
- This is demonstrated with the Python code below. class Organization(db.Model): name = db.StringProperty() class Person(db.Model): given name = db.StringProperty() surname = db.StringProperty() class MainPage(webapp2.RequestHandler): def post(self): org = Organization.get or insert('ateam', name='ATeam') person = Person(parent=org) person.given name='GI' person.surname='Joe' person.put() q = db.GqlQuery("SELECT FROM Person WHERE ANCESTOR IS :1 ", org) people = [] for p in q.run(): people.append({'given name': p.given name, 'surname': p.surname}) This time, with the ancestor org specified in the GqlQuery, the query returns the entity just inserted.

### Datastore Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/overview](https://docs.cloud.google.com/datastore/docs/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In particular, Datastore differs from a traditional relational database in the following important ways: Datastore is designed to automatically scale to very large data sets, allowing applications to maintain high performance as they receive more traffic: Datastore writes scale by automatically distributing data as necessary.
- Firestore in Datastore mode (Datastore) is a NoSQL document database built for automatic scaling, high performance, and ease of application development.
- Here's a high-level comparison of Datastore and relational database concepts: Concept Datastore Firestore Relational database Category of object Kind Collection group Table One object Entity Document Row Individual data for an object Property Field Column Unique ID for an object Key Document ID Primary key Unlike rows in a relational database table, Datastore entities of the same kind can have different properties, and different entities can have properties with the same name but different value types.
- What's next Learn how to store and query data using the Google Cloud console Learn about the Datastore data model View best practices for Datastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Tip The GQL query editor supports autocompletion for kinds: When you need to type a kind name, press Ctrl+Space to see a list of the available kinds.
- For more guidance on selecting a database mode and for a feature-by-feature comparison, see choosing between Native Mode and Datastore Mode .
- The location applies to both Datastore mode databases and App Engine apps for your Google Cloud project.
- Select from one of the database options: Firestore in Native Mode Recommended for mobile and web apps.

### Optimizing Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Selecting indexes for your app You can select optimal indexes for your Datastore mode database by using two approaches: Use index merging to support additional queries Requires less composite indexes Reduces storage cost per entity Improves write latency Avoids exploding indexes Performance depends on the shape of the data Define a composite index that matches multiple filters in a query Improves query performance Consistent query performance that's not dependent on shape of data Must stay under the limit of composite indexes Increased storage cost per entity Increased write latency When figuring out the optimal indexes for your app, the answer can change as the shape of your data changes.
- Unlike most Firestore in Datastore mode queries where performance depends only on the size of the result set, performance for index-merge queries depends on the filters in the query and how many potential matches the database considers.
- The worst-case performance happens when the database must consider many potential matches but few of them satisfy the query filters.
- Firestore in Datastore mode databases execute a query using a perfect index using the following steps: Identifies the index corresponding to the query's kind, filter properties, filter operators, and sort orders Scans from the beginning of the index to the first entity that meets all or a subset of the query's filter conditions Continues scanning the index, returning each entity that satisfies all the filter conditions, until it encounters an entity that does not meet the filter conditions, or reaches the end of the index, or has collected the maximum number of results requested by the query For example, consider the following query: SELECT FROM Task WHERE category = 'Personal' AND priority < 3 ORDER BY priority DESC The perfect composite index for this query is an index of keys for entities of kind Task , with columns for the values of the category and priority properties.

