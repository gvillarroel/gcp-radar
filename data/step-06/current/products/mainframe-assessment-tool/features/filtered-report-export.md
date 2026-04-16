---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.469Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Filtered report export"
feature_slug: "filtered-report-export"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
keywords:
  - "filtered"
  - "report"
  - "export"
  - "lets"
  - "users"
  - "reports"
  - "subset"
  - "programs"
---

# Filtered report export

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Lets users export reports for a filtered subset of programs and jobs.

## Extended Definition

Lets users export reports for a filtered subset of programs and jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)

## Supporting Pages

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can export results in the following ways: Export HTML report Export JSON report Export assessment data to your Neo4j database Export HTML report Download your assessment report as a zip file in HTML format to view the report offline or share it with others.
- Export JSON report Download your assessment report as a zip file in JSON format to use the assessment data in other tools or for custom analysis.
- Export assessment data to your Neo4j database You can export your assessment data to a Neo4j database to analyze and query the complex relationships between your mainframe application components.
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Export assessment results Stay organized with collections Save and categorize content based on your preferences.

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- This data is also available in the exported HTML and JSON reports.
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- For COBOL programs, the Code suggestions page provides an AI-generated code suggestion in the programming languages that you selected when you created the assessment.
- For COBOL programs and JCL jobs, the Detailed logic page provides granular, paragraph-level, and method-level details about the asset along with test cases.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Exporting business rules lets you use the rules as input with tools such as Gemini CLI for modernization and analysis, share them with stakeholders, or perform offline analysis.
- Before you begin Before you begin, make sure that you have completed the following tasks: Create an assessment: make sure that you have an existing assessment with uploaded mainframe assets such as programs and copybooks.
- When you select a primary module, Mainframe Assessment Tool automatically identifies and includes all dependencies, such as copybooks and called programs.
- This process lets you focus on specific business functions such as invoicing or payroll by selecting different sets of assets for each job.

