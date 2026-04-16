---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.683Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine availability in southamerica-east1"
feature_slug: "app-engine-availability-in-southamerica-east1"
latest_feature_date: "2017-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
keywords:
  - "app"
  - "engine"
  - "availability"
  - "southamerica"
  - "east1"
  - "became"
  - "available"
  - "paulo"
---

# App Engine availability in southamerica-east1

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine became available in the southamerica-east1 (São Paulo, Brazil) region.

## Extended Definition

App Engine became available in the southamerica-east1 (São Paulo, Brazil) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.

