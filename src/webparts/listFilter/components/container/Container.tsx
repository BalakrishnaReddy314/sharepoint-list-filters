import * as React from "react";
import { useState, useEffect } from "react";
// import { useSPContext } from "../GlobalSPContext";
import styles from "../ListFilter.module.scss";
import { IListInfo } from "@pnp/sp/lists";
import SPServices from "../../../../services/SPServices";
import QueryCommandBar from "../commandbar/QueryCommandBar";
import { ConstrainMode, DetailsList, DetailsListLayoutMode, IDetailsListStyles, SelectionMode, Selection } from "@fluentui/react/lib/DetailsList";
import { mergeStyleSets } from "@fluentui/react";

const gridStyles: Partial<IDetailsListStyles> = {
    root: {
        overflowX: 'auto',
        selectors: {
            '& [role=grid]': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
            },
        },
    },
    headerWrapper: {
        flex: '0 0 auto',
    },
    contentWrapper: {
        flex: '1 1 auto',
        overflow: 'auto',
    },
};

const classNames = mergeStyleSets({
    focusZone: {
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    selectionZone: {
      height: '100%',
      overflow: 'hidden',
    },
});

function Container(): JSX.Element {

    const Services = new SPServices();

    const [lists, setLists] = useState<IListInfo[]>([]);
    const [selectedItem, setSelectedItem] = useState<{title: string, id: string}>(null);

    useEffect(() => {
        Services.getAllLists().then((lists) => {
            setLists(lists);
        }).catch((error) => console.log(error));
    }, []);

    const selection = new Selection({onSelectionChanged: () => {
        console.log(selection.getSelection());
        const selectedItems = selection.getSelection() as IListInfo[];
        setSelectedItem({title: selectedItems[0].Title, id: selectedItems[0].Id});
    }});

    return (
        <>
            <QueryCommandBar />
            <div className={styles.container}>
                <div className={styles.listContainer}>
                    {
                        lists && lists.length > 0 && (
                            <DetailsList
                                items={lists}
                                columns={[{key: "Title", name: "Lists", fieldName: "Title", minWidth: 100, maxWidth: 200, isResizable: true}]}
                                selectionMode={SelectionMode.single}
                                layoutMode={DetailsListLayoutMode.fixedColumns}
                                constrainMode={ConstrainMode.unconstrained}
                                styles={gridStyles}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                selectionZoneProps={{className: classNames.selectionZone} as any}
                                selection={selection}
                            />
                        )
                    }
                </div>
                <div>
                    {selectedItem && selectedItem.title}
                </div>
            </div>
        </>
    );
}

export default Container;
