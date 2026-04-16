---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.316Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "URL Fetch quota"
feature_slug: "url-fetch-quota"
latest_feature_date: "2016-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
keywords:
  - "received"
  - "billed"
  - "fetch"
  - "quota"
  - "applications"
---

# URL Fetch quota

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Billed App Engine applications received a higher default quota for URL Fetch.

## Extended Definition

Billed App Engine applications received a higher default quota for URL Fetch.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- Per-minute quotas protect your application from consuming all of its resources in very short periods of time, and prevent other applications from monopolizing a given resource.
- Types of quotas The following types of quotas apply to App Engine applications: Free quotas give your application an amount of each resource for free.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- Applications that are heavily CPU-bound may also incur some additional latency in order to efficiently share resources with other applications on the same servers.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- The error code can be one of the following: over quota Indicates the app has exceeded a resource quota timeout Served if a deadline is reached before there is a response from your app.
- Example basic scaling : max instances : 11 idle timeout : 10m manual scaling Applications that use an instance class of B1 or higher must specify either this element or basic scaling .
- Example error handlers : - file : default error.html - error code : over quota file : over quota.html handlers Optional.

