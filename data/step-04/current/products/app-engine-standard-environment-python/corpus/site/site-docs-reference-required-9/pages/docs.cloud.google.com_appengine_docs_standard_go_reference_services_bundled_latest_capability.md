---
title: "Package google.golang.org/appengine/v2/capability (v2.0.6) \_|\_ App Engine\
  \ standard environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/capability
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/capability
  title: "Package google.golang.org/appengine/v2/capability (v2.0.6) \_|\_ App Engine\
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
Package google.golang.org/appengine/v2/capability (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package capability exposes information about outages and scheduled downtime
for specific API capabilities.
This package does not work in App Engine "flexible environment".
Example:
if ! capability . Enabled ( c , "datastore_v3" , "write" ) {
// show user a different page
}
Functions
func Enabled
func Enabled ( ctx context . Context , api , capability string ) bool
Enabled returns whether an API's capabilities are enabled.
The wildcard "*" capability matches every capability of an API.
If the underlying RPC fails (if the package is unknown, for example),
false is returned and information is written to the application log.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
