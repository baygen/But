package com.buttons.services.call;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import android.app.ActivityManager;

import java.util.Date;
import java.util.List;
import com.buttons.services.call.CallService;
import com.facebook.react.HeadlessJsTaskService;

public final class CallReceiver extends BroadcastReceiver {

    public int times= 0;

    @Override
    public final void onReceive(Context context, Intent intent) {
        Intent recIntent = new Intent(context, CallService.class);
        times++;
        String packageName = context.getPackageName();

        recIntent.putExtra("action", intent.getAction());

        String text = "Intent  "+intent.getAction()+". Times: "+times+ ". Package Name " + packageName;
        Log.w("DEBUG RECEIVER", text);

        if(intent.getAction().equals("android.media.VOLUME_CHANGED_ACTION")) {
            int volume = (Integer) intent.getExtras().get("android.media.EXTRA_VOLUME_STREAM_VALUE");
//            int timeStamp = new Date();
            String data = String.valueOf(volume);
            Log.w("DEBUG RECEIVER", data);
            if(!isAppOnForeground(context)) {
                recIntent.putExtra("volume", data);
                System.out.println("App not in foreground");
                context.startService(recIntent);
                HeadlessJsTaskService.acquireWakeLockNow(context);
            } else {
                System.out.println("App IN foreground");
            }
        }
    }

    private boolean isAppOnForeground(Context context) {
        /**
         We need to check if app is in foreground otherwise the app will crash.
         http://stackoverflow.com/questions/8489993/check-android-application-is-in-foreground-or-not
         **/
        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningAppProcessInfo> appProcesses =
                activityManager.getRunningAppProcesses();
        if (appProcesses == null) {
            return false;
        }
        final String packageName = context.getPackageName();
        for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {
            if (appProcess.importance ==
                    ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND &&
                    appProcess.processName.equals(packageName)) {
                return true;
            }
        }
        return false;
    }

}