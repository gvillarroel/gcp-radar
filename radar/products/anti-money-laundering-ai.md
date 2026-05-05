# Anti Money Laundering AI

Generated at: `2026-05-05T20:07:59.548Z`

Service card: [card.json](../../artifacts/anti-money-laundering-ai/card.json)

Artifacts index: [anti-money-laundering-ai](../../artifacts/anti-money-laundering-ai/index.md)

## Summary

- Promoted features: 4
- Skipped features during promotion: 0
- Latest feature date: 2024-03-04
- Service IAM status: {"explicit":3,"derived_from_permission_prefix":0,"unknown":1}

## Features

| Feature | IAM | Explicit roles | Explicit permissions | Derived roles | Derived permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [EngineVersion hyperparameter inheritance](../../artifacts/anti-money-laundering-ai/engineversion-hyperparameter-inheritance/README.md) | unknown | none | none | none | none | MEDIUM | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
| [Metadata export from modeling resources](../../artifacts/anti-money-laundering-ai/metadata-export-from-modeling-resources/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
| [Model backtesting and prediction](../../artifacts/anti-money-laundering-ai/model-backtesting-and-prediction/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
| [Model tuning via engineConfig resources](../../artifacts/anti-money-laundering-ai/model-tuning-via-engineconfig-resources/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)<br>[source](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering) |
