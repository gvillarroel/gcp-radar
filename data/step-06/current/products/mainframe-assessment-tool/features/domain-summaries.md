---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.464Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Domain summaries"
feature_slug: "domain-summaries"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "domain"
  - "summaries"
  - "adds"
  - "summary"
  - "information"
  - "assessment"
  - "domains"
---

# Domain summaries

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds summary information for Assessment Domains.

## Extended Definition

Adds summary information for Assessment Domains.

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
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Get AI-generated insights for your business domain The Domains page provides AI-generated insights for the business domains associated with this assessment.
- An assessment can have multiple domains, as many as you specified when creating the assessment.
- If the JCL job is referenced by a scheduler configuration in the assessment, this page also includes information about its scheduler job prerequisites, dependent jobs, and execution schedules.
- To get an AI-generated description of your application's business domains, follow these steps: Click Domains .

### Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListDomains Lists the domains for a given Mainframe Assessment Tool assessment ID.
- Explore business domains discovered in your assessments.
- Gemini CLI To use Gemini CLI , configure the MCP server in the Gemini CLI settings file as follows: { "mcpServers" : { "mainframe-assessment-tool" : { "httpUrl" : "http://localhost: LOCAL PORT /mcp/" } } } For more information, see Configure the MCP server in settings.json .
- User prompt: "List all the JCL jobs related to the DomainName domain under the assessment called AssessmentName ." Scenario: Get asset dependencies from an assessment.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Domains let you filter and review results based on specific contexts after the assessment is complete.
- You cannot edit domains after you create an assessment.
- If your application zip file is larger than 400 MB, then consider splitting the file into smaller zip files based on business domains and upload a zip file for each domain.
- Optional: To add one or more domains that represent a distinct area of functionality, click Add domain .

