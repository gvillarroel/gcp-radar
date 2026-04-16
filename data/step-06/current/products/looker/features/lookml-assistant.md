---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.395Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "LookML Assistant"
feature_slug: "lookml-assistant"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
keywords:
  - "lookml"
  - "assistant"
  - "suggests"
  - "parameters"
  - "natural"
  - "language"
  - "prompts"
  - "added"
---

# LookML Assistant

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

LookML Assistant suggests LookML parameters from natural-language prompts added to project files.

## Extended Definition

LookML Assistant suggests LookML parameters from natural-language prompts added to project files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)

## Supporting Pages

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- LookML Assistant — allows users to write natural language prompts that produce Gemini-generated suggestions for LookML parameters, which they can add to their project files.
- Explore Insight Assistant — enables the Insight Assistant , which allows users to ask natural language questions about an Explore, and create and modify queries based on the Explore.
- Expression Assistant — enables the Expression Assistant , which allows users to use natural language to write Looker expressions for table calculations and custom fields .
- To use the Code Interpreter in Conversational Analytics to translate your natural language questions into Python code and execute that code to provide advanced analysis and visualizations, you must be a assigned a role that has the same permissions that are required to use Conversational Analytics.

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- This field is ignored for mutates. ad group criterion effective cpc bid micros The effective CPC (cost-per-click) bid. ad group criterion effective cpc bid source Source of the effective CPC bid. ad group criterion effective cpm bid micros The effective CPM (cost-per-thousand viewable impressions) bid. ad group criterion effective cpm bid source Source of the effective CPM bid. ad group criterion final mobile urls The list of possible final mobile URLs after all cross-domain redirects. ad group criterion final urls The list of possible final URLs after all cross-domain redirects for the ad. ad group criterion keyword text The text of the keyword (at most 80 characters and 10 words). ad group criterion status The status of the criterion. ad group id The ID of the ad group. ad group targeting setting target restrictions The per-targeting-dimension setting to restrict the reach of your campaign or ad group. ad group tracking url template The URL template for constructing a tracking URL. ad group url custom parameters The list of mappings used to substitute custom parameter tags in a tracking url template, final urls, or mobile final urls. campaign base campaign The resource name of the base campaign of a draft or experiment campaign.
- Year Google Ads Table Name: Ad Google Ads API Resource: ad group ad Google Ads Field Name Description Adwords Mapped Field Name ad group ad ad added by google ads Indicates if this ad was automatically added by Google Ads and not by a user.
- TrackingUrlTemplate ad group criterion url custom parameters The list of mappings used to substitute custom parameter tags in a tracking url template, final urls, or mobile final urls.
- TrackingUrlTemplate ad group criterion url custom parameters The list of mappings used to substitute custom parameter tags in a tracking url template, final urls, or mobile final urls.

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-docs-reference-required-6`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameter templating examples These examples demonstrate specifying destination table names with different time formats, and offsetting the run time. run time (UTC) Templated parameter Output destination table name 2018-02-15 00:00:00 mytable mytable 2018-02-15 00:00:00 mytable { run time "%Y%m%d" } mytable 20180215 2018-02-15 00:00:00 mytable { run time+25h "%Y%m%d" } mytable 20180216 2018-02-15 00:00:00 mytable { run time-1h "%Y%m%d" } mytable 20180214 2018-02-15 00:00:00 mytable { run time+1.5h "%Y%m%d%H" } or mytable { run time+90m "%Y%m%d%H" } mytable 2018021501 2018-02-15 00:00:00 { run time+97s "%Y%m%d" } mytable { run time+97s "%H%M%S" } 20180215 mytable 000137 Note: When you use date or time parameters to create tables with names ending in a date format such as YYYYMMDD , BigQuery groups these tables together .
- When you use runtime parameters in a transfer, you can do the following: Specify how you want to partition the destination table Retrieve files that match a particular date Available runtime parameters When you set up the Cloud Storage, Blob Storage, or Amazon S3 transfer, you can specify how you want to partition the destination table by using runtime parameters.
- Parameters are referenced in the following formats: {run date} {run time[+\-offset] "time format"} Parameter Purpose run date This parameter is replaced by the date in format YYYYMMDD . run time This parameter supports the following properties: offset Time offset expressed in hours (h), minutes (m), and seconds (s) in that order.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.

