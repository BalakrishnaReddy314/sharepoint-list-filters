import * as React from "react";
import { useSPContext } from "../GlobalSPContext";
import { FieldPicker } from "@pnp/spfx-controls-react/lib/FieldPicker";

interface IQueryEditorProps {
    selectedList: {title: string, id: string};
}

function QueryEditor({ selectedList }: IQueryEditorProps): JSX.Element {
    const context = useSPContext();
    return (
       <>
        {
            selectedList && (
                <FieldPicker
                    context={context}
                    listId={selectedList.id}
                    includeHidden={false}
                    onSelectionChanged={(value) => console.log(value)}
                />
            )
        }
       </>
    );
}

export default QueryEditor;
