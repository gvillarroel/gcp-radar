---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.490Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Immutable tags for Docker repositories"
feature_slug: "immutable-tags-for-docker-repositories"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient"
keywords:
  - "prevents"
  - "setting"
  - "gained"
  - "immutable"
  - "tags"
  - "repositories"
  - "preview"
  - "docker"
---

# Immutable tags for Docker repositories

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Docker repositories gained a preview immutable tags setting that prevents changing the digest referenced by an image tag.

## Extended Definition

Docker repositories gained a preview immutable tags setting that prevents changing the digest referenced by an image tag.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "immutableTags" : boolean } Fields immutableTags boolean The repository which enabled this flag prevents all tags from being modified, moved or deleted.
- Resource: Repository JSON representation MavenRepositoryConfig JSON representation VersionPolicy DockerRepositoryConfig JSON representation VirtualRepositoryConfig JSON representation UpstreamPolicy JSON representation RemoteRepositoryConfig JSON representation DockerRepository JSON representation PublicRepository CustomRepository JSON representation MavenRepository JSON representation PublicRepository CustomRepository JSON representation NpmRepository JSON representation PublicRepository CustomRepository JSON representation PythonRepository JSON representation PublicRepository CustomRepository JSON representation AptRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation YumRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation CommonRemoteRepository JSON representation UpstreamCredentials JSON representation UsernamePasswordCredentials JSON representation Format Mode CleanupPolicy JSON representation CleanupPolicyCondition JSON representation TagState CleanupPolicyMostRecentVersions JSON representation Action VulnerabilityScanningConfig JSON representation EnablementConfig EnablementState Methods Resource: Repository A Repository for storing artifacts with a specific format.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Settings specific to the remote repository. remote source can be only one of the following: dockerRepository object ( DockerRepository ) Specific settings for a Docker remote repository. mavenRepository object ( MavenRepository ) Specific settings for a Maven remote repository. npmRepository object ( NpmRepository ) Specific settings for an Npm remote repository. pythonRepository object ( PythonRepository ) Specific settings for a Python remote repository. aptRepository object ( AptRepository ) Specific settings for an Apt remote repository. yumRepository object ( YumRepository ) Specific settings for a Yum remote repository. commonRepository object ( CommonRemoteRepository ) Common remote repository settings.

### "Class ArtifactRegistryClient (1.87.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- Source ID: `site-java-reference`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request object method variants only take one parameter, a request object, which must be constructed before the call. updateProjectSettings(UpdateProjectSettingsRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. updateProjectSettings(ProjectSettings projectSettings, FieldMask updateMask) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. updateProjectSettingsCallable() GetVPCSCConfig Retrieves the VPCSC Config for the Project.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. getProjectSettings(GetProjectSettingsRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. getProjectSettings(ProjectSettingsName name) getProjectSettings(String name) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. getProjectSettingsCallable() UpdateProjectSettings Updates the Settings for the Project.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. listRepositories(ListRepositoriesRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. listRepositories(LocationName parent) listRepositories(String parent) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. listRepositoriesPagedCallable() listRepositoriesCallable() GetRepository Gets a repository.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. getDockerImage(GetDockerImageRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. getDockerImage(DockerImageName name) getDockerImage(String name) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. getDockerImageCallable() ListMavenArtifacts Lists maven artifacts.

### Push and pull images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To verify if the setting is enabled for the repository, run the command: gcloud artifacts repositories describe REPOSITORY \ --project = PROJECT-ID \ --location = LOCATION For the example image from the previous step, you would use the following command if the local image my-image is in the current directory: docker tag my-image us-west1-docker.pkg.dev/my-project/my-repo/test-image If you want to apply a specific tag, use the command: docker tag SOURCE-IMAGE LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE : TAG To use the tag staging with the example image, you add :staging to the command: docker tag my-image us-west1-docker.pkg.dev/my-project/my-repo/test-image:staging Push the tagged image to Artifact Registry Note: Artifact Registry does not support Docker chunked uploads .
- If the immutable image tags setting is enabled, tags must be unique for each image version, including the latest tag.
- Obtain an access token for authentication with the repository. curl -s "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token" -H "Metadata-Flavor: Google" Pull the image using crictl pull --creds and the access token value crictl pull --creds "oauth2accesstoken: ACCESS TOKEN " LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE : TAG or crictl pull --creds "oauth2accesstoken: ACCESS TOKEN " LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE @ IMAGE-DIGEST The output looks like the following: Image is up to date for sha256:0f25067aa9c180176967b4b50ed49eed096d43fa8c17be9a5fa9bff05933bee5 What's next Learn about managing tags and deleting images .
- For example, consider a virtual repository with the following priority settings for upstream repositories: main-repo : Priority set to 100 secondary-repo1 : Priority set to 80 . secondary-repo2 : Priority set to 80 . test-repo : Priority set to 20 . main-repo has the highest priority value, so the virtual repository always searches it first.

