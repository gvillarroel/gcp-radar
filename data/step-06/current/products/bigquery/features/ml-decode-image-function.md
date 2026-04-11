---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.660Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.DECODE_IMAGE function"
feature_slug: "ml-decode-image-function"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet"
keywords:
  - "BigQuery ML image decoding"
  - "decode image function"
  - "decode image bytes"
  - "ML.DECODE_IMAGE"
  - "DECODE_IMAGE"
  - "decode image"
  - "ML.PREDICT image input"
---

# ML.DECODE_IMAGE function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ML.DECODE_IMAGE BigQuery ML function decodes image data for use with ML.PREDICT.

## Extended Definition

In BigQuery ML, the ML.DECODE_IMAGE function is used in SQL SELECT statements to decode image data for use as model input in ML.PREDICT workflows. The tutorial shows it being called on image bytes (with additional arguments such as image sizing/processing options) and assigned to an input field that is then used by the prediction query.

## Evidence Summary

The cited tutorial provides an example-based confirmation that ML.DECODE_IMAGE appears in BigQuery inference SQL as the transformation step from raw image data to a prediction input field for ML.PREDICT.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)

## Supporting Pages

### "Tutorial: Run inference on an object table by using a classification model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page discusses running image classification inference with a ResNet model in BigQuery ML, but it does not explicitly document the ML.DECODE_IMAGE function.

Evidence snippets:
- You reference them in the SELECT statement for the ML.DECODE IMAGE function.
- DECODE IMAGE ( data ), 224 , 224 , FALSE ) AS input 1 FROM resnet inference test . vision images ) ); The results should look similar to the following: ------------------------------------------------------------------------------------------------------------------------------------- activation 49 uri input 1 — ------------------------------------------------------------------------------------------------------------------------------------ 1 .

