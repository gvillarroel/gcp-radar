---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.310Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "PHP 5.5 to PHP 7.2 migration guide for App Engine"
feature_slug: "php-5-5-to-php-7-2-migration-guide-for-app-engine"
latest_feature_date: "2018-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/services/access"
keywords:
  - "php"
  - "migration"
  - "guide"
  - "app"
  - "engine"
  - "was"
  - "published"
  - "help"
---

# PHP 5.5 to PHP 7.2 migration guide for App Engine

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

A migration guide was published to help move App Engine PHP applications from PHP 5.5 to PHP 7.2.

## Extended Definition

A migration guide was published to help move App Engine PHP applications from PHP 5.5 to PHP 7.2.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access)

## Supporting Pages

### "Migrate from PHP 5.5 to the latest PHP runtime \_|\_ App Engine migration\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- Source ID: `site-docs-reference-4`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Migration center Guides Send feedback Migrate from PHP 5.5 to the latest PHP runtime Stay organized with collections Save and categorize content based on your preferences.
- Migrate from the App Engine PHP SDK To reduce runtime migration effort and complexity, the App Engine standard environment lets you access many of legacy bundled services and APIs in the second-generation PHP runtime , such as Memcache.
- Compatibility issues between PHP 5.5 and the second-generation PHP runtimes The official PHP documentation provides information on migrating from different PHP versions: Migrating from PHP 5.5.x to PHP 5.6.x Migrating from PHP 5.6.x to PHP 7.0.x Migrating from PHP 7.0.x to PHP 7.1.x Migrating from PHP 7.1.x to PHP 7.2.x Migrating from PHP 7.2.x to PHP 7.3.x Migrating from PHP 7.3.x to PHP 7.4.x Migrating from PHP 7.4.x to PHP 8.0.x Migrating from PHP 8.0.x to PHP 8.1.x Key differences between PHP 5.5 and the second-generation PHP runtimes The following is a summary of the differences between the PHP 5.5 and the second-generation PHP runtimes in the App Engine standard environment: Memory usage differences Second-generation runtimes see a higher baseline of memory usage compared to first-generation runtimes.
- Running your application locally To test your application and run it locally: Locally install a version of PHP that corresponds to a second-generation PHP runtime available in the App Engine standard environment.

### "Access legacy bundled services for PHP \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- For example, Google\AppEngine\Api\AppIdentity\ClassName can be imported with the statement: use Google\AppEngine\Api\AppIdentity\ClassName; Migration considerations App Identity You do not need to make changes to your app's configuration when upgrading to PHP.
- For example: PHP 7/8 ini set('session.save path', 'Google\AppEngine\Api\Memcache\Memcache'); session set save handler(new Google\AppEngine\Ext\Session\MemcacheSessionHandler(), true); Refer to the Session API reference guide for more details.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for PHP Stay organized with collections Save and categorize content based on your preferences.
- PHP 5.5 Memcache for PHP 5.5 example: $memcache = new Memcache(); return $memcache->get($key); Memcached for PHP 5.5 example: $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); PHP 7/8 Memcache API for PHP example: use Google\AppEngine\Api\Memcache\Memcache; $memcache = new Memcache(); return $memcache->get($key); Memcached API for PHP example: use Google\AppEngine\Api\Memcache\Memcached; $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); If you prefer using the original behavior of Memcache for PHP 5 in PHP, you can continue to call Memcache implicitly by including a few more lines in your composer.json file.

### "Access legacy bundled services for PHP \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access)
- Source ID: `site-docs-reference-required-7`
- Final score: 53
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, Google\AppEngine\Api\AppIdentity\ClassName can be imported with the statement: use Google\AppEngine\Api\AppIdentity\ClassName; Migration considerations App Identity You do not need to make changes to your app's configuration when upgrading to PHP.
- For example: PHP 7/8 ini set('session.save path', 'Google\AppEngine\Api\Memcache\Memcache'); session set save handler(new Google\AppEngine\Ext\Session\MemcacheSessionHandler(), true); Refer to the Session API reference guide for more details.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for PHP Stay organized with collections Save and categorize content based on your preferences.
- PHP 5.5 Memcache for PHP 5.5 example: $memcache = new Memcache(); return $memcache->get($key); Memcached for PHP 5.5 example: $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); PHP 7/8 Memcache API for PHP example: use Google\AppEngine\Api\Memcache\Memcache; $memcache = new Memcache(); return $memcache->get($key); Memcached API for PHP example: use Google\AppEngine\Api\Memcache\Memcached; $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); If you prefer using the original behavior of Memcache for PHP 5 in PHP, you can continue to call Memcache implicitly by including a few more lines in your composer.json file.

