---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.134Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "OpenShift support for AlloyDB Omni Kubernetes Operator"
feature_slug: "openshift-support-for-alloydb-omni-kubernetes-operator"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "openshift"
  - "operator"
  - "kubernetes"
  - "supports"
  - "omni"
---

# OpenShift support for AlloyDB Omni Kubernetes Operator

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Omni Kubernetes Operator supports Red Hat OpenShift 4.14 and later.

## Extended Definition

The AlloyDB Omni Kubernetes Operator supports Red Hat OpenShift 4.14 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg squeeze to the value on in the AlloyDB instance where you want to use the extension. pg stat statements Provides a means for tracking execution statistics of all SQL statements executed. pg trgm Provides functions and operators for determining the similarity of alphanumeric text based on trigram matching, as well as index operator classes that support fast searching for similar strings. pg visibility Provides a way to examine the visibility map (VM) and the page-level visibility information of a table. pg wait sampling Provides the ability to collect sampling statistics of wait events.
- You can use this function to track which user last modified a row in a database table. intagg Provides an integer aggregator and an enumerator. intarray Provides a set of functions and operators for manipulating null-free arrays of integers and performing indexed searches on them. ip4r Provides data types for IPv4/v6 addresses, and address ranges, plus index support. isn Provides data types for some international product numbering standards. lo Support for managing Large Objects (also called LOs or BLOBs). ltree Implements a data type ltree for representing labels of data stored in a hierarchical tree-like structure. moddatetime Provides functions for storing the current time into a timestamp field.
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- It is designed to run mission-critical stateful applications, like AlloyDB Omni, on any Kubernetes cluster, in any cloud or on-premises environment, with enterprise-grade performance and reliability.
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references erwin® Data Modeler by Quest® supports Google AlloyDB Defining AlloyDB Databases in erwin Partner Advantage page Direct link SqlDBM Solution SqlDBM Data Modeller Category Data modeling Description SqlDBM is a cloud-native SaaS data modeling solution built to keep up with the rapidly evolving cloud databases and data warehouse landscape.

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Codelab: Toy Store Search App with Cloud Databases, Serverless Runtimes and Open Source Integrations Deploy AlloyDB Omni and a local AI model on Kubernetes In this codelab you learn how to deploy AlloyDB Omni on GKE and use it with an open embedding model deployed in the same Kubernetes cluster.
- Codelab: Deploy AlloyDB Omni and local AI model on Kubernetes Deploy a RAG application with LangChain on Vertex AI This tutorial shows you how to build and deploy an agent using the Vertex AI SDK for Python and the AlloyDB LangChain integration.
- Codelab: Generate SQL using AlloyDB AI natural language Apply semantic filters and rerank vector search results to improve search quality This codelab shows you how to use AlloyDB AI features like AI Query Operators, model endpoint management , and vector search to help you improve your search quality and use semantic filters.
- Codelab: AlloyDB AI Operators and Reranking Build an AI-powered outfit recommendation app with AlloyDB and serverless runtimes The following codelab shows you how to build an AI-powered outfit recommendation app with AlloyDB AI and serverless runtimes.

