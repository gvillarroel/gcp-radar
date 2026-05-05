# Azure Event Hub feed

Product: Google SecOps SIEM
Feature slug: `azure-event-hub-feed`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Google SecOps can ingest logs directly from Azure Event Hub through the feed management API or web interface without requiring Azure Blob Storage.

## Lifecycle

- Latest feature date: 2025-04-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- armor (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- audit (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- firewall (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- iam (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- key (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- logging (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- policy (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- secret (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management), [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
