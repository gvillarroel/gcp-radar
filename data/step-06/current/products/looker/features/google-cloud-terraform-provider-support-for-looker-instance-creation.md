---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.540Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Google Cloud Terraform Provider support for Looker instance creation"
feature_slug: "google-cloud-terraform-provider-support-for-looker-instance-creation"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "terraform"
  - "provider"
  - "looker"
  - "instance"
  - "creation"
  - "core"
  - "instances"
  - "can"
---

# Google Cloud Terraform Provider support for Looker instance creation

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) instances can now be created with the Google Cloud Terraform Provider using the google_looker_instance resource.

## Extended Definition

Looker (Google Cloud core) instances can now be created with the Google Cloud Terraform Provider using the google_looker_instance resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you click the button, depending on what Looker instances already exist in this project, you'll see one of the following: If a Looker (Google Cloud core) instance already exists within this project, the Instances page will open.
- If no Looker (Google Cloud core) instances have been created in this project, the Looker (Google Cloud core) product page will open.
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Before you can create an instance, you need to complete these steps for the Google Cloud project in which you want to create the Looker (Google Cloud core) instance: Work with Sales to ensure that your annual contract is completed and that you have quota allocated in your project.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, Looker (Google Cloud core) customers who are using OIDC with a private connections instance, must ensure that their networks are set up to allow access to the OIDC provider.
- This page is enabled on Looker (Google Cloud core) instances by default.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Note: Customers who use Looker (Google Cloud core) should be aware of their responsibility for controlling access and permissions when using third-party identity providers.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- This page is enabled on Looker (Google Cloud core) instances by default.
- Enabling mirror SAML groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Note: Customers who use Looker (Google Cloud core) should be aware of their responsibility for controlling access and permissions when using third-party identity providers.
- For customer-hosted Looker instances, you can set the maximum SAML response size in number of bytes with the MAX SAML RESPONSE BYTESIZE environment variable.

