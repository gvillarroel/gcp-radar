---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:59:28.162Z"
product_name: "Assured Open Source Software"
product_slug: "assured-open-source-software"
feature_name: "Assured OSS artifact checksum signature verification"
feature_slug: "assured-oss-artifact-checksum-signature-verification"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-open-source-software/docs/package-signature-overview"
  - "https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages"
  - "https://docs.cloud.google.com/assured-open-source-software/docs/access-metadata-using-container-analysis"
keywords:
  - "verification"
  - "signature"
  - "checksum"
  - "allows"
  - "artifact"
  - "assured"
  - "now"
  - "oss"
---

# Assured OSS artifact checksum signature verification

Product: Assured Open Source Software
Coverage: LOW

## Step 02 Summary

Assured OSS now allows artifact signature verification using checksums.

## Extended Definition

Assured OSS now allows artifact signature verification using checksums.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-open-source-software/docs/package-signature-overview](https://docs.cloud.google.com/assured-open-source-software/docs/package-signature-overview)
- [https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages](https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages)
- [https://docs.cloud.google.com/assured-open-source-software/docs/access-metadata-using-container-analysis](https://docs.cloud.google.com/assured-open-source-software/docs/access-metadata-using-container-analysis)

## Supporting Pages

### "Overview of Assured OSS artifact signature \_|\_ Assured Open Source Software\

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/package-signature-overview](https://docs.cloud.google.com/assured-open-source-software/docs/package-signature-overview)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Assured Open Source Software Guides Send feedback Overview of Assured OSS artifact signature Stay organized with collections Save and categorize content based on your preferences.
- Download the signatureverification.sh , README.md and the signature.zip for the verification script using the following command: gcloud storage cp "gs://cloud-aoss/utils/signature-verification/v1.0" PATH TO LOCAL STORE --recursive Replace PATH TO LOCAL STORE with the local path where you want to download the file.
- Verification of signatures You can verify signatures using either of the following: aoss-verifier tool manually verification script Verify signatures using aoss-verifier tool To verify the authenticity and integrity of open source software packages, install the aoss-verifier tool.
- Grant the required permissions to execute the script using the following command: chmod +x signatureverification.sh Execute the script using the following command if you haven't downloaded the signature.zip file: ./signatureverification.sh --data file path PATH TO DATA FILE \ --signature url SIGNATURE ZIP URL \ --root cert url ROOT CERT URL Replace the following: PATH TO DATA FILE : the path to the data file in your local directory that you want to verify SIGNATURE ZIP URL : the URL of the signature zip file ROOT CERT URL : the public root certificate URL Sample output The following output indicates that the verification script has run successfully.

### "Verify signatures in the Assured OSS free tier \_|\_ Assured Open Source\

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages](https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As shown in the following example, you can get the signature zip URL from the externalRefs : referenceLocator field. "packages": [ { "SPDXID": "SPDXRef-Package-logback-core-1.2.11.jar", "checksums": [ { "algorithm": "SHA256", "checksumValue": "c847e0e310acda8bc1347c9d9cc051e91210b9f943e131fceb5034c2f0c9a5d8" } ], "downloadLocation": "https://us-maven.pkg.dev/cloud-aoss/cloud-aoss-java/ch/qos/logback/logback-core/1.2.11/logback-core-1.2.11.jar", "externalRefs": [ { "referenceCategory": "SECURITY", "referenceLocator": "cpe:2.3:a: :JAVA\\:\\:ch\\.qos\\.logback\\:logback\\-core:1\\.2\\.11: : : : : : : ", "referenceType": "cpe23Type" }, { "referenceCategory": "OTHER", "referenceLocator": " gs://cloud-aoss/java/ch.qos.logback:logback-core/1.2.11/logback-core-1.2.11 binary 2022-10-12T14:19:11Z.zip" , "referenceType": "digestURL" } ], You can use the local signature zip for manual verification or the Cloud Storage URL directly for using the verification script.
- Metadata verification This section explains how you can verify the signature on the Assured OSS metadata accessed using Cloud Storage.
- You can verify signatures using the Assured OSS verifier tool ( aoss-verifier ) or using a verification script.
- This page explains how to verify the signature on the Assured OSS artifacts.

### "Access metadata using the Artifact Analysis API \_|\_ Assured Open Source\

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/access-metadata-using-container-analysis](https://docs.cloud.google.com/assured-open-source-software/docs/access-metadata-using-container-analysis)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample Command python ./ download metadata . py - l 'JAVA' - p 'org.apache.logging.log4j:log4j-core' - v '2.17.1' To verify the signatures in the container analysis metadata, add the following command to the script: python ./ download metadata . py - l 'JAVA' - p 'org.apache.logging.log4j:log4j-core' - v '2.17.1' - s ` Note: Use the package name and version that is available in the Assured OSS repository.
- The package note contains the following: distribution where each distribution corresponds to one artifact being provided by Assured OSS.
- What's next Subscribe to notifications Artifact signature overview Verify signatures Verify the build provenance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security Assured Open Source Software Guides Send feedback Access metadata using the Artifact Analysis API Stay organized with collections Save and categorize content based on your preferences.

