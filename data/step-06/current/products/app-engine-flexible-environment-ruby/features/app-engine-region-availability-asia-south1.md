---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.505Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine region availability (asia-south1)"
feature_slug: "app-engine-region-availability-asia-south1"
latest_feature_date: "2017-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
keywords:
  - "app"
  - "engine"
  - "region"
  - "availability"
  - "asia"
  - "south1"
  - "added"
  - "mumbai"
---

# App Engine region availability (asia-south1)

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine added support for the asia-south1 (Mumbai, India) region; App Engine added a deployment region in southamerica-east1 (São Paulo, Brazil).

## Extended Definition

App Engine added support for the asia-south1 (Mumbai, India) region; App Engine added a deployment region in southamerica-east1 (São Paulo, Brazil).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.
- Using custom domains might add noticeable latency to responses that App Engine sends to your app's users in some regions.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- You can serve your app's static content directly from that app in App Engine, host your static content on a Google Cloud option like Cloud Storage, or use a third-party content delivery network (CDN).
- You also have the option to use an external or third-party database if that database is supported by your language and accessible from your App Engine instance.

