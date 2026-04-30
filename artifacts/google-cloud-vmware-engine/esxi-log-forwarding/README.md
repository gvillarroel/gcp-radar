# ESXi log forwarding

Product: Google Cloud VMware Engine
Feature slug: `esxi-log-forwarding`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

ESXi logs, including NSX-T Distributed Firewall logs, can be sent to a remote syslog server.

## Lifecycle

- Latest feature date: 2023-11-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- audit
- encrypt
- firewall
- iam
- identity
- key
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)
