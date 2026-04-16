---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.301Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine standard environment PHP 8.1 runtime"
feature_slug: "app-engine-standard-environment-php-8-1-runtime"
latest_feature_date: "2022-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app"
keywords:
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "php"
  - "runtime"
  - "generally"
  - "available"
---

# App Engine standard environment PHP 8.1 runtime

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The PHP 8.1 runtime for App Engine standard environment is generally available; The PHP 8.1 runtime for App Engine standard environment is available at preview.

## Extended Definition

The PHP 8.1 runtime for App Engine standard environment is generally available; The PHP 8.1 runtime for App Engine standard environment is available at preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app)

## Supporting Pages

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback PHP runtime environment Stay organized with collections Save and categorize content based on your preferences.
- To specify PHP for the App Engine standard environment, declare the runtime in the app.yaml file.
- GAE ENV - The App Engine environment (standard or flexible) where your app runs.

### "Building an app with PHP \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To deploy your app, you need to edit the app.yaml configuration file: See https://cloud.google.com/appengine/docs/standard/php/config/appref for a complete list of app.yaml directives. runtime : php84 env variables : GOOGLE STORAGE BUCKET : "" populate these to use the "mysql" or "postres" backends CLOUDSQL CONNECTION NAME : "" CLOUDSQL USER : "" CLOUDSQL PASSWORD : "" Uncomment to give your database a name other than "bookshelf" CLOUDSQL DATABASE NAME: "" Set the GOOGLE STORAGE BUCKET variable to the name of your Cloud Storage bucket.
- Deleting images When a user deletes a book from the app, this code removes the image from the Cloud Storage bucket. $object = $bucket->object($objectName); $object->delete(); Configuring the app You configure applications to run on App Engine using an app.yaml file , which specifies the application's runtime, environment variables, and other settings.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Building an app with PHP Stay organized with collections Save and categorize content based on your preferences.
- For a deeper dive into how App Engine works, see the PHP runtime environment .

