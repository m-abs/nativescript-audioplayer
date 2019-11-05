/// <reference path="./native-definitions/android.d.ts" />

import { CastButtonCommon } from './cast-button-common';

export class CastButton extends CastButtonCommon {
  public createNativeView() {
    return new androidx.mediarouter.app.MediaRouteButton(this._context);
  }

  public initNativeView() {
    com.google.android.gms.cast.framework.CastButtonFactory.setUpMediaRouteButton(this._context, this.android);
  }
}
