---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.304Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine billing labels and BigQuery export"
feature_slug: "app-engine-billing-labels-and-bigquery-export"
latest_feature_date: "2020-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access"
keywords:
  - "app"
  - "engine"
  - "billing"
  - "labels"
  - "bigquery"
  - "export"
  - "can"
  - "now"
---

# App Engine billing labels and BigQuery export

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine services can now be labeled and their billing data exported to BigQuery for fine-grained billing analysis.

## Extended Definition

App Engine services can now be labeled and their billing data exported to BigQuery for fine-grained billing analysis.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)

## Supporting Pages

### "Labeling App Engine resources \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources)
- Source ID: `site-docs-reference-4`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TABLEID ], labels )) WHERE cost > 0.0 and labels . key is not null and resource type = ' Out Bandwidth ' LIMIT 100 BigQuery returns your data with a flattened output: product resource type start time end time labels key labels value cost App Engine Out Bandwidth 2017-10-07 22:00:00 2017-10-07 23:00:00 service default 0.020033 App Engine Out Bandwidth 2017-10-07 13:00:00 2017-10-07 14:00:00 service frontend 0.016042 App Engine Out Bandwidth 2017-10-07 06:00:00 2017-10-07 07:00:00 service backend task 0.013125 App Engine Out Bandwidth 2017-10-07 21:00:00 2017-10-07 22:00:00 service default 0.020722 App Engine Out Bandwidth 2017-10-07 19:00:00 2017-10-07 20:00:00 service frontend 0.020725 App Engine Out Bandwidth 2017-10-08 04:00:00 2017-10-08 05:00:00 service backend task 0.02072 App Engine Out Bandwidth 2017-10-08 02:00:00 2017-10-08 03:00:00 service default 0.020723 App Engine Out Bandwidth 2017-10-07 14:00:00 2017-10-07 15:00:00 service frontend 0.020724 App Engine Out Bandwidth 2017-10-07 23:00:00 2017-10-08 00:00:00 service backend task 0.021417 Time periods in billing reports To ensure that each day in the report covers a full 24 hour period, the billing data that you export only contains data up to the most recent midnight, Pacific Time.
- To view labels for billing, export your data to BigQuery and then query the data: Export your billing data to BigQuery .
- The App Engine flexible environment does not support billing labels for Firestore in Datastore mode (Datastore) usage.
- For example, if you add labels such as service:default , service:backend and service:frontend to your App Engine services, you can compare how these different services use outgoing bandwidth, instance hours, and other resources .

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy the index configuration file To deploy the index.yaml configuration file, run the following command: gcloud app deploy index.yaml Delete unused indexes When you change or remove an index from the index configuration, the original index is not deleted from App Engine automatically.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.

### "Access legacy bundled services for PHP \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- PHP 5.5 Memcache for PHP 5.5 example: $memcache = new Memcache(); return $memcache->get($key); Memcached for PHP 5.5 example: $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); PHP 7/8 Memcache API for PHP example: use Google\AppEngine\Api\Memcache\Memcache; $memcache = new Memcache(); return $memcache->get($key); Memcached API for PHP example: use Google\AppEngine\Api\Memcache\Memcached; $memcache = new Memcached(); $memcache->set('who', $request->get('who')); return $twig->render('memcache.html.twig', [ 'who' => $request->get('who'), 'count' => $memcache->increment('count', 1, 0), 'host' => $request->getHost(), ]); If you prefer using the original behavior of Memcache for PHP 5 in PHP, you can continue to call Memcache implicitly by including a few more lines in your composer.json file.
- PHP 5.5 ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using file get contents and the Url Fetch service. $result = file get contents('http://example.com', false, $context); // Print Http Response Headers print r($http response header); PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using fopen and the Url Fetch service. $result = fopen('http://example.com', 'r', false, $context); // Print Http Response Headers $meta data = stream get meta data($result); $headers = $meta data['wrapper data']; print r($headers); stream wrapper unregister("http"); stream wrapper restore("http"); Option 2.
- No option to use the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; PHP 7/8 use google\appengine\api\urlfetch\UrlFetchStream; ... $context = [ 'http' => [ 'method' => 'POST', 'header' => $headers, 'content' => http build query($data), ] ]; $context = stream context create($context); // Using the native php stream wrapper. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper register("http", "UrlFetchStream"); // Now using the Url Fetch service. $result = file get contents('http://example.com', false, $context); echo $result; stream wrapper unregister("http"); stream wrapper restore("http"); // Now using the native php stream wrapper again.
- Compared to the stream handler option, the UrlFetch class configuration is also simpler, in that it does not require use of various PHP APIs such as: stream context create() stream wrapper unregister() stream wrapper register() file get contents() The following UrlFetch Class example is equivalent to the stream handler example: PHP 7/8 use google\appengine\api\urlfetch\UrlFetch; ... $urlfetch = new UrlFetch(); $result = $urlfetch->fetch($url, 'POST', $headers, http build query($data)); echo $result->getContent(); Users You do not need to make changes to your app's configuration when upgrading to PHP.

