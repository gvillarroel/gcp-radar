---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.135Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Cloud SDK-only App Engine SDK distribution"
feature_slug: "cloud-sdk-only-app-engine-sdk-distribution"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search"
keywords:
  - "functionality"
  - "distribution"
  - "moved"
  - "only"
  - "sdk"
  - "engine"
  - "was"
  - "app"
---

# Cloud SDK-only App Engine SDK distribution

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

App Engine SDK functionality was moved to be available exclusively through the Cloud SDK.

## Extended Definition

App Engine SDK functionality was moved to be available exclusively through the Cloud SDK.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For more information regarding EE support, see Upgrade Java on a compatible Enterprise Edition (EE) version . <system-properties> <property name="appengine.use.EE11" value="true"/><!--only for Java 25--> </system-properties> Starting in Java 21, you can configure your Java web server to use virtual threads.
- You should use the appengine-web.xml file for configuring your app only if you are migrating an existing app from the App Engine Java 8 runtime to the latest supported Java version and you want to use the legacy bundled services .
- Staging element App Engine SDK-based defaults - Google Cloud SDK-based defaults enable-jar-splitting false true jar-splitting-excludes N/A N/A disable-jar-jsps false false enable-jar-classes false true .
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . <entrypoint> Optional and only for second-generation runtimes.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Valid value types are: signed integers (int, int8, int16, int32 and int64), bool, string, float32 and float64, []byte (up to 1 megabyte in length), any type whose underlying type is one of the above predeclared types, ByteString, Key, time.Time (stored with microsecond precision), appengine.BlobKey, appengine.GeoPoint, structs whose fields are all valid value types, slices of any of the above.
- The valid types are: // - int64 // - bool // - string // - float64 // - ByteString // - Key // - time.Time // - appengine.BlobKey // - appengine.GeoPoint // - []byte (up to 1 megabyte in length) // - Entity (representing a nested struct) // This set is smaller than the set of valid struct field types that the // datastore can load and save.
- The representation types for the supported Go property types are: "INT64": signed integers and time.Time "DOUBLE": float32 and float64 "BOOLEAN": bool "STRING": string, []byte and ByteString "POINT": appengine.GeoPoint "REFERENCE": Key "USER": (not used in the Go runtime) func Kinds func Kinds ( ctx context .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/datastore (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.

### "Package google.golang.org/appengine/v2/search (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/search (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- The returned error may be an instance of appengine.MultiError, in which case it will be the same size as srcs and the individual errors inside will correspond with the items in srcs. func ( Index) Get func ( x Index ) Get ( c context .
- The query language is described at https://cloud.google.com/appengine/docs/standard/go/search/query strings Search also takes an optional SearchOptions struct which gives much more control over how results are calculated and returned.
- The error may be an instance of appengine.MultiError, in which case it will be the same size as srcs and the individual errors inside will correspond with the items in srcs. func ( Index) Search func ( x Index ) Search ( c context .

