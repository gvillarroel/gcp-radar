---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.011Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Domain Restricted Sharing compatibility controls"
feature_slug: "cloud-composer-domain-restricted-sharing-compatibility-controls"
latest_feature_date: "2020-10-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
keywords:
  - "composer"
  - "domain"
  - "restricted"
  - "sharing"
  - "compatibility"
  - "controls"
  - "upgrading"
  - "to"
---

# Cloud Composer Domain Restricted Sharing compatibility controls

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Upgrading to the newest Composer version can enable or disable Domain Restricted Sharing compatibility based on organization policy settings.

## Extended Definition

Upgrading to the newest Composer version can enable or disable Domain Restricted Sharing compatibility based on organization policy settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Upgrading your environment to the newest version of Composer can now enable or disable its compatibility with Domain Restricted Sharing based on your organization policy .
- November 20, 2020 Feature Composer version 1.12.5 or newer: File synchronization between buckets in Domain restricted sharing compliant environments has been improved.
- Added validation to the v1 API so that environment creation fails quickly if Domain Restricted Sharing is enforced in the project.
- Change It is now possible to create environments with CMEK encryption in projects with enabled domain restricted sharing .

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- Description Direction Action Source or Destination Protocols Ports DNS Configure as described in VPC Service Controls support for Cloud DNS - - - - - Google APIs and services Egress Allow IPv4 addresses of restricted.googleapis.com that you use for Google APIs and services .
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Configure connectivity to Google APIs and services In a VPC Service Controls configuration, to control network traffic, configure access to Google APIs and services through the restricted.googleapis.com .

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- All underlying resources used by Cloud Composer are configured to support VPC Service Controls architecture and follow its rules.
- Domain Restricted Sharing (DRS) .
- Compliance to standards See the pages linked below to check Cloud Composer's compliance with various standards: HIPAA Compliance Access Transparency PCI DSS ISO/IEC: 27001 , 27017 , 27018 SOC: SOC 1 , SOC 2 , SOC 3 NIST: NIST800-53 , NIST800-171 DRZ FedRamp Moderate Data Residency/Location Restrictions ( configuration guide for Cloud Composer) See also Some of the security features mentioned in this article are discussed in the the Airflow Summit 2020 presentation: Run Airflow DAGs in a secure way .

