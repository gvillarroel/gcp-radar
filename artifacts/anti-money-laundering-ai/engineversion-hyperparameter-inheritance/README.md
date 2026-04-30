# EngineVersion hyperparameter inheritance

Product: Anti Money Laundering AI
Feature slug: `engineversion-hyperparameter-inheritance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Allows new EngineVersions (including v003 and v004) to inherit hyperparameters from an existing EngineVersion configuration, enabling faster setup without additional tuning costs.

## Lifecycle

- Latest feature date: 2024-03-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- token

## Official Evidence

- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
