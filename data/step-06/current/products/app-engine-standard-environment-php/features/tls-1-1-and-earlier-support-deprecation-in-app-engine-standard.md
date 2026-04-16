---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.297Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "TLS 1.1 and earlier support deprecation in App Engine standard"
feature_slug: "tls-1-1-and-earlier-support-deprecation-in-app-engine-standard"
latest_feature_date: "2025-08-07"
deprecation_date: "March 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/deprecations"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access"
keywords:
  - "tls"
  - "earlier"
  - "deprecation"
  - "app"
  - "engine"
  - "standard"
  - "deprecated"
  - "recommendation"
---

# TLS 1.1 and earlier support deprecation in App Engine standard

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Support for TLS 1.1 and earlier is deprecated in App Engine standard, with a recommendation to use TLS 1.2 or later; deprecated on March 2025.

## Extended Definition

Support for TLS 1.1 and earlier is deprecated in App Engine standard, with a recommendation to use TLS 1.2 or later; deprecated on March 2025.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/deprecations](https://docs.cloud.google.com/appengine/docs/standard/deprecations)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)

## Supporting Pages

### "Feature deprecations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/deprecations](https://docs.cloud.google.com/appengine/docs/standard/deprecations)
- Source ID: `site-docs-reference-4`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Feature deprecations Stay organized with collections Save and categorize content based on your preferences.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to App Engine.
- After a service, feature, or product is officially deprecated, it continues to be available for at least the period of time defined in the Terms of Service.
- The deprecation policy only applies to the services, features, or products listed therein.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### "Access legacy bundled services for PHP \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for PHP Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to install and use the bundled services with the PHP runtime for the App Engine standard environment.
- PHP 5.5 Memcache for PHP 5.5 example: $memcache = new Memcache(); return $memcache->get($key); Memcached for PHP 5.5 example: $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); PHP 7/8 Memcache API for PHP example: use Google\AppEngine\Api\Memcache\Memcache; $memcache = new Memcache(); return $memcache->get($key); Memcached API for PHP example: use Google\AppEngine\Api\Memcache\Memcached; $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); If you prefer using the original behavior of Memcache for PHP 5 in PHP, you can continue to call Memcache implicitly by including a few more lines in your composer.json file.
- PHP 5.5 ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using file get contents and the Url Fetch service. $result = file get contents('http://example.com', false, $context); // Print Http Response Headers print r($http response header); PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using fopen and the Url Fetch service. $result = fopen('http://example.com', 'r', false, $context); // Print Http Response Headers $meta data = stream get meta data($result); $headers = $meta data['wrapper data']; print r($headers); stream wrapper unregister("http"); stream wrapper restore("http"); Option 2.

