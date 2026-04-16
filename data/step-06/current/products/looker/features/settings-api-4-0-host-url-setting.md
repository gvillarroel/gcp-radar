---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.556Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Settings API 4.0 host URL setting"
feature_slug: "settings-api-4-0-host-url-setting"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp"
keywords:
  - "settings"
  - "host"
  - "url"
  - "setting"
  - "endpoint"
  - "now"
  - "supports"
  - "instance"
---

# Settings API 4.0 host URL setting

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Settings API 4.0 endpoint now supports setting the instance-wide host URL.

## Extended Definition

The Settings API 4.0 endpoint now supports setting the instance-wide host URL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- This setting is enabled by default for all Looker (original) instances except those that are hosted in the EMEA region and those that are enrolled in Looker's Extended Support Release (ESR) program .
- The Settings page in the General section of the Admin panel lets Looker admins configure the instance-wide settings for Looker.
- Make sure the Host URL setting uses http:// or https:// appropriately, based on your instance's server configuration.
- Because Looker-hosted instances always load assets from the CDN, you cannot disable this setting for these instances.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the action settings/enablement page, a Looker admin must configure the action's form fields to pull information from the user attribute by clicking the user attribute icon to the right of the appropriate field and selecting the desired user attribute. requiredField parameters in cell-level actions For cell-level actions, you can configure your model's LookML fields to deliver data to that action destination by specifying which tags your action supports in the requiredFields parameter of your action file.
- The Looker Action Hub must be able to send and receive API requests in the following ways: From the Looker instance to the Looker Action Hub network From the Looker user's browser to the Looker Action Hub network From the Looker Action Hub network to the Looker instance If your Looker deployment cannot accommodate these requests or if the IP Allowlist feature is enabled on your Looker instance, consider setting up a local action hub server to serve private Looker integrations or custom actions .
- The appropriate solution or combination of solutions will depend on the architecture of the Looker instance: If the customer-hosted instance is not resolvable by the Looker Action Hub — that is, the Looker Action Hub cannot receive requests from the Looker instance — Looker admins can contact a Google Cloud sales specialist to enable the public host url license feature.
- The requests from the Looker Action Hub to a Looker instance take the following forms: GET < host looker url > / downloads / < random 40 char token > POST < host looker url > / action hub state / < random 40 char token > These URLs are generated on the spot in the Looker instance before being sent to the Looker Action Hub.

### Admin settings - SMTP \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mail settings Deprecated: For customer-hosted Looker instances, the default Looker email service is not available and the SMTP Options won't be visible.
- In Looker's Admin panel, choose SMTP to see and change your instance's SMTP settings.
- For more information about creating an application, see the following pages: Using OAuth 2.0 to Access Google APIs Application types for the Microsoft identity platform Saving SMTP settings Once you have entered your SMTP settings, click the Save button to save your configuration.
- Note: If you are using custom mail settings for SMTP, add Looker's IP addresses to your SMTP server's IP allowlist so that your SMTP server will allow inbound traffic from Looker.

