# Service Health

Service card: [card.json](../../artifacts/service-health/card.json)

Artifacts index: [service-health](../../artifacts/service-health/index.md)

## Summary

- Promoted features: 3
- Skipped features during promotion: 0
- Latest feature date: 2025-04-08
- Service IAM status: {"explicit":2,"derived_from_permission_prefix":0,"unknown":1}

## Features

| Feature | IAM | Roles | Permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- |
| [App Hub incident visibility in Cloud Hub](../../artifacts/service-health/app-hub-incident-visibility-in-cloud-hub/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `accessapproval.requests.approve`<br>`accessapproval.requests.dismiss`<br>`accessapproval.requests.get`<br>`accessapproval.requests.invalidate`<br>`accessapproval.requests.list`<br>`accessapproval.serviceAccounts.get`<br>`accessapproval.settings.delete`<br>`accessapproval.settings.get` | MEDIUM | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/service-health/docs/overview)<br>[source](https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1) |
| [Gemini Cloud Assist incident intelligence](../../artifacts/service-health/gemini-cloud-assist-incident-intelligence/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `accessapproval.requests.approve`<br>`accessapproval.requests.dismiss`<br>`accessapproval.requests.get`<br>`accessapproval.requests.invalidate`<br>`accessapproval.requests.list`<br>`accessapproval.serviceAccounts.get`<br>`accessapproval.settings.delete`<br>`accessapproval.settings.get` | MEDIUM | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| [Personalized Service Health in Google Cloud mobile app](../../artifacts/service-health/personalized-service-health-in-google-cloud-mobile-app/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/service-health/docs/overview)<br>[source](https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1)<br>[source](https://docs.cloud.google.com/service-health/docs/reference/libraries) |
