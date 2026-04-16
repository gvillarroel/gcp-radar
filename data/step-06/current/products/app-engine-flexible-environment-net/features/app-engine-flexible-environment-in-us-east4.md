---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.685Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine flexible environment in us-east4"
feature_slug: "app-engine-flexible-environment-in-us-east4"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/php"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "us"
  - "east4"
  - "now"
  - "available"
---

# App Engine flexible environment in us-east4

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine is now available in the us-east4 (North Virginia) region.

## Extended Definition

App Engine is now available in the us-east4 (North Virginia) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Both the standard environment and the flexible environment share the same limits for services and versions.

### "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- An empty string front controller file Default PHP file name for the directory access. index.php nginx conf http include Filename of a partial nginx config, which will be included in the http section in the main nginx config file. nginx-http.conf nginx conf include Filename of a partial nginx config which will be included in the server section in the main nginx config file. nginx-app.conf nginx conf override Filename of a user supplied nginx configuration file, which will be used as the nginx main configuration file. nginx.conf php fpm conf override Filename of a user supplied php-fpm configuration file, which will be included at the bottom of the [app] section so that it will override the existing configurations. php-fpm.conf php ini override Filename of a user supplied PHP configuration file. php.ini supervisord conf addition Filename of a user supplied supervisord config file, which will be included in the main supervisord config file. additional-supervisord.conf supervisord conf override Filename of a user supplied supervisord config file, which will override the main supervisord config file. supervisord.conf You can control whether Nginx serves static files for matching URIs by setting the NGINX SERVES STATIC FILES environment variable in the build env variables section of your app.yaml file: runtime : php env : flex runtime config : document root : "web" operating system : "ubuntu24" build env variables : NGINX SERVES STATIC FILES : true Configuring supervisord in the PHP runtime The App Engine flexible environment uses supervisord to manage processes.
- The following is an example configuration file content for this case: [supervisord] nodaemon = true logfile = /dev/null logfile maxbytes = 0 pidfile = /var/run/supervisord.pid [program:react-server] command = php %(ENV APP DIR)s/index.php stdout logfile = /dev/stdout stdout logfile maxbytes=0 stderr logfile = /dev/stderr stderr logfile maxbytes=0 user = www-data autostart = true autorestart = true priority = 5 stopwaitsecs = 20 Extending the runtime The App Engine flexible environment PHP runtime can be used to create a custom runtime.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The PHP runtime Stay organized with collections Save and categorize content based on your preferences.
- The PHP runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.

### "Customizing the .NET Runtime \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Customizing the .NET Runtime Stay organized with collections Save and categorize content based on your preferences.
- Health checking By default, all programs running in the flexible environment receive health check requests , and you don't need to write any additional code.

