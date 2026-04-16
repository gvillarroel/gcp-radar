---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.334Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Default App Engine billing daily budget"
feature_slug: "default-app-engine-billing-daily-budget"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources"
keywords:
  - "default"
  - "app"
  - "engine"
  - "billing"
  - "daily"
  - "budget"
  - "applications"
  - "enabled"
---

# Default App Engine billing daily budget

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Applications enabled for billing now default to an unlimited daily budget instead of a $0 cap, preventing accidental budget exhaustion outages.

## Extended Definition

Applications enabled for billing now default to an unlimited daily budget instead of a $0 cap, preventing accidental budget exhaustion outages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- Resource Default daily limit Maximum rate Recipients emailed 100 messages 8 messages/minute Admins emailed 5,000 mails 24 mails/minute Message body data sent 60 MB 340 KB/minute Attachments sent 2,000 attachments 8 attachments/minute Attachment data sent 100 MB 10 MB/minute You can add up to a maximum of 50 authorized senders for the Mail API.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a Google Cloud project and App Engine application with billing enabled: Go to the App Engine page: Go to App Engine Select or create a Google Cloud project.
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.
- Depending on if a billing account exists or if the selected Google Cloud project is associated with an account, the Billing page displays one of the following: If billing is already enabled for the selected Google Cloud project, then the details about the billing account are listed.
- Run the following command to select a region and create an App Engine application: gcloud app create More information about App Engine locations help outline Enable billing in the Billing page of the Google Cloud console, see Enabling billing for details.

### "Labeling App Engine resources \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources)
- Source ID: `site-docs-reference-4`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TABLEID ], labels )) WHERE cost > 0.0 and labels . key is not null and resource type = ' Out Bandwidth ' LIMIT 100 BigQuery returns your data with a flattened output: product resource type start time end time labels key labels value cost App Engine Out Bandwidth 2017-10-07 22:00:00 2017-10-07 23:00:00 service default 0.020033 App Engine Out Bandwidth 2017-10-07 13:00:00 2017-10-07 14:00:00 service frontend 0.016042 App Engine Out Bandwidth 2017-10-07 06:00:00 2017-10-07 07:00:00 service backend task 0.013125 App Engine Out Bandwidth 2017-10-07 21:00:00 2017-10-07 22:00:00 service default 0.020722 App Engine Out Bandwidth 2017-10-07 19:00:00 2017-10-07 20:00:00 service frontend 0.020725 App Engine Out Bandwidth 2017-10-08 04:00:00 2017-10-08 05:00:00 service backend task 0.02072 App Engine Out Bandwidth 2017-10-08 02:00:00 2017-10-08 03:00:00 service default 0.020723 App Engine Out Bandwidth 2017-10-07 14:00:00 2017-10-07 15:00:00 service frontend 0.020724 App Engine Out Bandwidth 2017-10-07 23:00:00 2017-10-08 00:00:00 service backend task 0.021417 Time periods in billing reports To ensure that each day in the report covers a full 24 hour period, the billing data that you export only contains data up to the most recent midnight, Pacific Time.
- For example, if you add labels such as service:default , service:backend and service:frontend to your App Engine services, you can compare how these different services use outgoing bandwidth, instance hours, and other resources .
- The App Engine flexible environment does not support billing labels for Firestore in Datastore mode (Datastore) usage.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Labeling App Engine resources Stay organized with collections Save and categorize content based on your preferences.

