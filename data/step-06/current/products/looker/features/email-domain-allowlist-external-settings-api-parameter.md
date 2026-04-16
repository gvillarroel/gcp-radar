---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.552Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Email Domain Allowlist external settings API parameter"
feature_slug: "email-domain-allowlist-external-settings-api-parameter"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
keywords:
  - "email"
  - "domain"
  - "allowlist"
  - "external"
  - "settings"
  - "parameter"
  - "now"
  - "includes"
---

# Email Domain Allowlist external settings API parameter

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The external settings API now includes an Email Domain Allowlist parameter for validating and saving email domains.

## Extended Definition

The external settings API now includes an Email Domain Allowlist parameter for validating and saving email domains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.
- If a group is assigned multiple email domain sets, for example through membership in multiple groups, then members of that group will be able to send emails to all domains that are assigned to each of the user attribute values, as well as the domains that are listed in the Email Domain Allowlist for Scheduled Content admin setting.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Users can email content deliveries or alert notifications to email addresses with any domain, regardless of whether the Email domain allowlist on the Settings page of the Admin panel contains any email domains. create alerts see looks Instance Wide NN This permission applies to dashboards in Looker and to charts in Looker Studio that use the Looker connector.
- Looker admins can control the email domains that Looker users and embed users can send email deliveries to with the Email domain allowlist on the Settings page of the Admin panel.
- Default permission sets For new installations, Looker includes several default permission sets that you can start with: Permission Set Included Permissions Admin All permissions Developer access data , can create forecast , clear cache refresh , create custom fields , create table calculations , deploy , develop , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see pdts , see sql , see user dashboards , send to integration , schedule without limit , use sql runner NOTE : The see pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later.
- However, they can edit only the following connection settings: All settings in the General settings section All settings in the SSH Server section All settings in the Time Zone section The Additional JDBC Parameters , SSL , Verify SSL , and Use TNS settings in the Additional Settings section Users cannot edit any other settings in the Additional Settings section.

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This field is ignored for mutates. ad group criterion effective cpc bid micros The effective CPC (cost-per-click) bid. ad group criterion effective cpc bid source Source of the effective CPC bid. ad group criterion effective cpm bid micros The effective CPM (cost-per-thousand viewable impressions) bid. ad group criterion effective cpm bid source Source of the effective CPM bid. ad group criterion final mobile urls The list of possible final mobile URLs after all cross-domain redirects. ad group criterion final urls The list of possible final URLs after all cross-domain redirects for the ad. ad group criterion keyword text The text of the keyword (at most 80 characters and 10 words). ad group criterion status The status of the criterion. ad group id The ID of the ad group. ad group targeting setting target restrictions The per-targeting-dimension setting to restrict the reach of your campaign or ad group. ad group tracking url template The URL template for constructing a tracking URL. ad group url custom parameters The list of mappings used to substitute custom parameter tags in a tracking url template, final urls, or mobile final urls. campaign base campaign The resource name of the base campaign of a draft or experiment campaign.
- This only includes conversion actions which include in conversions metric attribute is set to true. metrics ctr The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions). metrics gmail forwards The number of times the ad was forwarded to someone else as a message. metrics gmail saves The number of times someone has saved your Gmail ad to their inbox as a message. metrics gmail secondary clicks The number of clicks to the landing page on the expanded state of Gmail ads. metrics impressions Count of how often your ad has appeared on a search results page or website on the Google Network. metrics interaction event types The types of payable and free interactions. metrics interaction rate How often people interact with your ad after it is shown to them.
- This only includes conversion actions which include in conversions metric attribute is set to true. metrics ctr The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions). metrics gmail forwards The number of times the ad was forwarded to someone else as a message. metrics gmail saves The number of times someone has saved your Gmail ad to their inbox as a message. metrics gmail secondary clicks The number of clicks to the landing page on the expanded state of Gmail ads. metrics impressions Count of how often your ad has appeared on a search results page or website on the Google Network. metrics interaction event types The types of payable and free interactions. metrics interaction rate How often people interact with your ad after it is shown to them.
- This only includes conversion actions which include in conversions metric attribute is set to true. metrics cost micros The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. metrics impressions Count of how often your ad has appeared on a search results page or website on the Google Network. metrics interaction event types The types of payable and free interactions. metrics interactions The number of interactions.

