# Home volume mounting across build steps

Product: Cloud Build
Feature slug: `home-volume-mounting-across-build-steps`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A shared home volume is mounted as the $HOME directory across Cloud Build steps.

## Lifecycle

- Latest feature date: 2017-07-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- encrypt
- firewall
- iam
- identity
- key
- logging
- permission
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
