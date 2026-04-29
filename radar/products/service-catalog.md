# Service Catalog

Service card: [card.json](../../artifacts/service-catalog/card.json)

Artifacts index: [service-catalog](../../artifacts/service-catalog/index.md)

## Summary

- Promoted features: 7
- Skipped features during promotion: 0
- Latest feature date: 2021-07-19
- Service IAM status: {"explicit":2,"derived_from_permission_prefix":0,"unknown":5}

## Features

| Feature | IAM | Roles | Permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- |
| [Private Catalog bulk solution editing](../../artifacts/service-catalog/private-catalog-bulk-solution-editing/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/create-share-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/quickstart) |
| [Private Catalog catalog sharing](../../artifacts/service-catalog/private-catalog-catalog-sharing/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/form-schema-overview)<br>[source](https://docs.cloud.google.com/service-catalog/docs/share-catalog) |
| [Private Catalog Cloud Console access control management](../../artifacts/service-catalog/private-catalog-cloud-console-access-control-management/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/service-catalog/docs/access-control)<br>[source](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/share-catalog) |
| [Private Catalog distribution controls](../../artifacts/service-catalog/private-catalog-distribution-controls/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | MEDIUM | [source](https://docs.cloud.google.com/service-catalog/docs/access-control)<br>[source](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/overview) |
| [Private Catalog internal compliance controls](../../artifacts/service-catalog/private-catalog-internal-compliance-controls/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | MEDIUM | [source](https://docs.cloud.google.com/service-catalog/docs/access-control)<br>[source](https://docs.cloud.google.com/service-catalog/docs/create-catalog)<br>[source](https://docs.cloud.google.com/service-catalog/docs/overview) |
| [Private Catalog solution discoverability](../../artifacts/service-catalog/private-catalog-solution-discoverability/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/create-share-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/manage-solutions) |
| [Private Catalog Terraform support](../../artifacts/service-catalog/private-catalog-terraform-support/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/service-catalog/docs/dm-based-solution)<br>[source](https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions)<br>[source](https://docs.cloud.google.com/service-catalog/docs/terraform-configuration) |
