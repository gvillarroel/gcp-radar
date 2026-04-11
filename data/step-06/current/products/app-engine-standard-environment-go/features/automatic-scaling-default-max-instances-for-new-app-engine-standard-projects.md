---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.749Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Automatic scaling default max_instances for new App Engine standard projects"
feature_slug: "automatic-scaling-default-max-instances-for-new-app-engine-standard-projects"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml"
keywords:
  - "max_instances in app.yaml"
  - "new standard projects max_instances"
  - "automatic scaling default maximum instances"
  - "default max_instances 20"
  - "automatic scaling instance limit"
  - "app.yaml"
  - "default 20 instances"
  - "max_instances"
---

# Automatic scaling default max_instances for new App Engine standard projects

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

New App Engine standard projects now default to a maximum of 20 instances for automatic scaling unless overridden in app.yaml.

## Extended Definition

New App Engine standard projects now default to a maximum of 20 instances for automatic scaling unless overridden in app.yaml.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Install and then initialize the Google Cloud CLI: Download the SDK Listing your Google Cloud console project IDs From the command line, run: gcloud projects list OK Creating a website to host on Google App Engine Basic structure for the project This guide uses the following structure for the project: app.yaml : Configure the settings of your App Engine application. www/ : Directory to store all of your static files, such as HTML, CSS, images, and JavaScript. css/ : Directory to store stylesheets. style.css : Basic stylesheet that formats the look and feel of your site. images/ : Optional directory to store images. index.html : An HTML file that displays content for your website. js/ : Optional directory to store JavaScript files.
- For example, app.yaml file for Python runtime may be created as follows: runtime : python314 handlers : - url : / static files : www / index . html upload : www / index . html - url : / ( . ) static files : www / \ 1 upload : www / ( . ) More reference information about the app.yaml file can be found in the app.yaml reference documentation .
- To deploy your app, run the following command from within the root directory of your application where the app.yaml file is located: gcloud app deploy Optional flags: Include the --project flag to specify an alternate Google Cloud console project ID to what you initialized as the default in the gcloud CLI.
- Creating the app.yaml file The app.yaml file is a configuration file that tells App Engine how to map URLs to your static files.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- Structure your files Your service will have the following file structure: go-app/ : directory for your Go service. app.yaml : Your service's configuration settings. main.go : Your application code.
- Create the app.yaml file Every App Engine project has an app.yaml configuration file which specifies your service's runtime environment settings.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions automatic scaling and default values in general, but does not define a specific default `max_instances` value or project-creation behavior.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Go 1.12+ app in the standard environment, for example: runtime : go126 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- For example, if you name your app.yaml file service-name-app.yaml or app.standard.yaml , then you must deploy your app using either: gcloud app deploy service - name - app . yaml gcloud app deploy app . standard . yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- You must first create the app.yaml file for the default service of your app before you can create and deploy app.yaml files for additional services.

