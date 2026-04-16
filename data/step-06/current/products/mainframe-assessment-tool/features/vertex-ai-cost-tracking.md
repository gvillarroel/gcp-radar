---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.455Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Vertex AI cost tracking"
feature_slug: "vertex-ai-cost-tracking"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project"
keywords:
  - "vertex"
  - "ai"
  - "cost"
  - "tracking"
  - "tracks"
  - "costs"
  - "adding"
  - "custom"
---

# Vertex AI cost tracking

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Tracks Vertex AI costs by adding custom metadata labels to model requests.

## Extended Definition

Tracks Vertex AI costs by adding custom metadata labels to model requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)

## Supporting Pages

### Configure settings \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-settings)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Track Vertex AI costs using custom metadata labels Mainframe Assessment Tool automatically adds custom metadata labels to all Vertex AI requests to help you track and analyze costs.
- In your billing report, you can use these labels to filter costs to better understand and optimize your Vertex AI usage.
- Filter costs in your billing report with the following labels: mat-version : version of Mainframe Assessment Tool. mat-host : host environment of the Mainframe Assessment Tool instance.
- The costs are updated in the billing report within 24 hours of usage, but in some cases can take longer.

### Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Key benefits Reimagine and modernize mainframe applications for the cloud: create fully modernized applications to replace legacy mainframe applications, substantially enhancing agility, scalability, and security, while reducing maintenance costs and complexity.
- You can use Mainframe Code Rewrite to rewrite legacy mainframe applications into modern cloud applications in Java, C#, or Python faster and with reduced costs.
- Rewrite mainframe applications faster and at a lower cost: accelerate modernization timelines and boost developer productivity by generating application specifications, code, and test cases from legacy mainframe code.
- Seamless IDE integration: access powerful generative AI capabilities and customized Gemini models for modernizing mainframe applications inside an IDE.

### "Configure your Google Cloud project for Mainframe Assessment Tool \_|\_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Enable Vertex AI API Configure firewall rules To enable secure access to the Mainframe Assessment Tool instance through IAP, create the following firewall rules: Create a firewall rule to allow ingress traffic on TCP port 4000 by using IAP for TCP forwarding : gcloud compute firewall-rules create allow-ingress-from-iap \ --direction=INGRESS \ --action=allow \ --rules=tcp:4000\ --source-ranges=35.235.240.0/20 Create a firewall rule to deny all other ingress traffic to your Mainframe Assessment Tool instance: gcloud compute firewall-rules create deny-all-other-ingress \ --direction=ingress \ --action=deny \ --rules=all \ --source-ranges=0.0.0.0/0 \ --network=your-network-name \ --priority=65535 Assign IAM roles and permissions To ensure that the dedicated service account that you created has the necessary permissions to give the Mainframe Assessment Tool components the required access to the Vertex AI API and other services, ask your administrator to grant the following IAM roles to the dedicated service account that you created: Important: You must grant these roles to the dedicated service account that you created, not to your user account.
- Vertex AI User ( roles/aiplatform.user ) Cloud Logging: Cloud Logging Writer ( roles/logging.logWriter ) What's next Learn how to Set up and access Mainframe Assessment Tool .
- Enable Compute Engine API Enable the Vertex AI API.

