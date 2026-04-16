---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.226Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Cloud SDK-based App Engine SDK tooling"
feature_slug: "cloud-sdk-based-app-engine-sdk-tooling"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
keywords:
  - "functionality"
  - "exclusively"
  - "delivered"
  - "tooling"
  - "based"
---

# Cloud SDK-based App Engine SDK tooling

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine SDK functionality is delivered exclusively through Cloud SDK.

## Extended Definition

App Engine SDK functionality is delivered exclusively through Cloud SDK.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- For example: <staging> <delete-jsps>false</delete-jsps> </staging> Staging option defaults The defaults for staging options are different depending on whether you use Google Cloud SDK-based tooling, such as the gcloud CLI, or the Google Cloud SDK-based Maven , Gradle , or IntelliJ plugins.
- Element Description <application> Not required if you deploy your app using Google Cloud SDK-based tooling, such as the gcloud app deploy command, IntelliJ plugins, Maven or Gradle plugins.
- The Google Cloud SDK-based tooling ignore this element and get the project ID from the gcloud config project property.
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Vary : To enable the cache to return different responses for a URL based on headers that are sent in the request, set one or more of the following values in the Vary response header: Accept , Accept-Encoding , Origin , or X-Origin Due to the potential for high cardinality, data won't be cached for other Vary values.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Note the following: A client can force text-based content types to be compressed by setting both of the Accept-Encoding and User-Agent request headers to gzip .
- Go Java Node.js PHP Python Ruby Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- If you're already using Google Workspace for your domain and want to authenticate users based on that login, you should use Google Identity Services for Web .
- This solution is best if you want to authenticate users based on their Google Account, or if you are using Google Admin console for your domain.
- This solution is best for most users who want flexible authentication options based on reliable, enterprise-grade features and SLAs.

