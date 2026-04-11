---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.392Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "oauth2client library version 1.4.2"
feature_slug: "oauth2client-library-version-1-4-2"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "oauth2client"
  - "upgraded"
  - "library"
  - "version"
  - "was"
  - "the"
  - "to"
---

# oauth2client library version 1.4.2

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

The oauth2client library was upgraded to version 1.4.2.

## Extended Definition

The oauth2client library was upgraded to version 1.4.2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Context ) EnableKeyConversion enables encoded key compatibility with the Cloud Datastore client library (cloud.google.com/go/datastore).
- For example, given these definitions: type Inner1 struct { W int32 X string } type Inner2 struct { Y float64 } type Inner3 struct { Z bool } type Outer struct { A int16 I [] Inner1 J Inner2 Inner3 } then an Outer's properties would be equivalent to those of: type OuterEquivalent struct { A int16 IDotW [] int32 datastore:"I.W" IDotX [] string datastore:"I.X" JDotY float64 datastore:"J.Y" Z bool } If Outer's embedded Inner3 field was tagged as datastore:&quot;Foo&quot; then the equivalent field would instead be: FooDotZ bool datastore:&quot;Foo.Z&quot; .
- Context , key [] Key , src interface {}) ([] Key , error ) PutMulti is a batch version of Put. src must satisfy the same conditions as the dst argument to GetMulti. func ( Key) AppID func ( k Key ) AppID () string AppID returns the key's application ID. func ( Key) Encode func ( k Key ) Encode () string Encode returns an opaque representation of the key suitable for use in HTML and URLs.
- Type FieldName string Reason string } ErrFieldMismatch is returned when a field is to be loaded into a different type than the one it was stored from, or when a field is missing or unexported in the destination struct.

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are migrating from Java 8 and need to use the legacy bundled services with the latest supported Java version, you must add the <app-engine-apis> element and set it to true in your web.xml file: < app - engine - apis>true < / app - engine - apis > Deployment descriptors A web application's deployment descriptor describes the classes, resources and configuration of the application and how the web server uses them to serve web requests.
- Note that App Engine provides the JavaServer Pages Standard Tag Library (JSTL), and you don't need to install it. <taglib> <taglib-uri>/escape</taglib-uri> <taglib-location>/WEB-INF/escape-tags.tld</taglib-location> </taglib> Security and authentication An App Engine application can use Google Accounts for user authentication.
- The following filter implementation example logs a message, and passes control down the chain, which may include other filters or a servlet, as described by the deployment descriptor for version 21 and later on EE10 (default), version 21 on EE8, and version 17 and earlier.
- You can also use an alternate form of the versioned appspot.com URL designed to avoid this problem by replacing the periods separating the subdomain components with the string " -dot- ".

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- REGION ID .r.appspot.com , run the following command to launch your browser: gcloud app browse Common gcloud command flags Include the --version flag to specify an ID that uniquely identifies that version of your app, otherwise one is generated for you.
- Example: --project [YOUR PROJECT ID] Example: gcloud app deploy --version pre-prod-5 --project my-sample-app To learn more about deploying your app from the command line, see Testing and Deploying Your App .
- Example: --version [YOUR VERSION ID] Include the --project flag to specify an alternate Google Cloud project ID to what you initialized as the default in the gcloud tool.
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.

