import { forwardRef, useCallback } from "react";
import "./index.css";

const MobileInput = forwardRef(function(props, ref) {
    const {name="",value,onChange,label,labelFor, type="text", isRequired=false,placeholder="Enter Your Phone No.",error}=props;
    const labelComponent = useCallback((label, labelFor, isRequired) => (
        <label class="block text-500 text-sm font-medium mb-2" for={labelFor || ""}>
          {label} {isRequired && "*"}
        </label>
      ), []);
      const errorComponent = useCallback((msg = "") => (
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">{msg}.</p>
      ), []);
    return (
        <div>
              {label && labelComponent(label, labelFor, isRequired)}
              <div className='relative'>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              +91  &nbsp;|
            </div>            
            <input name={name} type={type} value={value} onChange={onChange}
            placeholder={placeholder} aria-describedby="mobile_number"
            className="appearance-none block w-full bg-gray-100 h-14 text-gray-700 border-gray-200 rounded py-3 pl-16 leading-tight focus:outline focus:bg-white focus:border-gray-500" />
            
          
          </div>
          {error && errorComponent(error)}
        </div>
    );
  })

export default MobileInput;
