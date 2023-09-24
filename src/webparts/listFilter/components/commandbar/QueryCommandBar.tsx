import * as React from "react";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react/lib/CommandBar";

function QueryCommandBar(): JSX.Element {

    const commandBarItems: ICommandBarItemProps[]  = [
        {
            key: "newQuery",
            text: "New Query",
            iconProps: { iconName: "Add" }
        },
        {
            key: "executeQuery",
            text: "Execute Query",
            iconProps: { iconName: "Play" }
        },
        {
            key: "copyQuery",
            text: "Copy Query",
            iconProps: { iconName: "Copy" }
        },
        {
            key: "saveQuery",
            text: "Save Query",
            iconProps: { iconName: "Save" }
        }
    ];

    return (
        <CommandBar items={commandBarItems} />
    );
}

export default QueryCommandBar;
