---
title: "Package google.golang.org/appengine/v2/runtime (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/runtime
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/runtime
  title: "Package google.golang.org/appengine/v2/runtime (v2.0.6) \_|\_ App Engine\
    \ standard environment \_|\_ Google Cloud Documentation"
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
Package google.golang.org/appengine/v2/runtime (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package runtime exposes information about the resource usage of the application.
It also provides a way to run code in a new background context of a module.
This package does not work on App Engine "flexible environment".
Functions
func RunInBackground
func RunInBackground ( c context . Context , f func ( c context . Context )) error
RunInBackground runs f in a background goroutine in this process.
f is provided a context that may outlast the context provided to RunInBackground.
This is only valid to invoke from a service set to basic or manual scaling.
Statistics
type Statistics struct {
// CPU records the CPU consumed by this instance, in megacycles.
CPU struct {
Total float64
Rate1M float64 // consumption rate over one minute
Rate10M float64 // consumption rate over ten minutes
}
// RAM records the memory used by the instance, in megabytes.
RAM struct {
Current float64
Average1M float64 // average usage over one minute
Average10M float64 // average usage over ten minutes
}
}
Statistics represents the system's statistics.
func Stats
func Stats ( c context . Context ) ( * Statistics , error )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
