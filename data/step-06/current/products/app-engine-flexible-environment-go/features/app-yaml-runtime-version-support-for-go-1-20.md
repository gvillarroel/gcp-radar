---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.733Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "app.yaml runtime_version support for Go 1.20"
feature_slug: "app-yaml-runtime-version-support-for-go-1-20"
latest_feature_date: "2023-04-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/runtime"
keywords:
  - "runtime_version: go1.20"
  - "go1.20 runtime_version"
  - "go1.20"
  - "set runtime_version in app.yaml"
  - "app.yaml runtime_version"
  - "Go 1.20"
  - "app.yaml"
  - "runtime_version"
---

# app.yaml runtime_version support for Go 1.20

Product: App Engine flexible environment Go
Coverage: LOW

## Step 02 Summary

Adds support for specifying version 1.20 in the app.yaml runtime_version setting.

## Extended Definition

Adds support for specifying version 1.20 in the app.yaml runtime_version setting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/go/runtime](https://docs.cloud.google.com/appengine/docs/flexible/go/runtime)

## Supporting Pages

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.
- Specify the operating system setting in your app.yaml file: runtime : aspnetcore env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a runtime version by including the runtime version setting in your app.yaml file.
- To use a supported .NET version, you must: Update your project file with the .NET version you want to use. <Project Sdk="Microsoft.NET.Sdk.Web"> <PropertyGroup> <TargetFramework>net10.0</TargetFramework> <Nullable>enable</Nullable> <ImplicitUsings>enable</ImplicitUsings> </PropertyGroup> <ItemGroup> <None Update="app.yaml"> <CopyToPublishDirectory>PreserveNewest</CopyToPublishDirectory> </None> </ItemGroup> </Project> Install gcloud CLI version 420.0.0 or later .
- GAE SERVICE The service name specified in your application's app.yaml file, or if no service name is specified, it is set to default .

### "The Go runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/runtime](https://docs.cloud.google.com/appengine/docs/flexible/go/runtime)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples To specify Go 1.26 on Ubuntu 24: runtime : go env : flex runtime config : operating system : "ubuntu24" runtime version : "1.26" To specify the latest supported Go version on Ubuntu 24: runtime : go env : flex runtime config : operating system : "ubuntu24" Your app uses the latest stable release of the version that is specified in your app.yaml file.
- Choosing the go runtime version go1.15 in your app.yaml file results in the latest version of 1.15 available, for example, 1.15.15. runtime : go1 .15 env : flex Support for other Go runtimes If you need to use a Go version that isn't supported , you can create a custom runtime and select a valid base image with the Go version you need.
- Choosing Go 1.26 in your app.yaml file results in the latest patch version of Go 1.26 available. runtime : go env : flex runtime config : operating system : "ubuntu24" runtime version : "1.26" See the app.yaml reference for more information.
- Optionally, you can specify a runtime version by including the runtime version setting in your app.yaml .

