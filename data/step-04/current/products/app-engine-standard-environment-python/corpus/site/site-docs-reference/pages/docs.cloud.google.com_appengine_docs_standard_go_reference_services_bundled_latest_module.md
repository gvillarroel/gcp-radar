---
title: "Package google.golang.org/appengine/v2/module (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/module
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/module
  title: "Package google.golang.org/appengine/v2/module (v2.0.6) \_|\_ App Engine\
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
Package google.golang.org/appengine/v2/module (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package module provides functions for interacting with modules.
The appengine package contains functions that report the identity of the app,
including the module name.
Functions
func DefaultVersion
func DefaultVersion ( c context . Context , module string ) ( string , error )
DefaultVersion returns the default version of the specified module.
If module is the empty string, it means the default module.
func List
func List ( c context . Context ) ([] string , error )
List returns the names of modules belonging to this application.
func NumInstances
func NumInstances ( c context . Context , module , version string ) ( int , error )
NumInstances returns the number of instances of the given module/version.
If either argument is the empty string it means the default. This only works
if you are using manual_scaling in your app's config file.
func SetNumInstances
func SetNumInstances ( c context . Context , module , version string , instances int ) error
SetNumInstances sets the number of instances of the given module.version to the
specified value. If either module or version are the empty string it means the
default.
func Start
func Start ( c context . Context , module , version string ) error
Start starts the specified version of the specified module.
If either module or version are the empty string, it means the default.
func Stop
func Stop ( c context . Context , module , version string ) error
Stop stops the specified version of the specified module.
If either module or version are the empty string, it means the default.
func Versions
func Versions ( c context . Context , module string ) ([] string , error )
Versions returns the names of the versions that belong to the specified module.
If module is the empty string, it means the default module.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
