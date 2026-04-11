---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.815Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go runtime standard context usage in appengine.NewContext"
feature_slug: "go-runtime-standard-context-usage-in-appengine-newcontext"
latest_feature_date: "2017-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
keywords:
  - "newcontext"
  - "appengine"
  - "context"
  - "usage"
  - "standard"
  - "runtime"
  - "in"
  - "go"
---

# Go runtime standard context usage in appengine.NewContext

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

Go 1.8 in App Engine now uses the Go standard library context package when calling appengine.NewContext().

## Extended Definition

Go 1.8 in App Engine now uses the Go standard library context package when calling appengine.NewContext().

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)

## Supporting Pages

### "Package google.golang.org/appengine/v2 (v2.0.6) \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a Go API reference for `google.golang.org/appengine/v2` and shows standard `context.Context` usage, but it does not document `appengine.NewContext` or the Go 1.8 runtime behavior directly.

Evidence snippets:
- This is suitable for use in constructing URLs. func InstanceID func InstanceID () string InstanceID returns a mostly-unique identifier for this instance. func IsAppEngine func IsAppEngine () bool IsAppEngine reports whether the App Engine app is running on App Engine, in either the standard or flexible environment. func IsDevAppServer func IsDevAppServer () bool IsDevAppServer reports whether the App Engine app is running in the development App Server. func IsFlex func IsFlex () bool IsFlex reports whether the App Engine app is running in the flexible environment. func IsOverQuota func IsOverQuota ( err error ) bool IsOverQuota reports whether err represents an API call failure due to insufficient available quota. func IsSecondGen func IsSecondGen () bool IsSecondGen reports whether the App Engine app is running on the second generation runtimes (>= Go 1.11). func IsStandard func IsStandard () bool IsStandard reports whether the App Engine app is running in the standard environment.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2 (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- See https://cloud.google.com/appengine/docs/flexible/custom-runtimes#health check requests for details on how to do your own health checking.
- This includes both the first generation runtimes (<= Go 1.9) and the second generation runtimes (>= Go 1.11). func IsTimeoutError func IsTimeoutError ( err error ) bool IsTimeoutError reports whether err is a timeout error. func Main func Main () Main is the principal entry point for an app running in App Engine.

### "Package google.golang.org/appengine/v2/runtime (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/runtime)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/runtime (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- RAM struct { Current float64 Average1M float64 // average usage over one minute Average10M float64 // average usage over ten minutes } } Statistics represents the system's statistics. func Stats func Stats ( c context .
- Context )) error RunInBackground runs f in a background goroutine in this process. f is provided a context that may outlast the context provided to RunInBackground.
- Package runtime exposes information about the resource usage of the application.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a Go datastore API reference and only shows a call to appengine.NewContext(r) in an example, without describing the Go 1.8 standard context migration behavior.

Evidence snippets:
- The representation types for the supported Go property types are: "INT64": signed integers and time.Time "DOUBLE": float32 and float64 "BOOLEAN": bool "STRING": string, []byte and ByteString "POINT": appengine.GeoPoint "REFERENCE": Key "USER": (not used in the Go runtime) func Kinds func Kinds ( ctx context .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/datastore (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- This is compatible with the Python and Java runtimes. func ( Key) Equal func ( k Key ) Equal ( o Key ) bool Equal returns whether two keys are equal. func ( Key) GobDecode func ( k Key ) GobDecode ( buf [] byte ) error func ( Key) GobEncode func ( k Key ) GobEncode () ([] byte , error ) func ( Key) Incomplete func ( k Key ) Incomplete () bool Incomplete returns whether the key does not refer to a stored entity.
- The context provided must be an App Engine context if running in App Engine first generation runtime.

