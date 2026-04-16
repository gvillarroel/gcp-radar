---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.308Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Cloud SDK delivery of App Engine SDK functionality"
feature_slug: "cloud-sdk-delivery-of-app-engine-sdk-functionality"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences"
keywords:
  - "sdk"
  - "delivery"
  - "app"
  - "engine"
  - "functionality"
  - "now"
  - "delivered"
  - "exclusively"
---

# Cloud SDK delivery of App Engine SDK functionality

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Extended Definition

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)

## Supporting Pages

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### "Migrate from PHP 5.5 to the latest PHP runtime \_|\_ App Engine migration\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- Source ID: `site-docs-reference-4`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility issues between PHP 5.5 and the second-generation PHP runtimes The official PHP documentation provides information on migrating from different PHP versions: Migrating from PHP 5.5.x to PHP 5.6.x Migrating from PHP 5.6.x to PHP 7.0.x Migrating from PHP 7.0.x to PHP 7.1.x Migrating from PHP 7.1.x to PHP 7.2.x Migrating from PHP 7.2.x to PHP 7.3.x Migrating from PHP 7.3.x to PHP 7.4.x Migrating from PHP 7.4.x to PHP 8.0.x Migrating from PHP 8.0.x to PHP 8.1.x Key differences between PHP 5.5 and the second-generation PHP runtimes The following is a summary of the differences between the PHP 5.5 and the second-generation PHP runtimes in the App Engine standard environment: Memory usage differences Second-generation runtimes see a higher baseline of memory usage compared to first-generation runtimes.
- Migrate from the App Engine PHP SDK To reduce runtime migration effort and complexity, the App Engine standard environment lets you access many of legacy bundled services and APIs in the second-generation PHP runtime , such as Memcache.
- Home Documentation Application hosting App Engine Migration center Guides Send feedback Migrate from PHP 5.5 to the latest PHP runtime Stay organized with collections Save and categorize content based on your preferences.
- Running your application locally To test your application and run it locally: Locally install a version of PHP that corresponds to a second-generation PHP runtime available in the App Engine standard environment.

### "Access legacy bundled services for PHP \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- PHP 5.5 Memcache for PHP 5.5 example: $memcache = new Memcache(); return $memcache->get($key); Memcached for PHP 5.5 example: $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); PHP 7/8 Memcache API for PHP example: use Google\AppEngine\Api\Memcache\Memcache; $memcache = new Memcache(); return $memcache->get($key); Memcached API for PHP example: use Google\AppEngine\Api\Memcache\Memcached; $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); If you prefer using the original behavior of Memcache for PHP 5 in PHP, you can continue to call Memcache implicitly by including a few more lines in your composer.json file.
- PHP 5.5 ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using file get contents and the Url Fetch service. $result = file get contents('http://example.com', false, $context); // Print Http Response Headers print r($http response header); PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using fopen and the Url Fetch service. $result = fopen('http://example.com', 'r', false, $context); // Print Http Response Headers $meta data = stream get meta data($result); $headers = $meta data['wrapper data']; print r($headers); stream wrapper unregister("http"); stream wrapper restore("http"); Option 2.
- No option to use the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using the Url Fetch service. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper restore("http"); // Now using the native php stream wrapper again.
- Compared to the stream handler option, the UrlFetch class configuration is also simpler, in that it does not require use of various PHP APIs such as: stream context create() stream wrapper unregister() stream wrapper register() file get contents() The following UrlFetch Class example is equivalent to the stream handler example: PHP 7/8 use google\appengine\api\urlfetch\UrlFetch; ... $urlfetch = new UrlFetch(); $result = $urlfetch->fetch($url, 'POST', $headers, http build query($data)); echo $result->getContent(); Users You do not need to make changes to your app's configuration when upgrading to PHP.

