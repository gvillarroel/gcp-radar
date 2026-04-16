---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.395Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine region expansion to Warsaw"
feature_slug: "app-engine-region-expansion-to-warsaw"
latest_feature_date: "2021-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "app"
  - "engine"
  - "region"
  - "expansion"
  - "warsaw"
  - "adds"
  - "availability"
  - "europe"
---

# App Engine region expansion to Warsaw

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Adds App Engine availability in the europe-central2 (Warsaw) region.

## Extended Definition

Adds App Engine availability in the europe-central2 (Warsaw) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Additional prerequisites Initialize your App Engine app with your project and choose its region: gcloud app create --project=[YOUR PROJECT ID] When prompted, select the region where you want to locate your App Engine application.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.

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

