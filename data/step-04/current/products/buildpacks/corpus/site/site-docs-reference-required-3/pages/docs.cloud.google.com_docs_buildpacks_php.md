---
title: "Building a PHP application \_|\_ Buildpacks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/buildpacks/php
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/docs/buildpacks/osonly
source_metadata:
  url: https://docs.cloud.google.com/docs/buildpacks/php
  title: "Building a PHP application \_|\_ Buildpacks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Buildpacks
Guides
Send feedback
Building a PHP application
Stay organized with collections
Save and categorize content based on your preferences.
Specify the PHP version
By default the PHP Runtime buildpack uses the latest stable version of PHP. If
your application requires a specific version, you can specify one by including
a composer.json file in your application's root directory. For example:
"require" : {
"php" : "8.3.*" ,
}
Configure Composer
By default, the Composer version is 2.1.3 . If you require a specific
version of Composer, you can use the GOOGLE_COMPOSER_VERSION environment
variable to specify any supported version of Composer using the full
semantic version. For example:
pack build sample-php --builder=gcr.io/buildpacks/builder \
--env GOOGLE_COMPOSER_VERSION="2.2.20"
Customizing NGINX configurations
To configure NGINX, you can use the GOOGLE_CUSTOM_NGINX_CONFIG environment
variable to specify your custom NGINX configuration file. For example:
pack build sample-php --builder=gcr.io/buildpacks/builder \
--env GOOGLE_CUSTOM_NGINX_CONFIG="nginx-custom.conf"
When NGINX starts, your custom NGINX file is used.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
