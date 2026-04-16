---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.785Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2022-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/client-side-traces"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/resources"
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
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls provides service perimeter protection for Datastore resources; VPC Service Controls provides service perimeter protection for Datastore resources.

## Extended Definition

VPC Service Controls provides service perimeter protection for Datastore resources; VPC Service Controls provides service perimeter protection for Datastore resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources)

## Supporting Pages

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://datastore.googleapis.com/v1/projects/ project-id /operations/ operation-name " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-id /operations/ASA3ODAwMzQxNjIyChp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKLRI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2019-10-08T20:07:28.105236Z", "endTime": "2019-10-08T20:07:36.310653Z", "operationType": "EXPORT ENTITIES", "state": "SUCCESSFUL" }, "progressEntities": { "workCompleted": "21", "workEstimated": "21" }, "progressBytes": { "workCompleted": "2272", "workEstimated": "2065" }, "entityFilter": {}, "outputUrlPrefix": "gs:// bucket-name /2019-10-08T20:07:28 28481" }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2019-10-08T20:07:28 28481/2019-10-08T20:07:28 28481.overall export metadata" } } Estimating the completion time As your operation runs, see the value of the state field for the overall status of the operation.
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.

### "Monitor performance with client-side traces \_|\_ Datastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terminal DATASTORE ENABLE TRACING=ON \ java \ -javaagent:path/to/opentelemetry-javaagent.jar \ -Dotel.traces.exporter=otlp \ -Dotel.exporter.otlp.endpoint="http://localhost:4317" \ -Dotel.traces.sampler=traceidratio \ -Dotel.traces.sampler.arg=0.1 \ -Dotel.service.name="My App" \ -jar myapp.jar Export directly to an observability backend with Auto Agents In addition to setting the environment variable DATASTORE ENABLE TRACING=ON , you need to add the OpenTelemetry Java agent extension for your specific backend.
- Terminal DATASTORE ENABLE TRACING=ON \ java \ -javaagent:path/to/opentelemetry-javaagent.jar \ -Dotel.javaagent.extensions=/path/to/exporter-auto-0.26.0-alpha-shaded.jar \ -Dotel.traces.exporter=google cloud trace \ -Dotel.traces.sampler=traceidratio \ -Dotel.traces.sampler.arg=0.1 \ -Dotel.service.name="My Application" \ -jar myapp.jar Example trace The following examples show how trace information is displayed in Cloud Trace.
- Home Documentation Databases Datastore Guides Send feedback Monitor performance with client-side traces Stay organized with collections Save and categorize content based on your preferences.
- Configure client-side traces This section provides example configurations for client-side traces.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- Datastore also provides a number of features that relational databases are not optimally suited to provide, including high-performance at a very large scale and high-reliability.
- Replication is managed by Bigtable and Megastore, the underlying technologies for Datastore (see Additional Resources for more on details Bigtable and Megastore).
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.

### Resources \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Datastore Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Billing questions Firestore in Datastore mode resources to get help with billing questions.
- Support Find out how to get support for Firestore in Datastore mode.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

