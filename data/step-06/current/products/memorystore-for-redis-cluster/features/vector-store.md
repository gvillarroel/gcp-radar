---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.727Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Vector store"
feature_slug: "vector-store"
latest_feature_date: "2024-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-vector-search"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification"
keywords:
  - "vector"
  - "store"
  - "memorystore"
  - "for"
  - "redis"
  - "cluster"
  - "supports"
  - "capabilities"
---

# Vector store

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis Cluster supports vector store capabilities in Preview.

## Extended Definition

Memorystore for Redis Cluster supports vector store capabilities in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-vector-search](https://docs.cloud.google.com/memorystore/docs/cluster/about-vector-search)
- [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest](https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest)
- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)

## Supporting Pages

### "Vector search for generative AI applications \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-vector-search](https://docs.cloud.google.com/memorystore/docs/cluster/about-vector-search)
- Source ID: `site-iam-reference`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how Memorystore for Redis Cluster supports storing and querying vector data for generative AI applications, such as Retrieval Augmented Generation (RAG) and LangChain, by using vector search capabilities.
- Using vector search with LangChain lets you build solutions for the following use cases: RAG LLM cache Recommendation engine Semantic search Image similarity search Benefits of vector search for generative AI in Memorystore for Redis Cluster The advantage of using Memorystore to store your generative AI data, compared to other Google Cloud databases is its speed.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Vector search for generative AI applications Stay organized with collections Save and categorize content based on your preferences.
- Approaches to using vector search for generative AI in Memorystore for Redis Cluster Memorystore also provides two distinct search approaches to help you find the right balance between speed and accuracy.

### Memorystore for Redis Cluster overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- Source ID: `site-api-reference`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Redis version Memorystore for Redis Cluster is based on open-source Redis version 7.x and supports a subset of the total Redis command library .
- Key concepts and terms Hierarchical resource structure Memorystore for Redis Cluster gathers the various resources used in a Redis deployment into a hierarchical structure that simplifies administration and management.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Memorystore for Redis Cluster overview Stay organized with collections Save and categorize content based on your preferences.
- Here is a diagram that illustrates this structure: Memorystore for Redis Cluster instances are composed of a set of shards, each containing a subset of your key space.

### "Google Cloud Memorystore for Redis API \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest](https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest)
- Source ID: `site-api-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Reference Send feedback Google Cloud Memorystore for Redis API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1alpha1.projects.locations.clusters Methods backup POST /v1alpha1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1alpha1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1alpha1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1alpha1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1alpha1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1alpha1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1alpha1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1alpha1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1beta1.projects.locations.clusters Methods backup POST /v1beta1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1beta1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1beta1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1beta1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1beta1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1beta1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1beta1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1beta1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1.projects.locations.clusters Methods backup POST /v1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.

### "Cluster and node specification \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Cluster and node specification Stay organized with collections Save and categorize content based on your preferences.
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- Scale an instance As part of creating a Memorystore for Redis Cluster instance, you choose a node type for the instance and specify the number of shards for the instance.
- This endpoint is reserved for Memorystore for Redis Cluster to use to connect your client to nodes in the cluster.

