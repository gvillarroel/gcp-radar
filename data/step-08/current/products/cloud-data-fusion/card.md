# Cloud Data Fusion

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-29T04:08:52.141Z`
Product status: `PASS`

## Summary

- Feature cards: 19
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 1 explicit, 0 derived, 18 unknown

## Service Card

- Service card ID: `cloud-data-fusion:service`
- Latest feature date: 2026-02-09
- Official source links: 26
- Security capabilities: 20

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| InstanceV3 monitored resource for Cloud Data Fusion | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/rest)<br>[source](https://docs.cloud.google.com/monitoring/api/resources) |
| SAP Table Reader plugin snapshot mode cleanup handling | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)<br>[source](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)<br>[source](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data) |
| Bitbucket Server Bearer authentication for source control | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/data-fusion/docs/access-control)<br>[source](https://docs.cloud.google.com/data-fusion/docs/authentication)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions) |
| Dataproc 2.0 support in Cloud Data Fusion | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/concepts/configure-clusters)<br>[source](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)<br>[source](https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission) |
| Namespace application count API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref) |
| Cloud Data Fusion instance creation tags | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesFixedSizeCollection)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage) |
| Cloud Data Fusion 6.9 support | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse) |
| Cloud Data Fusion 6.11.0 high availability upgrades | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage) |
| Cloud Data Fusion failed pipeline error diagnostics | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)<br>[source](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)<br>[source](https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline) |
| Cloud Data Fusion logs observability in Cloud Logging | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)<br>[source](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs)<br>[source](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard) |
| Cloud Data Fusion metrics observability in Cloud Monitoring | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview)<br>[source](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)<br>[source](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard) |
| GET /v3/namespaces/.../apps/.../logs API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)<br>[source](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard) |
| GET /v3/namespaces/{namespace}/apps endpoint pagination behavior | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/rest) |
| GET /v3/system/services/.../logs API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions) |
| POST /v3/metrics/query API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/getting-support) |
| POST /v3/metrics/search API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/getting-support) |
| Cloud Data Fusion custom organization policy constraints | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/access-control)<br>[source](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)<br>[source](https://docs.cloud.google.com/data-fusion/docs/reference/rest/Shared.Types/GetIamPolicyRequest) |
| Cloud Data Fusion CMEK organization policy support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/data-fusion/docs/access-control)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions)<br>[source](https://docs.cloud.google.com/data-fusion/docs/support/getting-support) |
| Cloud Data Fusion version 6.8 support deprecation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse) |
