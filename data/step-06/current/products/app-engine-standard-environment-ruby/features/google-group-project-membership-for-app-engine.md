---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.411Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Google Group project membership for App Engine"
feature_slug: "google-group-project-membership-for-app-engine"
latest_feature_date: "2016-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "group"
  - "project"
  - "membership"
  - "app"
  - "engine"
  - "now"
  - "supports"
  - "adding"
---

# Google Group project membership for App Engine

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine now supports adding a Google Group as a project member so group members inherit the group’s App Engine access level.

## Extended Definition

App Engine now supports adding a Google Group as a project member so group members inherit the group’s App Engine access level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)

## Supporting Pages

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.
- Go Java Node.js PHP Python Ruby .NET Custom To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Identity-Aware Proxy (IAP) Unlike the other authentication options that implement authentication within your app, IAP protects and secures your application by adding an IAM authentication and authorization layer in front of your resources.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Identity-Aware Proxy (IAP) Unlike the other authentication options that implement authentication within your app, IAP protects and secures your application by adding an IAM authentication and authorization layer in front of your resources.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- To use a supported .NET version, you must: Update your project file with the .NET version you want to use. <Project Sdk="Microsoft.NET.Sdk.Web"> <PropertyGroup> <TargetFramework>net10.0</TargetFramework> <Nullable>enable</Nullable> <ImplicitUsings>enable</ImplicitUsings> </PropertyGroup> <ItemGroup> <None Update="app.yaml"> <CopyToPublishDirectory>PreserveNewest</CopyToPublishDirectory> </None> </ItemGroup> </Project> Install gcloud CLI version 420.0.0 or later .
- App Engine does not allow you to set custom metadata for each instance, but you can set project-wide custom metadata and read it from your App Engine and Compute Engine instances.
- Metadata server Each instance of your application can use the Compute Engine metadata server to query information about the instance, including its host name, external IP address, instance ID, custom metadata, and service account information.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.

