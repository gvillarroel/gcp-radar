# GCP Radar

A staged evidence pipeline for mapping Google Cloud products, features, lifecycle changes, security capabilities, and IAM requirements. It collects official Google sources, validates feature evidence, and produces product cards and reports.

Acquisition and model stages may use credentials, cloud services, and paid inference. Read the stage controls before running them; generated output is not validated evidence until its quality gate passes.

## Get started

Start with the [pipeline manual](docs/pipeline.md) and [setup and stage commands](docs/getting-started.md). The workflow uses Node.js/ZX, Python, and stage-specific tools such as `gcloud`, `know`, and Pi; there is no single dependency-free end-to-end command.

## Documentation

- [Documentation index](docs/README.md)
- [Usage and operations](docs/getting-started.md)
- [Repository layout and validation](docs/repository-guide.md)
- [Pipeline manual](docs/pipeline.md)
- [Repository map](docs/repository-map.md)
- [Strategy and limitations](docs/strategy-so-far.md)
- [AGENTS.md](AGENTS.md)
