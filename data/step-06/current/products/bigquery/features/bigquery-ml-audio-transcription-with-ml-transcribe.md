---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.603Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML audio transcription with ML.TRANSCRIBE"
feature_slug: "bigquery-ml-audio-transcription-with-ml-transcribe"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/ai-application-overview"
keywords:
  - "BQML audio transcription"
  - "BigQuery ML audio transcription"
  - "Speech-to-Text remote model"
  - "ML.TRANSCRIBE function"
  - "ML.TRANSCRIBE"
  - "TRANSCRIBE"
  - "object table audio"
---

# BigQuery ML audio transcription with ML.TRANSCRIBE

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can transcribe audio files from object tables using a Speech-to-Text remote model via the ML.TRANSCRIBE function.

## Extended Definition

BigQuery ML includes an audio transcription capability accessed through the ML.TRANSCRIBE function. The feature allows you to transcribe audio files (producing written text) and is documented as working specifically with audio files stored in object tables.

## Evidence Summary

The cited BigQuery documentation page confirms that ML.TRANSCRIBE is used to transcribe audio files and that it works with audio files in object tables.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)

## Supporting Pages

### Task-specific solutions overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly lists audio transcription as a supported BigQuery ML task using Cloud AI APIs and remote models accessed through BigQuery ML functions.

Evidence snippets:
- To learn more, try transcribing audio files with the ML.TRANSCRIBE function .
- You can then use the ML.TRANSCRIBE function to transcribe audio files.
- ML.TRANSCRIBE works with audio files in object tables .
- Audio transcription You can use audio transcription to transcribe audio files into written text.

