---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.572Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine PHP runtime version 1.9.32"
feature_slug: "app-engine-php-runtime-version-1-9-32"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "32"
  - "version"
  - "runtime"
  - "engine"
  - "was"
  - "php"
  - "the"
  - "app"
---

# App Engine PHP runtime version 1.9.32

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

The App Engine PHP runtime was updated to version 1.9.32.

## Extended Definition

The App Engine PHP runtime was updated to version 1.9.32.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enabled extensions The following extensions have been enabled in the PHP runtimes for App Engine: BCMath bz2 Calendar core cgi ctype cURL date dba dom enchant Exif fcgi fileinfo filter FTP GD gettext GMP hash iconv intl json LDAP libxml mbstring MYSQLi mysqlnd MySQL (PDO) OPcache OpenSSL PCNTL pcre PDO pgsql Phar posix PostgreSQL (PDO) Reflection session Shmop SimpleXML SOAP Sockets sodium (PHP 8.x only, not available for PHP 7.x) SPL SQLite (PDO) SQLite3 standard test tidy tokenizer XML XMLreader XMLrpc (PHP 7.x only, not available for PHP 8.x) XMLwriter XSL zend Zip Zlib Dynamically loadable extensions The following extensions are dynamically loadable by configuring php.ini : Memcached gRPC protobuf MongoDB ImageMagick OpenCensus OpenTelemetry PHPRedis To enable these extensions, add directives for them in your php.ini file under extension , for example: extension=memcached.so extension=grpc.so extension=protobuf.so extension=mongodb.so extension=imagick.so extension=opencensus.so extension=redis.so [opentelemetry] extension=opentelemetry.so Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- Directive Default Value in App Engine expose php Off memory limit -1 max execution time 0 error reporting E ALL & E DEPRECATED & E STRICT display errors Off display startup errors Off log errors On log errors max len 0 ignore repeated errors Off ignore repeated source Off html errors Off opcache.enable On opcache.validate timestamps Off opcache.memory consumption 32 Override these default directives by including them in a php.ini file for your app. tempnam() and sys get temp dir() support App Engine apps run in a security sandbox in which only the /tmp directory is writable and stored in the instance's RAM.
- The PHP runtime uses the latest stable release of the version that is specified in your app.yaml file.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The representation types for the supported Go property types are: "INT64": signed integers and time.Time "DOUBLE": float32 and float64 "BOOLEAN": bool "STRING": string, []byte and ByteString "POINT": appengine.GeoPoint "REFERENCE": Key "USER": (not used in the Go runtime) func Kinds func Kinds ( ctx context .
- Valid value types are: signed integers (int, int8, int16, int32 and int64), bool, string, float32 and float64, []byte (up to 1 megabyte in length), any type whose underlying type is one of the above predeclared types, ByteString, Key, time.Time (stored with microsecond precision), appengine.BlobKey, appengine.GeoPoint, structs whose fields are all valid value types, slices of any of the above.
- The context provided must be an App Engine context if running in App Engine first generation runtime.
- For example, given these definitions: type Inner1 struct { W int32 X string } type Inner2 struct { Y float64 } type Inner3 struct { Z bool } type Outer struct { A int16 I [] Inner1 J Inner2 Inner3 } then an Outer's properties would be equivalent to those of: type OuterEquivalent struct { A int16 IDotW [] int32 datastore:"I.W" IDotX [] string datastore:"I.X" JDotY float64 datastore:"J.Y" Z bool } If Outer's embedded Inner3 field was tagged as datastore:&quot;Foo&quot; then the equivalent field would instead be: FooDotZ bool datastore:&quot;Foo.Z&quot; .

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- Create the app.yaml file Every App Engine project has an app.yaml configuration file which specifies your service's runtime environment settings.
- For a deeper dive into how App Engine works, see the Go Runtime Environment .

