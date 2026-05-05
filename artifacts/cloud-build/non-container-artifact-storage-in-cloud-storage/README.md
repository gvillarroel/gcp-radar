# Non-container artifact storage in Cloud Storage

Product: Cloud Build
Feature slug: `non-container-artifact-storage-in-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build added support for storing non-container artifacts in Cloud Storage buckets.

## Lifecycle

- Latest feature date: 2018-07-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers), [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go))
- auth (evidence: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers), [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go))
- identity (evidence: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers), [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go))
- logging (evidence: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers), [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go))
- security (evidence: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers), [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go))
- token (evidence: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers), [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
