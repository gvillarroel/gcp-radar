---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.485Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "ITAR data boundary"
feature_slug: "itar-data-boundary"
latest_feature_date: "2025-12-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime"
  - "https://docs.cloud.google.com/assured-workloads/docs/create-folder"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar"
keywords:
  - "itar"
  - "boundary"
  - "assured"
  - "workloads"
  - "compliance"
---

# ITAR data boundary

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

An Assured Workloads data boundary for ITAR compliance.

## Extended Definition

An Assured Workloads data boundary for ITAR compliance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime](https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime)
- [https://docs.cloud.google.com/assured-workloads/docs/create-folder](https://docs.cloud.google.com/assured-workloads/docs/create-folder)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)

## Supporting Pages

### ComplianceRegime \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime](https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ComplianceRegime)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- AUSTRALIA DATA BOUNDARY AND SUPPORT Australia Data Boundary and Support CANADA DATA BOUNDARY AND SUPPORT Canada Data Boundary and Support DATA BOUNDARY FOR CANADA CONTROLLED GOODS Data Boundary for Canada Controlled Goods DATA BOUNDARY FOR CANADA PROTECTED B Data Boundary for Canada Protected B DATA BOUNDARY FOR CJIS Data Boundary for Criminal Justice Information Systems (CJIS) DATA BOUNDARY FOR FEDRAMP HIGH Data Boundary for FedRAMP High DATA BOUNDARY FOR FEDRAMP MODERATE Data Boundary for FedRAMP Moderate DATA BOUNDARY FOR IL2 Data Boundary for Impact Level 2 (IL2) DATA BOUNDARY FOR IL4 Data Boundary for Impact Level 4 (IL4) DATA BOUNDARY FOR IL5 Data Boundary for Impact Level 5 (IL5) DATA BOUNDARY FOR IRS PUBLICATION 1075 Data Boundary for IRS Publication 1075 DATA BOUNDARY FOR ITAR Data Boundary for International Traffic in Arms Regulations (ITAR) EU DATA BOUNDARY AND SUPPORT European Union (EU) Data Boundary and Support ISRAEL DATA BOUNDARY AND SUPPORT Israel Data Boundary and Support JAPAN DATA BOUNDARY Japan Data Boundary KSA DATA BOUNDARY WITH ACCESS JUSTIFICATIONS Kingdom of Saudi Arabia (KSA) Data Boundary with Access Justifications REGIONAL DATA BOUNDARY Data boundary for one of Assured Workloads' Free tier control packages.
- ITAR Use the DATA BOUNDARY FOR ITAR enum for this control package instead, as the name of the associated Assured Workloads control package has changed.
- US DATA BOUNDARY AND SUPPORT United States (US) Data Boundary and Support US DATA BOUNDARY FOR HEALTHCARE AND LIFE SCIENCES United States (US) Data Boundary for Healthcare and Life Sciences US DATA BOUNDARY FOR HEALTHCARE AND LIFE SCIENCES WITH SUPPORT United States (US) Data Boundary for Healthcare and Life Sciences with Support AU REGIONS AND US SUPPORT Use the AUSTRALIA DATA BOUNDARY AND SUPPORT enum for this control package instead, as the name of the associated Assured Workloads control package has changed.
- HEALTHCARE AND LIFE SCIENCES CONTROLS US SUPPORT Use the US DATA BOUNDARY FOR HEALTHCARE AND LIFE SCIENCES WITH SUPPORT enum for this control package instead, as the name of the associated Assured Workloads control package has changed.

### "Data Boundary for International Traffic in Arms Regulations (ITAR) \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Changing this value by making it less restrictive potentially undermines data residency by allowing data to be created or stored outside of a compliant data boundary. gcp.restrictCmekCryptoKeyProjects Set to under:organizations/your-organization-name , which is your Assured Workloads organization.
- Prerequisites To remain compliant as a user of the ITAR control package, verify that you satisfy and adhere to the following prerequisites: Create an ITAR folder using Assured Workloads and deploy your ITAR workloads only in that folder.
- Pricing : The ITAR control package is included in Assured Workloads' Premium tier , which incurs an 20% additional charge.
- If this occurs, you will be notified of potential non-compliance through the Assured Workloads monitoring dashboard .

### Create a new Assured Workloads folder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/create-folder](https://docs.cloud.google.com/assured-workloads/docs/create-folder)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Select a control package Select a control package to learn how to create an Assured Workloads folder: Select a control package Data Boundary for CJIS Data Boundary for FedRAMP Moderate Data Boundary for FedRAMP High US Data Boundary for Healthcare and Life Sciences US Data Boundary for Healthcare and Life Sciences with Support Data Boundary for IL2 Data Boundary for IL4 Data Boundary for IL5 Data Boundary for ITAR Data Boundary for IRS 1075 Australia Data Boundary Australia Data Boundary and Support Brazil Data Boundary Data Boundary for Canada Protected B Canada Data Boundary Canada Data Boundary and Support Chile Data Boundary EU Data Boundary EU Data Boundary and Support EU Data Boundary with Access Justifications Hong Kong Data Boundary India Data Boundary Indonesia Data Boundary Israel Data Boundary Israel Data Boundary and Support Japan Data Boundary Qatar Data Boundary Singapore Data Boundary South Africa Data Boundary South Korea Data Boundary Kingdom of Saudi Arabia Data Boundary with Access Justifications Switzerland Data Boundary Taiwan Data Boundary UK Data Boundary US Data Boundary US Data Boundary and Support Before you begin If you haven't already, you must complete the following below to create an Assured Workloads folder for the Data Boundary for CJIS control package : Ensure that you understand Assured Workloads concepts .
- After completing the steps above, Assured Workloads creates the following resources: An Assured Workloads folder, which enforces security controls on supported Google Cloud products to adhere with the Data Boundary for ITAR control package.
- Before you begin If you haven't already, you must complete the following below to create an Assured Workloads folder for the Data Boundary for ITAR control package : Ensure that you understand Assured Workloads concepts .
- Use your new Assured Workloads folder To start using your Assured Workloads folder, it's important that you put the resources that you want to be compliant with Data Boundary for ITAR in the new folder.

