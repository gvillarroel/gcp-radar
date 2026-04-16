---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.977Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Persistent JetBrains IDE settings"
feature_slug: "persistent-jetbrains-ide-settings"
latest_feature_date: "2023-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/develop-code-using-local-jetbrains-ides"
  - "https://docs.cloud.google.com/workstations/docs/customize-container-images"
  - "https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console"
  - "https://docs.cloud.google.com/workstations/docs/write-code-gemini"
keywords:
  - "persistent"
  - "jetbrains"
  - "ide"
  - "settings"
  - "workstations"
  - "preserves"
  - "vmoptions"
  - "and"
---

# Persistent JetBrains IDE settings

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations preserves JetBrains IDE .vmoptions and .properties files across workstations when using the latest preconfigured base images.

## Extended Definition

Cloud Workstations preserves JetBrains IDE .vmoptions and .properties files across workstations when using the latest preconfigured base images.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/develop-code-using-local-jetbrains-ides](https://docs.cloud.google.com/workstations/docs/develop-code-using-local-jetbrains-ides)
- [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- [https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console](https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console)
- [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini)

## Supporting Pages

### "Develop code using local JetBrains IDEs \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/develop-code-using-local-jetbrains-ides](https://docs.cloud.google.com/workstations/docs/develop-code-using-local-jetbrains-ides)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported operating systems The Cloud Workstations plugin supports the following operating systems: Windows macOS (Intel and Apple Silicon) Linux Supported versions The Cloud Workstations plugin supports the latest version, and one previous version, of JetBrains IDEs and JetBrains Gateway .
- The Cloud Workstations plugin lets you initiate remote development sessions for Cloud Workstations using JetBrains IDEs such as IntelliJ IDEA Ultimate, PyCharm Professional, Rider, CLion, PhpStorm, and WebStorm.
- Home Documentation Application development Cloud Workstations Guides Send feedback Develop code using local JetBrains IDEs Stay organized with collections Save and categorize content based on your preferences.
- When a new JetBrains IDE major version is released, the next Cloud Workstations plugin release supports the new version and drops support for the earliest, previously supported version.

### Customize container images \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to install the latest version of the Clion, run the following command: /installer-scripts/jetbrains-installer.sh clion Customize JetBrains IDE configuration files If a persistent home directory is specified in the workstations configuration, Cloud Workstations base images with JetBrains IDEs automatically persist the $IDE.vmoptions and $IDE.properties configuration files.
- You can then interact with either IDE: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest as code-oss-image FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/jetbrains-intellij:latest Copy Code OSS for Cloud Workstations and startup scripts into our custom image COPY --from = code-oss-image /opt/code-oss /opt/code-oss COPY --from = code-oss-image /etc/workstation-startup.d/110 start-code-oss.sh /etc/workstation-startup.d/110 start-code-oss.sh Use the existing entrypoint script which will execute all scripts in /etc/workstation-startup.d/ ENTRYPOINT [ "/google/scripts/entrypoint.sh" ] Container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development To create a container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development at build time, run the following commands: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest RUN wget https://open-vsx.org/api/vscjava/vscode-java-debug/0.40.1/file/vscjava.vscode-java-debug-0.40.1.vsix && \ unzip vscjava.vscode-java-debug-0.40.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-debug RUN wget https://open-vsx.org/api/vscjava/vscode-java-dependency/0.19.1/file/vscjava.vscode-java-dependency-0.19.1.vsix && \ unzip vscjava.vscode-java-dependency-0.19.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-dependency RUN wget https://open-vsx.org/api/redhat/java/1.6.0/file/redhat.java-1.6.0.vsix && \ unzip redhat.java-1.6.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/redhat-java RUN wget https://open-vsx.org/api/vscjava/vscode-maven/0.35.2/file/vscjava.vscode-maven-0.35.2.vsix && \ unzip vscjava.vscode-maven-0.35.2.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-maven RUN wget https://open-vsx.org/api/vscjava/vscode-java-test/0.35.0/file/vscjava.vscode-java-test-0.35.0.vsix && \ unzip vscjava.vscode-java-test-0.35.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-test RUN chmod a+rwx -R /opt/code-oss/extensions/ If you pre-install extensions, they are considered built-in extensions.
- Install IDE and Plugins RUN bash /installer-scripts/jetbrains-installer.sh intellij pinned && \ Install Cloud Code - https://plugins.jetbrains.com/plugin/8079-cloud-code bash /installer-scripts/plugin-installer.sh \ -v 22.9.3-222 \ -d /opt/ideaIU/plugins/ \ -c 89628279ed9042c526a81facc09bf53f8fb8b83b4595b0d329d94c1611e0c379 \ 8079 Register IDE with JetBrains Gateway RUN echo 'runuser user -c "/opt/ideaIU/bin/remote-dev-server.sh registerBackendLocationForGateway"' > /etc/workstation-startup.d/110 register-intellij-with-gateway.sh \ echo 'echo "IntelliJ-Ultimate ready for incoming gateway connection"' >> /etc/workstation-startup.d/110 register-intellij-with-gateway.sh ...
- For example, if you want to set the default color theme to Dark, extend the base editor image to include the following script under /etc/workstation-startup.d/150 default-ide-color-theme.sh cat <<< $( jq '. += {"workbench.colorTheme": "Default Dark Modern"}' settings.json ) > settings.json Build a custom container image For detailed information about Docker commands, see the Docker reference .

### "Quickstart: Set up workstations \_|\_ Cloud Workstations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console](https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use Cloud Workstations with JetBrains IDEs such as IntelliJ IDEA Ultimate and PyCharm Professional.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin This guide covers steps for administrators to set up Cloud Workstations and for developers to use the workstations.
- Home Documentation Application development Cloud Workstations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Workstation clusters define a group of workstations in a particular region, manage workstations during their lifecycle, and provide configurable network connectivity.

### "Code with Gemini Code Assist \_|\_ Cloud Workstations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a result, Gemini Code Assist does not run on Cloud Workstations IDEs that require JetBrains Gateway to connect. 'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project If you selected your project per the instructions in this guide, which includes enabling the Gemini for Google Cloud API, then there may be an issue with the LS server.
- Home Documentation Application development Cloud Workstations Guides Send feedback Code with Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info Gemini Code Assist and JetBrains Gateway Gemini Code Assist does not run through JetBrains Gateway.
- To prevent code that matches cited sources from being suggested, you can modify the geminicodeassist.recitation.maxCitedLength setting to 0 in a settings.json file: "geminicodeassist.recitation.maxCitedLength" : 0 Use smart actions To help you be more productive while minimizing context switching, Gemini Code Assist provides AI-powered smart actions directly in your source code editor.

