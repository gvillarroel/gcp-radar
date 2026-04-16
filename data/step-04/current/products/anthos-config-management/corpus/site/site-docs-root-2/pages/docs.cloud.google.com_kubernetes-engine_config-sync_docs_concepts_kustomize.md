---
title: "Configure Kubernetes with Kustomize \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize
  title: "Configure Kubernetes with Kustomize \_|\_ Config Sync \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Guides
Send feedback
Configure Kubernetes with Kustomize
Stay organized with collections
Save and categorize content based on your preferences.
Kustomize is a Kubernetes
configuration transformation tool that lets you customize untemplated YAML
files, leaving the original files untouched. Kustomize can also generate resources such
as ConfigMaps and Secrets from other representations. Kustomize is built for the
Kubernetes API, so it can understand and modify Kubernetes-style objects.
If you want to use Helm charts with Config Sync, there are two supported
methods: rendering Helm through Kustomize or using the Helm API. This page details
the requirements for rendering Helm charts through Kustomize. For more information
about using the Helm API, see
Syncing Helm charts from Artifact Registry .
Requirements and limitations
Before setting up automatic rendering with Kustomize, review the following requirements
and limitations:
Hierarchical sources
are not supported.
Remote bases from private sources of truth are not supported.
Private and OCI-based Helm registries are not supported unless you use the Helm API.
Helm values can be managed in the source of truth. With the Helm API, values are
managed as part of the RootSync or RepoSync API.
Rendering multiple Helm charts in a RootSync or RepoSync object is supported.
With the Helm API, you can render only one Helm chart in a RootSync or RepoSync
object.
Ensure that your Kustomization configuration file ( kustomization.yaml , kustomization.yml , or
Kustomization ) is located in the root of your directory and that all your
configurations are stored in that file, not in separate files in your source of truth.
Render Kustomize configurations
The following example demonstrates how you might set up your
source of truth to use Kustomize configurations with automatic rendering.
Example architecture for Kustomize configurations
This directory includes four overlays ( team-a , team-b , team-c , and external-team ) that
reference the same base, and a file used by the ConfigMap generator.
The following diagram shows you the directory structure:
├── example
│ ├── base
│ │ ├── kustomization.yaml
│ │ ├── namespace.yaml
│ │ ├── networkpolicy.yaml
│ │ ├── rolebinding.yaml
│ │ └── role.yaml
│ ├── kustomization.yaml
│ ├── README.md
│ ├── team-a
│ │ └── kustomization.yaml
│ ├── team-b
│ │ └── kustomization.yaml
│ └── team-c
│ └── kustomization.yaml
├── external-team
│ └── kustomization.yaml
└── external-data.txt
The following kustomization.yaml file is in the root of the source of truth and it
contains references to the four overlays with a ConfigMap generator from a local file:
# ./example/kustomization.yaml
resources :
- team-a
- team-b
- team-c
- ../external-team
configMapGenerator :
- name : my-configmap
namespace : my-namespace
files :
- ../external-data.txt
The following kustomize.yaml is in the team-a directory and is the overlay
for team-a :
# ./example/team-a/kustomization.yaml
namespace : team-a
resources :
- ../base
patches :
- target :
kind : RoleBinding
name : team-admin-rolebinding
patch : |-
- op: replace
path: /subjects/0/name
value: team-a-admin@mydomain.com
- target :
kind : Namespace
name : default
patch : |-
- op: replace
path: /metadata/name
value: team-a
The following kustomization.yaml is in the base directory and is the
Kustomize base:
# ./example/base/kustomization.yaml
resources :
- namespace.yaml
- rolebinding.yaml
- role.yaml
- networkpolicy.yaml
You can explore an example repository in the
configuring namespace-specific policies
directory in GitHub.
Render Helm charts through Kustomize
This section explains how to render Helm charts through Kustomize.
Bundled Helm and Kustomize versions
lists the Kustomize and Helm versions bundled with the corresponding version of
Config Sync.
Key Term: Helm is a package manager for Kubernetes that helps you define,
install, and upgrade applications. Config Sync can sync Helm charts directly
from Artifact Registry by using the Helm API, or render Helm charts specified within
Kustomize configurations.
Helm chart fields
You can add the following Helm chart fields to your kustomization.yaml
files to support rendering Helm charts through Kustomize:
Field
Description
helmGlobals
Parameters applied to all Helm charts
helmGlobals.chartHome
Accepts a string. A path, relative to the Kustomization root, to a
directory containing a subdirectory for each chart to be included in the
Kustomization. The default value of this field is charts .
helmGlobals.configHome
Accepts a string. Defines a value that Kustomize should pass to Helm with the
HELM_CONFIG_HOME environment variable. Kustomize doesn't attempt
to read or write this directory. If omitted, TMP_DIR/helm is
used, where TMP_DIR is a temporary directory created by
Kustomize for Helm.
helmCharts
An array of Helm chart parameters
helmCharts.name
Accepts a string. The name of the chart. This field is required.
helmCharts.version
Accepts a string. The version of the chart
helmCharts.repo
Accepts a string. The URL used to locate the chart
helmCharts.releaseName
Accepts a string. Replaces RELEASE_NAME in the chart template output
helmCharts.namespace
Accepts a string. Sets the target namespace for a release (.Release.Namespace in the template)
helmCharts.valuesInline
Values to use instead of default values that accompany the chart
helmCharts.valuesFile
Accepts a string. ValuesFile is a local path or a remote URL to a values file to use
instead of the default values that accompanied the chart. The default values
are in CHART_HOME/NAME/values.yaml .
helmCharts.valuesMerge
Accepts merge , override , (default) ,
or replace . ValuesMerge specifies how to treat ValuesInline
with respect to Values.
helmCharts.includeCRDs
Accepts true or false . Specifies if Helm should
also generate CustomResourceDefinitions. The default value is
false .
Render a remote Helm chart
Config Sync supports rendering remote Helm charts on clusters that have
public internet access.
The following kustomization.yaml renders a remote
cert-manager
by setting the following helmCharts fields:
# ./kustomization.yaml
...
helmCharts :
- name : cert-manager
repo : https://charts.jetstack.io
version : v1.5.3
releaseName : my-cert-manager
namespace : cert-manager
...
Render a local Helm chart
Config Sync supports rendering local
Helm charts. To use a customized version of a Helm chart, you can pull the
released version from the Helm chart (for example,
ArtifactHub ), make changes locally, and
then push the changes to your source of truth.
The following diagram shows you the directory structure:
├── base
│ ├── charts
│ │ └── cert-manager
│ └── kustomization.yaml
├── overlays
│ └── stage
│ └── kustomization.yaml
└── base_value_overrides.yaml
The following kustomization.yaml renders a local cert-manager chart. The
default directory for Helm charts is charts and since this chart is checked
into the charts directory, you don't need to specify .helmCharts.repo or
.helmCharts.version .
# ./overlays/stage/kustomization.yaml
...
# This field is optional if your Helm charts are located in the default 'charts' directory.
helmGlobals :
chartHome : ../../base/charts
helmCharts :
- name : cert-manager
releaseName : my-cert-manager
namespace : cert-manager
# Specify a local path or a remote URL to a values file instead of using the default values in CHART_HOME/NAME/values.yaml.
valuesFile : ../../base_value_overrides.yaml
...
Render multiple Helm charts
Config Sync supports rendering multiple Helm charts in one
kustomization.yaml file, regardless of whether the chart is remote or local.
The following kustomization.yaml renders a local Helm chart ( cert-manager ):
# ./kustomization.yaml
...
helmCharts :
- name : cert-manager
releaseName : my-cert-manager
namespace : cert-manager
- name : prometheus
repo : https://prometheus-community.github.io/helm-charts
version : 14.3.0
releaseName : my-prometheus
namespace : monitoring
...
What's next
Use Config Sync with Kustomize and Helm
Use Config Sync in multiple environments with automated rendering
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
