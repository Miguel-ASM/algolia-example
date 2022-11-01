import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  RangeInput,
} from "react-instantsearch-hooks-web";
import MyComponent from "./MyComponent";

const searchClient = algoliasearch(
);


const routing = {
  stateMapping:{
    stateToRoute(uiState){
      const indexUiState = uiState['test_index'];
      console.log(indexUiState.range);
      return {
        query: indexUiState.query,
        min_f: indexUiState?.range?.followers?.min,
        max_f: indexUiState?.range?.followers?.max,
      };
    },
    routeToState(routeState){
      // return {
      //   'test_index': {
      //     query: routeState.query,
      //     range: {
      //       followers: {min:routeState.min_f,max:routeState.max_f}
      //     }
      //   },
      // }
    }
  }
}

function App() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="test_index"
      routing={routing}
    >
      <SearchBox />
      <RangeInput attribute="followers" />
      <Hits
        hitComponent={({ hit: { name, company, followers } }) => (
          <h2>
            {name}: {company}. <u>{followers}</u>
          </h2>
        )}
      />
      {/* <MyComponent /> */}
    </InstantSearch>
  );
}

export default App;
