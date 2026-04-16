---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.457Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Assessment phase status tracking"
feature_slug: "assessment-phase-status-tracking"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview"
keywords:
  - "assessment"
  - "phase"
  - "status"
  - "tracking"
  - "shows"
  - "granular"
  - "phases"
  - "such"
---

# Assessment phase status tracking

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Shows granular status for assessment phases such as initial analysis, high-level analysis, and code suggestions.

## Extended Definition

Shows granular status for assessment phases such as initial analysis, high-level analysis, and code suggestions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For example, to filter for all assets by their assessment status, set the property name to Status , and select a value such as Warning or Completed .
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- You can ask questions about source code and business logic, query assessment data such as line counts or complexity metrics, and generate visualizations like charts.
- The assessment results provide you with details such as the lines of code and number of calls found in the application, which help you plan your migration.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you begin, make sure that you have completed the following tasks: Create an assessment: make sure that you have an existing assessment with uploaded mainframe assets such as programs and copybooks.
- When you select a primary module, Mainframe Assessment Tool automatically identifies and includes all dependencies, such as copybooks and called programs.
- Rule content: shows you the details of the business rule such as input data, output data, business logic, and edge cases.
- While a job is running, the Extraction jobs table shows you the status of the job.

### Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Languages Mainframe Assessment Tool supports the analysis of the following languages: COBOL programs and copybooks JCL jobs, procedures, includes, and card data HLASM programs PL/I programs ( Preview ) RPG/RPGLE programs and include files Easytrieve programs Natural for z/OS ( Preview ) Fortran ( Preview ) Database schemas Mainframe Assessment Tool supports the following database schemas: DB2: through Embedded SQL IMS DB: through EXEC DLI and CBLTDLI calls Transaction monitors Mainframe Assessment Tool supports the following transaction monitors: CICS: through EXEC CICS statements IMS DC: through CBLTDLI calls Scheduler configurations Mainframe Assessment Tool supports the following scheduler configurations: BMC Control-M Mainframe migration journey The following diagram illustrates the overall migration journey of mainframe applications: The migration journey has the following phases: Discover and assess your existing codebase: Mainframe Assessment Tool helps you perform an assessment of the mainframe application footprint, technology stack, and dependencies.
- The mainframe migration journey has the following phases: discover and assess, plan, and migrate workloads.
- Mainframe Assessment Tool helps you discover and assess your existing codebase and plan your migration, you can then modernize your code for migration by using Mainframe Code Rewrite ( Preview ), a Visual Studio Code extension that uses generative AI to help you rewrite applications in Java, C#, and Python.
- Generative AI assisted code generation and specifications creation: use Gemini Code Assist , generative AI, and mainframe-specific context to analyze and reimagine legacy mainframe code into modern languages, such as Java, C#, and Python.

