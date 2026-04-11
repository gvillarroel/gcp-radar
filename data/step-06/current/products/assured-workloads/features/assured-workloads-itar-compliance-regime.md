---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:44.465Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Assured Workloads ITAR compliance regime"
feature_slug: "assured-workloads-itar-compliance-regime"
latest_feature_date: "2022-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime"
  - "https://docs.cloud.google.com/assured-workloads/docs/release-notes"
  - "https://docs.cloud.google.com/assured-workloads/docs/overview"
keywords:
  - "became"
  - "generally"
  - "compliance"
  - "regime"
  - "workloads"
  - "assured"
  - "itar"
  - "the"
---

# Assured Workloads ITAR compliance regime

Product: Assured Workloads
Coverage: LOW

## Step 02 Summary

The ITAR compliance regime became generally available in Assured Workloads.

## Extended Definition

The ITAR compliance regime became generally available in Assured Workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime](https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime)
- [https://docs.cloud.google.com/assured-workloads/docs/release-notes](https://docs.cloud.google.com/assured-workloads/docs/release-notes)
- [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)

## Supporting Pages

### ComplianceRegime \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime](https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Assured Workloads Reference Send feedback ComplianceRegime Stay organized with collections Save and categorize content based on your preferences.
- ITAR Use the DATA BOUNDARY FOR ITAR enum for this control package instead, as the name of the associated Assured Workloads control package has changed.
- AUSTRALIA DATA BOUNDARY AND SUPPORT Australia Data Boundary and Support CANADA DATA BOUNDARY AND SUPPORT Canada Data Boundary and Support DATA BOUNDARY FOR CANADA CONTROLLED GOODS Data Boundary for Canada Controlled Goods DATA BOUNDARY FOR CANADA PROTECTED B Data Boundary for Canada Protected B DATA BOUNDARY FOR CJIS Data Boundary for Criminal Justice Information Systems (CJIS) DATA BOUNDARY FOR FEDRAMP HIGH Data Boundary for FedRAMP High DATA BOUNDARY FOR FEDRAMP MODERATE Data Boundary for FedRAMP Moderate DATA BOUNDARY FOR IL2 Data Boundary for Impact Level 2 (IL2) DATA BOUNDARY FOR IL4 Data Boundary for Impact Level 4 (IL4) DATA BOUNDARY FOR IL5 Data Boundary for Impact Level 5 (IL5) DATA BOUNDARY FOR IRS PUBLICATION 1075 Data Boundary for IRS Publication 1075 DATA BOUNDARY FOR ITAR Data Boundary for International Traffic in Arms Regulations (ITAR) EU DATA BOUNDARY AND SUPPORT European Union (EU) Data Boundary and Support ISRAEL DATA BOUNDARY AND SUPPORT Israel Data Boundary and Support JAPAN DATA BOUNDARY Japan Data Boundary KSA DATA BOUNDARY WITH ACCESS JUSTIFICATIONS Kingdom of Saudi Arabia (KSA) Data Boundary with Access Justifications REGIONAL DATA BOUNDARY Data boundary for one of Assured Workloads' Free tier control packages.
- US DATA BOUNDARY AND SUPPORT United States (US) Data Boundary and Support US DATA BOUNDARY FOR HEALTHCARE AND LIFE SCIENCES United States (US) Data Boundary for Healthcare and Life Sciences US DATA BOUNDARY FOR HEALTHCARE AND LIFE SCIENCES WITH SUPPORT United States (US) Data Boundary for Healthcare and Life Sciences with Support AU REGIONS AND US SUPPORT Use the AUSTRALIA DATA BOUNDARY AND SUPPORT enum for this control package instead, as the name of the associated Assured Workloads control package has changed.

### Assured Workloads release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/release-notes](https://docs.cloud.google.com/assured-workloads/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- September 01, 2020 v1beta1 Feature Assured Workloads for Government is now generally available for the FedRAMP Moderate compliance regime.
- October 05, 2022 v1 Issue If you create a public cluster on Google Kubernetes Engine (GKE) version 1.23 or newer in any existing Assured Workloads compliance regime folder, it might fail with the following error: ManagedResourceService.AddServiceBundle, PERMISSION DENIED'/> APPLICATION ERROR;google.cloud.servicedirectory.v1beta1/ManagedResourceService.AddServiceBundle;Request is disallowed by organization's constraints/gcp.restrictServiceUsage constraint for 'projects/<projectID> attempting to use service 'servicedirectory.googleapis.com' To fix this issue, the Service Directory API ( servicedirectory.googleapis.com ) must be added as an allowed service on the resource usage restriction organization policy for the folder.
- However, areas with potential impact include the following: Using the REST API and gcloud : Use REGIONAL CONTROLS instead of FREE REGIONS when calling organizations.locations.workloads.create to create a new Assured Workloads folder/workload Expect REGIONAL CONTROLS as the return value for ComplianceRegime from calls to organizations.locations.workloads.get and organizations.locations.workloads.list Using Terraform: Use REGIONAL CONTROLS instead of FREE REGIONS April 01, 2024 v1 Announcement The following new control packages are now available in Preview .
- See Supported products for more information: Cloud DNS Cloud Interconnect Cloud Load Balancing Cloud NAT Cloud Router Cloud VPN Identity-Aware Proxy Network Connectivity Center Virtual Private Cloud VPC Service Controls March 30, 2023 v1 Feature The Australia Regions with Assured Support compliance regime is now generally available.

### Overview of Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- These new names are also reflected in the ComplianceRegime enums that are used when creating a new workload using the Assured Workloads API.
- Assured Workloads capabilities Assured Workloads provides a variety of capabilities to help you meet your compliance and regulatory requirements, including the following: Regional data boundaries and regulatory data boundaries for compliance enforcement Personnel data access controls Encryption key management controls Compliance updates Monitoring for violations The following sections describe these capabilities.
- For example, Assured Workloads lets the following organizations meet their compliance obligations: Organizations with strict regulations for data storage, key management, and access (such as financial services, healthcare, and governmental bodies).
- These notifications include information about the Assured Workloads folder, audit logs, and affected organization policies to enable informed review and remediation of the causes for non-compliance.

