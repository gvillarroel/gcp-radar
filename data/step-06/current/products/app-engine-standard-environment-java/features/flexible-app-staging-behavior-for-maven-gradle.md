---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.392Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Flexible app staging behavior for Maven/Gradle"
feature_slug: "flexible-app-staging-behavior-for-maven-gradle"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml"
keywords:
  - "src/main/appengine"
  - "deployment config files"
  - "target directory"
  - "Gradle flexible staging"
  - "Maven flexible staging"
  - "staging path"
  - "flexible app staging"
  - "app.yaml"
---

# Flexible app staging behavior for Maven/Gradle

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Staging flexible apps with Maven/Gradle now copies only app.yaml into build/target, with deployment config files expected from src/main/appengine.

## Extended Definition

Staging flexible apps with Maven/Gradle now copies only app.yaml into build/target, with deployment config files expected from src/main/appengine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : java25 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : - url : /stylesheets static dir : stylesheets - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description build env variables Optional.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- You must first create the app.yaml file for the default service before you can create and deploy app.yaml files for additional services within your app.
- You can enable the service for an app by including an inbound services section in the app.yaml file. warmup Enables warmup requests.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- You must first create the app.yaml file for the default service before you can create and deploy app.yaml files for additional services within your app.
- You can enable the service for an app by including an inbound services section in the app.yaml file. warmup Enables warmup requests.

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- May 02, 2017 Feature New maven goals for configuration deployment : appengine:deployCron , appengine:deployDispatch , appengine:deployDos , appengine:deployIndex , appengine:deployQueue Feature Staging flexible apps with maven/gradle only copies app.yaml into build/target directory.
- App Engine APIs can only be called from the thread that handles a web request or from threads created using ThreadManager WEB-INF/appengine-web.xml must be used for configuration, app.yaml is not currently supported.
- To override the default, specify a new max instances value in your app.yaml file, and deploy a new version or redeploy over an existing version.
- If you don't use legacy bundled services, update the version in your app.yaml file.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For a Maven project, the standard location for app.yaml file is under the src/main/appengine directory.
- Generally, your app.yaml file requires only the runtime element for a simple Java app in the standard environment, for example: runtime: java25 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- The following is a sample Maven project structure: MyDir/ pom.xml [index.yaml] [cron.yaml] [dispatch.yaml] src/main/ appengine/ app.yaml java/com.example.mycode/ MyCode.java If you have more than one JAR file in your project directory or want to specify a custom entrypoint, you must specify it in the entrypoint element of your app.yaml file.
- For example, if you name your app.yaml file service-name-app.yaml or app.standard.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.standard.yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .

