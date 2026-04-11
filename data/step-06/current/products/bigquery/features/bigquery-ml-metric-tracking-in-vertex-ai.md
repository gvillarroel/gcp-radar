---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.696Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML metric tracking in Vertex AI"
feature_slug: "bigquery-ml-metric-tracking-in-vertex-ai"
latest_feature_date: "2023-01-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial"
keywords:
  - "BigQuery ML evaluations"
  - "metric tracking"
  - "model metric comparison"
  - "metrics tracking"
  - "compare model metrics"
  - "evaluation metrics"
  - "Vertex AI metrics"
---

# BigQuery ML metric tracking in Vertex AI

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Vertex AI can compare and track evaluation metrics for BigQuery ML models.

## Extended Definition

BigQuery ML hyperparameter tuning exposes per-trial evaluation data via `ML.TRIAL_INFO`, including training and evaluation metrics and an `is optimal` flag to identify the best trial. `ML.EVALUATE` can evaluate predictions against the evaluation metrics computed during model training, enabling comparison of model/trial performance across experiments; however, the provided excerpt does not explicitly document the Vertex AI-side metric-tracking workflow.

## Evidence Summary

The cited page documents trial-level metric outputs and an optimal-trial indicator in tuning, plus `ML.EVALUATE`-based evaluation across trials, but does not explicitly tie this to Vertex AI’s metric-tracking UI.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)

## Supporting Pages

### "Improve model performance with hyperparameter tuning \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- TRIAL INFO ( MODEL bqml tutorial.hp taxi tip model ) ORDER BY is optimal DESC ; The results look similar to the following: +----------+-------------------------------------+-----------------------------------+--------------------+--------------------+-----------+---------------+------------+ trial id hyperparameters hparam tuning evaluation metrics training loss eval loss status error message is optimal +----------+-------------------------------------+-----------------------------------+--------------------+--------------------+-----------+---------------+------------+ 7 {"l1 reg":"4.999999999999985"} {"r2 score":"0.653653627638174"} 4.4677841296238165 4.478469742512195 SUCCEEDED NULL true 2 {"l1 reg":"2.402163664510254E-11"} {"r2 score":"0.6532493667964732"} 4.457692508421795 4.483697081650438 SUCCEEDED NULL false 3 {"l1 reg":"1.2929452948742316E-7"} {"r2 score":"0.653249366811995"} 4.45769250849513 4.483697081449748 SUCCEEDED NULL false 4 {"l1 reg":"2.5787102060628228E-5"} {"r2 score":"0.6532493698925899"} 4.457692523040582 4.483697041615808 SUCCEEDED NULL false ... ... ... ... ... ... ... ... +----------+-------------------------------------+-----------------------------------+--------------------+--------------------+-----------+---------------+------------+ The is optimal column value indicates that trial 7 is the optimal model returned by the tuning.
- The ML.EVALUATE function evaluates the predicted content ratings returned by the model against the evaluation metrics calculated during training for all trials.
- The ML.EVALUATE function evaluates the predicted content ratings returned by the model against the evaluation metrics calculated during model training.
- For more information about the difference between ML.TRIAL INFO objectives and ML.EVALUATE evaluation metrics, see Model serving functions .

