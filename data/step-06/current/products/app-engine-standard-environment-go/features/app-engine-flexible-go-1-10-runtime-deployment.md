---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.804Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine flexible Go 1.10 runtime deployment"
feature_slug: "app-engine-flexible-go-1-10-runtime-deployment"
latest_feature_date: "2018-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/overview"
  - "https://docs.cloud.google.com/appengine/docs"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
keywords:
  - "App Engine flexible environment"
  - "gcloud app deploy"
  - "flexible deployment"
  - "runtime: go1.10"
  - "runtime configuration"
  - "Go 1.10 runtime"
  - "go1.10"
  - "Go 1.10"
---

# App Engine flexible Go 1.10 runtime deployment

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

App Engine flexible applications using runtime: go now deploy using the Go 1.10 runtime.

## Extended Definition

The supplied official documentation excerpts do not provide direct evidence that App Engine flexible environment specifically introduced or used a `runtime: go1.10` deployment setting. They only show that the App Engine flexible environment supports Go (among other languages) and runs on Compute Engine-backed instances with customizable/container-based deployment characteristics that can host Go workloads.

## Evidence Summary

These Google Cloud pages confirm flexible environment capabilities and language/runtime context but do not explicitly mention the Go 1.10 runtime or the `runtime: go1.10` deployment syntax.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- [https://docs.cloud.google.com/appengine/docs](https://docs.cloud.google.com/appengine/docs)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)

## Supporting Pages

### App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Go Java Node.js PHP Python Ruby .NET Custom runtimes Features Customizable infrastructure - App Engine flexible environment instances are Compute Engine virtual machines, which means that you can take advantage of custom libraries, use SSH for debugging, and deploy your own Docker containers.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- You can specify how much CPU and memory each instance of your application needs, and the App Engine flexible environment provisions the necessary infrastructure for you.
- Based on Compute Engine , the App Engine flexible environment automatically scales your app up and down while also balancing the load.

### App Engine documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs](https://docs.cloud.google.com/appengine/docs)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides App Engine standard environment App Engine flexible environment App Engine migration center Admin API find in page Reference App Engine standard environment App Engine flexible environment App Engine legacy bundled services REST API RPC API info Resources Pricing Release notes: standard environment or flexible environment Runtime support schedule: standard environment or flexible environment Locations: standard environment or flexible environment Related resources Training and tutorials Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Training Training and tutorials Create a Java app in the App Engine flexible environment Learn how to create and deploy an app that displays a short message in the App Engine flexible environment.
- Code sample Code Samples Python sample apps Includes Python samples for the App Engine standard environment and the App Engine flexible environment.
- Code sample Code Samples Ruby sample apps Includes Ruby samples for the App Engine standard environment and the App Engine flexible environment.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Some of the resources used by instances in the App Engine flexible environment, such as disk, CPU, and memory, count towards the Compute Engine API quotas of your project.
- For more details on how App Engine uses Compute Engine resources, see the App Engine flexible environment overview .
- In the App Engine flexible environment, instances are backed by Compute Engine resources.

