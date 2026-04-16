---
title: "Access legacy bundled services for Go \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/services/access
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/services/access
  title: "Access legacy bundled services for Go \_|\_ App Engine standard environment\
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
Access legacy bundled services for Go
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to install and use the bundled
services with the Go runtime
for App Engine standard environment. Your app can access the bundled services
through the App Engine services SDK for Go .
Before you begin
Refer to the list of legacy bundled services APIs
you can call in the Go runtime.
Before starting a migration project to Go, see the
runtime migration overview
and migration considerations when using legacy bundled services.
Installing the App Engine services SDK
In order to call the legacy bundled services APIs with Go, you
must use the latest SDK. Follow these steps:
Update your app.yaml
file to include the following line:
app_engine_apis : true
Add a reference to the latest SDK in your go.mod file by running go get
in the terminal as follows:
go get google . golang . org / appengine / v2
The main difference when upgrading to Go is using v2 of the App Engine services SDK.
In your app, modify your import statements by inserting /v2/ in the old
package names. For example, if using Memcache, do the following:
import (
"google.golang.org/appengine/v2"
"google.golang.org/appengine/v2/memcache"
)
For the full list of available package names, see the
legacy bundled services API references documentation .
Run go mod tidy to clean up references in your go.mod file.
go mod tidy
Note: When upgrading to a new major version of a Go dependency, such as a package
or library, make sure to include the major version number of the dependency in
your import statements. If you run go mod tidy and find that
it is still importing an older version of the App Engine services SDK for Go,
you have probably missed upgrading an import statement.
Migration considerations
You should be aware of the following considerations if you are migrating to
the Go runtime and your app uses legacy bundled services:
To test the legacy bundled services functionality in your Go app,
run your application in your local environment
with the development tools that you usually use, such as go run .
To deploy your app, use the gcloud app deploy command.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
