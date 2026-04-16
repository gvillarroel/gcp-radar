---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.863Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Migration of standard environment apps to Cloud Run"
feature_slug: "migration-of-standard-environment-apps-to-cloud-run"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "migration"
  - "standard"
  - "environment"
  - "apps"
  - "run"
  - "applications"
  - "can"
  - "migrated"
---

# Migration of standard environment apps to Cloud Run

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Standard environment applications can be migrated to Cloud Run using the gcloud beta app migrate-to-run command.

## Extended Definition

Standard environment applications can be migrated to Cloud Run using the gcloud beta app migrate-to-run command.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback appengine-web.xml reference Stay organized with collections Save and categorize content based on your preferences.
- The appengine-web.xml file can define system properties and environment variables that are set when the application is running. <system-properties> <property name="myapp.maximum-message-length" value="140" /> <property name="myapp.notify-every-n-signups" value="1000" /> <property name="myapp.notify-url" value="http://www.example.com/signupnotify" /> </system-properties> <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> Optional.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After configuring authentication, you can begin managing your apps, including deploying versions of applications and managing the amount of traffic to those versions.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.
- Tighter control around deploying new versions, including the ability to automate traffic migration between two versions or traffic splitting across one or more versions.
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .

