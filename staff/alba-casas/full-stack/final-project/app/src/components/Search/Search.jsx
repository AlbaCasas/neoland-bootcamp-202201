import { listjobs } from "../../api";
import {
  Checkbox,
  CheckboxStyled,
  Label,
  SearchForm,
  StyledButtonSearch,
  StyledInputSearch,
  StyledInputSearchBorder,
  StyledJobSearch,
  StyledSearch,
  Wrapper,
} from "./styled";

const Search = ({ role, setJobList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    listjobs(sessionStorage.token).then((jobs) => {
      const queryCompany = event.target[0].value;
      const queryLocation = event.target[1].value;
      const queryRole = event.target[2].value;
      const result = jobs.filter((job) => {
        if (queryCompany.length > 0) {
          return job.title.includes(queryCompany);
        } else if (queryLocation.length > 0) {
          return job.location.includes(queryLocation);
        } else if (queryRole.length > 0) {
          return job.role.includes(queryRole);
        } else {
          return setJobList;
        }
      });
      setJobList(result);
    });
  };
  return (
    <StyledSearch>
      <SearchForm onSubmit={handleSubmit}>
        <StyledInputSearchBorder name="company" placeholder="Search by title" />
        <StyledInputSearch name="locacion" placeholder="Location" />
        <StyledInputSearch name="role" placeholder="Role type" />
        <StyledButtonSearch>Find Job</StyledButtonSearch>
      </SearchForm>
      {role === "company" ? (
        <StyledJobSearch>
          <Checkbox>
            <Wrapper>
              <CheckboxStyled id="noCandidates" type="checkbox" />
              <Label htmlFor="noCandidates">Hide jobs with no candidates</Label>
            </Wrapper>
            <Wrapper>
              <CheckboxStyled id="jobs" type="checkbox" />
              <Label htmlFor="jobs">Show only my jobs</Label>
            </Wrapper>
          </Checkbox>
        </StyledJobSearch>
      ) : (
        false
      )}
    </StyledSearch>
  );
};

export default Search;
