# AWS image import with gcloud

Product: Compute Engine
Feature slug: `aws-image-import-with-gcloud`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The gcloud CLI can import VM images from AWS into Google Cloud; AWS image import with gcloud lets you import VM images from AWS into Google Cloud using the command-line tool.

## Lifecycle

- Latest feature date: 2023-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))
- key (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))
- token (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4), [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips), [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips))

## Official Evidence

- [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips)
- [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips)
- [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4)
