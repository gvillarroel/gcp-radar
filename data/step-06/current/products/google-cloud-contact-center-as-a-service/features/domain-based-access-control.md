---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.135Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Domain-based access control"
feature_slug: "domain-based-access-control"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide"
keywords:
  - "domain"
  - "based"
  - "access"
  - "control"
  - "restricts"
  - "which"
  - "domains"
  - "can"
---

# Domain-based access control

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Restricts which domains can frame the agent adapter and admin portal through an allowlist.

## Extended Definition

Restricts which domains can frame the agent adapter and admin portal through an allowlist.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)

## Supporting Pages

### "Kustomer CRM integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add domain based access control for the agent adapter Domain-based access control ensures security while also allowing you to define and control which domains can display the agent adapter.
- Warning: Domain-based access control lets you define and control which domains can display in the agent adapter.
- Go to Agent Adapter - Domain Based Access Control and enter each domain as a new line.
- Warning: If you don't specify a domain, access is granted to all domains.

### "Salesforce installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Domain-based access control provides the ability to define and control which domains can display the CCAI Platform agent adapter.
- For more information, see Domain-based access control .
- Under API (Enable OAuth Settings) , select the Enable OAuth Settings checkbox and update the settings using the table: Field Name Field Value Enable OAuth Settings Selected (TRUE) Callback URL https://<tenant>.<domain>/v1/salesforce/oauth callback Selected OAuth Scopes Access the identity URL service (id, profile, email, address, phone) Manage user data using APIs (API) Perform requests at any time (refresh token, offline access) Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows Unselected (False) Required Secret for web flow Selected (TRUE) Require Secret for Refresh Token flow.
- Selected (TRUE) Under the Canvas App Settings , update the settings with the following: Field Name Field Value Canvas Selected (TRUE) Canvas App URL https://<tenant>.<domain>/v1/salesforce/start Access Method Signed Request (POST) Locations Console Lightning Component Open CTI Visualforce Page Navigate to the bottom of the page and click Save .

### "Zendesk app installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check if custom ticket fields were created from Zendesk by referring to: Admin > Manage > User Fields Admin > Manage > Ticket Fields Fields User Fields Identifier Ticket Fields Verification (Checkbox) Customer Text Feedback (Multi-line text) Customer Satisfaction Rating (Numeric): 1 to 5 Shared Customer Rating (Text): Twitter or Facebook Domain-based Access Control Refer to Domain-based Access Control for steps to limit platform access based on the domain and details related to CRM-specific domains.
- Redirect URLs Set the Redirect URLs of the OAuth client as follows, https://INSTANCE.ccaiplatform.com/v1/zendesk/oauth callback You should replace INSTANCE with the actual subdomain of your CCAI Platform.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Zendesk app installation guide Stay organized with collections Save and categorize content based on your preferences.
- Set Zendesk Subdomain to the subdomain of your Zendesk account. https://your zendesk subdomain.zendesk.com Set OAuth Client ID to the Unique Identifier of your Zendesk OAuth client.

