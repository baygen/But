package com.buttons.services.location;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import com.buttons.services.location.LocationService;
import com.facebook.react.HeadlessJsTaskService;

public final class LocationReceiver extends BroadcastReceiver {
    public final void onReceive(Context context, Intent intent) {
        Intent recIntent = new Intent(context, LocationService.class);
        recIntent.putExtra("action", "Location receiver");

        context.startService(recIntent);
        HeadlessJsTaskService.acquireWakeLockNow(context);
    }
}