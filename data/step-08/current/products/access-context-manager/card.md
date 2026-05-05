# Access Context Manager

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T13:10:52.169Z`
Product status: `PASS`

## Summary

- Feature cards: 23
- Step 07 failed features: 0
- Step 07 warned features: 3
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 23 unknown

## Service Card

- Service card ID: `access-context-manager:service`
- Latest feature date: 2025-03-21
- Official source links: 20
- Security capabilities: 21

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Access Context Manager custom organization policies | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Context-aware app allowlist access bindings | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/configure_cba_for_workloads)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Internal IP ranges in basic access levels | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/overview) |
| Individual VPC network membership in VPC Service Controls perimeters | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/overview)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Ingress rules for individual VPC networks | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/overview)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Scoped policies for VPC Service Controls administration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/create-access-policy)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/overview) |
| Egress rules for VPC Service Controls | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/overview)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Ingress rules for VPC Service Controls | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-control)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/overview) |
| Mobile device access-level attributes in Access Context Manager | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices) |
| Service perimeter dry run mode | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/overview)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Access Context Manager Bulk API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Custom access levels with Common Expression Language | LOW | WARN | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/overview) |
| Access Context Manager mobile access level support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices) |
| Access Context Manager mobile OS policy attribute | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices) |
| Access Context Manager mobile require screen lock attribute | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices) |
| Access Context Manager v1beta API | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/apis)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/Policy) |
| Access Context Manager API v1alpha | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Access Context Manager Require admin approval attribute | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices) |
| Access Context Manager require corp-owned device attribute | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices) |
| Access Context Manager require verified Chrome OS attribute | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/browser-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec) |
| Access level Regions attribute | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec) |
| Access Context Manager general availability | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
| Access Context Manager closed beta launch | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest)<br>[source](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage) |
