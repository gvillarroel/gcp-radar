---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.471Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Advanced assessment settings"
feature_slug: "advanced-assessment-settings"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
keywords:
  - "advanced"
  - "assessment"
  - "settings"
  - "lets"
  - "users"
  - "configure"
  - "specific"
  - "such"
---

# Advanced assessment settings

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Lets users configure assessment-specific advanced settings such as generated code languages and tech stack hints.

## Extended Definition

Lets users configure assessment-specific advanced settings such as generated code languages and tech stack hints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)

## Supporting Pages

### Configure settings \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Configure settings Stay organized with collections Save and categorize content based on your preferences.
- Configure default AI features for new assessments Mainframe Assessment Tool lets you customize the default parameters for AI insights in your assessments.
- This page describes how to configure general settings for Mainframe Assessment Tool and modify default AI features for new assessments.
- Configure general settings To configure general settings for your assessment, follow these steps: Click the settings Settings icon.

### Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini CLI To use Gemini CLI , configure the MCP server in the Gemini CLI settings file as follows: { "mcpServers" : { "mainframe-assessment-tool" : { "httpUrl" : "http://localhost: LOCAL PORT /mcp/" } } } For more information, see Configure the MCP server in settings.json .
- Antigravity IDE To use Antigravity IDE , configure custom MCP server in mcp config.json as follows: { "mcpServers" : { "mainframe-assessment-tool" : { "serverUrl" : "http://localhost: LOCAL PORT /mcp/" } } } MCP server tools The Mainframe Assessment Tool MCP server provides tools that enable AI agents to retrieve data from your assessments.
- This page describes how to set up and interact with Mainframe Assessment Tool assessments by using MCP clients such as Gemini CLI or AI agents through the Model Context Protocol (MCP).
- FetchAsset Fetches the specification summary for an asset for a given Mainframe Assessment Tool assessment ID.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- This process lets you focus on specific business functions such as invoicing or payroll by selecting different sets of assets for each job.
- Benefits of business rules extraction Business rules extraction helps you achieve the following goals: Create a single source of truth: Mainframe Assessment Tool extracts your mainframe application logic into human-readable business rules in Gherkin, a plain-text domain-specific language (DSL) used in behavior-driven development (BDD).
- Before you begin Before you begin, make sure that you have completed the following tasks: Create an assessment: make sure that you have an existing assessment with uploaded mainframe assets such as programs and copybooks.
- Exporting business rules lets you use the rules as input with tools such as Gemini CLI for modernization and analysis, share them with stakeholders, or perform offline analysis.

