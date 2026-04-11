---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.545Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Cloud SDK delivery of App Engine SDK functionality"
feature_slug: "cloud-sdk-delivery-of-app-engine-sdk-functionality"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/deploying-web-service"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "Cloud SDK provides App Engine functionality"
  - "standalone SDK removed"
  - "Cloud SDK distribution"
  - "gcloud app commands"
  - "gcloud app deploy"
  - "App Engine SDK in Cloud SDK"
  - "Cloud SDK"
  - "gcloud app"
---

# Cloud SDK delivery of App Engine SDK functionality

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Extended Definition

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/deploying-web-service](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/deploying-web-service)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Element Description <application> Not required if you deploy your app using Google Cloud SDK-based tooling, such as the gcloud app deploy command, IntelliJ plugins, Maven or Gradle plugins.
- Defining a service as: <service>service name</service > is supported only by gcloud app commands. <service-account> Optional.
- For example: <staging> <delete-jsps>false</delete-jsps> </staging> Staging option defaults The defaults for staging options are different depending on whether you use Google Cloud SDK-based tooling, such as the gcloud CLI, or the Google Cloud SDK-based Maven , Gradle , or IntelliJ plugins.
- Staging element App Engine SDK-based defaults - Google Cloud SDK-based defaults enable-jar-splitting false true jar-splitting-excludes N/A N/A disable-jar-jsps false false enable-jar-classes false true .

### "Deploy your web service \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/deploying-web-service](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/deploying-web-service)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy your service In your my-java-service folder, where your Maven POM or Gradle build file is located, run the following command in your terminal: gcloud app deploy Your source files are then uploaded to Cloud Storage.
- Key points Use gcloud app deploy and gcloud app browse to deploy and view your service.
- You can update your service at any time by running the gcloud app deploy command again.
- REGION ID .r.appspot.com , use the following command: gcloud app browse Services and versions You've just created and deployed a service on App Engine.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- You can update your service at any time by running the gcloud app deploy command.
- You must choose a location, which cannot be changed later. gcloud app create Learn more : Generally, select the region nearest to your app's users, but also consider the location of the other Google Cloud products and services that your app uses.
- REGION ID .r.appspot.com , run the following command: gcloud app browse Congratulations!

