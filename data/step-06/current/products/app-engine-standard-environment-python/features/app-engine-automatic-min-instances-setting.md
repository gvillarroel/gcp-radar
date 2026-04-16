---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.279Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine automatic min instances setting"
feature_slug: "app-engine-automatic-min-instances-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/overview"
  - "https://docs.cloud.google.com/appengine/docs/standard"
keywords:
  - "app"
  - "engine"
  - "automatic"
  - "min"
  - "instances"
  - "setting"
  - "scaling"
  - "system"
---

# App Engine automatic min instances setting

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The automatic scaling system added a min instances setting to keep a minimum number of instances running.

## Extended Definition

The automatic scaling system added a min instances setting to keep a minimum number of instances running.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-required-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VM instances are automatically located by geographical region according to the settings in your project.
- Auto scaling - App Engine automatically scales your application based on incoming load.
- Go Java Node.js PHP Python Ruby .NET Custom runtimes Features Customizable infrastructure - App Engine flexible environment instances are Compute Engine virtual machines, which means that you can take advantage of custom libraries, use SSH for debugging, and deploy your own Docker containers.
- Managed virtual machines - App Engine manages your virtual machines, ensuring that: Instances are health-checked, healed as necessary, and co-located with other services within the project.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance Class Memory Limit CPU Limit Supported Scaling Types F1 (default) 384 MB 600 MHz automatic F2 768 MB 1.2 GHz automatic F4 1536 MB 2.4 GHz automatic F4 1G 3072 MB 2.4 GHz automatic B1 384 MB 600 MHz manual, basic B2 (default) 768 MB 1.2 GHz manual, basic B4 1536 MB 2.4 GHz manual, basic B4 1G 3072 MB 2.4 GHz manual, basic B8 3072 MB 4.8 GHz manual, basic The CPU values and limits reported in the instance class table don't reflect a fixed clock speed in the CPU.
- The App Engine standard environment is based on container instances running on Google's infrastructure.
- Try App Engine free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.

