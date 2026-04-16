---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.724Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine regionalized application URLs"
feature_slug: "app-engine-regionalized-application-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "app"
  - "engine"
  - "regionalized"
  - "application"
  - "urls"
  - "introduced"
  - "optional"
  - "region"
---

# App Engine regionalized application URLs

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine introduced optional region-ID-based application URLs to improve routing reliability and efficiency.

## Extended Definition

App Engine introduced optional region-ID-based application URLs to improve routing reliability and efficiency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- Google Accounts sign-in and sign-out are always performed using a secure connection, unrelated to how the application's URLs are configured. static dir Optional.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install and then initialize the Google Cloud CLI: Download the SDK Listing your Google Cloud console project IDs From the command line, run: gcloud projects list OK Creating a website to host on Google App Engine Basic structure for the project This guide uses the following structure for the project: app.yaml : Configure the settings of your App Engine application. www/ : Directory to store all of your static files, such as HTML, CSS, images, and JavaScript. css/ : Directory to store stylesheets. style.css : Basic stylesheet that formats the look and feel of your site. images/ : Optional directory to store images. index.html : An HTML file that displays content for your website. js/ : Optional directory to store JavaScript files.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Store this file in your www directory. < html > < head > < title>Hello , world ! < / title > < link rel = "stylesheet" type = "text/css" href = "/css/style.css" > < / head > < body > < h1>Hello , world ! < / h1 > < p > This is a simple static HTML file that will be served from Google App Engine . < / p > < / body > < / html > Deploying your application to App Engine When you deploy your application files, your website will be uploaded to App Engine.
- To deploy your app, run the following command from within the root directory of your application where the app.yaml file is located: gcloud app deploy Optional flags: Include the --project flag to specify an alternate Google Cloud console project ID to what you initialized as the default in the gcloud CLI.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .

