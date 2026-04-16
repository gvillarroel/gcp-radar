---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.490Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Advanced AI configuration"
feature_slug: "advanced-ai-configuration"
latest_feature_date: "2024-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview"
keywords:
  - "advanced"
  - "ai"
  - "configuration"
  - "lets"
  - "users"
  - "customize"
  - "model"
  - "level"
---

# Advanced AI configuration

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Lets users customize the AI model and the level of generated detail.

## Extended Definition

Lets users customize the AI model and the level of generated detail.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)

## Supporting Pages

### Configure settings \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- You can configure Mainframe Assessment Tool to use a different model from the following available options: Gemini 3.1 Pro ( Preview ) Gemini 3 Flash ( Preview ) Gemini 2.5 Flash-Lite Gemini 2.5 Flash Gemini 2.5 Pro For models that support Thinking level configuration, Thinking level can be selected on the Thinking level drop-down.
- Configure default AI features for new assessments Mainframe Assessment Tool lets you customize the default parameters for AI insights in your assessments.
- If you run large assessments and change the default model, we recommend that you increase the quota for that model to help enable faster assessment completion.
- To control the creativity of the model's output, select Custom temperature and set a value between 0.0 and 1.0 .

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- If the JCL job is referenced by a scheduler configuration in the assessment, this page also includes information about its scheduler job prerequisites, dependent jobs, and execution schedules.
- For COBOL programs and JCL jobs, the Detailed logic page provides granular, paragraph-level, and method-level details about the asset along with test cases.

### Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Seamless IDE integration: access powerful generative AI capabilities and customized Gemini models for modernizing mainframe applications inside an IDE.
- Languages Mainframe Assessment Tool supports the analysis of the following languages: COBOL programs and copybooks JCL jobs, procedures, includes, and card data HLASM programs PL/I programs ( Preview ) RPG/RPGLE programs and include files Easytrieve programs Natural for z/OS ( Preview ) Fortran ( Preview ) Database schemas Mainframe Assessment Tool supports the following database schemas: DB2: through Embedded SQL IMS DB: through EXEC DLI and CBLTDLI calls Transaction monitors Mainframe Assessment Tool supports the following transaction monitors: CICS: through EXEC CICS statements IMS DC: through CBLTDLI calls Scheduler configurations Mainframe Assessment Tool supports the following scheduler configurations: BMC Control-M Mainframe migration journey The following diagram illustrates the overall migration journey of mainframe applications: The migration journey has the following phases: Discover and assess your existing codebase: Mainframe Assessment Tool helps you perform an assessment of the mainframe application footprint, technology stack, and dependencies.
- Code modernization with Mainframe Code Rewrite ( Preview ) After you complete your assessment by using Mainframe Assessment Tool, you can start modernizing your code with Mainframe Code Rewrite , using generative AI and Gemini models.
- To help you plan, Mainframe Assessment Tool automatically groups mainframe assets into sequenced migratable units based on call and data dependencies, and user configuration.

