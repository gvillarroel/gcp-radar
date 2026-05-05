# Persistent directory cloning

Product: Cloud Workstations
Feature slug: `persistent-directory-cloning`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Workstations supports cloning persistent directories from a source workstation; Cloud Workstations supports cloning persistent directories when a source workstation is specified during workstation creation.

## Lifecycle

- Latest feature date: 2025-01-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- audit (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- confidential (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- constraint (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- encrypt (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- key (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- permission (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- policy (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- private (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))
- role (evidence: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment), [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation), [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini), [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture))

## Official Evidence

- [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini)
