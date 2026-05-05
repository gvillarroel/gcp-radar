# Connection profile validate_only parameter

Product: Datastream
Feature slug: `connection-profile-validate-only-parameter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Datastream API supports a validate_only parameter on connection profile resources.

## Lifecycle

- Latest feature date: 2023-01-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover))
- auth (evidence: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover))
- authorization (evidence: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover))
- iam (evidence: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover))
- permission (evidence: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover))
- private (evidence: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover))
- token (evidence: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover))

## Official Evidence

- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover)
- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
