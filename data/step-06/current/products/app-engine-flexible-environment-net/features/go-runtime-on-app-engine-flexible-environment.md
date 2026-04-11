---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.767Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Go runtime on App Engine flexible environment"
feature_slug: "go-runtime-on-app-engine-flexible-environment"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/runtime"
keywords:
  - "Go language support"
  - "deploy Go app"
  - "run Go applications"
  - "Golang"
  - "App Engine flexible environment runtime"
  - "Go on App Engine"
  - "runtime: go"
  - "Go runtime"
---

# Go runtime on App Engine flexible environment

Product: App Engine flexible environment .NET
Coverage: HIGH

## Step 02 Summary

Go applications can run on the App Engine flexible environment.

## Extended Definition

The Go runtime on App Engine flexible environment is the managed runtime that executes Go applications in App Engine Flex, installing the app’s code and dependencies and running it in that environment. It is enabled by specifying a Go runtime in `app.yaml` (for example `runtime: go1.15` with `env: flex`), which selects the requested major/minor Go version and the latest available patch release in that track (for example, 1.15.15). If a needed Go version is not supported by the built-in runtime, a custom runtime with a suitable base image can be used instead.

## Evidence Summary

The quickstart page shows a Go sample workflow for App Engine flexible (including app.yaml-based configuration), while the runtime page defines the Go runtime’s role, versioning behavior, and custom-runtime fallback.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/go/runtime](https://docs.cloud.google.com/appengine/docs/flexible/go/runtime)

## Supporting Pages

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: STRONG
- Re-rank rationale: The document is explicitly a Go quickstart for App Engine Flexible Environment and explains how to deploy Go workloads by specifying runtime version and OS in app.yaml.

Evidence snippets:
- Clone the Hello World sample app repository to your local machine. git clone https : //github.com/GoogleCloudPlatform/golang-samples Change to the directory that contains the sample code. cd golang - samples / appengine flexible / helloworld Run Hello World on your local machine To run the Hello World app on your local computer: Start a local web server. go run . go In your web browser, enter the following address: http://localhost:8080 If you are using Cloud Shell, in the toolbar, click Web Preview and select Preview on port 8080 instead.
- For more information, see: https://docs.cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 For more information on how the Go runtime works, see The Go runtime .

### "The Go runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/runtime](https://docs.cloud.google.com/appengine/docs/flexible/go/runtime)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Choosing the go runtime version go1.15 in your app.yaml file results in the latest version of 1.15 available, for example, 1.15.15. runtime : go1 .15 env : flex Support for other Go runtimes If you need to use a Go version that isn't supported , you can create a custom runtime and select a valid base image with the Go version you need.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Go runtime Stay organized with collections Save and categorize content based on your preferences.
- The Go runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- Extending the runtime For instructions on how to extend and customize the Go runtime, read the Go runtime builder on GitHub .

