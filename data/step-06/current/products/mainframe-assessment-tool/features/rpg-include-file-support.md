---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.461Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "RPG include file support"
feature_slug: "rpg-include-file-support"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
keywords:
  - "rpg"
  - "include"
  - "file"
  - "adds"
  - "files"
  - "improve"
  - "ai"
  - "generated"
---

# RPG include file support

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds support for RPG include files to improve AI-generated insights.

## Extended Definition

Adds support for RPG include files to improve AI-generated insights.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)

## Supporting Pages

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If available, provide the source code of the following types: COBOL programs ( cob and cbl ) COBOL copybooks ( inc and cpy ) Easytrieve programs ( ezt ) HLASM programs ( asm ) JCL jobs ( jcl ) JCL procedures ( proc ) JCL includes JCL card data ( ctl ) PL/I programs ( pli and pl1 ) RPG/RPGLE programs ( rpg and rpgle ) RPG/RPGLE include files ( rpginc and rpgleinc ) Scheduler configurations for BMC Control-M Don't include binaries and other non-source files in the zip file.
- If you want to replace existing files, the new zip file must include the files that you're replacing with the exact same path structure.
- Before you begin To prepare for your assessment, make sure that you have completed the following prerequisites: Configure your Google Cloud project for Mainframe Assessment Tool Set up and access Mainframe Assessment Tool Upload your mainframe application files to Mainframe Assessment Tool To upload the application files to Mainframe Assessment Tool, follow these steps: Create a zip file containing all the applications that you want to migrate.
- If your application zip file is larger than 400 MB, then consider splitting the file into smaller zip files based on business domains and upload a zip file for each domain.

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Total lines of code: total number of lines of code across all files included in the assessment.
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- Missing from file: the specific source file that contains a reference to a module or component that couldn't be found within the uploaded assessment files.
- This page describes how to review the assessment of the discovered assets, and analyze the application source files using generative AI.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- These HTML files contain the information found on Assessments page, including summaries, detailed logic, and generated code suggestions.
- The zip archive includes a JSON file for each program in your assessment, containing all the collected data, including summaries, detailed logic, and code suggestions.
- The zip archive also contains a table of contents file named index.html , which has links to all of the files in the archive.
- The zip archive includes an HTML file for each program in your assessment.

