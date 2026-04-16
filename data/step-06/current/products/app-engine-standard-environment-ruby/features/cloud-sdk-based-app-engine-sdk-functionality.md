---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.400Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Cloud SDK-based App Engine SDK functionality"
feature_slug: "cloud-sdk-based-app-engine-sdk-functionality"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "sdk"
  - "based"
  - "app"
  - "engine"
  - "functionality"
  - "now"
  - "delivered"
  - "exclusively"
---

# Cloud SDK-based App Engine SDK functionality

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Extended Definition

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Customizing the .NET Runtime \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Customizing the .NET Runtime Stay organized with collections Save and categorize content based on your preferences.
- You can extend the .NET runtime to add additional functionality by customizing the Docker image.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- How apps access the App Engine legacy bundled services In runtime migration scenarios, you often also have the option to use Google Cloud products that offer similar functionality as the legacy bundled services.
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root-2`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Vary : To enable the cache to return different responses for a URL based on headers that are sent in the request, set one or more of the following values in the Vary response header: Accept , Accept-Encoding , Origin , or X-Origin Due to the potential for high cardinality, data won't be cached for other Vary values.
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .

