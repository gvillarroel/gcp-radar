---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.349Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner regional instances in Australia-southeast1"
feature_slug: "cloud-spanner-regional-instances-in-australia-southeast1"
latest_feature_date: "2019-01-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "sydney"
  - "southeast1"
  - "australia"
  - "instances"
  - "creating"
  - "regional"
  - "supports"
---

# Cloud Spanner regional instances in Australia-southeast1

Product: Spanner
Coverage: LOW

## Step 02 Summary

Cloud Spanner supports creating regional instances in the Sydney (australia-southeast1) region.

## Extended Definition

Cloud Spanner supports creating regional instances in the Sydney (australia-southeast1) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://monitoring.googleapis.com/v3/projects/ PROJECT ID /timeSeries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "timeSeries": [ { "metric": { "type": "spanner.googleapis.com/instance/dual region quorum availability" }, "resource": { "type": "spanner instance", "labels": { "project id": "spanner-project", "location": "australia-southeast1" } }, "metricKind": "GAUGE", "valueType": "DOUBLE", "points": [ { "interval": { "startTime": "2024-07-11T05:41:23Z", "endTime": "2024-07-11T05:41:23Z" }, "value": { "doubleValue": 1 } } ] } ], "unit": "10^2.%" } If you don't see a similar response, your region might not be healthy, and you might need to change the dual-region quorum from dual-region to single region . gcloud CLI Download the dual-region-quorum-health-check-script.sh file.
- Change the dual-region quorum from dual-region to single region (failover) To failover manually if there is a regional outage or a network partitioning issue: Google Cloud console Go to the Spanner Instances page in the Google Cloud console.
- The quorumInfo field provides information about the operation. gcloud spanner databases describe DATABASE ID --instance= INSTANCE ID Change the dual-region quorum from single region to dual-region (failback) To failback manually after the disrupted region is healthy or after the network partition issue is resolved: Google Cloud console Go to the Spanner Instances page in the Google Cloud console.
- Check dual-region quorum status You can check the status of your dual-region quorum in the following ways: On the Database overview page Use the System insights dashboard Use a Cloud Monitoring REST API or Google Cloud CLI On the Database overview page Go to the Spanner Instances page in the Google Cloud console.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- If not, enable it manually: Enable Spanner API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin (roles/spanner.admin) IAM role on your project.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- Go to Spanner instances Click the name of the instance that has the database that you want to delete, for example, Test Instance .
- In the Configure your instance page, retain the default option Regional and select a configuration from the drop-down menu.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.
- When removing data, delete rows instead of re-creating tables When you're working with Spanner, newly created tables haven't yet had an opportunity to undergo load-based or size-based splitting to improve performance.
- For the same reason, schema updates should use the provided Cloud Spanner API, and should avoid a manual strategy, such as creating a new table and copying the data from another table or a backup file.
- With the scalability of Spanner, it means that data doesn't need to be sharded into separate database instances when more performance or storage is needed; instead, you can add more nodes.

