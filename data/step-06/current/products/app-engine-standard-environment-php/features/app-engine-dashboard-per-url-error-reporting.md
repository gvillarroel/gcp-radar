---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.321Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine dashboard per-URL error reporting"
feature_slug: "app-engine-dashboard-per-url-error-reporting"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7"
keywords:
  - "app"
  - "engine"
  - "dashboard"
  - "per"
  - "url"
  - "error"
  - "reporting"
  - "server"
---

# App Engine dashboard per-URL error reporting

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Server Error and Client Error metrics in the App Engine dashboard now more accurately reflect status errors on a per-URL basis.

## Extended Definition

Server Error and Client Error metrics in the App Engine dashboard now more accurately reflect status errors on a per-URL basis.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/php7](https://docs.cloud.google.com/appengine/docs/standard/php7)

## Supporting Pages

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Directive Default Value in App Engine expose php Off memory limit -1 max execution time 0 error reporting E ALL & E DEPRECATED & E STRICT display errors Off display startup errors Off log errors On log errors max len 0 ignore repeated errors Off ignore repeated source Off html errors Off opcache.enable On opcache.validate timestamps Off opcache.memory consumption 32 Override these default directives by including them in a php.ini file for your app. tempnam() and sys get temp dir() support App Engine apps run in a security sandbox in which only the /tmp directory is writable and stored in the instance's RAM.
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- Metadata server Each instance of your application can use the App Engine metadata server to query information about the instance and your project.
- Note that $ SERVER['HTTP X APPENGINE USER IP'] is the only way your app can retrieve the client's IP address.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7](https://docs.cloud.google.com/appengine/docs/standard/php7)
- Source ID: `site-docs-reference-4`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Directive Default Value in App Engine expose php Off memory limit -1 max execution time 0 error reporting E ALL & E DEPRECATED & E STRICT display errors Off display startup errors Off log errors On log errors max len 0 ignore repeated errors Off ignore repeated source Off html errors Off opcache.enable On opcache.validate timestamps Off opcache.memory consumption 32 Override these default directives by including them in a php.ini file for your app. tempnam() and sys get temp dir() support App Engine apps run in a security sandbox in which only the /tmp directory is writable and stored in the instance's RAM.
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- Metadata server Each instance of your application can use the App Engine metadata server to query information about the instance and your project.
- Note that $ SERVER['HTTP X APPENGINE USER IP'] is the only way your app can retrieve the client's IP address.

### "PHP runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php/runtime](https://docs.cloud.google.com/appengine/docs/standard/php/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Directive Default Value in App Engine expose php Off memory limit -1 max execution time 0 error reporting E ALL & E DEPRECATED & E STRICT display errors Off display startup errors Off log errors On log errors max len 0 ignore repeated errors Off ignore repeated source Off html errors Off opcache.enable On opcache.validate timestamps Off opcache.memory consumption 32 Override these default directives by including them in a php.ini file for your app. tempnam() and sys get temp dir() support App Engine apps run in a security sandbox in which only the /tmp directory is writable and stored in the instance's RAM.
- However, if you are migrating a legacy app, see the following sample index.php file to import the PHP files you need and implement the front controller manually: switch (@parse url($ SERVER['REQUEST URI'])['path']) { case '/': require 'homepage.php'; break; case '/contact.php': require 'contact.php'; break; default: http response code(404); exit('Not Found'); } If you specify the optional entrypoint element in your app.yaml file, App Engine uses the command in the entrypoint element to serve your app instead of using public/index.php or index.php : entrypoint: serve path/to/my/front/controller.php The entrypoint field uses the built-in serve command, which is a program within the PHP runtimes that starts up the php-fpm implementation and a webserver in the background.
- Metadata server Each instance of your application can use the App Engine metadata server to query information about the instance and your project.
- Note that $ SERVER['HTTP X APPENGINE USER IP'] is the only way your app can retrieve the client's IP address.

