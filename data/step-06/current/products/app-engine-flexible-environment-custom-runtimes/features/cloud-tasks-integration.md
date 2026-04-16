---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.392Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Cloud Tasks integration"
feature_slug: "cloud-tasks-integration"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/flexible/php"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
keywords:
  - "tasks"
  - "integration"
  - "app"
  - "engine"
  - "applications"
  - "can"
  - "use"
  - "run"
---

# Cloud Tasks integration

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine applications can use Cloud Tasks to run asynchronous work outside user requests.

## Extended Definition

App Engine applications can use Cloud Tasks to run asynchronous work outside user requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- You can use the Cloud Tasks client library to run tasks in App Engine.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .

### "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- Source ID: `site-docs-reference-2`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine blocks you from deploying your applications using runtimes that have reached end of support.
- An empty string front controller file Default PHP file name for the directory access. index.php nginx conf http include Filename of a partial nginx config, which will be included in the http section in the main nginx config file. nginx-http.conf nginx conf include Filename of a partial nginx config which will be included in the server section in the main nginx config file. nginx-app.conf nginx conf override Filename of a user supplied nginx configuration file, which will be used as the nginx main configuration file. nginx.conf php fpm conf override Filename of a user supplied php-fpm configuration file, which will be included at the bottom of the [app] section so that it will override the existing configurations. php-fpm.conf php ini override Filename of a user supplied PHP configuration file. php.ini supervisord conf addition Filename of a user supplied supervisord config file, which will be included in the main supervisord config file. additional-supervisord.conf supervisord conf override Filename of a user supplied supervisord config file, which will override the main supervisord config file. supervisord.conf You can control whether Nginx serves static files for matching URIs by setting the NGINX SERVES STATIC FILES environment variable in the build env variables section of your app.yaml file: runtime : php env : flex runtime config : document root : "web" operating system : "ubuntu24" build env variables : NGINX SERVES STATIC FILES : true Configuring supervisord in the PHP runtime The App Engine flexible environment uses supervisord to manage processes.
- The following is an example configuration file content for this case: [supervisord] nodaemon = true logfile = /dev/null logfile maxbytes = 0 pidfile = /var/run/supervisord.pid [program:react-server] command = php %(ENV APP DIR)s/index.php stdout logfile = /dev/stdout stdout logfile maxbytes=0 stderr logfile = /dev/stderr stderr logfile maxbytes=0 user = www-data autostart = true autorestart = true priority = 5 stopwaitsecs = 20 Extending the runtime The App Engine flexible environment PHP runtime can be used to create a custom runtime.
- Metadata server Each instance of your application can use the Compute Engine metadata server to query information about the instance, including its host name, external IP address, instance ID, custom metadata, and service account information.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Types of quotas The following types of quotas apply to App Engine applications: Free quotas give your application an amount of each resource for free.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

