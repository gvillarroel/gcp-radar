---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.769Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Week 5 maintenance notification"
feature_slug: "week-5-maintenance-notification"
latest_feature_date: "2024-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
keywords:
  - "notification"
  - "receive"
  - "notice"
  - "five"
  - "week"
  - "maintenance"
  - "lets"
---

# Week 5 maintenance notification

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Week 5 maintenance notification lets you receive notice five weeks before a scheduled maintenance update.

## Extended Definition

Week 5 maintenance notification lets you receive notice five weeks before a scheduled maintenance update.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- An automated backup failed and you didn't receive an email notification.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#forwardingRule", "id": " ENDPOINT ID ", "creationTimestamp": "2024-05-09T12:03:21.383-07:00", "name": " ENDPOINT NAME ", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "IPAddress": " IP ADDRESS ", "target": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /serviceAttachments/ SERVICE ATTACHMENT NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME ", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/default", "serviceDirectoryRegistrations": [ { "namespace": "goog-psc-default" } ], "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "fingerprint": " FINGERPRINT ID ", "pscConnectionId": " CONNECTION ID ", "pscConnectionStatus": "ACCEPTED", "allowPscGlobalAccess": true } Verify that the status of the endpoint is ACCEPTED .
- To resolve this issue, retry creating the instance in another zone or retry creating the instance in the same zone that received the error at a different time of day.
- The export operation times out before exporting anything, and you see the error message Could not receive data from client: Connection reset by peer.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Also referred to as Week 1 (Console) and preview (gcloud CLI). stable For an instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 15 to 21 days after the notification is sent out.
- Also referred to as Week 2 (Console) and production (gcloud CLI). week5 For instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 35 to 42 days after the notification is sent out.
- SqlUpdateTrack Enums SQL UPDATE TRACK UNSPECIFIED This is an unknown maintenance timing preference. canary For an instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 7 to 14 days after the notification is sent out.
- Returned in output as an integer, 1 to 7, where 1 equals Monday. updateTrack enum ( SqlUpdateTrack ) Maintenance timing settings: canary , stable , or week5 .

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Also referred to as Week 1 (Console) and preview (gcloud CLI). stable For an instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 15 to 21 days after the notification is sent out.
- Also referred to as Week 2 (Console) and production (gcloud CLI). week5 For instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 35 to 42 days after the notification is sent out.
- SqlUpdateTrack Enums SQL UPDATE TRACK UNSPECIFIED This is an unknown maintenance timing preference. canary For an instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 7 to 14 days after the notification is sent out.
- Returned in output as an integer, 1 to 7, where 1 equals Monday. updateTrack enum ( SqlUpdateTrack ) Maintenance timing settings: canary , stable , or week5 .

