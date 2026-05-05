# curl SSL certificate path detection in Vertex AI Workbench user-managed notebooks

Product: Vertex AI Workbench
Feature slug: `curl-ssl-certificate-path-detection-in-vertex-ai-workbench-user-managed-notebooks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A bug was fixed where curl could not detect the correct SSL certificate path by default in user-managed notebooks.

## Lifecycle

- Latest feature date: 2023-03-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference), [https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart](https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference), [https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart](https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart](https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference)
