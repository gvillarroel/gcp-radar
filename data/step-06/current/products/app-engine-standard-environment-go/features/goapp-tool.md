---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.726Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "goapp tool"
feature_slug: "goapp-tool"
latest_feature_date: "2019-09-27"
deprecation_date: "2019-09-27"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
keywords:
  - "goapp"
  - "tool"
  - "command"
  - "line"
  - "was"
  - "removed"
  - "app"
  - "engine"
---

# goapp tool

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The goapp command-line tool was removed from App Engine Go tooling; deprecated on 2019-09-27.

## Extended Definition

The goapp command-line tool was removed from App Engine Go tooling; deprecated on 2019-09-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- To stop the local server from the command line, press the following: macOS or Linux: Control+C Windows: Control+Break Specify application IDs To access your App ID in the local server, for example to spoof an email address, use the get application id() function.
- Command-line arguments For the local development server command options, see Local development server options .
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- To stop the local server from the command line, press the following: macOS or Linux: Control+C Windows: Control+Break Specify application IDs To access your App ID in the local server, for example to spoof an email address, use the get application id() function.
- Command-line arguments For the local development server command options, see Local development server options .
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you can host your website on App Engine: Create a new Google Cloud console project or retrieve the project ID of an existing project to use: Go to the Projects page Tip: You can retrieve a list of your existing project IDs with the gcloud command line tool .
- Install and then initialize the Google Cloud CLI: Download the SDK Listing your Google Cloud console project IDs From the command line, run: gcloud projects list OK Creating a website to host on Google App Engine Basic structure for the project This guide uses the following structure for the project: app.yaml : Configure the settings of your App Engine application. www/ : Directory to store all of your static files, such as HTML, CSS, images, and JavaScript. css/ : Directory to store stylesheets. style.css : Basic stylesheet that formats the look and feel of your site. images/ : Optional directory to store images. index.html : An HTML file that displays content for your website. js/ : Optional directory to store JavaScript files.
- REGION ID .r.appspot.com , run the following command: gcloud app browse What's next Serve your App Engine hosted website from a custom domain .
- Example: -v [YOUR VERSION ID] To learn more about deploying your app from the command line, see Deploying your application .

