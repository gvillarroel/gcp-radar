---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.243Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Data residency support for Apigee data collectors"
feature_slug: "data-residency-support-for-apigee-data-collectors"
latest_feature_date: "2025-04-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
keywords:
  - "subscription and pay-as-you-go organizations"
  - "residency location control"
  - "data residency (DRZ)"
  - "residency compliance"
  - "data collectors"
  - "data residency"
  - "DRZ"
---

# Data residency support for Apigee data collectors

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee and Apigee Hybrid data collectors now support data residency (DRZ) compliance for supported subscription and pay-as-you-go organizations.

## Extended Definition

Apigee and Apigee Hybrid data collectors now support data residency (DRZ) compliance for supported subscription and pay-as-you-go organizations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)

## Supporting Pages

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Data collectors are supported for Subscription and Pay-as-you-go organizations and hybrid versions 1.14.0 and later.
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- How to view the region If you have already provisioned your org ( PROJECT ID ) for use with data residency, you can use the getProjectMapping API to display the regions associated with a project: Authorize gcloud to access the Cloud Platform with your Google user credentials: gcloud auth login Call the API: curl -X GET https://apigee.googleapis.com/v1/organizations/ PROJECT ID :getProjectMapping \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Where PROJECT ID is your Apigee organization name or Google Cloud project ID.
- The admin who provisions Apigee must: Inform Apigee users, such as API developers and other admins, about the data residency configuration Set the location org policy as described in Restricting Resource Locations API developers, admins, or other users of Apigee management APIs must use the new data residency API service endpoint .

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on container image support in Apigee hybrid releases, see the Apigee release process . v1.14.0 Announcement On April 14, 2025 we released an updated version of Apigee. v1.14.0 Feature Announcing data collectors data residency (DRZ) compliance for Apigee and Apigee hybrid.
- March 25, 2025 v1.14.0 Announcement On March 25, 2025 we released an updated version of Advanced API Security. v1.14.0 Change New Advanced API Security support when using data residency (DRZ) with Apigee hybrid Advanced API Security is now available for Apigee hybrid orgs using DRZ, for hybrid versions 1.14.0 and later.
- Data collectors can be used with data residency for Subscription and Pay-as-you-go organizations and hybrid versions 1.14.0 and later.
- See Introduction to data residency for information on DRZ and Advanced API Security support across organization types.

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The following table maps each Apigee UI feature page to its current location in the Apigee UI: Feature Apigee UI Proxies Proxy development > API proxies Go to API proxies Sharedflows Proxy development > Sharedflows Go to Sharedflows Offline debug Proxy development > Offline debug Go to Offline debug API products Distribution > API products Go to API products Portals Distribution > Portals Go to Portals Monetization Distribution > Monetization Go to Monetization Developers Distribution > Developers Go to Developers Apps Distribution > Apps Go to Apps API monitoring Proxy development > API monitoring Go to API monitoring API metrics Analytics > API metrics Go to API metrics Developer Engagement Analytics > Developer analysis Go to Developer analysis Traffic Composition Analytics > Developer analysis Go to Developer analysis Devices Analytics > End user analysis Go to End user analysis Geomap Analytics > End user analysis Go to End user analysis Custom reports Analytics > Custom reports Go to Custom reports Instances Management > Instances Go to Instances Data collectors Management > Data collectors Go to Data collectors Environments Management > Environments Go to Environments Endpoint attachments Management > Endpoint attachments Go to Endpoint attachments Roles Identity and Access Management (IAM) > Roles Go to Roles Users IAM Go to IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

