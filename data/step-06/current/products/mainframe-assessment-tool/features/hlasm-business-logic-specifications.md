---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.470Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "HLASM business logic specifications"
feature_slug: "hlasm-business-logic-specifications"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "hlasm"
  - "business"
  - "logic"
  - "specifications"
  - "adds"
  - "information"
  - "relevant"
  - "programs"
---

# HLASM business logic specifications

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds business logic information to specifications for relevant HLASM programs.

## Extended Definition

Adds business logic information to specifications for relevant HLASM programs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)

## Supporting Pages

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits of business rules extraction Business rules extraction helps you achieve the following goals: Create a single source of truth: Mainframe Assessment Tool extracts your mainframe application logic into human-readable business rules in Gherkin, a plain-text domain-specific language (DSL) used in behavior-driven development (BDD).
- This page provides instructions on how to use the business rules extraction in Mainframe Assessment Tool to help you validate existing business logic and identify obsolete rules in your mainframe codebase.
- By selecting a status, you make sure that the modernization specifications accurately reflect your current business needs.
- Rule content: shows you the details of the business rule such as input data, output data, business logic, and edge cases.

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- You can ask questions about source code and business logic, query assessment data such as line counts or complexity metrics, and generate visualizations like charts.
- For COBOL programs and JCL jobs, the Detailed logic page provides granular, paragraph-level, and method-level details about the asset along with test cases.
- Each domain has its own status, summary, business logic, data flow, and associated assets.
- To see the summary, business logic, and data flow of a specific domain, click Show more .

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- If available, provide the source code of the following types: COBOL programs ( cob and cbl ) COBOL copybooks ( inc and cpy ) Easytrieve programs ( ezt ) HLASM programs ( asm ) JCL jobs ( jcl ) JCL procedures ( proc ) JCL includes JCL card data ( ctl ) PL/I programs ( pli and pl1 ) RPG/RPGLE programs ( rpg and rpgle ) RPG/RPGLE include files ( rpginc and rpgleinc ) Scheduler configurations for BMC Control-M Don't include binaries and other non-source files in the zip file.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- If your application zip file is larger than 400 MB, then consider splitting the file into smaller zip files based on business domains and upload a zip file for each domain.
- If the applications contain references to external artifacts such as programs or tables, we recommend that you include these dependencies as well.

