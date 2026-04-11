---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.759Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go 1.18 runtime generally available for App Engine standard environment"
feature_slug: "go-1-18-runtime-generally-available-for-app-engine-standard-environment"
latest_feature_date: "2023-01-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "supported runtime"
  - "runtime: go118"
  - "go118"
  - "App Engine standard environment"
  - "Go 1.18 support"
  - "Go 1.18 runtime"
  - "general availability"
  - "Go 1.18"
---

# Go 1.18 runtime generally available for App Engine standard environment

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

The Go 1.18 runtime is now generally available for App Engine standard environment.

## Extended Definition

The Go 1.18 runtime is now generally available for App Engine standard environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- NTP with App Engine standard environment The App Engine standard environment has network time protocol (NTP) services which use Google NTP servers.
- Note: If your service is infrequently used, App Engine standard environment scales to zero instances.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, an executable with the filename myexecutable could have the following app.yaml configuration file: runtime : 25 # or another supported runtime version. entrypoint : ./myexecutable Google Cloud client libraries can be used to compile applications as a GraalVM native image.
- For example: runtime: java25 # or another supported runtime entrypoint: java -Xmx64m -jar YOUR-ARTIFACT.jar Where the example YOUR-ARTIFACT.jar application jar must: Be in the root directory with your app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.
- Using GraalVM executables The App Engine standard environment Java runtime supports GraalVM native image executables.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a VPC network Stay organized with collections Save and categorize content based on your preferences.
- Learn how to connect to Memorystore from the App Engine standard environment.

