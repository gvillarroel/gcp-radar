---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.169Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Scorecard chart primary dimension selection"
feature_slug: "scorecard-chart-primary-dimension-selection"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
  - "https://docs.cloud.google.com/iam/docs/authentication"
keywords:
  - "scorecard"
  - "chart"
  - "primary"
  - "dimension"
  - "selection"
  - "charts"
  - "can"
  - "use"
---

# Scorecard chart primary dimension selection

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Scorecard charts can use a dimension instead of a metric as the primary field and sort the dimension values by another field.

## Extended Definition

Scorecard charts can use a dimension instead of a metric as the primary field and sort the dimension values by another field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)

## Supporting Pages

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- FILTER ; let interactionData = { concepts : [ dimensionId ], values : [[ value ]] }; // send Looker Studio an instruction to filter other charts in the dashboard dscc . sendInteraction ( interactionId , FILTER , interactionData ); }; Note: Make sure the interactionId matches a config.interactions[].id in your config.
- Page Summary outlined flag Community visualizations can act as chart filters, allowing users to interact with them and filter other charts in the report.
- Single dimension filter This bar chart visualizes number of books by language (one dimension and one metric).
- Suppose a user selected the cells corresponding to "Monday evening" and "Friday afternoon", and you wanted to filter the rest of the dashboard to only show data from either "Monday evening" or "Friday afternoon".Your interactionData would look like this: var interactionData = { "concepts" : [ "dayOfWeekDimensionId" , "timeOfDayDimensionId" ], "values" : [ [ "Monday" , "evening" ], [ "Friday" , "afternoon" ] ] } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, any existing charts that reference fields with native functions will display an error.
- Viewers of the data source can use fields with native functions in charts.
- An example row value of this field might look like the following example: {"name": "Jakob", "age": "26"} Use the NATIVE DIMENSION function to retrieve the age from users ages json , using BigQuery's JSON VALUE function: NATIVE DIMENSION("JSON VALUE(user ages json, '$.age')","INT64") For this example row value, the NATIVE DIMENSION function would return the age 26 as an integer.
- For example: NATIVE DIMENSION("CAST({expression} AS DATETIME)", "DATETIME") Related resources Dates and times Calculated fields Data Studio function list CAST function Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

