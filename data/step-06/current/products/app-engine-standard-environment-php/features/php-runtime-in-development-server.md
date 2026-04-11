---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.581Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "PHP runtime in Development Server"
feature_slug: "php-runtime-in-development-server"
latest_feature_date: "2015-08-14"
deprecation_date: "2015-08-14"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/config/php_ini"
keywords:
  - "development"
  - "server"
  - "longer"
  - "no"
  - "runtime"
  - "php"
  - "the"
  - "in"
---

# PHP runtime in Development Server

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

The Development Server no longer supports the php runtime and requires using php55 instead; deprecated on 2015-08-14.

## Extended Definition

The Development Server no longer supports the php runtime and requires using php55 instead; deprecated on 2015-08-14.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/config/php_ini](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/config/php_ini)

## Supporting Pages

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- For example: runtime : php VERSION Where VERSION is the PHP MAJOR and MINOR version numbers.
- Install the Google Cloud SDK by running "composer install google/cloud" @param $metadataKey the key for the metadata server / function request metadata using google cloud($metadataKey) { $metadata = new Google\Cloud\Core\Compute\Metadata(); $metadataValue = $metadata->get($metadataKey); return $metadataValue; } / Requests a key from the Metadata server using cURL. @param $metadataKey the key for the metadata server / function request metadata using curl($metadataKey) { $url = 'http://metadata/computeMetadata/v1/' . $metadataKey; $ch = curl init(); curl setopt($ch, CURLOPT URL, $url); curl setopt($ch, CURLOPT HTTPHEADER, array('Metadata-Flavor: Google')); curl setopt($ch, CURLOPT RETURNTRANSFER, 1); curl setopt($ch, CURLOPT FOLLOWLOCATION, true); return curl exec($ch); } Sessions PHP provides a session management layer that allows web apps to preserve user-state information between requests.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- A high maximum means users might wait longer for their requests to be served, if there are pending requests and no idle instances to serve them, but your application will cost less to run. <min-idle-instances> The number of instances to be kept running and ready to serve traffic.This setting only applies to the version that receives most of the traffic.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.

### "The php.ini File \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/config/php_ini](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/config/php_ini)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- A simple example might look like: ; This is a simple php.ini file on App Engine ; It enables output buffering for all requests by overriding the ; default setting of the PHP interpreter. output buffering = "On" A list of the core directives, along with their changeable mode values, is published on php.net .
- You can override any PHP directive that has one of the following changeable mode values: PHP INI SYSTEM PHP INI ALL PHP INI PERDIR You can enable a set of dynamically loadable extensions by using the extension directive.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback The php.ini File Stay organized with collections Save and categorize content based on your preferences.

