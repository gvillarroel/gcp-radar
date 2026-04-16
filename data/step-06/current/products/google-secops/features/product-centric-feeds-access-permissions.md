---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.758Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Product-centric feeds access permissions"
feature_slug: "product-centric-feeds-access-permissions"
latest_feature_date: "2025-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "centric"
  - "feeds"
  - "access"
  - "permissions"
  - "custom"
  - "iam"
  - "roles"
  - "can"
---

# Product-centric feeds access permissions

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Custom IAM roles can grant access to product-centric feeds with the chronicle.feedPacks.get and chronicle.feedPacks.list permissions.

## Extended Definition

Custom IAM roles can grant access to product-centric feeds with the chronicle.feedPacks.get and chronicle.feedPacks.list permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- To grant read permission to multiple files , grant access at the bucket level as follows: For "feedSourceType": "GOOGLE CLOUD STORAGE" : Add the Google SecOps service account as a principal to your storage bucket and grant it the IAM Storage Object Viewer ( roles/storage.objectViewer ) role.
- The following table describes the error messages that you might encounter when working with data feeds: Error Code Cause Troubleshooting ACCESS DENIED The authentication account provided in the feed configuration lacks required permissions.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Profile The Profile page displays the information from the user's profile (user ID, group ID, roles assigned) and some additional information about their organization (customer ID, Google Cloud project number, Google Cloud project ID).
- The available roles are: Default ViewerWithNoDetectAccess Viewer Editor Administrator Once you have added your user or group IDs and selected the appropriate role from the ASSIGN ROLE drop-down menu, click ASSIGN .
- If you migrated your instance to IAM, or if you're onboarding to Google SecOps on or after October 6, 2025, see Configure feature access control using IAM and Google SecOps permissions in IAM .
- Important: This document describes the Google SecOps roles and groups available in the Google SecOps RBAC feature that don't use IAM for feature access control.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To maintain access, transition users to pre-defined roles or use the self-service migration to convert Permission Groups to custom roles.
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.
- To facilitate this, customers might be required to take certain actions, such as updating IP allowlists or service account permissions.
- Enterprise Plus Tier customers will retain access until a replacement is available.

