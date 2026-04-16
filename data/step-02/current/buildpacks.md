# Buildpacks

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 14
Unique features: 11

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-13 | Node.js buildpack Bun package manager support |  | The Node.js buildpack supports the Bun package manager for application dependency management. |
| 2026-02-17 | Ubuntu 24 LTS base image support for source deployment |  | Cloud Run source deployment supports Ubuntu 24 LTS base images through the google-24 builder. |
| 2026-02-11 | osonly24 runtime |  | The osonly24 runtime provides an OS-only runtime for deploying binaries such as Dart and Go; The osonly24 runtime provides an OS-only runtime for deploying Go applications from source and binaries such as Dart and Go. |
| 2026-01-22 | Python buildpack ADK default entrypoint detection |  | The Python buildpack can automatically detect the default entrypoint for applications built with the Agent Development Kit framework; The Python buildpack can automatically detect the default entrypoint for applications built with the Agent Development Kit framework. |
| 2026-01-13 | pyproject.toml dependency management support |  | Cloud Run and Cloud Run functions source deployments support pyproject.toml for managing Python dependencies; Cloud Run and Cloud Run functions source deployments support pyproject.toml for managing Python dependencies. |
| 2025-09-18 | Ubuntu 24 builder |  | Google Cloud Buildpacks provides an Ubuntu 24 builder based on the google-24 stack. |
| 2025-08-14 | Python buildpack default entrypoint detection from requirements.txt |  | The Python buildpack can set the default entrypoint for Cloud Run source deployments based on web server or framework configuration in requirements.txt. |
| 2025-08-14 | Python buildpack modern web framework support |  | The Python buildpack supports Cloud Run source deployments for modern web frameworks such as FastAPI, Gradio, and Streamlit. |
| 2024-02-26 | Go modules dependency management requirement |  | Go version 1.22 and later requires dependency management with a go.mod file instead of GOPATH. |
| 2023-06-22 | Java runtime Maven wrapper support |  | The Java runtime supports using Maven wrappers to manage a project's Maven dependency. |
| 2023-06-01 | Node.js runtime pnpm package manager support |  | Node.js runtimes support using the pnpm package manager to configure dependencies. |

Source file slug: `buildpacks.md`

