---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.384Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "TLS 1.1 and earlier support"
feature_slug: "tls-1-1-and-earlier-support"
latest_feature_date: "2025-08-07"
deprecation_date: "2025-08-07"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/flexible/php"
keywords:
  - "tls"
  - "earlier"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
  - "older"
---

# TLS 1.1 and earlier support

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment supports older TLS versions up to TLS 1.1 for application traffic; deprecated on 2025-08-07.

## Extended Definition

App Engine flexible environment supports older TLS versions up to TLS 1.1 for application traffic; deprecated on 2025-08-07.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)

## Supporting Pages

### "Secure your app with minimum TLS (flexible environment) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure your app with minimum TLS (flexible environment) Stay organized with collections Save and categorize content based on your preferences.
- Note: If you update your application settings to enforce TLS version 1.2 and later, App Engine automatically rejects incoming requests that attempt to use older, less secure TLS versions 1.1 and earlier.
- Update your application settings in the App Engine flexible environment to use TLS version 1.2 and later, along with a corresponding secure set of cipher suites.
- Disable custom TLS versions and ciphers If you update your application settings to use TLS version 1.2 and later, App Engine automatically blocks all insecure traffic using TLS version 1.1 and earlier.

### "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An empty string front controller file Default PHP file name for the directory access. index.php nginx conf http include Filename of a partial nginx config, which will be included in the http section in the main nginx config file. nginx-http.conf nginx conf include Filename of a partial nginx config which will be included in the server section in the main nginx config file. nginx-app.conf nginx conf override Filename of a user supplied nginx configuration file, which will be used as the nginx main configuration file. nginx.conf php fpm conf override Filename of a user supplied php-fpm configuration file, which will be included at the bottom of the [app] section so that it will override the existing configurations. php-fpm.conf php ini override Filename of a user supplied PHP configuration file. php.ini supervisord conf addition Filename of a user supplied supervisord config file, which will be included in the main supervisord config file. additional-supervisord.conf supervisord conf override Filename of a user supplied supervisord config file, which will override the main supervisord config file. supervisord.conf You can control whether Nginx serves static files for matching URIs by setting the NGINX SERVES STATIC FILES environment variable in the build env variables section of your app.yaml file: runtime : php env : flex runtime config : document root : "web" operating system : "ubuntu24" build env variables : NGINX SERVES STATIC FILES : true Configuring supervisord in the PHP runtime The App Engine flexible environment uses supervisord to manage processes.
- The following is an example configuration file content for this case: [supervisord] nodaemon = true logfile = /dev/null logfile maxbytes = 0 pidfile = /var/run/supervisord.pid [program:react-server] command = php %(ENV APP DIR)s/index.php stdout logfile = /dev/stdout stdout logfile maxbytes=0 stderr logfile = /dev/stderr stderr logfile maxbytes=0 user = www-data autostart = true autorestart = true priority = 5 stopwaitsecs = 20 Extending the runtime The App Engine flexible environment PHP runtime can be used to create a custom runtime.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The PHP runtime Stay organized with collections Save and categorize content based on your preferences.
- The PHP runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.

### "App Engine audit logging information \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.

