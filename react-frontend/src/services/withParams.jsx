import {useParams} from "react-router";

export const withParams = Component => props => {
  let params = useParams();
  return <Component  {...props} params={params} />;
}

