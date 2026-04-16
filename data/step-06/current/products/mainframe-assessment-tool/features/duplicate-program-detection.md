---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.449Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Duplicate program detection"
feature_slug: "duplicate-program-detection"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "duplicate"
  - "program"
  - "detection"
  - "identifies"
  - "programs"
  - "surfaces"
  - "them"
  - "entities"
---

# Duplicate program detection

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Identifies duplicate programs and surfaces them in the Duplicate entities report.

## Extended Definition

Identifies duplicate programs and surfaces them in the Duplicate entities report.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Duplicate Entities Lists programs that have the same program ID.
- Program name: identifies the program module that has been found within the uploaded source code but does not appear to be called or executed by any other part of the application.
- For COBOL programs, the Code suggestions page provides an AI-generated code suggestion in the programming languages that you selected when you created the assessment.
- For COBOL programs and JCL jobs, the Detailed logic page provides granular, paragraph-level, and method-level details about the asset along with test cases.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- When you select a primary module, Mainframe Assessment Tool automatically identifies and includes all dependencies, such as copybooks and called programs.
- Before you begin Before you begin, make sure that you have completed the following tasks: Create an assessment: make sure that you have an existing assessment with uploaded mainframe assets such as programs and copybooks.
- During business rule extraction, Mainframe Assessment Tool analyzes your mainframe application codebase to identify the business rules, and presents them in a standardized, human-readable format.
- Exporting business rules lets you use the rules as input with tools such as Gemini CLI for modernization and analysis, share them with stakeholders, or perform offline analysis.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- If available, provide the source code of the following types: COBOL programs ( cob and cbl ) COBOL copybooks ( inc and cpy ) Easytrieve programs ( ezt ) HLASM programs ( asm ) JCL jobs ( jcl ) JCL procedures ( proc ) JCL includes JCL card data ( ctl ) PL/I programs ( pli and pl1 ) RPG/RPGLE programs ( rpg and rpgle ) RPG/RPGLE include files ( rpginc and rpgleinc ) Scheduler configurations for BMC Control-M Don't include binaries and other non-source files in the zip file.
- If the applications contain references to external artifacts such as programs or tables, we recommend that you include these dependencies as well.

