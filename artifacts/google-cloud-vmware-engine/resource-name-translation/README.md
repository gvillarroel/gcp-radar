# Resource name translation

Product: Google Cloud VMware Engine
Feature slug: `resource-name-translation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Resource name translation standardizes private cloud resource names into a Google Cloud-compatible format and is required for gcloud CLI or API access after September 2023.

## Lifecycle

- Latest feature date: 2022-12-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/vmware-engine/docs/known-issues](https://docs.cloud.google.com/vmware-engine/docs/known-issues)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
