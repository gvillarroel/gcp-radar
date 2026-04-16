---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.676Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine region-aware app URLs"
feature_slug: "app-engine-region-aware-app-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
keywords:
  - "app"
  - "engine"
  - "region"
  - "aware"
  - "urls"
  - "now"
  - "supports"
  - "hostnames"
---

# App Engine region-aware app URLs

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine now supports app hostnames that include a region identifier (PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing and reliability.

## Extended Definition

App Engine now supports app hostnames that include a region identifier (PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing and reliability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)

## Supporting Pages

### Quickstart: Create a .NET app in the App Engine flexible environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `feature-recovery-http`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- For apps created after February 2020, REGION_ID .r is included in App Engine URLs.
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Additional prerequisites Initialize your App Engine app with your project and choose its region: gcloud app create --project=[YOUR_PROJECT_ID] When prompted, select the region where you want to locate your App Engine application.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- You can use the following tools to see the region ID of your app: Console In the Google Cloud console, you can view the URLs for your app's Instances , Services , and Versions .

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- You can use the following tools to see the region ID of your app: Console In the Google Cloud console, you can view the URLs for your app's Instances , Services , and Versions .

