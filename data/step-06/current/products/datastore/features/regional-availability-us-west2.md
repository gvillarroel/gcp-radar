---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.794Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Regional availability: us-west2"
feature_slug: "regional-availability-us-west2"
latest_feature_date: "2018-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-statistics"
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
keywords:
  - "regional"
  - "availability"
  - "us"
  - "west2"
  - "datastore"
  - "is"
  - "available"
  - "in"
---

# Regional availability: us-west2

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Datastore is available in the us-west2 region.

## Extended Definition

Datastore is available in the us-west2 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Providing a Consistent User Experience and Leveraging the Eventual Consistency Model to Scale to Large Datasets This document discusses achieving strong consistency for a positive user experience, while embracing Datastore’s eventual consistency model for handling large quantities of data and users.
- Besides reducing the possibility of having increases times for consistency, these index optimizations may result in quite a large reduction of Datastore storage costs in a large application which heavily uses indexes.

### Fast and Reliable Ranking in Google Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As Megastore is extensively used by various Google services, the engineers have been collecting and sharing best practices and design patterns within the company to build a scalable and consistent system with this NoSQL datastore.
- In Datastore, you must use an entity group to assure strong consistency when updating multiple entities in a transaction—see " Balancing Strong and Eventual Consistency with Google Cloud Datastore ".
- The transaction may be open for a second or more, but because there is a single thread driving the library and Datastore, there is no contention and no concurrent modification problem.
- In response to Kaz's request, the Datastore team started discussing this issue and advised us to consider using Job Aggregation, one of the design patterns used with Megastore.

### Viewing Statistics in the Console \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Note: While Datastore removes individual entities almost immediately, a namespace container may remain visible for several days to a week after the final entity within it is removed.
- Home Documentation Databases Datastore Guides Send feedback Viewing Statistics in the Console Stay organized with collections Save and categorize content based on your preferences.
- Types of statistics The Dashboard page displays data in various ways: A pie chart that shows space used by each property type, such as string, double, or blob.

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Under Properties , use the Add property button to add these properties: Name Type Value Indexed description String Learn about Datastore. created Date and time (today's date) ✓ done Boolean False ✓ Your creation page should now look like this: Click Create .
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Go to project selector If you are not the project owner, your account requires the following permissions to complete this quickstart: Your account requires the Datastore Owner role which contains the datastore.databases.create permission needed to create a Datastore mode instance.

