---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.691Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Automatic scaling efficiency improvements"
feature_slug: "automatic-scaling-efficiency-improvements"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard"
keywords:
  - "automatic"
  - "scaling"
  - "efficiency"
  - "improvements"
  - "system"
  - "can"
  - "reduce"
  - "instance"
---

# Automatic scaling efficiency improvements

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The automatic scaling system can reduce instance costs and loading-request overhead through improved scheduling efficiency.

## Extended Definition

The automatic scaling system can reduce instance costs and loading-request overhead through improved scheduling efficiency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The filesystem is read-only except for the location /tmp , which is a virtual disk storing data in your App Engine instance's RAM.
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- Because minor and patch versions are automatically updated, if present, the engines.node property in your package.json file can only specify the major version and be compatible with the Node.js version specified in your app.yaml file.
- For example, your application might be deployed at Node.js 10.9.4 and later automatically updated to version 10.10.0, but it will not be automatically updated to Node.js 12.x.x.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance Class Memory Limit CPU Limit Supported Scaling Types F1 (default) 384 MB 600 MHz automatic F2 768 MB 1.2 GHz automatic F4 1536 MB 2.4 GHz automatic F4 1G 3072 MB 2.4 GHz automatic B1 384 MB 600 MHz manual, basic B2 (default) 768 MB 1.2 GHz manual, basic B4 1536 MB 2.4 GHz manual, basic B4 1G 3072 MB 2.4 GHz manual, basic B8 3072 MB 4.8 GHz manual, basic The CPU values and limits reported in the instance class table don't reflect a fixed clock speed in the CPU.
- Standard environment languages and runtimes The standard environment supports the following languages: Go Java Node.js PHP Python Ruby Instance classes The instance class determines the amount of memory and CPU available to each instance, the amount of free quota , and the cost per hour after your app exceeds the free quota.
- Instead, you see instance hours from the "B" classes reported as "Backend Instances", and instance hours from the "F" classes reported as "Frontend Instances".
- Your application runs within its own secure, reliable environment that is independent of the hardware, operating system, or physical location of the server.

