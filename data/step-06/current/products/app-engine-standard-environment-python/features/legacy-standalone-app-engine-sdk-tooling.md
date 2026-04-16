---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.276Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Legacy standalone App Engine SDK tooling"
feature_slug: "legacy-standalone-app-engine-sdk-tooling"
latest_feature_date: "2019-07-30"
deprecation_date: "2020-07-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
  - "https://docs.cloud.google.com/appengine/docs/standard/community"
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
keywords:
  - "legacy"
  - "standalone"
  - "app"
  - "engine"
  - "sdk"
  - "tooling"
  - "appcfg"
  - "installers"
---

# Legacy standalone App Engine SDK tooling

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The AppCfg tooling and legacy standalone SDK installers (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated; deprecated on 2020-07-30.

## Extended Definition

The AppCfg tooling and legacy standalone SDK installers (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated; deprecated on 2020-07-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- [https://docs.cloud.google.com/appengine/docs/standard/community](https://docs.cloud.google.com/appengine/docs/standard/community)
- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)

## Supporting Pages

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-reference-required-2`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- How apps access the App Engine legacy bundled services In runtime migration scenarios, you often also have the option to use Google Cloud products that offer similar functionality as the legacy bundled services.

### "App Engine community \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/community](https://docs.cloud.google.com/appengine/docs/standard/community)
- Source ID: `site-docs-reference-required-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use and contribute to third-party libraries There are several third-party projects based on App Engine on the popular code hosting platforms: GitHub https://github.com/search?q=%22Google+app+engine%22&type=repositories Bitbucket https://bitbucket.org/repo/all?name=gae Watch videos The Google Cloud team regularly posts videos about using App Engine on YouTube .
- There are many ways to get involved in the App Engine developer community, whether you want to learn from other App Engine developers and community resources, contribute to open source projects, or share your own knowledge and experience.
- This is a great place for App Engine team members and the developer community to discuss and track implementations of features or resolution of bug fixes, as well as share workarounds and patches to the SDK.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine community Stay organized with collections Save and categorize content based on your preferences.

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-reference-required-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install and then initialize the Google Cloud CLI: Download the SDK Listing your Google Cloud console project IDs From the command line, run: gcloud projects list OK Creating a website to host on Google App Engine Basic structure for the project This guide uses the following structure for the project: app.yaml : Configure the settings of your App Engine application. www/ : Directory to store all of your static files, such as HTML, CSS, images, and JavaScript. css/ : Directory to store stylesheets. style.css : Basic stylesheet that formats the look and feel of your site. images/ : Optional directory to store images. index.html : An HTML file that displays content for your website. js/ : Optional directory to store JavaScript files.
- Store this file in your www directory. < html > < head > < title>Hello , world ! < / title > < link rel = "stylesheet" type = "text/css" href = "/css/style.css" > < / head > < body > < h1>Hello , world ! < / h1 > < p > This is a simple static HTML file that will be served from Google App Engine . < / p > < / body > < / html > Deploying your application to App Engine When you deploy your application files, your website will be uploaded to App Engine.
- Before you begin Before you can host your website on App Engine: Create a new Google Cloud console project or retrieve the project ID of an existing project to use: Go to the Projects page Tip: You can retrieve a list of your existing project IDs with the gcloud command line tool .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Hosting a static website on App Engine Stay organized with collections Save and categorize content based on your preferences.

