---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.296Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "PHP 5 runtime support in App Engine standard"
feature_slug: "php-5-runtime-support-in-app-engine-standard"
latest_feature_date: "2026-01-31"
deprecation_date: "2026-01-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
keywords:
  - "php"
  - "runtime"
  - "app"
  - "engine"
  - "standard"
  - "deprecated"
  - "deployments"
  - "apps"
---

# PHP 5 runtime support in App Engine standard

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The PHP 5 runtime is deprecated in App Engine standard, and new deployments of PHP 5 apps are no longer supported; deprecated on 2026-01-31.

## Extended Definition

The PHP 5 runtime is deprecated in App Engine standard, and new deployments of PHP 5 apps are no longer supported; deprecated on 2026-01-31.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)

## Supporting Pages

### "Runtime lifecycle \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-4`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No 1 No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes May be disabled UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Patching OS Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- Deprecated If Google allowed your Organization to re-enable deployments in an unsupported runtime, Google will remove that ability once the runtime is deprecated.
- The App Engine standard environment runtimes use open source components that are maintained by their respective communities.

### "Migrate from PHP 5.5 to the latest PHP runtime \_|\_ App Engine migration\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- Source ID: `site-docs-reference-4`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compatibility issues between PHP 5.5 and the second-generation PHP runtimes The official PHP documentation provides information on migrating from different PHP versions: Migrating from PHP 5.5.x to PHP 5.6.x Migrating from PHP 5.6.x to PHP 7.0.x Migrating from PHP 7.0.x to PHP 7.1.x Migrating from PHP 7.1.x to PHP 7.2.x Migrating from PHP 7.2.x to PHP 7.3.x Migrating from PHP 7.3.x to PHP 7.4.x Migrating from PHP 7.4.x to PHP 8.0.x Migrating from PHP 8.0.x to PHP 8.1.x Key differences between PHP 5.5 and the second-generation PHP runtimes The following is a summary of the differences between the PHP 5.5 and the second-generation PHP runtimes in the App Engine standard environment: Memory usage differences Second-generation runtimes see a higher baseline of memory usage compared to first-generation runtimes.
- Migrate from the App Engine PHP SDK To reduce runtime migration effort and complexity, the App Engine standard environment lets you access many of legacy bundled services and APIs in the second-generation PHP runtime , such as Memcache.
- Running your application locally To test your application and run it locally: Locally install a version of PHP that corresponds to a second-generation PHP runtime available in the App Engine standard environment.
- The behavior of some elements in the app.yaml configuration file has been modified: Element Change type Description entrypoint Added Optionally , use this field to specify the command that will run when your app starts . threadsafe Deprecated All applications are presumed to be threadsafe, meaning an instance can handle multiple requests at the same time. api version Deprecated Previously required but not needed in the second-generation PHP runtimes. application readable Deprecated builtins Deprecated libraries Deprecated Arbitrary third party dependencies can be installed using a composer.json metadata file. handlers Modified The script field is optional and the only accepted value is auto .

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Directive Default Value in App Engine expose php Off memory limit -1 max execution time 0 error reporting E ALL & E DEPRECATED & E STRICT display errors Off display startup errors Off log errors On log errors max len 0 ignore repeated errors Off ignore repeated source Off html errors Off opcache.enable On opcache.validate timestamps Off opcache.memory consumption 32 Override these default directives by including them in a php.ini file for your app. tempnam() and sys get temp dir() support App Engine apps run in a security sandbox in which only the /tmp directory is writable and stored in the instance's RAM.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.

