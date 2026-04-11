---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.932Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Maven repositories generally available"
feature_slug: "maven-repositories-generally-available"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
keywords:
  - "generally"
  - "repositories"
  - "available"
  - "maven"
  - "registry"
  - "artifact"
  - "for"
  - "in"
---

# Maven repositories generally available

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Support for Maven repositories in Artifact Registry reaches general availability.

## Extended Definition

Support for Maven repositories in Artifact Registry reaches general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Console To create a cluster using Google Cloud console, perform the following steps: Visit the Artifact Registry menu in Google Cloud console.
- Configuring access to your repository Create a dedicated service account for Jenkins to use with Artifact Registry.
- This page guides you through configuring Jenkins to store built Maven packages in an Artifact Registry repository.
- Create a YAML file as the pod template for Jenkins agents. mkdir jenkins cat > jenkins/maven-pod.yaml << EOF apiVersion: v1 kind: Pod spec: containers: - name: maven image: maven:3.3.9-jdk-8-alpine command: [ 'cat' ] tty: true EOF Modify the file Jenkinsfile . pipeli ne { age nt n o ne s ta ges { s ta ge('Deploy') { s te ps { age nt { kuber netes { label 'mave n pod' yamlFile 'je n ki ns /mave n - pod.yaml' } } co nta i ner ('mave n ') { sh "mvn -B clean deploy" } } } } } Starting a build Push the changes you made to GitHub project. git add . && git commit -m "Configure my Jenkins pipeline" && git push In the Jenkins interface, start a new build for the application in your sample Maven project.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- For more information, view the returnPartialSuccess parameter for the following requests: v1.projects.locations.notes.list v1.projects.locations.occurrences.getVulnerabilitySummary v1.projects.locations.occurrences.list v1.projects.notes.list v1.projects.occurrences.getVulnerabilitySummary v1.projects.occurrences.list v1beta1.projects.locations.notes.list v1beta1.projects.locations.occurrences.getVulnerabilitySummary v1beta1.projects.locations.occurrences.list v1beta1.projects.notes.list v1beta1.projects.occurrences.getVulnerabilitySummary v1beta1.projects.occurrences.list June 25, 2025 v1 Announcement Artifact Registry generic repositories are now generally available .
- For more information, see vulnerability assessment . v1 Feature Artifact Registry remote repositories and virtual repositories for Go are now Generally Available .
- October 03, 2024 v1 Feature Artifact Registry support for OCI specifications v1.1 is generally available in Docker format repositories.
- March 15, 2024 v1 Feature Artifact Registry remote repositories support basic authentication to user-defined and preset upstream sources for Docker, Maven, npm, and Python formats.

