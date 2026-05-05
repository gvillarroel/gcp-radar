# AppGroup App Key scopes and attributes management

Product: Apigee X
Feature slug: `appgroup-app-key-scopes-and-attributes-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

AppGroups now support adding scopes and attributes to an AppGroup App Key through a POST operation.

## Lifecycle

- Latest feature date: 2025-05-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
