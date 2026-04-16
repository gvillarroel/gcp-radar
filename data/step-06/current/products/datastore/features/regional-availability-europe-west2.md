---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.800Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Regional availability: europe-west2"
feature_slug: "regional-availability-europe-west2"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/reference/admin/rest"
  - "https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore"
  - "https://docs.cloud.google.com/datastore/docs/reference/data/rest"
keywords:
  - "regional"
  - "availability"
  - "europe"
  - "west2"
  - "datastore"
  - "is"
  - "available"
  - "in"
---

# Regional availability: europe-west2

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Datastore is available in the europe-west2 region.

## Extended Definition

Datastore is available in the europe-west2 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- If the entry has been evicted, or the Memcache service is not available temporarily, the system may need to read the value from a Datastore query that could possibly return an inconsistent result.
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta1.projects Methods export POST /v1beta1/projects/{projectId}:export Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. import POST /v1beta1/projects/{projectId}:import Imports entities into Google Cloud Datastore.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- A service that is available in multiple regions might have multiple regional endpoints.
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### Fast and Reliable Ranking in Google Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- The design patterns discovered in the process—Job Aggregation and Queue Sharding—could also be applied to common problems in other Datastore-based system designs that require hundreds of updates per seconds with strong consistency.
- As Megastore is extensively used by various Google services, the engineers have been collecting and sharing best practices and design patterns within the company to build a scalable and consistent system with this NoSQL datastore.
- In Datastore, you must use an entity group to assure strong consistency when updating multiple entities in a transaction—see " Balancing Strong and Eventual Consistency with Google Cloud Datastore ".
- The transaction may be open for a second or more, but because there is a single thread driving the library and Datastore, there is no contention and no concurrent modification problem.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta3.projects Methods allocateIds POST /v1beta3/projects/{projectId}:allocateIds Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted. beginTransaction POST /v1beta3/projects/{projectId}:beginTransaction Begins a new transaction. commit POST /v1beta3/projects/{projectId}:commit Commits a transaction, optionally creating, deleting or modifying some entities. lookup POST /v1beta3/projects/{projectId}:lookup Looks up entities by key. reserveIds POST /v1beta3/projects/{projectId}:reserveIds Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore. rollback POST /v1beta3/projects/{projectId}:rollback Rolls back a transaction. runAggregationQuery POST /v1beta3/projects/{projectId}:runAggregationQuery Runs an aggregation query. runQuery POST /v1beta3/projects/{projectId}:runQuery Queries for entities.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- A service that is available in multiple regions might have multiple regional endpoints.
- REST Resource: v1.projects Methods allocateIds POST /v1/projects/{projectId}:allocateIds Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted. beginTransaction POST /v1/projects/{projectId}:beginTransaction Begins a new transaction. commit POST /v1/projects/{projectId}:commit Commits a transaction, optionally creating, deleting or modifying some entities. lookup POST /v1/projects/{projectId}:lookup Looks up entities by key. reserveIds POST /v1/projects/{projectId}:reserveIds Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore. rollback POST /v1/projects/{projectId}:rollback Rolls back a transaction. runAggregationQuery POST /v1/projects/{projectId}:runAggregationQuery Runs an aggregation query. runQuery POST /v1/projects/{projectId}:runQuery Queries for entities.

