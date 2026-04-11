---
title: "Datastore Overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/concepts/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/concepts/overview
  title: "Datastore Overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Guides
Send feedback
Datastore Overview
Stay organized with collections
Save and categorize content based on your preferences.
Firestore in Datastore mode (Datastore) is a NoSQL document database built for automatic scaling, high performance,
and ease of application development. Datastore features include:
Atomic transactions . Datastore can execute a set of operations where either all succeed, or none occur.
High availability of reads and writes . Datastore runs in Google data centers, which use redundancy to minimize impact from points of failure.
Massive scalability with high performance . Datastore uses a distributed architecture to automatically manage scaling. Datastore uses a mix of indexes and query constraints so your queries scale with the size of your result set, not the size of your dataset.
Flexible storage and querying of data . Datastore maps naturally to object-oriented and scripting languages, and is exposed to applications through multiple clients. It also provides a SQL-like query language .
Strong consistency . Datastore ensures that all queries are strongly consistent.
Encryption at rest . Datastore automatically encrypts all data before it is written to disk and automatically decrypts the data when read by an authorized user. For more information, see Server-Side Encryption .
Fully managed with no planned downtime . Google handles the administration of the service so you can focus on your application. Your application can still use Datastore when the service receives a planned upgrade.
Comparison with relational databases
While the Datastore interface has many of the same features
similar to relational databases, as a NoSQL database, it varies in how it
describes the relationships between data objects. Here's a high-level comparison
of Datastore and relational database concepts:
Concept
Datastore
Firestore
Relational database
Category of object
Kind
Collection group
Table
One object
Entity
Document
Row
Individual data for an object
Property
Field
Column
Unique ID for an object
Key
Document ID
Primary key
Unlike rows in a relational database table, Datastore entities of
the same kind can have different properties, and different entities can have
properties with the same name but different value types. These unique
characteristics imply a different way of designing and managing data to take
advantage of the ability to scale automatically. In particular,
Datastore differs from a traditional relational database in the
following important ways:
Datastore is designed to automatically scale to very large data sets, allowing applications to maintain high performance as they receive more traffic:
Datastore writes scale by automatically distributing data as necessary.
Datastore reads scale because the only queries supported are those whose performance scales with the size of the result set (as opposed to the data set). This means that a query whose result set contains 100 entities performs the same whether it searches over a hundred entities or a million. This property is the key reason some types of queries are not supported.
Because all queries are served by previously built indexes, the types of queries that can be executed are more restrictive than those allowed on a relational database with SQL. In particular, Datastore does not include support for join operations, inequality filtering on multiple properties, or filtering on data based on results of a subquery.
Unlike relational databases which enforce a schema, Datastore is schemaless. It doesn't require entities of the same kind to have a consistent set of properties (although you can choose to enforce such a requirement in your own application code).
What it's good for
Datastore is ideal for applications that rely on highly available structured data at scale. You can use Datastore to store and query all of the following types of data:
Product catalogs that provide real-time inventory and product details for a retailer.
User profiles that deliver a customized experience based on the user's past activities and preferences.
Transactions based on ACID properties. For example, transferring funds from one bank account to another.
Other storage and database options
Datastore is not ideal for every use case. For example, Datastore is not a relational database, and it is not an effective solution for analytic data.
Here are some common scenarios where you should probably consider an alternative to Datastore:
If you need a relational database with full SQL support for an online transaction processing (OLTP) system, consider Cloud SQL .
If you don't require support for ACID transactions or if your data is not highly structured, consider Bigtable .
If you need interactive querying in an online analytical processing (OLAP) system, consider BigQuery .
If you need to store large immutable blobs, such as large images or movies, consider Cloud Storage .
For more information about other database options, see the overview
of database services .
What's next
Learn how to store and query data using the Google Cloud console
Learn about the Datastore data model
View best practices for Datastore
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
