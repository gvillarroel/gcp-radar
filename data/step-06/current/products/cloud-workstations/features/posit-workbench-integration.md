---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.977Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Posit Workbench integration"
feature_slug: "posit-workbench-integration"
latest_feature_date: "2023-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/develop-code-using-posit-workbench-rstudio"
  - "https://docs.cloud.google.com/workstations/docs/base-editor-overview"
  - "https://docs.cloud.google.com/workstations/docs/customize-container-images"
  - "https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise"
keywords:
  - "posit"
  - "workbench"
  - "integration"
  - "workstations"
  - "integrates"
  - "with"
  - "including"
  - "rstudio"
---

# Posit Workbench integration

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations integrates with Posit Workbench, including RStudio Pro, for development workflows; Cloud Workstations integrates with Posit Workbench, including RStudio Pro, for development workflows.

## Extended Definition

Cloud Workstations integrates with Posit Workbench, including RStudio Pro, for development workflows; Cloud Workstations integrates with Posit Workbench, including RStudio Pro, for development workflows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/develop-code-using-posit-workbench-rstudio](https://docs.cloud.google.com/workstations/docs/develop-code-using-posit-workbench-rstudio)
- [https://docs.cloud.google.com/workstations/docs/base-editor-overview](https://docs.cloud.google.com/workstations/docs/base-editor-overview)
- [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- [https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise](https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise)

## Supporting Pages

### "Develop code using Posit Workbench (including RStudio Pro) \_|\_ Cloud Workstations\

- URL: [https://docs.cloud.google.com/workstations/docs/develop-code-using-posit-workbench-rstudio](https://docs.cloud.google.com/workstations/docs/develop-code-using-posit-workbench-rstudio)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Cloud Workstations Guides Send feedback Develop code using Posit Workbench (including RStudio Pro) Stay organized with collections Save and categorize content based on your preferences.
- Learn how to start developing code using Posit Workbench and RStudio Pro with Cloud Workstations.
- Create the workstation configuration To use Posit Workbench (including RStudio Pro) the you must create a workstation configuration for the developers in your organization: Find your Posit Workbench license key and keep it nearby because you need it in a subsequent step.
- From the Code editors menu, select ' Posit Workbench (including RStudio Pro) Third-party provided'.

### Base editor overview \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/base-editor-overview](https://docs.cloud.google.com/workstations/docs/base-editor-overview)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These Activity bar views are as follows: Explorer : view the folders and files in your current workspace Search : search your files for a string or regular expression Source Control : manage application files with the Cloud Workstations base editor's Git support Debug : debug your application by setting breakpoints and inspecting variables Extensions : search through a catalog of extensions that add additional features to your IDE Cloud Code : create and deploy Google Cloud applications directly from the IDE Settings : customize the Cloud Workstations base editor to suit your workflow View and edit files The built-in code editor that lets you browse file directories and view and edit files inside your workstation.
- Right-click in Explorer view to upload and download files Language support The Cloud Workstations base editor supports languages such as Go, Python, Java, .NET Core, and Node.js through extensions, providing language features such as: Smart highlighting, code suggestions and context-based completions Linting and providing descriptive errors Code navigation (go to definitions, declarations, references, and implementations) Intuitive debugging support Cloud Code integration Cloud Code provides IDE support for the full development cycle of Kubernetes and Cloud Run applications, from creating and customizing a new application from sample applications to running your finished application.
- Workspaces usually represent your root project folder and with the Cloud Workstations base editor, you can create, open, and save workspaces as well as customize them with project-specific settings.
- Home Documentation Application development Cloud Workstations Guides Send feedback Base editor overview Stay organized with collections Save and categorize content based on your preferences.

### Customize container images \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Update preconfigured Secure APT keys Cloud Workstations base images come preinstalled with a number of tools obtained from various third-party repositories using Secure APT.
- You can then interact with either IDE: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest as code-oss-image FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/jetbrains-intellij:latest Copy Code OSS for Cloud Workstations and startup scripts into our custom image COPY --from = code-oss-image /opt/code-oss /opt/code-oss COPY --from = code-oss-image /etc/workstation-startup.d/110 start-code-oss.sh /etc/workstation-startup.d/110 start-code-oss.sh Use the existing entrypoint script which will execute all scripts in /etc/workstation-startup.d/ ENTRYPOINT [ "/google/scripts/entrypoint.sh" ] Container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development To create a container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development at build time, run the following commands: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest RUN wget https://open-vsx.org/api/vscjava/vscode-java-debug/0.40.1/file/vscjava.vscode-java-debug-0.40.1.vsix && \ unzip vscjava.vscode-java-debug-0.40.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-debug RUN wget https://open-vsx.org/api/vscjava/vscode-java-dependency/0.19.1/file/vscjava.vscode-java-dependency-0.19.1.vsix && \ unzip vscjava.vscode-java-dependency-0.19.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-dependency RUN wget https://open-vsx.org/api/redhat/java/1.6.0/file/redhat.java-1.6.0.vsix && \ unzip redhat.java-1.6.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/redhat-java RUN wget https://open-vsx.org/api/vscjava/vscode-maven/0.35.2/file/vscjava.vscode-maven-0.35.2.vsix && \ unzip vscjava.vscode-maven-0.35.2.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-maven RUN wget https://open-vsx.org/api/vscjava/vscode-java-test/0.35.0/file/vscjava.vscode-java-test-0.35.0.vsix && \ unzip vscjava.vscode-java-test-0.35.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-test RUN chmod a+rwx -R /opt/code-oss/extensions/ If you pre-install extensions, they are considered built-in extensions.
- Container image with emacs pre-installed To create a container image with emacs pre-installed, run the following commands: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest RUN sudo apt update RUN sudo apt install -y emacs Container image with user customization Follow these steps to customize a container image: Create a script in /etc/workstation-startup.d/ that runs after 010 add-user.sh —for example, 011 customize-user.sh : #!/bin/bash Create new group groupadd $GROUP Add the user to a new group usermod -a -G $GROUP $USERNAME Replace $GROUP with the new group name and $USERNAME with the user's username.
- For example, to install the latest version of the Clion, run the following command: /installer-scripts/jetbrains-installer.sh clion Customize JetBrains IDE configuration files If a persistent home directory is specified in the workstations configuration, Cloud Workstations base images with JetBrains IDEs automatically persist the $IDE.vmoptions and $IDE.properties configuration files.

### "Help secure the Cloud Workstations API using Chrome Enterprise Premium \_\

- URL: [https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise](https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Cloud Workstations Guides Send feedback Help secure the Cloud Workstations API using Chrome Enterprise Premium Stay organized with collections Save and categorize content based on your preferences.
- Test that access to the workstation API from a corporate-owned device is enabled: Developers with Chrome Enterprise Premium and Cloud Workstations access should be able to create their workstation and then launch their workstation .
- Add required Google groups with access levels Warning: These access permissions affect all Google Cloud console and API access, not just for the Cloud Workstations API.
- Set up Cloud Workstations To integrate with Chrome Enterprise Premium, your Cloud Workstations cluster must use Identity-Aware Proxy (IAP).

