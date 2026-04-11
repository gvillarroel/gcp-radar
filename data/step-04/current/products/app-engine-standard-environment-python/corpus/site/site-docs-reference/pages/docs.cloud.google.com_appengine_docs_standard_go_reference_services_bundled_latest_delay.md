---
title: "Package google.golang.org/appengine/v2/delay (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/delay
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/delay
  title: "Package google.golang.org/appengine/v2/delay (v2.0.6) \_|\_ App Engine standard\
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
Package google.golang.org/appengine/v2/delay (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Functions
func RequestHeaders
func RequestHeaders ( c context . Context ) ( * taskqueue . RequestHeaders , error )
RequestHeaders returns the special task-queue HTTP request headers for the current
task queue handler. Returns an error if called from outside a delay.Func.
Function
type Function struct {
// contains filtered or unexported fields
}
Function represents a function that may have a delayed invocation.
func Func
(deprecated)
func Func ( key string , i interface {}) * Function
Func declares a new function that can be called in a deferred fashion.
The second argument i must be a function with the first argument of
type context.Context.
To make the key globally unique, the SDK code will combine "key" with
the filename of the file in which myFunc is defined
(e.g., /some/path/myfile.go). This is convenient, but can lead to
failed deferred tasks if you refactor your code, or change from
GOPATH to go.mod, and then re-deploy with in-flight deferred tasks.
This function Func must be called in a global scope to properly
register the function with the framework.
Deprecated: Use MustRegister instead.
func MustRegister
func MustRegister ( key string , i interface {}) * Function
MustRegister declares a new function that can be called in a deferred fashion.
The second argument i must be a function with the first argument of
type context.Context.
MustRegister requires the key to be globally unique.
This function MustRegister must be called in a global scope to properly
register the function with the framework.
See the package notes above for more details.
func (*Function) Call
func ( f * Function ) Call ( c context . Context , args ... interface {}) error
Call invokes a delayed function.
err := f.Call(c, ...)
is equivalent to
t, _ := f.Task(...)
_, err := taskqueue.Add(c, t, "")
func (*Function) Task
func ( f * Function ) Task ( args ... interface {}) ( * taskqueue . Task , error )
Task creates a Task that will invoke the function.
Its parameters may be tweaked before adding it to a queue.
Users should not modify the Path or Payload fields of the returned Task.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
