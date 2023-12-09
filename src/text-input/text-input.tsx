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

export const TextInput: TextInputInterface = props => {
  const { label, id, value, onChange, containerClassName, disabled } = props;

  return (
    <div className={containerClassName}>
      <label>{label}</label>
      <input
        type="text"
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange ? e => onChange(e.target.value, e) : undefined}
      />
    </div>
  );
};
