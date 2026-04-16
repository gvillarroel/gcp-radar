---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.680Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine flexible environment .NET Core support"
feature_slug: "app-engine-flexible-environment-net-core-support"
latest_feature_date: "2017-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "net"
  - "core"
  - "added"
  - "availability"
---

# App Engine flexible environment .NET Core support

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment added general availability for .NET Core, including Docker images for .NET Core 1.0, 1.1, and 2.0.

## Extended Definition

App Engine flexible environment added general availability for .NET Core, including Docker images for .NET Core 1.0, 1.1, and 2.0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls)

## Supporting Pages

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Specifies the runtime used by the app. runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- Create a .NET app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specifies the runtime used by the app. runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- Create a .NET app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .
- If your App Engine flexible app uses Shared VPC , the App Engine flexible environment does not automatically create firewall rules. if you need to control access and allow traffic on the VPC network, you can create firewall rules on the Shared VPC network.
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.

