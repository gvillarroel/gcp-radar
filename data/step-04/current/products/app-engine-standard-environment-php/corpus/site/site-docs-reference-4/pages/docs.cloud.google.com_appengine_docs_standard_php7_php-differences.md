---
title: "Migrate from PHP 5.5 to the latest PHP runtime \_|\_ App Engine migration\
  \ center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/php-gen2/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences
  title: "Migrate from PHP 5.5 to the latest PHP runtime \_|\_ App Engine migration\
    \ center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Migration center
Guides
Send feedback
Migrate from PHP 5.5 to the latest PHP runtime
Stay organized with collections
Save and categorize content based on your preferences.
This page covers instructions for migrating from the
first-generation to the second-generation
PHP runtimes. To upgrade your second-generation app to use the latest supported
version of PHP, see Upgrade an existing application .
PHP 5 is deprecated . You won't be able to deploy PHP 5 applications, even if your organization previously used an organization policy to
re-enable deployments of legacy runtimes. Your existing PHP
5 applications will continue to run and receive traffic. We recommend that
you migrate to the latest supported version of PHP .
Migrating to a supported second-generation PHP runtime lets you
use up-to-date language features and build apps that are more portable, with
idiomatic code.
Compatibility issues between PHP 5.5 and the second-generation PHP runtimes
The official PHP documentation provides information on migrating from different
PHP versions:
Migrating from PHP 5.5.x to PHP 5.6.x
Migrating from PHP 5.6.x to PHP 7.0.x
Migrating from PHP 7.0.x to PHP 7.1.x
Migrating from PHP 7.1.x to PHP 7.2.x
Migrating from PHP 7.2.x to PHP 7.3.x
Migrating from PHP 7.3.x to PHP 7.4.x
Migrating from PHP 7.4.x to PHP 8.0.x
Migrating from PHP 8.0.x to PHP 8.1.x
Key differences between PHP 5.5 and the second-generation PHP runtimes
The following is a summary of the differences between the PHP 5.5 and the second-generation
PHP runtimes in the App Engine standard environment:
Memory usage differences
Second-generation runtimes see a higher baseline of memory usage compared
to first-generation runtimes. This is due to multiple factors, such as different
base image versions, and differences in how the two generations calculate memory
usage.
Second-generation runtimes calculate instance memory usage as the sum of what an
application process uses, and the number of application files dynamically cached
in memory. To avoid memory-intensive applications from experiencing instance
shutdowns due to exceeding memory limits, upgrade to a larger
instance class with more memory.
CPU usage differences
Second-generation runtimes can see a higher baseline of CPU usage upon instance
cold-start. Depending on an application's scaling configuration, this might have
unintended side effects, such as, a higher instance count than anticipated if an
application is configured to scale based on CPU utilization. To avoid this
issue, review and test application scaling configurations to ensure the number
of instances are acceptable.
Request header differences
First-generation runtimes allow request headers with underscores
(e.g. X-Test-Foo_bar ) to be forwarded to the application. Second-generation
runtimes introduces Nginx into the host architecture. As a result of this
change, second-generation runtimes are configured to automatically remove
headers with underscores ( _ ). To prevent application issues, avoid using
underscores in application request headers.
Migrating your app.yaml file
You must place a
front controller
to handle all routing in your application. For more information, see
Application startup .
The second-generation PHP runtimes don't allow the script handler element to be
customized. The only valid value is auto , because all traffic is served using
the entrypoint command. All non-static URL handlers must include script: auto
to deploy successfully.
The behavior of some elements in the app.yaml configuration file has been
modified:
Element Change type Description
entrypoint Added
Optionally , use this field to
specify the command that will run when your app starts .
threadsafe Deprecated All
applications are presumed to be threadsafe, meaning an instance can handle
multiple requests at the same time.
api_version Deprecated Previously
required but not needed in the second-generation PHP runtimes.
application_readable Deprecated
builtins Deprecated
libraries Deprecated Arbitrary third
party dependencies can be installed using a composer.json
metadata file.
handlers Modified The
script field is optional and the only accepted value is
auto . Use a web framework (like Laravel ,
Symfony ,
Slim , or a similar
option) with in-app routing to execute a
script when a request hits a specific route
The login
field is not supported. Use
Identity and Access Management (IAM) for user management.
If you use of any of the deprecated fields, there will be an error on app
deployment.
For more information, see the app.yaml reference .
Reduced runtime restrictions
The second-generation PHP runtimes have fewer restrictions compared to the PHP 5.5 runtime.
Install third-party dependencies .
The runtime includes a full filesystem .
Create background threads or processes that live beyond the scope of the
request while the instance runs.
Use the Google Cloud Client Library for PHP
to integrate apps with other Google Cloud services. For more information, see
the Installing the Google Cloud Client Library
page.
For more information, see the PHP runtime environment .
Migrate from the App Engine PHP SDK
To reduce runtime migration effort and complexity, the App Engine standard environment lets you
access many of legacy bundled services and APIs in the second-generation PHP
runtime , such as Memcache.
Your second-generation PHP app can call the bundled services APIs through the
App Engine SDK, and access most of the same capabilities as on the
PHP 5 runtime. Not all the legacy bundled services available for PHP 5 have a
corresponding service in the second-generation PHP runtimes. For the full list of
legacy bundled services APIs available for the second-generation PHP runtimes, see the
legacy bundled services API references documentation .
You also have the option to use Google Cloud products that offer
similar capabilities as the legacy bundled services. These Google Cloud
products provide idiomatic Google Cloud CLI client library .
For the legacy bundled services that are not available as separate products
in Google Cloud, such as search, you can use third-party providers or
other workarounds. To learn more about migrating to unbundled services, see
Migrating from bundled services .
Running your application locally
To test your application and run it locally:
Locally install a version of PHP
that corresponds to a second-generation PHP runtime
available in the App Engine standard environment.
Install a web server and use this to serve your app locally.
For example, start the HTTP server by running the following command:
php -S localhost:8080
Then, view your application in your web browser at http://localhost:8080 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
