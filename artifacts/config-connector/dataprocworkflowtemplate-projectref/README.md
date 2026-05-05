# DataprocWorkflowTemplate projectRef

Product: Config Connector
Feature slug: `dataprocworkflowtemplate-projectref`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports strong hierarchical references through spec.projectRef on DataprocWorkflowTemplate.

## Lifecycle

- Latest feature date: 2021-06-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
