---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.787Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Region availability: asia-south1"
feature_slug: "region-availability-asia-south1"
latest_feature_date: "2017-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "south1"
  - "asia"
  - "availability"
  - "region"
---

# Region availability: asia-south1

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment for Python is available in the asia-south1 region.

## Extended Definition

App Engine standard environment for Python is available in the asia-south1 region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Description Limit Can be increased Maximum number of frontend instances per project and region measured over a 1 minute period Depends on selected region.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Meeting your latency, availability, or durability requirements are primary factors for selecting the region where your apps are run.
- Run the following command to select a region and create an App Engine application: gcloud app create More information about App Engine locations help outline Enable billing in the Billing page of the Google Cloud console, see Enabling billing for details.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- REGION ID .r.appspot.com To convert an HTTP URL to an HTTPS URL, replace the periods between each resource with -dot- , for example: http:// SERVICE ID .
- The code does not correspond to a country or province, even though some region IDs may appear similar to commonly used country and province codes.

