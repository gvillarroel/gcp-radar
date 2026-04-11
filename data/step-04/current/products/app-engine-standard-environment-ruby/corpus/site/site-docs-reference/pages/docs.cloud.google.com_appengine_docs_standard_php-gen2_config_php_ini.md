---
title: "The php.ini File \_|\_ App Engine standard environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/php-gen2/config/php_ini
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/php-gen2/config/php_ini
  title: "The php.ini File \_|\_ App Engine standard environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Reference
Send feedback
The php.ini File
Stay organized with collections
Save and categorize content based on your preferences.
You can include a php.ini file with your App Engine application. This
file lets you customize the behavior of the PHP interpreter directives.
See an example of the default php.ini configuration .
Using a custom php.ini file
Place the php.ini file in your application's base directory where your
app.yaml file is located. It is loaded when the PHP interpreter is
initialized, before running your application code.
The file follows the same syntax as other .ini files .
A simple example might look like:
; This is a simple php.ini file on App Engine
; It enables output buffering for all requests by overriding the
; default setting of the PHP interpreter.
output_buffering = "On"
A list of the core directives, along with their changeable mode values, is
published on php.net .
You can override any PHP directive that has one of the following changeable mode
values:
PHP_INI_SYSTEM
PHP_INI_ALL
PHP_INI_PERDIR
You can enable a set of dynamically loadable extensions
by using the extension directive.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
