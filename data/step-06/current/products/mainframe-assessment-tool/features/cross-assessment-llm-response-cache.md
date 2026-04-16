---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.488Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Cross-assessment LLM response cache"
feature_slug: "cross-assessment-llm-response-cache"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "cross"
  - "assessment"
  - "llm"
  - "response"
  - "cache"
  - "caches"
  - "responses"
  - "across"
---

# Cross-assessment LLM response cache

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Caches LLM responses across assessments to improve reuse.

## Extended Definition

Caches LLM responses across assessments to improve reuse.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Total lines of code: total number of lines of code across all files included in the assessment.
- Dataset Lineage: shows how each dataset is used across different jobs, steps, and programs.
- Responses are streamed in real time.
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.

### Configure settings \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Note: To improve performance and accuracy for subsequent assessments on the same files, don't clear the cache.
- Gemini uses the cache data for subsequent assessments.
- You can configure Mainframe Assessment Tool to use a different model from the following available options: Gemini 3.1 Pro ( Preview ) Gemini 3 Flash ( Preview ) Gemini 2.5 Flash-Lite Gemini 2.5 Flash Gemini 2.5 Pro For models that support Thinking level configuration, Thinking level can be selected on the Thinking level drop-down.
- Filter costs in your billing report with the following labels: mat-version : version of Mainframe Assessment Tool. mat-host : host environment of the Mainframe Assessment Tool instance.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To prepare for your assessment, make sure that you have completed the following prerequisites: Configure your Google Cloud project for Mainframe Assessment Tool Set up and access Mainframe Assessment Tool Upload your mainframe application files to Mainframe Assessment Tool To upload the application files to Mainframe Assessment Tool, follow these steps: Create a zip file containing all the applications that you want to migrate.
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Create and update assessments Stay organized with collections Save and categorize content based on your preferences.
- To upload the zip file to Mainframe Assessment Tool, follow these steps: To open Mainframe Assessment Tool on your local machine, open a web browser window and go to http://localhost: PORT .
- This page describes how to upload your applications to Mainframe Assessment Tool and perform an assessment of the assets that Mainframe Assessment Tool discovers in the uploaded codebase.

