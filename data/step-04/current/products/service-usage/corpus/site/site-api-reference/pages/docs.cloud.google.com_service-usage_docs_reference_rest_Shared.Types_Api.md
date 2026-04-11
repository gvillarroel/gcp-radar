---
title: "Api \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Api
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Api
  title: "Api \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
Api
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Method
JSON representation
Option
JSON representation
SourceContext
JSON representation
Mixin
JSON representation
Api is a light-weight descriptor for an API Interface.
Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
New usages of this message as an alternative to ServiceDescriptorProto are strongly discouraged. This message does not reliability preserve all information necessary to model the schema and preserve semantics. Instead make use of FileDescriptorSet which preserves the necessary information.
JSON representation
{
"name" : string ,
"methods" : [
{
object ( Method )
}
] ,
"options" : [
{
object ( Option )
}
] ,
"version" : string ,
"sourceContext" : {
object ( SourceContext )
} ,
"mixins" : [
{
object ( Mixin )
}
] ,
"syntax" : enum ( Syntax ) ,
"edition" : string
}
Fields
name
string
The fully qualified name of this interface, including package name followed by the interface's simple name.
methods[]
object ( Method )
The methods of this interface, in unspecified order.
options[]
object ( Option )
Any metadata attached to the interface.
version
string
A version string for this interface. If specified, must have the form major-version.minor-version , as in 1.10 . If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here.
The versioning schema uses semantic versioning where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan.
The major version is also reflected in the package name of the interface, which must end in v<major-version> , as in google.feature.v1 . For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces.
sourceContext
object ( SourceContext )
Source context for the protocol buffer service represented by this message.
mixins[]
object ( Mixin )
Included interfaces. See Mixin .
syntax
enum ( Syntax )
The source syntax of the service.
edition
string
The source edition string, only valid when syntax is SYNTAX_EDITIONS.
Method
Method represents a method of an API interface.
New usages of this message as an alternative to MethodDescriptorProto are strongly discouraged. This message does not reliability preserve all information necessary to model the schema and preserve semantics. Instead make use of FileDescriptorSet which preserves the necessary information.
JSON representation
{
"name" : string ,
"requestTypeUrl" : string ,
"requestStreaming" : boolean ,
"responseTypeUrl" : string ,
"responseStreaming" : boolean ,
"options" : [
{
object ( Option )
}
] ,
"syntax" : enum ( Syntax ) ,
"edition" : string
}
Fields
name
string
The simple name of this method.
requestTypeUrl
string
A URL of the input message type.
requestStreaming
boolean
If true, the request is streamed.
responseTypeUrl
string
The URL of the output message type.
responseStreaming
boolean
If true, the response is streamed.
options[]
object ( Option )
Any metadata attached to the method.
syntax (deprecated)
enum ( Syntax )
This item is deprecated!
The source syntax of this method.
This field should be ignored, instead the syntax should be inherited from Api. This is similar to Field and EnumValue.
edition (deprecated)
string
This item is deprecated!
The source edition string, only valid when syntax is SYNTAX_EDITIONS.
This field should be ignored, instead the edition should be inherited from Api. This is similar to Field and EnumValue.
Option
A protocol buffer option, which can be attached to a message, field, enumeration, etc.
New usages of this message as an alternative to FileOptions, MessageOptions, FieldOptions, EnumOptions, EnumValueOptions, ServiceOptions, or MethodOptions are strongly discouraged.
JSON representation
{
"name" : string ,
"value" : {
"@type" : string ,
field1 : ... ,
...
}
}
Fields
name
string
The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "mapEntry" . For custom options, it should be the fully-qualified name. For example, "google.api.http" .
value
object
The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
SourceContext
SourceContext represents information about the source of a protobuf element, like the file in which it is defined.
JSON representation
{
"fileName" : string
}
Fields
fileName
string
The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/sourceContext.proto" .
Mixin
Declares an API Interface to be included in this interface. The including interface must redeclare all the methods from the included interface, but documentation and options are inherited as follows:
If after comment and whitespace stripping, the documentation string of the redeclared method is empty, it will be inherited from the original method.
Each annotation belonging to the service config (http, visibility) which is not set in the redeclared method will be inherited.
If an http annotation is inherited, the path pattern will be modified as follows. Any version prefix will be replaced by the version of the including interface plus the root path if specified.
Example of a simple mixin:
package google.acl.v1;
service AccessControl {
// Get the underlying ACL object.
rpc GetAcl(GetAclRequest) returns (Acl) {
option (google.api.http).get = "/v1/{resource=**}:getAcl";
}
}
package google.storage.v2;
service Storage {
// rpc GetAcl(GetAclRequest) returns (Acl);
// Get a data record.
rpc GetData(GetDataRequest) returns (Data) {
option (google.api.http).get = "/v2/{resource=**}";
}
}
Example of a mixin configuration:
apis:
- name: google.storage.v2.Storage
mixins:
- name: google.acl.v1.AccessControl
The mixin construct implies that all methods in AccessControl are also declared with same name and request/response types in Storage . A documentation generator or annotation processor will see the effective Storage.GetAcl method after inheriting documentation and annotations as follows:
service Storage {
// Get the underlying ACL object.
rpc GetAcl(GetAclRequest) returns (Acl) {
option (google.api.http).get = "/v2/{resource=**}:getAcl";
}
...
}
Note how the version in the path pattern changed from v1 to v2 .
If the root field in the mixin is specified, it should be a relative path under which inherited HTTP paths are placed. Example:
apis:
- name: google.storage.v2.Storage
mixins:
- name: google.acl.v1.AccessControl
root: acls
This implies the following inherited HTTP annotation:
service Storage {
// Get the underlying ACL object.
rpc GetAcl(GetAclRequest) returns (Acl) {
option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
}
...
}
JSON representation
{
"name" : string ,
"root" : string
}
Fields
name
string
The fully qualified name of the interface which is included.
root
string
If non-empty specifies a path under which inherited HTTP paths are rooted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
