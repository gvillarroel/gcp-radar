---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.412Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Regional availability in europe-west6"
feature_slug: "regional-availability-in-europe-west6"
latest_feature_date: "2019-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/locations"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "west6"
  - "europe"
  - "availability"
  - "regional"
  - "create"
  - "lets"
---

# Regional availability in europe-west6

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Regional availability in europe-west6 lets you create and run App Engine applications in the Zurich region.

## Extended Definition

Regional availability in europe-west6 lets you create and run App Engine applications in the Zurich region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app](https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app)
- [https://docs.cloud.google.com/appengine/docs/standard/locations](https://docs.cloud.google.com/appengine/docs/standard/locations)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "Quickstart: Create a Ruby app in the App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app](https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additional prerequisites Initialize your App Engine app with your project and choose its region: gcloud app create -- project =[ YOUR PROJECT ID ] When prompted, select the region where you want to locate your App Engine application.
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### "App Engine locations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/locations](https://docs.cloud.google.com/appengine/docs/standard/locations)
- Source ID: `site-docs-reference-4`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apps located in europe-west create a database in the eur3 multi-region.
- Apps located in europe-west create a bucket in the EU multi-region.
- App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.
- If the number of idle instances created by App Engine exceeds the maximum you specify in the Performance Settings tab of the Google Cloud console, the excess instances do not accrue instance hours.
- For example, quotas can restrict the number of API calls to a service, the number of load balancers used concurrently by your project, or the number of projects that you can create.
- This includes indexes that were created in the past and no longer appear in the application's configuration but have not been deleted.

