---
title: "Consolidate mobile notifications \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/consolidating-notifications
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/consolidating-notifications
  title: "Consolidate mobile notifications \_|\_ Navigation SDK for Android \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Resources
Send feedback
Consolidate mobile notifications
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Starting with Android API level 26, foreground services require persistent notifications to prevent resource overuse, potentially leading to notification clutter if not managed properly.
The Navigation SDK provides an API to manage persistent notifications, allowing consolidation and customization across the app and SDK.
Developers can use the ForegroundServiceManager to share a notification across services or implement a custom NotificationContentProvider for full control over the notification content.
There are three main usage scenarios: hiding other app notifications behind the Navigation SDK notification, setting custom default text, or taking full control of notification rendering.
While the Navigation SDK offers flexibility in notification management, developers should initialize the manager early, handle potential exceptions, and be aware of limitations in styling and turn-by-turn information retrieval.
Beginning with Android API level 26, persistent notifications are required for
foreground services. This requirement is meant to prevent you from hiding
services that might put excessive demands on system resources, including the
battery in particular. This requirement creates a potential problem: If an app
with multiple foreground services doesn't carefully manage the notification so
that it is shared across all services, then there can be multiple persistent
undismissable notifications, leading to unwelcomed clutter in the active list of
notifications.
This problem becomes more challenging when you use SDKs such as the Navigation
SDK, that run foreground services independent of the app that have their
own independent persistent notifications, making them difficult to consolidate.
To address these issues, the Navigation SDK v1.11 introduced a simple API to
help manage persistent notifications across the app, including within the SDK.
Components
The foreground service manager provides a wrapper around the Android foreground
service class and the persistent notification class. This wrapper's main
function is to enforce reuse of the Notification ID so that the notification is
shared across all foreground services using the manager.
The Navigation SDK contains static methods for initializing and getting the
ForegroundServiceManager singleton. This singleton can only be initialized
once in the lifetime of the Navigation SDK. Consequently, if you use one of the
initialization calls ( initForegroundServiceManagerMessageAndIntent() or
initForegroundServiceManagerProvider() ), then you should surround
it with a try-catch block in case that path is reentered. The Navigation SDK
throws a runtime exception if you call either method more than once unless you
first clear all references to the ForegroundServiceManager and call
clearForegroundServiceManager() before each subsequent call.
The four parameters of initForegroundServiceManagerMessageAndIntent() are
application , notificationId , defaultMessage , and resumeIntent . If the
final three parameters are null, then the notification is the standard
Navigation SDK notification. It's still possible to hide other foreground
services in the app behind this notification. The notificationId parameter
specifies the notification ID that should be used for the notification. If it is
null, then an arbitrary value is used. You can set it explicitly to work around
conflicts with other notifications, such as those from another SDK. The
defaultMessage is a string that is displayed when the system is not
navigating. The resumeIntent is an intent that is fired when the notification
is clicked on. If the resumeIntent is null, then clicks on the notification
are ignored.
The three parameters of initForegroundServiceManagerProvider() are
application , notificationId , and notificationProvider . If the final
two parameters are null, then the notification is the standard Navigation SDK
notification. The notificationId parameter specifies the notification ID that
should be used for the notification. If it is null, then an arbitrary value is
used. You can set it explicitly to work around conflicts with other
notifications, such as those from another SDK. If the notificationProvider is
set, then the provider is always responsible for
generating the notification to be rendered.
The Navigation SDK getForegroundServiceManager() method returns the
foreground service manager singleton. If you haven't generated one yet, then
it's the equivalent of calling initForegroundServiceManagerMessageAndIntent()
with null parameters for the notificationId , defaultMessage , and
resumeIntent .
The ForegroundServiceManager has three simple methods. The first two are for
moving a service into and out of the foreground, and are typically called from
within the service that has been created. Using these methods ensures that the
services are associated with the shared persistent notification. The final
method, updateNotification() , flags the manager that the notification has
changed, and should be re-rendered.
If you need complete control of the shared persistent notification, then
the API provides a NotificationContentProvider interface for defining a
notification provider, which contains a single method for getting a notification
with the current content. It also provides a base class, which you can
optionally use to help define the provider. One of the base class's main
purposes is that it provides a way to call updateNotification() without the
need to access the ForegroundServiceManager . If you use an instance of the
notification provider to receive new notification messages, you can call this
internal method directly to render the message in the notification.
Usage scenarios
This section details the usage scenarios for using shared persistent
notifications.
Hide persistent notifications of other app foreground services
The easiest scenario is to preserve current behavior, and only use the
persistent notification for rendering Navigation SDK information. Other services
can hide behind this notification by using the foreground service manager
startForeground() and stopForeground() methods.
Hide persistent notifications of other app foreground services, but set
default text shown when not navigating
The second easiest scenario is to preserve current behavior, and only use
the persistent notification for rendering Navigation SDK information, except
when the system is not navigating. When the system is not navigating, the
string provided to initForegroundServiceManagerMessageAndIntent()
is displayed rather than the default Navigation SDK string that mentions
"Google Maps". You can also use this call to set the resume intent that
fires when the notification is clicked.
Take full control of the rendering of the persistent notification
The final scenario requires defining and creating a notification provider
and passing it to the ForegroundServiceManager using
initForegroundServiceManagerProvider() . This option gives you
full control of what is rendered in the notification, but it also
disconnects the Navigation SDK notification information from the
notification, thereby removing the helpful turn-by-turn prompts shown in the
notification. Google doesn't provide a simple means for retrieving this
information and inserting it into the notification.
Example notification provider
The following code example demonstrates how to create and return notifications
using a simple notification content provider.
public class NotificationContentProviderImpl
extends NotificationContentProviderBase
implements NotificationContentProvider {
private String channelId ;
private Context context ;
private String message ;
/** Constructor */
public NotificationContentProviderImpl ( Application application ) {
super ( application );
message = "-- uninitialized --" ;
channelId = null ;
this . context = application ;
}
/**
* Sets message to display in the notification. Calls updateNotification
* to display the message immediately.
*
* @param msg The message to display in the notification.
*/
public void setMessage ( String msg ) {
message = msg ;
updateNotification ();
}
/**
* Returns the notification as it should be rendered.
*/
@Override
public Notification getNotification () {
Notification notification ;
if ( android . os . Build . VERSION . SDK_INT > = android . os . Build . VERSION_CODES . O ) {
Spanned styledText = Html . fromHtml ( message , FROM_HTML_MODE_LEGACY );
String channelId = getChannelId ( context );
notification =
new Notification . Builder ( context , channelId )
. setContentTitle ( "Notifications Demo" )
. setStyle ( new Notification . BigTextStyle ()
. bigText ( styledText ))
. setSmallIcon ( R . drawable . ic_navigation_white_24dp )
. setTicker ( "ticker text" )
. build ();
} else {
notification = new Notification . Builder ( context )
. setContentTitle ( "Notification Demo" )
. setContentText ( "testing non-O text" )
. build ();
}
return notification ;
}
// Helper to set up a channel ID.
private String getChannelId ( Context context ) {
if ( android . os . Build . VERSION . SDK_INT > = android . os . Build . VERSION_CODES . O ) {
if ( channelId == null ) {
NotificationManager notificationManager =
( NotificationManager ) context . getSystemService ( Context . NOTIFICATION_SERVICE );
NotificationChannel channel = new NotificationChannel (
"default" , "navigation" , NotificationManager . IMPORTANCE_DEFAULT );
channel . setDescription ( "For navigation persistent notification." );
notificationManager . createNotificationChannel ( channel );
channelId = channel . getId ();
}
return channelId ;
} else {
return "" ;
}
}
}
After you've created NotificationContentProviderImpl , you connect the
Navigation SDK to it using the following code:
ForegroundServiceManager f = NavigationApi . getForegroundServiceManager ( getApplication ());
mNotification = new NotificationContentProviderImpl ( getApplication ());
NavigationApi . clearForegroundServiceManager ();
NavigationApi . initForegroundServiceManagerProvider ( getApplication (), null , mNotification );
Caveats and future plans
Be sure to call initForegroundServiceManagerMessageAndIntent() or initForegroundServiceManagerProvider() early so that
the expected usage scenario is well-defined. You must call this method
before you create a new Navigator.
Be sure to catch exceptions from calls to
initForegroundServiceManagerMessageAndIntent() or initForegroundServiceManagerProvider() in case the code pathway is
entered more than once. In the Navigation SDK v2.0, calling this method
multiple times throws a checked exception rather than a runtime exception.
Google still might have work to do to get consistent styling over the
lifetime of the notification that matches the header styling.
When you define a notification provider, you can control heads-up behavior
with the priority.
Google does not provide a simple means for retrieving turn-by-turn
information that a notification provider might insert into the notification.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
