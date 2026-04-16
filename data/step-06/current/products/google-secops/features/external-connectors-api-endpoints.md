---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.877Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "External connectors API endpoints"
feature_slug: "external-connectors-api-endpoints"
latest_feature_date: "2024-02-22"
deprecation_date: "2024-02-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api"
keywords:
  - "external"
  - "connectors"
  - "endpoints"
  - "several"
  - "deprecated"
  - "replacement"
  - "provided"
  - "connector"
---

# External connectors API endpoints

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Several external connectors API endpoints are deprecated and replacement endpoints are provided for connector management; deprecated on 2024-02-22.

## Extended Definition

Several external connectors API endpoints are deprecated and replacement endpoints are provided for connector management; deprecated on 2024-02-22.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- Record and delete existing feeds (before migration) : Before you begin the BYOP migration, record the configuration settings for all existing feeds that use the impacted connectors (for example, Amazon S3 V2), and then delete the feeds.
- Add a feed Caution: As of April 15, 2026 , the v1 connector framework for Google Cloud Storage, Amazon S3, Amazon SQS, and Azure Blob Storage is deprecated.
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.

### "Integrate Armis with Google SecOps \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a raw alert contains a list of entities (such as multiple email addresses, hostnames, or IP addresses), connectors automatically flatten them into separate, unique events.
- Reason: alert "{alert id}" wasn't found in Armis.' General Connector To learn more about configuring connectors in Google SecOps, see Ingest your data (connectors) .
- Note: To prevent data loss, connectors utilize Event Flattening .
- Action results Script result Script result name Value options Example is success True/False is success:False JSON result { "band" : null , "channel" : null , "dhcpAuthenticationDuration" : null , "duration" : 12339 , "endTimestamp" : "2021-03-18T20:19:31.562873+00:00" , "id" : 33355 , "inboundTraffic" : 12412512 , "outboundTraffic" : 19626489 , "protocol" : "Bluetooth" , "radiusAuthenticationDuration" : null , "risk" : "Medium" , "rssi" : null , "sensor" : { "name" : "EXAMPLE" , "type" : "Switch" }, "site" : { "location" : "Location" , "name" : "Location HQ" }, "snr" : null , "sourceId" : 2097 , "startTimestamp" : "2021-03-18T16:53:52.562873+00:00" , "targetId" : 217 , "title" : "Connection between Example and user's iPhone" , "totalAssociationDuration" : null , "traffic" : 32039001 , "wlanAssociationDuration" : null } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if 200 and data is available (is success = true): "Successfully returned connections related to the alert {alertId} based on the provided criteria in Armis." If 200 and no data is available (is success=false): "No connections were found related to the alert {alertId} based on the provided criteria in Armis." The action should fail and stop a playbook execution: if fatal error, like wrong credentials, no connection to server, other: "Error executing action "List Alert Connections".

### "Migrate from CrowdStrike Detects API to Alerts API \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CrowdStrike's deprecation of this API affects the following actions and connectors: Add Comment to Detection Close Detection Update Detection CrowdStrike - Detections Connector The SOAR CrowdStrike integration already supports the Alerts API, which replaces the Detections API.
- CrowdStrike Detections API deprecation in SOAR integration The CrowdStrike Falcon SOAR integration used the Detections API within its actions and connectors.
- CrowdStrike provides a dashboard to help you identify API clients that use deprecated endpoints.
- On the dashboard, navigate to the Calls to the deprecated "/detects" API endpoints table.

