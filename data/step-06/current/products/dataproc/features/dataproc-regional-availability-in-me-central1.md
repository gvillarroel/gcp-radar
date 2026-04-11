---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.032Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc regional availability in me-central1"
feature_slug: "dataproc-regional-availability-in-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/monitoring"
keywords:
  - "dataproc"
  - "regional"
  - "availability"
  - "in"
  - "me"
  - "central1"
  - "is"
  - "available"
---

# Dataproc regional availability in me-central1

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc is available in the me-central1 (Doha) region.

## Extended Definition

Dataproc is available in the me-central1 (Doha) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- [https://docs.cloud.google.com/dataproc-metastore/docs/monitoring](https://docs.cloud.google.com/dataproc-metastore/docs/monitoring)

## Supporting Pages

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.
- Clone the tutorial's GitHub repository: git clone https://github.com/GoogleCloudPlatform/metastore-disaster-recovery.git Enable the following Google Cloud APIs: gcloud services enable dataproc.googleapis.com metastore.googleapis.com Set some environment variables: export PROJECT =$ ( gcloud info -- format = 'value(config.project)' ) export WAREHOUSE BUCKET =$ { PROJECT } - warehouse export BACKUP BUCKET =$ { PROJECT } - dpms - backups export DPMS PRIMARY REGION = us - central1 export DPMS STANDBY REGION = us - east1 export DPMS PRIMARY INSTANCE = dpms1 export DPMS STANDBY INSTANCE = dpms2 export HADOOP PRIMARY = dataproc - cluster1 export HADOOP STANDBY = dataproc - cluster2 Creating storage for Hive data and Hive Metastore backups In this section, you create Cloud Storage buckets to host the Hive data and Hive Metastore backups.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- Update the environment variables to these new roles: export DPMS PRIMARY REGION = us - central1 export DPMS STANDBY REGION = us - east1 export DPMS PRIMARY INSTANCE = dpms1 export DPMS STANDBY INSTANCE = dpms12 export HADOOP PRIMARY = dataproc - cluster1 export HADOOP STANDBY = dataproc - cluster2 The failback is now complete.

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows a sample command that runs a select query from a database named DBS. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"query": "select from DBS;"}' \ https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:queryMetadata Interpret the output of a query metadata operation When you first run a query metadata command, Dataproc Metastore automatically creates a Google Cloud folder in your artifacts Google Cloud bucket.
- Required roles To get the permissions that you need to use the Dataproc Metastore administrator interface, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: To query Dataproc Metastore metadata: Metadata query administrator ( roles/metastore.metadataQueryAdmin ) on the user account or service account To alter the resource location of your metadata, including databases, tables and partitions, or move a table to another database: Metadata mutate administrator ( roles/metastore.metadataMutateAdmin ) on the user account or service account Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following example shows a sample command that moves a table called test-table2 to a new Cloud Storage bucket. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -X POST -d '{"resource name": "databases/testdb1/tables/test-table2", "location uri":"gs://gcs-bucket-dpms1-9425bd83-b794-4f1c-9e79-2d833f758cc1/empty"}' https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:alterLocation Alter table properties This operation lets you alter the properties of a table, such as a custom key-value pair that you're using to store data.
- You can sign in by executing gcloud init or gcloud auth login , or by using Cloud Shell , which account by executing gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ POST -d '{"resource name": " RESOURCE NAME ", "location uri":" LOCATION URI "}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE :alterLocation Replace the following: PROJECT ID : the Google Cloud project ID that your Dataproc Metastore service resides in.

### Cloud Monitoring \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/monitoring](https://docs.cloud.google.com/dataproc-metastore/docs/monitoring)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GAUGE , DOUBLE , By/s metastore.googleapis.com/Service Current write throughput at the Dataproc Metastore database where the data is being copied to during the replication phase. migration id : The migration ID. service/multi region/health GA (project) Multiregional service health GAUGE , INT64 , 1 metastore.googleapis.com/Service The health of the multiregional Dataproc Metastore Service. version : The Hive Metastore version of the service. release tag : Dataproc Metastore release tag, populated by the service backend and may change over service lifetime. service region : The constituent region that Dataproc Metastore service is hosted in. scaling factor : Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]. service/multi region/request count GA (project) Multiregional service request count DELTA , INT64 , {request} metastore.googleapis.com/Service The number of requests sent to the multiregional Dataproc Metastore Service. method name : The request method name. version : The Hive Metastore version of the service. service region : The constituent region that Dataproc Metastore service is hosted in. scaling factor : Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]. service/multi region/request latencies GA (project) Multiregional service request latencies DELTA , DISTRIBUTION , ms metastore.googleapis.com/Service The latencies of the requests sent to the multiregional Dataproc Metastore Service. method name : The request method name. version : The Hive Metastore version of the service. service region : The constituent region that Dataproc Metastore service is hosted in. scaling factor : Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]. service/query metadata/request count BETA (project) Admin Interface request count DELTA , INT64 , {request} metastore.googleapis.com/Service The number of Admin Interface requests. database type : The type of database, one of [SQL, Spanner]. code : The gRPC status code. service/query metadata/request latencies BETA (project) Admin Interface request latency DELTA , DISTRIBUTION , ms metastore.googleapis.com/Service The end to end request latency for Admin Interface requests. database type : The type of database, one of [SQL, Spanner]. code : The gRPC status code. service/request count GA (project) Request count DELTA , INT64 , {request} metastore.googleapis.com/Service The number of requests sent to the Dataproc Metastore Service. method name : The request method name. version : The Hive Metastore version of the service. service/request latencies BETA (project) Request latencies DELTA , DISTRIBUTION , ms metastore.googleapis.com/Service The latencies of the requests sent to the Dataproc Metastore Service. method name : The request method name. version : The Hive Metastore version of the service. service/scheduled backups/backup count BETA (project) Scheduled Backups Count DELTA , INT64 , 1 metastore.googleapis.com/Service The number of scheduled backups currently stored for the service. state : State of the backup, one of [SUCCEEDED, FAILED, IN PROGRESS]. database type : The type of database, one of [SQL, Spanner]. version : The Hive Metastore version of the service. service/scheduled backups/last backup duration BETA (project) Scheduled Backups - Last Backup Duration GAUGE , INT64 , s metastore.googleapis.com/Service The duration of the last successful scheduled backup in seconds.
- Metric type Launch stage (Resource hierarchy levels) Display name Kind, Type, Unit Monitored resources Description Labels federation/health BETA (project) Federation service health GAUGE , INT64 , 1 metastore.googleapis.com/Federation The health of the Federated Dataproc Metastore Service. version : The Hive Metastore version of the service. federation/server/request count BETA (project) Federation service request count DELTA , INT64 , {request} metastore.googleapis.com/Federation The number of requests sent to the Federated Dataproc Metastore Service. method name : The request method name. status : End status of the request, one of [success, client error, server error]. version : The Hive Metastore version of the service. service/grpc/finished requests count BETA (project) gRPC Requests Finished Count DELTA , INT64 , 1 metastore.googleapis.com/Service The number of requests finished by the GRPC Dataproc Metastore Service. tier : Service tier or instance size of the service, such as ENTERPRISE. version : The Hive Metastore version of the service. status : The gRPC status code of the request, such as NOT FOUND. method name : The request method name. service/grpc/received bytes count BETA (project) gRPC Bytes Received DELTA , INT64 , By metastore.googleapis.com/Service Number of bytes received by the Dataproc Metastore Service. tier : Service tier or instance size of the service. version : The Hive Metastore version of the service. service/grpc/request latencies BETA (project) gRPC Request Latencies DELTA , DISTRIBUTION , ms metastore.googleapis.com/Service Distribution of gRPC request latencies for a Dataproc Metastore Service. tier : Service tier or instance size of the service. version : The Hive Metastore version of the service. status : The gRPC status code of the request, such as NOT FOUND. method name : The request method name. service/grpc/sent bytes count BETA (project) gRPC Bytes Sent DELTA , INT64 , By metastore.googleapis.com/Service Number of bytes sent by the Dataproc Metastore Service. tier : Service tier or instance size of the service. version : The Hive Metastore version of the service. service/grpc/started requests count BETA (project) gRPC Requests Started Count DELTA , INT64 , 1 metastore.googleapis.com/Service The number of requests received and started by the GRPC Dataproc Metastore Service. tier : Service tier or instance size of the service. version : The Hive Metastore version of the service. method name : The request method name. service/grpc client/finished requests count BETA (project) gRPC Client Requests Finished Count CUMULATIVE , INT64 , 1 metastore.googleapis.com/Service Total number of RPCs completed on the client, regardless of success or failure. status : The gRPC status code of the request, such as NOT FOUND. method name : The request method name. service/grpc client/received bytes count BETA (project) gRPC Client Bytes Received CUMULATIVE , INT64 , By metastore.googleapis.com/Service Number of bytes received by the gRPC client. service/grpc client/request latencies BETA (project) gRPC Client Request Latencies CUMULATIVE , DISTRIBUTION , ms metastore.googleapis.com/Service Distribution of gRPC request latencies for a Dataproc Metastore Service. status : The gRPC status code of the request, such as NOT FOUND. method name : The request method name. service/grpc client/sent bytes count BETA (project) gRPC Client Bytes Sent CUMULATIVE , INT64 , By metastore.googleapis.com/Service Number of bytes sent by the gRPC client. service/grpc client/started requests count BETA (project) gRPC Client Requests Started Count CUMULATIVE , INT64 , 1 metastore.googleapis.com/Service The number of requests started by the gRPC client. method name : The request method name. service/health GA (project) Service health GAUGE , INT64 , 1 metastore.googleapis.com/Service The health of the Dataproc Metastore Service. tier : Service tier or instance size of the service, such as ENTERPRISE. version : The Hive Metastore version of the service. release tag : Dataproc Metastore release tag, populated by the service backend and may change over service lifetime. service/metadata/bytes used BETA (project) Size of the metadata stored in the Dataproc Metastore service.
- GAUGE , DOUBLE , s metastore.googleapis.com/Service Current maximum duration in seconds taken to replicate data to Dataproc Metastore. migration id : The migration ID. service/migration/write throughput BETA (project) Destination database write throughput.
- Console In the Google Cloud console, go to the Cloud Monitoring > Metrics explorer page: Go to the Metrics explorer page From the "Find resource type and metric" drop-down list, select the resource Dataproc Metastore Service .

