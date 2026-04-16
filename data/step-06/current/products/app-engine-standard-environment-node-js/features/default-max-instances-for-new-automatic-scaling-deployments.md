---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.570Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Default max_instances for new automatic scaling deployments"
feature_slug: "default-max-instances-for-new-automatic-scaling-deployments"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard"
keywords:
  - "default"
  - "max"
  - "instances"
  - "automatic"
  - "scaling"
  - "deployments"
  - "app"
  - "engine"
---

# Default max_instances for new automatic scaling deployments

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

New App Engine standard projects created after March 2025 now default to 20 maximum instances for automatic scaling deployments.

## Extended Definition

New App Engine standard projects created after March 2025 now default to 20 maximum instances for automatic scaling deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- By default, your app uses automatic scaling, which means App Engine will manage the number of idle instances.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.
- If you don't set this header in app.yaml , App Engine automatically adds it for all responses handled by a static file or directory handler.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance Class Memory Limit CPU Limit Supported Scaling Types F1 (default) 384 MB 600 MHz automatic F2 768 MB 1.2 GHz automatic F4 1536 MB 2.4 GHz automatic F4 1G 3072 MB 2.4 GHz automatic B1 384 MB 600 MHz manual, basic B2 (default) 768 MB 1.2 GHz manual, basic B4 1536 MB 2.4 GHz manual, basic B4 1G 3072 MB 2.4 GHz manual, basic B8 3072 MB 4.8 GHz manual, basic The CPU values and limits reported in the instance class table don't reflect a fixed clock speed in the CPU.
- The App Engine standard environment is based on container instances running on Google's infrastructure.
- Try App Engine free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.

