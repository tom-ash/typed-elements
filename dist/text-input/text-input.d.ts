import React, { ChangeEvent } from "react";
interface TextInputInterface {
    (props: {
        label: string | React.ReactElement;
        id?: string;
        value?: string;
        onChange?(newValue: string, changeEvent?: ChangeEvent): void;
        containerClassName?: string;
        disabled?: boolean;
    }): React.ReactElement;
}
export declare const TextInput: TextInputInterface;
export {};
//# sourceMappingURL=text-input.d.ts.map