# Cloud DNS scopes

Product: Cloud DNS
Feature slug: `cloud-dns-scopes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS supports configuring DNS scopes.

## Lifecycle

- Latest feature date: 2021-05-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete))
- auth (evidence: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete))
- authorization (evidence: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete))
- iam (evidence: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete))
- permission (evidence: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete))
- security (evidence: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete))
- threat (evidence: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete), [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete))

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create)
- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete)
- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create)
- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/delete)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
