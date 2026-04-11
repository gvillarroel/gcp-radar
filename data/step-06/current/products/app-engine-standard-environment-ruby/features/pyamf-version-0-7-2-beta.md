---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.394Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "PyAMF version 0.7.2 Beta"
feature_slug: "pyamf-version-0-7-2-beta"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml"
keywords:
  - "pyamf"
  - "added"
  - "beta"
  - "version"
  - "was"
  - "the"
  - "app"
  - "to"
---

# PyAMF version 0.7.2 Beta

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

PyAMF 0.7.2 Beta was added to the App Engine Ruby environment.

## Extended Definition

PyAMF 0.7.2 Beta was added to the App Engine Ruby environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- REGION ID .r.appspot.com , run the following command to launch your browser: gcloud app browse Common gcloud command flags Include the --version flag to specify an ID that uniquely identifies that version of your app, otherwise one is generated for you.
- Example: --project [YOUR PROJECT ID] Example: gcloud app deploy --version pre-prod-5 --project my-sample-app To learn more about deploying your app from the command line, see Testing and Deploying Your App .
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Context , key [] Key , src interface {}) ([] Key , error ) PutMulti is a batch version of Put. src must satisfy the same conditions as the dst argument to GetMulti. func ( Key) AppID func ( k Key ) AppID () string AppID returns the key's application ID. func ( Key) Encode func ( k Key ) Encode () string Encode returns an opaque representation of the key suitable for use in HTML and URLs.
- For example, given these definitions: type Inner1 struct { W int32 X string } type Inner2 struct { Y float64 } type Inner3 struct { Z bool } type Outer struct { A int16 I [] Inner1 J Inner2 Inner3 } then an Outer's properties would be equivalent to those of: type OuterEquivalent struct { A int16 IDotW [] int32 datastore:"I.W" IDotX [] string datastore:"I.X" JDotY float64 datastore:"J.Y" Z bool } If Outer's embedded Inner3 field was tagged as datastore:&quot;Foo&quot; then the equivalent field would instead be: FooDotZ bool datastore:&quot;Foo.Z&quot; .
- Valid value types are: signed integers (int, int8, int16, int32 and int64), bool, string, float32 and float64, []byte (up to 1 megabyte in length), any type whose underlying type is one of the above predeclared types, ByteString, Key, time.Time (stored with microsecond precision), appengine.BlobKey, appengine.GeoPoint, structs whose fields are all valid value types, slices of any of the above.
- The valid types are: // - int64 // - bool // - string // - float64 // - ByteString // - Key // - time.Time // - appengine.BlobKey // - appengine.GeoPoint // - []byte (up to 1 megabyte in length) // - Entity (representing a nested struct) // This set is smaller than the set of valid struct field types that the // datastore can load and save.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The following app.yaml demonstrates how to configure your app to use the latest .NET version.
- To use any other supported version of .NET, you must update your app.yaml file.
- We recommend that you upgrade your app to use the latest version of .NET.
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.flexible.yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .

