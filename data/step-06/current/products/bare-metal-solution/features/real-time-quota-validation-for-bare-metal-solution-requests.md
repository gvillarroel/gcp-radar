---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.439Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Real-time quota validation for Bare Metal Solution requests"
feature_slug: "real-time-quota-validation-for-bare-metal-solution-requests"
latest_feature_date: "2022-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide"
  - "https://docs.cloud.google.com/iam/docs/retry-strategy"
  - "https://docs.cloud.google.com/sap/docs/sap-ibm-db2-deployment-guide-tf"
keywords:
  - "validation"
  - "quota"
  - "real"
  - "requests"
  - "time"
---

# Real-time quota validation for Bare Metal Solution requests

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds real-time quota checks to prevent over-provisioning in the request flow.

## Extended Definition

Adds real-time quota checks to prevent over-provisioning in the request flow.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide)
- [https://docs.cloud.google.com/iam/docs/retry-strategy](https://docs.cloud.google.com/iam/docs/retry-strategy)
- [https://docs.cloud.google.com/sap/docs/sap-ibm-db2-deployment-guide-tf](https://docs.cloud.google.com/sap/docs/sap-ibm-db2-deployment-guide-tf)

## Supporting Pages

### SAP HANA planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- For details about how to deploy SAP HANA on Google Cloud, see: For single-host scale-up and multi-host scale-out deployments, see: Terraform: SAP HANA scale-up deployment guide For scale-out system with host auto-failover deployments, see: Terraform: SAP HANA scale-out system with host auto-failover deployment guide For scale-up high-availability cluster configurations, see: Terraform: SAP HANA scale-up high-availability cluster configuration guide Manual HA scale-up cluster configuration on RHEL Manual HA scale-up cluster configuration on SLES For scale-out high-availability cluster configurations, see: Terraform: SAP HANA scale-out high-availability cluster configuration guide Manual HA scale-out cluster configuration on SLES About SAP HANA on Google Cloud SAP HANA is an in-memory, column-oriented, relational database that provides high-performance analytics and real-time data processing.
- Balanced Persistent Disk Compute Engine machine type vCPU Memory (GB) Quota (GB) n1-highmem-32 32 208 943 n1-highmem-64 64 416 1,155 n1-highmem-96 96 624 1,716 n2-highmem-32 32 256 943 n2-highmem-48 48 384 1,068 n2-highmem-64 64 512 1,414 n2-highmem-80 80 640 1,760 n2-highmem-96 96 768 2,105 n2-highmem-128 128 864 2,364 c3-standard-44 44 176 507 c3-highmem-44 44 352 982 c3-highmem-88 88 704 1,932 c3-highmem-176 176 1,408 3,257 m1-megamem-96 96 1,433 3,287 m1-ultramem-40 40 961 2,626 m1-ultramem-80 80 1,922 3,874 m1-ultramem-160 160 3,844 6,180 m2-megamem-416 416 5,888 8,633 m2-ultramem-208 208 5,888 8,633 m2-ultramem-416 416 11,766 15,660 m2-hypermem-416 416 8,832 12,166 m3-ultramem-32 32 976 2,667 m3-ultramem-64 64 1,952 3,910 m3-ultramem-128 128 3,904 6,252 m3-megamem-64 64 976 2,667 m3-megamem-128 128 1,952 3,910 SSD Persistent Disk Compute Engine machine type vCPU Memory (GB) Quota (GB) n1-highmem-32 32 208 593 n1-highmem-64 64 416 1,155 n1-highmem-96 96 624 1,716 n2-highmem-32 32 256 723 n2-highmem-48 48 384 1,068 n2-highmem-64 64 512 1,414 n2-highmem-80 80 640 1,760 n2-highmem-96 96 768 2,105 n2-highmem-128 128 864 2,364 c3-standard-44 44 176 507 c3-highmem-44 44 352 982 c3-highmem-88 88 704 1,932 c3-highmem-176 176 1,408 3,257 m1-megamem-96 96 1,433 3,287 m1-ultramem-40 40 961 2,626 m1-ultramem-80 80 1,922 3,874 m1-ultramem-160 160 3,844 6,180 m2-megamem-416 416 5,888 8,633 m2-ultramem-208 208 5,888 8,633 m2-ultramem-416 416 11,766 15,660 m2-hypermem-416 416 8,832 12,166 m3-ultramem-32 32 976 2,667 m3-ultramem-64 64 1,952 3,910 m3-ultramem-128 128 3,904 6,252 m3-megamem-64 64 976 2,667 m3-megamem-128 128 1,952 3,910 Hyperdisk Extreme Compute Engine machine type vCPU Memory (GB) Quota (GB) n2-highmem-80 80 640 1,760 n2-highmem-96 96 768 2,105 n2-highmem-128 128 864 2,364 c3-highmem-88 88 704 1,932 c3-highmem-176 176 1,408 3,257 c3-highmem-192-metal 192 1,536 3,411 c4-highmem-96 96 744 2,040 c4-highmem-144 144 1,116 2,907 c4-highmem-192 192 1,488 3,353 c4-highmem-288 288 2,232 4,246 c4-highmem-288-metal 288 2,232 4,246 m1-megamem-96 96 1,433 3,287 m1-ultramem-80 80 1,922 3,874 m1-ultramem-160 160 3,844 6,180 m2-megamem-416 416 5,888 8,633 m2-ultramem-208 208 5,888 8,633 m2-ultramem-416 416 11,766 15,660 m2-hypermem-416 416 8,832 12,166 m3-ultramem-64 64 1,952 3,910 m3-ultramem-128 128 3,904 6,252 m3-megamem-64 64 976 2,667 m3-megamem-128 128 1,952 3,910 m4-megamem-112 112 1,488 3,353 m4-megamem-224 224 2,976 5,139 m4-ultramem-112 112 2,976 5,139 m4-ultramem-224 224 5,952 8,710 Note : From December 12, 2025, the naming convention for X4 machine types has changed to clarify the memory they offer.
- While this naming change is backwards compatible, we recommend that you use the updated names for new deployments. x4-480-6t-metal 480 6,144 7,712 x4-480-8t-metal 480 8,192 9,760 x4-960-12t-metal 960 12,288 13,856 x4-960-16t-metal 960 16,384 17,952 x4-1440-24t-metal 1,440 24,576 26,144 x4-1920-32t-metal 1,920 32,768 34,336 Hyperdisk Balanced Compute Engine machine type vCPU Memory (GB) Quota (GB) c3-standard-44 44 176 507 c3-highmem-44 44 352 982 c3-highmem-88 88 704 1,932 c3-highmem-176 176 1,408 3,257 c3-highmem-192-metal 192 1,536 3,411 c4-highmem-32 32 248 701 c4-highmem-48 48 372 1,036 c4-highmem-96 96 744 2,040 c4-highmem-144 144 1,116 2,907 c4-highmem-192 192 1,488 3,353 c4-highmem-288 288 2,232 4,246 c4-highmem-288-metal 288 2,232 4,246 m1-megamem-96 96 1,433 3,287 m1-ultramem-40 40 961 2,626 m1-ultramem-80 80 1,922 3,874 m1-ultramem-160 160 3,844 6,180 m2-megamem-416 416 5,888 8,633 m2-ultramem-208 208 5,888 8,633 m2-ultramem-416 416 11,766 15,660 m2-hypermem-416 416 8,832 12,166 m3-ultramem-32 32 976 2,667 m3-ultramem-64 64 1,952 3,910 m3-ultramem-128 128 3,904 6,252 m3-megamem-64 64 976 2,667 m3-megamem-128 128 1,952 3,910 m4-megamem-28 28 372 1,036 m4-megamem-56 56 744 892 m4-megamem-112 112 1,488 3,353 m4-megamem-224 224 2,976 5,139 m4-ultramem-56 56 2,976 3,353 m4-ultramem-112 112 2,976 5,139 m4-ultramem-224 224 5,952 8,710 m4-hypermem-16 16 248 701 m4-hypermem-32 32 496 1,371 m4-hypermem-64 64 992 2,710 Note : From December 12, 2025, the naming convention for X4 machine types has changed to clarify the memory they offer.
- While this naming change is backwards compatible, we recommend that you use the updated names for new deployments. x4-480-6t-metal 480 6,144 7,712 x4-480-8t-metal 480 8,192 9,760 x4-960-12t-metal 960 12,288 13,856 x4-960-16t-metal 960 16,384 17,952 x4-1440-24t-metal 1,440 24,576 26,144 x4-1920-32t-metal 1,920 32,768 34,336 Standard Persistent Disk Compute Engine machine type vCPU Memory (GB) Quota (GB) n1-highmem-32 32 208 448 n1-highmem-64 64 416 864 n1-highmem-96 96 624 1,280 n2-highmem-32 32 256 544 n2-highmem-48 48 384 800 n2-highmem-64 64 512 1,056 n2-highmem-80 80 640 1,312 n2-highmem-96 96 768 1,568 n2-highmem-128 128 864 1,760 m1-megamem-96 96 1,433 2,898 m1-ultramem-40 40 961 1,954 m1-ultramem-80 80 1,922 3,876 m1-ultramem-160 160 3,844 7,720 m2-megamem-416 416 5,888 11,832 m2-ultramem-208 208 5,888 11,832 m2-ultramem-416 416 11,766 23,564 m2-hypermem-416 416 8,832 17,696 Licensing Running SAP HANA on Google Cloud requires you to bring your own license (BYOL).

### "Retry failed requests \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/retry-strategy](https://docs.cloud.google.com/iam/docs/retry-strategy)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your application retries failed requests without waiting, it might send a large number of retries to IAM in a short period of time.
- Use the following values as you implement the algorithm: Before each retry, the wait time is min((2 n + random-fraction), maximum-backoff) , with n starting at 0 and incremented by 1 for each retry.
- For example, in a continuous integration/continuous deployment (CI/CD) pipeline that is not highly time-sensitive, you might set deadline to 300 seconds (5 minutes).
- Home Documentation Security IAM Reference Send feedback Retry failed requests Stay organized with collections Save and categorize content based on your preferences.

### "Automated VM deployment for IBM Db2 on Linux for SAP \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/sap-ibm-db2-deployment-guide-tf](https://docs.cloud.google.com/sap/docs/sap-ibm-db2-deployment-guide-tf)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need all of your deployments to use the same module version, then remove the leading # character from the source argument that specifies the version timestamp and add it to the source argument that specifies latest . project id String Specify the ID of your Google Cloud project in which you are deploying this system.
- If you see a quota error: On the IAM & Admin Quotas page, increase any of your quotas that do not meet the IBM Db2 requirements that are listed in the Open Cloud Shell.
- In the sap db2.tf file, update the following argument values by replacing the content inside the double quotation marks with the values for your installation.
- The second instance of the source argument, which by default is deactivated by a leading character, specifies a timestamp that identifies a module version.

