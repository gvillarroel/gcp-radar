---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.375Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine platform version 1.9.40"
feature_slug: "app-engine-platform-version-1-9-40"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml"
keywords:
  - "40"
  - "platform"
  - "released"
  - "version"
  - "engine"
  - "was"
  - "app"
---

# App Engine platform version 1.9.40

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

App Engine version 1.9.40 was released.

## Extended Definition

App Engine version 1.9.40 was released.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Valid value types are: signed integers (int, int8, int16, int32 and int64), bool, string, float32 and float64, []byte (up to 1 megabyte in length), any type whose underlying type is one of the above predeclared types, ByteString, Key, time.Time (stored with microsecond precision), appengine.BlobKey, appengine.GeoPoint, structs whose fields are all valid value types, slices of any of the above.
- Context , key [] Key , src interface {}) ([] Key , error ) PutMulti is a batch version of Put. src must satisfy the same conditions as the dst argument to GetMulti. func ( Key) AppID func ( k Key ) AppID () string AppID returns the key's application ID. func ( Key) Encode func ( k Key ) Encode () string Encode returns an opaque representation of the key suitable for use in HTML and URLs.
- The valid types are: // - int64 // - bool // - string // - float64 // - ByteString // - Key // - time.Time // - appengine.BlobKey // - appengine.GeoPoint // - []byte (up to 1 megabyte in length) // - Entity (representing a nested struct) // This set is smaller than the set of valid struct field types that the // datastore can load and save.
- The representation types for the supported Go property types are: "INT64": signed integers and time.Time "DOUBLE": float32 and float64 "BOOLEAN": bool "STRING": string, []byte and ByteString "POINT": appengine.GeoPoint "REFERENCE": Key "USER": (not used in the Go runtime) func Kinds func Kinds ( ctx context .

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- For more information, see .NET runtime . runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.

