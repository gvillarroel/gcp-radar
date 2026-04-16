---
title: "Overview of legacy bundled services \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/ruby/configuring-your-app-with-app-yaml
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview
  title: "Overview of legacy bundled services \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
Overview of legacy bundled services
Stay organized with collections
Save and categorize content based on your preferences.
Historically, the App Engine standard environment provided several scalable, proprietary services
for app development. These services were bundled with
first-generation runtimes
(also called App Engine legacy runtimes ), which include
Python 2, Java 8, Go 1.11, and PHP 5.5. Because several
of the legacy runtimes are no longer maintained by their respective
open-source communities, as an App Engine developer, you may face hard choices
on whether to invest time and effort in migrating to a newer runtime or else
incur growing costs to retain your app on a legacy runtime.
Recognizing this challenge, Google Cloud is committed to providing you with a
more incremental migration path to newer runtimes. To reduce runtime migration
complexity, Google Cloud now supports a set of App Engine legacy bundled services and
their associated APIs on second-generation runtimes, which include
Python 3 ,
Java 11+ ,
Go 1.12+ , and
PHP 7+ . Your app
can call legacy bundled services APIs for second-generation runtimes through
language-idiomatic libraries.
Figure 1. How apps access the App Engine legacy bundled services
In runtime migration scenarios, you often also have the option to use
Google Cloud products that offer similar functionality as the
legacy bundled services. For the legacy bundled services that are not available as
separate products in Google Cloud, such as image processing, search, and
messaging, you can use third-party providers or other workarounds as suggested
in the Runtimes guide.
To learn more about these options for migrating your app, see
Migrate off of legacy bundled services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
