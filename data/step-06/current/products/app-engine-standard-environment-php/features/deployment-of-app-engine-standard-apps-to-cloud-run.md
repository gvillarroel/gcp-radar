---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.296Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Deployment of App Engine standard apps to Cloud Run"
feature_slug: "deployment-of-app-engine-standard-apps-to-cloud-run"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/payment-instrument"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7"
keywords:
  - "deployment"
  - "app"
  - "engine"
  - "standard"
  - "apps"
  - "run"
  - "environment"
  - "can"
---

# Deployment of App Engine standard apps to Cloud Run

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment apps can be migrated to Cloud Run using the gcloud beta app migrate-to-run command.

## Extended Definition

App Engine standard environment apps can be migrated to Cloud Run using the gcloud beta app migrate-to-run command.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/payment-instrument](https://docs.cloud.google.com/appengine/docs/standard/payment-instrument)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php7](https://docs.cloud.google.com/appengine/docs/standard/php7)

## Supporting Pages

### "Payment method required for all App Engine runtimes \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/payment-instrument](https://docs.cloud.google.com/appengine/docs/standard/payment-instrument)
- Source ID: `site-docs-reference-4`
- Final score: 61
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Shutting down instance." What you need to do You will need to add a payment method to your project if you have App Engine apps using the Java 8, Python 2.7, PHP 5, and Go 1.11 runtimes in the App Engine standard environment.
- This requirement applies to apps in all App Engine runtimes, including Java 8, Python 2.7, PHP 5, and Go 1.11 apps in the App Engine standard environment.
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Payment method required for all App Engine runtimes Stay organized with collections Save and categorize content based on your preferences.
- In addition, all App Engine runtimes now use Cloud Build to build apps into a container during the deployment process.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7](https://docs.cloud.google.com/appengine/docs/standard/php7)
- Source ID: `site-docs-reference-4`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

