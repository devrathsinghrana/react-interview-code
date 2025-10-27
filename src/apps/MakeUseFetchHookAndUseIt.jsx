import { useFetch } from "./useFetch";

const MakeUseFetchHookAndUseIt = () => {
  const URL = "https://fakestoreapi.com/products";
  const [isLoading, data, error] = useFetch(URL);
  console.log(isLoading, data, error);
  return (
    <div>
      makeUseFetchHookAndUseIt
      <br />
      {`

      MAKE USE OF BELOW CODE TO FETCH ANY KIND OF URL AND GET FETCHED DATA, LOADING STATUS AND ERROR STATUS
      
      const URL = "https://fakestoreapi.com/products";
      const [ isLoading, data, error ] = useFetch(URL);
      console.log(isLoading, data, error);

    `}
    </div>
  );
};

export default MakeUseFetchHookAndUseIt;
