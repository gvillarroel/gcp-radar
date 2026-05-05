# FHIR conditional create operation using identifier search parameter

Product: Cloud Healthcare API
Feature slug: `fhir-conditional-create-operation-using-identifier-search-parameter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The fhir.create conditional operation is generally available using the FHIR identifier search parameter.

## Lifecycle

- Latest feature date: 2023-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- audit (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- credential (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- iam (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- permission (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- policy (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))
- security (evidence: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources), [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)
- [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/Binary-create)
- [https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create](https://docs.cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.fhirStores.fhir/create)
