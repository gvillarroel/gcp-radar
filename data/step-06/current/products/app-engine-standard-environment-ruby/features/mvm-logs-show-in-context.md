---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.427Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "MVM logs show in context"
feature_slug: "mvm-logs-show-in-context"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "context"
  - "show"
  - "menu"
  - "logs"
  - "include"
  - "application"
  - "lets"
---

# MVM logs show in context

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

MVM application logs include a show-in-context menu that lets users sort logs by thread_id or request_id when those fields are present.

## Extended Definition

MVM application logs include a show-in-context menu that lets users sort logs by thread_id or request_id when those fields are present.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Once applied, requests that violate a policy that enforces a custom constraint show an error message in the gcloud CLI and in Serverless VPC Access logs.
- This page shows how to use Serverless VPC Access to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- Connection refused error If you receive connection refused or connection timeout errors that degrade network performance, your connections could be growing without limit across invocations of your serverless application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a VPC network Stay organized with collections Save and categorize content based on your preferences.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Once applied, requests that violate a policy that enforces a custom constraint show an error message in the gcloud CLI and in Serverless VPC Access logs.
- This page shows how to use Serverless VPC Access to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- Connection refused error If you receive connection refused or connection timeout errors that degrade network performance, your connections could be growing without limit across invocations of your serverless application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a VPC network Stay organized with collections Save and categorize content based on your preferences.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.
- This includes indexes that were created in the past and no longer appear in the application's configuration but have not been deleted.

