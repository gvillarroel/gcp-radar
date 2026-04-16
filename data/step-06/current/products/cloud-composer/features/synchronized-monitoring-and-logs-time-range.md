---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.371Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Synchronized Monitoring and Logs time range"
feature_slug: "synchronized-monitoring-and-logs-time-range"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "synchronized"
  - "monitoring"
  - "logs"
  - "time"
  - "range"
  - "selected"
  - "ranges"
  - "between"
---

# Synchronized Monitoring and Logs time range

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Selected time ranges are synchronized between the Monitoring and Logs tabs in Cloud Console.

## Extended Definition

Selected time ranges are synchronized between the Monitoring and Logs tabs in Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Difference between DAG parse time and DAG execution time The monitoring dashboard of an environment displays the total time required to parse all DAGs in your Cloud Composer environment and the average time it takes to execute a DAG.
- Environment metric Description Successful DAG runs The total number of successful runs for all DAGs in the environment during the selected time range.
- Failed DAG runs Failed tasks The total number of failed runs for all DAGs in the environment during the selected time range.
- Error logs The number of error log messages for Airflow components in a category in the selected time period.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- To specify several IP ranges, use this argument multiple times. --web-server-deny-all forbids access for all IP addresses.
- This parameter is required when using --enable-private-environment or when configuring secondary ranges for pods and services. --network specifies your VPC network ID. --subnetwork specifies your VPC subnetwork ID. --cluster-secondary-range-name or --cluster-ipv4-cidr configures the the secondary range for pods. --services-secondary-range-name or --services-ipv4-cidr to configure the secondary range for services. --master-ipv4-cidr specifies a range for the GKE control plane. --web-server-ipv4-cidr specifies a range for the Airflow web server instance. --cloud-sql-ipv4-cidr specifies a range for the Cloud SQL instance. --enable-private-endpoint controls the level access for the GKE control plane.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "office net 1" }, { "value" : "192.0.4.0/24" , "description" : "office net 3" } ] }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, the allowed ip range block in the web server network access control block contains IP ranges that can access web server.
- Note: The Airflow web server of your environment is always protected by IAM, regardless of the IP ranges that are allowed to access it. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } node config { service account = " SERVICE ACCOUNT " } } } Replace: WS IP RANGE with the IP range, in the CIDR notation, that can access Airflow UI.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Warnings about duplicate entries of 'echo' task belonging to the 'echo-airflow monitoring' DAG You might see the following entry in the Airflow logs: in query db.query(q) File "/opt/python3.6/lib/python3.6/site-packages/MySQLdb/ connections.py", line 280, in query mysql.connection.query(self, query) mysql exceptions.IntegrityError: (1062, "Duplicate entry 'echo-airflow monitoring-2020-10-20 15:59:40.000000' for key 'PRIMARY'") You can ignore these log entries, because this error doesn't impact Airflow DAG and task processing.
- Non-continuous DAG parse times and DAG bag size diagrams in monitoring Non-continuous DAG parse times and DAG bag size diagrams on the monitoring dashboard indicate problems with long DAG parse times (more than 5 minutes).
- Non-RFC 1918 address ranges are partially supported for Pods and Services Cloud Composer depends on GKE to deliver support for non-RFC 1918 addresses for Pods and Services.

