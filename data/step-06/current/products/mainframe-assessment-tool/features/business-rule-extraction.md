---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.442Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Business Rule Extraction"
feature_slug: "business-rule-extraction"
latest_feature_date: "2026-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project"
keywords:
  - "business"
  - "rule"
  - "extraction"
  - "autonomously"
  - "identifies"
  - "extracts"
  - "rules"
  - "mainframe"
---

# Business Rule Extraction

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Autonomously identifies and extracts business rules from mainframe source code for review and export.

## Extended Definition

Autonomously identifies and extracts business rules from mainframe source code for review and export.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)

## Supporting Pages

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits of business rules extraction Business rules extraction helps you achieve the following goals: Create a single source of truth: Mainframe Assessment Tool extracts your mainframe application logic into human-readable business rules in Gherkin, a plain-text domain-specific language (DSL) used in behavior-driven development (BDD).
- This page provides instructions on how to use the business rules extraction in Mainframe Assessment Tool to help you validate existing business logic and identify obsolete rules in your mainframe codebase.
- During business rule extraction, Mainframe Assessment Tool analyzes your mainframe application codebase to identify the business rules, and presents them in a standardized, human-readable format.
- This page explains how to do the following: Extract business rules : run an extraction job to identify business rules in your mainframe application.

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to extract business rules .
- Job name: uniquely identifies a specific JCL job, a set of instructions for the mainframe that executes a batch process.
- Data set name: identifies the name of a file, or dataset, as it exists on the mainframe's storage volumes.
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.

### "Configure your Google Cloud project for Mainframe Assessment Tool \_|\_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable Vertex AI API Configure firewall rules To enable secure access to the Mainframe Assessment Tool instance through IAP, create the following firewall rules: Create a firewall rule to allow ingress traffic on TCP port 4000 by using IAP for TCP forwarding : gcloud compute firewall-rules create allow-ingress-from-iap \ --direction=INGRESS \ --action=allow \ --rules=tcp:4000\ --source-ranges=35.235.240.0/20 Create a firewall rule to deny all other ingress traffic to your Mainframe Assessment Tool instance: gcloud compute firewall-rules create deny-all-other-ingress \ --direction=ingress \ --action=deny \ --rules=all \ --source-ranges=0.0.0.0/0 \ --network=your-network-name \ --priority=65535 Assign IAM roles and permissions To ensure that the dedicated service account that you created has the necessary permissions to give the Mainframe Assessment Tool components the required access to the Vertex AI API and other services, ask your administrator to grant the following IAM roles to the dedicated service account that you created: Important: You must grant these roles to the dedicated service account that you created, not to your user account.
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Configure your Google Cloud project for Mainframe Assessment Tool Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI User ( roles/aiplatform.user ) Cloud Logging: Cloud Logging Writer ( roles/logging.logWriter ) What's next Learn how to Set up and access Mainframe Assessment Tool .
- For large assessments, make sure that you have sufficient quota in the region where you plan to create the Mainframe Assessment Tool instance.

