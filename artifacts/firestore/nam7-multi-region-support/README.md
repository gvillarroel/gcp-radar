# nam7 multi-region support

Product: Firestore
Feature slug: `nam7-multi-region-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Firestore supports the nam7 United States (Central and East) multi-region, composed of us-central1 and us-east4.

## Lifecycle

- Latest feature date: 2025-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp))
- auth (evidence: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp))
- iam (evidence: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp))
- identity (evidence: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp))
- permission (evidence: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp))
- role (evidence: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp))
- security (evidence: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
