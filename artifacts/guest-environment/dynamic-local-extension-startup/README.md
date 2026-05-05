# Dynamic local extension startup

Product: Guest Environment
Feature slug: `dynamic-local-extension-startup`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The guest agent can dynamically start locally installed extensions when local plugins are enabled.

## Lifecycle

- Latest feature date: 2026-03-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- authorization (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- key (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- private (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))
- token (evidence: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent), [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment), [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes), [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)
