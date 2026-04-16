---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T21:21:32.036Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner API general availability"
feature_slug: "cloud-spanner-api-general-availability"
latest_feature_date: "2017-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/api-libraries-overview"
keywords:
  - "reached"
  - "availability"
---

# Cloud Spanner API general availability

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Cloud Spanner API reached general availability.

## Extended Definition

The Cloud Spanner API reached general availability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/api-libraries-overview](https://docs.cloud.google.com/spanner/docs/api-libraries-overview)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Spanner has configurations offering either 99.99% ("four nines") or 99.999% ("five nines") of availability , with "five nines" corresponding to less than five and a half minutes of unavailability in a year.
- Additionally, the high availability and data resiliency for which games often cluster their databases are handled transparently by Spanner, requiring no additional setup or management.
- Although auth DBs for games often don't require the scale of Spanner, the transactional guarantees and high data availability can make it compelling.
- This type of availability makes it a good choice for the critical authentication path required at the beginning of every player session.

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Spanner offers the following features to help ensure high data availability: Multi-regional configurations : Spanner can maintain replicas of your data in separate zones within a single region or multiple regions to ensure data availability even if a zone or region fails.
- Optimize costs for your disaster recovery strategy You can optimize Spanner disaster recovery costs in the following ways: Multi-region configurations : Use multi-region configurations only for applications that require 99.999% availability.
- Regional failure : If your application requires even higher data availability and protection against regional failures, use multi-region configurations that offer 99.999% availability.

### "Overview of APIs, client libraries, and ORM drivers \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/api-libraries-overview](https://docs.cloud.google.com/spanner/docs/api-libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

