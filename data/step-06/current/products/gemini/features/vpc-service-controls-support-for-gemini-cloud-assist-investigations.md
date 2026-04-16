---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.629Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "VPC Service Controls support for Gemini Cloud Assist investigations"
feature_slug: "vpc-service-controls-support-for-gemini-cloud-assist-investigations"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/configure-vpc-service-controls"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini"
keywords:
  - "vpc"
  - "controls"
  - "for"
  - "gemini"
  - "assist"
  - "investigations"
  - "lets"
  - "operate"
---

# VPC Service Controls support for Gemini Cloud Assist investigations

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Support for VPC Service Controls lets Gemini Cloud Assist investigations operate within service perimeters.

## Extended Definition

Support for VPC Service Controls lets Gemini Cloud Assist investigations operate within service perimeters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/configure-vpc-service-controls](https://docs.cloud.google.com/gemini/docs/configure-vpc-service-controls)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)

## Supporting Pages

### "Configure VPC Service Controls for Gemini \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-vpc-service-controls](https://docs.cloud.google.com/gemini/docs/configure-vpc-service-controls)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling VPC Service Controls for Gemini prevents all access from outside the perimeter, including running Gemini Code Assist IDE extensions from machines not in the perimeter, such as company laptops.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure VPC Service Controls for Gemini Stay organized with collections Save and categorize content based on your preferences.
- After you complete these steps, VPC Service Controls checks all calls to the Gemini for Google Cloud API to ensure that they originate from within the same perimeter.
- This document shows how to configure VPC Service Controls to support Gemini for Google Cloud , an AI-powered collaborator in Google Cloud.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Configure VPC Service Controls for Gemini Code Assist Standard and Enterprise .
- If a Gemini Code Assist subscription already exists for the billing account associated with the project, this button displays as Manage Gemini Code Assist and lets you edit your subscription .
- For more information, see Configure VPC Service Controls for Gemini .

### "Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Deployment security controls This section describes some of the security controls for Gemini Code Assist Standard and Enterprise on Google Cloud.
- For more information on setting up VPC Service Controls, see Configure VPC Service Controls for Gemini .
- For example, Gemini Code Assist Standard and Enterprise handle the following data as Customer Data: Prompt data, which includes developer queries Response data from Gemini Code Assist Standard and Enterprise Additional context, such as the current conversation history, snippets of files that are open in the IDE, snippets of files that are stored adjacent to the open file, and cursor location in the current file Because Gemini Code Assist Standard and Enterprise are stateless Google Cloud services, they don't store prompts and responses in Google Cloud.
- Examples of telemetry data include the following: An event indicating that a request was made (but not the contents of the request) An event indicating that a response was received (but not the contents of the response) A user's reaction to the response (for example, whether the user accepted or rejected the response) The character count length of accepted suggestions A user's interaction with various UI elements Gemini Code Assist Standard and Enterprise engineers have access to telemetry data to help with continual product improvements.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Configure VPC Service Controls for Gemini Code Assist Standard and Enterprise .
- If a Gemini Code Assist subscription already exists for the billing account associated with the project, this button displays as Manage Gemini Code Assist and lets you edit your subscription .
- For more information, see Configure VPC Service Controls for Gemini .

