---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.246Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Unattended project recommender carbon reduction insights"
feature_slug: "unattended-project-recommender-carbon-reduction-insights"
latest_feature_date: "2022-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data"
  - "https://docs.cloud.google.com/carbon-footprint/docs/export"
  - "https://docs.cloud.google.com/carbon-footprint/docs/methodology"
keywords:
  - "unattended"
  - "project"
  - "recommender"
  - "carbon"
  - "reduction"
  - "insights"
  - "reports"
  - "gross"
---

# Unattended project recommender carbon reduction insights

Product: Carbon Footprint
Coverage: MEDIUM

## Step 02 Summary

The unattended project recommender reports gross carbon footprint reduction for workloads and surfaces recommendations in the Carbon Footprint dashboard.

## Extended Definition

The unattended project recommender reports gross carbon footprint reduction for workloads and surfaces recommendations in the Carbon Footprint dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)

## Supporting Pages

### View Carbon Footprint data \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recommendations Carbon Footprint has integrated with Google Cloud Active Assist Unattended Project Recommender, which analyzes usage activity across all projects, provides you with the recommendations to reclaim or shut down unattended projects, and helps you reduce both cost and carbon emissions.
- Carbon emissions by project (only in the location-based emissions tab) : Displays the estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account for the past complete month broken down by Google Cloud project.
- If your billing account has associated projects that are deemed "unattended", you will see the "Recommendations to reduce emissions" card next to your annual and monthly summary cards.
- Charts To dig deeper into the specifics of your carbon emissions, the dashboard includes four charts: Monthly carbon emissions (in both market-based emissions tab and location-based emissions tab) : Displays the total estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account over all available months, broken down by month.

### Export your carbon footprint \_|\_ Carbon Footprint \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following query lets you save the entire contents of the exported table: SELECT usage month , billing account id , project . number AS project number , project . id AS project id , service . id AS service id , service . description AS service description , location . location AS location , location . region AS region , carbon model version , carbon footprint kgCO2e . scope1 AS carbon footprint scope1 , carbon footprint kgCO2e . scope2 . location based AS carbon footprint scope2 location based , carbon footprint kgCO2e . scope3 AS carbon footprint scope3 , carbon footprint total kgCO2e . location based AS carbon footprint total location based FROM PROJECT .
- More precisely, you must have the following IAM permissions on the Google Cloud project: resourcemanager.projects.update serviceusage.services.enable bigquery.transfers.update And the following IAM permission on the billing account: billing.accounts.getCarbonInformation If using VPC Service Controls If your organization is using VPC Service Controls, an ingress rule needs to be defined for the BigQuery API and BigQuery Data Transfer Service API.
- Before you begin To create a Carbon Footprint export, we recommend having the following IAM roles: Project Owner or Project Editor on the Google Cloud project to export to.
- Export your carbon footprint You can export your Carbon Footprint data to BigQuery in order to perform data analysis, or to create custom dashboards and reports.

### Carbon Footprint reporting methodology \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To allocate company-wide emissions from non-electricity sources to the customer-specific breakdowns in Carbon Footprint reports, we establish an allocation factor – a ratio of the customer's Google Cloud electricity use to the total Google Cloud electricity use – and multiply that factor by the worldwide Google Cloud emissions from each source, determined as described here.
- Behind the methodology Carbon Footprint reports are prepared according to the widely recognized Greenhouse Gas Protocol carbon reporting and accounting standards (GHGP), which provide detailed guidance for emission reports.
- The resulting report includes a customer specific location-based electricity carbon footprint that is totalized overall per month, with breakdowns per Google Cloud product, per customer-defined project, and per region.
- Carbon Footprint reporting methodology This page explains the background, high-level methodology, and technical details behind the customer-specific greenhouse gas emissions reports provided by Carbon Footprint.

