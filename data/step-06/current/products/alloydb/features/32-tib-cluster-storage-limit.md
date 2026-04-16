---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.536Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "32 TiB cluster storage limit"
feature_slug: "32-tib-cluster-storage-limit"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-settings"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "32"
  - "tib"
  - "cluster"
  - "storage"
  - "limit"
  - "alloydb"
  - "increases"
  - "per"
---

# 32 TiB cluster storage limit

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB increases the storage limit per cluster to 32 TiB.

## Extended Definition

AlloyDB increases the storage limit per cluster to 32 TiB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-settings](https://docs.cloud.google.com/alloydb/docs/cluster-settings)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default".
- SSL configuration for this AlloyDB cluster. encryptionConfig object ( EncryptionConfig ) Optional.

### "View cluster and instance settings \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-settings](https://docs.cloud.google.com/alloydb/docs/cluster-settings)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Since AlloyDB auto scales storage, so you don't need to explicitly set a storage limit.
- Private networking: Private services access or Private Service Connect N AlloyDB supports private IP through one of the following: Private services access : To create a private services access-enabled AlloyDB cluster, select Network: Private IP in the Google Cloud console.
- Private networking: Private services access settings N If you create a private services access-enabled AlloyDB cluster, then you must also configure the following: Network : Select the VPC network that is already configured with private services access.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback View cluster and instance settings Stay organized with collections Save and categorize content based on your preferences.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- You can also run the advisor manually at any time by altering the search path in the session and following these steps: Given the following table with 10m rows in it and no indexes: Table "idx advisor.user test" + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Column Type Collation Nullable Default Storage + ------------------+--------------------------------+-----------+----------+---------+---------+-------- id integer not null plain value numeric main user id integer plain product id integer plain product meas val integer plain effective date timestamp ( 3 ) without time zone plain + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Access method : heap Run a query that could possibly benefit from an index: SELECT from idx advisor . user test where id = 500533 ; + ------------------------------------------------------------------------------------------------------- QUERY PLAN + ------------------------------------------------------------------------------------------------------- Gather ( cost = 1000 .
- 106 ms Manually execute the advisor: SELECT FROM google db advisor recommend indexes (); + -------------------------------------------------+------------------------------+ index estimated storage size in mb + -------------------------------------------------+------------------------------+ CREATE INDEX ON "idx advisor" . "user test" ( "id" ) 2492 + -------------------------------------------------+------------------------------+ ( 1 row ) Time : 219 .
- 347 ) SELECT p . id , creationdate , score , title , viewcount , SUBSTRING ( p . body , 0 , 50 ) as body FROM posts p WHERE 1 = 1 AND title is not null ORDER BY body embeddings < = > embedding ( 'textembedding-gecko@003' , 'What are left turning tendencies' ):: vector LIMIT 5 ; - [ RECORD 1 ] + ----------------------------------------------------------------------------------------- id 55164 creationdate 2018 - 09 - 18 03 : 34 : 15 .
- 569 ) SELECT p . id , creationdate , score , title , viewcount , SUBSTRING ( p . body , 0 , 50 ) as body FROM posts p WHERE 1 = 1 AND title is not null ORDER BY body embeddings < = > embedding ( 'textembedding-gecko@003' , 'What are left turning tendencies' ):: vector LIMIT 5 ; - [ RECORD 1 ] + ----------------------------------------------------------------------------------------- id 55164 creationdate 2018 - 09 - 18 03 : 34 : 15 .

