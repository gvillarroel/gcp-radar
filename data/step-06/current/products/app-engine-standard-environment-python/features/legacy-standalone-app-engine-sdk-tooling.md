---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.136Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Legacy standalone App Engine SDK tooling"
feature_slug: "legacy-standalone-app-engine-sdk-tooling"
latest_feature_date: "2019-07-30"
deprecation_date: "2020-07-30"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "standalone"
  - "tooling"
  - "appcfg"
  - "legacy"
  - "sdk"
  - "engine"
  - "the"
  - "app"
---

# Legacy standalone App Engine SDK tooling

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

The AppCfg tooling and legacy standalone SDK installers (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated; deprecated on 2020-07-30.

## Extended Definition

The AppCfg tooling and legacy standalone SDK installers (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated; deprecated on 2020-07-30.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/services/access](https://docs.cloud.google.com/appengine/docs/standard/go/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- You should use the appengine-web.xml file for configuring your app only if you are migrating an existing app from the App Engine Java 8 runtime to the latest supported Java version and you want to use the legacy bundled services .
- Element Description <application> Not required if you deploy your app using Google Cloud SDK-based tooling, such as the gcloud app deploy command, IntelliJ plugins, Maven or Gradle plugins.
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . <entrypoint> Optional and only for second-generation runtimes.
- You can find the Document Type Definition and schema specifications for the appengine-web.xml in the SDK's docs/ directory.

### "Access legacy bundled services for Go \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/services/access](https://docs.cloud.google.com/appengine/docs/standard/go/services/access)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Installing the App Engine services SDK In order to call the legacy bundled services APIs with Go, you must use the latest SDK.
- Follow these steps: Update your app.yaml file to include the following line: app engine apis : true Add a reference to the latest SDK in your go.mod file by running go get in the terminal as follows: go get google . golang . org / appengine / v2 The main difference when upgrading to Go is using v2 of the App Engine services SDK.
- For example, if using Memcache, do the following: import ( "google.golang.org/appengine/v2" "google.golang.org/appengine/v2/memcache" ) For the full list of available package names, see the legacy bundled services API references documentation .
- If you run go mod tidy and find that it is still importing an older version of the App Engine services SDK for Go, you have probably missed upgrading an import statement.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.

