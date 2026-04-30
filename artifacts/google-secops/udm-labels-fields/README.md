# UDM labels fields

Product: Google SecOps
Feature slug: `udm-labels-fields`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The labels fields for several UDM nouns are deprecated in search results and should be replaced with key and value additional.fields mappings; deprecated on 2024-11-29.

## Lifecycle

- Latest feature date: 2024-04-15
- Deprecation date: 2024-11-29
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- auth
- authorization
- certificate
- constraint
- encrypt
- firewall
- iam
- key
- logging
- permission
- policy
- private
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/gcp-firewall](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/gcp-firewall)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/osquery-edr](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/osquery-edr)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
