---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.331Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine URL Fetch default quota for billed apps"
feature_slug: "app-engine-url-fetch-default-quota-for-billed-apps"
latest_feature_date: "2016-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
keywords:
  - "app"
  - "engine"
  - "url"
  - "fetch"
  - "default"
  - "quota"
  - "billed"
  - "apps"
---

# App Engine URL Fetch default quota for billed apps

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The default URL Fetch quota for billed applications was increased.

## Extended Definition

The default URL Fetch quota for billed applications was increased.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Daily quotas protect the integrity of the App Engine system by ensuring that no single app over-consumes a resource to the detriment of other apps.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- Resource Default limit Default Cloud Storage Bucket Stored Data First 5 GB free; no maximum Default Cloud Storage Bucket Class A Operations First 20,000 ops/day free; no maximum Default Cloud Storage Bucket Class B Operations First 50,000 ops/day free; no maximum Default Cloud Storage Bucket Network Egress First 1 GB free; no maximum Blobstore The following quotas apply specifically to use of the blobstore.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- Tip: To allow everyone access to your assets, you can use the wildcard ' ' , instead of https://mygame.uc.r.appspot.com . login To use this element, app engine apis must be set to true .
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- Example error handlers : - file : default error.html - error code : over quota file : over quota.html handlers Optional.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Tips: If you deploy your apps with the gcloud app deploy command, the gcloud CLI will ensure that your Google Cloud project includes an App Engine application and prompt you to select a region when needed.
- App Engine requires all projects to enable billing, but you will only be charged if a project exceeds its free quota .

