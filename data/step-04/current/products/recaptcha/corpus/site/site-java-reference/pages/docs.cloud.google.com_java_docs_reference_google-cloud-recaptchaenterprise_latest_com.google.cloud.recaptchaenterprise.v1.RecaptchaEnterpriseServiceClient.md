---
title: "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient
  title: "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class RecaptchaEnterpriseServiceClient (3.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.85.0 (latest)
3.84.0
3.82.0
3.80.0
3.79.0
3.77.0
3.75.0
3.73.0
3.72.0
3.71.0
3.70.0
3.69.0
3.67.0
3.65.0
3.64.0
3.61.0
3.60.0
3.59.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.0
3.49.0
3.48.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.0
3.39.0
3.38.0
3.37.0
3.36.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.0
3.26.0
3.25.0
3.24.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.8.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.12
2.6.1
2.5.0
2.4.10
2.3.1
GitHub Repository Product Reference REST Documentation RPC Documentation
Service Description: Service to determine the likelihood an event is legitimate.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
Assessment assessment = Assessment . newBuilder (). build ();
Assessment response = recaptchaEnterpriseServiceClient . createAssessment ( parent , assessment );
}
Note: close() needs to be called on the RecaptchaEnterpriseServiceClient object to clean up
resources such as threads. In the example above, try-with-resources is used, which automatically
calls close().
Methods
Method
Description
Method Variants
CreateAssessment
Creates an Assessment of the likelihood an event is legitimate.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createAssessment(CreateAssessmentRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createAssessment(ProjectName parent, Assessment assessment)
createAssessment(String parent, Assessment assessment)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createAssessmentCallable()
AnnotateAssessment
Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
annotateAssessment(AnnotateAssessmentRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
annotateAssessment(AssessmentName name, AnnotateAssessmentRequest.Annotation annotation)
annotateAssessment(String name, AnnotateAssessmentRequest.Annotation annotation)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
annotateAssessmentCallable()
CreateKey
Creates a new reCAPTCHA Enterprise key.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createKey(CreateKeyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createKey(ProjectName parent, Key key)
createKey(String parent, Key key)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createKeyCallable()
ListKeys
Returns the list of all keys that belong to a project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listKeys(ListKeysRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listKeys(ProjectName parent)
listKeys(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listKeysPagedCallable()
listKeysCallable()
RetrieveLegacySecretKey
Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
retrieveLegacySecretKey(RetrieveLegacySecretKeyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
retrieveLegacySecretKey(KeyName key)
retrieveLegacySecretKey(String key)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
retrieveLegacySecretKeyCallable()
GetKey
Returns the specified key.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getKey(GetKeyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getKey(KeyName name)
getKey(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getKeyCallable()
UpdateKey
Updates the specified key.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateKey(UpdateKeyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateKey(Key key, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateKeyCallable()
DeleteKey
Deletes the specified key.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteKey(DeleteKeyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteKey(KeyName name)
deleteKey(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteKeyCallable()
MigrateKey
Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
migrateKey(MigrateKeyRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
migrateKeyCallable()
AddIpOverride
Adds an IP override to a key. The following restrictions hold:
The maximum number of IP overrides per key is 1000.
For any conflict (such as IP already exists or IP part of an existing IP range), an error is returned.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
addIpOverride(AddIpOverrideRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
addIpOverride(KeyName name, IpOverrideData ipOverrideData)
addIpOverride(String name, IpOverrideData ipOverrideData)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
addIpOverrideCallable()
RemoveIpOverride
Removes an IP override from a key. The following restrictions hold:
If the IP isn't found in an existing IP override, a NOT_FOUND error is returned.
If the IP is found in an existing IP override, but the override type does not match, a NOT_FOUND error is returned.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
removeIpOverride(RemoveIpOverrideRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
removeIpOverride(KeyName name, IpOverrideData ipOverrideData)
removeIpOverride(String name, IpOverrideData ipOverrideData)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
removeIpOverrideCallable()
ListIpOverrides
Lists all IP overrides for a key.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listIpOverrides(ListIpOverridesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listIpOverrides(KeyName parent)
listIpOverrides(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listIpOverridesPagedCallable()
listIpOverridesCallable()
GetMetrics
Get some aggregated metrics for a Key. This data can be used to build dashboards.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getMetrics(GetMetricsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getMetrics(MetricsName name)
getMetrics(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getMetricsCallable()
CreateFirewallPolicy
Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createFirewallPolicy(CreateFirewallPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createFirewallPolicy(ProjectName parent, FirewallPolicy firewallPolicy)
createFirewallPolicy(String parent, FirewallPolicy firewallPolicy)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createFirewallPolicyCallable()
ListFirewallPolicies
Returns the list of all firewall policies that belong to a project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listFirewallPolicies(ListFirewallPoliciesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listFirewallPolicies(ProjectName parent)
listFirewallPolicies(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listFirewallPoliciesPagedCallable()
listFirewallPoliciesCallable()
GetFirewallPolicy
Returns the specified firewall policy.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getFirewallPolicy(GetFirewallPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getFirewallPolicy(FirewallPolicyName name)
getFirewallPolicy(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getFirewallPolicyCallable()
UpdateFirewallPolicy
Updates the specified firewall policy.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateFirewallPolicy(UpdateFirewallPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateFirewallPolicy(FirewallPolicy firewallPolicy, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateFirewallPolicyCallable()
DeleteFirewallPolicy
Deletes the specified firewall policy.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteFirewallPolicy(DeleteFirewallPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteFirewallPolicy(FirewallPolicyName name)
deleteFirewallPolicy(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteFirewallPolicyCallable()
ReorderFirewallPolicies
Reorders all firewall policies.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
reorderFirewallPolicies(ReorderFirewallPoliciesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
reorderFirewallPolicies(ProjectName parent, List<String> names)
reorderFirewallPolicies(String parent, List<String> names)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
reorderFirewallPoliciesCallable()
ListRelatedAccountGroups
List groups of related accounts.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listRelatedAccountGroups(ListRelatedAccountGroupsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listRelatedAccountGroups(ProjectName parent)
listRelatedAccountGroups(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listRelatedAccountGroupsPagedCallable()
listRelatedAccountGroupsCallable()
ListRelatedAccountGroupMemberships
Get memberships in a group of related accounts.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listRelatedAccountGroupMemberships(ListRelatedAccountGroupMembershipsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listRelatedAccountGroupMemberships(RelatedAccountGroupName parent)
listRelatedAccountGroupMemberships(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listRelatedAccountGroupMembershipsPagedCallable()
listRelatedAccountGroupMembershipsCallable()
SearchRelatedAccountGroupMemberships
Search group memberships related to a given account.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
searchRelatedAccountGroupMemberships(SearchRelatedAccountGroupMembershipsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
searchRelatedAccountGroupMemberships(ProjectName project, ByteString hashedAccountId)
searchRelatedAccountGroupMemberships(String project, ByteString hashedAccountId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
searchRelatedAccountGroupMembershipsPagedCallable()
searchRelatedAccountGroupMembershipsCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of
RecaptchaEnterpriseServiceSettings to create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings =
RecaptchaEnterpriseServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings =
RecaptchaEnterpriseServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
RecaptchaEnterpriseServiceClient
Static Methods
create()
public static final RecaptchaEnterpriseServiceClient create ()
Constructs an instance of RecaptchaEnterpriseServiceClient with default settings.
Returns
Type
Description
RecaptchaEnterpriseServiceClient
Exceptions
Type
Description
IOException
create(RecaptchaEnterpriseServiceSettings settings)
public static final RecaptchaEnterpriseServiceClient create ( RecaptchaEnterpriseServiceSettings settings )
Constructs an instance of RecaptchaEnterpriseServiceClient, using the given settings. The
channels are created based on the settings passed in, or defaults for any settings that are not
set.
Parameter
Name
Description
settings
RecaptchaEnterpriseServiceSettings
Returns
Type
Description
RecaptchaEnterpriseServiceClient
Exceptions
Type
Description
IOException
create(RecaptchaEnterpriseServiceStub stub)
public static final RecaptchaEnterpriseServiceClient create ( RecaptchaEnterpriseServiceStub stub )
Constructs an instance of RecaptchaEnterpriseServiceClient, using the given stub for making
calls. This is for advanced usage - prefer using create(RecaptchaEnterpriseServiceSettings).
Parameter
Name
Description
stub
RecaptchaEnterpriseServiceStub
Returns
Type
Description
RecaptchaEnterpriseServiceClient
Constructors
RecaptchaEnterpriseServiceClient(RecaptchaEnterpriseServiceSettings settings)
protected RecaptchaEnterpriseServiceClient ( RecaptchaEnterpriseServiceSettings settings )
Constructs an instance of RecaptchaEnterpriseServiceClient, using the given settings. This is
protected so that it is easy to make a subclass, but otherwise, the static factory methods
should be preferred.
Parameter
Name
Description
settings
RecaptchaEnterpriseServiceSettings
RecaptchaEnterpriseServiceClient(RecaptchaEnterpriseServiceStub stub)
protected RecaptchaEnterpriseServiceClient ( RecaptchaEnterpriseServiceStub stub )
Parameter
Name
Description
stub
RecaptchaEnterpriseServiceStub
Methods
addIpOverride(AddIpOverrideRequest request)
public final AddIpOverrideResponse addIpOverride ( AddIpOverrideRequest request )
Adds an IP override to a key. The following restrictions hold:
The maximum number of IP overrides per key is 1000.
For any conflict (such as IP already exists or IP part of an existing IP range), an error
is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
AddIpOverrideRequest request =
AddIpOverrideRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setIpOverrideData ( IpOverrideData . newBuilder (). build ())
. build ();
AddIpOverrideResponse response = recaptchaEnterpriseServiceClient . addIpOverride ( request );
}
Parameter
Name
Description
request
AddIpOverrideRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AddIpOverrideResponse
addIpOverride(KeyName name, IpOverrideData ipOverrideData)
public final AddIpOverrideResponse addIpOverride ( KeyName name , IpOverrideData ipOverrideData )
Adds an IP override to a key. The following restrictions hold:
The maximum number of IP overrides per key is 1000.
For any conflict (such as IP already exists or IP part of an existing IP range), an error
is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
KeyName name = KeyName . of ( "[PROJECT]" , "[KEY]" );
IpOverrideData ipOverrideData = IpOverrideData . newBuilder (). build ();
AddIpOverrideResponse response =
recaptchaEnterpriseServiceClient . addIpOverride ( name , ipOverrideData );
}
Parameters
Name
Description
name
KeyName Required. The name of the key to which the IP override is added, in the format
projects/{project}/keys/{key} .
ipOverrideData
IpOverrideData Required. IP override added to the key.
Returns
Type
Description
AddIpOverrideResponse
addIpOverride(String name, IpOverrideData ipOverrideData)
public final AddIpOverrideResponse addIpOverride ( String name , IpOverrideData ipOverrideData )
Adds an IP override to a key. The following restrictions hold:
The maximum number of IP overrides per key is 1000.
For any conflict (such as IP already exists or IP part of an existing IP range), an error
is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ();
IpOverrideData ipOverrideData = IpOverrideData . newBuilder (). build ();
AddIpOverrideResponse response =
recaptchaEnterpriseServiceClient . addIpOverride ( name , ipOverrideData );
}
Parameters
Name
Description
name
String Required. The name of the key to which the IP override is added, in the format
projects/{project}/keys/{key} .
ipOverrideData
IpOverrideData Required. IP override added to the key.
Returns
Type
Description
AddIpOverrideResponse
addIpOverrideCallable()
public final UnaryCallable<AddIpOverrideRequest , AddIpOverrideResponse > addIpOverrideCallable ()
Adds an IP override to a key. The following restrictions hold:
The maximum number of IP overrides per key is 1000.
For any conflict (such as IP already exists or IP part of an existing IP range), an error
is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
AddIpOverrideRequest request =
AddIpOverrideRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setIpOverrideData ( IpOverrideData . newBuilder (). build ())
. build ();
ApiFuture<AddIpOverrideResponse> future =
recaptchaEnterpriseServiceClient . addIpOverrideCallable (). futureCall ( request );
// Do something.
AddIpOverrideResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < AddIpOverrideRequest , AddIpOverrideResponse >
annotateAssessment(AnnotateAssessmentRequest request)
public final AnnotateAssessmentResponse annotateAssessment ( AnnotateAssessmentRequest request )
Annotates a previously created Assessment to provide additional information on whether the
event turned out to be authentic or fraudulent.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
AnnotateAssessmentRequest request =
AnnotateAssessmentRequest . newBuilder ()
. setName ( AssessmentName . of ( "[PROJECT]" , "[ASSESSMENT]" ). toString ())
. addAllReasons ( new ArrayList<AnnotateAssessmentRequest . Reason > ())
. setAccountId ( "accountId-1827029976" )
. setHashedAccountId ( ByteString . EMPTY )
. setTransactionEvent ( TransactionEvent . newBuilder (). build ())
. setPhoneAuthenticationEvent ( PhoneAuthenticationEvent . newBuilder (). build ())
. build ();
AnnotateAssessmentResponse response =
recaptchaEnterpriseServiceClient . annotateAssessment ( request );
}
Parameter
Name
Description
request
AnnotateAssessmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AnnotateAssessmentResponse
annotateAssessment(AssessmentName name, AnnotateAssessmentRequest.Annotation annotation)
public final AnnotateAssessmentResponse annotateAssessment ( AssessmentName name , AnnotateAssessmentRequest . Annotation annotation )
Annotates a previously created Assessment to provide additional information on whether the
event turned out to be authentic or fraudulent.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
AssessmentName name = AssessmentName . of ( "[PROJECT]" , "[ASSESSMENT]" );
AnnotateAssessmentRequest . Annotation annotation =
AnnotateAssessmentRequest . Annotation . forNumber ( 0 );
AnnotateAssessmentResponse response =
recaptchaEnterpriseServiceClient . annotateAssessment ( name , annotation );
}
Parameters
Name
Description
name
AssessmentName Required. The resource name of the Assessment, in the format
projects/{project}/assessments/{assessment} .
annotation
AnnotateAssessmentRequest.Annotation Optional. The annotation that is assigned to the Event. This field can be
left empty to provide reasons that apply to an event without concluding whether the event
is legitimate or fraudulent.
Returns
Type
Description
AnnotateAssessmentResponse
annotateAssessment(String name, AnnotateAssessmentRequest.Annotation annotation)
public final AnnotateAssessmentResponse annotateAssessment ( String name , AnnotateAssessmentRequest . Annotation annotation )
Annotates a previously created Assessment to provide additional information on whether the
event turned out to be authentic or fraudulent.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = AssessmentName . of ( "[PROJECT]" , "[ASSESSMENT]" ). toString ();
AnnotateAssessmentRequest . Annotation annotation =
AnnotateAssessmentRequest . Annotation . forNumber ( 0 );
AnnotateAssessmentResponse response =
recaptchaEnterpriseServiceClient . annotateAssessment ( name , annotation );
}
Parameters
Name
Description
name
String Required. The resource name of the Assessment, in the format
projects/{project}/assessments/{assessment} .
annotation
AnnotateAssessmentRequest.Annotation Optional. The annotation that is assigned to the Event. This field can be
left empty to provide reasons that apply to an event without concluding whether the event
is legitimate or fraudulent.
Returns
Type
Description
AnnotateAssessmentResponse
annotateAssessmentCallable()
public final UnaryCallable<AnnotateAssessmentRequest , AnnotateAssessmentResponse > annotateAssessmentCallable ()
Annotates a previously created Assessment to provide additional information on whether the
event turned out to be authentic or fraudulent.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
AnnotateAssessmentRequest request =
AnnotateAssessmentRequest . newBuilder ()
. setName ( AssessmentName . of ( "[PROJECT]" , "[ASSESSMENT]" ). toString ())
. addAllReasons ( new ArrayList<AnnotateAssessmentRequest . Reason > ())
. setAccountId ( "accountId-1827029976" )
. setHashedAccountId ( ByteString . EMPTY )
. setTransactionEvent ( TransactionEvent . newBuilder (). build ())
. setPhoneAuthenticationEvent ( PhoneAuthenticationEvent . newBuilder (). build ())
. build ();
ApiFuture<AnnotateAssessmentResponse> future =
recaptchaEnterpriseServiceClient . annotateAssessmentCallable (). futureCall ( request );
// Do something.
AnnotateAssessmentResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < AnnotateAssessmentRequest , AnnotateAssessmentResponse >
awaitTermination(long duration, TimeUnit unit)
public boolean awaitTermination ( long duration , TimeUnit unit )
Parameters
Name
Description
duration
long
unit
TimeUnit
Returns
Type
Description
boolean
Exceptions
Type
Description
InterruptedException
close()
public final void close ()
createAssessment(CreateAssessmentRequest request)
public final Assessment createAssessment ( CreateAssessmentRequest request )
Creates an Assessment of the likelihood an event is legitimate.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
CreateAssessmentRequest request =
CreateAssessmentRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setAssessment ( Assessment . newBuilder (). build ())
. build ();
Assessment response = recaptchaEnterpriseServiceClient . createAssessment ( request );
}
Parameter
Name
Description
request
CreateAssessmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Assessment
createAssessment(ProjectName parent, Assessment assessment)
public final Assessment createAssessment ( ProjectName parent , Assessment assessment )
Creates an Assessment of the likelihood an event is legitimate.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
Assessment assessment = Assessment . newBuilder (). build ();
Assessment response = recaptchaEnterpriseServiceClient . createAssessment ( parent , assessment );
}
Parameters
Name
Description
parent
ProjectName Required. The name of the project in which the assessment is created, in the
format projects/{project} .
assessment
Assessment Required. The assessment details.
Returns
Type
Description
Assessment
createAssessment(String parent, Assessment assessment)
public final Assessment createAssessment ( String parent , Assessment assessment )
Creates an Assessment of the likelihood an event is legitimate.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
Assessment assessment = Assessment . newBuilder (). build ();
Assessment response = recaptchaEnterpriseServiceClient . createAssessment ( parent , assessment );
}
Parameters
Name
Description
parent
String Required. The name of the project in which the assessment is created, in the
format projects/{project} .
assessment
Assessment Required. The assessment details.
Returns
Type
Description
Assessment
createAssessmentCallable()
public final UnaryCallable<CreateAssessmentRequest , Assessment > createAssessmentCallable ()
Creates an Assessment of the likelihood an event is legitimate.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
CreateAssessmentRequest request =
CreateAssessmentRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setAssessment ( Assessment . newBuilder (). build ())
. build ();
ApiFuture<Assessment> future =
recaptchaEnterpriseServiceClient . createAssessmentCallable (). futureCall ( request );
// Do something.
Assessment response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateAssessmentRequest , Assessment >
createFirewallPolicy(CreateFirewallPolicyRequest request)
public final FirewallPolicy createFirewallPolicy ( CreateFirewallPolicyRequest request )
Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can
be executed. A project may have a maximum of 1000 policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
CreateFirewallPolicyRequest request =
CreateFirewallPolicyRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setFirewallPolicy ( FirewallPolicy . newBuilder (). build ())
. build ();
FirewallPolicy response = recaptchaEnterpriseServiceClient . createFirewallPolicy ( request );
}
Parameter
Name
Description
request
CreateFirewallPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
FirewallPolicy
createFirewallPolicy(ProjectName parent, FirewallPolicy firewallPolicy)
public final FirewallPolicy createFirewallPolicy ( ProjectName parent , FirewallPolicy firewallPolicy )
Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can
be executed. A project may have a maximum of 1000 policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
FirewallPolicy firewallPolicy = FirewallPolicy . newBuilder (). build ();
FirewallPolicy response =
recaptchaEnterpriseServiceClient . createFirewallPolicy ( parent , firewallPolicy );
}
Parameters
Name
Description
parent
ProjectName Required. The name of the project this policy applies to, in the format
projects/{project} .
firewallPolicy
FirewallPolicy Required. Information to create the policy.
Returns
Type
Description
FirewallPolicy
createFirewallPolicy(String parent, FirewallPolicy firewallPolicy)
public final FirewallPolicy createFirewallPolicy ( String parent , FirewallPolicy firewallPolicy )
Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can
be executed. A project may have a maximum of 1000 policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
FirewallPolicy firewallPolicy = FirewallPolicy . newBuilder (). build ();
FirewallPolicy response =
recaptchaEnterpriseServiceClient . createFirewallPolicy ( parent , firewallPolicy );
}
Parameters
Name
Description
parent
String Required. The name of the project this policy applies to, in the format
projects/{project} .
firewallPolicy
FirewallPolicy Required. Information to create the policy.
Returns
Type
Description
FirewallPolicy
createFirewallPolicyCallable()
public final UnaryCallable<CreateFirewallPolicyRequest , FirewallPolicy > createFirewallPolicyCallable ()
Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can
be executed. A project may have a maximum of 1000 policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
CreateFirewallPolicyRequest request =
CreateFirewallPolicyRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setFirewallPolicy ( FirewallPolicy . newBuilder (). build ())
. build ();
ApiFuture<FirewallPolicy> future =
recaptchaEnterpriseServiceClient . createFirewallPolicyCallable (). futureCall ( request );
// Do something.
FirewallPolicy response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateFirewallPolicyRequest , FirewallPolicy >
createKey(CreateKeyRequest request)
public final Key createKey ( CreateKeyRequest request )
Creates a new reCAPTCHA Enterprise key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
CreateKeyRequest request =
CreateKeyRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setKey ( Key . newBuilder (). build ())
. build ();
Key response = recaptchaEnterpriseServiceClient . createKey ( request );
}
Parameter
Name
Description
request
CreateKeyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Key
createKey(ProjectName parent, Key key)
public final Key createKey ( ProjectName parent , Key key )
Creates a new reCAPTCHA Enterprise key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
Key key = Key . newBuilder (). build ();
Key response = recaptchaEnterpriseServiceClient . createKey ( parent , key );
}
Parameters
Name
Description
parent
ProjectName Required. The name of the project in which the key is created, in the format
projects/{project} .
key
Key Required. Information to create a reCAPTCHA Enterprise key.
Returns
Type
Description
Key
createKey(String parent, Key key)
public final Key createKey ( String parent , Key key )
Creates a new reCAPTCHA Enterprise key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
Key key = Key . newBuilder (). build ();
Key response = recaptchaEnterpriseServiceClient . createKey ( parent , key );
}
Parameters
Name
Description
parent
String Required. The name of the project in which the key is created, in the format
projects/{project} .
key
Key Required. Information to create a reCAPTCHA Enterprise key.
Returns
Type
Description
Key
createKeyCallable()
public final UnaryCallable<CreateKeyRequest , Key > createKeyCallable ()
Creates a new reCAPTCHA Enterprise key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
CreateKeyRequest request =
CreateKeyRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setKey ( Key . newBuilder (). build ())
. build ();
ApiFuture<Key> future =
recaptchaEnterpriseServiceClient . createKeyCallable (). futureCall ( request );
// Do something.
Key response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateKeyRequest , Key >
deleteFirewallPolicy(DeleteFirewallPolicyRequest request)
public final void deleteFirewallPolicy ( DeleteFirewallPolicyRequest request )
Deletes the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
DeleteFirewallPolicyRequest request =
DeleteFirewallPolicyRequest . newBuilder ()
. setName ( FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" ). toString ())
. build ();
recaptchaEnterpriseServiceClient . deleteFirewallPolicy ( request );
}
Parameter
Name
Description
request
DeleteFirewallPolicyRequest The request object containing all of the parameters for the API call.
deleteFirewallPolicy(FirewallPolicyName name)
public final void deleteFirewallPolicy ( FirewallPolicyName name )
Deletes the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
FirewallPolicyName name = FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" );
recaptchaEnterpriseServiceClient . deleteFirewallPolicy ( name );
}
Parameter
Name
Description
name
FirewallPolicyName Required. The name of the policy to be deleted, in the format
projects/{project}/firewallpolicies/{firewallpolicy} .
deleteFirewallPolicy(String name)
public final void deleteFirewallPolicy ( String name )
Deletes the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" ). toString ();
recaptchaEnterpriseServiceClient . deleteFirewallPolicy ( name );
}
Parameter
Name
Description
name
String Required. The name of the policy to be deleted, in the format
projects/{project}/firewallpolicies/{firewallpolicy} .
deleteFirewallPolicyCallable()
public final UnaryCallable<DeleteFirewallPolicyRequest , Empty > deleteFirewallPolicyCallable ()
Deletes the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
DeleteFirewallPolicyRequest request =
DeleteFirewallPolicyRequest . newBuilder ()
. setName ( FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" ). toString ())
. build ();
ApiFuture<Empty> future =
recaptchaEnterpriseServiceClient . deleteFirewallPolicyCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteFirewallPolicyRequest , Empty >
deleteKey(DeleteKeyRequest request)
public final void deleteKey ( DeleteKeyRequest request )
Deletes the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
DeleteKeyRequest request =
DeleteKeyRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. build ();
recaptchaEnterpriseServiceClient . deleteKey ( request );
}
Parameter
Name
Description
request
DeleteKeyRequest The request object containing all of the parameters for the API call.
deleteKey(KeyName name)
public final void deleteKey ( KeyName name )
Deletes the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
KeyName name = KeyName . of ( "[PROJECT]" , "[KEY]" );
recaptchaEnterpriseServiceClient . deleteKey ( name );
}
Parameter
Name
Description
name
KeyName Required. The name of the key to be deleted, in the format
projects/{project}/keys/{key} .
deleteKey(String name)
public final void deleteKey ( String name )
Deletes the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ();
recaptchaEnterpriseServiceClient . deleteKey ( name );
}
Parameter
Name
Description
name
String Required. The name of the key to be deleted, in the format
projects/{project}/keys/{key} .
deleteKeyCallable()
public final UnaryCallable<DeleteKeyRequest , Empty > deleteKeyCallable ()
Deletes the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
DeleteKeyRequest request =
DeleteKeyRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. build ();
ApiFuture<Empty> future =
recaptchaEnterpriseServiceClient . deleteKeyCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteKeyRequest , Empty >
getFirewallPolicy(FirewallPolicyName name)
public final FirewallPolicy getFirewallPolicy ( FirewallPolicyName name )
Returns the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
FirewallPolicyName name = FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" );
FirewallPolicy response = recaptchaEnterpriseServiceClient . getFirewallPolicy ( name );
}
Parameter
Name
Description
name
FirewallPolicyName Required. The name of the requested policy, in the format
projects/{project}/firewallpolicies/{firewallpolicy} .
Returns
Type
Description
FirewallPolicy
getFirewallPolicy(GetFirewallPolicyRequest request)
public final FirewallPolicy getFirewallPolicy ( GetFirewallPolicyRequest request )
Returns the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
GetFirewallPolicyRequest request =
GetFirewallPolicyRequest . newBuilder ()
. setName ( FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" ). toString ())
. build ();
FirewallPolicy response = recaptchaEnterpriseServiceClient . getFirewallPolicy ( request );
}
Parameter
Name
Description
request
GetFirewallPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
FirewallPolicy
getFirewallPolicy(String name)
public final FirewallPolicy getFirewallPolicy ( String name )
Returns the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" ). toString ();
FirewallPolicy response = recaptchaEnterpriseServiceClient . getFirewallPolicy ( name );
}
Parameter
Name
Description
name
String Required. The name of the requested policy, in the format
projects/{project}/firewallpolicies/{firewallpolicy} .
Returns
Type
Description
FirewallPolicy
getFirewallPolicyCallable()
public final UnaryCallable<GetFirewallPolicyRequest , FirewallPolicy > getFirewallPolicyCallable ()
Returns the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
GetFirewallPolicyRequest request =
GetFirewallPolicyRequest . newBuilder ()
. setName ( FirewallPolicyName . of ( "[PROJECT]" , "[FIREWALLPOLICY]" ). toString ())
. build ();
ApiFuture<FirewallPolicy> future =
recaptchaEnterpriseServiceClient . getFirewallPolicyCallable (). futureCall ( request );
// Do something.
FirewallPolicy response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetFirewallPolicyRequest , FirewallPolicy >
getKey(GetKeyRequest request)
public final Key getKey ( GetKeyRequest request )
Returns the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
GetKeyRequest request =
GetKeyRequest . newBuilder (). setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ()). build ();
Key response = recaptchaEnterpriseServiceClient . getKey ( request );
}
Parameter
Name
Description
request
GetKeyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Key
getKey(KeyName name)
public final Key getKey ( KeyName name )
Returns the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
KeyName name = KeyName . of ( "[PROJECT]" , "[KEY]" );
Key response = recaptchaEnterpriseServiceClient . getKey ( name );
}
Parameter
Name
Description
name
KeyName Required. The name of the requested key, in the format
projects/{project}/keys/{key} .
Returns
Type
Description
Key
getKey(String name)
public final Key getKey ( String name )
Returns the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ();
Key response = recaptchaEnterpriseServiceClient . getKey ( name );
}
Parameter
Name
Description
name
String Required. The name of the requested key, in the format
projects/{project}/keys/{key} .
Returns
Type
Description
Key
getKeyCallable()
public final UnaryCallable<GetKeyRequest , Key > getKeyCallable ()
Returns the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
GetKeyRequest request =
GetKeyRequest . newBuilder (). setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ()). build ();
ApiFuture<Key> future = recaptchaEnterpriseServiceClient . getKeyCallable (). futureCall ( request );
// Do something.
Key response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetKeyRequest , Key >
getMetrics(GetMetricsRequest request)
public final Metrics getMetrics ( GetMetricsRequest request )
Get some aggregated metrics for a Key. This data can be used to build dashboards.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
GetMetricsRequest request =
GetMetricsRequest . newBuilder ()
. setName ( MetricsName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. build ();
Metrics response = recaptchaEnterpriseServiceClient . getMetrics ( request );
}
Parameter
Name
Description
request
GetMetricsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Metrics
getMetrics(MetricsName name)
public final Metrics getMetrics ( MetricsName name )
Get some aggregated metrics for a Key. This data can be used to build dashboards.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
MetricsName name = MetricsName . of ( "[PROJECT]" , "[KEY]" );
Metrics response = recaptchaEnterpriseServiceClient . getMetrics ( name );
}
Parameter
Name
Description
name
MetricsName Required. The name of the requested metrics, in the format
projects/{project}/keys/{key}/metrics .
Returns
Type
Description
Metrics
getMetrics(String name)
public final Metrics getMetrics ( String name )
Get some aggregated metrics for a Key. This data can be used to build dashboards.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = MetricsName . of ( "[PROJECT]" , "[KEY]" ). toString ();
Metrics response = recaptchaEnterpriseServiceClient . getMetrics ( name );
}
Parameter
Name
Description
name
String Required. The name of the requested metrics, in the format
projects/{project}/keys/{key}/metrics .
Returns
Type
Description
Metrics
getMetricsCallable()
public final UnaryCallable<GetMetricsRequest , Metrics > getMetricsCallable ()
Get some aggregated metrics for a Key. This data can be used to build dashboards.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
GetMetricsRequest request =
GetMetricsRequest . newBuilder ()
. setName ( MetricsName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. build ();
ApiFuture<Metrics> future =
recaptchaEnterpriseServiceClient . getMetricsCallable (). futureCall ( request );
// Do something.
Metrics response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetMetricsRequest , Metrics >
getSettings()
public final RecaptchaEnterpriseServiceSettings getSettings ()
Returns
Type
Description
RecaptchaEnterpriseServiceSettings
getStub()
public RecaptchaEnterpriseServiceStub getStub ()
Returns
Type
Description
RecaptchaEnterpriseServiceStub
isShutdown()
public boolean isShutdown ()
Returns
Type
Description
boolean
isTerminated()
public boolean isTerminated ()
Returns
Type
Description
boolean
listFirewallPolicies(ListFirewallPoliciesRequest request)
public final RecaptchaEnterpriseServiceClient . ListFirewallPoliciesPagedResponse listFirewallPolicies ( ListFirewallPoliciesRequest request )
Returns the list of all firewall policies that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListFirewallPoliciesRequest request =
ListFirewallPoliciesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( FirewallPolicy element :
recaptchaEnterpriseServiceClient . listFirewallPolicies ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListFirewallPoliciesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPagedResponse
listFirewallPolicies(ProjectName parent)
public final RecaptchaEnterpriseServiceClient . ListFirewallPoliciesPagedResponse listFirewallPolicies ( ProjectName parent )
Returns the list of all firewall policies that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
for ( FirewallPolicy element :
recaptchaEnterpriseServiceClient . listFirewallPolicies ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ProjectName Required. The name of the project to list the policies for, in the format
projects/{project} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPagedResponse
listFirewallPolicies(String parent)
public final RecaptchaEnterpriseServiceClient . ListFirewallPoliciesPagedResponse listFirewallPolicies ( String parent )
Returns the list of all firewall policies that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
for ( FirewallPolicy element :
recaptchaEnterpriseServiceClient . listFirewallPolicies ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the project to list the policies for, in the format
projects/{project} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPagedResponse
listFirewallPoliciesCallable()
public final UnaryCallable<ListFirewallPoliciesRequest , ListFirewallPoliciesResponse > listFirewallPoliciesCallable ()
Returns the list of all firewall policies that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListFirewallPoliciesRequest request =
ListFirewallPoliciesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListFirewallPoliciesResponse response =
recaptchaEnterpriseServiceClient . listFirewallPoliciesCallable (). call ( request );
for ( FirewallPolicy element : response . getFirewallPoliciesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListFirewallPoliciesRequest , ListFirewallPoliciesResponse >
listFirewallPoliciesPagedCallable()
public final UnaryCallable<ListFirewallPoliciesRequest , RecaptchaEnterpriseServiceClient . ListFirewallPoliciesPagedResponse > listFirewallPoliciesPagedCallable ()
Returns the list of all firewall policies that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListFirewallPoliciesRequest request =
ListFirewallPoliciesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<FirewallPolicy> future =
recaptchaEnterpriseServiceClient . listFirewallPoliciesPagedCallable (). futureCall ( request );
// Do something.
for ( FirewallPolicy element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListFirewallPoliciesRequest , ListFirewallPoliciesPagedResponse >
listIpOverrides(KeyName parent)
public final RecaptchaEnterpriseServiceClient . ListIpOverridesPagedResponse listIpOverrides ( KeyName parent )
Lists all IP overrides for a key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
KeyName parent = KeyName . of ( "[PROJECT]" , "[KEY]" );
for ( IpOverrideData element :
recaptchaEnterpriseServiceClient . listIpOverrides ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
KeyName Required. The parent key for which the IP overrides are listed, in the format
projects/{project}/keys/{key} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListIpOverridesPagedResponse
listIpOverrides(ListIpOverridesRequest request)
public final RecaptchaEnterpriseServiceClient . ListIpOverridesPagedResponse listIpOverrides ( ListIpOverridesRequest request )
Lists all IP overrides for a key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListIpOverridesRequest request =
ListIpOverridesRequest . newBuilder ()
. setParent ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( IpOverrideData element :
recaptchaEnterpriseServiceClient . listIpOverrides ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListIpOverridesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListIpOverridesPagedResponse
listIpOverrides(String parent)
public final RecaptchaEnterpriseServiceClient . ListIpOverridesPagedResponse listIpOverrides ( String parent )
Lists all IP overrides for a key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ();
for ( IpOverrideData element :
recaptchaEnterpriseServiceClient . listIpOverrides ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The parent key for which the IP overrides are listed, in the format
projects/{project}/keys/{key} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListIpOverridesPagedResponse
listIpOverridesCallable()
public final UnaryCallable<ListIpOverridesRequest , ListIpOverridesResponse > listIpOverridesCallable ()
Lists all IP overrides for a key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListIpOverridesRequest request =
ListIpOverridesRequest . newBuilder ()
. setParent ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListIpOverridesResponse response =
recaptchaEnterpriseServiceClient . listIpOverridesCallable (). call ( request );
for ( IpOverrideData element : response . getIpOverridesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListIpOverridesRequest , ListIpOverridesResponse >
listIpOverridesPagedCallable()
public final UnaryCallable<ListIpOverridesRequest , RecaptchaEnterpriseServiceClient . ListIpOverridesPagedResponse > listIpOverridesPagedCallable ()
Lists all IP overrides for a key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListIpOverridesRequest request =
ListIpOverridesRequest . newBuilder ()
. setParent ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<IpOverrideData> future =
recaptchaEnterpriseServiceClient . listIpOverridesPagedCallable (). futureCall ( request );
// Do something.
for ( IpOverrideData element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListIpOverridesRequest , ListIpOverridesPagedResponse >
listKeys(ListKeysRequest request)
public final RecaptchaEnterpriseServiceClient . ListKeysPagedResponse listKeys ( ListKeysRequest request )
Returns the list of all keys that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListKeysRequest request =
ListKeysRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Key element : recaptchaEnterpriseServiceClient . listKeys ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListKeysRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListKeysPagedResponse
listKeys(ProjectName parent)
public final RecaptchaEnterpriseServiceClient . ListKeysPagedResponse listKeys ( ProjectName parent )
Returns the list of all keys that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
for ( Key element : recaptchaEnterpriseServiceClient . listKeys ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ProjectName Required. The name of the project that contains the keys that is listed, in the
format projects/{project} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListKeysPagedResponse
listKeys(String parent)
public final RecaptchaEnterpriseServiceClient . ListKeysPagedResponse listKeys ( String parent )
Returns the list of all keys that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
for ( Key element : recaptchaEnterpriseServiceClient . listKeys ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the project that contains the keys that is listed, in the
format projects/{project} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListKeysPagedResponse
listKeysCallable()
public final UnaryCallable<ListKeysRequest , ListKeysResponse > listKeysCallable ()
Returns the list of all keys that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListKeysRequest request =
ListKeysRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListKeysResponse response =
recaptchaEnterpriseServiceClient . listKeysCallable (). call ( request );
for ( Key element : response . getKeysList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListKeysRequest , ListKeysResponse >
listKeysPagedCallable()
public final UnaryCallable<ListKeysRequest , RecaptchaEnterpriseServiceClient . ListKeysPagedResponse > listKeysPagedCallable ()
Returns the list of all keys that belong to a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListKeysRequest request =
ListKeysRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Key> future =
recaptchaEnterpriseServiceClient . listKeysPagedCallable (). futureCall ( request );
// Do something.
for ( Key element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListKeysRequest , ListKeysPagedResponse >
listRelatedAccountGroupMemberships(ListRelatedAccountGroupMembershipsRequest request)
public final RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupMembershipsPagedResponse listRelatedAccountGroupMemberships ( ListRelatedAccountGroupMembershipsRequest request )
Get memberships in a group of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListRelatedAccountGroupMembershipsRequest request =
ListRelatedAccountGroupMembershipsRequest . newBuilder ()
. setParent (
RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( RelatedAccountGroupMembership element :
recaptchaEnterpriseServiceClient
. listRelatedAccountGroupMemberships ( request )
. iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListRelatedAccountGroupMembershipsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupMembershipsPagedResponse
listRelatedAccountGroupMemberships(RelatedAccountGroupName parent)
public final RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupMembershipsPagedResponse listRelatedAccountGroupMemberships ( RelatedAccountGroupName parent )
Get memberships in a group of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
RelatedAccountGroupName parent =
RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" );
for ( RelatedAccountGroupMembership element :
recaptchaEnterpriseServiceClient
. listRelatedAccountGroupMemberships ( parent )
. iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RelatedAccountGroupName Required. The resource name for the related account group in the format
projects/{project}/relatedaccountgroups/{relatedaccountgroup} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupMembershipsPagedResponse
listRelatedAccountGroupMemberships(String parent)
public final RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupMembershipsPagedResponse listRelatedAccountGroupMemberships ( String parent )
Get memberships in a group of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ();
for ( RelatedAccountGroupMembership element :
recaptchaEnterpriseServiceClient
. listRelatedAccountGroupMemberships ( parent )
. iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The resource name for the related account group in the format
projects/{project}/relatedaccountgroups/{relatedaccountgroup} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupMembershipsPagedResponse
listRelatedAccountGroupMembershipsCallable()
public final UnaryCallable<ListRelatedAccountGroupMembershipsRequest , ListRelatedAccountGroupMembershipsResponse > listRelatedAccountGroupMembershipsCallable ()
Get memberships in a group of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListRelatedAccountGroupMembershipsRequest request =
ListRelatedAccountGroupMembershipsRequest . newBuilder ()
. setParent (
RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListRelatedAccountGroupMembershipsResponse response =
recaptchaEnterpriseServiceClient
. listRelatedAccountGroupMembershipsCallable ()
. call ( request );
for ( RelatedAccountGroupMembership element :
response . getRelatedAccountGroupMembershipsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListRelatedAccountGroupMembershipsRequest , ListRelatedAccountGroupMembershipsResponse >
listRelatedAccountGroupMembershipsPagedCallable()
public final UnaryCallable<ListRelatedAccountGroupMembershipsRequest , RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupMembershipsPagedResponse > listRelatedAccountGroupMembershipsPagedCallable ()
Get memberships in a group of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListRelatedAccountGroupMembershipsRequest request =
ListRelatedAccountGroupMembershipsRequest . newBuilder ()
. setParent (
RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<RelatedAccountGroupMembership> future =
recaptchaEnterpriseServiceClient
. listRelatedAccountGroupMembershipsPagedCallable ()
. futureCall ( request );
// Do something.
for ( RelatedAccountGroupMembership element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListRelatedAccountGroupMembershipsRequest , ListRelatedAccountGroupMembershipsPagedResponse >
listRelatedAccountGroups(ListRelatedAccountGroupsRequest request)
public final RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupsPagedResponse listRelatedAccountGroups ( ListRelatedAccountGroupsRequest request )
List groups of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListRelatedAccountGroupsRequest request =
ListRelatedAccountGroupsRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( RelatedAccountGroup element :
recaptchaEnterpriseServiceClient . listRelatedAccountGroups ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListRelatedAccountGroupsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupsPagedResponse
listRelatedAccountGroups(ProjectName parent)
public final RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupsPagedResponse listRelatedAccountGroups ( ProjectName parent )
List groups of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
for ( RelatedAccountGroup element :
recaptchaEnterpriseServiceClient . listRelatedAccountGroups ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ProjectName Required. The name of the project to list related account groups from, in the
format projects/{project} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupsPagedResponse
listRelatedAccountGroups(String parent)
public final RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupsPagedResponse listRelatedAccountGroups ( String parent )
List groups of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
for ( RelatedAccountGroup element :
recaptchaEnterpriseServiceClient . listRelatedAccountGroups ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the project to list related account groups from, in the
format projects/{project} .
Returns
Type
Description
RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupsPagedResponse
listRelatedAccountGroupsCallable()
public final UnaryCallable<ListRelatedAccountGroupsRequest , ListRelatedAccountGroupsResponse > listRelatedAccountGroupsCallable ()
List groups of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListRelatedAccountGroupsRequest request =
ListRelatedAccountGroupsRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListRelatedAccountGroupsResponse response =
recaptchaEnterpriseServiceClient . listRelatedAccountGroupsCallable (). call ( request );
for ( RelatedAccountGroup element : response . getRelatedAccountGroupsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListRelatedAccountGroupsRequest , ListRelatedAccountGroupsResponse >
listRelatedAccountGroupsPagedCallable()
public final UnaryCallable<ListRelatedAccountGroupsRequest , RecaptchaEnterpriseServiceClient . ListRelatedAccountGroupsPagedResponse > listRelatedAccountGroupsPagedCallable ()
List groups of related accounts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ListRelatedAccountGroupsRequest request =
ListRelatedAccountGroupsRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<RelatedAccountGroup> future =
recaptchaEnterpriseServiceClient
. listRelatedAccountGroupsPagedCallable ()
. futureCall ( request );
// Do something.
for ( RelatedAccountGroup element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListRelatedAccountGroupsRequest , ListRelatedAccountGroupsPagedResponse >
migrateKey(MigrateKeyRequest request)
public final Key migrateKey ( MigrateKeyRequest request )
Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can
be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must
be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the
reCAPTCHA Enterprise Admin IAM role in the destination project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
MigrateKeyRequest request =
MigrateKeyRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setSkipBillingCheck ( true )
. build ();
Key response = recaptchaEnterpriseServiceClient . migrateKey ( request );
}
Parameter
Name
Description
request
MigrateKeyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Key
migrateKeyCallable()
public final UnaryCallable<MigrateKeyRequest , Key > migrateKeyCallable ()
Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can
be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must
be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the
reCAPTCHA Enterprise Admin IAM role in the destination project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
MigrateKeyRequest request =
MigrateKeyRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setSkipBillingCheck ( true )
. build ();
ApiFuture<Key> future =
recaptchaEnterpriseServiceClient . migrateKeyCallable (). futureCall ( request );
// Do something.
Key response = future . get ();
}
Returns
Type
Description
UnaryCallable < MigrateKeyRequest , Key >
removeIpOverride(KeyName name, IpOverrideData ipOverrideData)
public final RemoveIpOverrideResponse removeIpOverride ( KeyName name , IpOverrideData ipOverrideData )
Removes an IP override from a key. The following restrictions hold:
If the IP isn't found in an existing IP override, a NOT_FOUND error is returned.
If the IP is found in an existing IP override, but the override type does not match, a
NOT_FOUND error is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
KeyName name = KeyName . of ( "[PROJECT]" , "[KEY]" );
IpOverrideData ipOverrideData = IpOverrideData . newBuilder (). build ();
RemoveIpOverrideResponse response =
recaptchaEnterpriseServiceClient . removeIpOverride ( name , ipOverrideData );
}
Parameters
Name
Description
name
KeyName Required. The name of the key from which the IP override is removed, in the format
projects/{project}/keys/{key} .
ipOverrideData
IpOverrideData Required. IP override to be removed from the key.
Returns
Type
Description
RemoveIpOverrideResponse
removeIpOverride(RemoveIpOverrideRequest request)
public final RemoveIpOverrideResponse removeIpOverride ( RemoveIpOverrideRequest request )
Removes an IP override from a key. The following restrictions hold:
If the IP isn't found in an existing IP override, a NOT_FOUND error is returned.
If the IP is found in an existing IP override, but the override type does not match, a
NOT_FOUND error is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
RemoveIpOverrideRequest request =
RemoveIpOverrideRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setIpOverrideData ( IpOverrideData . newBuilder (). build ())
. build ();
RemoveIpOverrideResponse response =
recaptchaEnterpriseServiceClient . removeIpOverride ( request );
}
Parameter
Name
Description
request
RemoveIpOverrideRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RemoveIpOverrideResponse
removeIpOverride(String name, IpOverrideData ipOverrideData)
public final RemoveIpOverrideResponse removeIpOverride ( String name , IpOverrideData ipOverrideData )
Removes an IP override from a key. The following restrictions hold:
If the IP isn't found in an existing IP override, a NOT_FOUND error is returned.
If the IP is found in an existing IP override, but the override type does not match, a
NOT_FOUND error is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String name = KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ();
IpOverrideData ipOverrideData = IpOverrideData . newBuilder (). build ();
RemoveIpOverrideResponse response =
recaptchaEnterpriseServiceClient . removeIpOverride ( name , ipOverrideData );
}
Parameters
Name
Description
name
String Required. The name of the key from which the IP override is removed, in the format
projects/{project}/keys/{key} .
ipOverrideData
IpOverrideData Required. IP override to be removed from the key.
Returns
Type
Description
RemoveIpOverrideResponse
removeIpOverrideCallable()
public final UnaryCallable<RemoveIpOverrideRequest , RemoveIpOverrideResponse > removeIpOverrideCallable ()
Removes an IP override from a key. The following restrictions hold:
If the IP isn't found in an existing IP override, a NOT_FOUND error is returned.
If the IP is found in an existing IP override, but the override type does not match, a
NOT_FOUND error is returned.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
RemoveIpOverrideRequest request =
RemoveIpOverrideRequest . newBuilder ()
. setName ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. setIpOverrideData ( IpOverrideData . newBuilder (). build ())
. build ();
ApiFuture<RemoveIpOverrideResponse> future =
recaptchaEnterpriseServiceClient . removeIpOverrideCallable (). futureCall ( request );
// Do something.
RemoveIpOverrideResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < RemoveIpOverrideRequest , RemoveIpOverrideResponse >
reorderFirewallPolicies(ProjectName parent, List<String> names)
public final ReorderFirewallPoliciesResponse reorderFirewallPolicies ( ProjectName parent , List<String> names )
Reorders all firewall policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
List<String> names = new ArrayList <> ();
ReorderFirewallPoliciesResponse response =
recaptchaEnterpriseServiceClient . reorderFirewallPolicies ( parent , names );
}
Parameters
Name
Description
parent
ProjectName Required. The name of the project to list the policies for, in the format
projects/{project} .
names
List < String > Required. A list containing all policy names, in the new order. Each name is in
the format projects/{project}/firewallpolicies/{firewallpolicy} .
Returns
Type
Description
ReorderFirewallPoliciesResponse
reorderFirewallPolicies(ReorderFirewallPoliciesRequest request)
public final ReorderFirewallPoliciesResponse reorderFirewallPolicies ( ReorderFirewallPoliciesRequest request )
Reorders all firewall policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ReorderFirewallPoliciesRequest request =
ReorderFirewallPoliciesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. addAllNames ( new ArrayList<String> ())
. build ();
ReorderFirewallPoliciesResponse response =
recaptchaEnterpriseServiceClient . reorderFirewallPolicies ( request );
}
Parameter
Name
Description
request
ReorderFirewallPoliciesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ReorderFirewallPoliciesResponse
reorderFirewallPolicies(String parent, List<String> names)
public final ReorderFirewallPoliciesResponse reorderFirewallPolicies ( String parent , List<String> names )
Reorders all firewall policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
List<String> names = new ArrayList <> ();
ReorderFirewallPoliciesResponse response =
recaptchaEnterpriseServiceClient . reorderFirewallPolicies ( parent , names );
}
Parameters
Name
Description
parent
String Required. The name of the project to list the policies for, in the format
projects/{project} .
names
List < String > Required. A list containing all policy names, in the new order. Each name is in
the format projects/{project}/firewallpolicies/{firewallpolicy} .
Returns
Type
Description
ReorderFirewallPoliciesResponse
reorderFirewallPoliciesCallable()
public final UnaryCallable<ReorderFirewallPoliciesRequest , ReorderFirewallPoliciesResponse > reorderFirewallPoliciesCallable ()
Reorders all firewall policies.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ReorderFirewallPoliciesRequest request =
ReorderFirewallPoliciesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. addAllNames ( new ArrayList<String> ())
. build ();
ApiFuture<ReorderFirewallPoliciesResponse> future =
recaptchaEnterpriseServiceClient . reorderFirewallPoliciesCallable (). futureCall ( request );
// Do something.
ReorderFirewallPoliciesResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < ReorderFirewallPoliciesRequest , ReorderFirewallPoliciesResponse >
retrieveLegacySecretKey(KeyName key)
public final RetrieveLegacySecretKeyResponse retrieveLegacySecretKey ( KeyName key )
Returns the secret key related to the specified public key. You must use the legacy secret key
only in a 3rd party integration with legacy reCAPTCHA.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
KeyName key = KeyName . of ( "[PROJECT]" , "[KEY]" );
RetrieveLegacySecretKeyResponse response =
recaptchaEnterpriseServiceClient . retrieveLegacySecretKey ( key );
}
Parameter
Name
Description
key
KeyName Required. The public key name linked to the requested secret key in the format
projects/{project}/keys/{key} .
Returns
Type
Description
RetrieveLegacySecretKeyResponse
retrieveLegacySecretKey(RetrieveLegacySecretKeyRequest request)
public final RetrieveLegacySecretKeyResponse retrieveLegacySecretKey ( RetrieveLegacySecretKeyRequest request )
Returns the secret key related to the specified public key. You must use the legacy secret key
only in a 3rd party integration with legacy reCAPTCHA.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
RetrieveLegacySecretKeyRequest request =
RetrieveLegacySecretKeyRequest . newBuilder ()
. setKey ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. build ();
RetrieveLegacySecretKeyResponse response =
recaptchaEnterpriseServiceClient . retrieveLegacySecretKey ( request );
}
Parameter
Name
Description
request
RetrieveLegacySecretKeyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RetrieveLegacySecretKeyResponse
retrieveLegacySecretKey(String key)
public final RetrieveLegacySecretKeyResponse retrieveLegacySecretKey ( String key )
Returns the secret key related to the specified public key. You must use the legacy secret key
only in a 3rd party integration with legacy reCAPTCHA.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String key = KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ();
RetrieveLegacySecretKeyResponse response =
recaptchaEnterpriseServiceClient . retrieveLegacySecretKey ( key );
}
Parameter
Name
Description
key
String Required. The public key name linked to the requested secret key in the format
projects/{project}/keys/{key} .
Returns
Type
Description
RetrieveLegacySecretKeyResponse
retrieveLegacySecretKeyCallable()
public final UnaryCallable<RetrieveLegacySecretKeyRequest , RetrieveLegacySecretKeyResponse > retrieveLegacySecretKeyCallable ()
Returns the secret key related to the specified public key. You must use the legacy secret key
only in a 3rd party integration with legacy reCAPTCHA.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
RetrieveLegacySecretKeyRequest request =
RetrieveLegacySecretKeyRequest . newBuilder ()
. setKey ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ())
. build ();
ApiFuture<RetrieveLegacySecretKeyResponse> future =
recaptchaEnterpriseServiceClient . retrieveLegacySecretKeyCallable (). futureCall ( request );
// Do something.
RetrieveLegacySecretKeyResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < RetrieveLegacySecretKeyRequest , RetrieveLegacySecretKeyResponse >
searchRelatedAccountGroupMemberships(ProjectName project, ByteString hashedAccountId)
public final RecaptchaEnterpriseServiceClient . SearchRelatedAccountGroupMembershipsPagedResponse searchRelatedAccountGroupMemberships ( ProjectName project , ByteString hashedAccountId )
Search group memberships related to a given account.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
ProjectName project = ProjectName . of ( "[PROJECT]" );
ByteString hashedAccountId = ByteString . EMPTY ;
for ( RelatedAccountGroupMembership element :
recaptchaEnterpriseServiceClient
. searchRelatedAccountGroupMemberships ( project , hashedAccountId )
. iterateAll ()) {
// doThingsWith(element);
}
}
Parameters
Name
Description
project
ProjectName Required. The name of the project to search related account group memberships
from. Specify the project name in the following format: projects/{project} .
hashedAccountId
ByteString Optional. Deprecated: use account_id instead. The unique stable hashed
account identifier used to search connections. The identifier should correspond to a
hashed_account_id provided in a previous CreateAssessment or AnnotateAssessment call.
Either hashed_account_id or account_id must be set, but not both.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.SearchRelatedAccountGroupMembershipsPagedResponse
searchRelatedAccountGroupMemberships(SearchRelatedAccountGroupMembershipsRequest request)
public final RecaptchaEnterpriseServiceClient . SearchRelatedAccountGroupMembershipsPagedResponse searchRelatedAccountGroupMemberships ( SearchRelatedAccountGroupMembershipsRequest request )
Search group memberships related to a given account.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
SearchRelatedAccountGroupMembershipsRequest request =
SearchRelatedAccountGroupMembershipsRequest . newBuilder ()
. setProject ( ProjectName . of ( "[PROJECT]" ). toString ())
. setAccountId ( "accountId-1827029976" )
. setHashedAccountId ( ByteString . EMPTY )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( RelatedAccountGroupMembership element :
recaptchaEnterpriseServiceClient
. searchRelatedAccountGroupMemberships ( request )
. iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
SearchRelatedAccountGroupMembershipsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.SearchRelatedAccountGroupMembershipsPagedResponse
searchRelatedAccountGroupMemberships(String project, ByteString hashedAccountId)
public final RecaptchaEnterpriseServiceClient . SearchRelatedAccountGroupMembershipsPagedResponse searchRelatedAccountGroupMemberships ( String project , ByteString hashedAccountId )
Search group memberships related to a given account.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
String project = ProjectName . of ( "[PROJECT]" ). toString ();
ByteString hashedAccountId = ByteString . EMPTY ;
for ( RelatedAccountGroupMembership element :
recaptchaEnterpriseServiceClient
. searchRelatedAccountGroupMemberships ( project , hashedAccountId )
. iterateAll ()) {
// doThingsWith(element);
}
}
Parameters
Name
Description
project
String Required. The name of the project to search related account group memberships
from. Specify the project name in the following format: projects/{project} .
hashedAccountId
ByteString Optional. Deprecated: use account_id instead. The unique stable hashed
account identifier used to search connections. The identifier should correspond to a
hashed_account_id provided in a previous CreateAssessment or AnnotateAssessment call.
Either hashed_account_id or account_id must be set, but not both.
Returns
Type
Description
RecaptchaEnterpriseServiceClient.SearchRelatedAccountGroupMembershipsPagedResponse
searchRelatedAccountGroupMembershipsCallable()
public final UnaryCallable<SearchRelatedAccountGroupMembershipsRequest , SearchRelatedAccountGroupMembershipsResponse > searchRelatedAccountGroupMembershipsCallable ()
Search group memberships related to a given account.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
SearchRelatedAccountGroupMembershipsRequest request =
SearchRelatedAccountGroupMembershipsRequest . newBuilder ()
. setProject ( ProjectName . of ( "[PROJECT]" ). toString ())
. setAccountId ( "accountId-1827029976" )
. setHashedAccountId ( ByteString . EMPTY )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
SearchRelatedAccountGroupMembershipsResponse response =
recaptchaEnterpriseServiceClient
. searchRelatedAccountGroupMembershipsCallable ()
. call ( request );
for ( RelatedAccountGroupMembership element :
response . getRelatedAccountGroupMembershipsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < SearchRelatedAccountGroupMembershipsRequest , SearchRelatedAccountGroupMembershipsResponse >
searchRelatedAccountGroupMembershipsPagedCallable()
public final UnaryCallable<SearchRelatedAccountGroupMembershipsRequest , RecaptchaEnterpriseServiceClient . SearchRelatedAccountGroupMembershipsPagedResponse > searchRelatedAccountGroupMembershipsPagedCallable ()
Search group memberships related to a given account.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
SearchRelatedAccountGroupMembershipsRequest request =
SearchRelatedAccountGroupMembershipsRequest . newBuilder ()
. setProject ( ProjectName . of ( "[PROJECT]" ). toString ())
. setAccountId ( "accountId-1827029976" )
. setHashedAccountId ( ByteString . EMPTY )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<RelatedAccountGroupMembership> future =
recaptchaEnterpriseServiceClient
. searchRelatedAccountGroupMembershipsPagedCallable ()
. futureCall ( request );
// Do something.
for ( RelatedAccountGroupMembership element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < SearchRelatedAccountGroupMembershipsRequest , SearchRelatedAccountGroupMembershipsPagedResponse >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
updateFirewallPolicy(FirewallPolicy firewallPolicy, FieldMask updateMask)
public final FirewallPolicy updateFirewallPolicy ( FirewallPolicy firewallPolicy , FieldMask updateMask )
Updates the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
FirewallPolicy firewallPolicy = FirewallPolicy . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
FirewallPolicy response =
recaptchaEnterpriseServiceClient . updateFirewallPolicy ( firewallPolicy , updateMask );
}
Parameters
Name
Description
firewallPolicy
FirewallPolicy Required. The policy to update.
updateMask
FieldMask Optional. The mask to control which fields of the policy get updated. If the
mask is not present, all fields are updated.
Returns
Type
Description
FirewallPolicy
updateFirewallPolicy(UpdateFirewallPolicyRequest request)
public final FirewallPolicy updateFirewallPolicy ( UpdateFirewallPolicyRequest request )
Updates the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
UpdateFirewallPolicyRequest request =
UpdateFirewallPolicyRequest . newBuilder ()
. setFirewallPolicy ( FirewallPolicy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
FirewallPolicy response = recaptchaEnterpriseServiceClient . updateFirewallPolicy ( request );
}
Parameter
Name
Description
request
UpdateFirewallPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
FirewallPolicy
updateFirewallPolicyCallable()
public final UnaryCallable<UpdateFirewallPolicyRequest , FirewallPolicy > updateFirewallPolicyCallable ()
Updates the specified firewall policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
UpdateFirewallPolicyRequest request =
UpdateFirewallPolicyRequest . newBuilder ()
. setFirewallPolicy ( FirewallPolicy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<FirewallPolicy> future =
recaptchaEnterpriseServiceClient . updateFirewallPolicyCallable (). futureCall ( request );
// Do something.
FirewallPolicy response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateFirewallPolicyRequest , FirewallPolicy >
updateKey(Key key, FieldMask updateMask)
public final Key updateKey ( Key key , FieldMask updateMask )
Updates the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
Key key = Key . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Key response = recaptchaEnterpriseServiceClient . updateKey ( key , updateMask );
}
Parameters
Name
Description
key
Key Required. The key to update.
updateMask
FieldMask Optional. The mask to control which fields of the key get updated. If the
mask is not present, all fields are updated.
Returns
Type
Description
Key
updateKey(UpdateKeyRequest request)
public final Key updateKey ( UpdateKeyRequest request )
Updates the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
UpdateKeyRequest request =
UpdateKeyRequest . newBuilder ()
. setKey ( Key . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Key response = recaptchaEnterpriseServiceClient . updateKey ( request );
}
Parameter
Name
Description
request
UpdateKeyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Key
updateKeyCallable()
public final UnaryCallable<UpdateKeyRequest , Key > updateKeyCallable ()
Updates the specified key.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient =
RecaptchaEnterpriseServiceClient . create ()) {
UpdateKeyRequest request =
UpdateKeyRequest . newBuilder ()
. setKey ( Key . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Key> future =
recaptchaEnterpriseServiceClient . updateKeyCallable (). futureCall ( request );
// Do something.
Key response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateKeyRequest , Key >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
