---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.440Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Git repository cloning over HTTPS"
feature_slug: "git-repository-cloning-over-https"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/api-performance"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "git"
  - "repository"
  - "cloning"
  - "over"
  - "https"
  - "looker"
  - "can"
  - "clone"
---

# Git repository cloning over HTTPS

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker can clone public Git repositories using HTTPS URLs.

## Extended Definition

Looker can clone public Git repositories using HTTPS URLs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### API performance tips \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- Source ID: `site-docs-reference-required-6`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example: PATCH https://www.googleapis.com/demo/v1/324?fields=comment,characteristics Authorization: Bearer your auth token Content-Type: application/json { "comment": "A new comment", "characteristics": { "volume": "loud", "accuracy": null } } With this request, if the comment field has an existing value, the new value overwrites it; otherwise it is set to the new value.
- Alternate notation when PATCH HTTP verb is not supported If your firewall does not allow HTTP PATCH requests, then do an HTTP POST request and set the override header to PATCH , as shown below: POST https://www.googleapis.com/...
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- This ID is equivalent to the google product category ID as described in this document: https://support.google.com/merchants/answer/6324436 ad group criterion listing group case value product bidding category level (obsolete - use ad group criterion listing group case value product category level instead) Level of the product bidding category. ad group criterion listing group case value product brand value String value of the product brand. ad group criterion listing group case value product channel channel Value of the locality. ad group criterion listing group case value product channel exclusivity channel exclusivity Value of the availability. ad group criterion listing group case value product condition condition Value of the condition. ad group criterion listing group case value product custom attribute index Indicates the index of the custom attribute. ad group criterion listing group case value product custom attribute value String value of the product custom attribute. ad group criterion listing group case value product item id value Value of the id. ad group criterion listing group case value product type level Level of the type. ad group criterion listing group case value product type value Value of the type. ad group criterion status The status of the criterion. ad group id The ID of the ad group. campaign id The ID of the campaign. metrics average cpc The total cost of all clicks divided by the total number of clicks received. metrics average cpm Average cost-per-thousand impressions (CPM). metrics clicks The number of clicks. metrics cost micros The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. metrics ctr The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions). metrics impressions Count of how often your ad has appeared on a search results page or website on the Google Network. product group view resource name The resource name of the product group view.
- This ID is equivalent to the google product category ID as described in this document: https://support.google.com/merchants/answer/6324436 asset group listing group filter case value product bidding category level (obsolete - use asset group listing group filter case value product category level instead) Indicates the level of the category in the taxonomy. asset group listing group filter case value product brand value String value of the product brand. asset group listing group filter case value product channel channel Value of the locality. asset group listing group filter case value product condition condition Value of the condition. asset group listing group filter case value product custom attribute index Indicates the index of the custom attribute. asset group listing group filter case value product custom attribute value String value of the product custom attribute. asset group listing group filter case value product item id value Value of the id. asset group listing group filter case value product type level Level of the type. asset group listing group filter case value product type value Value of the type. asset group listing group filter id The ID of the ListingGroupFilter. asset group listing group filter parent listing group filter Resource name of the parent listing group subdivision.
- This metric is reported only for display network. metrics active view impressions A measurement of how often your ad has become viewable on a Display Network site. metrics active view measurability The ratio of impressions that could be measured by Active View over the number of served impressions. metrics active view measurable cost micros The cost of the impressions you received that were measurable by Active View. metrics active view measurable impressions The number of times your ads are appearing on placements in positions where they can be seen. metrics active view viewability The percentage of time when your ad appeared on an Active View enabled site (measurable impressions) and was viewable (viewable impressions). metrics all conversions from interactions rate All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions. metrics average cost The average amount you pay per interaction.
- This metric is reported only for display network. metrics active view impressions A measurement of how often your ad has become viewable on a Display Network site. metrics active view measurability The ratio of impressions that could be measured by Active View over the number of served impressions. metrics active view measurable cost micros The cost of the impressions you received that were measurable by Active View. metrics active view measurable impressions The number of times your ads are appearing on placements in positions where they can be seen. metrics active view viewability The percentage of time when your ad appeared on an Active View enabled site (measurable impressions) and was viewable (viewable impressions). metrics all conversions from interactions rate All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions. metrics average cost The average amount you pay per interaction.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- For example, if you add the URL https://looker.com to the URL allowlist for data actions, data actions will be able to be processed only at https://looker.com .
- Permissions overview Embed and non-embed users must have at least the schedule look emails permission to be able to email any Looker content.

