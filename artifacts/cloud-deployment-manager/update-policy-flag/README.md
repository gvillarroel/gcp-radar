# --update-policy flag

Product: Cloud Deployment Manager
Feature slug: `update-policy-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deployment Manager removed the --update-policy flag because PATCH is no longer supported; deprecated on 2015-07-22.

## Lifecycle

- Latest feature date: 2015-07-22
- Deprecation date: 2015-07-22
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- iam
- key
- logging
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)
