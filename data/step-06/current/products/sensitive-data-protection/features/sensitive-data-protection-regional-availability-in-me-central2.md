---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.357Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Sensitive Data Protection regional availability in me-central2"
feature_slug: "sensitive-data-protection-regional-availability-in-me-central2"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/locations"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "central2"
  - "availability"
  - "regional"
  - "region"
  - "available"
---

# Sensitive Data Protection regional availability in me-central2

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection is available in the me-central2 region.

## Extended Definition

Sensitive Data Protection is available in the me-central2 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints](https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/locations](https://docs.cloud.google.com/sensitive-data-protection/docs/locations)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Global and regional endpoints for Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints](https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints)
- Source ID: `site-api-reference-required-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REP REGION .rep.googleapis.com Replace REP REGION with a regional endpoint available for Sensitive Data Protection .
- Sensitive Data Protection has separate sets of quotas for the following: Requests to the global endpoint with no location specified (processed in the global region) Requests to the global endpoint where a processing location is specified (processed in the specified region) Requests to regional endpoints The quotas for regional endpoints are lower than the quotas for the other two.
- If your client application is configured to use global endpoints and you want to start using regional endpoints, you need to configure your client application to specify the REP-supported region or multi-region in the subdomain and the path of each hostname that you use in your requests.
- Choose between the global and regional endpoints Consider the following when choosing between global and regional endpoints: If your organization is required to keep data at rest, in use, and in transit within a specific region, then you must use regional endpoints.

### Sensitive Data Protection locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/locations](https://docs.cloud.google.com/sensitive-data-protection/docs/locations)
- Source ID: `site-docs-reference-3`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region name Region description REP support europe-central2 Warsaw Yes europe-north1 Finland Yes europe-north2 Stockholm Yes europe-southwest1 Madrid Yes europe-west1 Belgium Yes europe-west2 London Yes europe-west3 Frankfurt Yes europe-west4 Netherlands Yes europe-west6 Zürich Yes europe-west8 Milan Yes europe-west9 Paris Yes europe-west10 Berlin Yes europe-west12 Turin Yes Middle East The following table lists the regions in the Middle East where Sensitive Data Protection is available.
- Region name Region description REP support northamerica-northeast1 Montréal Yes northamerica-northeast2 Toronto Yes northamerica-south1 Mexico Yes us-central1 Iowa Yes us-east1 South Carolina Yes us-east4 Northern Virginia Yes us-east5 Columbus Yes us-south1 Dallas Yes us-west1 Oregon Yes us-west2 Los Angeles Yes us-west3 Salt Lake City Yes us-west4 Las Vegas Yes southamerica-east1 São Paulo Yes southamerica-west1 Santiago Yes Asia Pacific The following table lists the regions in Asia Pacific where Sensitive Data Protection is available.
- Region name Region description REP support asia-east1 Taiwan Yes asia-east2 Hong Kong Yes asia-northeast1 Tokyo Yes asia-northeast2 Osaka Yes asia-northeast3 Seoul Yes asia-south1 Mumbai Yes asia-south2 Delhi Yes asia-southeast1 Singapore Yes asia-southeast2 Jakarta Yes asia-southeast3 Bangkok Yes australia-southeast1 Sydney Yes australia-southeast2 Melbourne Yes Europe The following table lists the regions in Europe where Sensitive Data Protection is available.
- Region name Region description REP support me-central1 Doha Yes me-central2 Dammam Yes me-west1 Tel Aviv Yes Multi-regions Multi-region name Multi-region description REP support asia Data centers in Asia No europe Data centers within member states of the European Union 1 .

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The following filters are available for issues : CVE Vulnerabilities Identity Data AI Security May 28, 2025 Change Model Armor enhancements Model Armor supports multi-regional endpoints.
- For regional availability, see Locations for AI Protection .
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- Feature Detector for Container Threat Detection released to General Availability Container Threat Detection , a built-in service available in Security Command Center Premium and Enterprise, has launched three new detectors to General Availability : Execution: Container Escape : Detects when a process inside a container tries to break out of its isolation and interact with the host system or other containers.

