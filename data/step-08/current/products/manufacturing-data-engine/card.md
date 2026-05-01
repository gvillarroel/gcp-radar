# Manufacturing Data Engine

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T09:08:39.577Z`
Product status: `PASS`

## Summary

- Feature cards: 18
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 18 unknown

## Service Card

- Service card ID: `manufacturing-data-engine:service`
- Latest feature date: 2025-03-31
- Official source links: 23
- Security capabilities: 17

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Configuration Packages | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode) |
| Development Mode | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data) |
| MDE UI message class matching | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/content)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/ingest/how-to-create-a-source-message-class) |
| BigQuery datasets | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview) |
| BigQuery schema extensions | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version) |
| Clustered archetype family | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type) |
| Configuration data export | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib) |
| Deployment size options | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/upgrade-guide) |
| Lookup buckets | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket) |
| MDE LookML library | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib) |
| Message format support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/ingest/how-to-create-a-source-message-class) |
| Metadata natural keys | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket) |
| Pub/Sub sink | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/content) |
| Redis shared cache | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api) |
| Standalone Manufacturing Data Engine UI | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/upgrade-guide) |
| Type versioning | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version) |
| Type-metadata bucket associations | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket-version)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-new-type-version) |
| Whistle natural-key lookup functions | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance)<br>[source](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-metadata-bucket) |
