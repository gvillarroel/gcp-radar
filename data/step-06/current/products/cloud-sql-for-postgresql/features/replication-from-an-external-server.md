---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.798Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Replication from an external server"
feature_slug: "replication-from-an-external-server"
latest_feature_date: "2022-06-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
keywords:
  - "replication"
  - "external"
  - "server"
  - "supports"
---

# Replication from an external server

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports replication from an external server.

## Extended Definition

Cloud SQL for PostgreSQL supports replication from an external server.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Supporting Pages

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR READ REPLICA UNDER EXTERNAL SERVER REPLICA NOT SYNCED To have a read replica, there must be an initial sync completed on the external server replica.
- ERROR EXTERNAL SERVER REPLICA GTID MODE External server replica must have gtid mode=ON in order to have a read replica.

### About storage shrink \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations The following feature limitations apply: Not supported with replication from an external server .
- MySQL PostgreSQL SQL Server If the storage capacity of a Cloud SQL instance is larger than your application needs, then you can manually reduce, or shrink, your storage capacity to a smaller size.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "POSTGRES 13", "settings": { "authorizedGaeApplications": [], "tier": "db-custom-2-7680", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscAutoConnections": { consumerNetwork:"projects/ PARENT PROJECT /global/networks/ CONSUMER NETWORK ", consumerNetworkStatus:" CONSUMER NETWORK STATUS ", consumerProject:" CONSUMER PROJECT ", ipAddress:" IP ADDRESS ", status:" STATUS " }, "pscEnabled": true }, "ipv4Enabled": false }, } The following fields exist for instances that have Private Service Connect enabled for them: allowedConsumerProjects : a list of the allowed projects for the instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": " ZONE NAME ", "dnsName": " DNS NAME ", "description": " DESCRIPTION ", "id": " ID ", "nameServers": [ "ns-gcp-private.googledomains.com." ], "creationTime": "2024-05-10T17:05:34.607Z", "visibility": "private", "privateVisibilityConfig": { "networks": [ { "networkUrl": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK NAME ", "kind": "dns#managedZonePrivateVisibilityConfigNetwork" } ], "gkeClusters": [], "kind": "dns#managedZonePrivateVisibilityConfig" }, "cloudLoggingConfig": { "kind": "dns#managedZoneCloudLoggingConfig" }, "kind": "dns#managedZone" } After you create the Private Service Connect endpoint , create a DNS record in the zone.
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE NAME ", "project": PROJECT ID ", "region": " REGION NAME ", "databaseVersion": "POSTGRES 13", "kind": "sql#instance", "settings": { "availabilityType": " AVAILABILITY TYPE ", "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscAutoConnections": [ { "consumerProject":" CONSUMER PROJECT ", "consumerNetwork":"projects/ PARENT PROJECT /global/networks/ CONSUMER NETWORK " } ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /addresses/ ADDRESS NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#address", "id": " ADDRESS ID ", "creationTimestamp": "2024-05-09T11:20:50.114-07:00", "name": " ADDRESS NAME ", "description": "This is the name of the internal IP address.", "address": " IP ADDRESS ", "status": "RESERVED", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /addresses/ ADDRESS NAME ", "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "addressType": "EXTERNAL" } The internal IP address is the value that's associated with the address field.

