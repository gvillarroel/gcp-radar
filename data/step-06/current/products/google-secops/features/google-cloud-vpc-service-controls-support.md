---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.684Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Google Cloud VPC Service Controls support"
feature_slug: "google-cloud-vpc-service-controls-support"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/onboard"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "vpc"
  - "controls"
  - "secops"
  - "now"
  - "supports"
  - "perimeter"
  - "based"
  - "protection"
---

# Google Cloud VPC Service Controls support

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Google SecOps now supports Google Cloud VPC Service Controls for perimeter-based protection of resources and data.

## Extended Definition

Google SecOps now supports Google Cloud VPC Service Controls for perimeter-based protection of resources and data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/onboard](https://docs.cloud.google.com/chronicle/docs/onboard)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- Strengthening Endpoint Security: Integrated protection with Google Chrome Enterprise Premium & Google SecOps Chrome Enterprise Premium (CEP) integration with Google SecOps provides critical visibility into threats originating from browser activity to strengthen your endpoint security posture.
- Centralized Visibility and Response within Security Command Center : AI Protection is delivered in SCC-E which provides CNAPP capabilities and SIEM/SOAR integration with Google SecOps as part of GUS.
- Streamline SOC Operations with Security Command Center and Google SecOps Google Unified Security includes Google Security Command Center Enterprise with the latest AI Protection suite.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- View aggregated results For statistics-based searches, Google SecOps supports large aggregated result sets.
- Search large result sets Google SecOps supports returning and navigating up to 1 million results.
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Format the data value to search for Format the data value using the following guidelines: Data type: Format the data value based it's the data type: Enumerated values: Use a valid enumerated value defined for the selected UDM field.

### "Onboard a Google SecOps instance \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/onboard](https://docs.cloud.google.com/chronicle/docs/onboard)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Audit Logs: administrative activities Cloud Audit Logs Yes Yes Cloud Audit Logs: data access Cloud Audit Logs Yes Yes Cloud Billing: online subscription or pay-as-you-go Cloud Billing Yes No Chronicle APIs: general access, mint and manage credentials using third-party IdP Google Cloud APIs Yes Yes Chronicle APIs: general access, mint and manage credentials using Cloud Identity Google Cloud APIs, Cloud Identity Yes Yes Compliant controls: CMEK Cloud Key Management Service or Cloud External Key Manager Yes No Compliant controls: FedRAMP High or above Assured Workloads Yes Yes Compliant controls: Organization Policy Service Organization Policy Service Yes No Contact management: legal disclosures Essential Contacts Yes No Health monitoring: ingestion pipeline outages Cloud Monitoring Yes No Ingestion: webhook, Pub/Sub, Azure Event Hub, Amazon Kinesis Data Firehose Identity and Access Management Yes No Role-based access controls: data Identity and Access Management Yes Yes Role-based access controls: features or resources Identity and Access Management Yes Yes Support access: case submission, tracking Cloud Customer Care Yes No Unified SecOps authentication Google workforce identity federation No Yes Need more help?
- Onboard a Google SecOps instance Supported in: Google secops This document describes how to onboard (deploy) a Google SecOps (SIEM and SOAR) instance, and enable Google SecOps features based on your Google SecOps package tier and entitlements.
- Grant the onboarding SME the roles and permissions listed in these following sections: Permissions in the Google billing account Predefined IAM roles Permissions to create an Assured Workloads folder Permissions to add a Google Cloud project Permissions to configure an identity provider Permissions to configure Cloud Identity or Google Workspace Permissions to configure a third-party identity provider Permissions to link a Google SecOps instance to Google Cloud services Permissions to configure feature access control using IAM Permissions to configure data access control Google SecOps advanced capabilities requirements Permissions in the Google billing account Grant the onboarding SME the billing.resourceAssociations.list permission for the Google billing account specified in the contract.
- Prerequisites Before you can onboard a new Google SecOps instance, make sure your organization has met these prerequisites: An active registration for one of the following Google SecOps packages : Standard , Enterprise , or Enterprise Plus .

