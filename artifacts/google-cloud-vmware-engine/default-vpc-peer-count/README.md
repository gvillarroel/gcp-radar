# Default VPC peer count

Product: Google Cloud VMware Engine
Feature slug: `default-vpc-peer-count`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Standard VMware Engine networks now support 25 VPC peers by default.

## Lifecycle

- Latest feature date: 2023-11-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- credential
- key
- logging
- permission
- policy
- private
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings)
