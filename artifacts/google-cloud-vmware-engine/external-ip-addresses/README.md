# External IP addresses

Product: Google Cloud VMware Engine
Feature slug: `external-ip-addresses`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

External IP addresses can be managed with Terraform resources.

## Lifecycle

- Latest feature date: 2023-12-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- credential
- firewall
- key
- permission
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-allocate-external-ip](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-allocate-external-ip)
