---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:59:28.165Z"
product_name: "Assured Open Source Software"
product_slug: "assured-open-source-software"
feature_name: "Assured OSS premium tier availability in Security Command Center Enterprise"
feature_slug: "assured-oss-premium-tier-availability-in-security-command-center-enterprise"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages"
  - "https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection"
  - "https://docs.cloud.google.com/assured-open-source-software/docs/overview"
keywords:
  - "availability"
  - "security"
  - "command"
  - "in"
  - "tier"
  - "premium"
  - "assured"
  - "oss"
---

# Assured OSS premium tier availability in Security Command Center Enterprise

Product: Assured Open Source Software
Coverage: LOW

## Step 02 Summary

The Assured OSS premium tier is now available as part of Security Command Center Enterprise.

## Extended Definition

The Assured OSS premium tier is now available as part of Security Command Center Enterprise.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages](https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages)
- [https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection](https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection)
- [https://docs.cloud.google.com/assured-open-source-software/docs/overview](https://docs.cloud.google.com/assured-open-source-software/docs/overview)

## Supporting Pages

### "Verify signatures in the Assured OSS free tier \_|\_ Assured Open Source\

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages](https://docs.cloud.google.com/assured-open-source-software/docs/verify-packages)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Assured Open Source Software Guides Send feedback Verify signatures in the Assured OSS free tier Stay organized with collections Save and categorize content based on your preferences.
- As shown in the following example, you can get the signature zip URL from the externalRefs : referenceLocator field. "packages": [ { "SPDXID": "SPDXRef-Package-logback-core-1.2.11.jar", "checksums": [ { "algorithm": "SHA256", "checksumValue": "c847e0e310acda8bc1347c9d9cc051e91210b9f943e131fceb5034c2f0c9a5d8" } ], "downloadLocation": "https://us-maven.pkg.dev/cloud-aoss/cloud-aoss-java/ch/qos/logback/logback-core/1.2.11/logback-core-1.2.11.jar", "externalRefs": [ { "referenceCategory": "SECURITY", "referenceLocator": "cpe:2.3:a: :JAVA\\:\\:ch\\.qos\\.logback\\:logback\\-core:1\\.2\\.11: : : : : : : ", "referenceType": "cpe23Type" }, { "referenceCategory": "OTHER", "referenceLocator": " gs://cloud-aoss/java/ch.qos.logback:logback-core/1.2.11/logback-core-1.2.11 binary 2022-10-12T14:19:11Z.zip" , "referenceType": "digestURL" } ], You can use the local signature zip for manual verification or the Cloud Storage URL directly for using the verification script.
- To download the certificate, run the following command: curl -o PATH TO LOCAL STORE /ca.crt "https://privateca-content-6333d504-0000-2df7-afd6-30fd38154590.storage.googleapis.com/a2c725a592f1d586f1f8/ca.crt" Replace PATH TO LOCAL STORE with the local path where you want to download the certificate Download the verification script if you have not already done so. gcloud storage cp "gs://cloud-aoss/utils/signature-verification/v1.0/signatureverification.sh" . --recursive chmod +x signatureverification.sh Run the verification script and verify. ./signatureverification.sh --data file path PATH TO DATA FILE --signature url "gs://cloud-aoss/utils/python-requirements-txt/v1.0/generator-sig.zip" --root cert url ROOT CERT URL Replace the following: PATH TO DATA FILE with the local path of the generator.sh script we want to verify as obtained in Step 2.
- To download the certificate, run the following command: curl -o PATH TO LOCAL STORE /ca.crt https://privateca-content-6333d504-0000-2df7-afd6-30fd38154590.storage.googleapis.com/a2c725a592f1d586f1f8/ca.crt Replace PATH TO LOCAL STORE with the local path where you want to download the certificate Download the verification script. gcloud storage cp "gs://cloud-aoss/utils/signature-verification/v1.0/signatureverification.sh" . --recursive chmod +x signatureverification.sh Run the verification script and verify. ./signatureverification.sh --data file path PATH TO DATA FILE --signature url gs://cloud-aoss/utils/python-download-metadata/v1.1/download metadata-sig.zip --root cert url ROOT CERT URL Replace the following: PATH TO DATA FILE with the local path of the download metadata.py script we want to verify as obtained in Step 2.

### "Validate your connection \_|\_ Assured Open Source Software \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection](https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- The following command is a sample curl command to connect to the Assured OSS Python repository on the free tier: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ "https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages" The request returns a response similar to the following sample response: { "pythonPackages" : [ { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/Flask:2.1.2" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/flask/Flask-2.1.2-py3-none-any.whl" , "packageName" : "Flask" , "version" : "2.1.2" , "createTime" : "2022-07-13T11:06:54.163313Z" , "updateTime" : "2022-07-13T11:06:54.163313Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/ujson:5.3.0" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/ujson/ujson-5.3.0-cp38-cp38-linux x86 64.whl" , "packageName" : "ujson" , "version" : "5.3.0" , "createTime" : "2022-07-13T11:06:17.263638Z" , "updateTime" : "2022-07-13T11:06:17.263638Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/ujson:5.4.0" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/ujson/ujson-5.4.0-cp38-cp38-linux x86 64.whl" , "packageName" : "ujson" , "version" : "5.4.0" , "createTime" : "2022-07-13T11:09:00.865162Z" , "updateTime" : "2022-07-13T11:09:00.865162Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/urllib3:1.26.8" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/urllib3/urllib3-1.26.8-py2.py3-none-any.whl" , "packageName" : "urllib3" , "version" : "1.26.8" , "createTime" : "2022-07-13T11:05:56.529484Z" , "updateTime" : "2022-07-13T11:05:56.529484Z" } ] } If there are many available packages, the API response may be paginated.
- The following is a sample curl command to connect to the Go repository on the free tier: curl -X GET -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages The request returns a response similar to the following: { "packages": [ { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fauth", "createTime": "2025-08-05T06:04:54.442071Z", "updateTime": "2025-08-05T06:04:54.442071Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fauth%2Foauth2adapt", "createTime": "2025-08-05T06:04:41.242052Z", "updateTime": "2025-08-05T06:04:41.242052Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fcompute%2Fmetadata", "createTime": "2025-08-05T06:05:31.140186Z", "updateTime": "2025-08-05T06:05:31.140186Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fiam", "createTime": "2025-08-05T06:04:54.455300Z", "updateTime": "2025-08-05T06:04:54.455300Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Flogging", "createTime": "2025-08-05T06:05:36.186851Z", "updateTime": "2025-08-05T06:05:36.186851Z" } ] } If many packages are available, the API response might be paginated.
- For the free tier of Assured OSS, enter the following HTTP request: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ "https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/cloud-aoss-java/mavenArtifacts" For the premium tier of Assured OSS, enter the following HTTP request: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ https://artifactregistry.googleapis.com/v1/projects/ PROJECT ID /locations/us/repositories/assuredoss-java/packages Replace PROJECT ID with the ID of the project that you selected when you set up Assured OSS.
- For the free tier of Assured OSS, enter the following HTTP request: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ "https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages" For the premium tier of Assured OSS, enter the following HTTP request: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ https://artifactregistry.googleapis.com/v1/projects/ PROJECT ID /locations/us/repositories/assuredoss-go/packages Replace PROJECT ID with the ID of the project that you selected when you set up Assured OSS.

### Overview of Assured Open Source Software \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/overview](https://docs.cloud.google.com/assured-open-source-software/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Premium tier lets you integrate Assured OSS with Security Command Center Enterprise .
- To integrate with Security Command Center Enterprise, see Integrate with Assured OSS for code security .
- Assured Open Source Software (Assured OSS) lets you take advantage of the security and experience that Google applies to open source software (OSS) by incorporating the same OSS packages that Google secures and uses into your own developer workflows.
- You can also use an Assured OSS type repository, which is a wrapper over a virtual repository that has access to both Free tier and Premium tier packages.

