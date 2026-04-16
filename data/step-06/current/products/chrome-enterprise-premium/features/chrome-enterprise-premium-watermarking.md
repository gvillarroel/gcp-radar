---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.836Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Chrome Enterprise Premium watermarking"
feature_slug: "chrome-enterprise-premium-watermarking"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-intune"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
keywords:
  - "watermarking"
  - "watermarks"
  - "displays"
  - "custom"
---

# Chrome Enterprise Premium watermarking

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

Chrome Enterprise Premium watermarking displays custom watermarks on web pages that match configured data-protection rules.

## Extended Definition

Chrome Enterprise Premium watermarking displays custom watermarks on web pages that match configured data-protection rules.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-intune](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-intune)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)

## Supporting Pages

### "Create and assign custom access levels using Falcon ZTA data \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ensure that you have one of the following Identity and Access Management roles: Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Understand the objects and attributes that are used to build the Common Expression Language (CEL) expressions for custom access levels.
- The exp field (expiry) field is provided as part of the Falcon ZTA's zero trust assessment. timestamp(device.vendors["CrowdStrike"].data["exp"]) - request.time > duration("0m") For examples and more information about Common Expression Language (CEL) support and custom access levels, see the Custom access level specification .
- Assign custom access levels for Google Workspace applications Assign access levels for Google Workspace applications from the Google Workspace Admin console: From the Admin console Home page, go to Security > Context-Aware Access .
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Create and assign custom access levels using Falcon ZTA data Stay organized with collections Save and categorize content based on your preferences.

### "Create and assign custom access levels using Microsoft Intune data \_|\_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-intune](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-intune)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ensure that you have one of the following Identity and Access Management roles: Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Understand the objects and attributes that are used to build the Common Expression Language (CEL) expressions for custom access levels.
- Assign custom access levels for Google Workspace applications Assign access levels for Google Workspace applications from the Google Workspace Admin console: From the Admin console Home page, go to Security > Context-Aware Access .
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Create and assign custom access levels using Microsoft Intune data Stay organized with collections Save and categorize content based on your preferences.
- Assign custom access levels for IAP-secured resources To assign access levels for IAP-secured resources from the Google Cloud console, follow the instructions in Apply an access level for IAP-secured resources .

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

