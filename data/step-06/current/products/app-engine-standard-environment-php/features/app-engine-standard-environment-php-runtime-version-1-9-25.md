---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.337Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine Standard Environment PHP runtime version 1.9.25"
feature_slug: "app-engine-standard-environment-php-runtime-version-1-9-25"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle"
keywords:
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "php"
  - "runtime"
  - "version"
  - "25"
---

# App Engine Standard Environment PHP runtime version 1.9.25

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

This release introduces PHP runtime version 1.9.25 for Google App Engine standard environment.

## Extended Definition

This release introduces PHP runtime version 1.9.25 for Google App Engine standard environment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)

## Supporting Pages

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

### "Runtime lifecycle \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-4`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- The App Engine standard environment runtimes use open source components that are maintained by their respective communities.
- When a language version is no longer actively maintained by the respective community, App Engine will also stop providing maintenance and support for that language runtime.
- Upon notification, you should prepare to upgrade your application to a newer runtime that is supported in the standard environment.

