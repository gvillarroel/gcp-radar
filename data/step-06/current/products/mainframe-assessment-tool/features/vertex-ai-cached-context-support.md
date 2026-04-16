---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.489Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Vertex AI cached context support"
feature_slug: "vertex-ai-cached-context-support"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project"
keywords:
  - "vertex"
  - "ai"
  - "cached"
  - "context"
  - "supports"
  - "improve"
  - "performance"
  - "reduce"
---

# Vertex AI cached context support

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Supports Vertex AI cached context to improve performance and reduce costs.

## Extended Definition

Supports Vertex AI cached context to improve performance and reduce costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)

## Supporting Pages

### Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Languages Mainframe Assessment Tool supports the analysis of the following languages: COBOL programs and copybooks JCL jobs, procedures, includes, and card data HLASM programs PL/I programs ( Preview ) RPG/RPGLE programs and include files Easytrieve programs Natural for z/OS ( Preview ) Fortran ( Preview ) Database schemas Mainframe Assessment Tool supports the following database schemas: DB2: through Embedded SQL IMS DB: through EXEC DLI and CBLTDLI calls Transaction monitors Mainframe Assessment Tool supports the following transaction monitors: CICS: through EXEC CICS statements IMS DC: through CBLTDLI calls Scheduler configurations Mainframe Assessment Tool supports the following scheduler configurations: BMC Control-M Mainframe migration journey The following diagram illustrates the overall migration journey of mainframe applications: The migration journey has the following phases: Discover and assess your existing codebase: Mainframe Assessment Tool helps you perform an assessment of the mainframe application footprint, technology stack, and dependencies.
- Generative AI assisted code generation and specifications creation: use Gemini Code Assist , generative AI, and mainframe-specific context to analyze and reimagine legacy mainframe code into modern languages, such as Java, C#, and Python.
- You can use Mainframe Code Rewrite to rewrite legacy mainframe applications into modern cloud applications in Java, C#, or Python faster and with reduced costs.
- The source code is uploaded to Vertex AI, but the model is not enriched by information extracted from this source code.

### Configure settings \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Note: To improve performance and accuracy for subsequent assessments on the same files, don't clear the cache.
- To improve availability with the global Vertex AI endpoint, select Use the global Vertex AI endpoint .
- Mainframe Assessment Tool supports all zones in all the Vertex AI regions .
- Track Vertex AI costs using custom metadata labels Mainframe Assessment Tool automatically adds custom metadata labels to all Vertex AI requests to help you track and analyze costs.

### "Configure your Google Cloud project for Mainframe Assessment Tool \_|\_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Enable Vertex AI API Configure firewall rules To enable secure access to the Mainframe Assessment Tool instance through IAP, create the following firewall rules: Create a firewall rule to allow ingress traffic on TCP port 4000 by using IAP for TCP forwarding : gcloud compute firewall-rules create allow-ingress-from-iap \ --direction=INGRESS \ --action=allow \ --rules=tcp:4000\ --source-ranges=35.235.240.0/20 Create a firewall rule to deny all other ingress traffic to your Mainframe Assessment Tool instance: gcloud compute firewall-rules create deny-all-other-ingress \ --direction=ingress \ --action=deny \ --rules=all \ --source-ranges=0.0.0.0/0 \ --network=your-network-name \ --priority=65535 Assign IAM roles and permissions To ensure that the dedicated service account that you created has the necessary permissions to give the Mainframe Assessment Tool components the required access to the Vertex AI API and other services, ask your administrator to grant the following IAM roles to the dedicated service account that you created: Important: You must grant these roles to the dedicated service account that you created, not to your user account.
- Vertex AI User ( roles/aiplatform.user ) Cloud Logging: Cloud Logging Writer ( roles/logging.logWriter ) What's next Learn how to Set up and access Mainframe Assessment Tool .
- Enable Compute Engine API Enable the Vertex AI API.

