# Application Design Center

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T13:10:53.840Z`
Product status: `PASS`

## Summary

- Feature cards: 24
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 6 explicit, 0 derived, 18 unknown

## Service Card

- Service card ID: `application-design-center:service`
- Latest feature date: 2025-12-05
- Official source links: 25
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Firestore component support | LOW | PASS | explicit | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter) |
| GKE Autopilot Cluster component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview) |
| GKE Node Pool component support | LOW | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| GKE Standard Cluster component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ComponentParameterSchema)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Single project boundary setup | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/setup)<br>[source](https://docs.cloud.google.com/iam/docs/overview)<br>[source](https://docs.cloud.google.com/iam/docs/principal-identifiers) |
| Terraform code export to repository | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter) |
| Terraform module import for components | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)<br>[source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview) |
| Edit generated Terraform code | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)<br>[source](https://docs.cloud.google.com/application-design-center/docs/manage-applications)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter) |
| Cloud Run Jobs component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/reference/rpc) |
| AlloyDB component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)<br>[source](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters) |
| BigQuery component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template) |
| Bigtable component support | LOW | PASS | explicit | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter) |
| Cloud Load Balancing component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/quotas)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Cloud Run component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)<br>[source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview) |
| Cloud SQL (MySQL/PostgreSQL) component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/IACFormat)<br>[source](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)<br>[source](https://docs.cloud.google.com/iam/docs/full-resource-names) |
| Cloud Storage component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template) |
| Compute Engine instance template component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs)<br>[source](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)<br>[source](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template) |
| Compute Engine managed instance group component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/overview)<br>[source](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)<br>[source](https://docs.cloud.google.com/iam/docs/roles-overview) |
| Memorystore for Redis component support | LOW | PASS | explicit | [source](https://docs.cloud.google.com/application-design-center/docs/quickstart-update-template)<br>[source](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/IACFormat)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Pub/Sub component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)<br>[source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview) |
| Secret Manager component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Service account component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/deploy-applications)<br>[source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview) |
| Spanner component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ComponentParameterSchema) |
| Vertex AI component support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/application-design-center/docs/import-components)<br>[source](https://docs.cloud.google.com/application-design-center/docs/overview)<br>[source](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ComponentParameterSchema) |
