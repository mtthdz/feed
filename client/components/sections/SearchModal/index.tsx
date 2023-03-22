import { SInput } from "@/components/styles/Input";
import * as SS from "./SearchModal.styles";
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  modalToggle: () => void;
}

export default function SearchModal({ modalToggle }: Props) {
  return (
    <SS.BlurredOverlay onClick={() => modalToggle()}>
      <SS.ModalForm
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => e.preventDefault()}
      >
        <label>
          <FontAwesomeIcon className="label-icon" icon={faSearch} />
          <SInput type="text" name="search" placeholder="search"/>
        </label>
      </SS.ModalForm>
    </SS.BlurredOverlay>
  )
}
