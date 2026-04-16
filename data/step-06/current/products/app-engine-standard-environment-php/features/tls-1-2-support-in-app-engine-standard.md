---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.296Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "TLS 1.2+ support in App Engine standard"
feature_slug: "tls-1-2-support-in-app-engine-standard"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app"
keywords:
  - "tls"
  - "app"
  - "engine"
  - "standard"
  - "now"
  - "supports"
  - "later"
  - "corresponding"
---

# TLS 1.2+ support in App Engine standard

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine standard now supports TLS 1.2 and later with a corresponding secure set of cipher suites in GA.

## Extended Definition

App Engine standard now supports TLS 1.2 and later with a corresponding secure set of cipher suites in GA.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app)

## Supporting Pages

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple PHP app in the standard environment, for example: runtime: php85 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- For example, if you name your app.yaml file service-name-app.yaml or app.standard.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.standard.yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Ingress settings Stay organized with collections Save and categorize content based on your preferences.
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- For requests from other App Engine services or from Cloud Run or Cloud Run functions in the same project, connect the service or function to a VPC network and route all egress through the connector, as described in Connecting to a Shared VPC network .

### "Building an app with PHP \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To deploy your app, you need to edit the app.yaml configuration file: See https://cloud.google.com/appengine/docs/standard/php/config/appref for a complete list of app.yaml directives. runtime : php84 env variables : GOOGLE STORAGE BUCKET : "" populate these to use the "mysql" or "postres" backends CLOUDSQL CONNECTION NAME : "" CLOUDSQL USER : "" CLOUDSQL PASSWORD : "" Uncomment to give your database a name other than "bookshelf" CLOUDSQL DATABASE NAME: "" Set the GOOGLE STORAGE BUCKET variable to the name of your Cloud Storage bucket.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Building an app with PHP Stay organized with collections Save and categorize content based on your preferences.
- Navigate to the getting-started directory. cd php-docs-samples/appengine/standard/getting-started Specify dependencies with composer.json The app uses a front controller to route requests.
- Open the composer.json file to review all direct dependencies: { "require" : { "google/cloud-storage" : "^1.6" , "slim/slim" : "^4.0" , "slim/psr7" : "^1.0" , "slim/twig-view" : "^3.0" , "php-di/slim-bridge" : "^3.1" , "symfony/yaml" : "^5.2" }, "autoload" : { "psr-4" : { "Google\\Cloud\\Samples\\AppEngine\\GettingStarted\\" : "src" } } } To install your dependencies and produce a composer.lock file, run the following command: composer install The composer.lock file helps your app to retrieve the same versions of the packages you use across multiple builds and environments.

