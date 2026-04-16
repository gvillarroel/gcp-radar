---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.686Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine flexible environment generally available"
feature_slug: "app-engine-flexible-environment-generally-available"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/php"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "generally"
  - "available"
  - "reached"
  - "availability"
---

# App Engine flexible environment generally available

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment reached general availability with a 99.95% SLA.

## Extended Definition

The App Engine flexible environment reached general availability with a 99.95% SLA.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Both the standard environment and the flexible environment share the same limits for services and versions.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Specifies the runtime used by the app. runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.
- Create a .NET app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.

### "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- An empty string front controller file Default PHP file name for the directory access. index.php nginx conf http include Filename of a partial nginx config, which will be included in the http section in the main nginx config file. nginx-http.conf nginx conf include Filename of a partial nginx config which will be included in the server section in the main nginx config file. nginx-app.conf nginx conf override Filename of a user supplied nginx configuration file, which will be used as the nginx main configuration file. nginx.conf php fpm conf override Filename of a user supplied php-fpm configuration file, which will be included at the bottom of the [app] section so that it will override the existing configurations. php-fpm.conf php ini override Filename of a user supplied PHP configuration file. php.ini supervisord conf addition Filename of a user supplied supervisord config file, which will be included in the main supervisord config file. additional-supervisord.conf supervisord conf override Filename of a user supplied supervisord config file, which will override the main supervisord config file. supervisord.conf You can control whether Nginx serves static files for matching URIs by setting the NGINX SERVES STATIC FILES environment variable in the build env variables section of your app.yaml file: runtime : php env : flex runtime config : document root : "web" operating system : "ubuntu24" build env variables : NGINX SERVES STATIC FILES : true Configuring supervisord in the PHP runtime The App Engine flexible environment uses supervisord to manage processes.
- The following is an example configuration file content for this case: [supervisord] nodaemon = true logfile = /dev/null logfile maxbytes = 0 pidfile = /var/run/supervisord.pid [program:react-server] command = php %(ENV APP DIR)s/index.php stdout logfile = /dev/stdout stdout logfile maxbytes=0 stderr logfile = /dev/stderr stderr logfile maxbytes=0 user = www-data autostart = true autorestart = true priority = 5 stopwaitsecs = 20 Extending the runtime The App Engine flexible environment PHP runtime can be used to create a custom runtime.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The PHP runtime Stay organized with collections Save and categorize content based on your preferences.
- The PHP runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.

