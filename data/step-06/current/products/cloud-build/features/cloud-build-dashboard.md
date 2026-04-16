---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.894Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Dashboard"
feature_slug: "cloud-build-dashboard"
latest_feature_date: "2020-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
keywords:
  - "dashboard"
  - "providing"
  - "high"
  - "became"
  - "level"
  - "generally"
  - "available"
---

# Cloud Build Dashboard

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

The Cloud Build Dashboard became generally available, providing a high-level overview of recent builds for build triggers.

## Extended Definition

The Cloud Build Dashboard became generally available, providing a high-level overview of recent builds for build triggers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're expecting extremely high traffic levels, or for some reason your app requires particularly high quotas (for example, because of a significant product launch or large load tests), we recommend that you sign up for a support package .
- Tip: The maximum per-minute quotas accommodate high traffic levels, enough to handle a spike in traffic from your site getting mentioned in news stories.
- Quotas generally apply at the Google Cloud project level.
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default value is "automatic." Keep the following in mind: A high maximum reduces the number of idle instances more gradually when load levels return to normal after a spike.
- A high maximum means users might wait longer for their requests to be served, if there are pending requests and no idle instances to serve them, but your application will cost less to run. <min-idle-instances> The number of instances to be kept running and ready to serve traffic.This setting only applies to the version that receives most of the traffic.
- This parameter specifies the CPU usage threshold at which new instances will be started to handle traffic, enabling you to balance between performance and cost, with lower values increasing performance and increasing cost, and higher values decreasing performance but also decreasing cost.
- Default: F1 is assigned if you don't specify an instance class along with the automatic scaling element. basic scaling When using basic scaling, the B1, B2, B4, B4 1G, and B8 instance classes are available.

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts.
- At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts.
- At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts.
- At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts.

