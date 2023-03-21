import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faSearch } from "@fortawesome/pro-light-svg-icons";

export default function SearchToggle() {
  function toggleSearch() {
    console.log('hello');
  }

  return <button type='button' onClick={toggleSearch}>Search</button>;
}
