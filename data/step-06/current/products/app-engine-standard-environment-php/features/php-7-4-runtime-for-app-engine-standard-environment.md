---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.303Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "PHP 7.4 runtime for App Engine standard environment"
feature_slug: "php-7-4-runtime-for-app-engine-standard-environment"
latest_feature_date: "2020-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/runtime"
keywords:
  - "php"
  - "runtime"
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "reached"
  - "availability"
---

# PHP 7.4 runtime for App Engine standard environment

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The PHP 7.4 runtime for App Engine standard environment reached general availability.

## Extended Definition

The PHP 7.4 runtime for App Engine standard environment reached general availability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)

## Supporting Pages

### "Runtime lifecycle \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-4`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- The App Engine standard environment runtimes use open source components that are maintained by their respective communities.
- End of support Important: Google will no longer apply security updates or patches to components of the runtime environment that have reached end of support.
- Upon notification, you should prepare to upgrade your application to a newer runtime that is supported in the standard environment.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

