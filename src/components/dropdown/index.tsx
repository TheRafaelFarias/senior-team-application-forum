import { defaultTheme } from "@/config/theme";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  DropdownContainer,
  DropdownDisplayOptions,
  DropdownOption,
  DropdownOptions,
  DropdownPlaceholder,
  DropdownSelectedOption,
} from "./styles";

interface DropdownProps<T extends string> {
  placeholder: string;
  secondaryPlaceholder?: string;
  data: Array<T>;
  onClickOption?: (value: T) => void;
}

const Dropdown = <T extends string>({
  placeholder,
  secondaryPlaceholder,
  data,
  onClickOption,
}: DropdownProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<T | undefined>(
    undefined
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownPlaceholder>Select a category</DropdownPlaceholder>
      <DropdownOptions>
        <DropdownSelectedOption
          isDropdownOpen={isDropdownOpen}
          hasSelectedValue={Boolean(selectedOption)}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedOption ?? secondaryPlaceholder ?? <span />}
          <FaChevronDown color={defaultTheme.quartiaryText} />
        </DropdownSelectedOption>
        {isDropdownOpen && (
          <DropdownDisplayOptions>
            {data?.length >= 1 &&
              data.map(
                (value, index) =>
                  selectedOption !== value && (
                    <DropdownOption
                      key={index}
                      onClick={() => {
                        setSelectedOption(value);
                        onClickOption && onClickOption(value);
                        setIsDropdownOpen(!isDropdownOpen);
                      }}
                    >
                      {value}
                    </DropdownOption>
                  )
              )}
          </DropdownDisplayOptions>
        )}
      </DropdownOptions>
    </DropdownContainer>
  );
};

export default Dropdown;
