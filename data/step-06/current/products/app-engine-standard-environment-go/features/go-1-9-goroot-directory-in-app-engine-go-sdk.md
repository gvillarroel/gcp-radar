---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.725Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go 1.9 GOROOT directory in App Engine Go SDK"
feature_slug: "go-1-9-goroot-directory-in-app-engine-go-sdk"
latest_feature_date: "2019-09-27"
deprecation_date: "2019-09-27"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies"
keywords:
  - "go"
  - "goroot"
  - "directory"
  - "app"
  - "engine"
  - "sdk"
  - "was"
  - "removed"
---

# Go 1.9 GOROOT directory in App Engine Go SDK

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The Go 1.9 GOROOT directory was removed from the App Engine Go SDK distribution; deprecated on 2019-09-27.

## Extended Definition

The Go 1.9 GOROOT directory was removed from the App Engine Go SDK distribution; deprecated on 2019-09-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)

## Supporting Pages

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install and then initialize the Google Cloud CLI: Download the SDK Listing your Google Cloud console project IDs From the command line, run: gcloud projects list OK Creating a website to host on Google App Engine Basic structure for the project This guide uses the following structure for the project: app.yaml : Configure the settings of your App Engine application. www/ : Directory to store all of your static files, such as HTML, CSS, images, and JavaScript. css/ : Directory to store stylesheets. style.css : Basic stylesheet that formats the look and feel of your site. images/ : Optional directory to store images. index.html : An HTML file that displays content for your website. js/ : Optional directory to store JavaScript files.
- Store this file in your www directory. < html > < head > < title>Hello , world ! < / title > < link rel = "stylesheet" type = "text/css" href = "/css/style.css" > < / head > < body > < h1>Hello , world ! < / h1 > < p > This is a simple static HTML file that will be served from Google App Engine . < / p > < / body > < / html > Deploying your application to App Engine When you deploy your application files, your website will be uploaded to App Engine.
- To deploy your app, run the following command from within the root directory of your application where the app.yaml file is located: gcloud app deploy Optional flags: Include the --project flag to specify an alternate Google Cloud console project ID to what you initialized as the default in the gcloud CLI.
- Before you begin Before you can host your website on App Engine: Create a new Google Cloud console project or retrieve the project ID of an existing project to use: Go to the Projects page Tip: You can retrieve a list of your existing project IDs with the gcloud command line tool .

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- Note that the scheduler might spawn a new instance before the actual maximum number of requests is reached. max pending latency The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.
- For example, if App Engine calculates that 5 instances are necessary to serve traffic, and min idle instances is set to 2, App Engine will run 7 instances (5, calculated based on traffic, plus 2 additional per min idle instances ).

### "Specify dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Go 1.14 and later, if your app's root directory contains a directory named vendor , the go build command and the App Engine deployment process use the packages in the vendor directory instead of downloading modules.
- For Go 1.13 and later, App Engine uses module-aware mode by default, unless GO111MODULE overrides the default or a go.mod file doesn't exist in the app's directory.
- If your Go 1.12 app is anywhere in the $GOPATH/src directory tree, App Engine follows GOPATH mode even if you've defined a go.mod file for your app.
- App Engine searches the current directory and the successive parent directories until it finds a go.mod file .

