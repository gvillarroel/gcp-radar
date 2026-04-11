---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.393Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "URLFetch payload size error handling"
feature_slug: "urlfetch-payload-size-error-handling"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
keywords:
  - "requestpayloadtoolargeexception"
  - "urlfetch"
  - "handling"
  - "raises"
  - "size"
  - "payload"
  - "error"
  - "now"
---

# URLFetch payload size error handling

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed allowed limits.

## Extended Definition

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed allowed limits.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- If for some reason you prefer that your app not use precompilation, you can turn it off by adding the following to your appengine-web.xml file: <precompilation-enabled>false</precompilation-enabled> <module> Note: Modules are now named Services and services are still declared in appengine-web.xml files as modules, for example: <module>service name</module> .
- Specify the timeout in seconds: < system - properties > < property name = "appengine.api.urlfetch.defaultDeadline" value = "10" / > < / system - properties > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you set url-stream-handler to urlfetch , URL.openConnection and related methods will use URL Fetch for http and https transport. <url-stream-handler>urlfetch</url-stream-handler> <version> The <version> element contains the version identifier for the latest version of the app's code.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- Response headers that exceed this limit will return HTTP 502 errors, with logs showing upstream sent too big header while reading response header from upstream .
- If a script handler generates a response larger than this limit, the server sends back an empty response with a 500 Internal Server Error status code.
- Handling request timeouts App Engine is optimized for applications with short-lived requests, typically those that take a few hundred milliseconds.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- In particular, whether the key has a zero StringID and a zero IntID. func ( Key) IntID func ( k Key ) IntID () int64 IntID returns the key's integer ID, which may be 0. func ( Key) Kind func ( k Key ) Kind () string Kind returns the key's kind (also known as entity type). func ( Key) MarshalJSON func ( k Key ) MarshalJSON () ([] byte , error ) func ( Key) Namespace func ( k Key ) Namespace () string Namespace returns the key's namespace. func ( Key) Parent func ( k Key ) Parent () Key Parent returns the key's parent key, which may be nil. func ( Key) String func ( k Key ) String () string String returns a string representation of the key. func ( Key) StringID func ( k Key ) StringID () string StringID returns the key's string ID (also known as an entity name or key name), which may be "". func ( Key) UnmarshalJSON func ( k Key ) UnmarshalJSON ( buf [] byte ) error KeyRangeCollisionError type KeyRangeCollisionError struct { // contains filtered or unexported fields } func ( KeyRangeCollisionError) Error func ( e KeyRangeCollisionError ) Error () string KeyRangeContentionError type KeyRangeContentionError struct { // contains filtered or unexported fields } func ( KeyRangeContentionError) Error func ( e KeyRangeContentionError ) Error () string Property type Property struct { // Name is the property name.
- StructType is the type of the struct pointed to by the destination argument passed to Get or to Iterator.Next. func ( ErrFieldMismatch) Error func ( e ErrFieldMismatch ) Error () string Iterator type Iterator struct { // contains filtered or unexported fields } Iterator is the result of running a query. func ( Iterator) Cursor func ( t Iterator ) Cursor () ( Cursor , error ) Cursor returns a cursor for the iterator's current location. func ( Iterator) Next func ( t Iterator ) Next ( dst interface {}) ( Key , error ) Next returns the key of the next result.
- This is compatible with the Python and Java runtimes. func ( Key) Equal func ( k Key ) Equal ( o Key ) bool Equal returns whether two keys are equal. func ( Key) GobDecode func ( k Key ) GobDecode ( buf [] byte ) error func ( Key) GobEncode func ( k Key ) GobEncode () ([] byte , error ) func ( Key) Incomplete func ( k Key ) Incomplete () bool Incomplete returns whether the key does not refer to a stored entity.
- Context , key [] Key , src interface {}) ([] Key , error ) PutMulti is a batch version of Put. src must satisfy the same conditions as the dst argument to GetMulti. func ( Key) AppID func ( k Key ) AppID () string AppID returns the key's application ID. func ( Key) Encode func ( k Key ) Encode () string Encode returns an opaque representation of the key suitable for use in HTML and URLs.

