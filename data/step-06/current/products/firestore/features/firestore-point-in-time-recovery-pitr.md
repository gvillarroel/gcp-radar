---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.879Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore point-in-time recovery (PITR)"
feature_slug: "firestore-point-in-time-recovery-pitr"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/pitr"
  - "https://docs.cloud.google.com/firestore/native/docs/disaster-recovery"
  - "https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp"
keywords:
  - "firestore"
  - "point"
  - "time"
  - "recovery"
  - "pitr"
  - "protects"
  - "against"
  - "accidental"
---

# Firestore point-in-time recovery (PITR)

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore point-in-time recovery protects against accidental deletion or writes and is generally available; Firestore point-in-time recovery protects against accidental deletion or writes and is available in Preview.

## Extended Definition

Firestore point-in-time recovery protects against accidental deletion or writes and is generally available; Firestore point-in-time recovery protects against accidental deletion or writes and is available in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr)
- [https://docs.cloud.google.com/firestore/native/docs/disaster-recovery](https://docs.cloud.google.com/firestore/native/docs/disaster-recovery)
- [https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp](https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp)

## Supporting Pages

### "Point-in-time recovery (PITR) overview \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Point-in-time recovery (PITR) overview Point-in-time recovery (PITR) protects against accidental deletion or writes.
- For example, in the case of a developer pushing any incorrect data, accidental deletes or writes, PITR can recover the data to a point in time in the past (up to a maximum of 7 days).
- You can read data for a timestamp based on when PITR was enabled: PITR enablement status Earliest PITR data available Disabled 1 hour before the time of read request enabled within 7 days 1 hour before PITR was enabled enabled more than 7 days ago 7 days before the time of read request Note: You can't start reading from 7 days in the past immediately after you enable PITR.
- Regardless of whether PITR is enabled or not, you can read (but not export) documents at any microsecond-granularity timestamp within the past hour, but not before the earliestVersionTime .

### "Plan disaster recovery \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/disaster-recovery](https://docs.cloud.google.com/firestore/native/docs/disaster-recovery)
- Source ID: `site-docs-reference-required-4`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disaster recovery planning for data To protect against data disasters like accidental deletion or modification of data, use scheduled backups and point-in-time recovery (PITR).
- Point-in-time recovery (PITR) Enable PITR to read documents from a point in time up to seven days in the past.
- PITR reads also provide a lower recovery time objective and lower recovery point objective than backups.
- Disaster recovery planning for cloud infrastructure outages To protect against potential cloud infrastructure disruptions in Google Cloud such as a zone or region experiencing an outage, Firestore replicates data across multiple replica databases.

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp](https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-required-5`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Nearly all Data Cloud products provide features for data recovery, either through traditional backups, point-in-time recovery (PITR), or data snapshots.
- It also supports Point-in-Time Recovery (PITR).
- BigQuery Data recovery is achieved using "Time Travel," which lets you access and restore data from any point in the last 7 days.
- It also offers PITR to protect against accidental deletions or writes.

