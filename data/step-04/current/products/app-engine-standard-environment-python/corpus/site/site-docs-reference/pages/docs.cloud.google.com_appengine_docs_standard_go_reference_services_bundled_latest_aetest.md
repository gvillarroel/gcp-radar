---
title: "Package google.golang.org/appengine/v2/aetest (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/aetest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/aetest
  title: "Package google.golang.org/appengine/v2/aetest (v2.0.6) \_|\_ App Engine\
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
Package google.golang.org/appengine/v2/aetest (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package aetest provides an API for running dev_appserver for use in tests.
An example test file:
package foo_test
import (
"testing"
"google.golang.org/appengine/v2/memcache"
"google.golang.org/appengine/v2/aetest"
)
func TestFoo ( t * testing . T ) {
ctx , done , err := aetest . NewContext ()
if err != nil {
t . Fatal ( err )
}
defer done ()
it := & memcache . Item {
Key : "some-key" ,
Value : [] byte ( "some-value" ),
}
err = memcache . Set ( ctx , it )
if err != nil {
t . Fatalf ( "Set err: %v" , err )
}
it , err = memcache . Get ( ctx , "some-key" )
if err != nil {
t . Fatalf ( "Get err: %v; want no error" , err )
}
if g , w := string ( it . Value ), "some-value" ; g != w {
t . Errorf ( "retrieved Item.Value = %q, want %q" , g , w )
}
}
The environment variable APPENGINE_DEV_APPSERVER specifies the location of the
dev_appserver.py executable to use. If unset, the system PATH is consulted.
Variables
PrepareDevAppserver
var PrepareDevAppserver func () error
PrepareDevAppserver is a hook which, if set, will be called before the
dev_appserver.py is started, each time it is started. If aetest.NewContext
is invoked from the goapp test tool, this hook is unnecessary.
Functions
func Login
func Login ( u * user . User , req * http . Request )
Login causes the provided Request to act as though issued by the given user.
func Logout
func Logout ( req * http . Request )
Logout causes the provided Request to act as though issued by a logged-out
user.
func NewContext
func NewContext () ( context . Context , func (), error )
NewContext starts an instance of the development API server, and returns
a context that will route all API calls to that server, as well as a
closure that must be called when the Context is no longer required.
Instance
type Instance interface {
// Close kills the child api_server.py process, releasing its resources.
io . Closer
// NewRequest returns an *http.Request associated with this instance.
NewRequest ( method , urlStr string , body io . Reader ) ( * http . Request , error )
}
Instance represents a running instance of the development API Server.
func NewInstance
func NewInstance ( opts * Options ) ( Instance , error )
NewInstance launches a running instance of api_server.py which can be used
for multiple test Contexts that delegate all App Engine API calls to that
instance.
If opts is nil the default values are used.
Options
type Options struct {
// AppID specifies the App ID to use during tests.
// By default, "testapp".
AppID string
// StronglyConsistentDatastore is whether the local datastore should be
// strongly consistent. This will diverge from production behaviour.
StronglyConsistentDatastore bool
// SupportDatastoreEmulator is whether use Cloud Datastore Emulator or
// use old SQLite based Datastore backend or use default settings.
SupportDatastoreEmulator * bool
// SuppressDevAppServerLog is whether the dev_appserver running in tests
// should output logs.
SuppressDevAppServerLog bool
// StartupTimeout is a duration to wait for instance startup.
// By default, 15 seconds.
StartupTimeout time . Duration
}
Options is used to specify options when creating an Instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
