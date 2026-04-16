---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.300Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine build environment variables"
feature_slug: "app-engine-build-environment-variables"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref"
keywords:
  - "app"
  - "engine"
  - "build"
  - "environment"
  - "variables"
  - "time"
  - "now"
  - "generally"
---

# App Engine build environment variables

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Build-time environment variables support is now generally available for App Engine; App Engine standard environment now supports build environment variables (preview).

## Extended Definition

Build-time environment variables support is now generally available for App Engine; App Engine standard environment now supports build environment variables (preview).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/php/building-app](https://docs.cloud.google.com/appengine/docs/standard/php/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)

## Supporting Pages

### "Building an app with PHP \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deleting images When a user deletes a book from the app, this code removes the image from the Cloud Storage bucket. $object = $bucket->object($objectName); $object->delete(); Configuring the app You configure applications to run on App Engine using an app.yaml file , which specifies the application's runtime, environment variables, and other settings.
- Open the composer.json file to review all direct dependencies: { "require" : { "google/cloud-storage" : "^1.6" , "slim/slim" : "^4.0" , "slim/psr7" : "^1.0" , "slim/twig-view" : "^3.0" , "php-di/slim-bridge" : "^3.1" , "symfony/yaml" : "^5.2" }, "autoload" : { "psr-4" : { "Google\\Cloud\\Samples\\AppEngine\\GettingStarted\\" : "src" } } } To install your dependencies and produce a composer.lock file, run the following command: composer install The composer.lock file helps your app to retrieve the same versions of the packages you use across multiple builds and environments.
- To deploy your app, you need to edit the app.yaml configuration file: See https://cloud.google.com/appengine/docs/standard/php/config/appref for a complete list of app.yaml directives. runtime : php84 env variables : GOOGLE STORAGE BUCKET : "" populate these to use the "mysql" or "postres" backends CLOUDSQL CONNECTION NAME : "" CLOUDSQL USER : "" CLOUDSQL PASSWORD : "" Uncomment to give your database a name other than "bookshelf" CLOUDSQL DATABASE NAME: "" Set the GOOGLE STORAGE BUCKET variable to the name of your Cloud Storage bucket.
- For an app with minimal configuration requirements, the app.yaml file can be a single line: PHP 8.1 runtime : php81 PHP 7.4 runtime : php74 You can add further configuration options and application-specific environment variables into the app.yaml configuration file.

### "Building an app with PHP \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/building-app](https://docs.cloud.google.com/appengine/docs/standard/php/building-app)
- Source ID: `site-docs-reference-required-6`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deleting images When a user deletes a book from the app, this code removes the image from the Cloud Storage bucket. $object = $bucket->object($objectName); $object->delete(); Configuring the app You configure applications to run on App Engine using an app.yaml file , which specifies the application's runtime, environment variables, and other settings.
- Open the composer.json file to review all direct dependencies: { "require" : { "google/cloud-storage" : "^1.6" , "slim/slim" : "^4.0" , "slim/psr7" : "^1.0" , "slim/twig-view" : "^3.0" , "php-di/slim-bridge" : "^3.1" , "symfony/yaml" : "^5.2" }, "autoload" : { "psr-4" : { "Google\\Cloud\\Samples\\AppEngine\\GettingStarted\\" : "src" } } } To install your dependencies and produce a composer.lock file, run the following command: composer install The composer.lock file helps your app to retrieve the same versions of the packages you use across multiple builds and environments.
- To deploy your app, you need to edit the app.yaml configuration file: See https://cloud.google.com/appengine/docs/standard/php/config/appref for a complete list of app.yaml directives. runtime : php84 env variables : GOOGLE STORAGE BUCKET : "" populate these to use the "mysql" or "postres" backends CLOUDSQL CONNECTION NAME : "" CLOUDSQL USER : "" CLOUDSQL PASSWORD : "" Uncomment to give your database a name other than "bookshelf" CLOUDSQL DATABASE NAME: "" Set the GOOGLE STORAGE BUCKET variable to the name of your Cloud Storage bucket.
- For an app with minimal configuration requirements, the app.yaml file can be a single line: PHP 8.1 runtime : php81 PHP 7.4 runtime : php74 You can add further configuration options and application-specific environment variables into the app.yaml configuration file.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . build env variables Optional.
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- For Python, these variables are available in the os.environ dictionary: env variables : DJANGO SETTINGS MODULE : "myapp.settings" Also see the list of runtime environment variables that cannot be overwritten. error handlers Optional.

