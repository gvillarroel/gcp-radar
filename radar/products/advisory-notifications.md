# Advisory Notifications

Generated at: `2026-05-05T13:13:05.575Z`

Service card: [card.json](../../artifacts/advisory-notifications/card.json)

Artifacts index: [advisory-notifications](../../artifacts/advisory-notifications/index.md)

## Summary

- Promoted features: 2
- Skipped features during promotion: 0
- Latest feature date: 2023-12-04
- Service IAM status: {"explicit":2,"derived_from_permission_prefix":0,"unknown":0}

## Features

| Feature | IAM | Explicit roles | Explicit permissions | Derived roles | Derived permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Mandatory security and privacy notifications for users without an organization](../../artifacts/advisory-notifications/mandatory-security-and-privacy-notifications-for-users-without-an-organization/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get` | none | none | MEDIUM | [source](https://docs.cloud.google.com/advisory-notifications/docs/quickstart)<br>[source](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications)<br>[source](https://docs.cloud.google.com/iam/docs/overview) |
| [Opting in and out of optional advisory notification types](../../artifacts/advisory-notifications/opting-in-and-out-of-optional-advisory-notification-types/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get` | none | none | MEDIUM | [source](https://docs.cloud.google.com/advisory-notifications/docs/quickstart)<br>[source](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications)<br>[source](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications) |
