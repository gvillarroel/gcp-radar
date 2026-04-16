---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.098Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer force-fallback flag"
feature_slug: "cos-gpu-installer-force-fallback-flag"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "force"
  - "fallback"
  - "flag"
  - "provides"
  - "driver"
---

# cos-gpu-installer force-fallback flag

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer provides a force-fallback flag for GPU driver installation behavior; cos-gpu-installer provides a force-fallback flag for GPU driver installation behavior.

## Extended Definition

Cos-gpu-installer provides a force-fallback flag for GPU driver installation behavior; cos-gpu-installer provides a force-fallback flag for GPU driver installation behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.
- To preload the GPU driver, run the following command: sudo cos-extensions install gpu -- -no-verify -target-gpu= GPU DEVICE This command is supported starting from cos-gpu-installer:v2.3.0 .
- For earlier Container-Optimized OS release milestones, use the cos-gpu-installer open source tool to manually install GPU drivers.
- Container-Optimized OS provides a built-in utility cos-extensions to simplify the NVIDIA driver installation process.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Enable the logging agent in project metadata Starting in milestone 97 , logging can be enabled in project metadata: gcloud compute project-info add-metadata \ --metadata google-logging-enabled = true Note: Metadata flags defined at instance level takes precedence over metadata flags defined at project level.
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- A workaround is to not use gcplogs as a Docker logging driver, and to instead use the default driver as configured by Container-Optimized OS.
- The docker command that starts the logging agent is defined in the Container-Optimized OS source for stackdriver-logging systemd service .

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- The following entries in /etc/systemd/timesyncd.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/systemd/timesyncd.conf comments omitted for brevity [Time] #NTP= #FallbackNTP=metadata.google.internal #RootDistanceMaxSec=5 #PollIntervalMinSec=32 #PollIntervalMaxSec=2048 So the maximum acceptable root distance is 5 seconds and the minimum and maximum poll intervals for NTP messages are 32 and 2048 seconds respectively.
- For example: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata cos-update-strategy=update disabled Starting from milestone 97 , you can also disable or enable automatic updates in project metadata: gcloud compute project-info add-metadata \ --metadata cos-update-strategy=update disabled Note: Metadata flags defined at instance level takes precedence over metadata flags defined at project level.
- The previous example can be expanded to collect usage statistics and crash dump collection with the following command: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata-from-file user-data= filename \ --metadata=cos-metrics-enabled=true Other metadata flags Metadata Key Description Default Behavior cos-update-strategy Specifies automatic update behavior.
- For example, the following command creates an instanced named cos-test using the cos-beta-67-10575-13-0 image: gcloud compute instances create cos-test \ --image cos-beta-67-10575-13-0 \ --image-project cos-cloud \ --zone us-east1-d \ --machine-type n1-standard-1 You can add the --preemptible flag for one-off, experimental instances.

