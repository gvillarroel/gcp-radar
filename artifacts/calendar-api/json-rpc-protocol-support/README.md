# JSON-RPC protocol support

Product: Calendar API
Feature slug: `json-rpc-protocol-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Calendar API support for the JSON-RPC protocol is deprecated and scheduled for discontinuation; deprecated on 2019-03-25.

## Lifecycle

- Latest feature date: 2018-03-22
- Deprecation date: 2019-03-25
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance), [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go), [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java))
- authorization (evidence: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance), [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go), [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java))
- credential (evidence: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance), [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go), [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java))
- private (evidence: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance), [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go), [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java))
- secret (evidence: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance), [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go), [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java))
- security (evidence: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance), [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go), [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java))
- token (evidence: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance), [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go), [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java))

## Official Evidence

- [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance)
- [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go)
- [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
