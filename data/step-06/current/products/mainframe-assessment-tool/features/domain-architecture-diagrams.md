---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.447Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Domain architecture diagrams"
feature_slug: "domain-architecture-diagrams"
latest_feature_date: "2026-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "domain"
  - "architecture"
  - "diagrams"
  - "generates"
  - "domains"
  - "page"
  - "when"
  - "gemini"
---

# Domain architecture diagrams

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Generates domain architecture diagrams on the Domains page when Gemini 3 Pro is selected.

## Extended Definition

Generates domain architecture diagrams on the Domains page when Gemini 3 Pro is selected.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Get AI-generated insights for your business domain The Domains page provides AI-generated insights for the business domains associated with this assessment.
- An assessment can have multiple domains, as many as you specified when creating the assessment.
- The Domains page also displays AI-generated images representing your business domains.
- For COBOL programs, the Code suggestions page provides an AI-generated code suggestion in the programming languages that you selected when you created the assessment.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- If your application zip file is larger than 400 MB, then consider splitting the file into smaller zip files based on business domains and upload a zip file for each domain.
- Optional: To add one or more domains that represent a distinct area of functionality, click Add domain .
- Domains let you filter and review results based on specific contexts after the assessment is complete.
- You cannot edit domains after you create an assessment.

### Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to set up and interact with Mainframe Assessment Tool assessments by using MCP clients such as Gemini CLI or AI agents through the Model Context Protocol (MCP).
- ListDomains Lists the domains for a given Mainframe Assessment Tool assessment ID.
- Explore business domains discovered in your assessments.
- User prompt: "What are the dependencies of the JCL job JCLJobName in the assessment called AssessmentName ?" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

