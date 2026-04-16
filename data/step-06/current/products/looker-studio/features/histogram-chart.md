---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.125Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Histogram chart"
feature_slug: "histogram-chart"
latest_feature_date: "2026-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-policies"
keywords:
  - "histogram"
  - "chart"
  - "you"
  - "can"
  - "visualize"
  - "charts"
---

# Histogram chart

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

You can visualize data with histogram charts.

## Extended Definition

You can visualize data with histogram charts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)

## Supporting Pages

### "Resource types with built-in identities \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- FILTER ; let interactionData = { concepts : [ dimensionId ], values : [[ value ]] }; // send Looker Studio an instruction to filter other charts in the dashboard dscc . sendInteraction ( interactionId , FILTER , interactionData ); }; Note: Make sure the interactionId matches a config.interactions[].id in your config.
- Page Summary outlined flag Community visualizations can act as chart filters, allowing users to interact with them and filter other charts in the report.
- Single dimension filter This bar chart visualizes number of books by language (one dimension and one metric).
- How community visualization chart filters work In order to use your community visualization as a chart filter, you need to: Configure the config.interactions property Write code that calls dscc.sendInteraction() with the filter information.

### "Resource types that accept allow policies \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

