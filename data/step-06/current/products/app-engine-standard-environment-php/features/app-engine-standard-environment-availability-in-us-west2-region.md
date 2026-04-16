---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.311Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine standard environment availability in us-west2 region"
feature_slug: "app-engine-standard-environment-availability-in-us-west2-region"
latest_feature_date: "2018-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "availability"
  - "us"
  - "west2"
  - "region"
---

# App Engine standard environment availability in us-west2 region

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment became available in the us-west2 (Los Angeles) region.

## Extended Definition

App Engine standard environment became available in the us-west2 (Los Angeles) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Only the App Engine standard environment provides free quotas.
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- Both the flexible environment and the standard environment share the same limits for services and versions.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Setting up your Google Cloud project for App Engine Stay organized with collections Save and categorize content based on your preferences.
- Run the following command to select a region and create an App Engine application: gcloud app create More information about App Engine locations help outline Enable billing in the Billing page of the Google Cloud console, see Enabling billing for details.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of app security Stay organized with collections Save and categorize content based on your preferences.
- VPC Service Controls Not supported in the App Engine standard environment.
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

