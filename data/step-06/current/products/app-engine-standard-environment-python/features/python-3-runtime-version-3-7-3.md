---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.139Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Python 3 runtime version 3.7.3"
feature_slug: "python-3-runtime-version-3-7-3"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
keywords:
  - "updated"
  - "version"
  - "runtime"
  - "python"
  - "engine"
  - "was"
  - "the"
  - "app"
---

# Python 3 runtime version 3.7.3

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

The App Engine Python runtime was updated to Python 3.7.3.

## Extended Definition

The App Engine Python runtime was updated to Python 3.7.3.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)

## Supporting Pages

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- The Python runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : python VERSION Where VERSION is the Python MAJOR and MINOR version numbers.
- The following example shows how to use uwsgi with App Engine: runtime : python313 entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2 uwsgi==2.0.22 Flask==3.0.0 Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- For example, your application might be deployed at Python 3.7.0 and later automatically updated to Python 3.7.1, but it will not be automatically updated to the next minor version Python 3.8.0.
- The Python runtime is the software stack responsible for installing your web service's code and its dependencies and running your App Engine service.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- Create the app.yaml file Every App Engine project has an app.yaml configuration file which specifies your service's runtime environment settings.
- For a deeper dive into how App Engine works, see the Go Runtime Environment .

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The representation types for the supported Go property types are: "INT64": signed integers and time.Time "DOUBLE": float32 and float64 "BOOLEAN": bool "STRING": string, []byte and ByteString "POINT": appengine.GeoPoint "REFERENCE": Key "USER": (not used in the Go runtime) func Kinds func Kinds ( ctx context .
- The context provided must be an App Engine context if running in App Engine first generation runtime.
- This is compatible with the Python and Java runtimes. func ( Key) Equal func ( k Key ) Equal ( o Key ) bool Equal returns whether two keys are equal. func ( Key) GobDecode func ( k Key ) GobDecode ( buf [] byte ) error func ( Key) GobEncode func ( k Key ) GobEncode () ([] byte , error ) func ( Key) Incomplete func ( k Key ) Incomplete () bool Incomplete returns whether the key does not refer to a stored entity.
- Valid value types are: signed integers (int, int8, int16, int32 and int64), bool, string, float32 and float64, []byte (up to 1 megabyte in length), any type whose underlying type is one of the above predeclared types, ByteString, Key, time.Time (stored with microsecond precision), appengine.BlobKey, appengine.GeoPoint, structs whose fields are all valid value types, slices of any of the above.

