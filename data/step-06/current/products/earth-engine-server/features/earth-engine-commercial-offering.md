---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.027Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Earth Engine commercial offering"
feature_slug: "earth-engine-commercial-offering"
latest_feature_date: "2022-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/noncommercial_tiers"
  - "https://developers.google.com/earth-engine/guides/access_control"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "earth"
  - "engine"
  - "commercial"
  - "offering"
  - "available"
  - "customers"
---

# Earth Engine commercial offering

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Earth Engine is available as a Google Cloud product offering for commercial customers.

## Extended Definition

Earth Engine is available as a Google Cloud product offering for commercial customers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/noncommercial_tiers](https://developers.google.com/earth-engine/guides/noncommercial_tiers)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### "Earth Engine Noncommercial Tiers \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/noncommercial_tiers](https://developers.google.com/earth-engine/guides/noncommercial_tiers)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- You can use this Colab notebook to help you model and visualize how your usage aligns with the different Earth Engine noncommercial tiers: Run in Google Colab View source on GitHub Manage a project's tier Change a project's tier You can change your project's tier anytime on the configuration page in the Cloud Console.
- Earth Engine Apps created by non-commercial projects are exempt from non-commercial eligibility confirmation, but may get slowed down with noncommercial tiers, when the owners' project runs out of their daily or monthly quota resources for their tier.
- Home Products Google Earth Engine Guides Send feedback Earth Engine Noncommercial Tiers Stay organized with collections Save and categorize content based on your preferences.
- Noncommercial tiers for Google Earth Engine ensure a sustainable allocation of computational resources, so we can continue supporting high-impact projects globally.

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature is only available for commercial users of Earth Engine.
- Permissions needed Billing account billing.subscriptions.list In addition: billing.accounts.get (for creating a new Limited plan) billing.subscriptions.create (for creating a new Basic or Professional plan) Cloud project earthengine.computations.create earthengine.config.update serviceusage.services.get serviceusage.services.enable Suggested roles Billing account Billing Account Viewer ( roles/billing.viewer ), for creating a new Limited plan Billing Account Administrator ( roles/billing.admin ), for creating a new Basic or Professional plan Cloud project Earth Engine Resource Writer ( roles/earthengine.writer ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Commercial Earth Engine plan management The following permissions pertain to managing Earth Engine pricing plans .
- Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- Using Earth Engine with resources inside a secured VPC service perimeter is only available for Professional and Premium pricing plans.

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You may need to register the service account to use Earth Engine if the Cloud Project through which the VM was started is not registered for use with Earth Engine (commercial or non-commercial).
- Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in /.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.
- If you need to create a new project, we recommend the naming convention "ee-xyz" where xyz is your usual Earth Engine username. (If you cannot select or create a Cloud Project, see the troubleshooting section below.) You must be assigned sufficient IAM permissions for authentication, such as either Owner or Editor on the project, or an additional "OAuth Config Editor" predefined role on top of the other IAM roles assigned .

