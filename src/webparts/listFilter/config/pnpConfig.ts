import { WebPartContext } from "@microsoft/sp-webpart-base";
import { spfi, SPFI, SPFx } from "@pnp/sp";
import { LogLevel, PnPLogging } from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";
import "@pnp/sp/items/list";
import "@pnp/sp/fields";
import "@pnp/sp/views";

//eslint-disable-next-line no-var
let _sp: SPFI;

export const getSP = (context?: WebPartContext): SPFI => {
//eslint-disable-next-line eqeqeq
  if (context != null) {
    _sp = spfi().using(SPFx(context)).using(PnPLogging(LogLevel.Warning));
  }
  return _sp;
};