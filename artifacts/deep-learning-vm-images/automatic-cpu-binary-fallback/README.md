# Automatic CPU binary fallback

Product: Deep Learning VM Images
Feature slug: `automatic-cpu-binary-fallback`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GPU TensorFlow and PyTorch images automatically switch to CPU-optimized binaries on first boot when no GPU is attached.

## Lifecycle

- Latest feature date: 2018-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy

## Official Evidence

- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
