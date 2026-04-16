---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.025Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "FUSE max pages limit dynamic configuration"
feature_slug: "fuse-max-pages-limit-dynamic-configuration"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
keywords:
  - "fuse"
  - "max"
  - "pages"
  - "limit"
  - "dynamic"
  - "configuration"
  - "container"
  - "optimized"
---

# FUSE max pages limit dynamic configuration

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports dynamically configuring the FUSE max pages limit; Container-Optimized OS supports dynamically configuring the FUSE max pages limit.

## Extended Definition

Container-Optimized OS supports dynamically configuring the FUSE max pages limit; Container-Optimized OS supports dynamically configuring the FUSE max pages limit.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)

## Supporting Pages

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- However, if you have a custom logging configuration, you might experience breakage when migrating workloads to images that are based on a different architecture or to a newer version of Container-Optimized OS.
- Logging agent configuration compatibility The logging agent is a fluentd-based container on x86-based Container-Optimized OS images and a fluent-bit binary on Arm-based Container-Optimized OS images.
- See Container-Optimized OS specific configuration source ( x86 images and Arm images ) for complete default logging configuration.

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Status: Downloaded newer image for gcr.io/google-containers/busybox:latest hello world Accessing private images in Artifact Registry or Container Registry Starting with milestone 60 releases, docker-credential-gcr is pre-installed in Container-Optimized OS images.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Running containers on instances Stay organized with collections Save and categorize content based on your preferences.
- You can run a Docker container on a machine running Container-Optimized OS in much the same way as you would on most other node image distributions, by using the docker run command.
- Otherwise, docker-credential-gcr will try to write credentials to /root/.docker/config.json , which is not permitted on Container-Optimized OS.

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider the following cloud-init example: #cloud-config write files : - path : /etc/systemd/system/config-firewall.service permissions : 0644 owner : root content : [Unit] Description=Configures the host firewall [Service] Type=oneshot RemainAfterExit=true ExecStart=/sbin/iptables -A INPUT -p tcp --dport 80 -j ACCEPT - path : /etc/systemd/system/myhttp.service permissions : 0644 owner : root content : [Unit] Description=My HTTP service After=docker.service config-firewall.service Wants=docker.service config-firewall.service [Service] Restart=always ExecStart=/usr/bin/docker run --rm --name=%n --net=host nginx ExecStop=-/usr/bin/docker exec %n -s quit runcmd : - systemctl daemon-reload - systemctl start myhttp.service Using this cloud-init configuration with a VM running Container-Optimized OS will result in the following behaviors on every boot: The host firewall will be configured to allow incoming TCP connections on port 80.
- Warning: The default firewall configuration might be different if you are using Container-Optimized OS through another Google Cloud product like Containers on Compute Engine or Google Kubernetes Engine.
- You can see the exact host firewall configuration by running sudo iptables -L on a VM instance running Container-Optimized OS.
- In the following example, the nginx container will be accessible on the network on port 80: docker run --rm -d -p 80 :80 --name = nginx nginx Note: If IPv6 address is used for accessing the deployed container over the network, you must explicitly configure the host firewall using ip6tables commands like "ip6tables -A INPUT -p tcp --dport 80 -j ACCEPT" .This is because Docker does not automatically configure the IPv6 rules for host firewall to expose your application on the network due to known limitation .

