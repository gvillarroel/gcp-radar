---
title: "Upgrade an existing application \_|\_ App Engine standard environment \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/python3/building-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime
  title: "Upgrade an existing application \_|\_ App Engine standard environment \_\
    |\_ Google Cloud Documentation"
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
Upgrade an existing application
Stay organized with collections
Save and categorize content based on your preferences.
You must upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for
technical support.
The process of upgrading an existing app depends on the runtime version that
your app currently uses:
Go 1.11 (first-generation runtime) : You must migrate your app to the latest supported Go version . Go 1.11 has reached end of support on January 30, 2024. Your
existing Go 1.11 applications will continue to run and receive traffic. However,
App Engine might block re-deployment of applications that use runtimes
after their end of support date .
To migrate to the latest supported version of Go, see
Migrate from Go 1.11 to the latest Go runtime .
Go second-generation runtimes (after end of support) : To upgrade to a
supported version of Go ,
update the app.yaml file by specifying a version of Go that you
want your app to run. For example:
runtime : go VERSION
Where VERSION is the Go MAJOR and MINOR version numbers.
For example, to use the latest Go version, Go 1.26,
specify 126 .
For more information, see the
Go runtime overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
