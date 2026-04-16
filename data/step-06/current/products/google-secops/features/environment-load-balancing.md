---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.793Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Environment load balancing"
feature_slug: "environment-load-balancing"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/onboard"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "environment"
  - "load"
  - "balancing"
  - "improves"
  - "stability"
  - "fair"
  - "resource"
  - "sharing"
---

# Environment load balancing

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Environment load balancing improves stability and fair resource sharing in multi-tenant environments.

## Extended Definition

Environment load balancing improves stability and fair resource sharing in multi-tenant environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/onboard](https://docs.cloud.google.com/chronicle/docs/onboard)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Navigate search results using pagination To improve browser stability and performance when loading a large number of results, Google SecOps provides paginated search results.
- Navigate result sets To improve browser stability and performance when loading a large number of events, Google SecOps provides paginated search results.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.

### "Onboard a Google SecOps instance \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/onboard](https://docs.cloud.google.com/chronicle/docs/onboard)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Audit Logs: administrative activities Cloud Audit Logs Yes Yes Cloud Audit Logs: data access Cloud Audit Logs Yes Yes Cloud Billing: online subscription or pay-as-you-go Cloud Billing Yes No Chronicle APIs: general access, mint and manage credentials using third-party IdP Google Cloud APIs Yes Yes Chronicle APIs: general access, mint and manage credentials using Cloud Identity Google Cloud APIs, Cloud Identity Yes Yes Compliant controls: CMEK Cloud Key Management Service or Cloud External Key Manager Yes No Compliant controls: FedRAMP High or above Assured Workloads Yes Yes Compliant controls: Organization Policy Service Organization Policy Service Yes No Contact management: legal disclosures Essential Contacts Yes No Health monitoring: ingestion pipeline outages Cloud Monitoring Yes No Ingestion: webhook, Pub/Sub, Azure Event Hub, Amazon Kinesis Data Firehose Identity and Access Management Yes No Role-based access controls: data Identity and Access Management Yes Yes Role-based access controls: features or resources Identity and Access Management Yes Yes Support access: case submission, tracking Cloud Customer Care Yes No Unified SecOps authentication Google workforce identity federation No Yes Need more help?
- Grant the onboarding SME the roles and permissions listed in these following sections: Permissions in the Google billing account Predefined IAM roles Permissions to create an Assured Workloads folder Permissions to add a Google Cloud project Permissions to configure an identity provider Permissions to configure Cloud Identity or Google Workspace Permissions to configure a third-party identity provider Permissions to link a Google SecOps instance to Google Cloud services Permissions to configure feature access control using IAM Permissions to configure data access control Google SecOps advanced capabilities requirements Permissions in the Google billing account Grant the onboarding SME the billing.resourceAssociations.list permission for the Google billing account specified in the contract.
- Google's Workforce Identity Federation lets you grant on-premises or multi-cloud workloads access to Google Cloud resources, without using service account keys.
- If the onboarding SME doesn't have project creator permissions at the organization level, grant the following project-level IAM roles: Chronicle Service Admin ( roles/chroniclesm.admin ) (if this role was not granted earlier) Editor ( roles/editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Permissions to configure an identity provider You can use an IdP to manage users, groups, and authentication.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Getting Started with Google Chrome and Google SecOps Configure the Chrome Enterprise Premium Reporting Connector to send data to Google SecOps Connect Chrome Enterprise Premium to Google SecOps Enable Chrome Enterprise Threats Curated Detections Examples Investigating Malicious Browser Extensions A user downloads and installs a malicious browser extension from outside the Chrome Web Store, that once installed, reads their session cookies and posts them to a server on a suspicious domain that was registered within the last week.
- See activate enterprise tier Validate Security Command Center Detection Services are enabled: See How to configure Security Command Center Connect Security Command Center to AWS to get configuration and resource data that flows through to the Entity Graph: See Connect Security Command Center to AWS Preview - Connect Security Command Center to Azure to get configuration and resource data that flows through to the Entity Graph. (Optional) Integrate Security Command Center with ticketing systems.
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- Suspicious user activities occurring within your environment A security analyst receives an alert that a user has suddenly initiated a large data transfer to an external cloud storage service after several failed login attempts, raising suspicion of a potential account compromise or unauthorized data transfer.

