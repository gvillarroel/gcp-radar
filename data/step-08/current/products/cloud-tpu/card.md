# Cloud TPU

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:44.045Z`
Product status: `PASS`

## Summary

- Feature cards: 28
- Step 07 failed features: 0
- Step 07 warned features: 2
- Corpus health: healthy
- IAM mapping: 7 explicit, 0 derived, 21 unknown

## Service Card

- Service card ID: `cloud-tpu:service`
- Latest feature date: 2026-03-31
- Official source links: 27
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| TPU7x | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)<br>[source](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| Future reservations in calendar mode | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/overview)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup) |
| Reservation sharing | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)<br>[source](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)<br>[source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup) |
| Flex-start | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)<br>[source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup) |
| Multislice TPU environment creation in Google Cloud Console | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)<br>[source](https://docs.cloud.google.com/tpu/docs/quick-starts) |
| Queued resources in Google Cloud Console | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/principal-identifiers)<br>[source](https://docs.cloud.google.com/iam/docs/resources)<br>[source](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities) |
| Shared VPC | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)<br>[source](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| TPU Monitoring tab | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/quick-starts)<br>[source](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting) |
| Device Memory XRT API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)<br>[source](https://docs.cloud.google.com/tpu/docs/tutorials) |
| Dynamic shape support on XLA:CPU and XLA:GPU | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/tensorflow-ops) |
| Hardsigmoid support in PyTorch/XLA | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)<br>[source](https://docs.cloud.google.com/tpu/docs/tutorials) |
| max_unpool2d support in PyTorch/XLA | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata) |
| max_unpool3d support in PyTorch/XLA | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/WaitOperationRequest) |
| PyTorch 1.6 support via PyTorch/XLA | LOW | WARN | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/tpu/docs/quick-starts) |
| ReplicationPad1d support in PyTorch/XLA | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)<br>[source](https://docs.cloud.google.com/tpu/docs/tutorials) |
| ReplicationPad2d support in PyTorch/XLA | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)<br>[source](https://docs.cloud.google.com/tpu/docs/tutorials) |
| Small host VM memory environment utility | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| true_divide support in PyTorch/XLA | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)<br>[source](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata) |
| XLA Builder support | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/tpu/docs/tutorials) |
| XLA RNG state checkpointing and loading | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/tpu/docs/tensorflow-ops)<br>[source](https://docs.cloud.google.com/tpu/docs/tutorials) |
| PyTorch 1.5 support via PyTorch/XLA | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)<br>[source](https://docs.cloud.google.com/tpu/docs/tutorials) |
| TensorFlow 2.1 with Keras support | LOW | WARN | unknown | [source](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)<br>[source](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager)<br>[source](https://docs.cloud.google.com/tpu/docs/tensorflow-ops) |
| Cloud TPU v2 Pod | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| Cloud TPU v3 Pod | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)<br>[source](https://docs.cloud.google.com/tpu/docs/quota)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| Cloud TPU v3 | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/authentication)<br>[source](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| Cloud TPU in Google Kubernetes Engine | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| Cloud TPU | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)<br>[source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)<br>[source](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm) |
| Preemptible TPUs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager)<br>[source](https://docs.cloud.google.com/tpu/docs/ctpu-reference)<br>[source](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup) |
