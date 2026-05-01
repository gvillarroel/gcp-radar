# Anti Money Laundering AI

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:34.903Z`
Product status: `PASS`

## Summary

- Feature cards: 4
- Step 07 failed features: 0
- Step 07 warned features: 2
- Corpus health: healthy
- IAM mapping: 3 explicit, 0 derived, 1 unknown

## Service Card

- Service card ID: `anti-money-laundering-ai:service`
- Latest feature date: 2024-03-04
- Official source links: 7
- Security capabilities: 11

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| EngineVersion hyperparameter inheritance | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
| Metadata export from modeling resources | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
| Model backtesting and prediction | MEDIUM | WARN | explicit | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
| Model tuning via engineConfig resources | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
