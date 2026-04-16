---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.144Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Chart margin reset via double-click"
feature_slug: "chart-margin-reset-via-double-click"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
  - "https://developers.google.com/looker-studio/integrate/api"
keywords:
  - "chart"
  - "margin"
  - "reset"
  - "via"
  - "double"
  - "click"
  - "users"
  - "can"
---

# Chart margin reset via double-click

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Users can double-click supported chart boundaries to restore the default margins.

## Extended Definition

Users can double-click supported chart boundaries to restore the default margins.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- [https://developers.google.com/looker-studio/integrate/api](https://developers.google.com/looker-studio/integrate/api)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Users can seamlessly access reports with a single click, interact with the data, and even save personalized copies to their Looker Studio accounts.
- Users can save the report with a single click and revisit the report at any time.
- Example A Search Console configuration for a URL-prefix property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=searchConsole &ds.ds5.siteUrl=https%3A%2F%2Fwww.example.com%2Fwelcome &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB A Search Console configuration for a Domain property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr ds.ds5.connector=searchConsole &ds.ds5.siteUrl=sc-domain%3Aexample.com &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB Template permissions To ensure the best user experience for users, it's important to correctly set report access permissions for your template report and associated data sources.
- When creating a report with the Linking API, you can re-add a datasource from your template report by ensuring all the following conditions are met: The data source is reusable (see embedded vs reusable data sources ) The url does not reference the data source by alias The url does not use a wildcard alias (see Data source alias wildcard ) When a new data source is created with the Linking API, it uses the credentials of the user that clicked the url.

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- An example row value of this field might look like the following example: {"name": "Jakob", "age": "26"} Use the NATIVE DIMENSION function to retrieve the age from users ages json , using BigQuery's JSON VALUE function: NATIVE DIMENSION("JSON VALUE(user ages json, '$.age')","INT64") For this example row value, the NATIVE DIMENSION function would return the age 26 as an integer.
- NATIVE DIMENSION examples JSON functions in SQL Assume that your data includes a users ages json field whose values are formatted as JSON payloads.
- Additionally, any existing charts that reference fields with native functions will display an error.
- If you disable native functions, no users can create fields using native functions.

### Looker Studio API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/api](https://developers.google.com/looker-studio/integrate/api)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorize the app for an organization Apps using the Looker Studio API can only authenticate and authorize Google Workspace users where the user's organization has authorized the app using Domain-wide delegation to control API access .
- The following scopes are commonly requested if using the Looker Studio API to manage assets: https://www.googleapis.com/auth/datastudio https://www.googleapis.com/auth/userinfo.profile Click Authorize .
- The only exception would be if the app requests authorization for additional Google API scopes that the Workspace Admin hasn't configured, in which case the OAuth dialog will be shown to users.
- Troubleshooting Missing OAuth dialog If a user's organization has authorized the app , users of that organization will not be shown the OAuth dialog when authorizing the app.

