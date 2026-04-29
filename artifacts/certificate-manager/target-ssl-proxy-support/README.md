# Target SSL proxy support

Product: Certificate Manager
Feature slug: `target-ssl-proxy-support`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Certificate Manager supports target SSL proxies as a supported load balancer resource type used by proxy Network Load Balancers. It enables attaching a Certificate Manager certificate map to a target SSL proxy (and detaching it) via the `targetSslProxies` setCertificateMap method and corresponding `gcloud` update commands. This attachment is used so TLS certificates can be associated with target SSL proxies.

## Lifecycle

- Latest feature date: 2022-04-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate
- encrypt
- iam
- role

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/maps](https://docs.cloud.google.com/certificate-manager/docs/maps)
- [https://docs.cloud.google.com/certificate-manager/docs/overview](https://docs.cloud.google.com/certificate-manager/docs/overview)
