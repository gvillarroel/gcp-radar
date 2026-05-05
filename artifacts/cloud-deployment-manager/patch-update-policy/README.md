# PATCH update policy

Product: Cloud Deployment Manager
Feature slug: `patch-update-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deployment Manager no longer supports PATCH as an update policy in the API; deprecated on 2015-07-22.

## Lifecycle

- Latest feature date: 2015-07-22
- Deprecation date: 2015-07-22
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy))
- audit (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)
