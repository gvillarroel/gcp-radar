# Cloud Endpoints

Service card: [card.json](../../artifacts/cloud-endpoints/card.json)

Artifacts index: [cloud-endpoints](../../artifacts/cloud-endpoints/index.md)

## Summary

- Promoted features: 2
- Skipped features during promotion: 0
- Latest feature date: 2025-11-12
- Service IAM status: {"explicit":1,"derived_from_permission_prefix":0,"unknown":1}

## Features

| Feature | IAM | Roles | Permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- |
| [Cloud Endpoints OpenAPI 3.0.x support](../../artifacts/cloud-endpoints/cloud-endpoints-openapi-3-0-x-support/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/endpoints/docs/openapi)<br>[source](https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints)<br>[source](https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints) |
| [Cloud Endpoints Portal](../../artifacts/cloud-endpoints/cloud-endpoints-portal/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `accessapproval.requests.approve`<br>`accessapproval.requests.dismiss`<br>`accessapproval.requests.get`<br>`accessapproval.requests.invalidate`<br>`accessapproval.requests.list`<br>`accessapproval.serviceAccounts.get`<br>`accessapproval.settings.delete`<br>`accessapproval.settings.get` | MEDIUM | [source](https://docs.cloud.google.com/endpoints/docs/openapi/control-api-callers)<br>[source](https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
