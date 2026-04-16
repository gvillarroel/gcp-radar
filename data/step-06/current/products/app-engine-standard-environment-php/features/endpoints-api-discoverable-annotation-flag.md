---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.333Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Endpoints API discoverable annotation flag"
feature_slug: "endpoints-api-discoverable-annotation-flag"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7"
keywords:
  - "endpoints"
  - "discoverable"
  - "annotation"
  - "flag"
  - "adds"
  - "boolean"
  - "parameter"
  - "let"
---

# Endpoints API discoverable annotation flag

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Endpoints API adds a discoverable boolean parameter to the @Api annotation to let developers disable API discovery.

## Extended Definition

Endpoints API adds a discoverable boolean parameter to the @Api annotation to let developers disable API discovery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php7](https://docs.cloud.google.com/appengine/docs/standard/php7)

## Supporting Pages

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the standard CGI parameters, App Engine adds some additional useful keys: GAE APPLICATION - Current app's Google Cloud project ID.
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- The optional flags must come before the front controller path: entrypoint: serve --workers=2 --enable-dynamic-workers path/to/index.php You can deploy a long-running worker process by setting the entrypoint element to the filepath of the worker process: entrypoint: php long-running-worker-file.php If the entrypoint element executes a script with a long-running process, such as a Pub/Sub Worker subscribed to a topic, do not use the serve command.
- For best results, set the values for the --workers flag on the serve command and the max concurrent requests element to be the same number. --enable-dynamic-workers : specifies that you'd like the php-fpm workers to be spawned only as needed.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7](https://docs.cloud.google.com/appengine/docs/standard/php7)
- Source ID: `site-docs-reference-4`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the standard CGI parameters, App Engine adds some additional useful keys: GAE APPLICATION - Current app's Google Cloud project ID.
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- The optional flags must come before the front controller path: entrypoint: serve --workers=2 --enable-dynamic-workers path/to/index.php You can deploy a long-running worker process by setting the entrypoint element to the filepath of the worker process: entrypoint: php long-running-worker-file.php If the entrypoint element executes a script with a long-running process, such as a Pub/Sub Worker subscribed to a topic, do not use the serve command.
- For best results, set the values for the --workers flag on the serve command and the max concurrent requests element to be the same number. --enable-dynamic-workers : specifies that you'd like the php-fpm workers to be spawned only as needed.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the standard CGI parameters, App Engine adds some additional useful keys: GAE APPLICATION - Current app's Google Cloud project ID.
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- The optional flags must come before the front controller path: entrypoint: serve --workers=2 --enable-dynamic-workers path/to/index.php You can deploy a long-running worker process by setting the entrypoint element to the filepath of the worker process: entrypoint: php long-running-worker-file.php If the entrypoint element executes a script with a long-running process, such as a Pub/Sub Worker subscribed to a topic, do not use the serve command.
- For best results, set the values for the --workers flag on the serve command and the max concurrent requests element to be the same number. --enable-dynamic-workers : specifies that you'd like the php-fpm workers to be spawned only as needed.

