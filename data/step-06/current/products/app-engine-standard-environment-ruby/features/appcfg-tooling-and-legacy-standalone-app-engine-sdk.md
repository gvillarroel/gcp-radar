---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.353Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "AppCfg tooling and legacy standalone App Engine SDK"
feature_slug: "appcfg-tooling-and-legacy-standalone-app-engine-sdk"
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
  - "and"
  - "app"
---

# AppCfg tooling and legacy standalone App Engine SDK

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

The AppCfg tooling and legacy standalone App Engine SDK distributions (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated with planned support removal; deprecated on 2020-07-30.

## Extended Definition

The AppCfg tooling and legacy standalone App Engine SDK distributions (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated with planned support removal; deprecated on 2020-07-30.

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
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- You should use the appengine-web.xml file for configuring your app only if you are migrating an existing app from the App Engine Java 8 runtime to the latest supported Java version and you want to use the legacy bundled services .
- Element Description <application> Not required if you deploy your app using Google Cloud SDK-based tooling, such as the gcloud app deploy command, IntelliJ plugins, Maven or Gradle plugins.
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . <entrypoint> Optional and only for second-generation runtimes.
- You can find the Document Type Definition and schema specifications for the appengine-web.xml in the SDK's docs/ directory.

### "Access legacy bundled services for Go \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/services/access](https://docs.cloud.google.com/appengine/docs/standard/go/services/access)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Go Stay organized with collections Save and categorize content based on your preferences.
- If you run go mod tidy and find that it is still importing an older version of the App Engine services SDK for Go, you have probably missed upgrading an import statement.
- Installing the App Engine services SDK In order to call the legacy bundled services APIs with Go, you must use the latest SDK.
- Migration considerations You should be aware of the following considerations if you are migrating to the Go runtime and your app uses legacy bundled services: To test the legacy bundled services functionality in your Go app, run your application in your local environment with the development tools that you usually use, such as go run .

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .

