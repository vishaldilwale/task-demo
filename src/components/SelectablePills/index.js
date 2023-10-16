import { getImagePath } from "../../utils";

const SelectablePills = (props)=> {
    const {options,handleSelect,selected,isMultiSelect=false,isInline=false, defaultIcon="checkIcon.svg",selectedIcon="checkIconActive.svg"}=props;

  const wrapperClasses = isInline ? "flex flex-2 flex-wrap flex-auto -ml-4" : "flex flex-col flex-wrap flex-grow -ml-4";

    return (
              <div className={wrapperClasses}>
                {options?.map((option) => {
                  const isSelected = isMultiSelect ? selected?.includes(option?.value) : selected === option?.value;
                  return (
                    <div className={`ml-4 h-[53px] flex flex-grow items-center my-2 p-5 bg-gray-100 cursor-pointer ${isSelected ? `outline outline-1 outline-blue-800 rounded` : ``}`} onClick={() => handleSelect(option)}>
                      <img className="h-[10px] w-[13px] brightness-100" alt="" src={getImagePath(isSelected ? selectedIcon : defaultIcon)} />
                      <h6 className={`ml-3 mr-2 text-[16px] font-medium ${isSelected ? `text-blue-800` : `text-gray-400`}`}>{option?.label}</h6>
                    </div>
                  )
                })}
              </div>
    );
  }

export default SelectablePills;
