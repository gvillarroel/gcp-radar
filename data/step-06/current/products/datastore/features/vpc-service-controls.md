---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.864Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2022-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/release-notes"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
keywords:
  - "vpc"
  - "controls"
  - "provides"
  - "perimeter"
  - "protection"
  - "for"
  - "datastore"
  - "resources"
---

# VPC Service Controls

Product: Datastore
Coverage: LOW

## Step 02 Summary

VPC Service Controls provides service perimeter protection for Datastore resources; VPC Service Controls provides service perimeter protection for Datastore resources.

## Extended Definition

VPC Service Controls provides service perimeter protection for Datastore resources; VPC Service Controls provides service perimeter protection for Datastore resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)

## Supporting Pages

### Datastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-datastore 2.17.6 (2023-11-30) Bug Fixes Remove deprecated databaseId field in DatastoreOptions ( #1237 ) ( 05e25e5 ) Dependencies Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.20.0 ( #1247 ) ( c4e3533 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.10.1 ( #1230 ) ( 05c7fc6 ) November 10, 2023 Feature Support for Firestore in Datastore mode point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now generally available (GA) .
- Java Changes for google-cloud-datastore 2.16.1 (2023-07-10) Documentation Fix javadoc errors ( #1126 ) ( d4b11bb ) Dependencies Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1130 ) ( 2181847 ) July 14, 2023 Feature Support for Firestore in Datastore mode point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now available in Preview .
- Python Changes for google-cloud-datastore 2.11.1 (2022-12-09) Bug Fixes deps: Require google-api-core >=1.34.0, >=2.11.0 ( 6f6bb63 ) Drop usage of pkg resources ( 6f6bb63 ) Fix timeout default values ( 6f6bb63 ) Documentation samples: Snippetgen should call await on the operation coroutine before calling result ( 6f6bb63 ) Java Changes for google-cloud-datastore 2.13.1 (2023-01-03) Dependencies Update dependency com.google.errorprone:error prone core to v2.17.0 ( #944 ) ( b0fd082 ) Update dependency org.easymock:easymock to v5.1.0 ( #945 ) ( 7774aac ) December 19, 2022 Libraries A weekly digest of client library updates from across the Cloud SDK .
- June 01, 2022 Feature Support for VPC Service Controls is now available in General Availability .

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://datastore.googleapis.com/v1/projects/ project-id /operations/ operation-name " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-id /operations/ASA3ODAwMzQxNjIyChp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKLRI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2019-10-08T20:07:28.105236Z", "endTime": "2019-10-08T20:07:36.310653Z", "operationType": "EXPORT ENTITIES", "state": "SUCCESSFUL" }, "progressEntities": { "workCompleted": "21", "workEstimated": "21" }, "progressBytes": { "workCompleted": "2272", "workEstimated": "2065" }, "entityFilter": {}, "outputUrlPrefix": "gs:// bucket-name /2019-10-08T20:07:28 28481" }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2019-10-08T20:07:28 28481/2019-10-08T20:07:28 28481.overall export metadata" } } Estimating the completion time As your operation runs, see the value of the state field for the overall status of the operation.
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- Datastore also provides a number of features that relational databases are not optimally suited to provide, including high-performance at a very large scale and high-reliability.
- Replication is managed by Bigtable and Megastore, the underlying technologies for Datastore (see Additional Resources for more on details Bigtable and Megastore).
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.

