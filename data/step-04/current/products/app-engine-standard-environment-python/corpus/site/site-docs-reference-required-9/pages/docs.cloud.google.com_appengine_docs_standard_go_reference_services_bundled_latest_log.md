---
title: "Package google.golang.org/appengine/v2/log (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/log
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/log
  title: "Package google.golang.org/appengine/v2/log (v2.0.6) \_|\_ App Engine standard\
    \ environment \_|\_ Google Cloud Documentation"
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
Package google.golang.org/appengine/v2/log (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Functions
func Criticalf
func Criticalf ( ctx context . Context , format string , args ... interface {})
Criticalf is like Debugf, but at Critical level.
func Debugf
func Debugf ( ctx context . Context , format string , args ... interface {})
Debugf formats its arguments according to the format, analogous to fmt.Printf,
and records the text as a log message at Debug level. The message will be associated
with the request linked with the provided context.
func Errorf
func Errorf ( ctx context . Context , format string , args ... interface {})
Errorf is like Debugf, but at Error level.
func Infof
func Infof ( ctx context . Context , format string , args ... interface {})
Infof is like Debugf, but at Info level.
func Warningf
func Warningf ( ctx context . Context , format string , args ... interface {})
Warningf is like Debugf, but at Warning level.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
