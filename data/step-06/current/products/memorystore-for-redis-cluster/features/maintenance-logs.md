---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.717Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "maintenance logs"
feature_slug: "maintenance-logs"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest"
keywords:
  - "maintenance"
  - "logs"
  - "you"
  - "can"
  - "query"
  - "and"
  - "view"
  - "for"
---

# maintenance logs

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

You can query and view maintenance logs for a Memorystore for Redis Cluster cluster in Cloud Logging.

## Extended Definition

You can query and view maintenance logs for a Memorystore for Redis Cluster cluster in Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs](https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest](https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest)

## Supporting Pages

### "Monitor access using audit logs \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs](https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View logs You can query for all audit logs or you can query for logs by their audit log name.
- To display all audit logs, enter either of the following queries into the query-editor field, and then click Run query : logName:"cloudaudit.googleapis.com" protoPayload."@type"="type.googleapis.com/google.cloud.audit.AuditLog" To display the audit logs for a specific resource and audit log type, in the Query builder pane, do the following: In Resource type , select the Google Cloud resource whose audit logs you want to see.
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve your audit log entries for your Google Cloud project, folder, or organization: Note: You can't view audit logs for Cloud Billing accounts in the Google Cloud console.
- Here are some reasons you might want to route your audit logs: To keep audit logs for a longer period of time or to use more powerful search capabilities, you can route copies of your audit logs to Cloud Storage, BigQuery, or Pub/Sub.

### "About maintenance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you schedule maintenance for your cluster, you can either start the update for your cluster immediately or defer the update for up to two weeks from the originally scheduled maintenance date and time.
- If the current day and time works for your cluster and you expect a high load on your cluster in the future, then you can run the maintenance update immediately.
- Configure your client application To configure your client application for the best performance and availability possible during maintenance, follow these steps: Use and configure your OSS Redis cluster client according to the guidance at Redis client best practices to make sure that any scheduled maintenance doesn't impact your client application.
- Upcoming maintenance notifications To ensure you stay informed about maintenance events on your cluster, you can set up email notifications regarding upcoming maintenance at least one week before it's scheduled.

### "High availability and replicas \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using recommended best practices allows your OSS Redis client to automatically and gracefully handle the role (automatic failovers), and slot assignment changes (node replacement, consumer scale out/in) for your cluster without any downtime.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback High availability and replicas Stay organized with collections Save and categorize content based on your preferences.
- Failover and node repair duration Automatic failovers can take time on the order of tens of seconds for unplanned events such as a primary node process crash, or a hardware failure.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Google Cloud Memorystore for Redis API \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest](https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha1.projects.locations.clusters Methods backup POST /v1alpha1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1alpha1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1alpha1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1alpha1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1alpha1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1alpha1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1alpha1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1alpha1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1beta1.projects.locations.clusters Methods backup POST /v1beta1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1beta1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1beta1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1beta1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1beta1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1beta1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1beta1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1beta1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1.projects.locations.clusters Methods backup POST /v1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Reference Send feedback Google Cloud Memorystore for Redis API Stay organized with collections Save and categorize content based on your preferences.

