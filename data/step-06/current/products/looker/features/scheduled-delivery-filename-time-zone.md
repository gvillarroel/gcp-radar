---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.539Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Scheduled delivery filename time zone"
feature_slug: "scheduled-delivery-filename-time-zone"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
keywords:
  - "scheduled"
  - "delivery"
  - "filename"
  - "time"
  - "zone"
  - "filenames"
  - "sftp"
  - "s3"
---

# Scheduled delivery filename time zone

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Scheduled delivery filenames for SFTP and S3 destinations now use the delivery time zone in their timestamp.

## Extended Definition

Scheduled delivery filenames for SFTP and S3 destinations now use the delivery time zone in their timestamp.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)

## Supporting Pages

### Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- Source ID: `site-docs-reference-required-4`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Old Emailed Data Policy What Gets Delivered New Emailed Data Policy What Gets Delivered Send Link Only Link back to Looker content Send Data Only Existing Schedules : An embedded data visualization or file attachment replaces the link New Deliveries : Embedded data or a file attachment Send Link Only Link back to Looker content Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Data Only Embedded data or a file attachment Send Link Only Existing Schedules : Link back to Looker content replaces embedded; no file is attached New Deliveries : Link back to Looker content Send Data Only Embedded data or a file attachment Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Link Only Existing Schedules : Link back to Looker content New Deliveries : Link back to Looker content Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Data Only Existing Schedules : Embedded data or a file attachment New Deliveries : Embedded data or a file attachment Switching deliveries to Send Link Only If you are switching to the Send Link Only option, all new one-time and scheduled email deliveries will be sent containing only links back to Looker and the title of the Looker content, rather than embedded or attached Looker content.
- Changing your emailed data policy option Although your Looker instance will have a default emailed data policy option selected based on the instance's settings prior to an update to Looker 7.8, Looker admins can change this default setting at any time by navigating to the Scheduled Emails page in the Admin panel under Alerts & Schedules .
- The Scheduled Emails page, accessible from the Admin panel under Alerts & Schedules , lets Looker admins set a data sharing policy that applies to all new and existing one-time and scheduled email deliveries that use Looker 's native email destination.
- The following table shows at a high level what happens to a scheduled delivery when admins switch the instance's emailed data policy options.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- The time zone used for schedules does not affect time data returned by a query; it affects only the time a data delivery is sent.
- Looker Support requires permission from a technical contact to do any of the following: Cause downtime for the instance, which could be due to a non-scheduled version update, performance changes to your Looker server, or other reasons Change something about your Looker license, possibly to enable new features for you.
- When User Specific Time Zones is enabled, each user is assigned a time zone, and Looker converts time-based data from the Database Time Zone to a user's time zone when the user views query results or interprets filters.
- If the admin or user has not set the user's default time zone, then the Application Time Zone is used for that user, and all time-based data queried by that user will be converted to the Application Time Zone .

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-docs-reference-required-6`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, gs://bucket/dir doesn't match on gs://bucket/dir/file.csv nor gs://bucket/file.csv However, you can use multiple wildcards for filenames within buckets.
- The user then creates an incremental transfer from the Cloud Storage bucket, scheduled to run once daily at time 03:00Z, starting from 2023-07-01T03:00Z.
- In the case of a failed transfer, you can also choose to manually trigger a transfer outside its regularly scheduled time.
- You can use multiple wildcards for objects (filenames) within buckets.

