---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.801Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Cloud Datastore API v1beta3"
feature_slug: "cloud-datastore-api-v1beta3"
latest_feature_date: "2016-08-16"
deprecation_date: "2016-08-16"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/reference/data/rest"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/audit-logging"
keywords:
  - "datastore"
  - "api"
  - "v1beta3"
  - "is"
  - "an"
  - "older"
  - "beta"
  - "version"
---

# Cloud Datastore API v1beta3

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Cloud Datastore API v1beta3 is an older beta version of the Datastore API; deprecated on 2016-08-16.

## Extended Definition

Cloud Datastore API v1beta3 is an older beta version of the Datastore API; deprecated on 2016-08-16.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/audit-logging](https://docs.cloud.google.com/datastore/docs/audit-logging)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.
- The different varieties of Datastore query APIs and their corresponding consistency models are shown in Table 1.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta3 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta3.projects Methods allocateIds POST /v1beta3/projects/{projectId}:allocateIds Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted. beginTransaction POST /v1beta3/projects/{projectId}:beginTransaction Begins a new transaction. commit POST /v1beta3/projects/{projectId}:commit Commits a transaction, optionally creating, deleting or modifying some entities. lookup POST /v1beta3/projects/{projectId}:lookup Looks up entities by key. reserveIds POST /v1beta3/projects/{projectId}:reserveIds Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore. rollback POST /v1beta3/projects/{projectId}:rollback Rolls back a transaction. runAggregationQuery POST /v1beta3/projects/{projectId}:runAggregationQuery Runs an aggregation query. runQuery POST /v1beta3/projects/{projectId}:runQuery Queries for entities.
- REST Resource: v1beta3.projects REST Resource: v1.projects REST Resource: v1.projects.operations Service: datastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Extract the download: unzip master . zip Change directories to the TaskList application: cd google - cloud - ruby - master / google - cloud - datastore / samples Install the dependencies: bundle install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GOOGLE CLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! bundle exec ruby tasks . rb Creating an Authorized Service Object In order to make authenticated requests to Google Cloud APIs using the Google APIs Client libraries, you must: Fetch the credential to use for requests.
- Go Clone the TaskList sample application. go get github . com / GoogleCloudPlatform / golang - samples / datastore / tasks Change directories to where you cloned the sample: cd $ GOPATH / src / github . com / GoogleCloudPlatform / golang - samples / datastore / tasks At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export DATASTORE PROJECT ID = < project - id > (Windows users: use set instead of export .) Run the application! go run tasks . go Java Ensure you have Maven and Java (version 8 or later) installed.
- Extract the download: unzip master . zip Change directories to the TaskList application: cd nodejs - datastore - master / samples Install the dependencies and link the application: npm install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GCLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! node tasks . js PHP Ensure you have PHP (version 5.6 or later) and Composer installed.
- Extract the download: unzip master.zip Change directories to the TaskList application: cd php-docs-samples-master/datastore/tutorial Install dependencies. composer install Run the application! php src/list tasks.php Python Ensure you have Python (version 2.7.9 or later), pip , and virtualenv installed.

### Datastore audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/audit-logging](https://docs.cloud.google.com/datastore/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.datastore.admin.v1.DatastoreAdmin.GetIndex google.datastore.admin.v1.DatastoreAdmin.ListIndexes google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.datastore.admin.v1.DatastoreAdmin.CreateIndex (LRO) google.datastore.admin.v1.DatastoreAdmin.DeleteIndex google.datastore.admin.v1.DatastoreAdmin.ExportEntities (LRO) google.datastore.admin.v1.DatastoreAdmin.ImportEntities (LRO) google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities (LRO) google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.datastore.v1.Datastore.BeginTransaction google.datastore.v1.Datastore.Lookup google.datastore.v1.Datastore.Rollback google.datastore.v1.Datastore.RunAggregationQuery google.datastore.v1.Datastore.RunQuery google.datastore.v1beta3.Datastore.BeginTransaction google.datastore.v1beta3.Datastore.Lookup google.datastore.v1beta3.Datastore.Rollback google.datastore.v1beta3.Datastore.RunAggregationQuery google.datastore.v1beta3.Datastore.RunQuery DATA WRITE google.datastore.v1.Datastore.AllocateIds google.datastore.v1.Datastore.Commit google.datastore.v1.Datastore.ReserveIds google.datastore.v1beta3.Datastore.AllocateIds google.datastore.v1beta3.Datastore.Commit google.datastore.v1beta3.Datastore.ReserveIds API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Datastore. google.datastore.admin.v1.DatastoreAdmin The following audit logs are associated with methods belonging to google.datastore.admin.v1.DatastoreAdmin .
- Filter for this method : protoPayload.methodName="google.datastore.v1beta3.Datastore.BeginTransaction" Commit Method : google.datastore.v1beta3.Datastore.Commit Audit log type : Data access Permissions : datastore.entities.create - DATA WRITE datastore.entities.delete - DATA WRITE datastore.entities.update - DATA WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.datastore.v1beta3.Datastore.AllocateIds" BeginTransaction Method : google.datastore.v1beta3.Datastore.BeginTransaction Audit log type : Data access Permissions : datastore.databases.get - DATA READ Method is a long-running or streaming operation : No.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Notes When configuring audit logging, the service name datastore.googleapis.com configures logs for both datastore.googleapis.com and firestore.googleapis.com API calls.

