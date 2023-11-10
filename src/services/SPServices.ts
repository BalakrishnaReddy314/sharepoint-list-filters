import { getSP } from "../webparts/listFilter/config/pnpConfig";
import { SPFI } from "@pnp/sp";
import { IFieldInfo } from "@pnp/sp/fields";
import { IListInfo } from "@pnp/sp/lists";
import "@pnp/sp/lists";

export default class SPServices {
    private _sp: SPFI;

    /**
     *
     */
    constructor() {
        this._sp = getSP()
    }

    public getAllLists(): Promise<IListInfo[]> {
        return new Promise<IListInfo[]>((resolve, reject) => {
            this._sp.web.lists.filter("Hidden eq false").select("Title,ID")().then((lists: IListInfo[]) => {
                resolve(lists);
            }).catch((error: Error) => {
                console.log(error.message);
                resolve([]);
            })
        })
    }

    public getListFields(listName: string): Promise<IFieldInfo[]> {
        return new Promise<IFieldInfo[]>((resolve, reject) => {
            this._sp.web.lists.getByTitle(listName).expand("fields").fields.filter("(Hidden eq false) and (ReadOnlyField eq false) and (Title ne 'Content Type')")().then((fields) => {
                resolve(fields);
            }).catch((error: Error) => {
                console.error(error.message);
                resolve([]);
            });
        });
    }
}