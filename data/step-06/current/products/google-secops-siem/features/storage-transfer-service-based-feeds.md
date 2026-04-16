---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.558Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Storage Transfer Service-based feeds"
feature_slug: "storage-transfer-service-based-feeds"
latest_feature_date: "2025-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "storage"
  - "transfer"
  - "based"
  - "feeds"
  - "preview"
  - "now"
  - "lets"
  - "existing"
---

# Storage Transfer Service-based feeds

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Preview now lets existing tenants create new feeds using Storage Transfer Service-based feed types.

## Extended Definition

Preview now lets existing tenants create new feeds using Storage Transfer Service-based feed types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .
- For the following feed sources ( "feedSourceType" ): GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 , the SOURCE DELETION OPTION field offers two options: NEVER : Never deletes any files after transfers.
- For "feedSourceType": "GOOGLE CLOUD STORAGE V2" , grant a role from both step a and step b : Grant either of these roles: Storage Object Viewer ( roles/storage.objectViewer ) if the transfer is to another Cloud Storage bucket.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Suspicious user activities occurring within your environment A security analyst receives an alert that a user has suddenly initiated a large data transfer to an external cloud storage service after several failed login attempts, raising suspicion of a potential account compromise or unauthorized data transfer.
- Data Security Posture Management (DSPM) for BigQuery & Cloud Storage (Preview) : Helps manage the security posture of your data used in AI.
- See activate enterprise tier Validate Security Command Center Detection Services are enabled: See How to configure Security Command Center Connect Security Command Center to AWS to get configuration and resource data that flows through to the Entity Graph: See Connect Security Command Center to AWS Preview - Connect Security Command Center to Azure to get configuration and resource data that flows through to the Entity Graph. (Optional) Integrate Security Command Center with ticketing systems.
- For existing Google Security customers: If you are already leveraging the power of any of the individual product components within our security portfolio, we can seamlessly upgrade you to the complete Google Unified Security package.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- If any of your existing feeds for the MICROSOFT GRAPH ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts v2 endpoint instead, as described in How to set up Microsoft Graph API alerts .
- You can also self-migrate by replacing your existing data feeds using v1 connectors with new feeds using v2 connectors, by following the configuration guide for v2 connectors .
- If you have existing feeds configured using the NETSKOPE ALERT log type, you can create a new feed with the NETSKOPE ALERT V2 log type as described in this guide .
- Google SecOps will automatically migrate your cloud storage data feeds using v1 connectors to v2 connectors in waves starting from April 10, 2026.

