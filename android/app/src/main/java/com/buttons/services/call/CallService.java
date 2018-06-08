package com.buttons.services.call;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;


public class CallService extends HeadlessJsTaskService {
    @Nullable
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();
        Log.w("DEBUG CALL SERVICE:", "Service");

        return new HeadlessJsTaskConfig(
          "task",
          extras != null ? Arguments.fromBundle(extras) : null,
          500,
          false);
    }
}