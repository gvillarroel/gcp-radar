---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.396Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine region expansion to Jakarta"
feature_slug: "app-engine-region-expansion-to-jakarta"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "app"
  - "engine"
  - "region"
  - "expansion"
  - "jakarta"
  - "adds"
  - "availability"
  - "asia"
---

# App Engine region expansion to Jakarta

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Adds App Engine availability in the asia-southeast2 (Jakarta) region.

## Extended Definition

Adds App Engine availability in the asia-southeast2 (Jakarta) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Additional prerequisites Initialize your App Engine app with your project and choose its region: gcloud app create --project=[YOUR PROJECT ID] When prompted, select the region where you want to locate your App Engine application.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Create a .NET app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-root-2`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.

