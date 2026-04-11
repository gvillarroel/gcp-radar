---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.352Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine region-ID URL rollout for existing apps"
feature_slug: "app-engine-region-id-url-rollout-for-existing-apps"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
keywords:
  - "rollout"
  - "existing"
  - "id"
  - "url"
  - "region"
  - "engine"
  - "for"
  - "app"
---

# App Engine region-ID URL rollout for existing apps

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Existing App Engine apps are migrated gradually to the region-ID URL format, with no required action when IDs are introduced.

## Extended Definition

Existing App Engine apps are migrated gradually to the region-ID URL format, with no required action when IDs are introduced.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For existing apps created before this date, the region ID is optional in the URL.
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For existing apps created before this date, the region ID is optional in the URL.
- This idle timeout configuration isn't the same as the overall request deadline for scaling, or the URL Fetch API deadline that you configure using appengine.api.urlfetch.defaultDeadline . <inbound-services> Optional.
- To determine how long a connection remains inactive without any data transmission before the client closes it, configure an idle timeout using the following syntax: <env-variables> <env-var name="APPENGINE API CALLS IDLE TIMEOUT MS" value="TIMEOUT IN MS" /> </env-variables> Replace TIMEOUT IN MS with the required timeout in milliseconds.

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For existing apps created before this date, the region ID is optional in the URL.
- Run the following command to install the gcloud component that includes the App Engine extension for Go: gcloud components install app - engine - go App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Additional prerequisites Initialize your App Engine app with your project and choose its region: gcloud app create -- project =[ YOUR PROJECT ID ] When prompted, select the region where you want to locate your App Engine application.

