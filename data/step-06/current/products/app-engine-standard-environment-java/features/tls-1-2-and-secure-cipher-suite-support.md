---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.865Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "TLS 1.2+ and secure cipher suite support"
feature_slug: "tls-1-2-and-secure-cipher-suite-support"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "tls"
  - "secure"
  - "cipher"
  - "suite"
  - "app"
  - "engine"
  - "standard"
  - "environment"
---

# TLS 1.2+ and secure cipher suite support

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment now supports TLS version 1.2 and later with a corresponding secure set of cipher suites.

## Extended Definition

App Engine standard environment now supports TLS version 1.2 and later with a corresponding secure set of cipher suites.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby You can use Firestore in Datastore mode (Datastore) for storing data for your applications that run in the standard environment.
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Java app in the standard environment, for example: runtime: java25 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- For a Maven project, the standard location for app.yaml file is under the src/main/appengine directory.

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

