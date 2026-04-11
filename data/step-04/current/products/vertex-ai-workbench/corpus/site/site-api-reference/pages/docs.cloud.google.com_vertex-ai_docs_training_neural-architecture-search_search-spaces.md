---
title: "Prebuilt search spaces \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/training/neural-architecture-search/search-spaces
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/training/neural-architecture-search/search-spaces
  title: "Prebuilt search spaces \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
Prebuilt search spaces
Stay organized with collections
Save and categorize content based on your preferences.
A Neural Architecture Search search space is key to achieving a good performance.
It defines all the
potential architectures or parameters to explore and search. Neural Architecture Search
provides a set of default search spaces in the
search_spaces.py
file:
Mnasnet
Efficientnet_v2
Nasfpn
Spinenet
Spinenet_v2
Spinenet_mbconv
Spinenet_scaling
Randaugment_detection
Randaugment_segmentation
AutoAugmentation_detection
AutoAugmentation_segmentation
Note: We publish detailed verification results only for MnasNet and SpineNet
search spaces in MnasNet classification notebook
and SpineNet object detection notebook .
The rest of the search spaces code is based on publications, but we don't
publish verification results for these. These should be used as an example only
and not for benchmarking .
In addition, we also provide the following search space examples:
Lidar search space for 3D point clouds
PyTorch 3D medical image segmentation search space example
PyTorch MnasNet search space example
The Lidar notebook publishes verification results in the notebook.
The rest of the PyTorch search spaces code are to be used as an example only
and not for benchmarking .
Each of these search spaces has a specific use case:
MNasNet search space is used for image classification and object detection tasks and
is based upon MobileNetV2 architecture.
EfficientNetV2 search space is used for object detection tasks.
EfficientNetV2 adds new operations, such as Fused-MBConv. See the
EfficientNetV2 paper for more details.
NAS-FPN search space is typically used for object detection.
You can find a detailed description in this
section .
The SpineNet family of search spaces include spinenet , spinenet_v2 ,
spinenet_mbconv , and spinenet_scaling .
These are typically used for object detection as well.
You can find a detailed description for SpineNet in this
section .
spinenet is the base search space in this family, offering
both residual and bottleneck block candidates during search.
spinenet_v2 offers a smaller version of spinenet , which can
help in faster convergence, offering only bottleneck block candidates
during search.
spinenet_mbconv offers a version of spinenet for mobile
platforms and uses mbconv block candidates during search.
spinenet_scaling is typically used after finding a good
architecture by using spinenet search space to scale it up or down to meet
latency requirements. This search is done over things such as image size, number of filters,
filter size, and number of block repeats.
RandAugment and AutoAugment search
spaces let you search for optimum
data augmentation operations for detection and segmentation, respectively.
Note: Data augmentation is typically used after a good model has been
searched already. You can find a detailed description for DataAugmentation
in this section .
Lidar search space for 3D point clouds
shows end-to-end search on featurizer, backbone, decoder and detection head.
PyTorch 3D medical image segmentation search space example
shows search on UNet encoder and UNet decoder.
Most of the time, these default search spaces are sufficient.
However, if needed, you can customize
these existing ones, or add a new one as
required using the PyGlove library. See the example
code to specify the NAS-FPN search space.
MNasnet and EfficientNetV2 search space
The MNasNet and EfficientV2 search spaces define different backbone building
options such as ConvOps , KernelSize , and ChannelSize . The backbone can be
used for different tasks like classification and detection.
NAS-FPN search space
The NAS-FPN search space defines the search
space in the FPN layers that connect different levels of features for object
detection as shown in the following figure.
SpineNet search space
The SpineNet search space enables searching
for a backbone with scale-permuted intermediate features and cross-scale
connections, achieving state-of-the-art performance of one-stage object detection
on COCO with 60% less computation, and outperforms ResNet-FPN counterparts by 6%
AP. The following are connections of backbone layers in the searched SpineNet-49
architecture.
Data augmentation search space
After the best architecture has been searched already, you can also search for a
best data augmentation policy. Data augmentation can further improve the
accuracy of the previously searched architecture.
The Neural Architecture Search platform provides RandAugment and AutoAugment augmentation search
spaces for two tasks: (a) randaugment_detection for object detection and (b)
randaugment_segmentation for segmentation. It internally chooses between a list
of augmentation operations such as auto-contrast, shear, or rotation to be
applied to the training data.
RandAugment search space
The RandAugment search space is configured by two parameters: (a) N
which is the number of successive augmentation operations to be applied to
an image and (b) M which is the magnitude of ALL of those operations. For
example, the following image shows an example where N=2 operations (Shear and
Contrast) with different M=magnitude are applied to an image.
For a given value of N, the list of operations are picked at random from the
operation bank. The augmentation search finds the best value of N and M for
the training job at hand. The search doesn't use a proxy task and therefore
runs the training jobs to the end.
AutoAugment search space
The AutoAugment search space lets you search for choice , magnitude , and
probability of operations, to optimize your model training.
The AutoAugment search space lets you search for the choices of the policy,
which RandAugment doesn't support.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
