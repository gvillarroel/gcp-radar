---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.565Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "URL Fetch invalid URL error behavior"
feature_slug: "url-fetch-invalid-url-error-behavior"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "consistently"
  - "invalid"
  - "returns"
  - "fetch"
  - "behavior"
  - "error"
  - "url"
  - "now"
---

# URL Fetch invalid URL error behavior

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

URL Fetch now consistently returns INVALID_URL for requests to ports outside the permitted ranges.

## Extended Definition

URL Fetch now consistently returns INVALID_URL for requests to ports outside the permitted ranges.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Package google.golang.org/appengine/v2/urlfetch (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Per the http.RoundTripper interface, RoundTrip only returns an error if there was an unsupported request or the URL Fetch proxy fails.
- New ( "urlfetch: truncated body" ) ErrTruncatedBody is the error returned after the final Read() from a response's Body if the body has been truncated by App Engine's proxy.
- Client Client returns an http.Client using a default urlfetch Transport.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/urlfetch (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- In particular, whether the key has a zero StringID and a zero IntID. func ( Key) IntID func ( k Key ) IntID () int64 IntID returns the key's integer ID, which may be 0. func ( Key) Kind func ( k Key ) Kind () string Kind returns the key's kind (also known as entity type). func ( Key) MarshalJSON func ( k Key ) MarshalJSON () ([] byte , error ) func ( Key) Namespace func ( k Key ) Namespace () string Namespace returns the key's namespace. func ( Key) Parent func ( k Key ) Parent () Key Parent returns the key's parent key, which may be nil. func ( Key) String func ( k Key ) String () string String returns a string representation of the key. func ( Key) StringID func ( k Key ) StringID () string StringID returns the key's string ID (also known as an entity name or key name), which may be "". func ( Key) UnmarshalJSON func ( k Key ) UnmarshalJSON ( buf [] byte ) error KeyRangeCollisionError type KeyRangeCollisionError struct { // contains filtered or unexported fields } func ( KeyRangeCollisionError) Error func ( e KeyRangeCollisionError ) Error () string KeyRangeContentionError type KeyRangeContentionError struct { // contains filtered or unexported fields } func ( KeyRangeContentionError) Error func ( e KeyRangeContentionError ) Error () string Property type Property struct { // Name is the property name.
- Context , key [] Key , src interface {}) ([] Key , error ) PutMulti is a batch version of Put. src must satisfy the same conditions as the dst argument to GetMulti. func ( Key) AppID func ( k Key ) AppID () string AppID returns the key's application ID. func ( Key) Encode func ( k Key ) Encode () string Encode returns an opaque representation of the key suitable for use in HTML and URLs.
- StructType is the type of the struct pointed to by the destination argument passed to Get or to Iterator.Next. func ( ErrFieldMismatch) Error func ( e ErrFieldMismatch ) Error () string Iterator type Iterator struct { // contains filtered or unexported fields } Iterator is the result of running a query. func ( Iterator) Cursor func ( t Iterator ) Cursor () ( Cursor , error ) Cursor returns a cursor for the iterator's current location. func ( Iterator) Next func ( t Iterator ) Next ( dst interface {}) ( Key , error ) Next returns the key of the next result.
- This is compatible with the Python and Java runtimes. func ( Key) Equal func ( k Key ) Equal ( o Key ) bool Equal returns whether two keys are equal. func ( Key) GobDecode func ( k Key ) GobDecode ( buf [] byte ) error func ( Key) GobEncode func ( k Key ) GobEncode () ([] byte , error ) func ( Key) Incomplete func ( k Key ) Incomplete () bool Incomplete returns whether the key does not refer to a stored entity.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Specify the timeout in seconds: < system - properties > < property name = "appengine.api.urlfetch.defaultDeadline" value = "10" / > < / system - properties > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you set url-stream-handler to urlfetch , URL.openConnection and related methods will use URL Fetch for http and https transport. <url-stream-handler>urlfetch</url-stream-handler> <version> The <version> element contains the version identifier for the latest version of the app's code.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- This idle timeout configuration isn't the same as the overall request deadline for scaling, or the URL Fetch API deadline that you configure using appengine.api.urlfetch.defaultDeadline . <inbound-services> Optional.

