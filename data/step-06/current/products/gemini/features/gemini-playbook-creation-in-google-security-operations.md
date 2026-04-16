---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.663Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini playbook creation in Google Security Operations"
feature_slug: "gemini-playbook-creation-in-google-security-operations"
latest_feature_date: "2024-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
keywords:
  - "gemini"
  - "playbook"
  - "creation"
  - "in"
  - "security"
  - "operations"
  - "can"
  - "generate"
---

# Gemini playbook creation in Google Security Operations

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini can generate functional playbooks from prompts in Google Security Operations.

## Extended Definition

Gemini can generate functional playbooks from prompts in Google Security Operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)

## Supporting Pages

### "Security, privacy, and compliance for Gemini in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because Gemini is an evolving technology, it can generate output that's plausible-sounding but factually incorrect.
- The user can then run the generated code, modify it, or continue to iterate on the response by using Gemini.
- Certifications and capabilities Generally available (GA) Gemini in BigQuery features are covered by the certifications and security statements of Gemini for Google Cloud with exception of the following limitations: Gemini in BigQuery doesn't provide data residency for individual locations.
- Security, privacy, and compliance for Gemini in BigQuery This document describes the controls that support the security of Gemini in BigQuery.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- You can't select a different model in agent mode, as Gemini CLI automatically selects the model.
- Responses generated with Gemini 3 include a label identifying the model.
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- If the command succeeds, it returns the operation metadata in the following format: { "name": "projects/<var>CONTAINER PROJECT NAME</var>/locations/global/operations/operation-1737646069712-62c6140bb04bb-49261230-43701daf", "metadata": { "@type": "type.googleapis.com/google.cloud.cloudaicompanion.v1.OperationMetadata", "createTime": "2025-01-23T15:27:50.076075570Z", "target": "projects/<var>TARGET PROJECT NAME</var>/locations/global/loggingSettings/<var>LOGS SETTING ID</var>/settingBindings/<var>LOGS BINDING ID</var>", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Disable logging for Gemini Code Assist in a project Select one of the following options: Console In the Google Cloud console, go to the Admin for Gemini page.
- If the command succeeds, it returns a response body that shows the log prompts and responses and log metadata set to false : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings/ LOGS SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "log prompts and responses": false, "log metadata": false } Set up multi-project logging You can use logs from Gemini Code Assist to create metrics and dashboards for monitoring per-project usage.
- The Settings page loads. (Optional) Click Logging for Code Assist metadata to record the metadata generated by users of Gemini Code Assist Standard and Enterprise in the project. (Optional) Click Logging for Code Assist prompts and responses to record the prompts and responses generated by users of Gemini Code Assist Standard and Enterprise in the project.
- Alternatively, you can grant the predefined roles Gemini for Google Cloud Settings Admin ( roles/cloudaicompanion.settingsAdmin ) and Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ).

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Interact with Gemini Code Assist in your IDE After you set up Gemini Code Assist Standard or Enterprise for a Google Cloud project , and install the Gemini Code Assist extension in your IDE ( VS Code or supported JetBrains IDE ), you can ask for assistance in the following ways: Receive code completions or generate code directly in the code editor.
- As an early-stage technology, Gemini for Google Cloud products can generate output that seems plausible but is factually incorrect.
- Gemini in Colab Enterprise The following table shows the types of generative AI assistance for code in Colab Enterprise : Notebook code assist Gemini Code Assist Standard Gemini Code Assist Enterprise Python code generation and completion in notebook Gemini in databases The following table shows the types of generative AI assistance for coding in databases: Generate SQL queries Gemini Code Assist Standard Gemini Code Assist Enterprise Write in natural language to generate SQL statements.

