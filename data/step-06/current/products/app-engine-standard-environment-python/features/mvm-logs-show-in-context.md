---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.799Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "MVM logs show in context"
feature_slug: "mvm-logs-show-in-context"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "context"
  - "logs"
  - "show"
  - "application"
  - "managed"
---

# MVM logs show in context

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Managed VM application logs add a show in context menu for entries containing thread_id or request_id.

## Extended Definition

Managed VM application logs add a show in context menu for entries containing thread_id or request_id.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Loading requests When App Engine creates a new instance for your application, the instance must first load any libraries and resources required to handle the request.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-3`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Loading requests When App Engine creates a new instance for your application, the instance must first load any libraries and resources required to handle the request.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The logs ingestion allotment refers to request logs and application logs data for an application.
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.

