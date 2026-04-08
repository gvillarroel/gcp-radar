# Buildpacks

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 14
Unique features: 13

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-13 | Node.js buildpack Bun package manager support |  | The Node.js buildpack now supports using the Bun package manager in Preview. |
| 2026-02-17 | Cloud Run source deployment Ubuntu 24 LTS base image support |  | Cloud Run source deployments now support Ubuntu 24 LTS base images in general availability via the Google Buildpacks builder image. |
| 2026-02-11 | OS-only runtime (osonly24) availability |  | The osonly24 OS-only runtime is generally available for deploying binaries such as Dart and Go. |
| 2026-01-22 | Python buildpack ADK default entrypoint detection |  | The Python buildpack supports default entrypoint detection for applications using the Agent Development Kit (ADK) framework in general availability; The Python buildpack preview supports default entrypoint detection for the Agent Development Kit (ADK) framework. |
| 2026-01-13 | pyproject.toml dependency management for Python source deployments |  | Cloud Run and Cloud Run Functions source deployments support the pyproject.toml file for managing Python dependencies in general availability; Cloud Run and Cloud Run Functions source deployments support pyproject.toml-based Python dependency management, with version-specific GA and Preview availability. |
| 2025-12-18 | OS-only runtime (osonly24) preview availability |  | The osonly24 OS-only runtime is available in preview to deploy Go applications and binaries such as Dart and Go. |
| 2025-11-14 | pyproject.toml dependency managers support (pip/uv/poetry) |  | Cloud Run and Cloud Run Functions source deployments support pyproject.toml for Python dependencies using pip, uv, or poetry. |
| 2025-09-18 | Ubuntu 24 (google-24) Buildpacks builder availability |  | The Ubuntu 24 builder with the google-24 stack is now available for Google Cloud Buildpacks. |
| 2025-08-14 | Python 3.13+ requirements-based default entrypoint detection |  | For Python 3.13 and later, the Python buildpack sets the Cloud Run source-deployment default entrypoint based on framework/server settings in requirements.txt. |
| 2025-08-14 | Python buildpack modern web framework support on Cloud Run source deployments |  | The Python buildpack supports Cloud Run source deployments for modern Python web frameworks such as FastAPI, Gradio, and Streamlit. |
| 2024-02-26 | Go module dependency management requirement (GOPATH deprecated) | 2024-02-26 | Starting with Go 1.22, Buildpacks-based source builds no longer use GOPATH for dependency installation and instead require go.mod; deprecated on 2024-02-26. |
| 2023-06-22 | Java runtime support for Maven wrappers |  | The Java runtime adds support for using Maven Wrapper files to manage the runtime's Maven dependency in projects. |
| 2023-06-01 | Node.js dependency management with pnpm |  | Node.js runtimes gain support for configuring dependencies using the pnpm package manager. |

Source file slug: `buildpacks.md`

