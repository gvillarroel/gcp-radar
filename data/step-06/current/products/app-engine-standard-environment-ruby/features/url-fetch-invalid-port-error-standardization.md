---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.378Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "URL Fetch invalid port error standardization"
feature_slug: "url-fetch-invalid-port-error-standardization"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "standardization"
  - "invalid"
  - "port"
  - "fetch"
  - "requests"
  - "error"
  - "url"
  - "to"
---

# URL Fetch invalid port error standardization

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

URL Fetch requests to disallowed ports now consistently return an INVALID_URL error.

## Extended Definition

URL Fetch requests to disallowed ports now consistently return an INVALID_URL error.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).
- All subsequent requests for this URL that don't contain the Accept-Encoding header receive uncompressed data from the cache until the cache becomes invalidated.
- Requests to these runtimes with header fields exceeding 8 kilobytes will return HTTP 400 errors.
- Vary : To enable the cache to return different responses for a URL based on headers that are sent in the request, set one or more of the following values in the Vary response header: Accept , Accept-Encoding , Origin , or X-Origin Due to the potential for high cardinality, data won't be cached for other Vary values.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- StructType is the type of the struct pointed to by the destination argument passed to Get or to Iterator.Next. func ( ErrFieldMismatch) Error func ( e ErrFieldMismatch ) Error () string Iterator type Iterator struct { // contains filtered or unexported fields } Iterator is the result of running a query. func ( Iterator) Cursor func ( t Iterator ) Cursor () ( Cursor , error ) Cursor returns a cursor for the iterator's current location. func ( Iterator) Next func ( t Iterator ) Next ( dst interface {}) ( Key , error ) Next returns the key of the next result.
- Context , key [] Key , src interface {}) ([] Key , error ) PutMulti is a batch version of Put. src must satisfy the same conditions as the dst argument to GetMulti. func ( Key) AppID func ( k Key ) AppID () string AppID returns the key's application ID. func ( Key) Encode func ( k Key ) Encode () string Encode returns an opaque representation of the key suitable for use in HTML and URLs.
- A cursor can be used from different HTTP requests, but only with a query with the same kind, ancestor, filter and order constraints. func DecodeCursor func DecodeCursor ( s string ) ( Cursor , error ) DecodeCursor decodes a cursor from its base-64 string representation. func (Cursor) String func ( c Cursor ) String () string String returns a base-64 string representation of a cursor.
- Key type Key struct { // contains filtered or unexported fields } Key represents the datastore key for a stored entity, and is immutable. func DecodeKey func DecodeKey ( encoded string ) ( Key , error ) DecodeKey decodes a key from the opaque representation returned by Encode. func NewIncompleteKey func NewIncompleteKey ( c context .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- If you set url-stream-handler to urlfetch , URL.openConnection and related methods will use URL Fetch for http and https transport. <url-stream-handler>urlfetch</url-stream-handler> <version> The <version> element contains the version identifier for the latest version of the app's code.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- You can set up different static files to be served for each supported error code by specifying the files in your app's appengine-web.xml file.
- To match a 60-second overall request/URL Fetch deadline, set it to 60000 .

