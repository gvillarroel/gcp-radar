# Jupyter and JupyterLab login shells

Product: Dataproc
Feature slug: `jupyter-and-jupyterlab-login-shells`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Terminals launched from Jupyter and JupyterLab use login shells that behave like SSH sessions as root.

## Lifecycle

- Latest feature date: 2020-07-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- credential
- secret

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsPager)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
