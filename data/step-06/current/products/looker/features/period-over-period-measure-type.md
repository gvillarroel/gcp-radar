---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.469Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "period_over_period measure type"
feature_slug: "period-over-period-measure-type"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bar-options"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
  - "https://docs.cloud.google.com/looker/docs/visualization-guide"
keywords:
  - "period"
  - "over"
  - "measure"
  - "type"
  - "lets"
  - "developers"
  - "define"
  - "measures"
---

# period_over_period measure type

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets developers define period-over-period measures for analysis in Looker Explores.

## Extended Definition

Lets developers define period-over-period measures for analysis in Looker Explores.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)

## Supporting Pages

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When Show Full Field Name is turned off, generally only the field name shows; however, measures of type count display only the view name instead.
- Benefits of specifying axes Using this functionality, any chart can: Combine arbitrary series in any number of axes Split pivoted series across various axes by measure Render top and bottom axes in rotated charts Render charts with various measure types so long as they are not combined (such as linear and log) Render log charts with values between 0 and 1 Each y-axis has its own set of configuration options and displays one or more data series on a scale relative to that y-axis.
- If the number of previous data points is less than the period setting, the Moving Average is calculated over the partial periods, but is rebased to the number of available data points.
- The logarithmic scale type can only be used for data with positive values and is only available when you have set Series Positioning to Grouped or Overlay on the Plot tab.

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This ID is equivalent to the google product category ID as described in this document: https://support.google.com/merchants/answer/6324436 ad group criterion listing group case value product bidding category level (obsolete - use ad group criterion listing group case value product category level instead) Level of the product bidding category. ad group criterion listing group case value product brand value String value of the product brand. ad group criterion listing group case value product channel channel Value of the locality. ad group criterion listing group case value product channel exclusivity channel exclusivity Value of the availability. ad group criterion listing group case value product condition condition Value of the condition. ad group criterion listing group case value product custom attribute index Indicates the index of the custom attribute. ad group criterion listing group case value product custom attribute value String value of the product custom attribute. ad group criterion listing group case value product item id value Value of the id. ad group criterion listing group case value product type level Level of the type. ad group criterion listing group case value product type value Value of the type. ad group criterion status The status of the criterion. ad group id The ID of the ad group. campaign id The ID of the campaign. metrics average cpc The total cost of all clicks divided by the total number of clicks received. metrics average cpm Average cost-per-thousand impressions (CPM). metrics clicks The number of clicks. metrics cost micros The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. metrics ctr The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions). metrics impressions Count of how often your ad has appeared on a search results page or website on the Google Network. product group view resource name The resource name of the product group view.
- This metric is reported only for display network. metrics active view impressions A measurement of how often your ad has become viewable on a Display Network site. metrics active view measurability The ratio of impressions that could be measured by Active View over the number of served impressions. metrics active view measurable cost micros The cost of the impressions you received that were measurable by Active View. metrics active view measurable impressions The number of times your ads are appearing on placements in positions where they can be seen. metrics active view viewability The percentage of time when your ad appeared on an Active View enabled site (measurable impressions) and was viewable (viewable impressions). metrics all conversions from interactions rate All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions. metrics average cost The average amount you pay per interaction.
- This metric is reported only for display network. metrics active view impressions A measurement of how often your ad has become viewable on a Display Network site. metrics active view measurability The ratio of impressions that could be measured by Active View over the number of served impressions. metrics active view measurable cost micros The cost of the impressions you received that were measurable by Active View. metrics active view measurable impressions The number of times your ads are appearing on placements in positions where they can be seen. metrics active view viewability The percentage of time when your ad appeared on an Active View enabled site (measurable impressions) and was viewable (viewable impressions). metrics all conversions from interactions rate All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions. metrics average cost The average amount you pay per interaction.
- It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. customer id The ID of the customer. landing page view unexpanded final url The advertiser-specified final URL. metrics average cpc The total cost of all clicks divided by the total number of clicks received. metrics clicks The number of clicks. metrics cost micros The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. metrics ctr The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions). metrics impressions Count of how often your ad has appeared on a search results page or website on the Google Network. metrics mobile friendly clicks percentage The percentage of mobile clicks that go to a mobile-friendly page. metrics speed score A measure of how quickly your page loads after clicks on your mobile ads.

### "Selecting an effective data visualization \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)
- Source ID: `site-docs-reference-required-4`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sections describe how data can be effectively visualized in a way that centers on both your analytic objectives and your audience's perspectives: Consider the characteristics of your data Define your audience Select the best visualization for your data Consider the characteristics of your data Before you decide on a visualization type, consider the characteristics of your data: Categorical : When your data contains groups of similar patterns and sets, using a visualization type that best supports categorical data, such as a pie chart , is effective.
- Select the best visualization for your data The following sections provide an overview of available visualization types in Looker and discuss how to select the best type for your data: Cartesian charts Pie and donut charts Progression charts Texts and tables Maps Other charts Cartesian charts A Cartesian chart refers to any chart that is rooted in the Cartesian plane.
- Continuous: If you want to visualize data that occurs over a long period of time, use visualizations that support continuous data, such as progression charts .
- This type of visualization is helpful for portraying a distinct circumstance rather than a changing, evolving process over time.

