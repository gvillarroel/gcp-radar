---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.677Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Cloud Scheduler general availability"
feature_slug: "cloud-scheduler-general-availability"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
keywords:
  - "scheduler"
  - "availability"
  - "now"
  - "generally"
  - "available"
  - "configuring"
  - "scheduled"
  - "execution"
---

# Cloud Scheduler general availability

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler is now generally available for configuring scheduled execution of work (cron jobs).

## Extended Definition

Cloud Scheduler is now generally available for configuring scheduled execution of work (cron jobs).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- The Search API imposes these limits to ensure the reliability of the service: 100 aggregated minutes of query execution time per minute, within an app and an index .
- When a resource is depleted When an application consumes all of an allocated resource, the resource becomes unavailable until the quota is replenished.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Meeting your latency, availability, or durability requirements are primary factors for selecting the region where your apps are run.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Meeting your latency, availability, or durability requirements are primary factors for selecting the region where your apps are run.

