import React from "react";
import {
  ContainerSelect,
  ContainerSelectViewProfile,
  StyledDropdown,
} from "./styled";
import Text from "../Text";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const Dropdown = ({ isShown, closeDropdown }) => {
  const navigate = useNavigate();

  return !!isShown ? (
    <OutsideClickHandler onOutsideClick={closeDropdown}>
      <StyledDropdown>
        <ContainerSelect>
          <Text variant="captionBold">Profile</Text>
        </ContainerSelect>
        <ContainerSelectViewProfile>
          <Text variant="caption">View Profile</Text>
        </ContainerSelectViewProfile>
        <ContainerSelect>
          <Text
            cursorPointer="cursor-pointer"
            as="a"
            onClick={() => {
              delete sessionStorage.token;
              navigate("/login");
            }}
            variant="caption"
          >
            Log Out
          </Text>
        </ContainerSelect>
      </StyledDropdown>
    </OutsideClickHandler>
  ) : null;
};

export default Dropdown;
