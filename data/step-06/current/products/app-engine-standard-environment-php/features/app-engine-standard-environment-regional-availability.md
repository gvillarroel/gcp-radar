---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.302Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine standard environment regional availability"
feature_slug: "app-engine-standard-environment-regional-availability"
latest_feature_date: "2021-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
keywords:
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "regional"
  - "availability"
  - "became"
  - "available"
---

# App Engine standard environment regional availability

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment became available in the us-west1, asia-southeast1, and asia-east1 regions; App Engine standard became available in the europe-central2 (Warsaw) region.

## Extended Definition

App Engine standard environment became available in the us-west1, asia-southeast1, and asia-east1 regions; App Engine standard became available in the europe-central2 (Warsaw) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Only the App Engine standard environment provides free quotas.
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Both the flexible environment and the standard environment share the same limits for services and versions.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Setting up your Google Cloud project for App Engine Stay organized with collections Save and categorize content based on your preferences.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.

