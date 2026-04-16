---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.775Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Cloud Functions (2nd gen) event support"
feature_slug: "cloud-functions-2nd-gen-event-support"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore"
  - "https://docs.cloud.google.com/datastore/docs/cmek"
keywords:
  - "functions"
  - "2nd"
  - "gen"
  - "event"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
---

# Cloud Functions (2nd gen) event support

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Firestore in Datastore mode supports Eventarc and Firestore events for Cloud Functions 2nd gen; Firestore in Datastore mode supports Eventarc and Firestore in Datastore mode events for Cloud Functions 2nd gen.

## Extended Definition

Firestore in Datastore mode supports Eventarc and Firestore events for Cloud Functions 2nd gen; Firestore in Datastore mode supports Eventarc and Firestore in Datastore mode events for Cloud Functions 2nd gen.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Balancing Strong and Eventual Consistency with Datastore Note: This page describes system behavior for Datastore databases that have not yet upgraded to Firestore in Datastore mode.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Providing a Consistent User Experience and Leveraging the Eventual Consistency Model to Scale to Large Datasets This document discusses achieving strong consistency for a positive user experience, while embracing Datastore’s eventual consistency model for handling large quantities of data and users.
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Export and import operations contribute to your Google Cloud costs in the following ways: Entity reads and writes performed by export and import operations count towards your Firestore in Datastore mode costs .
- Permissions To run export and import operations, your user account and your project's Datastore mode service agent require the Identity and Access Management following permissions.
- This list includes buckets which were recently used in import and export operations, but do not currently give read and write permissions to the Datastore mode service agent.

### Fast and Reliable Ranking in Google Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fast and Reliable Ranking in Datastore Note: This page describes system behavior for Datastore databases that have not yet upgraded to Firestore in Datastore mode.
- In Datastore, you must use an entity group to assure strong consistency when updating multiple entities in a transaction—see " Balancing Strong and Eventual Consistency with Google Cloud Datastore ".
- The design patterns discovered in the process—Job Aggregation and Queue Sharding—could also be applied to common problems in other Datastore-based system designs that require hundreds of updates per seconds with strong consistency.
- As Megastore is extensively used by various Google services, the engineers have been collecting and sharing best practices and design patterns within the company to build a scalable and consistent system with this NoSQL datastore.

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Datastore mode, see Use CMEK .
- In the event of a key being unavailable, to preserve data beyond the seven days limit, we recommend that you enable backups for your Datastore mode CMEK database with the required retention period.
- By default, all the data at rest in Firestore in Datastore mode is encrypted using Google's default encryption .
- If you want to have CMEK protection, use Cloud Run functions Firestore Triggers (2nd gen) .

