---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.393Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "TLS 1.1 and earlier support"
feature_slug: "tls-1-1-and-earlier-support"
latest_feature_date: "2025-08-07"
deprecation_date: "2025-03"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "security"
  - "earlier"
  - "allows"
  - "transport"
  - "versions"
  - "legacy"
---

# TLS 1.1 and earlier support

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

TLS 1.1 and earlier support allows legacy transport security versions for App Engine standard environment applications; deprecated on 2025-03.

## Extended Definition

TLS 1.1 and earlier support allows legacy transport security versions for App Engine standard environment applications; deprecated on 2025-03.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.
- You can: Use the Versions page in the Google Cloud console Use gcloud app versions start and gcloud app versions stop commands Startup Each service instance is created in response to a start request, which is an empty HTTP GET request to / ah/start .
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- For example: Strict-Transport-Security : max-age = 31536000 ; includeSubDomains To set this header for any static content that is served by your app, add the header to your app's static file and directory handlers .
- To instruct the browser to prefer https over http for a given page or entire domain, set the Strict-Transport-Security header in your responses.
- To learn more, see this Cheat Sheet on HTTP Strict Transport Security .
- You can also change the number of concurrent requests an instance can handle by setting the max concurrent requests element in your app.yaml file , or appengine-web.xml file file if using the App Engine legacy bundled services.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny egress traffic from your connector.

