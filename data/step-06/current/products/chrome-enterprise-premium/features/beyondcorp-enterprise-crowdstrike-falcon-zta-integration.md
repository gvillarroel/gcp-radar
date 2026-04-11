---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:30:05.326Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "BeyondCorp Enterprise Crowdstrike Falcon ZTA integration"
feature_slug: "beyondcorp-enterprise-crowdstrike-falcon-zta-integration"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/integration-docs"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs"
keywords:
  - "beyondcorp"
  - "enterprise"
  - "crowdstrike"
  - "falcon"
  - "zta"
  - "integration"
  - "the"
  - "enables"
---

# BeyondCorp Enterprise Crowdstrike Falcon ZTA integration

Product: Chrome Enterprise Premium
Coverage: LOW

## Step 02 Summary

The Falcon ZTA integration enables BeyondCorp Enterprise to use real-time device information from Crowdstrike Falcon Zero Trust Assessment for access and device management decisions.

## Extended Definition

The Falcon ZTA integration enables BeyondCorp Enterprise to use real-time device information from Crowdstrike Falcon Zero Trust Assessment for access and device management decisions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/integration-docs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/integration-docs)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs)

## Supporting Pages

### "Overview of Chrome Enterprise Premium and Falcon ZTA integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this integration, Falcon ZTA collects the real-time device information using its built-in solution, CrowdStrike's Falcon sensor, and provides this information to Chrome Enterprise Premium.
- The following diagram shows how Chrome Enterprise Premium works with Falcon ZTA: What's next Set up Chrome Enterprise Premium and Falcon ZTA integration Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When to use Chrome Enterprise Premium and Falcon ZTA integration Use this integration when you want to collect the real-time information about the devices in your organization using Falcon ZTA, and use this information to manage your devices and control access to your organizational resources using Chrome Enterprise Premium.
- Google Cloud's Chrome Enterprise Premium integrates with Falcon ZTA to provide a solution that lets you ensure that the devices connecting to your organization's web resources and applications are authorized, secured, and managed as per your organization's policies.

### "All client-side partner integrations \_|\_ Chrome Enterprise Premium \_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/integration-docs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/integration-docs)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chrome Enterprise Premium and Crowdstrike Falcon Zero Trust Assessment (Falcon ZTA) integration Integration overview Learn about the integration of Chrome Enterprise Premium and Falcon ZTA.
- Troubleshoot Chrome Enterprise Premium and Falcon ZTA integration issues Learn about how to access the logs to troubleshoot issues in Chrome Enterprise Premium and Falcon ZTA integration.
- Set up Chrome Enterprise Premium and Falcon ZTA integration Learn how to integrate Chrome Enterprise Premium and Falcon ZTA.
- Troubleshoot Chrome Enterprise Premium and Microsoft Intune integration issues Learn about how to access the logs to troubleshoot issues in Chrome Enterprise Premium integration with Microsoft Intune.

### "Create and assign custom access levels using Falcon ZTA data \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The iat (issued at) field is provided as part of the Falcon ZTA's zero trust assessment. request.time - timestamp(device.vendors["CrowdStrike"].data["iat"]) < duration("48h") Note: We recommend setting a value more than 90 minutes for duration because Chrome Enterprise Premium has an innate delay of 90 minutes for getting any new assessment by Falcon ZTA.
- Examples The following CEL expression creates a rule that allows access only from Falcon ZTA-managed devices with an OS assessment score higher than 50: device.vendors["CrowdStrike"].is managed device == true && device.vendors["CrowdStrike"].data["assessment.os"] > 50.0 The following CEL expression creates a rule that allows access only from devices that Falcon ZTA assessed in the last two days.
- The exp field (expiry) field is provided as part of the Falcon ZTA's zero trust assessment. timestamp(device.vendors["CrowdStrike"].data["exp"]) - request.time > duration("0m") For examples and more information about Common Expression Language (CEL) support and custom access levels, see the Custom access level specification .
- To find the available CrowdStrike fields for your CEL expression, you can review the Falcon ZTA data collected for your devices.

