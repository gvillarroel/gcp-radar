# Cloud Load Balancing plugins

Product: Service Extensions
Feature slug: `cloud-load-balancing-plugins`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service Extensions now supports WebAssembly (Wasm) plugins in a fully managed serverless model, allowing execution directly in the data path of most Cloud Load Balancing application load balancers.

## Lifecycle

- Latest feature date: 2025-07-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- allow (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- armor (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- auth (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- authorization (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- iam (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- key (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- kms (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- logging (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))
- permission (evidence: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions))

## Official Evidence

- [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
