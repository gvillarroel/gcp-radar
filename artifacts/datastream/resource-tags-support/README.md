# Resource tags support

Product: Datastream
Feature slug: `resource-tags-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Datastream supports tags on private connectivity configurations, connection profiles, and streams for fine-grained access control.

## Lifecycle

- Latest feature date: 2022-06-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags))
- audit (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags))
- auth (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags))
- credential (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags))
- encrypt (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags))
- key (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags))
- private (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags))

## Official Evidence

- [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags)
- [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)
- [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
