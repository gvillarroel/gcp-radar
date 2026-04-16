---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.011Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "IBM QRadar integration"
feature_slug: "ibm-qradar-integration"
latest_feature_date: "2022-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview"
  - "https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types"
keywords:
  - "ibm"
  - "qradar"
  - "integration"
  - "sends"
  - "security"
  - "command"
  - "center"
  - "can"
---

# IBM QRadar integration

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The integration sends Security Command Center data to IBM QRadar; Security Command Center can send findings, assets, and security sources to IBM QRadar.

## Extended Definition

The integration sends Security Command Center data to IBM QRadar; Security Command Center can send findings, assets, and security sources to IBM QRadar.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview)
- [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)

## Supporting Pages

### "Filter resources and export fleet inventory information \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can filter the following information in the Database Center dashboard: Database products and versions Regions Labels Tags Google Cloud projects, if you select a folder or organization in the Open project picker in the Google Cloud console.
- Home Documentation Databases Database Center Guides Send feedback Filter resources and export fleet inventory information Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to filter the database fleet information that is displayed in your Database Center dashboard, and describes how to export database fleet inventory information into a CSV file.
- Database Center From the drop-down in the Google Cloud console menu bar, select a database scope—for example, a Google Cloud project, folder, or organization.

### "Data and infrastructure security overview \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data processing When you enroll in Security Command Center, Google Cloud processes information related to the Google Cloud services you use, including the following: The configuration and metadata associated with your Google Cloud resources The configuration and metadata for your Identity and Access Management (IAM) policies and users Google Cloud-level API access patterns and usage Cloud Logging contents for your Google Cloud organization Security Command Center metadata, including service settings and security findings Security Command Center processes data related to your cloud logs and assets that you configure to be scanned or monitored, including telemetry and other data therein, to provide findings and improve the service.
- Finding Retention period Inactive vulnerability 7 days Inactive misconfiguration 30 days Everything active (except threats) Deleted after the following amount of time has passed: 13 months (Enterprise and Premium) 35 days (Standard) If the underlying issue for a misconfiguration or vulnerability finding remains unresolved or reoccurs, Security Command Center recreates the finding on a subsequent detection scan.
- Data retention for findings Data that Security Command Center processes is captured and stored in findings that identify threats, vulnerabilities, and misconfigurations in the resources and assets within your organization, folders, and projects.
- Behavior when an asset is deleted If an asset associated with a finding is deleted, Security Command Center might reassign the finding to the organization; that is, the parent of the finding becomes the organization.

### "Supported file types and scanning modes \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)
- Source ID: `site-docs-reference-3`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OCR Image content detection Image content classification Executables ac, air, apk, app, appimage, bas, bin, bms, class, cls, com, command, ctl, ctx, dca, ddf, dep, dll, dob, dox, dsr, dsx, dws, exe, frm, frx, gadget, ipa, mpk, oca, ocx, pag, pgx, pif, pyc, res, run, scb, tlb, vbd, vbg, vbl, vbp, vbr, vbw, vbz, vlx, wct, widget, workflow, wsf, x86, x86 64, xap, xbe, xlm Not scanned at this time Archives 7z, a, ace, afa, alz, apk, ar, arc, arj, ark, b1, b6z, ba, bh, cab, car, cdx, cfs, cpio, cpt, dar, dd, dgc, dmg, ear, esd, gca, genozip, gz, ha, hki, ice, ima, img, iso, jar, kgb, lha, lpaq# , lzh, lzx, mou, pak, paq# , paq6, paq7, paq8 and variants, partimg, pea, phar, pim, pit, qda, rar, rk, run, s7z, sda, sea, sen, sfx, shar, shk, sit, sitx, sqx, swm, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, tgz, uc, uc0, uc2, uca, ucn, ue2, uha, ur2, war, wim, xar, xp3, yz1, zip, zipx, zoo, zpaq, zz Sensitive Data Protection scans files within archives that have these file extensions: bz2, cpio, gz, jar, lz4, lzma, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, xz, z, zip The scanning mode used for each file depends on the type of the file.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Supported file types and scanning modes Stay organized with collections Save and categorize content based on your preferences.

