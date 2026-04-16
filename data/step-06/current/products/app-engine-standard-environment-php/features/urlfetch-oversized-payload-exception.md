---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.337Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "URLFetch oversized payload exception"
feature_slug: "urlfetch-oversized-payload-exception"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/services/access"
keywords:
  - "urlfetch"
  - "oversized"
  - "payload"
  - "exception"
  - "now"
  - "raises"
  - "requestpayloadtoolargeexception"
  - "when"
---

# URLFetch oversized payload exception

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed supported size limits.

## Extended Definition

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed supported size limits.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- For all other resources, when the resource is depleted, an attempt in the application to consume the resource results in an exception.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- Resource Free Quota F1 instances 28 free instance hours per day B1 instances 9 free instance hours per day Accrual of instance hours begins when an instance starts and ends as described below, depending on the type of scaling you specify for the instance: Basic or automatic scaling: accrual ends fifteen minutes after an instance finishes processing its last request.

### "Access legacy bundled services for PHP \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compared to the stream handler option, the UrlFetch class configuration is also simpler, in that it does not require use of various PHP APIs such as: stream context create() stream wrapper unregister() stream wrapper register() file get contents() The following UrlFetch Class example is equivalent to the stream handler example: PHP 7/8 use google\appengine\api\urlfetch\UrlFetch; ... $urlfetch = new UrlFetch(); $result = $urlfetch->fetch($url, 'POST', $headers, http build query($data)); echo $result->getContent(); Users You do not need to make changes to your app's configuration when upgrading to PHP.
- PHP 5.5 ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using file get contents and the Url Fetch service. $result = file get contents('http://example.com', false, $context); // Print Http Response Headers print r($http response header); PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using fopen and the Url Fetch service. $result = fopen('http://example.com', 'r', false, $context); // Print Http Response Headers $meta data = stream get meta data($result); $headers = $meta data['wrapper data']; print r($headers); stream wrapper unregister("http"); stream wrapper restore("http"); Option 2.
- No option to use the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using the Url Fetch service. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper restore("http"); // Now using the native php stream wrapper again.
- After importing the appengine-php-sdk package from composer, add the folllowing opt-in file path to the files element in the autoload section: PHP 7/8 { "require": { "google/appengine-php-sdk": "^2.1" // Or any later version }, "autoload": { "files": [ "./vendor/google/appengine-php-sdk/src/Api/Memcache/MemcacheOptIn.php" ] } } Modules You do not need to make changes to your app's configuration when upgrading to PHP.

### "Access legacy bundled services for PHP \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access)
- Source ID: `site-docs-reference-required-7`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compared to the stream handler option, the UrlFetch class configuration is also simpler, in that it does not require use of various PHP APIs such as: stream context create() stream wrapper unregister() stream wrapper register() file get contents() The following UrlFetch Class example is equivalent to the stream handler example: PHP 7/8 use google\appengine\api\urlfetch\UrlFetch; ... $urlfetch = new UrlFetch(); $result = $urlfetch->fetch($url, 'POST', $headers, http build query($data)); echo $result->getContent(); Users You do not need to make changes to your app's configuration when upgrading to PHP.
- PHP 5.5 ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using file get contents and the Url Fetch service. $result = file get contents('http://example.com', false, $context); // Print Http Response Headers print r($http response header); PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using fopen and the Url Fetch service. $result = fopen('http://example.com', 'r', false, $context); // Print Http Response Headers $meta data = stream get meta data($result); $headers = $meta data['wrapper data']; print r($headers); stream wrapper unregister("http"); stream wrapper restore("http"); Option 2.
- No option to use the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using the Url Fetch service. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper restore("http"); // Now using the native php stream wrapper again.
- After importing the appengine-php-sdk package from composer, add the folllowing opt-in file path to the files element in the autoload section: PHP 7/8 { "require": { "google/appengine-php-sdk": "^2.1" // Or any later version }, "autoload": { "files": [ "./vendor/google/appengine-php-sdk/src/Api/Memcache/MemcacheOptIn.php" ] } } Modules You do not need to make changes to your app's configuration when upgrading to PHP.

