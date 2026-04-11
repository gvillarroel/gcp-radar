---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.151Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine custom domain management via gcloud and Admin API"
feature_slug: "app-engine-custom-domain-management-via-gcloud-and-admin-api"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
keywords:
  - "management"
  - "domain"
  - "gcloud"
  - "custom"
  - "via"
  - "engine"
  - "and"
  - "app"
---

# App Engine custom domain management via gcloud and Admin API

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Custom domain mapping operations are now generally available through gcloud commands and App Engine Admin API methods, including domains verify and authorizedDomains.list.

## Extended Definition

Custom domain mapping operations are now generally available through gcloud commands and App Engine Admin API methods, including domains verify and authorizedDomains.list.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- To initialize the gcloud CLI, run the following command: gcloud init Create your App Engine app and its associated resources.
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- You must choose a location, which cannot be changed later. gcloud app create Learn more : Generally, select the region nearest to your app's users, but also consider the location of the other Google Cloud products and services that your app uses.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- With warmup requests enabled, the App Engine infrastructure issues GET requests to / ah/warmup , initializing <load-on-startup> servlets, ServletContextListeners , and custom warmup servlets, which allow you to initialize your application's code as it requires.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com , run the following command: gcloud app browse What's next Serve your App Engine hosted website from a custom domain .
- Install and then initialize the Google Cloud CLI: Download the SDK Listing your Google Cloud console project IDs From the command line, run: gcloud projects list OK Creating a website to host on Google App Engine Basic structure for the project This guide uses the following structure for the project: app.yaml : Configure the settings of your App Engine application. www/ : Directory to store all of your static files, such as HTML, CSS, images, and JavaScript. css/ : Directory to store stylesheets. style.css : Basic stylesheet that formats the look and feel of your site. images/ : Optional directory to store images. index.html : An HTML file that displays content for your website. js/ : Optional directory to store JavaScript files.
- Before you begin Before you can host your website on App Engine: Create a new Google Cloud console project or retrieve the project ID of an existing project to use: Go to the Projects page Tip: You can retrieve a list of your existing project IDs with the gcloud command line tool .
- To deploy your app, run the following command from within the root directory of your application where the app.yaml file is located: gcloud app deploy Optional flags: Include the --project flag to specify an alternate Google Cloud console project ID to what you initialized as the default in the gcloud CLI.

