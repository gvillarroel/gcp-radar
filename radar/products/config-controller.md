# Config Controller

Generated at: `2026-05-05T20:07:59.548Z`

Service card: [card.json](../../artifacts/config-controller/card.json)

Artifacts index: [config-controller](../../artifacts/config-controller/index.md)

## Summary

- Promoted features: 6
- Skipped features during promotion: 0
- Latest feature date: 2024-06-25
- Service IAM status: {"explicit":6,"derived_from_permission_prefix":0,"unknown":0}

## Features

| Feature | IAM | Explicit roles | Explicit permissions | Derived roles | Derived permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [ConfigConnectorAlphaResources](../../artifacts/config-controller/configconnectoralpharesources/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/iam)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions) |
| [Create command identity output](../../artifacts/config-controller/create-command-identity-output/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup) |
| [Get Config Connector identity command](../../artifacts/config-controller/get-config-connector-identity-command/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup) |
| [Landing zone blueprint deployment](../../artifacts/config-controller/landing-zone-blueprint-deployment/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions) |
| [Private endpoint creation flag](../../artifacts/config-controller/private-endpoint-creation-flag/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup) |
| [Regional availability](../../artifacts/config-controller/regional-availability/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)<br>[source](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability) |
