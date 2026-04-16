---
title: "Container \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/rest/v1/Container
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/reference/about-api-versions
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/rest/v1/Container
  title: "Container \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
Container
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
EnvVar
JSON representation
EnvVarSource
JSON representation
ConfigMapKeySelector
JSON representation
SecretKeySelector
JSON representation
ResourceRequirements
JSON representation
ContainerPort
JSON representation
EnvFromSource
JSON representation
ConfigMapEnvSource
JSON representation
SecretEnvSource
JSON representation
VolumeMount
JSON representation
Probe
JSON representation
ExecAction
JSON representation
HTTPGetAction
JSON representation
HTTPHeader
JSON representation
TCPSocketAction
JSON representation
GRPCAction
JSON representation
SecurityContext
JSON representation
A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
JSON representation
{
"name" : string ,
"image" : string ,
"command" : [
string
] ,
"args" : [
string
] ,
"env" : [
{
object ( EnvVar )
}
] ,
"resources" : {
object ( ResourceRequirements )
} ,
"workingDir" : string ,
"ports" : [
{
object ( ContainerPort )
}
] ,
"envFrom" : [
{
object ( EnvFromSource )
}
] ,
"volumeMounts" : [
{
object ( VolumeMount )
}
] ,
"livenessProbe" : {
object ( Probe )
} ,
"readinessProbe" : {
object ( Probe )
} ,
"startupProbe" : {
object ( Probe )
} ,
"terminationMessagePath" : string ,
"terminationMessagePolicy" : string ,
"imagePullPolicy" : string ,
"securityContext" : {
object ( SecurityContext )
}
}
Fields
name
string
Name of the container specified as a DNS_LABEL (RFC 1123).
image
string
Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed.
command[]
string
Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references are not supported in Cloud Run.
args[]
string
Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.
env[]
object ( EnvVar )
List of environment variables to set in the container.
EnvVar with duplicate names are generally allowed; if referencing a secret, the name must be unique for the container. For non-secret EnvVar names, the Container will only get the last-declared one.
resources
object ( ResourceRequirements )
Compute Resources required by this container.
workingDir
string
Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
ports[]
object ( ContainerPort )
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.
envFrom[]
object ( EnvFromSource )
Not supported by Cloud Run.
volumeMounts[]
object ( VolumeMount )
Volume to mount into the container's filesystem. Only supports SecretVolumeSources.
Pod volumes to mount into the container's filesystem.
livenessProbe
object ( Probe )
Periodic probe of container liveness. Container will be restarted if the probe fails.
readinessProbe
object ( Probe )
Readiness probe to be used for health checks.
startupProbe
object ( Probe )
Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not receive traffic if the probe fails. If not provided, a default startup probe with TCP socket action is used.
terminationMessagePath
string
Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log.
terminationMessagePolicy
string
Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
imagePullPolicy
string
Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
securityContext
object ( SecurityContext )
Not supported by Cloud Run.
EnvVar
EnvVar represents an environment variable present in a Container.
JSON representation
{
"name" : string ,
"value" : string ,
"valueFrom" : {
object ( EnvVarSource )
}
}
Fields
name
string
Required. Name of the environment variable.
value
string
Value of the environment variable. Defaults to "". Variable references are not supported in Cloud Run.
valueFrom
object ( EnvVarSource )
Source for the environment variable's value. Only supports secretKeyRef. Cannot be used if value is not empty.
EnvVarSource
EnvVarSource represents a source for the value of an EnvVar.
JSON representation
{
"configMapKeyRef" : {
object ( ConfigMapKeySelector )
} ,
"secretKeyRef" : {
object ( SecretKeySelector )
}
}
Fields
configMapKeyRef
object ( ConfigMapKeySelector )
Not supported by Cloud Run.
Not supported in Cloud Run.
secretKeyRef
object ( SecretKeySelector )
Selects a key (version) of a secret in Secret Manager.
ConfigMapKeySelector
Not supported by Cloud Run.
JSON representation
{
"localObjectReference" : {
object ( LocalObjectReference )
} ,
"key" : string ,
"optional" : boolean ,
"name" : string
}
Fields
localObjectReference (deprecated)
object ( LocalObjectReference )
This item is deprecated!
Not supported by Cloud Run.
key
string
Required. Not supported by Cloud Run.
optional
boolean
Not supported by Cloud Run.
name
string
Required. Not supported by Cloud Run.
SecretKeySelector
SecretKeySelector selects a key of a Secret.
JSON representation
{
"localObjectReference" : {
object ( LocalObjectReference )
} ,
"key" : string ,
"optional" : boolean ,
"name" : string
}
Fields
localObjectReference (deprecated)
object ( LocalObjectReference )
This item is deprecated!
This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
key
string
Required. A Cloud Secret Manager secret version. Must be 'latest' for the latest version, an integer for a specific version, or a version alias.
The key of the secret to select from. Must be a valid secret key.
optional
boolean
Specify whether the Secret or its key must be defined.
name
string
The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects/<project-id|project-number>/secrets/ . If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation.
The name of the secret in the pod's namespace to select from.
ResourceRequirements
ResourceRequirements describes the compute resource requirements.
JSON representation
{
"limits" : {
string : string ,
...
} ,
"requests" : {
string : string ,
...
}
}
Fields
limits
map (key: string, value: string)
Limits describes the maximum amount of compute resources allowed. Only 'cpu', 'memory' and 'nvidia.com/gpu' keys are supported. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu . * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits . * The only supported 'nvidia.com/gpu' value is '1'.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
requests
map (key: string, value: string)
Requests describes the minimum amount of compute resources required. Only cpu and memory are supported. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu . * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
ContainerPort
ContainerPort represents a network port in a single container.
JSON representation
{
"name" : string ,
"containerPort" : integer ,
"protocol" : string
}
Fields
name
string
If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
containerPort
integer
Port number the container listens on. If present, this must be a valid port number, 0 < x < 65536. If not present, it will default to port 8080. For more information, see https://cloud.google.com/run/docs/container-contract#port
protocol
string
Protocol for port. Must be "TCP". Defaults to "TCP".
EnvFromSource
Not supported by Cloud Run.
EnvFromSource represents the source of a set of ConfigMaps
JSON representation
{
"prefix" : string ,
"configMapRef" : {
object ( ConfigMapEnvSource )
} ,
"secretRef" : {
object ( SecretEnvSource )
}
}
Fields
prefix
string
An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
configMapRef
object ( ConfigMapEnvSource )
The ConfigMap to select from
secretRef
object ( SecretEnvSource )
The Secret to select from
ConfigMapEnvSource
Not supported by Cloud Run.
ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
JSON representation
{
"localObjectReference" : {
object ( LocalObjectReference )
} ,
"optional" : boolean ,
"name" : string
}
Fields
localObjectReference (deprecated)
object ( LocalObjectReference )
This item is deprecated!
This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
optional
boolean
Specify whether the ConfigMap must be defined.
name
string
The ConfigMap to select from.
SecretEnvSource
Not supported by Cloud Run.
SecretEnvSource selects a Secret to populate the environment variables with.
The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
JSON representation
{
"localObjectReference" : {
object ( LocalObjectReference )
} ,
"optional" : boolean ,
"name" : string
}
Fields
localObjectReference (deprecated)
object ( LocalObjectReference )
This item is deprecated!
This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
optional
boolean
Specify whether the Secret must be defined
name
string
The Secret to select from.
VolumeMount
VolumeMount describes a mounting of a Volume within a container.
JSON representation
{
"name" : string ,
"readOnly" : boolean ,
"mountPath" : string ,
"subPath" : string
}
Fields
name
string
Required. The name of the volume. There must be a corresponding Volume with the same name.
readOnly
boolean
Sets the mount to be read-only or read-write. Not used by Cloud Run.
mountPath
string
Required. Path within the container at which the volume should be mounted. Must not contain ':'.
subPath
string
Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
This field is currently rejected in Secret volume mounts.
Probe
Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
JSON representation
{
"initialDelaySeconds" : integer ,
"timeoutSeconds" : integer ,
"periodSeconds" : integer ,
"successThreshold" : integer ,
"failureThreshold" : integer ,
"exec" : {
object ( ExecAction )
} ,
"httpGet" : {
object ( HTTPGetAction )
} ,
"tcpSocket" : {
object ( TCPSocketAction )
} ,
"grpc" : {
object ( GRPCAction )
}
}
Fields
initialDelaySeconds
integer
Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.
timeoutSeconds
integer
Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds; if periodSeconds is not set, must be less or equal than 10.
periodSeconds
integer
How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds.
successThreshold
integer
Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set.
failureThreshold
integer
Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
exec
object ( ExecAction )
Not supported by Cloud Run.
httpGet
object ( HTTPGetAction )
HTTPGet specifies the http request to perform.
tcpSocket
object ( TCPSocketAction )
TCPSocket specifies an action involving a TCP port.
grpc
object ( GRPCAction )
GRPCAction specifies an action involving a GRPC port.
ExecAction
Not supported by Cloud Run.
ExecAction describes a "run in container" action.
JSON representation
{
"command" : [
string
]
}
Fields
command[]
string
Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
HTTPGetAction
HTTPGetAction describes an action based on HTTP Get requests.
JSON representation
{
"path" : string ,
"host" : string ,
"scheme" : string ,
"httpHeaders" : [
{
object ( HTTPHeader )
}
] ,
"port" : integer
}
Fields
path
string
Path to access on the HTTP server.
host
string
Not supported by Cloud Run.
scheme
string
Not supported by Cloud Run.
httpHeaders[]
object ( HTTPHeader )
Custom headers to set in the request. HTTP allows repeated headers.
port
integer
Port number to access on the container. Number must be in the range 1 to 65535.
HTTPHeader
HTTPHeader describes a custom header to be used in HTTP probes
JSON representation
{
"name" : string ,
"value" : string
}
Fields
name
string
Required. The header field name
value
string
The header field value
TCPSocketAction
TCPSocketAction describes an action based on opening a socket
JSON representation
{
"port" : integer ,
"host" : string
}
Fields
port
integer
Port number to access on the container. Number must be in the range 1 to 65535.
host
string
Not supported by Cloud Run.
GRPCAction
GRPCAction describes an action involving a GRPC port.
JSON representation
{
"port" : integer ,
"service" : string
}
Fields
port
integer
Port number of the gRPC service. Number must be in the range 1 to 65535.
service
string
Service is the name of the service to place in the gRPC HealthCheckRequest. If this is not specified, the default behavior is defined by gRPC.
SecurityContext
Not supported by Cloud Run.
SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
JSON representation
{
"runAsUser" : integer
}
Fields
runAsUser
integer
The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
