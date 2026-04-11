---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.944Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Product Centric Feed Management"
feature_slug: "product-centric-feed-management"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "product"
  - "centric"
  - "feed"
  - "management"
  - "users"
  - "can"
  - "configure"
  - "multiple"
---

# Product Centric Feed Management

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Users can configure multiple log-type feeds for the same product type on a single page.

## Extended Definition

Users can configure multiple log-type feeds for the same product type on a single page.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure multiple feeds for a product family (Google SecOps customers only) You can configure multiple feeds per product family, based on log type.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Monitor the feed status You can monitor the status of the feed on the initial Feeds page, where feeds can have the following statuses: Active : Feed is configured and ready to ingest data into your Google SecOps account.
- For example, for CrowdStrike Falcon, you can create multiple unique feeds under both required and optional log types to make sure there's enough comprehensive data coverage.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- You can now configure multiple log-type feeds for the same product type on a single page.
- These feeds can be used to get context on AWS resources such as EC2 instances and users in identity and access management (IAM).
- Feature Product Centric Feed Management This feature is currently in Preview.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- August 10, 2025 Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- You can now configure multiple log-type feeds for the same product type on a single page.
- June 23, 2025 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect BeyondTrust BeyondInsight logs Collect BloxOne Threat Defense logs Collect BlueCat Edge DNS Resolver logs Collect Cambium Networks logs Collect Check Point Audit logs Collect Check Point EDR logs Collect Check Point SmartDefense logs Collect Commvault logs Collect Comodo AV logs Collect Cylance PROTECT logs Collect Cyolo OT logs Collect Delinea PAM logs Collect Dell CyberSense logs Collect Dell EMC Data Domain logs Collect Dell EMC Isilon NAS logs Collect Dell EMC PowerStore logs Collect Dell OpenManage logs Collect Endpoint Protector DLP logs Collect ESET AV logs Collect ESET EDR logs Collect F5 AFM logs Collect F5 ASM logs Collect FileZilla FTP logs Collect Forescout NAC logs Collect ForgeRock OpenAM logs Collect HAProxy logs Collect Kaseya Datto File Protection logs Collect ManageEngine AD360 logs Collect Palo Alto Cortex XDR Events logs Collect Snowflake logs Collect Trellix DLP logs Collect Trellix ePO logs Collect Trend Micro DDI logs Collect Trend Micro Email Security logs Collect Trend Micro Vision One Activity logs Collect Trend Micro Vision One Audit logs Collect Trend Micro Vision One Container Vulnerability logs Collect Trend Micro Vision One Detections logs Collect Trend Micro Vision One Observed Attack Techniques logs Collect Trend Micro Vision One Workbench logs June 19, 2025 Feature Product Centric Feed Management This feature is currently in Preview.
- These feeds can be used to get context on AWS resources such as EC2 instances and users in identity and access management (IAM).

