---
title: "Package google.golang.org/appengine/v2 (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest
  title: "Package google.golang.org/appengine/v2 (v2.0.6) \_|\_ App Engine standard\
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
Package google.golang.org/appengine/v2 (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package appengine provides basic functionality for Google App Engine.
For more information on how to write Go apps for Google App Engine, see:
https://cloud.google.com/appengine/docs/go/
Variables
Middleware
var Middleware func ( http . Handler ) http . Handler = internal . Middleware
Middleware wraps an http handler so that it can make GAE API calls
Functions
func APICall
func APICall ( ctx context . Context , service , method string , in , out proto . Message ) error
APICall performs an API call.
This is not intended for general use; it is exported for use in conjunction
with WithAPICallFunc.
func AccessToken
func AccessToken ( c context . Context , scopes string ) ( token string , expiry time . Time , err error )
AccessToken generates an OAuth2 access token for the specified scopes on
behalf of service account of this application. This token will expire after
the returned time.
func AppID
func AppID ( c context . Context ) string
AppID returns the application ID for the current application.
The string will be a plain application ID (e.g. "appid"), with a
domain prefix for custom domain deployments (e.g. "example.com:appid").
func BackgroundContext
(deprecated)
func BackgroundContext () context . Context
BackgroundContext returns a context not associated with a request.
Deprecated: App Engine no longer has a special background context.
Just use context.Background().
func Datacenter
func Datacenter ( c context . Context ) string
Datacenter returns an identifier for the datacenter that the instance is running in.
func DefaultVersionHostname
func DefaultVersionHostname ( c context . Context ) string
DefaultVersionHostname returns the standard hostname of the default version
of the current application (e.g. "my-app.appspot.com"). This is suitable for
use in constructing URLs.
func InstanceID
func InstanceID () string
InstanceID returns a mostly-unique identifier for this instance.
func IsAppEngine
func IsAppEngine () bool
IsAppEngine reports whether the App Engine app is running on App Engine, in either
the standard or flexible environment.
func IsDevAppServer
func IsDevAppServer () bool
IsDevAppServer reports whether the App Engine app is running in the
development App Server.
func IsFlex
func IsFlex () bool
IsFlex reports whether the App Engine app is running in the flexible environment.
func IsOverQuota
func IsOverQuota ( err error ) bool
IsOverQuota reports whether err represents an API call failure
due to insufficient available quota.
func IsSecondGen
func IsSecondGen () bool
IsSecondGen reports whether the App Engine app is running on the second generation
runtimes (>= Go 1.11).
func IsStandard
func IsStandard () bool
IsStandard reports whether the App Engine app is running in the standard
environment. This includes both the first generation runtimes (<= Go 1.9)
and the second generation runtimes (>= Go 1.11).
func IsTimeoutError
func IsTimeoutError ( err error ) bool
IsTimeoutError reports whether err is a timeout error.
func Main
func Main ()
Main is the principal entry point for an app running in App Engine.
On App Engine Flexible it installs a trivial health checker if one isn't
already registered, and starts listening on port 8080 (overridden by the
$PORT environment variable).
See https://cloud.google.com/appengine/docs/flexible/custom-runtimes#health_check_requests
for details on how to do your own health checking.
On App Engine Standard it ensures the server has started and is prepared to
receive requests.
Main never returns.
Main is designed so that the app's main package looks like this:
package main
import (
"google.golang.org/appengine/v2"
_ "myapp/package0"
_ "myapp/package1"
)
func main() {
appengine. Main ()
}
The "myapp/packageX" packages are expected to register HTTP handlers
in their init functions.
func ModuleHostname
func ModuleHostname ( c context . Context , module , version , instance string ) ( string , error )
ModuleHostname returns a hostname of a module instance.
If module is the empty string, it refers to the module of the current instance.
If version is empty, it refers to the version of the current instance if valid,
or the default version of the module of the current instance.
If instance is empty, ModuleHostname returns the load-balancing hostname.
func ModuleName
func ModuleName ( c context . Context ) string
ModuleName returns the module name of the current instance.
func Namespace
func Namespace ( c context . Context , namespace string ) ( context . Context , error )
Namespace returns a replacement context that operates within the given namespace.
func NewContext
func NewContext ( req * http . Request ) context . Context
NewContext returns a context for an in-flight HTTP request.
This function is cheap.
func RequestID
func RequestID ( c context . Context ) string
RequestID returns a string that uniquely identifies the request.
func ServerSoftware
func ServerSoftware () string
ServerSoftware returns the App Engine release version.
In production, it looks like "Google App Engine/X.Y.Z".
In the development appserver, it looks like "Development/X.Y".
func ServiceAccount
func ServiceAccount ( c context . Context ) ( string , error )
ServiceAccount returns a string representing the service account name, in
the form of an email address (typically app_id@appspot.gserviceaccount.com).
func SignBytes
func SignBytes ( c context . Context , bytes [] byte ) ( keyName string , signature [] byte , err error )
SignBytes signs bytes using a private key unique to your application.
func VersionID
func VersionID ( c context . Context ) string
VersionID returns the version ID for the current application.
It will be of the form "X.Y", where X is specified in app.yaml,
and Y is a number generated when each version of the app is uploaded.
It does not include a module name.
func WithAPICallFunc
func WithAPICallFunc ( ctx context . Context , f APICallFunc ) context . Context
WithAPICallFunc returns a copy of the parent context
that will cause API calls to invoke f instead of their normal operation.
This is intended for advanced users only.
func WithContext
func WithContext ( parent context . Context , req * http . Request ) context . Context
WithContext returns a copy of the parent context
and associates it with an in-flight HTTP request.
This function is cheap.
APICallFunc
type APICallFunc func ( ctx context . Context , service , method string , in , out proto . Message ) error
APICallFunc defines a function type for handling an API call.
See WithCallOverride.
BlobKey
type BlobKey string
BlobKey is a key for a blobstore blob.
Conceptually, this type belongs in the blobstore package, but it lives in
the appengine package to avoid a circular dependency: blobstore depends on
datastore, and datastore needs to refer to the BlobKey type.
Certificate
type Certificate struct {
KeyName string
Data [] byte // PEM-encoded X.509 certificate
}
Certificate represents a public certificate for the app.
func PublicCertificates
func PublicCertificates ( c context . Context ) ([] Certificate , error )
PublicCertificates retrieves the public certificates for the app.
They can be used to verify a signature returned by SignBytes.
GeoPoint
type GeoPoint struct {
Lat , Lng float64
}
GeoPoint represents a location as latitude/longitude in degrees.
func (GeoPoint) Valid
func ( g GeoPoint ) Valid () bool
Valid returns whether a GeoPoint is within [-90, 90] latitude and [-180, 180] longitude.
MultiError
type MultiError [] error
MultiError is returned by batch operations when there are errors with
particular elements. Errors will be in a one-to-one correspondence with
the input elements; successful elements will have a nil entry.
func (MultiError) Error
func ( m MultiError ) Error () string
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
