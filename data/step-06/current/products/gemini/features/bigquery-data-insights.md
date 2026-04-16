---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.660Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "BigQuery data insights"
feature_slug: "bigquery-data-insights"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
keywords:
  - "insights"
  - "gemini"
  - "in"
  - "can"
  - "generate"
  - "the"
  - "interface"
---

# BigQuery data insights

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini in BigQuery can generate data insights in the BigQuery interface.

## Extended Definition

Gemini in BigQuery can generate data insights in the BigQuery interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini](https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)

## Supporting Pages

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Interact with Gemini Code Assist in your IDE After you set up Gemini Code Assist Standard or Enterprise for a Google Cloud project , and install the Gemini Code Assist extension in your IDE ( VS Code or supported JetBrains IDE ), you can ask for assistance in the following ways: Receive code completions or generate code directly in the code editor.
- Gemini in Colab Enterprise The following table shows the types of generative AI assistance for code in Colab Enterprise : Notebook code assist Gemini Code Assist Standard Gemini Code Assist Enterprise Python code generation and completion in notebook Gemini in databases The following table shows the types of generative AI assistance for coding in databases: Generate SQL queries Gemini Code Assist Standard Gemini Code Assist Enterprise Write in natural language to generate SQL statements.
- All of the benefits mentioned for Gemini Code Assist Standard, with the addition of the following: Code customization : Your organization can augment the model with your private codebases for tailored suggestions.

### Set up Gemini in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini](https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization is using BigQuery Standard edition for compute only, then you can use Gemini Code Assist Standard, which includes data insights and automated metadata generation capabilities in addition to features listed in Gemini Code Assist Standard and Enterprise pricing overview .
- Preview features that require Gemini in BigQuery sign-up include the following: Automated metadata generation for data insights (Preview) Dataset insights with BigQuery knowledge engine (Preview) Turn off Gemini in BigQuery To prevent a user from using Gemini in BigQuery features, revoke the specific cloudaicompanion IAM permissions that grant access to these capabilities, as detailed in Enable necessary APIs and grant roles .
- The following roles grant the permissions required to use Gemini: BigQuery Studio User BigQuery Studio Admin Gemini in BigQuery requires the following permissions: cloudaicompanion.entitlements.get cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.operations.get cloudaicompanion.topics.create Click Done .
- Turn on Gemini in BigQuery features If you're a data analyst, data scientist, or developer who wants to use specific Gemini in BigQuery features to write SQL queries and Python code, then you can toggle certain Gemini features in the Google Cloud console.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- You can't select a different model in agent mode, as Gemini CLI automatically selects the model.
- Responses generated with Gemini 3 include a label identifying the model.
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- You can use the model selector in chat to select a different model, including in agent mode.

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can generate metrics that report the daily active usage or the acceptance of code recommendations for a variety of Google Cloud products, including Cloud Logging, Google Cloud CLI, Cloud Monitoring, and BigQuery.
- Queries You can use the following sample BigQuery queries to generate user- and aggregate-level data for daily active use and suggestions generated.
- Make note of it so that you can use it in the following sections as the GENERATED BIGQUERY TABLE variable.
- List the number of unique users The following instructions describe how to use the gcloud CLI to list the number of unique users of Gemini Code Assist in the most recent 28-day period: In a shell environment, ensure that you have updated all installed components of the gcloud CLI to the latest version: gcloud components update Read the log entries for Gemini Code Assist users and usage: gcloud logging read 'resource.type=cloudaicompanion.googleapis.com/Instance labels.product= "code assist"' \ --freshness 28d \ --project PROJECT ID \ --format "csv(timestamp.date('%Y-%m-%d'),labels.user id)" Replace PROJECT ID with your Google Cloud project ID.

