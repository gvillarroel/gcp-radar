---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.543Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "model_fieldname_suggestions API suggest_dimension support"
feature_slug: "model-fieldname-suggestions-api-suggest-dimension-support"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
keywords:
  - "model"
  - "fieldname"
  - "suggestions"
  - "suggest"
  - "dimension"
  - "endpoint"
  - "now"
  - "supports"
---

# model_fieldname_suggestions API suggest_dimension support

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The model_fieldname_suggestions API endpoint now supports fields that define suggest_dimension.

## Extended Definition

The model_fieldname_suggestions API endpoint now supports fields that define suggest_dimension.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)

## Supporting Pages

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- On the action settings/enablement page, a Looker admin must configure the action's form fields to pull information from the user attribute by clicking the user attribute icon to the right of the appropriate field and selecting the desired user attribute. requiredField parameters in cell-level actions For cell-level actions, you can configure your model's LookML fields to deliver data to that action destination by specifying which tags your action supports in the requiredFields parameter of your action file.
- This should be unique across all actions in the Looker Action Hub. string url Yes An absolute URL of the /execute endpoint for this action. string label Yes A human-readable label for the action. string supportedActionTypes Yes A list of action types the action supports.
- We reserve the right to decline your PR but can help you with any issues that you have and offer suggestions for improvement.
- You can create a custom action by: Setting up a development repo Writing your action Testing your action Publishing and enabling your action, either in the Looker Action Hub or on your own private action hub server As with any action, you may need to configure your LookML models with specific parameters before you can use the action to deliver your data.

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- For example, this could happen when ads are automatically created as suggestions for new ads based on knowledge of how existing ads are performing.
- This field is ignored for mutates. ad group criterion effective cpc bid micros The effective CPC (cost-per-click) bid. ad group criterion effective cpc bid source Source of the effective CPC bid. ad group criterion effective cpm bid micros The effective CPM (cost-per-thousand viewable impressions) bid. ad group criterion effective cpm bid source Source of the effective CPM bid. ad group criterion final mobile urls The list of possible final mobile URLs after all cross-domain redirects. ad group criterion final urls The list of possible final URLs after all cross-domain redirects for the ad. ad group criterion keyword text The text of the keyword (at most 80 characters and 10 words). ad group criterion status The status of the criterion. ad group id The ID of the ad group. ad group targeting setting target restrictions The per-targeting-dimension setting to restrict the reach of your campaign or ad group. ad group tracking url template The URL template for constructing a tracking URL. ad group url custom parameters The list of mappings used to substitute custom parameter tags in a tracking url template, final urls, or mobile final urls. campaign base campaign The resource name of the base campaign of a draft or experiment campaign.
- Asset group signal resource name have the form: customers/{customer id}/assetGroupSignals/{asset group id} {signal id} Google Ads Table Name: Audience Google Ads API Resource: audience Google Ads Field Name Description Adwords Mapped Field Name audience description Description of this audience. audience dimensions Positive dimensions specifying the audience composition. audience exclusion dimension Negative dimension specifying the audience composition. audience id ID of the audience. audience name Name of the audience.
- AdGroupId ad group targeting setting target restrictions The per-targeting-dimension setting to restrict the reach of your campaign or ad group. campaign base campaign The resource name of the base campaign of a draft or experiment campaign.

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- Looker would generate the following declaration: view: airports { dimension: cntrl twr { # full name: airports.cntrl twr type: yesno # default name: AIRPORT Cntrl Twr (Yes/No) sql: ${TABLE}.cntrl twr ;; # the sql expression for this field } } You can rename the cntrl twr dimension to be human-readable: view: airports { dimension: has control tower { # full name: airports.has control tower type: yesno # aliased name: AIRPORTS Has Control Tower (Yes/No) sql: ${TABLE}.cntrl twr ;; # the sql expression for this field } } Filtering counts by a dimension You can group by a dimension and count entities — grouping by USERS Country , ORDERS Count will tell you where your orders are coming from by country.
- For example, you could make a new measure and name it ORDERS France Count : view: users { dimension: country {} } view: orders { dimension: id { primary key: yes sql: ${TABLE}.id ;; } measure: count { type: count drill fields: [detail] } measure: france count { type: count # COUNT(CASE WHEN users.country = 'France' THEN 1 ELSE NULL END) filters: [users.country: "France"] } } Filters can use any expression.
- This page describes the following common patterns in LookML: Labeling fields (and names in the UI) Filtering counts by a dimension Percentages Using sets for drill-down details Filtering result sets Labeling fields (and names in the UI) Looker converts LookML field names into the strings that the UI displays by combining the view name in regular-weight font with the field's short name in bold.

