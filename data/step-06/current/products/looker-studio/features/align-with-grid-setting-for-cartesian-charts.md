---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.151Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Align with grid setting for Cartesian charts"
feature_slug: "align-with-grid-setting-for-cartesian-charts"
latest_feature_date: "2025-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles"
  - "https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities"
keywords:
  - "align"
  - "grid"
  - "setting"
  - "cartesian"
  - "charts"
  - "gain"
  - "alignment"
  - "option"
---

# Align with grid setting for Cartesian charts

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Cartesian charts gain an alignment option that lets the legend align with the chart grid instead of the chart title.

## Extended Definition

Cartesian charts gain an alignment option that lets the legend align with the chart grid instead of the chart title.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Examples A Google Sheets configuration: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 A Google Sheets configuration with the first row used as headers and hidden and filtered cells included: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.hasHeader=true &ds.ds3.includeHiddenCells=true &ds.ds3.includeFilteredCells=true A Google Sheets configuration with a range (A1:D20): https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.range=A1%3AD20 Looker Parameter name Description ds. alias .connector link Optional.
- In the example above, you can add a specific datasource alias to override the value from the wildcard. https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset &ds.ds1.datasetId=client-dataset More generally, the order of parameter precedence is: A parameter given with specific alias ( ds.ds1.datasetId ) A parameter provided using the wildcard ( ds. .datasetId ) A value derived from the template datasource, if ds.connector is not provided (see Replace vs update ) The default value for the parameter, if it is optional.
- Examples A Google Analytics configuration for a Universal Analytics property: https://lookerstudio.google.com/reporting/create? c.reportId=789ghi &ds.ds2.connector=googleAnalytics &ds.ds2.accountId=54516992 &ds.ds2.propertyId=UA-54516992-1 &ds.ds2.viewId=92320289 A Google Analytics configuration for a Google Analytics 4 property: https://lookerstudio.google.com/reporting/create? c.reportId=789ghi &ds.ds2.connector=googleAnalytics &ds.ds2.accountId=54516992 &ds.ds2.propertyId=213025502 Google Cloud Storage Parameter name Description ds. alias .connector link Optional.
- Example A Google Cloud Storage configuration for a single file: https://lookerstudio.google.com/reporting/create? c.reportId=231908kpf &ds.ds50.connector=googleCloudStorage &ds.ds50.pathType=FILE &ds.ds50.path=MyBucket%2FMyData%2FMyFile.csv A Google Cloud Storage configuration for all files in the path: https://lookerstudio.google.com/reporting/create? c.reportId=231908kpf &ds.ds50.connector=googleCloudStorage &ds.ds50.pathType=FOLDER &ds.ds50.path=MyBucket%2FMyData Google Sheets Parameter name Description ds. alias .connector link Optional.

### "Services that allow conditional role bindings \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)
- Source ID: `site-iam-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Resource types with built-in identities \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

