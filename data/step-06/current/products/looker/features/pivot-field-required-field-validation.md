---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.544Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Pivot field required-field validation"
feature_slug: "pivot-field-required-field-validation"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "pivot"
  - "field"
  - "required"
  - "validation"
  - "adds"
  - "fields"
  - "prevent"
  - "ordinal"
---

# Pivot field required-field validation

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

A validation function adds required fields to pivot fields to prevent ordinal errors.

## Extended Definition

A validation function adds required fields to pivot fields to prevent ordinal errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Update select fields on an alert \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Version 4.0.26.6 (latest) Update select alert fields Available fields: owner id , is disabled , disabled reason , is public , threshold , enhancements Request PATCH /alerts/{alert id} Datatype Description Request HTTP Request path HTTP Path Expand HTTP Path definition... alert id string ID of an alert body HTTP Body Expand HTTP Body definition... body AlertPatch Alert Expand AlertPatch definition... owner id string New owner ID of the alert is disabled boolean Set alert enabled or disabled disabled reason string The reason this alert is disabled is public boolean Set alert public or private threshold number New threshold value enhancements string Enum of additional alert properties.
- Home Documentation Data analytics Looker API Reference Send feedback Update select fields on an alert Stay organized with collections Save and categorize content based on your preferences.
- Integration action hub form params json string Action hub form params json for the 'action hub' type IntegrationParam field AlertField The field the alert threshold is compared against when determining when to send notifications Expand AlertField definition... title string Field's title.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- If you have this file, you can upload it in the IdP Metadata field, which will populate the required fields in this section.
- Alternatively, you can fill out the required fields from the output obtained during the IdP-side configuration.
- Looker will parse that file to populate the required fields.
- In the New User Groups and New User Roles fields, enter the names of any Looker groups or roles to which you want to assign new Looker users when they first log in to Looker: These groups and roles are applied to new users at their initial login.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Use the configuration information you obtained from your OP's discovery document, your OP, or your internal authentication team to enter connection settings in the following fields: Identifier : The client identifier unique to your Looker instance.
- In the New User Groups and New User Roles fields, enter the names of any Looker groups or roles to which you want to assign new Looker users when they first sign in to Looker: These groups and roles are applied to new users on their initial login.
- Then, enter the group information to configure the specific OpenID Connect groups you want to mirror into Looker in the Preferred Group Name / Roles / OpenID Connect Group Name fields.
- If this is the case with your OP, enter the claim that stores names in both of the First Name Claim and Last Name Claim fields.

