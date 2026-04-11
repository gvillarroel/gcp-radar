---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.567Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine OverQuota exception error details"
feature_slug: "app-engine-overquota-exception-error-details"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest"
keywords:
  - "overquota"
  - "responses"
  - "details"
  - "exception"
  - "error"
  - "engine"
  - "now"
  - "app"
---

# App Engine OverQuota exception error details

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

OverQuota exception responses now populate available error details when provided.

## Extended Definition

OverQuota exception responses now populate available error details when provided.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- If for some reason you prefer that your app not use precompilation, you can turn it off by adding the following to your appengine-web.xml file: <precompilation-enabled>false</precompilation-enabled> <module> Note: Modules are now named Services and services are still declared in appengine-web.xml files as modules, for example: <module>service name</module> .
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- Because App Engine keeps idle instances in reserve, it is unlikely that requests will enter the pending queue except in exceptionally high load spikes.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- They take a [] Key instead of a Key, and may return an appengine.MultiError when encountering partial failure.
- In particular, whether the key has a zero StringID and a zero IntID. func ( Key) IntID func ( k Key ) IntID () int64 IntID returns the key's integer ID, which may be 0. func ( Key) Kind func ( k Key ) Kind () string Kind returns the key's kind (also known as entity type). func ( Key) MarshalJSON func ( k Key ) MarshalJSON () ([] byte , error ) func ( Key) Namespace func ( k Key ) Namespace () string Namespace returns the key's namespace. func ( Key) Parent func ( k Key ) Parent () Key Parent returns the key's parent key, which may be nil. func ( Key) String func ( k Key ) String () string String returns a string representation of the key. func ( Key) StringID func ( k Key ) StringID () string StringID returns the key's string ID (also known as an entity name or key name), which may be "". func ( Key) UnmarshalJSON func ( k Key ) UnmarshalJSON ( buf [] byte ) error KeyRangeCollisionError type KeyRangeCollisionError struct { // contains filtered or unexported fields } func ( KeyRangeCollisionError) Error func ( e KeyRangeCollisionError ) Error () string KeyRangeContentionError type KeyRangeContentionError struct { // contains filtered or unexported fields } func ( KeyRangeContentionError) Error func ( e KeyRangeContentionError ) Error () string Property type Property struct { // Name is the property name.
- Valid value types are: signed integers (int, int8, int16, int32 and int64), bool, string, float32 and float64, []byte (up to 1 megabyte in length), any type whose underlying type is one of the above predeclared types, ByteString, Key, time.Time (stored with microsecond precision), appengine.BlobKey, appengine.GeoPoint, structs whose fields are all valid value types, slices of any of the above.
- Context , key [] Key , src interface {}) ([] Key , error ) PutMulti is a batch version of Put. src must satisfy the same conditions as the dst argument to GetMulti. func ( Key) AppID func ( k Key ) AppID () string AppID returns the key's application ID. func ( Key) Encode func ( k Key ) Encode () string Encode returns an opaque representation of the key suitable for use in HTML and URLs.

### "Package google.golang.org/appengine/v2 (v2.0.6) \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This is suitable for use in constructing URLs. func InstanceID func InstanceID () string InstanceID returns a mostly-unique identifier for this instance. func IsAppEngine func IsAppEngine () bool IsAppEngine reports whether the App Engine app is running on App Engine, in either the standard or flexible environment. func IsDevAppServer func IsDevAppServer () bool IsDevAppServer reports whether the App Engine app is running in the development App Server. func IsFlex func IsFlex () bool IsFlex reports whether the App Engine app is running in the flexible environment. func IsOverQuota func IsOverQuota ( err error ) bool IsOverQuota reports whether err represents an API call failure due to insufficient available quota. func IsSecondGen func IsSecondGen () bool IsSecondGen reports whether the App Engine app is running on the second generation runtimes (>= Go 1.11). func IsStandard func IsStandard () bool IsStandard reports whether the App Engine app is running in the standard environment.
- This includes both the first generation runtimes (<= Go 1.9) and the second generation runtimes (>= Go 1.11). func IsTimeoutError func IsTimeoutError ( err error ) bool IsTimeoutError reports whether err is a timeout error. func Main func Main () Main is the principal entry point for an app running in App Engine.
- See https://cloud.google.com/appengine/docs/flexible/custom-runtimes#health check requests for details on how to do your own health checking.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2 (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.

