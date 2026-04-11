---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.478Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML audio transcription from object tables"
feature_slug: "bigquery-ml-audio-transcription-from-object-tables"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/ai-application-overview"
keywords:
  - "BQML TRANSCRIBE"
  - "audio transcription from object tables"
  - "audio file transcription"
  - "Speech-to-Text remote model"
  - "TRANSCRIBE remote model"
  - "TRANSCRIBE function"
  - "ML.TRANSCRIBE"
  - "BigQuery ML remote model"
---

# BigQuery ML audio transcription from object tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports transcribing audio files from object tables via Speech-to-Text remote models using the ML.TRANSCRIBE function.

## Extended Definition

BigQuery ML includes the `ML.TRANSCRIBE` function for transcribing audio. The documentation states this function can be used to transcribe audio files and specifically notes that it works with audio files stored in object tables. Coverage is based on the provided excerpts, which do not explicitly confirm model backends or implementation details beyond the function behavior.

## Evidence Summary

The referenced BigQuery task-specific solutions page directly links `ML.TRANSCRIBE` to audio-file transcription and confirms that the function operates on object table audio files.

## Source Links

- [https://cloud.google.com/bigquery/docs/ai-application-overview](https://cloud.google.com/bigquery/docs/ai-application-overview)

## Supporting Pages

### Task-specific solutions overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Audio transcription is presented as a BigQuery ML task, but the excerpt does not clearly tie it to object tables or the ML.TRANSCRIBE function in detail.

Evidence snippets:
- To learn more, try transcribing audio files with the ML.TRANSCRIBE function .
- You can then use the ML.TRANSCRIBE function to transcribe audio files.
- ML.TRANSCRIBE works with audio files in object tables .

