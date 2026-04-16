---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.013Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Ruby 2.3.3 default runtime"
feature_slug: "ruby-2-3-3-default-runtime"
latest_feature_date: "2016-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "ruby"
  - "default"
  - "runtime"
  - "uses"
  - "supports"
  - "version"
  - "override"
  - "file"
---

# Ruby 2.3.3 default runtime

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Ruby runtime uses Ruby 2.3.3 by default and supports version override with a .ruby-version file.

## Extended Definition

The Ruby runtime uses Ruby 2.3.3 by default and supports version override with a .ruby-version file.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)

## Supporting Pages

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't provide a .ruby-version file, the Ruby runtime defaults to version 2.7.
- Specify the operating system setting in your app.yaml file: runtime : ruby env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- When this file is present, the runtime installs the requested version of Ruby when you deploy your application using rbenv .

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.
- Example: --version [YOUR VERSION ID] Include the --project flag to specify an alternate Google Cloud project ID to what you initialized as the default in the gcloud tool.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By default, App Engine uses the latest available LTS .NET version if the runtime version setting is not specified.
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.
- Specify the operating system setting in your app.yaml file: runtime : aspnetcore env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a runtime version by including the runtime version setting in your app.yaml file.
- To use a supported .NET version, you must: Update your project file with the .NET version you want to use. <Project Sdk="Microsoft.NET.Sdk.Web"> <PropertyGroup> <TargetFramework>net10.0</TargetFramework> <Nullable>enable</Nullable> <ImplicitUsings>enable</ImplicitUsings> </PropertyGroup> <ItemGroup> <None Update="app.yaml"> <CopyToPublishDirectory>PreserveNewest</CopyToPublishDirectory> </None> </ItemGroup> </Project> Install gcloud CLI version 420.0.0 or later .

