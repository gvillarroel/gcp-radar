---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.462Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Gemini 2.0 Flash-Lite support"
feature_slug: "gemini-2-0-flash-lite-support"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
keywords:
  - "gemini"
  - "flash"
  - "lite"
  - "uses"
  - "default"
  - "ai"
  - "insight"
  - "model"
---

# Gemini 2.0 Flash-Lite support

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Uses Gemini 2.0 Flash-Lite as a default AI insight model.

## Extended Definition

Uses Gemini 2.0 Flash-Lite as a default AI insight model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)

## Supporting Pages

### Configure settings \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, Mainframe Assessment Tool uses Gemini 2.5 Flash-Lite and 2.5 Flash, adaptively.
- You can configure Mainframe Assessment Tool to use a different model from the following available options: Gemini 3.1 Pro ( Preview ) Gemini 3 Flash ( Preview ) Gemini 2.5 Flash-Lite Gemini 2.5 Flash Gemini 2.5 Pro For models that support Thinking level configuration, Thinking level can be selected on the Thinking level drop-down.
- If you run large assessments and change the default model, we recommend that you increase the quota for that model to help enable faster assessment completion.
- Configure default AI features for new assessments Mainframe Assessment Tool lets you customize the default parameters for AI insights in your assessments.

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Supported AI models: Gemini 3.1 Pro Preview and Gemini 3 Flash Preview.
- Mainframe Assessment Tool uses the Gemini 3 Pro Image Preview for domain image generation.
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- View AI-generated insights for assets The Assets page provides a summary, detailed logic, and code suggestions for a program or job in your mainframe application.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Note: Business rules extraction uses Gemini 3 Flash ( Preview ).
- Click the Change status menu and then select one of the following statuses: Awaiting review: the default status for all rules.
- Start a business rules extraction job Mainframe Assessment Tool uses Gemini-powered agents to analyze your code.
- Gemini 3 Flash is only available through the global endpoint and might not be available in all regions.

