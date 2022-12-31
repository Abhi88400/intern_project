import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_SPACE_MISSION } from "./query";

export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class spaceXMissionService {
  async getSpaceMission(limit = 10) {
    try {
      const res = client.query({
        query: GET_SPACE_MISSION,
        variables: { limit },
      });
      console.log(res);
      return res;
    } catch (error) {
      throw error;
    }
  }
}
export default new spaceXMissionService();
