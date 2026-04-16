---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.171Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Expanded deployment limits"
feature_slug: "expanded-deployment-limits"
latest_feature_date: "2024-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits"
keywords:
  - "flows"
  - "increases"
  - "shared"
  - "deployment"
  - "expanded"
  - "limits"
  - "proxies"
---

# Expanded deployment limits

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee increases deployment limits for shared flows, API proxies, and total deployment units in Subscription 2021 organizations.

## Extended Definition

Apigee increases deployment limits for shared flows, API proxies, and total deployment units in Subscription 2021 organizations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)

## Supporting Pages

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Proxy request proxy.flow.name Scope begins : Proxy request Type : String Permission : Read The name of the most recently executed ProxyEndpoint flow (such as "PreFlow", "PostFlow", or the name of a conditional flow). proxy.flow.description Scope begins : Proxy request Type : String Permission : Read The description ( <Description> element value) of the most recently executed ProxyEndpoint flow. --> For more information on working with API proxies, see Understanding APIs and API proxies . publishmessage Populated when a the PublishMessage policy executes.
- The following table describes the properties of the mint variable: Property Type Read/Write Description Scope begins mint.limitscheck.is request blocked Boolean Read only Flag that specifies whether the API request is blocked.
- For example, do not rely on the values in the undocumented X-Apigee. headers in your API proxies as these headers are not intended for customer use and can be removed or changed by Apigee at any time.
- Proxy request mint.limitscheck.prepaid developer balance Numeric Read only Current balance in the developer's or AppGroup's prepaid account wallet, associated with the rate plan's currency.

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table maps each Apigee UI feature page to its current location in the Apigee UI: Feature Apigee UI Proxies Proxy development > API proxies Go to API proxies Sharedflows Proxy development > Sharedflows Go to Sharedflows Offline debug Proxy development > Offline debug Go to Offline debug API products Distribution > API products Go to API products Portals Distribution > Portals Go to Portals Monetization Distribution > Monetization Go to Monetization Developers Distribution > Developers Go to Developers Apps Distribution > Apps Go to Apps API monitoring Proxy development > API monitoring Go to API monitoring API metrics Analytics > API metrics Go to API metrics Developer Engagement Analytics > Developer analysis Go to Developer analysis Traffic Composition Analytics > Developer analysis Go to Developer analysis Devices Analytics > End user analysis Go to End user analysis Geomap Analytics > End user analysis Go to End user analysis Custom reports Analytics > Custom reports Go to Custom reports Instances Management > Instances Go to Instances Data collectors Management > Data collectors Go to Data collectors Environments Management > Environments Go to Environments Endpoint attachments Management > Endpoint attachments Go to Endpoint attachments Roles Identity and Access Management (IAM) > Roles Go to Roles Users IAM Go to IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Using the Apigee UI, you can: Build an API proxy Deploy and undeploy API proxies to your cluster Create, edit, and delete environments and environment groups Assign environment-level access control to users Work with target servers , KVMs , and shared flows Use the Apigee UI To open the Apigee UI, go to the Apigee API management page.
- Proxies and shared flows deployed against limit : Total number of API proxies and shared flows deployed in the organization, against the limit for your organization type.
- Proxy deployment units : The total number of API proxy and shared flow revisions deployed in your organization.

### "Enforce monetization limits in API proxies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)
- Source ID: `site-docs-reference-required-3`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See also: Attaching a policy to a flow Verifying access tokens Monitoring and debugging the authentication policy using Debug Enforce subscriptions on API products Attach the MonetizationLimitsCheck policy to API proxies to enforce subscriptions on the API product by developer or AppGroup: If no active rate plan exists for the API product fetched during the proxy call execution, the product is deemed non-monetized, the MonetizationLimitsCheck policy does not fetch any further data, and the policy has no effect.
- For more information, see: Creating an API proxy Editing an API proxy Attaching a policy to a flow Debugging the MonetizationLimitsCheck policy using Debug MonetizationLimitsCheck policy Enforce monetization quotas in API proxies Note: If you add a quota after the API product has been in use, the quota calculation starts from the next monetized transaction.
- Home Documentation Application development Apigee Guides Send feedback Enforce monetization limits in API proxies Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to enforce monetization limits by attaching policies to API proxies in a monetized API product.

