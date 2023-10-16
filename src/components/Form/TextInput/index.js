import { forwardRef, useCallback } from "react";

const TextInput = forwardRef(function(props, ref) {
    const {name,value,onChange,label,labelFor, type="text", isRequired=false, id="",autoComplete="off",placeholder,error,className}=props;
    const labelComponent = useCallback((label, labelFor, isRequired) => (
        <label class="block text-500 text-sm font-medium mb-2" for={labelFor || ""}>
          {label} {isRequired && "*"}
        </label>
      ), []);
      const errorComponent = useCallback((msg = "") => (
        <span className="mt-1 text-sm text-red-600 dark:text-red-500">
          {msg}
        </span>
      ), []);
    return (
        <div>
              {label && labelComponent(label, labelFor, isRequired)}
         <input name={name} value={value} onChange={(e) => onChange(e)}
              type={type}
              id={id}
              ref={ref}
              autoComplete={autoComplete}
              className="appearance-none block w-full h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
              placeholder={placeholder + (isRequired ? "*" : "")} />
              {error && errorComponent(error)}
        </div>
    );
  })

export default TextInput;
