---
title: "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api
  title: "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
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
Package com.google.appengine.api (5.0.0)
Stay organized with collections
Save and categorize content based on your preferences.
Provides facilities for server lifecycle management, threading and namespaces/multitenancy. These
facilities, along with the services defined in subpackages, make up the Google App Engine API.
See Also: Multitenancy and the Namespaces Java API in the Google App Engine Developer's Guide .
Classes
LifecycleManager
NamespaceManager
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
ThreadManager
ThreadManager exposes a ThreadFactory that allows
App Engine applications to spawn new threads.
Refer to
this discussion of threads for drawbacks of thread usage and possible
alternatives.
Interfaces
EnvironmentProvider
An interface for providing environment variables.
LifecycleManager.ShutdownHook
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-28 UTC."],[],[]]
