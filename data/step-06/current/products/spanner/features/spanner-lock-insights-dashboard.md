---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.295Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Lock Insights dashboard"
feature_slug: "spanner-lock-insights-dashboard"
latest_feature_date: "2022-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum"
  - "https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "spikes"
  - "identifies"
  - "dashboard"
  - "insights"
  - "databases"
  - "latency"
  - "lock"
---

# Spanner Lock Insights dashboard

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Lock Insights dashboard identifies latency spikes in Spanner databases that are caused by lock contention.

## Extended Definition

The Lock Insights dashboard identifies latency spikes in Spanner databases that are caused by lock contention.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Check dual-region quorum status You can check the status of your dual-region quorum in the following ways: On the Database overview page Use the System insights dashboard Use a Cloud Monitoring REST API or Google Cloud CLI On the Database overview page Go to the Spanner Instances page in the Google Cloud console.
- Use the System insights dashboard After you create a dual-region configuration, you can view the Dual-region quorum health timeline metric on the Instance-level System insights dashboard.
- For more information, see View the system insights dashboard .
- For detailed instructions, refer to the gcloud tab. gcloud CLI Use the gcloud spanner databases change-quorum command to change the dual-region quorum from dual-region to a single region. gcloud spanner databases change - quorum DATABASE ID -- instance = INSTANCE ID -- single - region -- serving - location = SERVING LOCATION [ -- etag = ETAG ] Replace the following: DATABASE ID : The permanent identifier of the database.

### "Calculate Spanner streaming and partition request latency \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample audit logs for streaming requests To find all log entries for a streaming request, run the following query in the Logs Explorer , replacing the OPERATION ID variable with the desired value: operation.id=" OPERATION ID " The following example finds log entries for a streaming request with the operation.id of 15327696495839874591 : operation.id="15327696495839874591" Returned first log { "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { ... }, "requestMetadata" : { "requestAttributes" : { "time" : "2023-02-27T16:57:40.552952297Z" , }, "destinationAttributes" : {} }, "serviceName" : "spanner.googleapis.com" , "methodName" : "google.spanner.v1.Spanner.ExecuteStreamingSql" , "authorizationInfo" : [{ ... }], "resourceName" : "projects/example-project/instances/example-instance/databases/example-database/sessions/example-session" , "request" : { "session" : "projects/example-project/instances/example-instance/databases/example-database/sessions/example-session" , "requestOptions" : {}, "sql" : "SELECT COUNT( ) as count FROM Example table WHERE Example Column > @timestamp" , "@type" : "type.googleapis.com/google.spanner.v1.ExecuteSqlRequest" , "queryOptions" : {} }, "metadata" : { "@type" : "type.googleapis.com/spanner.cloud.instance v1.QueryPerformanceMetadata" , "responseTimestamp" : "2023-02-27T16:57:40.555730699Z" } }, "insertId" : "h7fj0jei6597" , "resource" : { ... }, "timestamp" : "2023-02-27T16:57:40.552391554Z" , "severity" : "INFO" , "logName" : "projects/example-project/logs/cloudaudit.googleapis.com %2F data access" , "operation" : { "id" : "15327696495839874591" , "producer" : "spanner.googleapis.com" , "first" : true }, "receiveTimestamp" : "2023-02-27T16:57:41.507770020Z" } Returned last log { "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { ... }, "requestMetadata" : { "requestAttributes" : { "time" : "2023-02-27T16:57:40.552952297Z" , }, "destinationAttributes" : {} }, "serviceName" : "spanner.googleapis.com" , "methodName" : "google.spanner.v1.Spanner.ExecuteStreamingSql" , "authorizationInfo" : [{ ... }], "resourceName" : "projects/example-project/instances/example-instance/databases/example-database/sessions/example-session" , "metadata" : { "responseTimestamp" : "2023-02-27T16:57:40.556138125Z" , "@type" : "type.googleapis.com/spanner.cloud.instance v1.QueryPerformanceMetadata" } }, "insertId" : "h7fj0jei6598" , "resource" : { ... }, "timestamp" : "2023-02-27T16:57:40.552391554Z" , "severity" : "INFO" , "logName" : "projects/example-project/logs/cloudaudit.googleapis.com %2F data access" , "operation" : { "id" : "15327696495839874591" , "producer" : "spanner.googleapis.com" , "last" : true }, "receiveTimestamp" : "2023-02-27T16:57:41.507770020Z" } The request latency is the latest metadata.responseTimestamp minus the earliest requestAttributes.time .
- Returned last log { "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { ... }, "requestMetadata" : { "requestAttributes" : { "time" : "2023-02-15T18:13:39.439207331Z" , }, }, "serviceName" : "spanner.googleapis.com" , "methodName" : "google.spanner.v1.Spanner.ExecuteStreamingSql" , "authorizationInfo" : [{ ... }], "resourceName" : "projects/example-project/instances/example-instance/databases/example-db/sessions/example-session" , "metadata" : { "partitionBatchIdentifier" : "4841471066190013455" , "@type" : "type.googleapis.com/spanner.cloud.instance v1.QueryPerformanceMetadata" , "responseTimestamp" : "2023-02-15T18:13:39.441692339Z" } }, "insertId" : "4fug42dqkec" , "resource" : { ... }, "timestamp" : "2023-02-15T18:13:39.438607931Z" , "severity" : "INFO" , "logName" : "projects/example-project/logs/cloudaudit.googleapis.com %2F data access" , "operation" : { ... }, "receiveTimestamp" : "2023-02-15T18:13:39.983812511Z" } The request latency is the latest metadata.responseTimestamp minus the earliest requestAttributes.time .
- Home Documentation Databases Spanner Guides Send feedback Calculate Spanner streaming and partition request latency Stay organized with collections Save and categorize content based on your preferences.
- Sample audit logs for partition requests To find all log entries for a partition request, run the following query in the Logs Explorer , replacing the PARTITION BATCH ID variable with the desired value: metadata.partitionBatchIdentifier=" PARTITION BATCH ID " The following example finds log entries for a partition request with the metadata.partitionBatchIdentifier of 15327696495839874591 : metadata.partitionBatchIdentifier="15327696495839874591" Returned first log { "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { ... }, "requestMetadata" : { "requestAttributes" : { "time" : "2023-02-15T18:13:39.341584693Z" , }, }, "serviceName" : "spanner.googleapis.com" , "methodName" : "google.spanner.v1.Spanner.ExecuteStreamingSql" , "authorizationInfo" : [{ ... }], "resourceName" : "projects/example-project/instances/example-instance/databases/example-db/sessions/example-session" , "request" : { ... }, "metadata" : { "@type" : "type.googleapis.com/spanner.cloud.instance v1.QueryPerformanceMetadata" , "partitionBatchIdentifier" : "4841471066190013455" , "responseTimestamp" : "2023-02-15T18:13:39.343693061Z" } }, "insertId" : "4fug42dqke5" , "resource" : { ... }, "timestamp" : "2023-02-15T18:13:39.341069413Z" , "severity" : "INFO" , "logName" : "projects/example-project/logs/cloudaudit.googleapis.com %2F data access" , "operation" : { ... }, "receiveTimestamp" : "2023-02-15T18:13:39.983812511Z" } Returned second log { "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { ... }, "requestMetadata" : { "requestAttributes" : { "time" : "2023-02-15T18:13:39.341584693Z" , }, }, "serviceName" : "spanner.googleapis.com" , "methodName" : "google.spanner.v1.Spanner.ExecuteStreamingSql" , "authorizationInfo" : [{ ... }], "resourceName" : "projects/example-project/instances/example-instance/databases/example-db/sessions/example-session" , "metadata" : { "responseTimestamp" : "2023-02-15T18:13:39.344256101Z" , "partitionBatchIdentifier" : "4841471066190013455" , "@type" : "type.googleapis.com/spanner.cloud.instance v1.QueryPerformanceMetadata" } }, "insertId" : "4fug42dqke6" , "resource" : { ... }, "timestamp" : "2023-02-15T18:13:39.341069413Z" , "severity" : "INFO" , "logName" : "projects/example-project/logs/cloudaudit.googleapis.com %2F data access" , "operation" : { ... }, "receiveTimestamp" : "2023-02-15T18:13:39.983812511Z" } Depending on the number of partitions, Spanner might record more logs than in this example.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .
- Home Documentation Databases Spanner Reference Send feedback Information schema for GoogleSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.
- Tables in the INFORMATION SCHEMA The following sections describe the tables in the INFORMATION SCHEMA for GoogleSQL-dialect databases.
- If you are using a PostgreSQL-dialect database, see Information schema for PostgreSQL-dialect databases .

