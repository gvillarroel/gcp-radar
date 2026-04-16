---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.460Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "COBOL dynamic call parsing"
feature_slug: "cobol-dynamic-call-parsing"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
keywords:
  - "cobol"
  - "dynamic"
  - "call"
  - "parsing"
  - "improves"
  - "better"
  - "calls"
---

# COBOL dynamic call parsing

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Improves COBOL parsing to better support dynamic calls.

## Extended Definition

Improves COBOL parsing to better support dynamic calls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The assessment results provide you with details such as the lines of code and number of calls found in the application, which help you plan your migration.
- Modules called from COBOL programs: number of modules that are called directly from within the COBOL source code.
- Module Types Categorizes modules based on their call relationships, specifically for COBOL and JCL.
- The size of the icons is related to the number of incoming and outgoing calls.

### Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Languages Mainframe Assessment Tool supports the analysis of the following languages: COBOL programs and copybooks JCL jobs, procedures, includes, and card data HLASM programs PL/I programs ( Preview ) RPG/RPGLE programs and include files Easytrieve programs Natural for z/OS ( Preview ) Fortran ( Preview ) Database schemas Mainframe Assessment Tool supports the following database schemas: DB2: through Embedded SQL IMS DB: through EXEC DLI and CBLTDLI calls Transaction monitors Mainframe Assessment Tool supports the following transaction monitors: CICS: through EXEC CICS statements IMS DC: through CBLTDLI calls Scheduler configurations Mainframe Assessment Tool supports the following scheduler configurations: BMC Control-M Mainframe migration journey The following diagram illustrates the overall migration journey of mainframe applications: The migration journey has the following phases: Discover and assess your existing codebase: Mainframe Assessment Tool helps you perform an assessment of the mainframe application footprint, technology stack, and dependencies.
- To help you plan, Mainframe Assessment Tool automatically groups mainframe assets into sequenced migratable units based on call and data dependencies, and user configuration.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- When you select a primary module, Mainframe Assessment Tool automatically identifies and includes all dependencies, such as copybooks and called programs.
- These agents perform the extraction in several steps, such as parsing code, identifying decision logic, and generating natural language output.
- Tags: displays the tags that Mainframe Assessment Tool automatically assigns to the rule.
- You can extract business rules from applications written in PL/I, COBOL, and JCL.

