# Certificate issuance backdating

Product: Certificate Authority Service
Feature slug: `certificate-issuance-backdating`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Issuance policies now support a backdate_duration field that sets certificate not_before_time to an earlier time relative to issuance while preserving requested lifetime.

## Lifecycle

- Latest feature date: 2025-06-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))
- auth (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))
- certificate (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))
- constraint (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))
- identity (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))
- key (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))
- policy (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))
- private (evidence: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy), [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection), [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations))

## Official Evidence

- [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations)
- [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection)
- [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy)
