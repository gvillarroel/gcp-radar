---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.333Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "PHP runtime dynamic fileinfo extension"
feature_slug: "php-runtime-dynamic-fileinfo-extension"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7"
keywords:
  - "php"
  - "runtime"
  - "dynamic"
  - "fileinfo"
  - "extension"
  - "now"
  - "supports"
  - "dynamically"
---

# PHP runtime dynamic fileinfo extension

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The PHP runtime now supports the fileinfo extension as a dynamically loadable extension.

## Extended Definition

The PHP runtime now supports the fileinfo extension as a dynamically loadable extension.

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
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- The optional flags must come before the front controller path: entrypoint: serve --workers=2 --enable-dynamic-workers path/to/index.php You can deploy a long-running worker process by setting the entrypoint element to the filepath of the worker process: entrypoint: php long-running-worker-file.php If the entrypoint element executes a script with a long-running process, such as a Pub/Sub Worker subscribed to a topic, do not use the serve command.
- For best results, set the values for the --workers flag on the serve command and the max concurrent requests element to be the same number. --enable-dynamic-workers : specifies that you'd like the php-fpm workers to be spawned only as needed.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- The optional flags must come before the front controller path: entrypoint: serve --workers=2 --enable-dynamic-workers path/to/index.php You can deploy a long-running worker process by setting the entrypoint element to the filepath of the worker process: entrypoint: php long-running-worker-file.php If the entrypoint element executes a script with a long-running process, such as a Pub/Sub Worker subscribed to a topic, do not use the serve command.
- For best results, set the values for the --workers flag on the serve command and the max concurrent requests element to be the same number. --enable-dynamic-workers : specifies that you'd like the php-fpm workers to be spawned only as needed.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7](https://docs.cloud.google.com/appengine/docs/standard/php7)
- Source ID: `site-docs-reference-4`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- The optional flags must come before the front controller path: entrypoint: serve --workers=2 --enable-dynamic-workers path/to/index.php You can deploy a long-running worker process by setting the entrypoint element to the filepath of the worker process: entrypoint: php long-running-worker-file.php If the entrypoint element executes a script with a long-running process, such as a Pub/Sub Worker subscribed to a topic, do not use the serve command.
- For best results, set the values for the --workers flag on the serve command and the max concurrent requests element to be the same number. --enable-dynamic-workers : specifies that you'd like the php-fpm workers to be spawned only as needed.

