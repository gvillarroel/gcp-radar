---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.126Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Instant snapshots for Extreme Persistent Disk"
feature_slug: "instant-snapshots-for-extreme-persistent-disk"
latest_feature_date: "2025-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
keywords:
  - "instant"
  - "snapshots"
  - "extreme"
  - "persistent"
  - "disk"
  - "can"
  - "used"
  - "back"
---

# Instant snapshots for Extreme Persistent Disk

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Instant snapshots can be used to back up Extreme Persistent Disk volumes.

## Extended Definition

Instant snapshots can be used to back up Extreme Persistent Disk volumes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)

## Supporting Pages

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- Zonal standard Persistent Disk Zonal balanced Persistent Disk Zonal SSD Persistent Disk Zonal extreme Persistent Disk Regional standard Persistent Disk Regional balanced Persistent Disk Regional SSD Persistent Disk Better than 99.99% Better than 99.999% Better than 99.999% Better than 99.9999% Better than 99.999% Better than 99.9999% Better than 99.9999% Machine series support A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Select a machine series to see its supported Persistent Disk (PD) types.
- Machine series SSD PD Balanced PD Extreme PD Standard PD A2 — A3 (H100) — — A3 (H200) — — — — A4 — — — — A4X — — — — A4X Max — — — — C2 — C2D — C3 — — C3D — — C4 — — — — C4A — — — — C4D — — — — E2 — G2 — — G4 — — — — H3 — — — H4D — — — — M1 M2 M3 — M4 — — — — N1 — N1+GPU — N2 N2D — N4 — — — — N4A — — — — N4D — — — — T2A — T2D — TPU v2 — — — TPU v3 — — — TPU v4 — — — TPU v5e — — — TPU v5p — — — TPU v6e — — — — TPU7x — — — — X4 — — — — Z3 — — Maximum capacity Persistent Disk volumes can be up to 64 TiB in size.
- For information about machine type support, refer to the following: Zonal Persistent Disk Regional Persistent Disk Durability of Persistent Disk Disk durability represents the probability of data loss, by design, for a typical disk in a typical year, using a set of assumptions about hardware failures, the likelihood of catastrophic events, isolation practices and engineering processes in Google data centers, and the internal encodings used by each disk type.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- Zonal standard Persistent Disk Zonal balanced Persistent Disk Zonal SSD Persistent Disk Zonal extreme Persistent Disk Regional standard Persistent Disk Regional balanced Persistent Disk Regional SSD Persistent Disk Better than 99.99% Better than 99.999% Better than 99.999% Better than 99.9999% Better than 99.999% Better than 99.9999% Better than 99.9999% Machine series support A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Select a machine series to see its supported Persistent Disk (PD) types.
- Machine series SSD PD Balanced PD Extreme PD Standard PD A2 — A3 (H100) — — A3 (H200) — — — — A4 — — — — A4X — — — — A4X Max — — — — C2 — C2D — C3 — — C3D — — C4 — — — — C4A — — — — C4D — — — — E2 — G2 — — G4 — — — — H3 — — — H4D — — — — M1 M2 M3 — M4 — — — — N1 — N1+GPU — N2 N2D — N4 — — — — N4A — — — — N4D — — — — T2A — T2D — TPU v2 — — — TPU v3 — — — TPU v4 — — — TPU v5e — — — TPU v5p — — — TPU v6e — — — — TPU7x — — — — X4 — — — — Z3 — — Maximum capacity Persistent Disk volumes can be up to 64 TiB in size.
- For information about machine type support, refer to the following: Zonal Persistent Disk Regional Persistent Disk Durability of Persistent Disk Disk durability represents the probability of data loss, by design, for a typical disk in a typical year, using a set of assumptions about hardware failures, the likelihood of catastrophic events, isolation practices and engineering processes in Google data centers, and the internal encodings used by each disk type.

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
- For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
- Home Documentation Developer tools Python Client libraries Send feedback Class DisksClient (1.41.0) Stay organized with collections Save and categorize content based on your preferences.
- This corresponds to the zone field on the request instance; if request is provided, this should not be set. disk str Name of the persistent disk to snapshot.

