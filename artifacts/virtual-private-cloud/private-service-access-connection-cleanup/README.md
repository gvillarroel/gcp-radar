# Private Service Access connection cleanup

Product: Virtual Private Cloud
Feature slug: `private-service-access-connection-cleanup`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deleting a Private Service Access connection now also removes configurations created by the service producer, simplifying recreation after deletion.

## Lifecycle

- Latest feature date: 2021-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- constraint
- firewall
- key
- private

## Official Evidence

- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
