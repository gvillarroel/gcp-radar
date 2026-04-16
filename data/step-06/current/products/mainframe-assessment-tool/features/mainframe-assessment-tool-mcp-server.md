---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.450Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Mainframe Assessment Tool MCP server"
feature_slug: "mainframe-assessment-tool-mcp-server"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
keywords:
  - "mainframe"
  - "assessment"
  - "tool"
  - "mcp"
  - "server"
  - "provides"
  - "lets"
  - "ai"
---

# Mainframe Assessment Tool MCP server

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Provides an MCP server that lets AI agents interact with Mainframe Assessment Tool through the Model Context Protocol.

## Extended Definition

Provides an MCP server that lets AI agents interact with Mainframe Assessment Tool through the Model Context Protocol.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)

## Supporting Pages

### Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Antigravity IDE To use Antigravity IDE , configure custom MCP server in mcp config.json as follows: { "mcpServers" : { "mainframe-assessment-tool" : { "serverUrl" : "http://localhost: LOCAL PORT /mcp/" } } } MCP server tools The Mainframe Assessment Tool MCP server provides tools that enable AI agents to retrieve data from your assessments.
- Enable the MCP server To enable the MCP server on your Mainframe Assessment Tool VM instance, add the MAT ENABLE MCP metadata key and set its value to true by running the following gcloud command: gcloud compute instances add-metadata INSTANCE NAME \ --metadata=MAT ENABLE MCP=true \ --zone= ZONE Replace the following: INSTANCE NAME : the name of your VM instance.
- Gemini CLI To use Gemini CLI , configure the MCP server in the Gemini CLI settings file as follows: { "mcpServers" : { "mainframe-assessment-tool" : { "httpUrl" : "http://localhost: LOCAL PORT /mcp/" } } } For more information, see Configure the MCP server in settings.json .
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Mainframe Assessment Tool MCP server Stay organized with collections Save and categorize content based on your preferences.

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback View and understand assessment results Stay organized with collections Save and categorize content based on your preferences.
- Before you begin Create an assessment Review application assessment results To open an assessment to review results, follow these steps: Open the Mainframe Assessment Tool in a web browser.
- Mainframe Assessment Tool uses the Gemini 3 Pro Image Preview for domain image generation.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- This page provides instructions on how to use the business rules extraction in Mainframe Assessment Tool to help you validate existing business logic and identify obsolete rules in your mainframe codebase.
- Benefits of business rules extraction Business rules extraction helps you achieve the following goals: Create a single source of truth: Mainframe Assessment Tool extracts your mainframe application logic into human-readable business rules in Gherkin, a plain-text domain-specific language (DSL) used in behavior-driven development (BDD).
- During business rule extraction, Mainframe Assessment Tool analyzes your mainframe application codebase to identify the business rules, and presents them in a standardized, human-readable format.
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Extract business rules Stay organized with collections Save and categorize content based on your preferences.

