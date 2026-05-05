# Healthcare Natural Language API PHI entity mention support

Product: Cloud Healthcare API
Feature slug: `healthcare-natural-language-api-phi-entity-mention-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Healthcare Natural Language API adds support for recognizing Protected Health Information (PHI) entity mentions in text.

## Lifecycle

- Latest feature date: 2024-03-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- credential (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- iam (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- identity (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- permission (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- policy (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- private (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- role (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- security (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp), [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control)
- [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)
