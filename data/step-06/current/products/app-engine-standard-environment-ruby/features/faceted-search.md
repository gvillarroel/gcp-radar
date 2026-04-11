---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.388Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Faceted Search"
feature_slug: "faceted-search"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "faceted"
  - "search"
  - "has"
  - "reached"
  - "general"
  - "availability"
  - "for"
  - "app"
---

# Faceted Search

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Faceted Search has reached general availability for App Engine.

## Extended Definition

Faceted Search has reached general availability for App Engine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "Package google.golang.org/appengine/v2/search (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example code: // A and B are renamed to a and b. // A, C and I are facets. // D's tag is equivalent to having no tag at all (E). // F and G are ignored entirely by the search package. // I has tag information for both the search and json packages. type TaggedStruct struct { A float64 search:"a,facet" B float64 search:"b" C float64 search:",facet" D float64 search:"" E float64 F float64 search:"-" G float64 search:"-,facet" I float64 search:",facet" json:"i" } The FieldLoadSaver Interface A document's contents can also be represented by any type that implements the FieldLoadSaver interface.
- Iterator type Iterator struct { // contains filtered or unexported fields } Iterator is the result of searching an index for a query or listing an index. func ( Iterator) Count func ( t Iterator ) Count () int Count returns an approximation of the number of documents matched by the query.
- SortExpression type SortExpression struct { // Expr is evaluated to provide a sorting value for each document. // See https://cloud.google.com/appengine/docs/standard/go/search/options for // the supported expression syntax.
- Valid types for field values are: string, search.Atom, search.HTML, time.Time (stored with millisecond precision), float64 (value between -2,147,483,647 and 2,147,483,647 inclusive), appengine.GeoPoint.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.flexible.yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.
- The following example demonstrates what a simple .NET app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- For more information, see .NET runtime . runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- You must choose a location, which cannot be changed later. gcloud app create Learn more : Generally, select the region nearest to your app's users, but also consider the location of the other Google Cloud products and services that your app uses.
- Cloud Shell Launch Cloud Shell, which has all the tools you'll need pre-installed: Open Cloud Shell Create a Google Cloud project A project is required to use Google Cloud, and forms the basis for using all Google Cloud services.
- Structure your files Your service will have the following file structure: go-app/ : directory for your Go service. app.yaml : Your service's configuration settings. main.go : Your application code.

