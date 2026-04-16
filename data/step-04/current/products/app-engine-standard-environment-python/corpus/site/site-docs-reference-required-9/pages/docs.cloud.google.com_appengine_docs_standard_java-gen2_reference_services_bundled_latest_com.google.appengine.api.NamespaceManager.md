---
title: "Class NamespaceManager (5.0.0) \_|\_ App Engine standard environment \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.NamespaceManager
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.NamespaceManager
  title: "Class NamespaceManager (5.0.0) \_|\_ App Engine standard environment \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Reference
Send feedback
Class NamespaceManager (5.0.0)
Stay organized with collections
Save and categorize content based on your preferences.
public final class NamespaceManager
Provides functions for manipulating the current namespace used for
App Engine APIs.
The "current namespace" is the string that is returned by
#get() and used by a number of APIs including Datatore,
Memcache and Task Queue.
When a namespace aware class (e.g.,
com.google.appengine.api.datastore.Key ,
com.google.appengine.api.datastore.Query and
com.google.appengine.api.memcache.MemcacheService ) is constructed, it
determines which namespace will be used by calling
NamespaceManager#get() if it is otherwise unspecified. If
NamespaceManager#get() returns null, the current namespace is unset
and these APIs will use the empty ("") namespace in its place.
Example:
NamespaceManager . #set ("a-namespace");
MemcacheService memcache = MemcacheServiceFactory.getMemcacheService();
// Store record in namespace "a-namespace"
memcache.put("key1", "value1");
NamespaceManager . #set ("other-namespace");
// Store record in namespace "other-namespace"
memcache.put("key2", "value2");
MemcacheService boundMemcache =
MemcacheServiceFactory.getMemcacheService("specific-namespace");
NamespaceManager . #set ("whatever-namespace");
// The record is still stored in namespace "specific-namespace".
boundMemcache.put("key3", "value3");
MemcacheService memcache (in the above example) uses the current
namespace and key1 will be stored in namespace "a-namespace" ,
while key2 is stored in namespace "other-namespace" . It is
possible to override the current namespace and store data in specific
namespace. In the above example key3 is stored in namespace
"specific-namespace" .
The Task Queue com.google.appengine.api.taskqueue.Queue#add
methods will forward the NamespaceManager settings into the task
being added causing the added task to be executed with the same current
namespace as the task creator. The exception is that an unset current
namespace (i.e. NamespaceManager#get() returns null) will be
forwarded as an empty ("") namespace to the created task's requests.
See Also: Multitenancy and the Namespaces Java API. In Google App Engine Developer's Guide .
Inheritance
java.lang.Object >
NamespaceManager
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
get()
public static String get ()
Returns the current namespace setting or either null or "" (empty) if not set.
If the current namespace is unset, callers should assume
the use of the "" (empty) namespace in all namespace-aware services.
Returns
Type
Description
String
getGoogleAppsNamespace()
public static String getGoogleAppsNamespace ()
Returns the Google Apps domain referring this request or
otherwise the empty string ("").
Returns
Type
Description
String
set(String newNamespace)
public static void set ( String newNamespace )
Set the value used to initialize the namespace of namespace-aware services.
Parameter
Name
Description
newNamespace
String the new namespace.
validateNamespace(String namespace)
public static void validateNamespace ( String namespace )
Validate the format of a namespace string.
Parameter
Name
Description
namespace
String
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-28 UTC."],[],[]]
