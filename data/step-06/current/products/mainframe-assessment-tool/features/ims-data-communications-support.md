---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.454Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "IMS Data Communications support"
feature_slug: "ims-data-communications-support"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "ims"
  - "communications"
  - "parses"
  - "mfs"
  - "configuration"
  - "files"
  - "applcltn"
  - "transact"
---

# IMS Data Communications support

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Parses IMS MFS and configuration files with APPLCLTN and TRANSACT macros to build transaction relationships.

## Extended Definition

Parses IMS MFS and configuration files with APPLCLTN and TRANSACT macros to build transaction relationships.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- If the JCL job is referenced by a scheduler configuration in the assessment, this page also includes information about its scheduler job prerequisites, dependent jobs, and execution schedules.
- Missing from file: the specific source file that contains a reference to a module or component that couldn't be found within the uploaded assessment files.

### Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Languages Mainframe Assessment Tool supports the analysis of the following languages: COBOL programs and copybooks JCL jobs, procedures, includes, and card data HLASM programs PL/I programs ( Preview ) RPG/RPGLE programs and include files Easytrieve programs Natural for z/OS ( Preview ) Fortran ( Preview ) Database schemas Mainframe Assessment Tool supports the following database schemas: DB2: through Embedded SQL IMS DB: through EXEC DLI and CBLTDLI calls Transaction monitors Mainframe Assessment Tool supports the following transaction monitors: CICS: through EXEC CICS statements IMS DC: through CBLTDLI calls Scheduler configurations Mainframe Assessment Tool supports the following scheduler configurations: BMC Control-M Mainframe migration journey The following diagram illustrates the overall migration journey of mainframe applications: The migration journey has the following phases: Discover and assess your existing codebase: Mainframe Assessment Tool helps you perform an assessment of the mainframe application footprint, technology stack, and dependencies.
- To help you plan, Mainframe Assessment Tool automatically groups mainframe assets into sequenced migratable units based on call and data dependencies, and user configuration.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- If available, provide the source code of the following types: COBOL programs ( cob and cbl ) COBOL copybooks ( inc and cpy ) Easytrieve programs ( ezt ) HLASM programs ( asm ) JCL jobs ( jcl ) JCL procedures ( proc ) JCL includes JCL card data ( ctl ) PL/I programs ( pli and pl1 ) RPG/RPGLE programs ( rpg and rpgle ) RPG/RPGLE include files ( rpginc and rpgleinc ) Scheduler configurations for BMC Control-M Don't include binaries and other non-source files in the zip file.
- Before you begin To prepare for your assessment, make sure that you have completed the following prerequisites: Configure your Google Cloud project for Mainframe Assessment Tool Set up and access Mainframe Assessment Tool Upload your mainframe application files to Mainframe Assessment Tool To upload the application files to Mainframe Assessment Tool, follow these steps: Create a zip file containing all the applications that you want to migrate.
- If your application zip file is larger than 400 MB, then consider splitting the file into smaller zip files based on business domains and upload a zip file for each domain.
- If you want to replace existing files, the new zip file must include the files that you're replacing with the exact same path structure.

