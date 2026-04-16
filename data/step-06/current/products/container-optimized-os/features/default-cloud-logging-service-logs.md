---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.074Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Default Cloud Logging Service Logs"
feature_slug: "default-cloud-logging-service-logs"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
keywords:
  - "default"
  - "logging"
  - "logs"
  - "collects"
  - "broader"
  - "set"
  - "configuration"
---

# Default Cloud Logging Service Logs

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Collects a broader set of service logs in the default Cloud Logging configuration; Collects a broader set of service logs in the default Cloud Logging configuration.

## Extended Definition

Collects a broader set of service logs in the default Cloud Logging configuration; Collects a broader set of service logs in the default Cloud Logging configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)

## Supporting Pages

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The logging agent is configured by default to send logs from certain system critical services and user application containers to the Cloud Logging backend.
- A workaround is to not use gcplogs as a Docker logging driver, and to instead use the default driver as configured by Container-Optimized OS.
- See Container-Optimized OS specific configuration source ( x86 images and Arm images ) for complete default logging configuration.
- This is not a problem if you only rely on the default logging configuration built into the OS images.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example 1 The following example configuration starts periodic CIS Level 1 scanning with the default period of once a day. #cloud-config runcmd : Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 2 The following example configures periodic CIS Level 1 scanning once every hour. #cloud-config Override cis-compliance-scanner.timer with 1 hour frequency. write files : - path : /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf permissions : 0600 owner : root content : [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h runcmd : Reload systemd units. - systemctl daemon-reload Check the compliance status of the instance once an hour. - systemctl start cis-compliance-scanner.timer Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day. #cloud-config runcmd : Configure the instance for CIS level 2. - systemctl start cis-level2.service Change the scan level to CIS Level 2. - sed -i 's/^LEVEL=. $/LEVEL="2"/' /etc/cis-scanner/env vars Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 4 The following example configures the scanner to run once a day and opts out of a specific CIS recommendation. #cloud-config runcmd : Opt-out of the etc-passwd-permissions check. - sed -i 's/^EXTRA. $/EXTRA OPTIONS="--benchmark-opt-out-ids=etc-passwd-permissions"/' /etc/cis-scanner/env vars Check the compliance of the instance once a day. - systemctl start cis-compliance-scanner.timer Using OS Policy You can use an OS Policy to configure CIS Benchmark scanning.
- Otherwise, return an exit code of 101 to run enforce step. script : - is active=$(systemctl is-active cis-compliance-scanner.timer) result=$(systemctl show -p Result --value cis-compliance-scanner.service) if [ "$is active" == "active" ] && [ "$result" == "success" ]; then exit 100; else exit 101; fi enforce : interpreter : SHELL COS 97 images are by-default CIS Level 1 compliant and there is no additional configuration needed.
- The systemd service supports all of the CIS Level 2 recommendations except for the following: 4.1.1.2 Ensure Logging is running (ID: logging-service-running) This recommendation is opted-out by default but can be re-enabled by deleting the ID from the opted-out list which can be found in the /etc/cis-scanner/env vars file.
- Check instance compliance status Container-Optimized OS images provide the following systemd services for compliance checking and configuration: cis-level1.service : Enabled by default and starts on boot.

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the daemon to use the registry-mirror option in one of the following ways: In the /etc/default/docker file, add the registry-mirror option for the registry (for example, https://mirror.gcr.io ): echo 'DOCKER OPTS="--registry-mirror=https://mirror.gcr.io"' tee /etc/default/docker In the /etc/default/docker file, append "--registry-mirror=https://mirror.gcr.io" to the existing DOCKER OPTS : sed -i -e 's "$ --registry-mirror=https://mirror.gcr.io" ' /etc/default/docker After adding the registry mirror, restart the Docker daemon for the changes to take effect: sudo systemctl daemon-reload sudo systemctl restart docker Adding a configuration to /etc/default/docker is non-persistent across reboot.
- Troubleshooting Resolving option conflicts between Docker daemon.json and flags When configuring the Docker daemon, if the same option is set with a daemon.json file and with flags, Docker will fail to start with an error similar to: unable to configure the Docker daemon with file /etc/docker/daemon.json: the following directives are specified both as a flag and in the configuration file: The recommended solution to resolve this conflict is to modify the default daemon.json , which is located at /etc/docker/daemon.json .
- This can be done using cloud-init , for example using a cloud-config similar to: #cloud-config write files: - path: /tmp/modify docker daemon opts.py permissions: 0744 owner: root content: import json, sys, os, logging DAEMON OPTS FILE = '/etc/docker/daemon.json' opts = {} if os.path.exists(DAEMON OPTS FILE): with open(DAEMON OPTS FILE) as f: try: opts = json.load(f) except: logging.info("json parsing failed, starting with empty config.") pass Add your daemon option modifications here For example, opts['log-opts']['max-size'] = '100m' with open(DAEMON OPTS FILE, 'w') as f: json.dump(opts, f) runcmd: - python /tmp/modify docker daemon opts.py - rm -f /tmp/modify docker daemon opts.py - systemctl restart docker.service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Container Registry sudo -E docker run --rm gcr.io/ your-project / your-image Supported Container Registry hostnames are: us.gcr.io eu.gcr.io asia.gcr.io Alternately, you can fetch appropriate OAuth access tokens from Compute Engine metadata and use them with the docker login command manually, as shown in the following example: METADATA = http://metadata.google.internal/computeMetadata/v1 SVC ACCT = $METADATA /instance/service-accounts/default ACCESS TOKEN = $( curl -H 'Metadata-Flavor: Google' $SVC ACCT /token cut -d '"' -f 4 ) docker login -u oauth2accesstoken -p $ACCESS TOKEN https://gcr.io docker run … gcr.io/ your-project / your-image Using cloud-init with Container Registry This cloud-init example uses the Cloud Config format to start a Docker container from an image stored in Docker's container registry called DockerHub .

