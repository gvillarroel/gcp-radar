---
title: "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming
  title: "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
How-to stream live videos
Stay organized with collections
Save and categorize content based on your preferences.
Beta
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The Video Intelligence Streaming API supports standard live streaming protocols
like RTSP, RTMP, and HLS. The
AIStreamer
ingestion pipeline behaves as a streaming proxy, converting from live
streaming protocols to bidirectional streaming gRPC connection.
To support live streaming protocols, the Video Intelligence API uses the
GStreamer open media framework.
Step 1: Create a named pipe
A named pipe is created to communicate between GStreamer and the AIStreamer
ingestion proxy. The two processes are running inside the same Docker container.
path_to_pipe : file path in your local environment. For
example, /user/local/Desktop/
name_of_pipe : name of pipe you provide. For example, my-football-game
$ export PIPE_NAME = / path_to_pipe / name_of_pipe
$ mkfifo $PIPE_NAME
Example: / user /local/Desktop/my-football-game
Step 2: Run AIStreamer ingestion proxy
These C++ examples ,
available for your use, inclue a
single binary
that supports all features. To build the examples, follow these
build instructions .
The following example shows how to use the binary from the command line.
$ export GOOGLE_APPLICATION_CREDENTIALS = / path_to_credential /credential_json
$ export CONFIG = / path_to_config /config_json
$ export PIPE_NAME = / path_to_pipe / name_of_pipe
$ export TIMEOUT = 3600
$ ./streaming_client_main --alsologtostderr --endpoint "dns:///alpha-videointelligence.googleapis.com" \
--video_path = $PIPE_NAME --use_pipe = true --config = $CONFIG --timeout = $TIMEOUT
$GOOGLE_APPLICATION_CREDENTIALS specifies the file path of the
JSON file containing your service account key.
You can find an example configuration file— $CONFIG at github .
Make sure to set the correct timeout flag in the command line. If you
need to stream a 1 hour of video, timeout value should be at least 3600
seconds.
Step 3: Run GStreamer pipeline
GStreamer supports multiple live streaming protocols including but not limited
to:
HTTP Live Streaming (HLS)
Real-time Streaming Protocol (RTSP)
Real-time Protocol (RTP)
Real-time Messaging Protocol (RTMP)
WebRTC
Streaming from Webcam
The Video Intelligence API uses the GStreamer pipeline to convert from these
live streaming protocols to a decodable video stream, and writes the
stream into the named pipe created in Step 1.
The following examples demonstrate how to use the live streaming library
using HLS, RTSP and RTMP protocols.
HTTP Live Streaming (HLS)
$ export PIPE_NAME = / path_to_pipe / name_of_pipe
$ export HLS_SOURCE = http:// abc.def/playlist.m3u8
$ gst-launch-1.0 -v souphttpsrc location = $HLS_SOURCE ! hlsdemux ! filesink location = $PIPE_NAME
Real-time Streaming Protocol (RTSP)
$ export PIPE_NAME = / path_to_pipe / name_of_pipe
$ export RTSP_SOURCE = rtsp:// ip_addr:port/stream
$ gst-launch-1.0 -v rtspsrc location = $RTSP_SOURCE ! rtpjitterbuffer ! rtph264depay \
! h264parse ! flvmux ! filesink location = $PIPE_NAME
Note: You can choose any muxer that supports streaming (for example, flvmux or
mpegtsmux)
Real-time Message Protocol (RTMP)
$ export PIPE_NAME = / path_to_pipe / name_of_pipe
$ export RTMP_SOURCE = rtmp:// host/app/stream
$ gst-launch-1.0 -v rtmpsrc location = $RTMP_SOURCE ! flvdemux ! flvmux ! filesink location = $PIPE_NAME
Build instructions
The binary example
is built using Bazel . A
Docker example
that has all build dependencies configured is also provided. You can find the
compiled streaming_client_main binary in the $BIN_DIR directory of the
Docker image.
For more information on using Docker, see
Using Docker & Kubernetes .
Flow control
The Video Intelligence Streaming API server has inherent flow control.
In the following two cases, StreamingAnnotateVideoRequest
requests are rejected, and gRPC streaming connections are stopped immediately:
The AIStreamer ingestion client is sending requests to Google servers
too frequently.
The AIStreamer ingestion client is sending too much data to Google
servers (beyond 20Mbytes per second).
Visualizer
The visualizer code provided in AIStreamer should only be considered as a
code example. The visualizer may not be compatible with the user's local
environment. AIStreamer users should not rely on the client code to
visualize annotation results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
