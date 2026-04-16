---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.426Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Unlimited daily budget default for billed apps"
feature_slug: "unlimited-daily-budget-default-for-billed-apps"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/quotas"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
keywords:
  - "unlimited"
  - "budget"
  - "daily"
  - "newly"
  - "billed"
  - "apps"
  - "default"
  - "applications"
---

# Unlimited daily budget default for billed apps

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Newly billed applications default to an unlimited daily budget instead of a zero-dollar daily cap.

## Extended Definition

Newly billed applications default to an unlimited daily budget instead of a zero-dollar daily cap.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- Resource Default daily limit Maximum rate Recipients emailed 100 messages 8 messages/minute Admins emailed 5,000 mails 24 mails/minute Message body data sent 60 MB 340 KB/minute Attachments sent 2,000 attachments 8 attachments/minute Attachment data sent 100 MB 10 MB/minute You can add up to a maximum of 50 authorized senders for the Mail API.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.
- Daily quotas protect the integrity of the App Engine system by ensuring that no single app over-consumes a resource to the detriment of other apps.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- Resource Default daily limit Maximum rate Recipients emailed 100 messages 8 messages/minute Admins emailed 5,000 mails 24 mails/minute Message body data sent 60 MB 340 KB/minute Attachments sent 2,000 attachments 8 attachments/minute Attachment data sent 100 MB 10 MB/minute You can add up to a maximum of 50 authorized senders for the Mail API.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.
- Daily quotas protect the integrity of the App Engine system by ensuring that no single app over-consumes a resource to the detriment of other apps.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Tips: If you deploy your apps with the gcloud app deploy command, the gcloud CLI will ensure that your Google Cloud project includes an App Engine application and prompt you to select a region when needed.
- To create a budget and set alerts in a Google Cloud project: In the Google Cloud console, go to the Billing page: Go to Billing Click the billing account for which you want to create a budget.

