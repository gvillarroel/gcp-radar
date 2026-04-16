---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:42:06.148Z"
product_name: "Assured Open Source Software"
product_slug: "assured-open-source-software"
feature_name: "Assured OSS premium tier availability in Security Command Center Enterprise"
feature_slug: "assured-oss-premium-tier-availability-in-security-command-center-enterprise"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-open-source-software/docs/overview"
  - "https://docs.cloud.google.com/assured-open-source-software/docs/service-account-creation"
  - "https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection"
keywords:
  - "availability"
  - "security"
  - "command"
  - "center"
  - "tier"
  - "premium"
---

# Assured OSS premium tier availability in Security Command Center Enterprise

Product: Assured Open Source Software
Coverage: MEDIUM

## Step 02 Summary

The Assured OSS premium tier is now available as part of Security Command Center Enterprise.

## Extended Definition

The Assured OSS premium tier is now available as part of Security Command Center Enterprise.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-open-source-software/docs/overview](https://docs.cloud.google.com/assured-open-source-software/docs/overview)
- [https://docs.cloud.google.com/assured-open-source-software/docs/service-account-creation](https://docs.cloud.google.com/assured-open-source-software/docs/service-account-creation)
- [https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection](https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection)

## Supporting Pages

### Overview of Assured Open Source Software \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/overview](https://docs.cloud.google.com/assured-open-source-software/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Premium tier lets you integrate Assured OSS with Security Command Center Enterprise .
- The Premium tier is available when you purchase Security Command Center Enterprise.
- For more information about Security Command Center Enterprise pricing, see Pricing for the Enterprise tier .
- To integrate with Security Command Center Enterprise, see Integrate with Assured OSS for code security .

### Enable the Assured Open Source Software free tier \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/service-account-creation](https://docs.cloud.google.com/assured-open-source-software/docs/service-account-creation)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- To use the Assured OSS premium tier with Security Command Center, see Integrate Assured OSS with Security Command Center .
- Home Documentation Security Assured Open Source Software Guides Send feedback Enable the Assured Open Source Software free tier Stay organized with collections Save and categorize content based on your preferences.
- The Assured OSS system grants the required permissions to access and download software packages and security metadata to the service accounts.
- Before you begin To use the free tier of Assured Open Source Software (Assured OSS), you must submit the customer enablement form .

### "Validate your connection \_|\_ Assured Open Source Software \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection](https://docs.cloud.google.com/assured-open-source-software/docs/validate-connection)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following command is a sample curl command to connect to the Assured OSS Python repository on the free tier: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ "https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages" The request returns a response similar to the following sample response: { "pythonPackages" : [ { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/Flask:2.1.2" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/flask/Flask-2.1.2-py3-none-any.whl" , "packageName" : "Flask" , "version" : "2.1.2" , "createTime" : "2022-07-13T11:06:54.163313Z" , "updateTime" : "2022-07-13T11:06:54.163313Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/ujson:5.3.0" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/ujson/ujson-5.3.0-cp38-cp38-linux x86 64.whl" , "packageName" : "ujson" , "version" : "5.3.0" , "createTime" : "2022-07-13T11:06:17.263638Z" , "updateTime" : "2022-07-13T11:06:17.263638Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/ujson:5.4.0" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/ujson/ujson-5.4.0-cp38-cp38-linux x86 64.whl" , "packageName" : "ujson" , "version" : "5.4.0" , "createTime" : "2022-07-13T11:09:00.865162Z" , "updateTime" : "2022-07-13T11:09:00.865162Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-python/pythonPackages/urllib3:1.26.8" , "uri" : "us-python.pkg.dev/cloud-aoss/cloud-aoss-python/urllib3/urllib3-1.26.8-py2.py3-none-any.whl" , "packageName" : "urllib3" , "version" : "1.26.8" , "createTime" : "2022-07-13T11:05:56.529484Z" , "updateTime" : "2022-07-13T11:05:56.529484Z" } ] } If there are many available packages, the API response may be paginated.
- The following is a sample curl command to connect to the Java repository on the free tier: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ "https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/cloud-aoss-java/mavenArtifacts" The request returns a response similar to the following sample response: { "mavenArtifacts" : [ { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-java/mavenArtifacts/com.alibaba:fastjson:1.2.83" , "pomUri" : "us-maven.pkg.dev/cloud-aoss/cloud-aoss-java/com/alibaba/fastjson/1.2.83/fastjson-1.2.83.pom" , "groupId" : "com.alibaba" , "artifactId" : "fastjson" , "version" : "1.2.83" , "createTime" : "2022-06-24T09:10:05.166879Z" , "updateTime" : "2022-06-24T09:10:05.166879Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-java/mavenArtifacts/org.apache.logging.log4j:log4j-api:2.17.1" , "pomUri" : "us-maven.pkg.dev/cloud-aoss/cloud-aoss-java/org/apache/logging/log4j/log4j-api/2.17.1/log4j-api-2.17.1.pom" , "groupId" : "org.apache.logging.log4j" , "artifactId" : "log4j-api" , "version" : "2.17.1" , "createTime" : "2022-03-16T12:22:50.113695Z" , "updateTime" : "2022-03-16T12:22:50.113695Z" }, { "name" : "projects/cloud-aoss/locations/us/repositories/cloud-aoss-java/mavenArtifacts/org.apache.logging.log4j:log4j-core:2.17.1" , "pomUri" : "us-maven.pkg.dev/cloud-aoss/cloud-aoss-java/org/apache/logging/log4j/log4j-core/2.17.1/log4j-core-2.17.1.pom" , "groupId" : "org.apache.logging.log4j" , "artifactId" : "log4j-core" , "version" : "2.17.1" , "createTime" : "2022-03-16T12:26:40.317215Z" , "updateTime" : "2022-03-16T12:26:40.317215Z" } ] } If there are many available packages, the API response may be paginated.
- The following is a sample curl command to connect to the Go repository on the free tier: curl -X GET -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages The request returns a response similar to the following: { "packages": [ { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fauth", "createTime": "2025-08-05T06:04:54.442071Z", "updateTime": "2025-08-05T06:04:54.442071Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fauth%2Foauth2adapt", "createTime": "2025-08-05T06:04:41.242052Z", "updateTime": "2025-08-05T06:04:41.242052Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fcompute%2Fmetadata", "createTime": "2025-08-05T06:05:31.140186Z", "updateTime": "2025-08-05T06:05:31.140186Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Fiam", "createTime": "2025-08-05T06:04:54.455300Z", "updateTime": "2025-08-05T06:04:54.455300Z" }, { "name": "projects/cloud-aoss/locations/us/repositories/assuredoss-go-free/packages/cloud.google.com%2Fgo%2Flogging", "createTime": "2025-08-05T06:05:36.186851Z", "updateTime": "2025-08-05T06:05:36.186851Z" } ] } If many packages are available, the API response might be paginated.
- For the free tier of Assured OSS, enter the following HTTP request: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ "https://artifactregistry.googleapis.com/v1/projects/cloud-aoss/locations/us/repositories/cloud-aoss-java/mavenArtifacts" For the premium tier of Assured OSS, enter the following HTTP request: curl -X GET -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ https://artifactregistry.googleapis.com/v1/projects/ PROJECT ID /locations/us/repositories/assuredoss-java/packages Replace PROJECT ID with the ID of the project that you selected when you set up Assured OSS.

